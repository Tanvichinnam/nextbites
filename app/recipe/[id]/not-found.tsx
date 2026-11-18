import Link from "next/link";

export default function NotFound() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Recipe not found 😕</h1>
      <p className="text-neutral-400 mt-2">That recipe doesn't exist.</p>
      <Link href="/" className="text-orange-400 mt-4 inline-block">← Back to recipes</Link>
    </main>
  );
}