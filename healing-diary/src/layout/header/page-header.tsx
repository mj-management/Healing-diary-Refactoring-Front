import { Button } from "@/components/ui/button";
import { BellIcon, SearchIcon } from "lucide-react";

export default function PageHeader({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-50 w-full flex flex-col items-center justify-start">
      <div className="h-[52px] max-h-[52px] relative z-50 flex w-full max-w-limit items-center justify-between px-4 bg-white">
        <div className="absolute bottom-0 left-3 top-0 flex flex-row justify-center items-center"></div>
        <div className="flex-1 truncate text-center text-lg transition-colors text-gray-800 font-semibold leading-6">
          {title}
        </div>
        <div className="absolute bottom-0 right-3 top-0 flex flex-row items-center justify-center">
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
