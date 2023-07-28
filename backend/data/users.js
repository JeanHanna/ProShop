import bcrypt from 'bcryptjs';

const users = [
  {
    name:'Admin User',
    email:'admin@email.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:true,
  },
  {
    name:'John',
    email:'john@email.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:false,
  },
  {
    name:'An',
    email:'an@email.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:false,
  },
  {
    name:'Huan',
    email:'huan@email.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:false,
  }
];

export default users;