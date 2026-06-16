import CarTypesComponent from "../rent/InfiniteBanner";
import RentComponent from "../rent/rent";

export default function Brands() {
    return (
       <><RentComponent />
       <CarTypesComponent />
      
       <section className="brand-section">
        <div className="modern-container">
          <div className="brand-logo-grid">
            <div className="brand-logo-card">
            <img
              alt="Tesla"
              src="data:image/png;base64,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"
              width={158}
              height={48}
              />
            </div>
            <div className="brand-logo-card">
            <img
              alt="BMW"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/200px-BMW.svg.png"
              width={158}
              height={48}
              />
            </div>
            <div className="brand-logo-card">
            <img
              alt="Mercedes-Benz"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png"
              width={158}
              height={48}
              />
            </div>
            <div className="brand-logo-card">
            <img
              alt="Audi"
              src="https://upload.wikimedia.org/wikipedia/fr/1/15/Audi_logo.svg"
              width={158}
              height={48}
              />
            </div>
            <div className="brand-logo-card">
            <img
              alt="Ford"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/200px-Ford_logo_flat.svg.png"
              width={158}
              height={48}
              />
            </div>
          </div>

        </div>

      </section></>
    )
  }
