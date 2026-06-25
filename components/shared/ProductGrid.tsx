import Image, { StaticImageData } from "next/image";
import product1 from "@/assets/images/product1.png";
import product2 from "@/assets/images/product2.png";
import product3 from "@/assets/images/product3.png";
import product4 from "@/assets/images/product4.png";
import product5 from "@/assets/images/product5.png";

type Product = {
  id: number;
  category: string;
  title: string;
  price: number;
  image: string | StaticImageData;
  bgColor: string;
};

const products: Product[] = [
  {
    id: 1,
    category: "Cat",
    title: "Raw Food Freeze Dried",
    price: 90,
    image: product1,
    bgColor: "#4EB9B9",
  },
  {
    id: 2,
    category: "Doggy",
    title: "Raw Food Freeze Dried",
    price: 99,
    image: product2,
    bgColor: "#BC8038",
  },
  {
    id: 3,
    category: "Rabbit",
    title: "Raw Food Freeze Dried",
    price: 90,
    image: product3,
    bgColor: "#C849CE",
  },
  {
    id: 4,
    category: "Rabbit",
    title: "Raw Food Freeze Dried",
    price: 99,
    image: product4,
    bgColor: "#E29C21",
  },
  {
    id: 5,
    category: "Doggy",
    title: "Raw Food Freeze Dried",
    price: 99,
    image: product5,
    bgColor: "#E96823",
  },
  {
    id: 6,
    category: "Rabbit",
    title: "Raw Food Freeze Dried",
    price: 90,
    image: product3,
    bgColor: "#C849CE",
  },
  {
    id: 7,
    category: "Rabbit",
    title: "Raw Food Freeze Dried",
    price: 99,
    image: product4,
    bgColor: "#E29C21",
  },
  {
    id: 8,
    category: "Cat",
    title: "Raw Food Freeze Dried",
    price: 90,
    image: product1,
    bgColor: "#4EB9B9",
  },
];

export default function ProductGrid() {
  return (
    <section className=" pt-7 lg:pt-12">
      <div className=" px-5 lg:px-0">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl p-5 text-white transition-all duration-300 hover:-translate-y-2"
              style={{ backgroundColor: product.bgColor }}
            >
              <div className="mb-3">
                <p className="text-sm opacity-90">{product.category}</p>

                <h3 className="mt-1 text-xl font-semibold leading-snug">
                  {product.title}
                </h3>
              </div>

              <div className="relative  flex h-55 items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={240}
                  height={220}
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              <div className="mt-4 text-center">
                <p className="text-2xl font-bold">${product.price}.99</p>
              </div>

              <div className="mt-3.5 flex gap-2.5">
                <button className="flex-1 rounded-full bg-white py-2 text-sm font-medium text-[#333333] transition hover:scale-105">
                  Buy Now
                </button>

                <button className="flex-1 rounded-full border border-white py-2 text-sm font-semibold text-white transition ">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
