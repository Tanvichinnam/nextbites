export default function Loading() {
  return (
    <main className="p-8">
      <div className="h-8 w-40 mb-4 rounded bg-neutral-800 animate-pulse" />
      <div className="h-10 w-full max-w-md mb-6 rounded-lg bg-neutral-800 animate-pulse" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
          gap: "1rem",
        }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-36 rounded-xl border border-neutral-800 bg-neutral-900 animate-pulse"
          />
        ))}
      </div>
    </main>
  );
}