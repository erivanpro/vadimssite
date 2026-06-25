import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();

const assets = [
  {
    input: "app/images/all/house/Property-9da05efb33a6c99b4598f0f440e56587-115226425.jpg",
    output: "app/images/optimized/house/house-hero.jpg",
    width: 2200,
  },
  {
    input: "app/images/all/house/Property-23b94cc6389cf08f88a7c66d1b88d70f-115226425.jpg",
    output: "app/images/optimized/house/house-pool.jpg",
    width: 2200,
  },
  {
    input: "app/images/all/house/Property-388a03b379d5eb8d1d5920b5047321bd-115226425.jpg",
    output: "app/images/optimized/house/house-architecture.jpg",
    width: 2000,
  },
  {
    input: "app/images/all/house/Property-d204105d1857367c311a8aed352a8e22-115226425.jpg",
    output: "app/images/optimized/house/house-living.jpg",
    width: 2000,
  },
  {
    input: "app/images/all/house/Property-2f3ef5120a06a742fc7afbb5bcb120cd-115226425.jpg",
    output: "app/images/optimized/house/house-wellness.jpg",
    width: 1900,
  },
  {
    input: "app/images/all/house/Property-b6f2522bc501a4bf9d34c2db2223953b-115226425.jpg",
    output: "app/images/optimized/house/house-entertainment.jpg",
    width: 1900,
  },
  {
    input: "app/images/all/house/Property-53222ac9eada15026859fd867eb24b31-115226425.jpg",
    output: "app/images/optimized/house/house-outdoor-dining.jpg",
    width: 1800,
  },
  {
    input: "app/images/all/house/Property-8a957c429dd83660176f9a9127365ef1-115226425.jpg",
    output: "app/images/optimized/house/house-aerial.jpg",
    width: 1900,
  },
  {
    input: "app/images/all/house/Property-209e0db264dcbf76f6f4ae50e32ca521-115226425.jpg",
    output: "app/images/optimized/house/house-wardrobe.jpg",
    width: 1700,
  },
  {
    input: "app/images/all/house/Property-6fab4b34fa6f2194e95202ade1762c23-115226425.jpg",
    output: "app/images/optimized/house/house-terrace.jpg",
    width: 1800,
  },
  {
    input: "app/images/all/yatch/Sans titre.png",
    output: "app/images/optimized/yacht/yacht-hero.jpg",
    width: 3200,
    saturation: 1.04,
  },
  {
    input: "app/images/all/yatch/1.jpg",
    output: "app/images/optimized/yacht/yacht-jacuzzi.jpg",
    width: 1180,
    saturation: 1.1,
  },
  {
    input: "app/images/all/yatch/2.jpg",
    output: "app/images/optimized/yacht/yacht-sunset.jpg",
    width: 1180,
    saturation: 1.08,
  },
  {
    input: "app/images/all/yatch/3.jpg",
    output: "app/images/optimized/yacht/yacht-dining-deck.jpg",
    width: 1180,
    saturation: 1.08,
  },
  {
    input: "app/images/all/yatch/4.jpg",
    output: "app/images/optimized/yacht/yacht-aerial.jpg",
    width: 1180,
    saturation: 1.08,
  },
  {
    input: "app/images/all/yatch/5.jpg",
    output: "app/images/optimized/yacht/yacht-salon.jpg",
    width: 1180,
    saturation: 1.06,
  },
  {
    input: "app/images/all/yatch/9.jpg",
    output: "app/images/optimized/yacht/yacht-guest-dining.jpg",
    width: 1180,
    saturation: 1.06,
  },
  {
    input: "app/images/all/car/car20.jpg",
    output: "app/images/optimized/car/car-hero.jpg",
    width: 2600,
    saturation: 1.02,
  },
  {
    input: "app/images/all/car/car19.jpg",
    output: "app/images/optimized/car/car-front.jpg",
    width: 2400,
    saturation: 1.02,
  },
  {
    input: "app/images/all/car/car13.jpg",
    output: "app/images/optimized/car/car-cockpit.jpg",
    width: 1900,
    saturation: 1.04,
  },
  {
    input: "app/images/all/car/car14.jpg",
    output: "app/images/optimized/car/car-rear-cabin.jpg",
    width: 1300,
    saturation: 1.04,
  },
  {
    input: "app/images/all/car/car4.jpg",
    output: "app/images/optimized/car/car-seat.jpg",
    width: 2200,
    saturation: 1.03,
  },
  {
    input: "app/images/all/car/car10.jpg",
    output: "app/images/optimized/car/car-technology.jpg",
    width: 980,
    saturation: 1.04,
  },
  {
    input: "app/images/all/car/car17.jpg",
    output: "app/images/optimized/car/car-arrival.jpg",
    width: 2300,
    saturation: 1.03,
  },
  {
    input: "app/images/all/car/car1.jpg",
    output: "app/images/optimized/car/car-exterior.jpg",
    width: 1400,
    saturation: 1.03,
  },
];

async function optimizeAsset(asset) {
  const input = path.join(root, asset.input);
  const output = path.join(root, asset.output);

  await fs.mkdir(path.dirname(output), { recursive: true });

  const image = sharp(input, { failOn: "none" })
    .rotate()
    .resize({
      width: asset.width,
      withoutEnlargement: false,
      kernel: sharp.kernel.lanczos3,
    })
    .modulate({
      brightness: asset.brightness ?? 1.015,
      saturation: asset.saturation ?? 1.06,
    })
    .sharpen({
      sigma: asset.sigma ?? 1,
      m1: asset.m1 ?? 1.25,
      m2: asset.m2 ?? 0.7,
      x1: asset.x1 ?? 2,
      y2: asset.y2 ?? 10,
      y3: asset.y3 ?? 20,
    })
    .jpeg({
      quality: asset.quality ?? 92,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
    });

  const info = await image.toFile(output);

  return {
    input: asset.input,
    output: asset.output,
    width: info.width,
    height: info.height,
    sizeKb: Math.round(info.size / 1024),
  };
}

const results = await Promise.all(assets.map(optimizeAsset));

for (const result of results) {
  console.log(
    `${result.output} ${result.width}x${result.height} ${result.sizeKb}KB`,
  );
}
