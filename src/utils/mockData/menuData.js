const menuData = {
  appetizers: [
    {
      id: 1,
      name: "Bruschetta",
      description: "Grilled bread rubbed with garlic and topped with olive oil, salt, and fresh tomato and basil",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=1974&auto=format&fit=crop",
      category: "appetizers",
      dietary: ["vegetarian"]
    },
    {
      id: 2,
      name: "Lemon Garlic Hummus",
      description: "Creamy hummus with fresh lemon, garlic, and extra virgin olive oil",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1508432310926-5712bcb79944?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "appetizers",
      dietary: ["vegetarian", "vegan", "gluten-free"]
    },
    {
      id: 3,
      name: "Calamari",
      description: "Crispy fried calamari served with lemon aioli",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2080&auto=format&fit=crop",
      category: "appetizers",
      dietary: []
    },
    {
      id: 4,
      name: "Mediterranean Mezze Platter",
      description: "Assortment of hummus, baba ganoush, tabbouleh, olives, and pita bread",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1543340713-0f7f0abf9e49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "appetizers",
      dietary: ["vegetarian"]
    }
  ],
  mains: [
    {
      id: 5,
      name: "Lemon Herb Grilled Chicken",
      description: "Tender chicken breast marinated in lemon and herbs, served with roasted vegetables",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=2069&auto=format&fit=crop",
      category: "mains",
      dietary: ["gluten-free"]
    },
    {
      id: 6,
      name: "Mediterranean Sea Bass",
      description: "Fresh sea bass fillet with olive oil, lemon, and herbs, served with seasonal vegetables",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=2070&auto=format&fit=crop",
      category: "mains",
      dietary: ["gluten-free"]
    },
    {
      id: 7,
      name: "Vegetable Paella",
      description: "Traditional Spanish rice dish with seasonal vegetables and saffron",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=2070&auto=format&fit=crop",
      category: "mains",
      dietary: ["vegetarian", "vegan", "gluten-free"]
    },
    {
      id: 8,
      name: "Lamb Kebabs",
      description: "Grilled lamb kebabs with Mediterranean spices, served with rice and tzatziki",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "mains",
      dietary: []
    }
  ],
  pastas: [
    {
      id: 9,
      name: "Lemon Garlic Pasta",
      description: "Fresh pasta tossed with lemon, garlic, olive oil, and parmesan",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop",
      category: "pastas",
      dietary: ["vegetarian"]
    },
    {
      id: 10,
      name: "Seafood Linguine",
      description: "Linguine with mixed seafood in a light tomato sauce",
      price: 21.99,
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070&auto=format&fit=crop",
      category: "pastas",
      dietary: []
    },
    {
      id: 11,
      name: "Mushroom Risotto",
      description: "Creamy arborio rice with wild mushrooms and parmesan",
      price: 17.99,
      image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070&auto=format&fit=crop",
      category: "pastas",
      dietary: ["vegetarian", "gluten-free"]
    },
    {
      id: 12,
      name: "Eggplant Parmesan",
      description: "Layers of eggplant, tomato sauce, and cheese, baked to perfection",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?q=80&w=1932&auto=format&fit=crop",
      category: "pastas",
      dietary: ["vegetarian"]
    }
  ],
  desserts: [
    {
      id: 13,
      name: "Lemon Sorbet",
      description: "Refreshing lemon sorbet served in a frozen lemon shell",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1974&auto=format&fit=crop",
      category: "desserts",
      dietary: ["vegetarian", "vegan", "gluten-free"]
    },
    {
      id: 14,
      name: "Tiramisu",
      description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1974&auto=format&fit=crop",
      category: "desserts",
      dietary: ["vegetarian"]
    },
    {
      id: 15,
      name: "Baklava",
      description: "Sweet pastry made of layers of filo filled with chopped nuts and sweetened with honey",
      price: 7.99,
      image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=2070&auto=format&fit=crop",
      category: "desserts",
      dietary: ["vegetarian"]
    },
    {
      id: 16,
      name: "Chocolate Olive Oil Cake",
      description: "Rich chocolate cake made with olive oil, served with fresh berries",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=2003&auto=format&fit=crop",
      category: "desserts",
      dietary: ["vegetarian"]
    }
  ],
  drinks: [
    {
      id: 17,
      name: "Fresh Lemonade",
      description: "Freshly squeezed lemons with a hint of mint",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=1974&auto=format&fit=crop",
      category: "drinks",
      dietary: ["vegetarian", "vegan", "gluten-free"]
    },
    {
      id: 18,
      name: "Mediterranean Sangria",
      description: "Red wine sangria with citrus fruits and Mediterranean herbs",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?q=80&w=1974&auto=format&fit=crop",
      category: "drinks",
      dietary: []
    },
    {
      id: 19,
      name: "Greek Coffee",
      description: "Traditional Greek coffee served with a sweet treat",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop",
      category: "drinks",
      dietary: ["vegetarian", "vegan", "gluten-free"]
    },
    {
      id: 20,
      name: "Sparkling Water with Citrus",
      description: "Sparkling water infused with lemon, lime, and orange",
      price: 3.49,
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop",
      category: "drinks",
      dietary: ["vegetarian", "vegan", "gluten-free"]
    }
  ]
};

export default menuData; 