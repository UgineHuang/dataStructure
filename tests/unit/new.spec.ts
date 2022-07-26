/**
 * 自定义new
 */
import { customNew } from "@/utils/dataStructure/new";

describe('自定义 new',()=>{
  it('new',()=>{
    class Foo{
      name: string
      city: string
      n:number

      constructor(name:string,n:number) {
        this.name = name
        this.city = '北京'
        this.n = n
      }
      getName() {
        return this.name
      }
    }

    const f = customNew<Foo>(Foo,'aaa',100)
// const f = new Foo('aaa',100)
    expect(f.name).toBe('aaa')
    expect(f.city).toBe('北京')
    expect(f.n).toBe(100)
    expect(f.getName()).toBe('aaa')
  })
})
