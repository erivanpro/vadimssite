"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import "../style.css";

type Status = "idle" | "loading" | "success" | "error";
type FieldErrors = Partial<Record<string, string>>;

type SelectOption = {
  value: string;
  label: string;
};

type ContactCategory = SelectOption & {
  department: string;
  guidance: string;
};

type InfoCard = {
  title: string;
  text: string;
};

type InfoList = {
  title: string;
  items: string[];
};

const requiredFields = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "customerType",
  "category",
  "insuranceLine",
  "preferredContact",
  "urgency",
  "details",
];

export default function Page() {
  const t = useTranslations("contact");
  const categories = t.raw("categories") as ContactCategory[];
  const insuranceLines = t.raw("insuranceLines") as SelectOption[];
  const customerTypes = t.raw("customerTypes") as SelectOption[];
  const preferredContacts = t.raw("preferredContacts") as SelectOption[];
  const urgencyOptions = t.raw("urgencyOptions") as SelectOption[];
  const departmentCards = t.raw("departmentCards") as InfoCard[];
  const guidanceSections = t.raw("guidanceSections") as InfoList[];

  const [status, setStatus] = useState<Status>("idle");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const selectedCategoryDetails = useMemo(
    () => categories.find((category) => category.value === selectedCategory),
    [categories, selectedCategory],
  );

  const validateForm = (formData: FormData) => {
    const errors: FieldErrors = {};

    requiredFields.forEach((field) => {
      if (!String(formData.get(field) || "").trim()) {
        errors[field] = t("validation.required");
      }
    });

    const email = String(formData.get("email") || "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = t("validation.email");
    }

    const phone = String(formData.get("phone") || "").trim();
    if (phone && !/^[+0-9\s().-]{6,24}$/.test(phone)) {
      errors.phone = t("validation.phone");
    }

    if (String(formData.get("details") || "").trim().length < 20) {
      errors.details = t("validation.details");
    }

    if (formData.get("consent") !== "on") {
      errors.consent = t("validation.consent");
    }

    return errors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const errors = validateForm(formData);

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setStatus("success");
      setSelectedCategory("");
      setFieldErrors({});
      form.reset();
    } catch (error) {
      setStatus("error");
    }
  };

  const renderFieldError = (field: string) =>
    fieldErrors[field] ? (
      <p className="contact-error" role="alert">
        {fieldErrors[field]}
      </p>
    ) : null;

  return (
    <div className="subpage-shell contact-page">
      <main>
        <section className="subpage-hero contact-hero">
          <div className="modern-container">
            <div className="contact-hero-grid">
              <div>
                <p className="modern-eyebrow">{t("eyebrow")}</p>
                <h1 className="different subpage-title">{t("title")}</h1>
                <p className="subpage-copy">{t("subtitle")}</p>
                <div className="contact-method-grid">
                  {departmentCards.map((card) => (
                    <article key={card.title} className="contact-mini-card">
                      <h2>{card.title}</h2>
                      <p>{card.text}</p>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="contact-guidance-card">
                <h2>{t("fastestHelpTitle")}</h2>
                <p>{t("fastestHelpText")}</p>
                <ul>
                  {(t.raw("fastestHelpItems") as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="proof-section">
          <div className="modern-container">
            <div className="contact-content-grid">
              <div className="contact-form-column">
                <div className="contact-card">
                  <h2 className="mb-3 text-2xl font-black text-gray-900">
                    {t("formTitle")}
                  </h2>
                  <p className="mb-8 text-sm font-bold leading-6 text-gray-600">
                    {t("formIntro")}
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="contact-form-grid">
                      <label className="contact-field">
                        <span>{t("firstName")}</span>
                        <input
                          type="text"
                          name="firstName"
                          autoComplete="given-name"
                          aria-invalid={Boolean(fieldErrors.firstName)}
                          className="contact-input"
                        />
                        {renderFieldError("firstName")}
                      </label>

                      <label className="contact-field">
                        <span>{t("lastName")}</span>
                        <input
                          type="text"
                          name="lastName"
                          autoComplete="family-name"
                          aria-invalid={Boolean(fieldErrors.lastName)}
                          className="contact-input"
                        />
                        {renderFieldError("lastName")}
                      </label>

                      <label className="contact-field">
                        <span>{t("email")}</span>
                        <input
                          type="email"
                          name="email"
                          autoComplete="email"
                          aria-invalid={Boolean(fieldErrors.email)}
                          className="contact-input"
                        />
                        {renderFieldError("email")}
                      </label>

                      <label className="contact-field">
                        <span>{t("phone")}</span>
                        <input
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          aria-invalid={Boolean(fieldErrors.phone)}
                          className="contact-input"
                        />
                        {renderFieldError("phone")}
                      </label>

                      <label className="contact-field">
                        <span>{t("company")}</span>
                        <input
                          type="text"
                          name="company"
                          autoComplete="organization"
                          className="contact-input"
                        />
                      </label>

                      <label className="contact-field">
                        <span>{t("policyOrReservation")}</span>
                        <input
                          type="text"
                          name="policyOrReservation"
                          className="contact-input"
                        />
                      </label>

                      <label className="contact-field">
                        <span>{t("claimNumber")}</span>
                        <input type="text" name="claimNumber" className="contact-input" />
                      </label>

                      <label className="contact-field">
                        <span>{t("customerType")}</span>
                        <select
                          name="customerType"
                          defaultValue=""
                          aria-invalid={Boolean(fieldErrors.customerType)}
                          className="contact-input"
                        >
                          <option value="" disabled>
                            {t("customerTypePlaceholder")}
                          </option>
                          {customerTypes.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {renderFieldError("customerType")}
                      </label>

                      <label className="contact-field contact-field-wide">
                        <span>{t("category")}</span>
                        <select
                          name="category"
                          value={selectedCategory}
                          onChange={(event) => setSelectedCategory(event.target.value)}
                          aria-invalid={Boolean(fieldErrors.category)}
                          className="contact-input"
                        >
                          <option value="" disabled>
                            {t("categoryPlaceholder")}
                          </option>
                          {categories.map((category) => (
                            <option key={category.value} value={category.value}>
                              {category.label}
                            </option>
                          ))}
                        </select>
                        {renderFieldError("category")}
                      </label>

                      {selectedCategoryDetails && (
                        <div className="contact-routing-note contact-field-wide">
                          <strong>{selectedCategoryDetails.department}</strong>
                          <p>{selectedCategoryDetails.guidance}</p>
                        </div>
                      )}

                      <label className="contact-field">
                        <span>{t("insuranceLine")}</span>
                        <select
                          name="insuranceLine"
                          defaultValue=""
                          aria-invalid={Boolean(fieldErrors.insuranceLine)}
                          className="contact-input"
                        >
                          <option value="" disabled>
                            {t("insuranceLinePlaceholder")}
                          </option>
                          {insuranceLines.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {renderFieldError("insuranceLine")}
                      </label>

                      <label className="contact-field">
                        <span>{t("preferredContact")}</span>
                        <select
                          name="preferredContact"
                          defaultValue=""
                          aria-invalid={Boolean(fieldErrors.preferredContact)}
                          className="contact-input"
                        >
                          <option value="" disabled>
                            {t("preferredContactPlaceholder")}
                          </option>
                          {preferredContacts.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {renderFieldError("preferredContact")}
                      </label>

                      <label className="contact-field">
                        <span>{t("urgency")}</span>
                        <select
                          name="urgency"
                          defaultValue=""
                          aria-invalid={Boolean(fieldErrors.urgency)}
                          className="contact-input"
                        >
                          <option value="" disabled>
                            {t("urgencyPlaceholder")}
                          </option>
                          {urgencyOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {renderFieldError("urgency")}
                      </label>

                      <label className="contact-field contact-field-wide">
                        <span>{t("details")}</span>
                        <textarea
                          name="details"
                          rows={7}
                          aria-invalid={Boolean(fieldErrors.details)}
                          placeholder={t("detailsPlaceholder")}
                          className="contact-input"
                        />
                        {renderFieldError("details")}
                      </label>

                      <label className="contact-checkbox contact-field-wide">
                        <input type="checkbox" name="consent" />
                        <span>{t("consent")}</span>
                      </label>
                      {fieldErrors.consent && (
                        <p className="contact-error contact-field-wide" role="alert">
                          {fieldErrors.consent}
                        </p>
                      )}
                    </div>

                    <div className="mt-6 grid">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="modern-button modern-button-primary w-full"
                      >
                        {status === "loading" ? t("sending") : t("submit")}
                      </button>
                    </div>

                    {status === "success" && (
                      <p className="contact-status contact-status-success" role="status">
                        {t("successMessage")}
                      </p>
                    )}
                    {status === "error" && (
                      <p className="contact-status contact-status-error" role="alert">
                        {t("errorMessage")}
                      </p>
                    )}

                    <p className="mt-4 text-center text-sm font-bold text-gray-500">
                      {t("responseTime")}
                    </p>
                  </form>
                </div>
              </div>

              <aside className="contact-side-column">
                {guidanceSections.map((section) => (
                  <article key={section.title} className="contact-info-panel">
                    <h2>{section.title}</h2>
                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </aside>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
