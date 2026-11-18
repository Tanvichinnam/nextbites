"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");

  const q = query.toLowerCase();
  const matches = recipes.filter(
    (r) => r.title.toLowerCase().includes(q) || r.cuisine.toLowerCase().includes(q)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title or cuisine..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-md mb-6 px-4 py-2 rounded-lg border border-neutral-700 bg-neutral-900 text-white"
      />

      {matches.length === 0 ? (
        <p className="text-neutral-400">No recipes match “{query}”. Try another search 🍽️</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
            gap: "1rem",
          }}
        >
          {matches.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}