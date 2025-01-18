import React from "react";

const Products = () => {
  const products = [
    {
      name: "Autolaveuse",
      img: "/images/autolaveuse.jpg",
      description:
        "(Nettoyage en un seul passage) Cette Autolaveuse applique une solution nettoyante sur le sol, frotte pour éliminer la saleté, puis aspire l'eau sale et les résidus. Cela permet un gain de temps considérable par rapport à un nettoyage manuel.",
    },
    {
      name: "Autolaveuse",
      img: "/images/gallery1.jpg",
      description:
        "Cette Autolaveuse permet le nettoyage rapide dans les grandes surfaces",
    },
    {
      name: "Monobrose",
      img: "/images/monobrose.jpg",
      description:
        "machine électrique conçue pour nettoyer, décaper, lustrer et entretenir mécaniquement différents types de sols, durs ou souples. Elle est équipée d'un disque rotatif qui, associé à différents accessoires (brosses, disques de polissage), permet de traiter efficacement les surfaces.",
    },
  ];

  return (
    <section id="products" className="py-12 pt-[120px] bg-gray-100">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-8" data-aos="fade-right">
          Nos Produits
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              data-aos="fade-right"
              className="flex flex-col items-center p-6 bg-white rounded shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold mb-2">{product.name}</h3>
              <img
                className="w-[350px] h-[350px] object-cover py-6"
                src={product.img}
                alt={product.name}
              />
              <p className="text-gray-600 font-medium">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
