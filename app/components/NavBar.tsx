import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center gap-4 px-8 py-4 bg-neutral-900 text-white">
      <Link href="/" className="text-xl font-bold">🍽️ NextBites</Link>
    </nav>
  );
}