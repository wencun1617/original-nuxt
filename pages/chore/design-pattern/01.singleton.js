// js 的 construtor 方法本身不支持私有化，因为它是类的公共接口
// 用于创建和初始化类的实例
class Video {
  constructor() {
    console.log('Video created')
  }
}

function singleton(className) {
  let ins
  return new Proxy(className, {
    construct(target, args) {
      if (!ins) {
        ins = new target(...args)
      }
      return ins
    },
  })
}

const newVideo = singleton(Video)

// v1 v2是被代理 construct 的 Video 的实例
const v1 = new newVideo()
const v2 = new newVideo()

// 往代理的原型上添加 就是往本身上添加
newVideo.prototype.play = () => {
  console.log("play")
}

// console.log(v1 === v2)
// v1.play()
// v2.play()

console.log(newVideo.prototype === Video.prototype)
console.log(v1.__proto__ === newVideo.prototype)
console.log(v2.__proto__ === Video.prototype)