import { IProductReview} from "../@types/products"

export const useCalcMedia = (movie: IProductReview) => {
    let data: number[] = []
  movie.reviews.forEach((review) => {
    data.push(review.score)
  })
let sun = 0
data.forEach((number) => {
  sun += number
})
sun = Number((sun / data.length).toFixed(1))

return sun
}