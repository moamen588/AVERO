export type Category = "hoodies" | "tees" | "bottoms" | "outerwear";
export type FilterCategory = Category | "all";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  image: string;
  gallery: string[];
  fabric: string;
  sizes: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

function item(
  id: string,
  name: string,
  category: Category,
  price: number,
  description: string,
  image: string,
  options?: {
    sizes?: string[];
    isNew?: boolean;
    isBestSeller?: boolean;
    fabric?: string;
    gallery?: string[];
  }
): Product {
  return {
    id,
    name,
    category,
    price,
    description,
    image,
    gallery: options?.gallery ?? [image],
    fabric: options?.fabric ?? "100% Organic Heavyweight Cotton",
    sizes: options?.sizes ?? ["S", "M", "L", "XL"],
    isNew: options?.isNew,
    isBestSeller: options?.isBestSeller,
  };
}

export const products: Product[] = [
  item("p1", "Oversized Heavyweight Hoodie", "hoodies", 1599, "500 GSM French Terry",
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&fit=crop",
    {
      isNew: true,
      fabric: "100% Organic Heavyweight Cotton, 500 GSM French Terry",
      gallery: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&fit=crop",
        "https://images.unsplash.com/photo-1578768079470-0a4a41d6470b?q=80&w=800&fit=crop",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&fit=crop",
      ],
    }),

  item("p2", "Drop Shoulder Zip Hoodie", "hoodies", 1799, "420 GSM Fleece",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&fit=crop",
    {
      isBestSeller: true,
      fabric: "80% Cotton 20% Polyester Fleece, 420 GSM",
      gallery: [
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&fit=crop",
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&fit=crop",
      ],
    }),

  item("p3", "Boxy Fit Graphic Tee", "tees", 599, "240 GSM Cotton",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&fit=crop",
    {
      isNew: true,
      fabric: "100% Combed Cotton, 240 GSM Heavyweight",
      gallery: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&fit=crop",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&fit=crop",
      ],
    }),

  item("p4", "Essential Crew Neck Tee", "tees", 449, "220 GSM Pima Cotton",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&fit=crop",
    {
      fabric: "100% Pima Cotton, 220 GSM",
      gallery: [
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&fit=crop",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&fit=crop",
      ],
    }),

  item("p5", "Relaxed Cargo Pants", "bottoms", 1199, "Ripstop Nylon",
    "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=600&fit=crop",
    {
      isBestSeller: true,
      fabric: "100% Ripstop Nylon, Water-Repellent Coating",
      gallery: [
        "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&fit=crop",
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&fit=crop",
      ],
    }),

  item("p6", "Tapered Track Pants", "bottoms", 999, "300 GSM French Terry",
    "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=600&fit=crop",
    {
      isNew: true,
      fabric: "80% Cotton 20% Polyester French Terry, 300 GSM",
      gallery: [
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&fit=crop",
        "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&fit=crop",
      ],
    }),

  item("p7", "Utility Bomber Jacket", "outerwear", 2499, "Water-Resistant Shell",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=600&fit=crop",
    {
      isNew: true,
      fabric: "100% Nylon Water-Resistant Shell, Satin Lining",
      gallery: [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&fit=crop",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&fit=crop",
      ],
    }),

  item("p8", "Washed Denim Overshirt", "outerwear", 1899, "12 oz Japanese Denim",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&fit=crop",
    {
      fabric: "100% Japanese Selvedge Denim, 12 oz",
      gallery: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&fit=crop",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&fit=crop",
      ],
    }),
];

export const categories: { label: string; value: FilterCategory }[] = [
  { label: "All", value: "all" },
  { label: "Hoodies", value: "hoodies" },
  { label: "Tees", value: "tees" },
  { label: "Bottoms", value: "bottoms" },
  { label: "Outerwear", value: "outerwear" },
];
