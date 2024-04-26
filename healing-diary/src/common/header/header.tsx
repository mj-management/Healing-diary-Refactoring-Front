import { Button } from "@/components/ui/button";
import { NotionLogoIcon } from "@radix-ui/react-icons";
import { AlarmCheck, BellIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 w-full flex flex-col items-center justify-start">
      <div className="h-[52px] max-h-[52px] relative z-50 flex w-full max-w-limit items-center justify-between gap-4">
        <div className="flex items-center justify-center">
          <Link href="/">
            <span className="sr-only">Home</span>
            <Image
              src="/assets/images/icon.svg"
              className="h-16 object-left pt-1"
              alt="logo"
              width={120}
              height={120}
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <Button size="icon" variant="transparent">
            <SearchIcon className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="transparent">
            <BellIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
