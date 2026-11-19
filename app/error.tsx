"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Something went wrong 🍳</h1>
      <p className="text-neutral-400 mt-2">{error.message || "An unexpected error occurred."}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
      >
        Try again
      </button>
    </main>
  );
}