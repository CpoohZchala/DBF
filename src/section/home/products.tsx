import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import productsData from "../../data/products.json";

const Products = () => (
  <>
    <section className="flex flex-col items-center text-center px-4 md:px-16 lg:px-24 py-12 bg-white w-full">
      <h1 className="text-xl md:text-xl font-bold text-black p-4">Why Choose Us?</h1>
      <p className="text-3xl md:text-5xl font-extrabold text-blue-950 p-4">
        We serve a wide variety of <br /> Products & Services
      </p>
    </section>

    {/* Horizontal Scroll Section */}
    <section className="px-4 md:px-16 lg:px-24 py-12 bg-gradient-to-r from-blue-50 to-blue-100 w-full">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide scrollbar-custom">
        {productsData.map((item, index) => (
          <Card key={index} className="border-2 border-amber-500 w-70 flex-shrink-0">
            <CardContent className="flex flex-col items-center p-6">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg border-2  border-gray-200 w-100 h-50 object-cover mb-4"
                />
              )}
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-500 text-center">{item.Description}</p>
              
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </>
);

export default Products;
