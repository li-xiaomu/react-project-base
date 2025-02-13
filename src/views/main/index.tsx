import logo from '@/assets/images/logo.svg'
import { useRecoilState } from 'recoil'
import { aboutData } from '@/views/main/atom'
import { Button } from 'antd'
function Home() {
  const [data, setData] = useRecoilState(aboutData)
  const cssobj = {
    logo: {
      width: '200px',
      height: 'auto',
    },
  }
  // interface objVal {
  //   name: string,
  //   age?: number
  // }
  // const obj: objVal = {
  //   name: '小木',
  //   age: 28
  // }

  return (
    <div>
      <div>关于组件{process.env.REACT_APP_API_URL}</div>
      <img style={cssobj.logo} src={logo} alt="" />
      <p>{data.name}</p>
      <p>{data.age}</p>
      <Button
        type="primary"
        onClick={() => {
          setData((data) => ({ ...data, name: '李小欧' }))
        }}
      >
        更改名称
      </Button>
    </div>
  )
}

export default Home
