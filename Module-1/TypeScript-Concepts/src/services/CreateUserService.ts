interface TechsObject {
  title: string,
  experience: number,
}

interface User {
  name?: string,
  email: string,
  password: string,
  techs: Array<string | TechsObject>  
}

export default function createUser({name, email, password, techs}: User) {
  
  const payload = {
    name, 
    email,
    password,
    techs
  }

  return payload
}