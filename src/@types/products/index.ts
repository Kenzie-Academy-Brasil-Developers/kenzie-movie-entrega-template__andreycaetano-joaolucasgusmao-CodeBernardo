interface IDefaultRequisition {
  loading: boolean;
  error: string;
}

export interface IProducts {
  id: number;
  name: string;
  type: string;
  duration: number;
  synopsis: string;
  image: string;
}

export interface IProductReview extends IProducts {
  reviews: {
    id: number;
    movieId: number;
    userId: number;
    score: number;
    description: string;
  }[];
}

export interface IAllProducts extends IDefaultRequisition {
  allProductsData: IProducts[];
  loadAllProducts: () => Promise<void>;
}

export interface IAllProductsReviews extends IDefaultRequisition {
  allProductReviewData: IProductReview[];
  loadAllProductsReviews: () => Promise<void>;
}

export interface IProductByIdStore extends IDefaultRequisition {
  note: number | null
  productData: IProductReview;
  loadProductById: (id: string |undefined) => Promise<void>;
}

export interface IProductByUserIdStore extends IDefaultRequisition {
  productByUserIdData: IUserReview[];
  loadProductByUserId: (userId: number, productId: number) => Promise<void>;
}

export interface IUserReview {
  id: number;
  movieId: number;
  userId: number;
  score: number;
  description: string;
}
