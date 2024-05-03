import "@/app/globals.css";
import BottomMenu from "@/layout/menu/bottom-menu";
import PageHeader from "@/layout/header/page-header";

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader title="로그인" />
      {children}
      <BottomMenu />
    </>
  );
}
