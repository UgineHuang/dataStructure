/**
 * 手写一个LazyMan
 */
class LazyMan {
  private name: string
  private tasks: Function[] =[]
  constructor(name:string) {
    this.name = name
    setTimeout(()=>{
      this.next()
    })
  }
  private next() {
    const task = this.tasks.shift() // 取出当前 tasks 的第一个任务
    if(task) task()
  }
  eat(food:string) {
    const task = () =>{
      console.info(`${this.name} eat ${food}`)
      this.next() // 立刻执行下一个任务
    }
    this.tasks.push(task)
    return this
  }
  sleep(seconds:number) {
    const task = ()=>{
      console.info(`${this.name}开始睡觉`)
      setTimeout(()=>{
        console.info(`${this.name} 已经睡完了${seconds}秒，开始执行下一个任务`)
        this.next() // xx秒之后再执行下 一个任务
      },seconds*1000)
    }
    this.tasks.push(task)
    return this
  }
}
// 例子
const me = new LazyMan('mm')
me.eat('apple').eat('banana').sleep(3).eat('purple').eat('waterMenlon').sleep(5).eat('orange')
