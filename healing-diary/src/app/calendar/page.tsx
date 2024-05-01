"use client";

import { ThemeProvider } from "styled-components";
import DiaryCalendar from "@/components/calendar/diary-calendar";
import theme from "@/theme";

export default function CalendarPage() {
  return (
    <ThemeProvider theme={theme}>
      <main className="flex w-full max-w-limit flex-1 flex-col items-stretch justify-start bg-white">
        <DiaryCalendar />
      </main>
    </ThemeProvider>
  );
}
