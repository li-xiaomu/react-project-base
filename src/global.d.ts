// global.d.ts 这个声明告诉 TypeScript，所有以 .module.less 结尾的文件都应该被视为返回一个包含类名的对象。
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}
