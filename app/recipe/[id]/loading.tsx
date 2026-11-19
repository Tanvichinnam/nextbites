export default function Loading() {
  return (
    <main className="p-8 max-w-2xl" aria-label="Loading recipe">
      <div className="h-4 w-32 rounded bg-neutral-800 animate-pulse" />
      <div className="h-9 w-64 mt-4 rounded bg-neutral-800 animate-pulse" />
      <div className="h-4 w-48 mt-3 rounded bg-neutral-800 animate-pulse" />
      <div className="h-6 w-32 mt-6 mb-2 rounded bg-neutral-800 animate-pulse" />
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="h-4 w-56 mt-2 rounded bg-neutral-800 animate-pulse" />
      ))}
    </main>
  );
}