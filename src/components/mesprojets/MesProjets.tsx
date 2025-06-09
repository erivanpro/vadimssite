import { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const projets = [
  { id: 1, titre: "Maison Chalon", categorie: "maison chalon", image: "https://via.placeholder.com/300x200?text=Maison+Chalon" },
  { id: 2, titre: "The Trace", categorie: "The trace", image: "https://via.placeholder.com/300x200?text=The+Trace" },
  { id: 3, titre: "Vortex Utopia", categorie: "vortex utopia", image: "https://via.placeholder.com/300x200?text=Vortex+Utopia" },
  { id: 4, titre: "Skates Jacker", categorie: "skates jacker", image: "https://via.placeholder.com/300x200?text=Skates+Jacker" },
  { id: 5, titre: "Projet 3D Pearl", categorie: "projet 3d Pearl", image: "https://via.placeholder.com/300x200?text=3D+Pearl" },
  { id: 6, titre: "Rocky", categorie: "Rocky", image: "https://via.placeholder.com/300x200?text=Rocky" },
  { id: 7, titre: "Cours Photoshop", categorie: "Cours photoshop", image: "https://via.placeholder.com/300x200?text=Photoshop" },
];

const categories = [
  "Tous",
  "maison chalon",
  "The trace",
  "vortex utopia",
  "skates jacker",
  "projet 3d Pearl",
  "Rocky",
  "Cours photoshop",
];

export default function MesProjets() {
  const [filtre, setFiltre] = useState("Tous");

  const projetsFiltres = filtre === "Tous"
    ? projets
    : projets.filter(p => p.categorie === filtre);

  return (
    <><Header /><div className="bg-black min-h-screen text-white flex flex-col items-center mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Mes Projets</h1>

      {/* Filtres */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFiltre(cat)}
            className={`px-4 py-2 rounded-full border ${filtre === cat ? "bg-cyan-600 text-white border-cyan-600" : "bg-gray-800 text-white border-gray-600"} hover:opacity-80 transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {projetsFiltres.map(p => (
          <div
            key={p.id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-white text-black"
          >
            <img src={p.image} alt={p.titre} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{p.titre}</h2>
              <p className="text-sm text-gray-500">{p.categorie}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}