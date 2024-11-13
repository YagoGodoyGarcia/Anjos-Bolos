import { useState, useEffect } from 'react';

const produtos = [
  {
      "id": 1,
      "name": "Bolo de Chocolate",
      "unit": "1KG",
      "price": 25,
      "category": "bolos",
      "quantity": 15,
      "description": "Bolo de chocolate fofinho com cobertura de ganache cremosa.",
      "image": "https://example.com/images/bolo_chocolate.png"
  },
  {
      "id": 2,
      "name": "Bolo de Cenoura",
      "unit": "700G",
      "price": 15,
      "category": "bolos",
      "quantity": 20,
      "description": "Bolo de cenoura fofinho, com cobertura de chocolate. Um clássico delicioso!",
      "image": "https://example.com/images/bolo_cenoura.png"
  },
  {
      "id": 3,
      "name": "Bolo de Fubá com Goiabada",
      "unit": "800G",
      "price": 18,
      "category": "bolos",
      "quantity": 12,
      "description": "Bolo de fubá macio com pedaços de goiabada. Perfeito para o café da tarde!",
      "image": "https://example.com/images/bolo_fuba.png"
  },
  {
      "id": 4,
      "name": "Brigadeiro Gourmet",
      "unit": "unid.",
      "price": 2.5,
      "category": "doces",
      "quantity": 100,
      "description": "Brigadeiro cremoso e tradicional, coberto com chocolate belga.",
      "image": "https://example.com/images/brigadeiro.png"
  },
  {
      "id": 5,
      "name": "Beijinho",
      "unit": "unid.",
      "price": 2.5,
      "category": "doces",
      "quantity": 80,
      "description": "Beijinho delicioso com coco ralado e cravo para decorar.",
      "image": "https://example.com/images/beijinho.png"
  },
  {
      "id": 6,
      "name": "Bolo Red Velvet",
      "unit": "1KG",
      "price": 30,
      "category": "bolos",
      "quantity": 10,
      "description": "Bolo Red Velvet macio com cobertura de cream cheese. Sofisticado e saboroso!",
      "image": "https://example.com/images/red_velvet.png"
  },
  {
      "id": 7,
      "name": "Torta de Limão",
      "unit": "500G",
      "price": 22,
      "category": "tortas",
      "quantity": 8,
      "description": "Torta de limão refrescante com merengue dourado. Leve e irresistível!",
      "image": "https://example.com/images/torta_limao.png"
  },
  {
      "id": 8,
      "name": "Bolo de Coco com Abacaxi",
      "unit": "900G",
      "price": 28,
      "category": "bolos",
      "quantity": 14,
      "description": "Bolo úmido de coco com pedaços de abacaxi fresco. Tropical e delicioso!",
      "image": "https://example.com/images/bolo_coco_abacaxi.png"
  },
  {
      "id": 9,
      "name": "Cupcake de Morango",
      "unit": "unid.",
      "price": 5,
      "category": "doces",
      "quantity": 50,
      "description": "Cupcake de baunilha com recheio de morango fresco e cobertura de chantilly.",
      "image": "https://www.designi.com.br/images/preview/12657959.jpg"
  },
  {
      "id": 10,
      "name": "Pavê de Chocolate",
      "unit": "500G",
      "price": 20,
      "category": "sobremesas",
      "quantity": 10,
      "description": "Pavê de chocolate com camadas de creme e biscoito. Uma delícia para qualquer ocasião!",
      "image": "https://example.com/images/pave_chocolate.png"
  }
]


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar produtos
  const fetchProducts = async () => {
    try {
      //const response =
      //await fetch('https://my-api-production-1531.up.railway.app/products'); // URL da API online
      //if (!response.ok) {
       // throw new Error('Network response was not ok');
      //}
      const data = produtos
      console.log(data);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch products', error);
      setLoading(false);
    }
  };

  // Chama a função fetchProducts ao carregar o componente
  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className='mt-[50px] mx-5'>
      <h1 className='text-2xl w-[100%] text-center font-bold bg-gradient-to-r from-primaryGreen via-primaryGreen to-secondaryGreen'>Lista de produtos cadastrados</h1>
      <div className='flex flex-row mt-[50px]'>
        <ul className='flex flex-wrap gap-[50px]'>
        {products.map((product) => (
          <li key={product.id}>
            <h3>Product: {product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity} {product.unit}</p>
            <p className='w-[200px]'>Description: {product.description}</p>
            {/* Adicionando a imagem */}
            <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ProductList;
