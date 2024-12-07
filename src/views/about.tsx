import logo from '@/assets/images/logo.svg'
function Home() {
  const cssobj = {
    logo: {
      width: '60%',
      height: 'auto',
    },
  }
  return (
    <div>
      <div>关于组件{process.env.REACT_APP_API_URL}</div>
      <img style={cssobj.logo} src={logo} alt="" />
    </div>
  )
}

export default Home
