import Link from "next/link";
import { notFound } from "next/navigation";
import { recipes, getRecipe } from "../../data/recipes";


export function generateStaticParams() {
  return recipes.map((r) => ({ id: r.id }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);
  if (!recipe) notFound();

  return (
    <main className="p-8 max-w-2xl">
      <Link href="/" className="text-orange-400">← Back to recipes</Link>
      <h1 className="text-3xl font-bold mt-4">{recipe.emoji} {recipe.title}</h1>
      <p className="text-neutral-400 mt-2">
        ⏱ {recipe.minutes} min • {recipe.difficulty} • {recipe.cuisine}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Ingredients</h2>
      <ul className="list-disc pl-6">
        {recipe.ingredients.map((i) => <li key={i}>{i}</li>)}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Steps</h2>
      <ol className="list-decimal pl-6 space-y-1">
        {recipe.steps.map((s, idx) => <li key={idx}>{s}</li>)}
      </ol>
    </main>
  );
}