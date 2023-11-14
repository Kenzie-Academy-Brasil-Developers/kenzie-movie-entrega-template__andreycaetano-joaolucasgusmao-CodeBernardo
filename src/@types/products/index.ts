interface IDefaultRequisition{
    loading: boolean,
    error: string,
}

export interface IProducts{
    id: number,
    name: string,
    type: string,
    duration: number,
    synopsis: string,
    image: string
}

export interface IAllProducts extends IDefaultRequisition{
    allProductsData: IProducts[]
    loadAllProducts: () => Promise<void>
}
