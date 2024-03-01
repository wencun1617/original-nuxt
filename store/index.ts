import { defineStore } from 'pinia'

type Result = {
    id: number | string,
    age: number,
    date?: Date,
}

const result:Result = {
    id: 1,
    age: 18
}

const getLogin = ():Promise<Result> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(result)
        },2000)
    })
}
export const useTest = defineStore('test', {
  state: () => ({ 
    user:<Result>{
    },
    name: '郁欢'
   }),
  getters: {
  },
  actions: {
    async getLoginInfo() {
        const res = await getLogin()
        this.user = res
        this.user.date = new Date()
    }
  },
})