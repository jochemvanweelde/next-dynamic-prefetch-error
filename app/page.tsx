import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center gap-8 p-8 bg-white rounded-lg shadow-md dark:bg-zinc-900">
        <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
          Welcome!
        </h1>
        <Link
          href="/demoDeal"
          className="px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Go to Deal demoDeal
        </Link>
      </main>
    </div>
  );
}
