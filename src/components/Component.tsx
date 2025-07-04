export function Component() {
  return (
    <div className="bg-black text-white">
      {/* Blocs d'icônes */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
          {/* Bloc 1 */}
          <div>
            <svg
              className="shrink-0 size-9 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect width="10" height="14" x="3" y="8" rx="2" />
              <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
              <path d="M8 18h.01" />
            </svg>
            <div className="bg-neutral-800 h-0.5 mt-6">
              <div className="bg-neutral-600 w-9 h-0.5"></div>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-white">
                Design adaptable
              </h3>
              <p className="mt-1 text-neutral-400">
                Optimisé pour tous les écrans, du mobile au bureau.
              </p>
            </div>
          </div>

          {/* Bloc 2 */}
          <div>
            <svg
              className="shrink-0 size-9 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 7h-9" />
              <path d="M14 17H5" />
              <circle cx="17" cy="17" r="3" />
              <circle cx="7" cy="7" r="3" />
            </svg>
            <div className="bg-neutral-800 h-0.5 mt-6">
              <div className="bg-neutral-600 w-9 h-0.5"></div>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-white">
                Facile à personnaliser
              </h3>
              <p className="mt-1 text-neutral-400">
                Conçu pour s'adapter à chaque identité visuelle.
              </p>
            </div>
          </div>

          {/* Bloc 3 */}
          <div>
            <svg
              className="shrink-0 size-9 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <div className="bg-neutral-800 h-0.5 mt-6">
              <div className="bg-neutral-600 w-9 h-0.5"></div>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-white">
                Bien documenté
              </h3>
              <p className="mt-1 text-neutral-400">
                Toutes les interfaces sont décrites clairement.
              </p>
            </div>
          </div>

          {/* Bloc 4 */}
          <div>
            <svg
              className="shrink-0 size-9 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
            <div className="bg-neutral-800 h-0.5 mt-6">
              <div className="bg-neutral-600 w-9 h-0.5"></div>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-white">
                Support réactif
              </h3>
              <p className="mt-1 text-neutral-400">
                Une équipe disponible en continu pour vous accompagner.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Fin des blocs */}
    </div>
  );
}
