# zero-ui 组件库

### 快速开始

#### 1.安装组件库
```bash
npm i zero-ui
```

#### 2.引用组件库
```javascript
// 全局引入
import 'zero-ui/dist/css/index.css'
import zeroUI from 'zero-ui'
Vue.use(zeroUI);

// 按需引用
import 'zero-ui/dist/css/zcard.css'
import { ZCard } from 'zero-ui'
Vue.use(ZCard);
```