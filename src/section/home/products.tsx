import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselItem } from "../../components/ui/carousel";
import productsData from "../../data/products.json";

const Products = () => (
  <>
    <section className="flex flex-col items-center text-center px-4 md:px-16 lg:px-24 py-12 bg-white w-full">
      <h1 className="text-xl md:text-xl font-bold text-black p-4">Why Choose Us?</h1>
      <p className="text-3xl md:text-5xl font-extrabold text-blue-950 p-4">
        We serve a wide variety of <br /> Products & Services
      </p>
    </section>

    <section className="flex flex-col items-center text-center px-4 md:px-16 lg:px-24 py-12 bg-gradient-to-r from-blue-50 to-blue-100 w-full">
      <Carousel>
        {productsData.map((item, index) => (
          <CarouselItem key={index}>
            <Card className="border-2 border-amber-500 w-64">
              <CardContent className="flex aspect-square  justify-center p-6 flex-col text-start">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg border-1 borderw-32 h-32 object-cover mb-4"
                  />
                )}
                <h3 className="text-start text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{item.Description}</p>
                <h1 className="text-blue-950 mt-4 text-start text-sm font-normal">Read More</h1>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  </>
);

export default Products;
