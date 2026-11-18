export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  { id: "margherita-pizza", title: "Margherita Pizza", emoji: "🍕",
    minutes: 35, difficulty: "Medium", cuisine: "Italian" },
  { id: "paneer-butter-masala", title: "Paneer Butter Masala", emoji: "🍛",
    minutes: 40, difficulty: "Medium", cuisine: "Indian" },
  { id: "veg-hakka-noodles", title: "Veg Hakka Noodles", emoji: "🍜",
    minutes: 25, difficulty: "Easy", cuisine: "Chinese" },
  { id: "chocolate-brownie", title: "Chocolate Brownie", emoji: "🍫",
    minutes: 45, difficulty: "Hard", cuisine: "Dessert" },
  { id: "caesar-salad", title: "Caesar Salad", emoji: "🥗",
    minutes: 15, difficulty: "Easy", cuisine: "American" },
];
