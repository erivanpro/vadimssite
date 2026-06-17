import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import LocaleSwitcher from "../localeSwitcher/LocaleSwitcher";
import { FaX } from "react-icons/fa6";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaReddit,
  FaTumblr,
} from "react-icons/fa";

const hasSeenModalKey = "hasSeenModal";
const languageWindowClosedEvent = "limitless-language-window-closed";

function InfoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [allowCookies, setAllowCookies] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem(hasSeenModalKey);
    if (!hasSeenModal) {
      setIsOpen(true);
    }
  }, []);

  const closeModal = () => {
    localStorage.setItem(hasSeenModalKey, "true");
    window.dispatchEvent(new Event(languageWindowClosedEvent));
    setIsOpen(false);
  };

  return (
    <>
      {/* Informations principales */}

      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={closeModal}
        className="language-window-root"
        aria-labelledby="info-modal-title"
        aria-describedby="info-modal-description"
      >
        <div className="language-window-backdrop" aria-hidden="true" />

        <Dialog.Panel className="language-window-card">
          <button
            type="button"
            onClick={closeModal}
            className="cookie-window-close language-window-close"
            aria-label="Fermer"
          >
            &times;
          </button>

          <div className="cookie-window-mark language-window-mark" aria-hidden="true">
            <span className="cookie-window-mark-piece cookie-window-mark-top" />
            <span className="cookie-window-mark-piece cookie-window-mark-center" />
            <span className="cookie-window-mark-piece cookie-window-mark-bottom" />
          </div>

          <p className="cookie-window-eyebrow">Welcome to Limitless</p>
          <Dialog.Title
            id="info-modal-title"
            className="language-window-title"
          >
            Choisissez votre langue
          </Dialog.Title>
          <p id="info-modal-description" className="language-window-copy">
            Sélectionnez votre langue préférée pour continuer avec une expérience
            adaptée à votre région.
          </p>

          <div className="language-window-switcher">
            <LocaleSwitcher removeMargin removePadding />
          </div>

          <div className="language-window-toggle">
            <span>Autoriser les cookies</span>
            <button
              type="button"
              onClick={() => setAllowCookies(!allowCookies)}
              className={`language-window-toggle-control ${
                allowCookies ? "bg-[#52bf88]" : "bg-gray-300"
              }`}
              aria-pressed={allowCookies}
            >
              <span
                className={`language-window-toggle-thumb ${
                  allowCookies ? "language-window-toggle-thumb-on" : ""
                }`}
              />
            </button>
          </div>

          <p className="language-window-legal">
            La société GoLimitless, enregistrée sous le numéro SIREN 939 203 287 R.C.S. Paris, a été officiellement constituée le 6 janvier 2025 en tant que société à responsabilité limitée (SARL). Avec un capital social de 300 €, son siège social est situé au 60 rue François 1er, 75008 Paris.
          </p>

          <button
            type="button"
            onClick={closeModal}
            className="cookie-window-primary language-window-primary"
          >
            Continuer
          </button>

          <div className="language-window-socials">
            <a
              href="https://x.com/LimitlessA66221"
              aria-label="Twitter"
            >
              <FaX size={20} />
            </a>
            <a
              href="https://www.instagram.com/limitlescar/"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61571093265011"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="mailto:rentalcarapplimitlessslimitles@gmail.com"
              aria-label="Gmail"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://www.reddit.com/user/Born_Pangolin_3308/"
              aria-label="Reddit"
            >
              <FaReddit size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/limitlessapp-rental-car-app-limitlesss-1293b5344/"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.tumblr.com/blog/golimitlesscom"
              aria-label="Tumblr"
            >
              <FaTumblr size={20} />
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

export default InfoModal;
