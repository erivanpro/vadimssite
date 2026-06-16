"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import "../style.css";

export default function Page() {
  const t = useTranslations("contact");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    try {
      // Exemple: envoie vers une API interne ou un service externe
      await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      setStatus("success");
      e.currentTarget.reset();
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="subpage-shell">
    <section className="subpage-hero">
    <div className="modern-container">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="different subpage-title mx-auto">
            {t("title")}
          </h1>
          <p className="subpage-copy mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-12">
          <div className="contact-card">
            <h2 className="mb-8 text-xl font-black text-gray-900">
              {t("formTitle")}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="prenom"
                    placeholder={t("firstName")}
                    required
                    aria-label={t("firstName")}
                    className="contact-input" />
                  <input
                    type="text"
                    name="nom"
                    placeholder={t("lastName")}
                    required
                    aria-label={t("lastName")}
                    className="contact-input" />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder={t("email")}
                  required
                  aria-label={t("email")}
                  className="contact-input" />

                <input
                  type="tel"
                  name="telephone"
                  placeholder={t("phone")}
                  pattern="^[+0-9\s\-]{6,20}$"
                  required
                  aria-label={t("phone")}
                  className="contact-input" />

                <select
                  name="type-probleme"
                  required
                  aria-label={t("selectPlaceholder")}
                  className="contact-input"
                  defaultValue=""
                >
                  <option value="" disabled>{t("selectPlaceholder")}</option>
                  <option value="location-arretee">{t("stoppedRental")}</option>
                  <option value="voiture-volee">{t("carStolen")}</option>
                  <option value="probleme-technique">{t("technicalIssue")}</option>
                  <option value="probleme-paiement">{t("paymentIssue")}</option>
                  <option value="probleme-application">{t("appIssue")}</option>
                  <option value="probleme-locataire">{t("userIssue")}</option>
                  <option value="autre">{t("other")}</option>
                </select>

                <textarea
                  name="details"
                  rows={4}
                  placeholder={t("details")}
                  required
                  aria-label={t("details")}
                  className="contact-input"
                ></textarea>
              </div>

              <div className="mt-4 grid">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`modern-button w-full ${status === "success"
                      ? "bg-[#52bf88] text-white"
                      : "modern-button-primary"}`}
                >
                  {status === "loading" ? t("sending") : t("submit")}
                </button>
              </div>

              {status === "success" && (
                <p className="mt-3 text-sm text-green-600 text-center">
                  {t("successMessage")}
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm text-red-600 text-center">
                  {t("errorMessage")}
                </p>
              )}

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  {t("responseTime")}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>
  );
}
