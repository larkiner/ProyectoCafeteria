// API functions for products

export const getProducts = async (category = 'all') => {
  // Mock data - in a real app, this would fetch from an API
  const products = {
    drinks: [
      {
        id: 1,
        name: "Americano",
        description: "Un café suave y aromático, preparado con espresso y agua caliente. Ideal para quienes buscan una experiencia clásica con cuerpo ligero y sabor equilibrado.",
        price: "5000$",
        image: "/Cafeamericano.jpeg",
        category: "drinks"
      },
      {
        id: 2,
        name: "Espreso",
        description: "Intenso y concentrado, el espreso es la base de todo buen café. Servido en una porción pequeña, ofrece un sabor profundo y un golpe de energía instantáneo.",
        price: "5000$",
        image: "/expreso.jpeg",
        category: "drinks"
      },
      {
        id: 3,
        name: "Capuchino",
        description: "Una deliciosa combinación de espresso, leche vaporizada y espuma cremosa. Su textura sedosa y su sabor equilibrado lo hacen perfecto para cualquier momento del día.",
        price: "5000$",
        image: "/Capuchino.jpeg",
        category: "drinks"
      },
      {
        id: 4,
        name: "Latte",
        description: "Cálido y reconfortante, el latte mezcla espresso con abundante leche vaporizada. Su suavidad lo convierte en la elección ideal para quienes prefieren un café más ligero y personalizable.",
        price: "5000$",
        image: "/Latte.jpeg",
        category: "drinks"
      }
    ],
    food: [
      {
        id: 5,
        name: "Croissant",
        description: "Un café suave y aromático, preparado con espresso y agua caliente. Ideal para quienes buscan una experiencia clásica con cuerpo ligero y sabor equilibrado.",
        price: "5000$",
        image: "/croissant.jpg",
        category: "food"
      },
      {
        id: 6,
        name: "Muffin",
        description: "Intenso y concentrado, el espreso es la base de todo buen café. Servido en una porción pequeña, ofrece un sabor profundo y un golpe de energía instantáneo.",
        price: "5000$",
        image: "/muffin.jpg",
        category: "food"
      },
      {
        id: 7,
        name: "Brownie de chocolate",
        description: "Una deliciosa combinación de espresso, leche vaporizada y espuma cremosa. Su textura sedosa y su sabor equilibrado lo hacen perfecto para cualquier momento del día.",
        price: "5000$",
        image: "/brownie.jpg",
        category: "food"
      },
      {
        id: 8,
        name: "Sándwich de jamón y queso",
        description: "Cálido y reconfortante, el latte mezcla espresso con abundante leche vaporizada. Su suavidad lo convierte en la elección ideal para quienes prefieren un café más ligero y personalizable.",
        price: "5000$",
        image: "/sandwich.jpg",
        category: "food"
      }
    ]
  };

  if (category === 'all') {
    return [...products.drinks, ...products.food];
  }
  
  return products[category] || [];
};

export const getProductById = async (id) => {
  const allProducts = await getProducts();
  return allProducts.find(product => product.id === parseInt(id));
};
