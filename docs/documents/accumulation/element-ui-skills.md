# ElementUI 常见问题以及技巧

## 一. 在 el-table 中的插槽使用 el-input 时遇到的问题
1. 输入时，在控制台能看到 value 已经改变，但视图无法同步更新
可以使用 this.tableList = JSON.parse(JSON.stringify(this.tableList)) 来解决这个问题，但会出现问题2
2. 第一次输入后，光标自动定位到末尾，令人摸不着头脑
可以使用原生 input 来代替 el-input

## 二. 在 el-table 中某一行的某个属性改变了，页面无法重新渲染
试了以下方法都不行
1. this.$set()
2. this.$forceUpdate
解决方法：
- 给 el-table 一个 key, 改变某个属性后修改这个 key，比如可以用 Math.random() 作为新的 key
- 看以下代码

```js
getStatus(row, index) {
  let item = JSON.parse(JSON.stringify(this.tableList[index]))
  item.editable = row.editable
  this.$set(this.tableList, index, item)
}
```

### 三. 父组件使用一个 el-input 封装的子组件, 且通过 v-model 绑定时, input 框无法输入问题
给表单重新赋值
```js
this.form = {...this.form}
```

### 四. 如何解决表单重新赋值后, 自动触发表单验证的问题
```js
this.form.a = ''
setTimeout(() => {
  this.$refs.form.clearValidate()
}, 0);
```

### 五. el-table 右侧固定布局 fixed=“right“ 错位
```css
.table {
  ::v-deep .el-table__fixed-right {
    height: 100% !important;
  }
  ::v-deep .el-table__fixed {
    height: 100% !important;
  }
}
```
