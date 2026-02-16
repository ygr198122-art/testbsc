export interface Product {
  id: string;
  name: string;
  shortName: string;
  description: string;
  price: number;
  salePrice: number;
  image: string;
  images: string[];
  category: string;
  badge?: 'sale' | 'new' | 'bestseller';
  rating: number;
  size: string;
  ingredients: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  itemCount: number;
}

export const categories: Category[] = [
  { id: '1', name: 'Jowar Puffs', image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWRCBN6_73VO9FWPHU_2026-01-28_1.jpg', itemCount: 5 },
  { id: '2', name: 'Quinoa Puffs', image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNK2LCY_8RIYB7OHWF_2026-01-28_1.jpg', itemCount: 4 },
  { id: '3', name: 'Roasted Foxnuts', image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G2MG2KJ2_KKZ8QSEHP8_2026-01-28_1.jpg', itemCount: 4 },
  { id: '4', name: 'Dry Fruits & Seeds', image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNDFRSJ_CY557HVRK1_2026-01-28_1.jpg', itemCount: 5 },
  { id: '5', name: 'Mouth Fresheners', image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWGRNKY_GCORAHAY3G_2026-01-28_1.jpg', itemCount: 3 },
  { id: '6', name: 'Combo Packs', image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWSDTFC_82RNAFPAS8_2026-01-28_1.jpg', itemCount: 5 },
];

export const products: Product[] = [
  {
    id: '2001', name: 'Jowar Puff Creamy Cheese', shortName: 'Cheese Jowar Puffs',
    description: 'Guilt-Free Gourmet: Baked Cheese Jowar Puff Combo (200g) – Gluten-Free & High-Fiber',
    price: 350, salePrice: 220,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWRCBN6_73VO9FWPHU_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWRCBN6_73VO9FWPHU_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWRCBN6_3LVSAWRLH6_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWRCBN6_980CEGVHCZ_2026-01-28_3.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWRCBN6_46RBZJR6MJ_2026-01-28_4.jpg',
    ],
    category: 'Jowar Puffs', badge: 'bestseller', rating: 4.8, size: '200g',
    ingredients: 'Jowar (sorghum), cheese seasoning, spices, salt',
  },
  {
    id: '2002', name: 'Cheese Makhana', shortName: 'Cheese Roasted Makhana',
    description: 'Artisanal Cheese Roasted Makhana Duo | 2 x 30g | High Protein & Lightly Salted',
    price: 259, salePrice: 200,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G2MG2KJ2_KKZ8QSEHP8_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G2MG2KJ2_KKZ8QSEHP8_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G2MG2KJ2_M94GHB9RO9_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G2MG2KJ2_EC5DRYUIDC_2026-01-28_3.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G2MG2KJ2_WMR1CJ2Z3O_2026-01-28_4.jpg',
    ],
    category: 'Roasted Foxnuts', badge: 'new', rating: 4.6, size: '60g',
    ingredients: 'Makhana (foxnuts), cheese seasoning, spices, salt',
  },
  {
    id: '3030', name: 'Quinoa Puffs – Dahi Puri Chaat', shortName: 'Dahi Puri Quinoa Puffs',
    description: 'Gluten-Free, Artisanal Roasted Healthy Snack | 2 x 30g | High Protein',
    price: 200, salePrice: 125,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNK2LCY_8RIYB7OHWF_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNK2LCY_8RIYB7OHWF_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNK2LCY_6ZY8O6TAPQ_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNK2LCY_7MNIRYX491_2026-01-28_3.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNK2LCY_4NH3W8957C_2026-01-28_4.jpg',
    ],
    category: 'Quinoa Puffs', badge: 'sale', rating: 4.5, size: '60g',
    ingredients: 'Quinoa, spices, herbs, salt',
  },
  {
    id: '2004', name: 'Street Food Quinoa Puff Set', shortName: '4-Pack Quinoa Variety',
    description: '4-Pack Variety Box | Healthy Dahi Puri & Bombay Chaat Flavours | 4 x 30g | 100% Roasted',
    price: 400, salePrice: 230,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWSDTFC_82RNAFPAS8_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWSDTFC_82RNAFPAS8_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWSDTFC_N5JJHPEY3Y_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWSDTFC_A3WLYU9RGS_2026-01-28_3.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWSDTFC_72LBL11JZI_2026-01-28_4.jpg',
    ],
    category: 'Combo Packs', badge: 'bestseller', rating: 4.7, size: '120g',
    ingredients: 'Quinoa, spices, herbs, salt',
  },
  {
    id: '2005', name: 'Paan Shots & Digestive Mukhwas', shortName: 'Paan & Mukhwas Combo',
    description: 'The Perfect Refresh Combo (Pack of 2) | 100% Natural Mouth Freshener',
    price: 450, salePrice: 300,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWGRNKY_GCORAHAY3G_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWGRNKY_GCORAHAY3G_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWGRNKY_9Z4458RIJK_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWGRNKY_9VNTQV5YK6_2026-01-28_3.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWGRNKY_R16Q1JL3FL_2026-01-28_4.jpg',
    ],
    category: 'Mouth Fresheners', badge: 'new', rating: 4.4, size: '250g',
    ingredients: 'Betel leaves (paan), fennel seeds, herbs, spices, sugar crystals',
  },
  {
    id: '2010', name: 'Tangy Tomato Foxnuts', shortName: 'Tomato Makhana',
    description: 'Gluten-Free & High Fiber | Zesty, Crunchy & Guilt-Free (2 x 30g)',
    price: 259, salePrice: 220,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G2SM9LGX_2ZQQM7L3KU_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G2SM9LGX_2ZQQM7L3KU_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G2SM9LGX_SHQ5GPB86J_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G2SM9LGX_BJJ5G2P1Z1_2026-01-28_3.jpg',
    ],
    category: 'Roasted Foxnuts', rating: 4.3, size: '60g',
    ingredients: 'Makhana (foxnuts), tomato seasoning, spices, salt',
  },
  {
    id: '2007', name: 'Jowar Puff Cheese (Pack of 3)', shortName: 'Cheese Jowar 3-Pack',
    description: 'Gluten-Free Healthy Snack | High-Fiber & Baked | Pack of 3',
    price: 300, salePrice: 190,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWQM62W_SFMOP5ZJON_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWQM62W_SFMOP5ZJON_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWQM62W_0V4IRRXUU9_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWQM62W_C22TLOIN7E_2026-01-28_3.jpg',
    ],
    category: 'Jowar Puffs', badge: 'sale', rating: 4.6, size: '90g',
    ingredients: 'Jowar (sorghum), cheese seasoning, spices, salt',
  },
  {
    id: '2028', name: 'Roasted Peri Peri Cashews', shortName: 'Peri Peri Cashews',
    description: 'No-Oil, Protein-Rich Dry Fruit Snack | Bold Spice & Gourmet Crunch (100g)',
    price: 600, salePrice: 299,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNDFRSJ_CY557HVRK1_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNDFRSJ_CY557HVRK1_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNDFRSJ_M01GF3PFV9_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNDFRSJ_7D24X42WLB_2026-01-28_3.jpg',
    ],
    category: 'Dry Fruits & Seeds', badge: 'bestseller', rating: 4.9, size: '100g',
    ingredients: 'Cashews, peri peri spices, salt',
  },
  {
    id: '2008', name: 'Masala Beetroot Crackers', shortName: 'Beetroot Crackers',
    description: 'Roasted Vegetable Chips | Gluten-Free & High Fiber (Pack of 2)',
    price: 350, salePrice: 180,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G8KQYDYF_GM43SEMPUY_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G8KQYDYF_GM43SEMPUY_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G8KQYDYF_NQA6W5TAIT_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G8KQYDYF_556UDVVN35_2026-01-28_3.jpg',
    ],
    category: 'Dry Fruits & Seeds', badge: 'new', rating: 4.5, size: '100g',
    ingredients: 'Beetroot, whole grains, spices, salt',
  },
  {
    id: '2009a', name: 'Dried Cranberries', shortName: 'Cranberries',
    description: 'Antioxidant-Rich Superfood | Natural Sweetness (100g)',
    price: 589, salePrice: 290,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNDZV8H_ZE7CKBZ4ZD_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNDZV8H_ZE7CKBZ4ZD_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNDZV8H_YAGXBFXNNS_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNDZV8H_74CDWW7EGG_2026-01-28_3.jpg',
    ],
    category: 'Dry Fruits & Seeds', rating: 4.4, size: '100g',
    ingredients: 'Cranberries, natural sweetener',
  },
  {
    id: '2011', name: 'Caramel Roasted Almonds', shortName: 'Caramel Almonds',
    description: 'Hand-Roasted Caramel Glazed Almonds | 100g | Sweet & Crunchy Indulgence',
    price: 599, salePrice: 299,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNDRFPW_EENY5R7E0L_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNDRFPW_EENY5R7E0L_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNDRFPW_JO5ZF3OEDD_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNDRFPW_PJ50AMWMOQ_2026-01-28_3.jpg',
    ],
    category: 'Dry Fruits & Seeds', badge: 'bestseller', rating: 4.8, size: '110g',
    ingredients: 'Almonds, caramel flavoring, sugar',
  },
  {
    id: '2013a', name: 'Mint Mukhwas', shortName: 'Mint Mukhwas',
    description: 'Healthy Digestive & Natural Breath Freshener (100g)',
    price: 389, salePrice: 190,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKN9XHC3_R6PZS06WLW_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKN9XHC3_R6PZS06WLW_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKN9XHC3_1K45L7DLE5_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKN9XHC3_RE0P56J78B_2026-01-28_3.jpg',
    ],
    category: 'Mouth Fresheners', rating: 4.3, size: '100g',
    ingredients: 'Fennel seeds, mint flavor, herbs, spices',
  },
  {
    id: '2015', name: 'Superfood Combo – 4 Pack', shortName: 'Superfood 4-Pack',
    description: 'Roasted Seven Seeds Mix & Mint Digestive Mukhwas | Ultimate Wellness Combo',
    price: 900, salePrice: 499,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWS47RS_5D9OKG2K1V_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWS47RS_5D9OKG2K1V_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWS47RS_KS8BJBCD51_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWS47RS_9DT4JEWAYD_2026-01-28_3.jpg',
    ],
    category: 'Combo Packs', badge: 'sale', rating: 4.7, size: '150g',
    ingredients: 'Mixed seeds, fennel seeds, herbs, spices',
  },
  {
    id: '2014', name: 'Quinoa Puffs – Bombay Chaat', shortName: 'Bombay Chaat Puffs',
    description: 'Gluten-Free & High Protein | Tangy, Roasted & Perfectly Spiced (Pack of 2)',
    price: 250, salePrice: 150,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKND9FZH_TV96LE3H73_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKND9FZH_TV96LE3H73_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKND9FZH_6R67ORHFDJ_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKND9FZH_PQG0FMG3Q3_2026-01-28_3.jpg',
    ],
    category: 'Quinoa Puffs', badge: 'new', rating: 4.5, size: '30g',
    ingredients: 'Quinoa, spices, herbs, salt',
  },
  {
    id: '2018', name: 'Whole Dried Blueberries', shortName: 'Dried Blueberries',
    description: 'Natural Sweetness | No-Oil Roasted Superfood | Antioxidant-Rich (100g)',
    price: 700, salePrice: 350,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNDLDHN_0XAOHU2GBX_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNDLDHN_0XAOHU2GBX_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNDLDHN_ZLTFGNRZDP_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNDLDHN_U3IURHKYKF_2026-01-28_3.jpg',
    ],
    category: 'Dry Fruits & Seeds', rating: 4.6, size: '200g',
    ingredients: 'Blueberries, natural sweetener',
  },
  {
    id: '2024', name: 'Peri-Peri Foxnuts', shortName: 'Peri Peri Makhana',
    description: 'Roasted Healthy Snack | Gluten-Free & Low Calorie (Pack of 2)',
    price: 259, salePrice: 220,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G82HYYJ5_P41M0SLIXE_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G82HYYJ5_P41M0SLIXE_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G82HYYJ5_38TU1E02YH_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G82HYYJ5_P22TIKTP9Q_2026-01-28_3.jpg',
    ],
    category: 'Roasted Foxnuts', rating: 4.4, size: '60g',
    ingredients: 'Makhana (foxnuts), peri peri spices, salt',
  },
  {
    id: '2025', name: 'Paan Shots', shortName: 'Paan Shots',
    description: 'Natural Mouth Freshener | Traditional Flavor with a Minty Twist (150g)',
    price: 429, salePrice: 210,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKND2WV3_EVHUSRR0S0_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKND2WV3_EVHUSRR0S0_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKND2WV3_NAD1CTVUKC_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKND2WV3_49B1MPA3A9_2026-01-28_3.jpg',
    ],
    category: 'Mouth Fresheners', badge: 'bestseller', rating: 4.7, size: '150g',
    ingredients: 'Betel leaves, fennel seeds, herbs, spices, sugar crystals',
  },
  {
    id: '2023', name: 'Roasted Seven Seeds Mix', shortName: 'Seven Seeds Mix',
    description: 'Mint Flavored, High-Protein & Fiber-Rich | Refreshing Mint Flavor (100g)',
    price: 409, salePrice: 200,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNF571M_4QU9WMETN3_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNF571M_4QU9WMETN3_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNF571M_Z3YYG13Y3F_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FKNF571M_I8A54W8M30_2026-01-28_3.jpg',
    ],
    category: 'Dry Fruits & Seeds', badge: 'new', rating: 4.5, size: '150g',
    ingredients: 'Mixed seeds (pumpkin, sunflower, flax, chia, sesame, watermelon, muskmelon), mint flavor, salt',
  },
  {
    id: '2012', name: 'Cream n Onion Foxnuts', shortName: 'Cream Onion Makhana',
    description: 'Roasted Superfood Snack | Gluten-Free & Low Calorie (Pack of 2)',
    price: 259, salePrice: 220,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G2SGFRLL_J8T6ZEKOEJ_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G2SGFRLL_J8T6ZEKOEJ_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G2SGFRLL_V1SNODKFLA_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0G2SGFRLL_1JHQGBNGY2_2026-01-28_3.jpg',
    ],
    category: 'Roasted Foxnuts', rating: 4.3, size: '60g',
    ingredients: 'Makhana (foxnuts), cream & onion seasoning, spices, salt',
  },
  {
    id: '2026', name: 'Roasted Puff Combo – Try All', shortName: 'Try All Puffs 4-Pack',
    description: 'Healthy Puffs | 4 x 30g | 100% Roasted & Gluten-Free | High-Fiber & Baked',
    price: 429, salePrice: 260,
    image: 'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWT57TX_HX3Y55MUIU_2026-01-28_1.jpg',
    images: [
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWT57TX_HX3Y55MUIU_2026-01-28_1.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWT57TX_1MY9AUVXGW_2026-01-28_2.jpg',
      'https://s3.ap-south-1.amazonaws.com/nushop-catalogue/697869d57964804ae59ff830/cat_img/B0FPWT57TX_15TI9EX7Z1_2026-01-28_3.jpg',
    ],
    category: 'Combo Packs', badge: 'sale', rating: 4.6, size: '120g',
    ingredients: 'Jowar, quinoa, spices, herbs, salt',
  },
];

