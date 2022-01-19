import bcrypt from 'bcryptjs'

const encrypt = (pswd) => {
  return bcrypt.hashSync(pswd, 10)
}

const users = [
  {
    name: 'Admin',
    email: 'admin@mail.com',
    password: encrypt('123456789'),
    isAdmin: true,
  },
  {
    name: 'Harry',
    email: 'harry@mail.com',
    password: encrypt('123456789'),
  },
  {
    name: 'Jhon',
    email: 'jhon@mail.com',
    password: encrypt('123456789'),
  },
  {
    name: 'Smith',
    email: 'smith@mail.com',
    password: encrypt('123456789'),
  },
]

export default users
