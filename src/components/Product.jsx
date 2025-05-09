import React from "react";
import AnimatedElement from "./AnimatedElement";

const Products = () => {
  const products = [
    {
      name: "Kartcher Triphasé",
      img: "/images/kartcherT.png",
      description:
        "Sa pression permet de décoller les salissures les plus tenaces, même sur des surfaces très résistantes.",
    },
    {
      name: "Monobrose",
      img: "/images/monoB.png",
      description:
        "machine électrique conçue pour nettoyer, décaper, lustrer et entretenir mécaniquement différents types de sols, durs ou souples. Elle est équipée d'un disque rotatif qui, associé à différents accessoires (brosses, disques de polissage), permet de traiter efficacement les surfaces.",
    },
    {
      name: "Autolaveuse",
      img: "/images/autoL.png",
      description:
        "(Nettoyage en un seul passage) Cette Autolaveuse applique une solution nettoyante sur le sol, frotte pour éliminer la saleté, puis aspire l'eau sale et les résidus. Cela permet un gain de temps considérable par rapport à un nettoyage manuel.",
    },
  ];

  return (
    <section
      id="products"
      className="py-12 pt-[120px] bg-gray-100 dark:bg-[#111]"
    >
      <div className="container mx-auto text-center px-6">
        <AnimatedElement>
          <h1 className="text-4xl font-extrabold mb-8 text-gray-800 dark:text-white border-b-4 border-green-500 inline-block">
            Nos Matériels
          </h1>
        </AnimatedElement>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <AnimatedElement key={index}>
              <div className="flex flex-col items-center p-6 bg-white dark:bg-[#222] rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg border dark:border-none cursor-pointer h-full">
                <h3 className="text-lg font-bold mb-2 border-l-4 pl-2 border-green-500 dark:text-white">
                  {product.name}
                </h3>
                <img
                  className="w-[250px] h-[300px] object-cover py-6 rounded"
                  src={product.img}
                  alt={product.name}
                />
                <p className="text-gray-600 dark:text-white text-left font-medium">
                  {product.description}
                </p>
              </div>
            </AnimatedElement>
          ))}
        </div>
        <AnimatedElement>
          <p className="text-red-500 text-xl font-bold pt-11 text-center">
            NB : Nos Matériels sont aussi en location.
          </p>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Products;