export const reviews = [
  { id: '1', name: 'Priya S.', city: 'Mumbai', quote: 'The Cheese Jowar Puffs are absolutely addictive! Best healthy snack I\'ve ever had.', product: 'Cheese Jowar Puffs', rating: 5 },
  { id: '2', name: 'Rahul M.', city: 'Delhi', quote: 'Ordered the Superfood Combo for Diwali — everyone loved it! Will order again.', product: 'Superfood Combo', rating: 5 },
  { id: '3', name: 'Ananya K.', city: 'Bangalore', quote: 'The Peri Peri Cashews are insane! Finally a guilt-free premium snack.', product: 'Peri Peri Cashews', rating: 5 },
  { id: '4', name: 'Vikram P.', city: 'Pune', quote: 'The Paan Shots are the perfect after-meal freshener. So authentic!', product: 'Paan Shots', rating: 4 },
  { id: '5', name: 'Sneha R.', city: 'Hyderabad', quote: 'Caramel Almonds are my go-to evening snack now. Premium quality!', product: 'Caramel Almonds', rating: 5 },
  { id: '6', name: 'Arjun T.', city: 'Chennai', quote: 'The Dahi Puri Quinoa Puffs taste exactly like street food. Mind blown!', product: 'Dahi Puri Quinoa Puffs', rating: 5 },
];
