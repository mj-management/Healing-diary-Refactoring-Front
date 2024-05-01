import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { PlayIcon } from "lucide-react";

export default function RecentDiaries() {
  return (
    <div className="w-full px-0 pb-4">
      <div className="flex w-full flex-col">
        <div className="pointer-events-none flex w-full flex-row items-center justify-between px-4 py-4">
          <div className="flex flex-col items-start gap-1">
            <p className="w-full text-xl font-semibold">최근 일기 🧐</p>
            <p className="w-full text-xs text-gray-500">여기에서 최근 기록된 일기들을 살펴보세요</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 px-4">
          <div className="group inline-block w-full relative select-none">
            <Link href="#">
              <div className="relative flex flex-col gap-3">
                <div className="flex flex-col">
                  <div className="relative aspect-square shrink-0 overflow-hidden w-full rounded">
                    <Image
                      src="https://media.hity.io/thumbnails/products/upload-2-5%EA%B5%AC_%EC%8D%B8%EB%84%A4%EC%9D%BC_54865c42_thumbnail_1024.jpg"
                      className="overflow-hidden object-cover max-h-full max-w-full min-w-full min-h-full "
                      width={238}
                      height={238}
                      alt="일기"
                    />
                    <div className="absolute bottom-0 right-0 z-10 flex justify-end p-2">
                      <Button
                        size="icon"
                        className="flex items-center justify-center rounded-full border-white bg-gray-300 hover:bg-gray-400"
                      >
                        <PlayIcon className="w-4 h-4 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col">
                <p className="mb-0.5 line-clamp-2 w-full text-sm font-semibold">모임이름</p>
                <p className="mb-1 line-clamp-2 w-full text-md">일기 제목</p>
                <div className="flex flex-col justify-center items-start gap-0.5">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <p className="flex flex-row items-center justify-center">
                      <span className="flex pr-0.5 text-primary-sky text-lg">작성자</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="group inline-block w-full relative">
            <Link href="#">
              <div className="relative flex flex-col gap-3">
                <div className="flex flex-col">
                  <div className="relative aspect-square shrink-0 overflow-hidden w-full rounded">
                    <Image
                      src="https://media.hity.io/thumbnails/products/upload-2-5%EA%B5%AC_%EC%8D%B8%EB%84%A4%EC%9D%BC_54865c42_thumbnail_1024.jpg"
                      className="overflow-hidden object-cover max-h-full max-w-full min-w-full min-h-full "
                      width={238}
                      height={238}
                      alt="일기"
                    />
                    <div className="absolute bottom-0 right-0 z-10 flex justify-end p-2">
                      <Button
                        size="icon"
                        className="flex items-center justify-center rounded-full border-white bg-gray-300 hover:bg-gray-400"
                      >
                        <PlayIcon className="w-4 h-4 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col">
                <p className="mb-0.5 line-clamp-2 w-full text-sm font-semibold">모임이름</p>
                <p className="mb-1 line-clamp-2 w-full text-md">일기 제목</p>
                <div className="flex flex-col justify-center items-start gap-0.5">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <p className="flex flex-row items-center justify-center">
                      <span className="flex pr-0.5 text-primary-sky text-lg">작성자</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="group inline-block w-full relative">
            <Link href="#">
              <div className="relative flex flex-col gap-3">
                <div className="flex flex-col">
                  <div className="relative aspect-square shrink-0 overflow-hidden w-full rounded">
                    <Image
                      src="https://media.hity.io/thumbnails/products/upload-2-5%EA%B5%AC_%EC%8D%B8%EB%84%A4%EC%9D%BC_54865c42_thumbnail_1024.jpg"
                      className="overflow-hidden object-cover max-h-full max-w-full min-w-full min-h-full "
                      width={238}
                      height={238}
                      alt="일기"
                    />
                    <div className="absolute bottom-0 right-0 z-10 flex justify-end p-2">
                      <Button
                        size="icon"
                        className="flex items-center justify-center rounded-full border-white bg-gray-300 hover:bg-gray-400"
                      >
                        <PlayIcon className="w-4 h-4 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col">
                <p className="mb-0.5 line-clamp-2 w-full text-sm font-semibold">모임이름</p>
                <p className="mb-1 line-clamp-2 w-full text-md">일기 제목</p>
                <div className="flex flex-col justify-center items-start gap-0.5">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <p className="flex flex-row items-center justify-center">
                      <span className="flex pr-0.5 text-primary-sky text-lg">작성자</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="group inline-block w-full relative">
            <Link href="#">
              <div className="relative flex flex-col gap-3">
                <div className="flex flex-col">
                  <div className="relative aspect-square shrink-0 overflow-hidden w-full rounded">
                    <Image
                      src="https://media.hity.io/thumbnails/products/upload-2-5%EA%B5%AC_%EC%8D%B8%EB%84%A4%EC%9D%BC_54865c42_thumbnail_1024.jpg"
                      className="overflow-hidden object-cover max-h-full max-w-full min-w-full min-h-full "
                      width={238}
                      height={238}
                      alt="일기"
                    />
                    <div className="absolute bottom-0 right-0 z-10 flex justify-end p-2">
                      <Button
                        size="icon"
                        className="flex items-center justify-center rounded-full border-white bg-gray-300 hover:bg-gray-400"
                      >
                        <PlayIcon className="w-4 h-4 text-white" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col">
                <p className="mb-0.5 line-clamp-2 w-full text-sm font-semibold">모임이름</p>
                <p className="mb-1 line-clamp-2 w-full text-md">일기 제목</p>
                <div className="flex flex-col justify-center items-start gap-0.5">
                  <div className="flex flex-row items-center justify-center gap-2">
                    <p className="flex flex-row items-center justify-center">
                      <span className="flex pr-0.5 text-primary-sky text-lg">작성자</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
