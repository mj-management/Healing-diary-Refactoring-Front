import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex w-full max-w-limit flex-1 flex-col items-stretch justify-start">
      <div className="w-full">
        <div className="relative w-full">
          {/* 데이터가 들어옴 */}
          <Carousel>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="px-4">
                    <Card className="flex justify-center items-center hover:bg-gray-100 transition duration-300 ease-in-out">
                      <CardContent className="flex items-center justify-center w-full max-h-64">
                        <div className="relative w-full h-64 max-h-64 flex items-center justify-center">
                          <Image
                            src="/assets/icons/angry.gif"
                            width={320}
                            height={256}
                            alt="Animated GIF of an angry face"
                            className="transition duration-300 ease-in-out transform hover:scale-110"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className="w-full max-w-limit overflow-x-auto space-x-4 mt-8 px-4 flex">
        <div className="flex shrink-0 flex-col gap-2 w-[300px]">
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
          <div className="group inline-block w-full relative">
            <Link href="#">
              <div className="relative flex flex-row gap-3">
                <div className="relative aspect-square shrink-0 overflow-hidden h-[104px] w-[104px] rounded">
                  <Image
                    src="https://media.hity.io/thumbnails/file_upload/20240320/%ED%86%B5%EA%B0%80%EC%8A%B4%EC%82%B4_%ED%9B%84%EC%B6%94%EB%A7%9B_%EC%8D%B8%EB%84%A4%EC%9D%BC_87344338_thumbnail_1024.gif"
                    width={104}
                    height={104}
                    className="overflow-hidden object-cover max-h-full min-h-full min-w-full max-w-full rounded"
                    alt=""
                  />
                </div>
                <div className="flex w-full flex-col text-black">
                  <p className="mb-0.5 line-clamp-2 w-full text-sm ">건담닭</p>
                  <p className="mb-1 line-clamp-2 w-full text-xs">건담닭 통가슴살 후추맛 (5/15/40개입)</p>
                  <div className="flex flex-col justify-center items-start gap-0.5">
                    <div className="flex flex-row items-center justify-start gap-0.5">
                      <p className="flex text-gray-400 line-through text-xs">12,500원</p>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-2">
                      <p className="flex flex-row items-center justify-center">
                        <span className="flex pr-0.5 text-primary-sky text-base">21%</span>
                        <span className="text-base">9,900</span>
                        <span className="text-base">원</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full max-w-limit overflow-x-auto space-x-4 mt-8 px-4 flex">
        {Array.from({ length: 10 }).map(
          (
            _,
            index // 예제로 10개의 카드를 생성
          ) => (
            <Card key={index} className="w-[200px] h-[200px] max-w-[200px] max-h-[200px] shrink-0">
              <CardHeader>
                <CardTitle>Card Title {index + 1}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </main>
  );
}
