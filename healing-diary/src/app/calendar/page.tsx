import DiaryCalendar from "@/components/calendar/diary-calendar";

export default function CalendarPage() {
  return (
    <main className="flex w-full max-w-limit flex-1 flex-col items-stretch justify-start bg-white">
      <DiaryCalendar />
    </main>
  );
}
