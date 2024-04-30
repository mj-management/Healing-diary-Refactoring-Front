import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function TrendingGroups() {
  return (
    <div className="w-full">
      <div className="relative w-full">
        {/* 데이터가 들어옴 */}
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="">
                  <Card className="flex justify-center items-center hover:bg-gray-100 transition duration-300 ease-in-out rounded-none border-none">
                    <CardContent className="flex items-center justify-center w-full">
                      <div className="relative w-full h-64 max-h-64 flex items-center justify-center ">
                        <Image
                          src="/assets/icons/angry.gif"
                          width={390}
                          height={390}
                          alt="Animated GIF of an angry face"
                          className="transition duration-300 ease-in-out transform hover:scale-110 z-50"
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
  );
}
