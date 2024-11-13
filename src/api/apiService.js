import axios from 'axios';

// URL da sua API
const apiUrl = 'https://my-api-production-1531.up.railway.app';
const produtos = [
  {
      "id": 1,
      "name": "Bolo de Chocolate",
      "unit": "1KG",
      "price": 25,
      "category": "bolos",
      "quantity": 15,
      "description": "Bolo de chocolate fofinho com cobertura de ganache cremosa.",
      "image": "https://th.bing.com/th/id/R.040f78453c92065140d965907e4672e4?rik=EYvvUzEKljBztQ&pid=ImgRaw&r=0"
  },
  {
      "id": 2,
      "name": "Bolo de Cenoura",
      "unit": "700G",
      "price": 15,
      "category": "bolos",
      "quantity": 20,
      "description": "Bolo de cenoura fofinho, com cobertura de chocolate. Um clássico delicioso!",
      "image": "https://img.freepik.com/psd-premium/bolo-de-cenoura-com-cobertura-de-chocolate-e-brigadeiro-granulado-isolado-fundo-branco_598644-756.jpg"
  },
  {
      "id": 3,
      "name": "Bolo de Fubá com Goiabada",
      "unit": "800G",
      "price": 18,
      "category": "bolos",
      "quantity": 12,
      "description": "Bolo de fubá macio com pedaços de goiabada. Perfeito para o café da tarde!",
      "image": "https://panutti.com.br/resize/imagecache/c4c62c988bad987bfc0cdd49d4e83708.jpg"
  },
  {
      "id": 4,
      "name": "Brigadeiro Gourmet",
      "unit": "unid.",
      "price": 2.5,
      "category": "doces",
      "quantity": 100,
      "description": "Brigadeiro cremoso e tradicional, coberto com chocolate belga.",
      "image": "https://folhago.com.br/blogs/receitas-faceis/wp-content/uploads/2021/11/Doce-gourmet-brigadeiro-de-cafe-Imagem-canva.jpg"
  },
  {
      "id": 5,
      "name": "Beijinho",
      "unit": "unid.",
      "price": 2.5,
      "category": "doces",
      "quantity": 80,
      "description": "Beijinho delicioso com coco ralado e cravo para decorar.",
      "image": "https://docesdangelo.com.br/site/wp-content/uploads/2015/08/leite-ninho.jpg?v=1688672836"
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
      "image": "https://th.bing.com/th/id/OIP.fyYiwn8kizuDM9oUYPz7UwHaKe?rs=1&pid=ImgDetMain"
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

// Função para buscar usuários
export async function fetchUsers() {
  try {
    const response = await axios.get(`${apiUrl}/user`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
}

// Função para buscar produtos
export async function fetchProducts() {
  try {
    //const response = await axios.get(`${apiUrl}/products`);
    return produtos;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
}

// Função para cadastrar um usuário
export async function createUser(userData) {
  try {
    const response = await axios.post(`${apiUrl}/user`, userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Função para cadastrar um produto
export async function createProduct(productData) {
  try {
    const response = await axios.post(`${apiUrl}/products`, productData);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error.response ? error.response.data : error.message);
    throw error;
  }
}
