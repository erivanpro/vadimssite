import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";

export default function Alert() {
  const [isVisible, setIsVisible] = useState(true);
  const t = useTranslations("posts");

  if (!isVisible) return null;

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-green-100 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 rounded-lg shadow-md">
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-green-300 to-green-500 opacity-30"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm text-green-900 font-medium">
          <strong className="font-semibold"> Limitless</strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline size-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          {t("alert_message")}
        </p>
        <a
          href="https://www.canva.com/design/DAGeu3oOsY8/V5SMcsZXlyOclCAoWJg6uA/edit?utm_content=DAGeu3oOsY8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          className="flex-none rounded-full bg-[#52bf88] px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-[#2f8d61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f8d61]"
        >
          {t("discover")} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="-m-3 p-3 rounded-full bg-green-200 hover:bg-green-300 focus:ring-2 focus:ring-green-500"
        >
          <span className="sr-only">{t("close")}</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-green-900" />
        </button>
      </div>
    </div>
  );
}
