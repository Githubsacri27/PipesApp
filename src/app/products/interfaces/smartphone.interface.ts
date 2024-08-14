
export enum Color {
  red, black, blue, green, white, gold
}

  
  
export interface Smartphone {
  brand:   string;
  model:   string;
  price:   number;
  color:   Color;
  has5G:   boolean;
  imageUrl: string;
}
