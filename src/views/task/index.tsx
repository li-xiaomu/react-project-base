import logo from '@/assets/images/logo.svg';
import styles from '@/assets/styles/Logo.module.less';
import { useState } from 'react';
import { Button } from "antd";
interface User {
  name: string;
  age?: number;
}
function Home() {
  const [info, setInfo] = useState<User>({
    name: 'xiaom',
    age: 22
  })
  const uploadName = (name: string) => {
    setInfo((data) => {
      return {
        ...data,
        name
      }
    })
  }
  return (
    <div>
      <div>新闻组件一</div>
      <p>{info.name}</p>
      <p>{ info.age }</p>
      <img className={styles.logo} src={logo} alt="" />
      <Button type="primary" onClick={() => uploadName('李小木')}>更改名称</Button>
    </div>
  );
}
export default Home;
