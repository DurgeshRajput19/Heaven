import curry from "../assets/curryimg.jpg";
import pizza from "../assets/pizzaimg.jpg";
import rice from "../assets/burgerimg.jpg";
import deserts from "../assets/desertimg.jpg";
import fruits from "../assets/fruitsimg.jpg";
import drinks from "../assets/drinksimg.jpg";

import img1 from "../assets/burger.jpg";
import img2 from "../assets/burger1.jpg";
import img3 from "../assets/burger5.jpg";
import img4 from "../assets/burger3.jpg";
import img5 from "../assets/burger4.jpg";
import img6 from "../assets/pizza.jpg";
import img7 from "../assets/pizza1.jpg";
import img8 from "../assets/pizza2.jpg";
import img9 from "../assets/pizza3.jpg";
import img10 from "../assets/pizza4.jpg";
import img18 from "../assets/pizza5.jpg";
import img19 from "../assets/pizza6.jpg";
import img20 from "../assets/pizza7.jpg";
import img11 from "../assets/curry.jpg";
import img12 from "../assets/curry1.jpg";
import img13 from "../assets/curry2.jpg";
import img14 from "../assets/curry3.jpg";
import img15 from "../assets/curry4.jpg";
import img16 from "../assets/curry5.jpg";
import img17 from "../assets/curry6.jpg";
import img21 from "../assets/biryani1.jpg";
import img22 from "../assets/biryani2.jpg";
import img23 from "../assets/biryani3.jpg";
import img24 from "../assets/biryani4.jpg";
import img25 from "../assets/biryani5.jpg";
import img26 from "../assets/biryani6.jpg";
import img27 from "../assets/biryani7.jpg";
import img28 from "../assets/biryani8.jpg";
import img29 from "../assets/drink1.jpg";
import img30 from "../assets/drink2.jpg";
import img31 from "../assets/drink3.jpg";
import img32 from "../assets/drink4.jpg";
import img33 from "../assets/drink5.jpg";
import img34 from "../assets/drink6.jpg";
import img35 from "../assets/drink7.jpg";
import img36 from "../assets/drink8.jpg";
import img37 from "../assets/desert1.jpg";
import img38 from "../assets/desert2.jpg";
import img39 from "../assets/desert3.jpg";
import img40 from "../assets/fruits1.jpg";
import img41 from "../assets/fruits2.jpg";
import img42 from "../assets/fruit3.jpg";
import img43 from "../assets/fruits4.jpg";
import img44 from "../assets/fruits5.jpg";
import img45 from "../assets/fruits6.jpg";
import img46 from "../assets/fruits7.jpg";
import img47 from "../assets/fruits8.jpg";

export const categories = [
  {
    name: "Curry",
    image: curry,
  },
  {
    name: "Pizza",
    image: pizza,
  },
  {
    name: "Rice",
    image: rice,
  },
  {
    name: "Deserts",
    image: deserts,
  },
  {
    name: "Drinks",
    image: drinks,
  },
  {
    name: "Fruits",
    image: fruits,
  },
];

