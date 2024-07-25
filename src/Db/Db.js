import { ProjCard } from '../assets/index';
import { ProjCard2, Bedroom} from '../assets';
import { Modern1, Modern2, Modern3, Skandinavia1, Skandinavia2, Skandinavia3, Skandinavia4, Skandinavia5, Vintazh1, Vintazh2, Vintazh3, Vintazh4,
  Franch_Bedroom_1, Franch_Bedroom_2, Franch_Bedroom_3, Industrial_Bedroom_1, Industrial_Bedroom_2, Industrial_Bedroom_3,
    Classic_Bedroom_1, Classic_Bedroom_2, Classic_Bedroom_3, Boho_Bedroom_1, Boho_Bedroom_2, Boho_Bedroom_3, Kantry_1, Kantry_2, Kantry_3,
    Modern_Kitchan_1, Modern_Kitchan_2, Modern_Kitchan_3, Rustilniy_1, Rustilniy_2, Rustilniy_3, Living_Area_1, Living_Area_2, Living_Area_3, Living_Area_Classic_1, Living_Area_Classic_2, Living_Area_Classic_3, Living_Area_Minimalizm_1, Living_Area_Minimalizm_2, Living_Area_Minimalizm_3
} from '../assets/index'

const projects = [
  { image: Modern1, title: 'Modern Bathroom', category: 'Bathroom', description: 'A stylish modern bathroom with contemporary fixtures.', price: 5000 },
  { image: Modern2, title: 'Modern Bathroom', category: 'Bathroom', description: 'A luxurious modern bathroom with high-end amenities.', price: 7000 },
  { image: Modern3, title: 'Modern Bathroom', category: 'Bathroom', description: 'A sleek modern bathroom with minimalist design.', price: 5500 },
  { image: Skandinavia1, title: 'Scandinavian Bathroom', category: 'Bathroom', description: 'A clean and functional Scandinavian-style bathroom.', price: 4000 },
  { image: Skandinavia2, title: 'Scandinavian Bathroom', category: 'Bathroom', description: 'A bright and airy Scandinavian bathroom.', price: 3500 },
  { image: Skandinavia3, title: 'Scandinavian Bathroom', category: 'Bathroom',description: 'A cozy Scandinavian bathroom with natural elements.', price: 3999 },
  { image: Skandinavia4, title: 'Scandinavian Bathroom', category: 'Bathroom', description: 'A minimalist Scandinavian bathroom with modern fixtures.', price: 3700 },
  { image: Skandinavia5, title: 'Scandinavian Bathroom', category: 'Bathroom', description: 'A stylish and functional Scandinavian bathroom.', price: 4100 },

  { image: Vintazh1, title: 'Vintage Bathroom', category: 'Bathroom', description: 'A charming vintage bathroom with classic elements.', price: 1000 },
  { image: Vintazh2, title: 'Vintage Bathroom', category: 'Bathroom', description: 'A nostalgic vintage bathroom with antique fixtures.', price: 1500 },
  { image: Vintazh3, title: 'Vintage Bathroom', category: 'Bathroom', description: 'A beautifully restored vintage bathroom.', price: 1200 },
  { image: Vintazh4, title: 'Vintage Bathroom', category: 'Bathroom', description: 'A quaint and charming vintage bathroom.', price: 999 },

  { image: Franch_Bedroom_1, title: 'French Provence Bedroom', category: 'Bedroom', description: 'A romantic French Provence-style bedroom.', price: 4200 },
  { image: Franch_Bedroom_2, title: 'French Provence Bedroom', category: 'Bedroom', description: 'A cozy and elegant French Provence bedroom.', price: 5000 },
  { image: Franch_Bedroom_3, title: 'French Provence Bedroom', category: 'Bedroom', description: 'A charming French Provence bedroom with vintage decor.', price: 3333 },
  { image: Industrial_Bedroom_1, title: 'Industrial Bedroom', category: 'Bedroom', description: 'A trendy industrial-style bedroom with exposed elements.', price: 2000 },
  { image: Industrial_Bedroom_2, title: 'Industrial Bedroom', category: 'Bedroom', description: 'A modern industrial bedroom with a raw aesthetic.', price: 3500 },
  { image: Industrial_Bedroom_3, title: 'Industrial Bedroom', category: 'Bedroom', description: 'A chic industrial bedroom with contemporary decor.', price: 2100 },
  { image: Classic_Bedroom_1, title: 'Classic Bedroom', category: 'Bedroom', description: 'A timeless classic bedroom with elegant furnishings.', price: 10000 },
  { image: Classic_Bedroom_2, title: 'Classic Bedroom', category: 'Bedroom', description: 'A sophisticated classic bedroom with luxurious decor.', price: 15000 },
  { image: Classic_Bedroom_3, title: 'Classic Bedroom', category: 'Bedroom', description: 'A beautiful classic bedroom with intricate details.', price: 12000 },
  { image: Boho_Bedroom_1, title: 'Boho Bedroom', category: 'Bedroom', description: 'A bohemian-style bedroom with eclectic decor.', price: 6000 },
  { image: Boho_Bedroom_2, title: 'Boho Bedroom', category:'Bedroom',description: 'A colorful and relaxed boho bedroom.', price: 5000 },
  { image: Boho_Bedroom_3, title: 'Boho Bedroom', category: 'Bedroom', description: 'A cozy boho bedroom with unique elements.', price: 5500 },
  { image: ProjCard, title: 'Minimal Bedroom', category: 'Bedroom', description: 'A minimalist bedroom design focusing on simplicity and functionality.', price: 1000 },
  { image: ProjCard2, title: 'Minimal Bedroom', category: 'Bedroom', description: 'A sleek and modern take on minimalist bedroom design.', price: 1300 },
  { image: Bedroom, title: 'Minimal Bedroom', category: 'Bedroom', description: 'A cozy and minimalist bedroom with a focus on comfort.', price: 1250 },


  { image: Kantry_1, title: 'Country Kitchen', category: 'Kitchen', description: 'A warm and inviting country-style kitchen.', price: 5500 },
  { image: Kantry_2, title: 'Country Kitchen', category: 'Kitchen', description: 'A charming country kitchen with rustic elements.', price: 6000 },
  { image: Kantry_3, title: 'Country Kitchen', category: 'Kitchen', description: 'A cozy country kitchen with farmhouse decor.', price: 5800 },
  { image: Modern_Kitchan_1, title: 'Modern Kitchen', category: 'Kitchen', description: 'A sleek and modern kitchen with contemporary design.', price: 7000 },
  { image: Modern_Kitchan_2, title: 'Modern Kitchen', category: 'Kitchen', description: 'A stylish modern kitchen with high-end appliances.', price: 7500 },
  { image: Modern_Kitchan_3, title: 'Modern Kitchen', category: 'Kitchen', description: 'A functional modern kitchen with minimalist design.', price: 7200 },
  { image: Rustilniy_1, title: 'Rustic Kitchen', category: 'Kitchen', description: 'A charming rustic kitchen with natural elements.', price: 6400 },
  { image: Rustilniy_2, title: 'Rustic Kitchen', category: 'Kitchen', description: 'A cozy rustic kitchen with wooden accents.', price: 6500 },
  { image: Rustilniy_3, title: 'Rustic Kitchen', category: 'Kitchen', description: 'A warm rustic kitchen with farmhouse decor.', price: 6300 },

  { image: Living_Area_1, title: 'Modern Living Area', category: 'Living Area', description: 'A spacious modern living area with contemporary furniture.', price: 8000 },
  { image: Living_Area_2, title: 'Modern Living Area', category: 'Living Area', description: 'A stylish modern living area with sleek design.', price: 8500 },
  { image: Living_Area_3, title: 'Modern Living Area', category: 'Living Area', description: 'A comfortable modern living area with minimalist decor.', price: 8200 },
  { image: Living_Area_Classic_1, title: 'Classic Living Area', category: 'Living Area', description: 'A timeless classic living area with elegant furnishings.', price: 9000 },
  { image: Living_Area_Classic_2, title: 'Classic Living Area', category: 'Living Area', description: 'A sophisticated classic living area with luxurious decor.', price: 9500 },
  { image: Living_Area_Classic_3, title: 'Classic Living Area', category: 'Living Area', description: 'A beautiful classic living area with intricate details.', price: 9200 },
  { image: Living_Area_Minimalizm_1, title: 'Minimalist Living Area', category: 'Living Area', description: 'A sleek minimalist living area with clean lines.', price: 7500 },
  { image: Living_Area_Minimalizm_2, title: 'Minimalist Living Area', category: 'Living Area', description: 'A functional minimalist living area with modern design.', price: 7800 },
  { image: Living_Area_Minimalizm_3, title: 'Minimalist Living Area', category: 'Living Area', description: 'A stylish minimalist living area with contemporary furniture.', price: 7700 },
];

export default projects;