interface User{
    name: string,
    age: number,
    email: string
    adress?: UserAdress
}
type UserAdress = {city: string,
        country: string}