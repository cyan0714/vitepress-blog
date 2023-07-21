# 修改 element 表格默认样式

## 表格外边框颜色

```scss
::v-deep .el-table--border {
  border-color: #2648da;
}
```

## 取消表格 hover 时的背景色

```scss
::v-deep .el-table tbody tr:hover > td {
  background-color: #00136f !important;
}
::v-deep .el-table td.el-table__cell,
.el-table th.el-table__cell.is-leaf {
  border: 1px solid #2949d2 !important;
  // 去掉顶部和左侧的边框是因为防止边框重叠
  border-top: none !important;
  border-left: none !important;
}
```

## 表格第一行顶部边框

```scss
::v-deep .el-table--enable-row-transition .el-table__body tr:nth-child(1) .el-table__cell {
  border-top: 1px solid #2949d2 !important;
}
```

## 表格第一列左侧边框

```scss
::v-deep .el-table--enable-row-transition .el-table__body tr td:nth-child(1).el-table__cell {
  border-left: 1px solid #2949d2 !important;
}
```

## 表头行背景色

```scss
::v-deep .el-table th.el-table__cell {
  border: none;
  background-color: #00136f;
  color: #fff;
  text-align: center;
}
```

## 修改表格头部背景

```scss
::v-deep .el-table th {
  background: orange;
}
```

## 修改表格行背景

```scss
::v-deep .el-table tr {
  background: #eee;
}
```

## 修改斑马线表格的背景

```scss
::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #ccc;
}
```

## 修改行内线的颜色

```scss
::v-deep .el-table td,
.building-top .el-table th.is-leaf {
  border-bottom: 2px solid #eee;
}
```

## 修改表格最底部边框颜色和高度

```scss
::v-deep .el-table::before {
  border-bottom: 1px solid #ccc;
  height: 3px;
}
```

## 修改表头字体颜色

```scss
::v-deep .el-table thead {
  color: #ccc;
  font-weight: 700;
}
```

## 修改表格内容字体颜色和字体大小

```scss
::v-deep .el-table {
  color: #6b91ce;
  font-size: 14px;
}
```

## 修改表格无数据的时候背景，字体颜色

```scss
::v-deep .el-table__empty-block {
  background: #ccc;
}
::v-deep .el-table__empty-text {
  color: #fff;
}
```

## 修改表格鼠标悬浮 hover 背景色

```scss
::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: pink;
}
```

## 修改表格中默认滚动条样式

```scss
::v-deep .el-table {
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 8px;
    height: 0;
  }
  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #316fff;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background-color: #00136f;
  }
}
```

## 去掉表格最后一条白线

```scss
::v-deep .el-table::before {
  height: 0;
}
```
