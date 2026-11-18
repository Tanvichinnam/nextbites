export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza", title: "Margherita Pizza", emoji: "🍕",
    minutes: 35, difficulty: "Medium", cuisine: "Italian",
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Fresh basil", "Olive oil"],
    steps: ["Preheat oven to 250°C.", "Roll out the dough.", "Spread sauce and add mozzarella.", "Bake for 10–12 minutes.", "Top with basil and olive oil."],
  },
  {
    id: "paneer-butter-masala", title: "Paneer Butter Masala", emoji: "🍛",
    minutes: 40, difficulty: "Medium", cuisine: "Indian",
    ingredients: ["Paneer", "Butter", "Tomatoes", "Cashews", "Cream", "Garam masala"],
    steps: ["Blend tomatoes and cashews into a paste.", "Cook the paste in butter with spices.", "Add cream and simmer.", "Add paneer cubes and cook 5 minutes."],
  },
  {
    id: "veg-hakka-noodles", title: "Veg Hakka Noodles", emoji: "🍜",
    minutes: 25, difficulty: "Easy", cuisine: "Chinese",
    ingredients: ["Noodles", "Cabbage", "Carrot", "Capsicum", "Soy sauce", "Garlic"],
    steps: ["Boil and drain the noodles.", "Stir-fry garlic and vegetables on high heat.", "Add noodles and soy sauce.", "Toss well and serve hot."],
  },
  {
    id: "chocolate-brownie", title: "Chocolate Brownie", emoji: "🍫",
    minutes: 45, difficulty: "Hard", cuisine: "Dessert",
    ingredients: ["Dark chocolate", "Butter", "Sugar", "Eggs", "Flour", "Cocoa powder"],
    steps: ["Melt chocolate and butter together.", "Whisk in sugar and eggs.", "Fold in flour and cocoa.", "Bake at 180°C for 25 minutes."],
  },
  {
    id: "caesar-salad", title: "Caesar Salad", emoji: "🥗",
    minutes: 15, difficulty: "Easy", cuisine: "American",
    ingredients: ["Romaine lettuce", "Croutons", "Parmesan", "Caesar dressing", "Lemon"],
    steps: ["Wash and chop the lettuce.", "Toss with dressing and lemon.", "Top with croutons and parmesan."],
  },
];

export function getRecipe(id: string) {
  return recipes.find((r) => r.id === id);
}
