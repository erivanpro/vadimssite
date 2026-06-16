import { useTranslations } from "next-intl";
import "./car.css";
export default function Team() {
  const t = useTranslations("homePage");
  return (
    <section className="team-section">
      <div className="team-media">
        <img
          alt=""
          src="https://plus.unsplash.com/premium_photo-1677529497048-2bf5899e68de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D"
        />
      </div>
      <div className="team-copy">
          <h2 className="text-base/7 different font-black text-[#2f8d61]">
            {t("Support primé")}
          </h2>
          <p className="different modern-section-title mt-3">
            {t("Nous sommes là pour vous aider")}
          </p>

          <div className="mt-8">
            <a
              href="/aide"
              className="modern-button modern-button-primary"
            >
              {t("Visitez le centre d'aide")}
            </a>
          </div>
      </div>
    </section>
  );
}
