export default function CalendarSkeleton() {
  return (
    <div className="w-full p-6 bg-white">
      <div className="h-8 mb-4 bg-gray-200 rounded animate-pulse"></div>
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 35 }).map((_, index) => (
          <div key={index} className="h-10 bg-gray-100 rounded animate-pulse"></div>
        ))}
      </div>
    </div>
  );
}
