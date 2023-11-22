import { IProductReview} from "../@types/products"

export const useCalcMedia = (movie: IProductReview) => {
  console.log(movie)
    let data: number[] = []
    let sun = 0
  if (movie.reviews.length === 0) {
    return sun
  }else{
    movie.reviews.forEach((review) => {
      data.push(review.score)
    })
    
    data.forEach((number) => {
    sun += number
    })
    sun = Number((sun / data.length).toFixed(1))
    return sun
  }
}