type Pages = {
    title: string,
    likes: number,
    acounts: string[],
    status: 'open' | 'close'
    details?: PageDetail
}
type PageDetail = {
    createAt:  Date,
    updateAt:  Date
}