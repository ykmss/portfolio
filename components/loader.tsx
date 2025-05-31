"use client"
export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50">
      <img
        src="/profile2.JPG"
        alt="Logo"
        className="w-16 h-16 mb-4 animate-pulse rounded-full shadow-lg"
      />
      <span className="text-primary text-lg font-semibold animate-pulse">Loading...</span>
    </div>
  );
}