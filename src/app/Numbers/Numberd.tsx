import { useTranslations } from "next-intl"
import './car.css'


export default  function Numbers() {
  const t = useTranslations('newPage')
    return (
      <section className="proof-section">
        <div className="modern-container">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="modern-section-title different">
              {t("Louez votre voiture et transformez votre manière de gagner de l'argent")}
            </h2>
            <p className="modern-section-copy">
{t("De plus en plus d'hôtes trouvent une véritable satisfaction à louer leur voiture et à générer des revenus passifs C'est une manière simple et sûre d'augmenter votre revenu, sans effort quotidien")}            </p>
          </div>
          <div className="host-stats-grid mt-14 lg:grid-cols-3">
            <div className="host-stat-card">
              <p className="host-stat-kicker text-gray-900">400k</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-black tracking-tight text-gray-900">{t("Hôtes satisfaits dans le monde entier")}</p>
                <p className="mt-3 text-base/7 text-gray-600">{t("Rejoignez des milliers d'hôtes qui partagent leur véhicule pour générer des revenus supplémentaires de manière flexible et rentable")}</p>
              </div>
            </div>
            <div className="host-stat-card dark">
              <p className="host-stat-kicker">{t("Revenu supplémentaire")}</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-black tracking-tight text-gray-900">
                  {t("Découvrez la satisfaction de recevoir des paiements réguliers en louant votre voiture pendant vos moments de non-utilisation")}
                </p>
                <p className="mt-2 text-base/7 text-gray-600">
                  {t("Maximisez vos revenus en mettant votre véhicule à la disposition des autres tout en restant maître de votre emploi du temps")}
                </p>
              </div>
            </div>
            <div className="host-stat-card green">
              <p className="host-stat-kicker">{t("Facilité et Flexibilité")}</p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-black tracking-tight">{t("Une expérience simple, sans stress")}</p>
                <p className="mt-2 text-base/7 text-black/75">
                  {t("Profitez d'une plateforme intuitive qui vous permet de gérer la location de votre voiture facilement, tout en restant flexible quant à vos disponibilités")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
