import "@/app/globals.css";
import BottomMenu from "@/layout/menu/bottom-menu";
import PageHeader from "@/layout/header/page-header";

export default function GroupLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader title="모임" />
      {children}
      <BottomMenu />
    </>
  );
}
