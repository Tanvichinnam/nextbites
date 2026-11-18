import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="rounded-xl border border-neutral-700 bg-neutral-900 p-5 hover:border-orange-400 transition">
      <div className="text-5xl mb-3">{recipe.emoji}</div>
      <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
      <div className="flex flex-wrap gap-2 text-sm text-neutral-300">
        <span>⏱ {recipe.minutes} min</span>
        <span>• {recipe.difficulty}</span>
        <span>• {recipe.cuisine}</span>
      </div>
    </div>
  );
}