import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/service/api/ProductFake";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function Catalogo() {
  const [products, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setData(response);
      } catch (erro) {
        console.log("Erro na comumicação com API", erro);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Loja de Compras</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-700 font-bold">
                R$ {product.price.toFixed(2)}
              </p>
              <Button className="mt-2 w-full" variant="default">
                Adicionar ao Carrinho
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Catalogo;
