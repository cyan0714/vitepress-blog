# 修改 element 表格默认样式

```scss
.content {
  box-sizing: border-box;
  height: 60%;
  width: 97%;
  padding: 16px 28px;
  margin: auto;
  border-radius: 12px;
  background: url(../../imgs/wallMapShow/content_bg.png) no-repeat center center;
  background-size: cover;
  ::v-deep .el-table {
    overflow: scroll;
    // 修改表格中默认滚动条样式
    ::-webkit-scrollbar {
      width: 8px;
      height: 0;
      // display: none !important;
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
  // ::v-deep .el-input {
  //   min-width: 260px !important;
  // }
  ::v-deep .el-form-item__label {
    font-size: 16px;
    color: #fff;
  }
  ::v-deep .el-input__inner {
    height: 40px;
    width: 12vw;
    border: 1px solid #3755dd;
    line-height: 40px;
    background-color: #00136f;
    font-size: 16px;
    &::placeholder {
      color: #5886d8;
      font-size: 16px;
    }
  }
  ::v-deep .el-button {
    font-size: 16px;
  }
  // 进度条文字居中
  ::v-deep .el-progress-bar__innerText {
    margin: 0 50%;
    transform: translateX(-50%);
  }
  // 表头行背景色
  ::v-deep .el-table th.el-table__cell {
    // border: none;
    border: none;
    background-color: #00136f;
    color: #fff;
    text-align: center;
  }
  ::v-deep .el-table tr {
    background-color: #00136f;
    color: #fff;
    text-align: left !important;
    // border: none;
  }
  // 表格外边框颜色
  ::v-deep .el-table--border {
    border-color: #2648da;
  }
  // 取消表格 hover 时的背景色
  ::v-deep .el-table tbody tr:hover > td {
    background-color: #00136f !important;
    // box-shadow: #021997 10px 10px 30px 5px !important;
  }
  ::v-deep .el-table td.el-table__cell,
  .el-table th.el-table__cell.is-leaf {
    border: 1px solid #2949d2 !important;
    // box-shadow: #021997 10px 10px 30px 5px; //边框阴影
    // 去掉顶部和左侧的边框是因为防止边框重叠
    border-top: none !important;
    border-left: none !important;
  }
  // 表格第一行顶部边框
  ::v-deep .el-table--enable-row-transition .el-table__body tr:nth-child(1) .el-table__cell {
    border-top: 1px solid #2949d2 !important;
    // box-shadow: #021997 10px 10px 30px 5px;
  }
  // 表格第一列左侧边框
  ::v-deep .el-table--enable-row-transition .el-table__body tr td:nth-child(1).el-table__cell {
    border-left: 1px solid #2949d2 !important;
    // box-shadow: #021997 10px 10px 30px 5px;
  }
  // 去掉表格最后一条白线
  ::v-deep .el-table::before {
    height: 0;
  }
  ::v-deep .el-table .cell {
    line-height: 30px !important;
  }
  ::v-deep .el-table .el-table__cell {
    padding: 12px 12px;
  }
}
.pagination {
  position: absolute;
  bottom: 2.5%;
  right: 3%;
  ::v-deep .el-pager li {
    background-color: #00136f;
    color: #fff;
  }
  .el-pagination.is-background {
    ::v-deep .el-pager li:not(.disabled).active {
      background-color: #0460ff;
    }
  }
  ::v-deep .el-input__inner {
    border: none;
    background-color: #00136f;
    color: #fff;
  }
  ::v-deep .el-pagination__jump {
    margin-left: 10px;
    color: #fff;
  }
}

::v-deep .el-table .el-table__header-wrapper .el-table__header thead tr th {
  border-bottom: 2px solid #506eda!important;
  background: #506eda !important
}
```
