"use client"
export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-solid"></div>
    </div>
  );
}