import Header from "@/app/components/navbarcenter/header";
import NavCenter from "@/app/components/navbarcenter/NavCentar";
import { useTranslations } from "next-intl";
import React from "react";
import "../style.css";

const Page = () => {
    const t = useTranslations("homePage");

    return (
      <div className="subpage-shell">
           
            <section className="subpage-hero">
            <div className="subpage-hero-inner">
            <div className="app-download-card mx-auto max-w-2xl text-center">
                <h3 className="different modern-section-title">
                    {t("workFastFromAnywhere")}
                </h3>
                <p className="modern-section-copy mx-auto mb-8">
                    {t("stayUpdatedWithFlowbite")}
                </p>
                <div className="justify-center items-center gap-3 space-y-4 sm:flex sm:space-y-0">
                    <a
                        href="#"
                        className="store-button w-full sm:w-auto"
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(255,255,255,1)"><path d="M11.6734 7.22198C10.7974 7.22198 9.44138 6.22598 8.01338 6.26198C6.12938 6.28598 4.40138 7.35397 3.42938 9.04597C1.47338 12.442 2.92538 17.458 4.83338 20.218C5.76938 21.562 6.87338 23.074 8.33738 23.026C9.74138 22.966 10.2694 22.114 11.9734 22.114C13.6654 22.114 14.1454 23.026 15.6334 22.99C17.1454 22.966 18.1054 21.622 19.0294 20.266C20.0974 18.706 20.5414 17.194 20.5654 17.11C20.5294 17.098 17.6254 15.982 17.5894 12.622C17.5654 9.81397 19.8814 8.46998 19.9894 8.40998C18.6694 6.47798 16.6414 6.26198 15.9334 6.21398C14.0854 6.06998 12.5374 7.22198 11.6734 7.22198ZM14.7934 4.38998C15.5734 3.45398 16.0894 2.14598 15.9454 0.849976C14.8294 0.897976 13.4854 1.59398 12.6814 2.52998C11.9614 3.35798 11.3374 4.68998 11.5054 5.96198C12.7414 6.05798 14.0134 5.32598 14.7934 4.38998Z"></path></svg>
                        <div className="text-left">
                            <div className="mb-1 text-xs">{t("downloadOnThe")}</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">{t("macAppStore")}</div>
                        </div>
                    </a>
                    <a
                        href="#"
                        className="store-button w-full sm:w-auto"
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(255,255,255,1)"><path d="M6.38231 3.9681C7.92199 2.73647 9.87499 2 12 2C14.125 2 16.078 2.73647 17.6177 3.9681L19.0711 2.51472L20.4853 3.92893L19.0319 5.38231C20.2635 6.92199 21 8.87499 21 11V12H3V11C3 8.87499 3.73647 6.92199 4.9681 5.38231L3.51472 3.92893L4.92893 2.51472L6.38231 3.9681ZM3 14H21V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V14ZM9 9C9.55228 9 10 8.55228 10 8C10 7.44772 9.55228 7 9 7C8.44772 7 8 7.44772 8 8C8 8.55228 8.44772 9 9 9ZM15 9C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7C14.4477 7 14 7.44772 14 8C14 8.55228 14.4477 9 15 9Z"></path></svg>
                        <div className="text-left">
                            <div className="mb-1 text-xs">{t("getItOn")}</div>
                            <div className="-mt-1 font-sans text-sm font-semibold">{t("googlePlay")}</div>
                        </div>
                    </a>
                </div>
            </div>
           
        </div>
        </section>
      </div>
  
       
    );
};

export default Page;
