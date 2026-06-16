import React, { useState, useEffect } from "react";
import { useLocale } from "next-intl";

const carData = [
  {
    type: "Citadine",
    img: "https://images.ctfassets.net/j93547rbfd6s/4hz5z745mr71nCIRUSBfbl/cc3133b5bfe3e6328cb0ab15e6e00e8f/voitures-citadines.png",
  },
  {
    type: "Utilitaire",
    img: "https://zisway.fr/wp-content/uploads/2021/04/utilitaire-petit-volume-pro-particuliers.jpeg",
  },
  {
    type: "Monospace",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsaGbzhqcn_IxuhkuVoTAUFB8nqNR8xwkww&s",
  },
  {
    type: "SUV",
    img: "https://images.ctfassets.net/j93547rbfd6s/WaN0VSc1R1hIRzFtgWgCP/554e2c8e0804b9b181ab44983d03b0b1/voitures.png",
  },
];

type CardProps = {
  type: string;
  img: string;
  width: string;
};

const Card: React.FC<CardProps> = ({ type, img, width }) => (
  <div
    className="fleet-type-card"
    style={{
      width,
    }}
  >
    <div className="fleet-type-media">
      <img
        src={img}
        alt={type}
      />
    </div>
    <div className="fleet-type-meta">
      <div className="fleet-type-label">
        {type}
      </div>
    </div>
  </div>
);

const CarTypesComponent: React.FC = () => {
  const locale = useLocale();
  const isFrench = locale.startsWith("fr");

  const [cardWidth, setCardWidth] = useState<string>("180px");
  const [flexWrap, setFlexWrap] = useState<"nowrap" | "wrap">("nowrap");
  const [justifyContent, setJustifyContent] = useState<
    "space-evenly" | "space-around" | "center"
  >("space-evenly");

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      if (w < 480) {
        setCardWidth("100%");
        setFlexWrap("wrap");
        setJustifyContent("center");
      } else if (w < 768) {
        setCardWidth("45%");
        setFlexWrap("wrap");
        setJustifyContent("space-around");
      } else if (w < 1024) {
        setCardWidth("30%");
        setFlexWrap("wrap");
        setJustifyContent("space-around");
      } else {
        setCardWidth("180px");
        setFlexWrap("nowrap");
        setJustifyContent("space-evenly");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isFrench) return null;

  return (
    <div
      style={{
        maxWidth: 1120,
        margin: "auto",
        padding: "64px 20px 28px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: 34,
          fontSize: 42,
          lineHeight: 1.08,
          fontWeight: 900,
          color: "#142019",
          letterSpacing: 0,
        }}
      >
        Des voitures adaptées à vos besoins
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent,
          gap: 20,
          flexWrap,
        }}
      >
        {carData.map(({ type, img }) => (
          <Card key={type} type={type} img={img} width={cardWidth} />
        ))}
      </div>
    </div>
  );
};

export default CarTypesComponent;
