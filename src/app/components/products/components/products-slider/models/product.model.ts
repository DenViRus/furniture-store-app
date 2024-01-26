interface IImage {
  default: string;
  standard: string;
}

export interface IProduct {
  id: string;
  category: string;
  name: string;
  price: number;
  img: IImage;
  rating: number;
}
