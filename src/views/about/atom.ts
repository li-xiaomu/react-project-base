import { atom } from 'recoil'

interface Info {
  name: string,
  age?: number
}
// const infoData:Info = {
//   name: '李小木',
//   age: 26
// }
export const aboutData = atom<Info>({
  key: 'lixm',
  default: {
    name: '李小木',
    age: 26
  }
})