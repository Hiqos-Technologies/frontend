export default function Loading() {
  return (
    <div className="min-h-screen bg-[#1b2232] flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Logo / Brand pulse */}
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-white/10 animate-pulse" />
        </div>

        {/* Heading skeleton */}
        <div className="h-10 w-64 mx-auto bg-white/10 rounded-lg animate-pulse" />

        {/* Subtitle skeleton */}
        <div className="h-6 w-48 mx-auto bg-white/10 rounded animate-pulse" />

        {/* Content block skeletons */}
        <div className="max-w-2xl mx-auto space-y-3 pt-4">
          <div className="h-4 w-full bg-white/10 rounded animate-pulse" />
          <div className="h-4 w-5/6 mx-auto bg-white/10 rounded animate-pulse" />
          <div className="h-4 w-4/6 mx-auto bg-white/10 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
