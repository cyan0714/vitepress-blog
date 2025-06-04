# 开发技巧与最佳实践

## 📱 移动端与CSS技巧

### 移动端滚动优化
在移动端使用 `overflow-y: scroll` 时滚动效果不流畅，可以添加以下属性优化：

```css
.scroll-container {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch; /* iOS 原生滚动回弹效果 */
}
```

### 字体图标渐变色效果
使用渐变色为字体图标添加丰富的视觉效果：

```css
.gradient-icon {
  background: linear-gradient(180deg, #fabd3d 0%, #10ddcc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### 开发前的样式规范
建议在项目开始前统一定义以下CSS变量：
- `border`：边框样式
- `border-radius`：圆角半径
- `color`：主题色彩

## 🎯 Vue.js 开发技巧

### API与方法命名冲突解决
当API名称与组件方法名相同时，在方法前添加下划线区分：

```js
export default {
  methods: {
    // 避免与API名称冲突
    _getUserInfo() {
      return this.getUserInfo()
    }
  }
}
```

### 音频元素的隐藏处理
`audio` 标签不添加任何属性时，在页面中不会显示：

```html
<!-- 隐藏的音频元素 -->
<audio src="background-music.mp3"></audio>
```

## 🚀 JavaScript 编程技巧

### Vue 3 懒加载最佳实践
使用 `@vueuse/core` 实现图片和组件的懒加载：

#### 图片懒加载
```vue
<template>
  <div>
    <!-- 使用 useIntersectionObserver 实现图片懒加载 -->
    <img 
      ref="imgRef"
      :src="isIntersecting ? actualSrc : placeholderSrc"
      :alt="alt"
      class="lazy-image"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  src: String,
  alt: String,
  placeholder: {
    type: String,
    default: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+'
  }
})

const imgRef = ref()
const isIntersecting = ref(false)
const actualSrc = ref(props.src)
const placeholderSrc = ref(props.placeholder)

// 监听元素是否进入视口
useIntersectionObserver(
  imgRef,
  ([{ isIntersecting: visible }]) => {
    if (visible) {
      isIntersecting.value = true
    }
  },
  {
    rootMargin: '50px', // 提前50px开始加载
  }
)
</script>

<style scoped>
.lazy-image {
  transition: opacity 0.3s ease;
  width: 100%;
  height: auto;
}
</style>
```

#### 组件懒加载
```vue
<template>
  <div>
    <!-- 条件渲染重组件 -->
    <HeavyComponent v-if="shouldLoad" />
    <div v-else ref="triggerRef" class="component-placeholder">
      组件加载中...
    </div>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

// 异步组件
const HeavyComponent = defineAsyncComponent(() => 
  import('./HeavyComponent.vue')
)

const triggerRef = ref()
const shouldLoad = ref(false)

useIntersectionObserver(
  triggerRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      shouldLoad.value = true
    }
  }
)
</script>
```

#### 无限滚动懒加载
```vue
<template>
  <div class="infinite-scroll">
    <div v-for="item in items" :key="item.id" class="item">
      {{ item.content }}
    </div>
    
    <!-- 加载触发器 -->
    <div ref="loadMoreRef" class="load-trigger">
      <span v-if="loading">加载中...</span>
      <span v-else-if="!hasMore">已加载全部</span>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const items = ref([])
const loading = ref(false)
const hasMore = ref(true)
const page = ref(1)
const loadMoreRef = ref()

// 模拟加载数据
const loadMore = async () => {
  if (loading.value || !hasMore.value) return
  
  loading.value = true
  
  try {
    // 模拟API调用
    const response = await fetchData(page.value)
    items.value.push(...response.data)
    page.value++
    hasMore.value = response.hasMore
  } catch (error) {
    console.error('加载失败:', error)
  } finally {
    loading.value = false
  }
}

// 监听加载触发器
useIntersectionObserver(
  loadMoreRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      loadMore()
    }
  },
  {
    rootMargin: '100px', // 提前100px触发加载
  }
)

// 模拟数据获取
const fetchData = (pageNum) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = Array.from({ length: 10 }, (_, i) => ({
        id: (pageNum - 1) * 10 + i + 1,
        content: `Item ${(pageNum - 1) * 10 + i + 1}`
      }))
      
      resolve({
        data,
        hasMore: pageNum < 5 // 假设只有5页数据
      })
    }, 1000)
  })
}
</script>

<style scoped>
.infinite-scroll {
  max-height: 400px;
  overflow-y: auto;
}

.item {
  padding: 12px;
  border-bottom: 1px solid #eee;
}

.load-trigger {
  padding: 20px;
  text-align: center;
  color: #666;
}
</style>
```

### Promise解构优化
优化Promise的then方法参数解构：

```js
// ❌ 基础写法
xxx().then(res => {
  const data = res.data || {}
})

// ✅ 优化写法
xxx().then(({ data = {} }) => {
  // 直接使用解构的data
})
```

### 批量操作DOM元素
以iconfont图标批量添加为例：

```js
// 批量添加所有图标到购物车
const addAllToCart = () => {
  const shopCar = document.getElementsByClassName('icon-gouwuche1')
  Array.from(shopCar).forEach(icon => icon.click())
}

// 或使用for循环
const addAllToCartLegacy = () => {
  const shopCar = document.getElementsByClassName('icon-gouwuche1')
  for (let i = 0; i < shopCar.length; i++) {
    shopCar[i].click()
  }
}
```

## ⏰ 时间处理工具

### 基于dayjs的时间范围快速选择
适用于Element UI时间选择器的快速选择功能：

```js
import dayjs from 'dayjs'

