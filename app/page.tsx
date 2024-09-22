"use client";
import Links from "@/components/Links";
import Carousel from "@/components/Carousel";
import Sidebar from "@/components/Sidebar";

export default function HomePage() {
  return (
    <>
      <main
        className="absolute inset-6 flex min-h-[calc(100vh-3rem)] min-w-80 flex-col border border-neutral-600 bg-neutral-950 bg-cover bg-center p-6 text-neutral-200"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80")',
          animation: "scroll 300s linear infinite",
          perspective: "1000px",
        }}
      >
        <div className="mb-6 flex select-none flex-col">
          <span className="text-5xl font-thin opacity-75">mAmineChniti</span>
          <span className="text-2xl font-thin opacity-75">
            Software Engineer
          </span>
        </div>
        <div className="flex-grow">
          <Carousel />
        </div>
        <div className="absolute bottom-0 right-0 m-4 flex flex-row items-center justify-center">
          <Links />
        </div>
      </main>
      <Sidebar />
      <style jsx>{`
        @keyframes scroll {
          100% {
            background-position: 0 -400%;
          }
        }

        @media (prefers-reduced-motion) {
          main {
            animation: scroll 1200s linear infinite;
          }
        }
      `}</style>
    </>
  );
}
