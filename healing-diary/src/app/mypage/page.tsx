import { Button } from "@/components/ui/button";

export default function MypagePage() {
  return (
    <main className="flex w-full max-w-limit flex-1 flex-col items-stretch justify-start bg-white">
      <div className="px-4 flex w-full flex-1 flex-col items-stretch justify-start gap-8 pb-5 pt-[20vh]">
        <div className="max-w-limit w-full mb-20">
          <h1 className="mb-10 break-words relative">
            <small className="block mb-2 text-gray-400 font-normal text-xs">함께하는 치유의 여정</small>
            <small className="block mb-2 text-gray-500 font-normal">
              질병과 싸우는 모든 이들을 위한 공간입니다. 서로의 이야기에서 위로를 받으세요
            </small>
            <strong className="font-mono text-2xl text-primary-dark-orange">Heling diary</strong>
          </h1>
        </div>
        <Button
          className="h-[50px] w-full rounded border-social-kakao bg-social-kakao px-4 text-lg relative hover:bg-social-kakao"
          type="button"
        >
          <span className="tooltip absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-[-8px] whitespace-nowrap border border-primary-dark-orange text-xs font-bold py-2 px-4 rounded-lg shadow-lg cursor-default text-primary-dark-orange">
            5초만에 빠른 회원가입
          </span>
          <div className="flex flex-row items-center justify-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
            >
              <path
                d="M11.9998 3C7.02989 3 3 6.44557 3 10.6984C3 13.4302 4.66912 15.8286 7.17575 17.1976L6.32773 20.6254C6.29528 20.7306 6.32219 20.8421 6.39263 20.9179C6.44113 20.9708 6.50585 21 6.5761 21C6.63032 21 6.68416 20.9766 6.73284 20.9357L10.3792 18.2681C10.9088 18.3499 11.449 18.3967 11.9998 18.3967C16.9697 18.3967 21 14.9513 21 10.6984C21 6.44557 16.9697 3 11.9998 3Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="text-base text-black font-bold">카카오로 시작하기</span>
          </div>
        </Button>
      </div>
    </main>
  );
}
