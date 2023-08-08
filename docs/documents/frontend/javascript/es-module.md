# ESModule

## 以下代码相当于什么
```js
export { default as Navbar } from './Navbar'
export { default as Sidebar } from './Sidebar'
export { default as AppMain } from './AppMain'
```
上面的代码相当于:
```js
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import AppMain from './AppMain';

export {
  Navbar,
  Sidebar,
  AppMain
};
```