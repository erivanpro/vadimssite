import { useTranslations } from "next-intl";

const posts = [
  {
    id: 1,
    titleKey: "boostConversion",
    href: "https://www.instagram.com",
    descriptionKey: "boostConversionDescription",
    imageUrl:
      "https://images.unsplash.com/photo-1585011664463-faa17bae1d35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3RyaWMlMjBjYXJ8ZW58MHx8MHx8fDA%3D",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { titleKey: "marketing", href: "https://www.instagram.com" },
    author: {
      nameKey: "michaelFoster",
      roleKey: "coFounder",
      href: "https://www.instagram.com",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    titleKey: "buildBrandOnline",
    href: "https://www.instagram.com",
    descriptionKey: "buildBrandOnlineDescription",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1715639312136-56a01f236440?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWMlMjBjYXJ8ZW58MHx8MHx8fDA%3D",
    date: "Jul 10, 2021",
    datetime: "2021-07-10",
    category: { titleKey: "branding", href: "https://www.instagram.com" },
    author: {
      nameKey: "lisaWang",
      roleKey: "brandStrategist",
      href: "https://www.instagram.com",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1715639312136-56a01f236440?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWMlMjBjYXJ8ZW58MHx8MHx8fDA%3D",
    },
  },
  {
    id: 3,
    titleKey: "futureDigitalMarketing",
    href: "https://www.instagram.com",
    descriptionKey: "futureDigitalMarketingDescription",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
    date: "Feb 22, 2022",
    datetime: "2022-02-22",
    category: {
      titleKey: "digitalMarketing",
      href: "https://www.instagram.com",
    },
    author: {
      nameKey: "jamesKim",
      roleKey: "digitalMarketingExpert",
      href: "https://www.instagram.com",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function BlogSection() {
  const t = useTranslations("posts");

  return (
    <section className="blog-section">
      <div className="modern-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="different modern-section-title">
            {t("fromBlog")}
          </h2>
          <p className="modern-section-copy">{t("learnToGrow")}</p>
        </div>
        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="article-card flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  alt=""
                  src={post.imageUrl}
                  className="aspect-video w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="article-card-body max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-[#f4f6f2] px-3 py-1.5 font-bold text-gray-700 hover:bg-gray-100"
                  >
                    {t(post.category.titleKey)}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-xl/7 font-black text-gray-900 group-hover:text-gray-700">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {t(post.titleKey)}
                    </a>
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm/6 text-gray-600">
                    {t(post.descriptionKey)}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    alt=""
                    src={post.author.imageUrl}
                    className="size-10 rounded-full bg-gray-100"
                  />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {t(post.author.nameKey)}
                      </a>
                    </p>
                    <p className="text-gray-600">{t(post.author.roleKey)}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
