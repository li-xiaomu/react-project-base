import logo from '@/assets/images/logo.svg';
import styles from '@/assets/styles/Logo.module.less';
function Home() {
  return (
    <div>
      <div>新闻组件一</div>
      <img className={styles.logo} src={logo} alt="" />
    </div>
  );
}
export default Home;
