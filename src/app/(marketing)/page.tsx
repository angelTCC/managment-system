import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-4xl font-bold">AgroFlow</h1>
      <p className="text-gray-600">Smart agriculture management system</p>

      <Link href="/login" className="px-4 py-2 bg-black text-white rounded">
        Enter Dashboard
      </Link>
    </main>
  );
}
