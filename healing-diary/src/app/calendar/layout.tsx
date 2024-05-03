import "@/app/globals.css";
import BottomMenu from "@/layout/menu/bottom-menu";
import PageHeader from "@/layout/header/page-header";

export default function CalendarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader title="달력" />
      {children}
      <BottomMenu />
    </>
  );
}
