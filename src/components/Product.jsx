import React from "react";

const Products = () => {
  const products = [
    {
      name: "Autolaveuse",
      img: "/images/gallery1.jpg",
      description:
        "Cette Autolaveuse permet le nettoyage rapide dans les grandes surfaces",
    },
    {
      name: "Autolaveuse: Nettoyage en un seul passage",
      img: "/images/autolaveuse.jpg",
      description:
        "Cette Autolaveuse applique une solution nettoyante sur le sol, frotte pour éliminer la saleté, puis aspire l'eau sale et les résidus. Cela permet un gain de temps considérable par rapport à un nettoyage manuel.",
    },
  ];

  return (
    <section id="products" className="py-12 pt-[120px] bg-gray-100">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-8">Nos Produits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <img
                className="w-[350px] h-[350px] object-cover py-6"
                src={product.img}
                alt={product.name}
              />
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
