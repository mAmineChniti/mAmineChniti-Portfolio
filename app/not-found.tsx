import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="mt-4 text-xl">
          Oops! The page you&#39;re looking for doesn&#39;t exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block text-blue-500 hover:text-blue-400"
        >
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
}
