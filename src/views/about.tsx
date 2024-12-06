import logo from '@/assets/images/logo.svg';
function Home() {
  return (
    <div>
      <div>关于组件{process.env.REACT_APP_API_URL}</div>
      <img className="logo" src={logo} alt="" />
    </div>
  );
}
export default Home;
