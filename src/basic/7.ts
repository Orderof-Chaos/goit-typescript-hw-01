type Pages = {
    title: string,
    likes: number,
    acounts: string[],
    status: string
    details?: PageDetail
}
type PageDetail = {
    createAt:  Date,
    updateAt:  Date
}