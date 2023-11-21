console.log('hello')

export interface Person {
  name: string
  age: number
  getAge: () => number
}

export interface IUserInfo {
  name: string
  age: number
  gender: number
}

export type PickUser = Partial<IUserInfo>
export type OmitUserName = Omit<IUserInfo, 'name'>

export default class PersonClass implements Person {
  public age: number
  public name: string
  private gender: number
  constructor(name: string, age: number, gender: number) {
    this.name = name
    this.age = age
    this.gender = gender
  }
  getAge() {
    return this.age
  }
  
  get userInfo(): IUserInfo {
    return {
      age: this.age,
      name: this.name,
      gender: this.gender
    }
  }
}

export const p = new PersonClass('yan', 30, 1)

export const pu: PickUser = {
  name: 'xxx'
}

export const po: OmitUserName = {
  age: 123,
  gender: 1
}

console.log(p.userInfo)
