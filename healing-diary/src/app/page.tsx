import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex w-full max-w-limit flex-1 flex-col items-stretch justify-start">
      <div className="w-full flex-1">
        <div className="relative w-full">
          <Carousel>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 bg-red-300 flex justify-center items-center">
                    <Image src="/assets/icons/angry.gif" width={520} height={390} alt="image" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </main>
  );
}