/**
 * 获取指定时间范围
 * @param {string} timeRange - 时间范围类型 (day|week|month|year)
 * @param {boolean} isCurrent - 是否为当前时间范围
 * @returns {Object} 包含startTime和endTime的对象
 */
const getRangeTime = (timeRange, isCurrent = true) => {
  const base = isCurrent ? dayjs() : dayjs().add(-1, timeRange)
  
  return {
    startTime: base.startOf(timeRange).format('YYYY-MM-DD HH:mm:ss'),
    endTime: base.endOf(timeRange).format('YYYY-MM-DD HH:mm:ss'),
  }
}

/**
 * Element UI时间选择器快速选择配置
 * @returns {Array} 快速选择选项数组
 */
export const quickSelectTimeRange = () => {
  const timeRanges = [
    { text: '今天', range: 'day', isCurrent: true },
    { text: '昨天', range: 'day', isCurrent: false },
    { text: '本周', range: 'week', isCurrent: true },
    { text: '上周', range: 'week', isCurrent: false },
    { text: '本月', range: 'month', isCurrent: true },
    { text: '上月', range: 'month', isCurrent: false },
    { text: '本年', range: 'year', isCurrent: true },
    { text: '上年', range: 'year', isCurrent: false },
  ]

  return timeRanges.map(({ text, range, isCurrent }) => ({
    text,
    onClick(picker) {
      const timeObj = getRangeTime(range, isCurrent)
      picker.$emit('pick', [timeObj.startTime, timeObj.endTime])
    },
  }))
}
```

## 🗄️ 数据库操作

### MySQL图片存储
在MySQL中存储图片的方法：

#### 1. 创建表结构
```sql
CREATE TABLE images (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  image LONGBLOB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### 2. 插入图片数据
```sql
-- 使用LOAD_FILE函数（需要FILE权限）
INSERT INTO images (name, image)
VALUES ('image1.jpg', LOAD_FILE('/path/to/image1.jpg'));
```

#### 3. 重要注意事项
- 确保MySQL服务器启用FILE权限
- 使用 `SELECT @@secure_file_priv;` 查看安全文件目录
- 建议使用相对路径避免权限问题
- 大文件建议存储在文件系统中，数据库只存储路径

## 🎨 代码模式与最佳实践

### 策略模式优化表单验证

#### ❌ 传统if-else写法
```js
validateForm(values) {
  if (!values.username) {
    this.$message.error('用户名不能为空')
    return false
  } else if (!values.password) {
    this.$message.error('密码不能为空')
    return false
  } else if (!values.phoneNumber) {
    this.$message.error('手机号不能为空')
    return false
  }
  return true
}
```

#### ✅ 策略模式优化
```js
// 验证规则配置
const validationRules = [
  { 
    key: 'username', 
    required: true, 
    message: '用户名不能为空',
    validator: (value) => value && value.trim()
  },
  { 
    key: 'password', 
    required: true, 
    message: '密码不能为空',
    validator: (value) => value && value.length >= 6
  },
  { 
    key: 'phoneNumber', 
    required: true, 
    message: '手机号不能为空',
    validator: (value) => /^1[3-9]\d{9}$/.test(value)
  },
]

export default {
  methods: {
    /**
     * 表单验证器
     * @param {Object} values - 表单值对象
     * @returns {boolean} 验证是否通过
     */
    validateForm(values) {
      for (const rule of validationRules) {
        const value = values[rule.key]
        
        if (rule.required && !rule.validator(value)) {
          this.$message.error(rule.message)
          return false
        }
      }
      return true
    },

    /**
     * 提交表单
     * @param {Object} values - 表单值
     */
    submitForm(values) {
      if (!this.validateForm(values)) {
        return
      }
      
      // 验证通过，执行提交逻辑
      this.handleSubmit(values)
    },
  },
}
```

### 解构赋值优化数据处理

#### ❌ 逐个赋值
```js
handleFormData() {
  const params = {}
  params.id = this.formItem.id
  params.startDate = this.formItem.startDate.format("YYYY-MM-DD")
  params.endDate = this.formItem.endDate.format("YYYY-MM-DD")
  params.price = this.formItem.price.toString()
  params.type = this.formItem.type
  params.total = this.formItem.total
  params.name = this.formItem.name
  params.comment = this.formItem.comment
  
  return params
}
```

#### ✅ 解构赋值优化
```js
handleFormData() {
  const { startDate, endDate, price, ...otherParams } = this.formItem
  
  return {
    ...otherParams,
    startDate: startDate.format("YYYY-MM-DD"),
    endDate: endDate.format("YYYY-MM-DD"),
    price: price.toString(),
  }
}
```

### 函数参数优化

#### ❌ 多个独立参数
```js
// 参数顺序固定，调用时容易出错
const createUser = (name, age, height, weight, email) => {
  console.log({ name, age, height, weight, email })
}

// 调用时必须按顺序传递，容易遗漏或错乱
createUser('张三', 25, 175, 70, 'zhangsan@example.com')
createUser('李四', 30) // 缺少参数
```

#### ✅ 对象参数模式
```js
// 使用对象参数，更清晰、灵活
const createUser = ({ name, age, height, weight, email, ...otherInfo }) => {
  console.log({ name, age, height, weight, email, ...otherInfo })
}

// 调用时参数含义清晰，顺序无关
createUser({ 
  name: '张三', 
  age: 25, 
  email: 'zhangsan@example.com',
  height: 175 
})

// 只传递必要参数
createUser({ name: '李四', age: 30 })

// 支持参数默认值
const createUserWithDefaults = ({ 
  name, 
  age = 18, 
  height = 170, 
  weight = 60,
  email = '' 
}) => {
  console.log({ name, age, height, weight, email })
}
```
