import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import './car.css'

export default function Box2() {
  const router = useRouter();

  const navigateToNew = () => {
    router.push('gettheapp');
  };


  const t = useTranslations('homePage')
    return (
      <section className="split-section">
        <div className="split-media">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1608790039230-6121188d1280?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="split-copy">
           
           
          
           <p
  className="different modern-section-title"
  style={{ fontSize: '10px' }}
>
  {t('Louez des voitures pour toutes les occasions')}
</p>

            <p className="modern-section-copy">
            {t('Explorez une incroyable sélection de voitures, des plus communes aux plus extraordinaires')}

            </p>
            <div className="mt-8">
            <button onClick={navigateToNew}

  className="modern-button modern-button-secondary"
>
  {t('Explorer')}
</button>

          </div>
        </div>
      </section>
    );
  }
  
