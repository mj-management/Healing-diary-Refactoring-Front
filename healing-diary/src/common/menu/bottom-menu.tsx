import { Button } from "@/components/ui/button";
import { HomeIcon, CalendarIcon, PlusIcon, UsersIcon, UserIcon, GroupIcon } from "lucide-react";

import Link from "next/link";

export default function BottomMenu() {
  return (
    <div className="sticky z-10 flex w-full flex-col items-center justify-center transition-position duration-300 ease-in-out">
      <div className="flex w-full max-w-limit flex-row items-center justify-center border-t px-2">
        <Link href="#" target="_self" className="relative flex-1">
          <Button
            size="icon"
            variant="transparent"
            className="flex w-full max-w-limit items-center justify-center p-1 h-14"
          >
            <div className="flex flex-col items-center justify-center text-xs leading-snug font-normal gap-1">
              <HomeIcon className="w-6 h-6 text-slate-400" />
              <span className="text-xs font-thin">홈</span>
            </div>
          </Button>
        </Link>

        <Link href="#" target="_self" className="relative flex-1">
          <Button
            size="icon"
            variant="transparent"
            className="flex w-full max-w-limit items-center justify-center p-1 h-14"
          >
            <div className="flex flex-col items-center justify-center text-xs leading-snug font-normal gap-1">
              <CalendarIcon className="w-6 h-6 text-slate-400" />
              <span className="text-xs font-thin">달력</span>
            </div>
          </Button>
        </Link>

        <Link href="#" target="_self" className="relative flex-1">
          <Button
            size="icon"
            variant="transparent"
            className="flex w-full max-w-limit items-center justify-center p-1 h-14"
          >
            <div className="flex flex-col items-center justify-center text-xs leading-snug font-normal gap-1">
              <HomeIcon className="w-6 h-6 text-slate-400" />
              <span className="text-xs font-thin">홈</span>
            </div>
          </Button>
        </Link>

        <Link href="#" target="_self" className="relative flex-1">
          <Button
            size="icon"
            variant="transparent"
            className="flex w-full max-w-limit items-center justify-center p-1 h-14"
          >
            <div className="flex flex-col items-center justify-center text-xs leading-snug font-normal gap-1">
              <GroupIcon className="w-6 h-6 text-slate-400" />
              <span className="text-xs font-thin">모임</span>
            </div>
          </Button>
        </Link>

        <Link href="#" target="_self" className="relative flex-1">
          <Button
            size="icon"
            variant="transparent"
            className="flex w-full max-w-limit items-center justify-center p-1 h-14"
          >
            <div className="flex flex-col items-center justify-center text-xs leading-snug font-normal gap-1">
              <UserIcon className="w-6 h-6 text-slate-400" />
              <span className="text-xs font-thin">마이페이지</span>
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
}
