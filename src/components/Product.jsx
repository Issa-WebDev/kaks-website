import React from "react";

const Products = () => {
  const products = [
    { name: "Produit 1", description: "Description du produit 1" },
    { name: "Produit 2", description: "Description du produit 2" },
    { name: "Produit 3", description: "Description du produit 3" },
  ];

  return (
    <section id="products" className="py-12 pt-[120px] bg-gray-100">
      <div className="container mx-auto text-center px-[20px]">
        <h2 className="text-3xl font-bold mb-8">Nos Produits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="p-6 bg-white rounded shadow-md">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
