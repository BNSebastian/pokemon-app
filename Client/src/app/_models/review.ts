export interface Review {
  id: number;
  title: string;
  text: string;
  rating: number;
}

export interface ReviewCreate {
  title: string;
  text: string;
  rating: number;
}