export const foods = [
  // Curry Products
  {
    _id: "1",
    name: "Spicy Chicken Curry",
    image: img11,
    price: { H: 5, F: 10 },
    description:
      "Our Spicy Chicken Curry, made with tender chicken pieces cooked in a flavorful blendEnjoy of spices.",
    category: "Curry",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "2",
    name: "Vegetarian Chickpea Curry",
    image: img12,
    price: { H: 10, F: 20 },
    description:
      "Our Vegetarian Chickpea Curry is a hearty dish made with tender chickpeas simmered in a rich tomato-based sauce.",
    category: "Curry",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "3",
    name: "Beef Vindaloo",
    image: img15,
    price: { H: 20, F: 30 },
    description:
      "Experience the fiery taste of our Beef Vindaloo, a traditional Goan dish with a spicy and tangy sauce.",
    category: "Curry",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "4",
    name: "Creamy Paneer Butter Masala",
    image: img16,
    price: { H: 15, F: 20 },
    description:
      "Our Creamy Paneer Butter Masala features soft paneer cubes cooked in a rich and creamy tomato gravy.",
    category: "Curry",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "5",
    name: "Lamb Rogan Josh",
    image: img13,
    price: { H: 5, F: 10 },
    description:
      "Try our Lamb Rogan Josh, a traditional Kashmiri dish with tender lamb in a fragrant curry sauce.",
    category: "Curry",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "6",
    name: "Fish Curry with Coconut Milk",
    image: img14,
    price: { H: 10, F: 20 },
    description:
      "Delight in our Fish Curry, made with fresh fish fillets simmered in a creamy coconut milk sauce.",
    category: "Curry",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "7",
    name: "Egg Curry with Spices",
    image: img17,
    price: { H: 5, F: 10 },
    description:
      "Our Egg Curry is a simple yet flavorful dish, featuring boiled eggs cooked in a spiced gravy.",
    category: "Curry",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "8",
    name: "Mutton Korma",
    image: img11,
    price: { H: 15, F: 20 },
    description:
      "Savor our Mutton Korma, a royal dish made with tender mutton pieces in a rich, creamy sauce.",
    category: "Curry",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },

  // Pizza Products
  {
    _id: "9",
    name: "Margherita Pizza",
    image: img6,
    price: { S: 30, M: 35, L: 40, XL: 45 },
    description:
      "Our Margherita Pizza is a classic, topped with fresh mozzarella, tomatoes, and basil.",
    category: "Pizza",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "10",
    name: "Pepperoni Pizza",
    image: img7,
    price: { S: 30, M: 35, L: 40, XL: 45 },
    description:
      "Enjoy our Pepperoni Pizza, loaded with spicy pepperoni slices on a bed of melted cheese.",
    category: "Pizza",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "11",
    name: "BBQ Chicken Pizza",
    image: img8,
    price: { S: 30, M: 35, L: 40, XL: 45 },
    description:
      "Try our BBQ Chicken Pizza, topped with tender chicken pieces, BBQ sauce, and red onions.",
    category: "Pizza",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "12",
    name: "Vegetarian Pizza",
    image: img9,
    price: { S: 30, M: 35, L: 40, XL: 45 },
    description:
      "Our Vegetarian Pizza is a colorful mix of bell peppers, onions, mushrooms, and olives on a cheese base.",
    category: "Pizza",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "13",
    name: "Hawaiian Pizza",
    image: img10,
    price: { S: 30, M: 35, L: 40, XL: 45 },
    description:
      "Savor the sweet and savory taste of our Hawaiian Pizza, topped with ham and pineapple.",
    category: "Pizza",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "14",
    name: "Four Cheese Pizza",
    image: img18,
    price: { S: 30, M: 35, L: 40, XL: 45 },
    description:
      "Indulge in our Four Cheese Pizza, featuring a blend of mozzarella, cheddar, parmesan, and blue cheese.",
    category: "Pizza",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "15",
    name: "Spicy Sausage Pizza",
    image: img19,
    price: { S: 30, M: 35, L: 40, XL: 45 },
    description:
      "Our Spicy Sausage Pizza is topped with hot sausage, peppers, and onions for a fiery kick.",
    category: "Pizza",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "16",
    name: "Mushroom Truffle Pizza",
    image: img20,
    price: { S: 30, M: 35, L: 40, XL: 45 },
    description:
      "Experience the earthy flavors of our Mushroom Truffle Pizza, topped with sautéed mushrooms and truffle oil.",
    category: "Pizza",
    sizes: ["S", "M", "L", "XL"],
    date: 1716634345448,
    popular: false,
  },

  // Rice Products
  {
    _id: "17",
    name: "Chicken Biryani",
    image: img21,
    price: { H: 15, F: 20 },
    description:
      "Our Chicken Biryani is a fragrant rice dish, made with tender chicken pieces and aromatic spices.",
    category: "Rice",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "18",
    name: "Vegetable Fried Rice",
    image: img22,
    price: { H: 15, F: 20 },
    description:
      "Enjoy our Vegetable Fried Rice, a mix of rice, fresh vegetables, and soy sauce for a tasty meal.",
    category: "Rice",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "19",
    name: "Prawn Pilaf",
    image: img23,
    price: { H: 15, F: 20 },
    description:
      "Savor our Prawn Pilaf, a flavorful rice dish with prawns cooked in a fragrant broth.",
    category: "Rice",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "20",
    name: "Beef Pulao",
    image: img24,
    price: { H: 15, F: 20 },
    description:
      "Our Beef Pulao is a hearty dish, featuring tender beef pieces cooked with aromatic basmati rice.",
    category: "Rice",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "21",
    name: "Mutton Biryani",
    image: img25,
    price: { H: 15, F: 20 },
    description:
      "Try our Mutton Biryani, a rich and flavorful rice dish made with tender mutton and spices.",
    category: "Rice",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "22",
    name: "Egg Fried Rice",
    image: img26,
    price: { H: 15, F: 20 },
    description:
      "Our Egg Fried Rice is a simple yet delicious dish, made with scrambled eggs and seasoned rice.",
    category: "Rice",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "23",
    name: "Lemon Rice",
    image: img27,
    price: { H: 15, F: 20 },
    description:
      "Enjoy the tangy taste of our Lemon Rice, made with fresh lemon juice, turmeric, and aromatic spices.",
    category: "Rice",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "24",
    name: "Shrimp Fried Rice",
    image: img28,
    price: { H: 15, F: 20 },
    description:
      "Our Shrimp Fried Rice is a tasty dish, featuring juicy shrimp stir-fried with seasoned rice.",
    category: "Rice",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },

  // Deserts Products
  {
    _id: "25",
    name: "Burger",
    image: img1,
    price: { H: 15, F: 20 },
    description:
      "Indulge in our Classic Chocolate Cake, made with layers of moist chocolate sponge and rich ganache.",
    category: "Deserts",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "26",
    name: "Burger",
    image: img2,
    price: { H: 15, F: 20 },
    description:
      "Savor our Creamy Cheesecake, topped with a medley of fresh berries for a delightful finish.",
    category: "Deserts",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "27",
    name: "Burger",
    image: img3,
    price: { H: 15, F: 20 },
    description:
      "Enjoy our Warm Apple Pie, filled with spiced apples and encased in a flaky, buttery crust.",
    category: "Deserts",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "28",
    name: "Burger",
    image: img4,
    price: { H: 15, F: 20 },
    description:
      "Treat yourself to our Decadent Chocolate Brownie, featuring a rich, fudgy center.",
    category: "Deserts",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "29",
    name: "Burger",
    image: img5,
    price: { H: 15, F: 20 },
    description:
      "Relish our Light Lemon Tart, offering a tangy lemon filling in a crisp, buttery crust.",
    category: "Deserts",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },

  {
    _id: "30",
    name: "Velvety Chocolate Mousse with Whipped Cream",
    image: img37,
    price: { H: 15, F: 20 },
    description:
      "Experience the smooth texture of our Velvety Chocolate Mousse, topped with fresh whipped cream.",
    category: "Deserts",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "31",
    name: "Creamy Panna Cotta with Berry Compote",
    image: img38,
    price: { H: 15, F: 20 },
    description:
      "Delight in our Creamy Panna Cotta, served with a luscious berry compote.",
    category: "Deserts",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "32",
    name: "Traditional Tiramisu with Mascarpone Cream",
    image: img39,
    price: { H: 15, F: 20 },
    description:
      "Savor the flavors of Italy with our Traditional Tiramisu, layered with rich mascarpone cream.",
    category: "Deserts",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: true,
  },
  // Drinks Products
  {
    _id: "33",
    name: "Chilled Lemonade with Fresh Mint",
    image: img29,
    price: { H: 15, F: 20 },
    description:
      "Enjoy our Chilled Lemonade, infused with fresh mint for a refreshing twist on a classic drink.",
    category: "Drinks",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "34",
    name: "Smooth Vanilla Milkshake",
    image: img30,
    price: { H: 15, F: 20 },
    description:
      "Indulge in our Smooth Vanilla Milkshake, made with creamy vanilla ice cream and fresh milk.",
    category: "Drinks",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "35",
    name: "Tangy Orange Juice",
    image: img31,
    price: { H: 15, F: 20 },
    description:
      "Savor the taste of our Tangy Orange Juice, freshly squeezed from ripe oranges.",
    category: "Drinks",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "36",
    name: "Rich Chocolate Milk",
    image: img32,
    price: { H: 15, F: 20 },
    description:
      "Treat yourself to our Rich Chocolate Milk, a perfect blend of cocoa and milk for a creamy delight.",
    category: "Drinks",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: true,
  },
  {
    _id: "37",
    name: "Fruity Mango Smoothie",
    image: img33,
    price: { H: 15, F: 20 },
    description:
      "Relish our Fruity Mango Smoothie, made with fresh mangoes and yogurt for a healthy treat.",
    category: "Drinks",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "38",
    name: "Refreshing Iced Tea",
    image: img34,
    price: { H: 15, F: 20 },
    description:
      "Experience the cool and refreshing taste of our Iced Tea, brewed with a hint of lemon.",
    category: "Drinks",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "39",
    name: "Creamy Coffee Latte",
    image: img35,
    price: { H: 15, F: 20 },
    description:
      "Delight in our Creamy Coffee Latte, made with rich espresso and steamed milk.",
    category: "Drinks",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "40",
    name: "Zesty Ginger Ale",
    image: img36,
    price: { H: 15, F: 20 },
    description:
      "Savor the spicy and refreshing taste of our Zesty Ginger Ale, perfect for any time of day.",
    category: "Drinks",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },

  // Fruits Products
  {
    _id: "41",
    name: "Fresh Strawberries",
    image: img40,
    price: { H: 15, F: 20 },
    description:
      "Enjoy the sweet and juicy taste of our Fresh Strawberries, handpicked for your delight.",
    category: "Fruits",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "42",
    name: "Crisp Green Apples",
    image: img41,
    price: { H: 15, F: 20 },
    description:
      "Savor the tart and refreshing taste of our Crisp Green Apples, perfect for snacking.",
    category: "Fruits",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "43",
    name: "Tropical Pineapple Chunks",
    image: img43,
    price: { H: 15, F: 20 },
    description:
      "Delight in our Tropical Pineapple Chunks, bursting with sweet and tangy flavors.",
    category: "Fruits",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "44",
    name: "Juicy Watermelon Slices",
    image: img42,
    price: { H: 15, F: 20 },
    description:
      "Cool down with our Juicy Watermelon Slices, perfect for a refreshing summer treat.",
    category: "Fruits",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "45",
    name: "Sweet Red Grapes",
    image: img46,
    price: { H: 15, F: 20 },
    description:
      "Indulge in our Sweet Red Grapes, packed with natural sweetness and flavor.",
    category: "Fruits",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "46",
    name: "Freshly Peeled Oranges",
    image: img44,
    price: { H: 15, F: 20 },
    description:
      "Enjoy the convenience of our Freshly Peeled Oranges, ready to eat and full of juicy goodness.",
    category: "Fruits",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "47",
    name: "Ripe Banana Bunch",
    image: img47,
    price: { H: 15, F: 20 },
    description:
      "Our Ripe Banana Bunch is perfect for a quick snack or a healthy addition to your meals.",
    category: "Fruits",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
  {
    _id: "48",
    name: "Exotic Mango Slices",
    image: img45,
    price: { H: 15, F: 20 },
    description:
      "Savor the rich and juicy taste of our Exotic Mango Slices, a perfect tropical treat.",
    category: "Fruits",
    sizes: ["H", "F"],
    date: 1716634345448,
    popular: false,
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Us",
      "Fresh Foods",
      "Fast Foods",
      "Hot Deals",
      "Popular Foods",
      "FAQ",
    ],
  },
  {
    title: "Our Community",
    links: ["Terms and Conditions", "Special Offers", "Customer Reviews"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Contact Number", value: "123-456-7890" },
    { label: "Email Address", value: "info@foodora.com" },
  ],
};
