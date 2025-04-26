export interface Template {
  id: string;
  type: string;
  title: string;
  author: string;
  fileType: string;
  price: number;
  imageUrl: string;
  description: string;
  discountInfo?: string | null;
}
