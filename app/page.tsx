
import { recipes } from "./data/recipes";
import RecipeGrid from "./components/RecipeGrid";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      <RecipeGrid recipes={recipes} />
    </main>
  );
}