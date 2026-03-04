
export const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "kurta", label: "Kurta" },
      { value: "shirt", label: "Shirt" },
      { value: "tshirt", label: "T-Shirt" },
      { value: "jeans", label: "Jeans" },
      { value: "jacket", label: "Jacket" }
    ]
  },
  {
    id: "brand",
    name: "Brand",
    options: [
      { value: "zosh", label: "ZoshPremium" },
      { value: "roadster", label: "Roadster" },
      { value: "hrx", label: "HRX" },
      { value: "levis", label: "Levi's" }
    ]
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "black", label: "Black" },
      { value: "white", label: "White" },
      { value: "blue", label: "Blue" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" }
    ]
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "xxl", label: "XXL" }
    ]
  },
  {
    id: "price",
    name: "Price Range",
    options: [
      { value: "0-500", label: "Under ₹500" },
      { value: "500-1000", label: "₹500 - ₹1000" },
      { value: "1000-2000", label: "₹1000 - ₹2000" },
      { value: "2000+", label: "Above ₹2000" }
    ]
  }
]