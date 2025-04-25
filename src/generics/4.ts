type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

let oldUser: User = {
    name: 'Jon',
    surname: 'Doe',
    email: 'Hello@world.com',
    password: '1234',
}

function createOrUpdateUser(oldUser:User, initialValues: Partial<User>): User {
    return {...oldUser, ...initialValues}
}

createOrUpdateUser(oldUser, { 
  email: 'user@mail.com', 
  password: 'password123' 
});