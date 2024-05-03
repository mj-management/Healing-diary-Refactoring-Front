"use client";

import { useDragScroll } from "@/hooks/use-drag-scroll";
import Image from "next/image";
import Link from "next/link";

export default function MyGroup() {
  const { onMouseDown, onMouseMove, onMouseUp, inActive } = useDragScroll();
  return (
    <>
      <div className="pointer-events-none flex w-full flex-row items-center justify-between px-4">
        <div className="flex flex-col items-start gap-1">
          <p className="w-full text-xl font-semibold">내 모임 🤓</p>
          <p className="w-full text-xs text-gray-500">내가 가입한 모임 목록들 이에요</p>
        </div>
      </div>
      <div
        className="w-full max-w-limit overflow-x-auto space-x-4 mt-4 px-4 flex select-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={inActive}
      >
        <div className="flex shrink-0 flex-col gap-2 w-[300px] select-none">
          <div className="relative mx-auto max-w-limit flex-row justify-center overflow-hidden w-full shrink-0 rounded aspect-[1/1] mb-2">
            <div className="absolute left-0 top-0 flex h-full w-full flex-row">
              <Image
                src="https://media.hity.io/prod_85b29036-da9d-4775-9778-bef93a2af34e40f7e9338c066ceddb6dd6b5b77014c1.gif"
                width={300}
                height={300}
                className="overflow-hidden object-cover absolute w-full h-full select-none"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-2 w-[300px] select-none">
          <div className="relative mx-auto max-w-limit flex-row justify-center overflow-hidden w-full shrink-0 rounded aspect-[1/1] mb-2">
            <div className="absolute left-0 top-0 flex h-full w-full flex-row">
              <Image
                src="https://media.hity.io/prod_85b29036-da9d-4775-9778-bef93a2af34e40f7e9338c066ceddb6dd6b5b77014c1.gif"
                width={300}
                height={300}
                className="overflow-hidden object-cover absolute w-full h-full select-none"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-2 w-[300px] select-none">
          <div className="relative mx-auto max-w-limit flex-row justify-center overflow-hidden w-full shrink-0 rounded aspect-[1/1] mb-2">
            <div className="absolute left-0 top-0 flex h-full w-full flex-row">
              <Image
                src="https://media.hity.io/prod_85b29036-da9d-4775-9778-bef93a2af34e40f7e9338c066ceddb6dd6b5b77014c1.gif"
                width={300}
                height={300}
                className="overflow-hidden object-cover absolute w-full h-full select-none"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
