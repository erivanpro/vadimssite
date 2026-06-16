import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Video = () => {
  return (
    <div className="video-frame relative w-full h-0 pb-[56.25%]">
      {" "}
      {/* 16:9 aspect ratio container */}
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/El8X8o8TR7U"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

const Feature = () => {
  const t = useTranslations("posts");

  return (
    <section className="video-section soft-section">
      <div className="modern-container">
        <div className="text-center">
          <h2 className="different modern-section-title mx-auto max-w-3xl">
            {t("launchInFrance")}
          </h2>
          <p className="modern-section-copy mx-auto max-w-2xl">
            {t("excitedToHelp")}
          </p>
          <div className="mt-10 flex justify-center items-center">
            <div className="relative w-full max-w-2xl mx-auto">
              <Video />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
