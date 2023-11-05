# Element-UI

## el-button-danger(ebd)
```json
"el-button-danger": {
  "prefix": "ebd",
  "body": [
    "<el-button type=\"danger\">$1</el-button>"
  ],
  "description": ""
}
```

## el-button-primary(ebp)
```json
"el-button-primary": {
  "prefix": "ebp",
  "body": [
    "<el-button type=\"primary\">$1</el-button>"
  ],
  "description": ""
}
```

## el-checkbox(ec)
```json
"el-checkbox": {
  "prefix": "ec",
  "body": [
    "<el-checkbox v-model=\"checked\">备选项</el-checkbox>"
  ],
  "description": ""
}
```

## el-confirm(ec)
```json
"el-confirm": {
  "prefix": "ec",
  "body": [
    "const operation = '删除'",
    "this.$$confirm(`是否确认${ operation }?`, '提示', {",
    "  confirmButtonText: '确定',",
    "  cancelButtonText: '取消',",
    "  type: 'warning'",
    "}).then(() => {",
    "  this.$$message({",
    "    type: 'success',",
    "    message: `${ operation }成功!`",
    "  });",
    "}).catch(() => {",
    "});"
  ],
  "description": ""
}
```

## el-date-picker(edp)
```json
"el-date-picker": {
  "prefix": "edp",
  "body": [
    "<el-date-picker",
    "  v-model=\"value1\"",
    "  type=\"datetimerange\"",
    "  value-format=\"yyyy-MM-dd HH:mm:ss\"",
    "  range-separator=\"至\"",
    "  start-placeholder=\"开始日期\"",
    "  end-placeholder=\"结束日期\">",
    "</el-date-picker>"
  ],
  "description": ""
}
```

## el-descriptions(edesc)
```json
{
  "el-descriptions": {
    "prefix": "edesc",
    "body": [
      "<el-descriptions :column=\"1\">",
      "    <el-descriptions-item label=\"用户名\">kooriookami</el-descriptions-item>",
      "    <el-descriptions-item label=\"手机号\">18100000000</el-descriptions-item>",
      "    <el-descriptions-item label=\"居住地\">苏州市</el-descriptions-item>",
      "    <el-descriptions-item label=\"联系地址\">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>",
      "</el-descriptions>"
    ],
    "description": ""
  }
}
```

## el-dialog(ed)
```json
{
  "el-dialog": {
    "prefix": "ed",
    "body": [
      "<el-dialog",
      "  title=\"提示\"",
      "  width=\"30%\"",
      "  destroy-on-close",
      "  append-to-body",
      "  :visible.sync=\"dialogVisible\">",
      "  <span>这是一段信息</span>",
      "  <span slot=\"footer\" class=\"dialog-footer\">",
      "    <el-button @click=\"dialogVisible = false\">取 消</el-button>",
      "    <el-button type=\"primary\" @click=\"dialogVisible = false\">确 定</el-button>",
      "  </span>",
      "</el-dialog>"
    ],
    "description": ""
  }
}
```

## element-form-table-template(eftt)
```json
{
  "element-form-table-template": {
    "prefix": "eftt",
    "body": [
      "<template>",
      "  <div class=\"popup-container\">",
      "    <el-dialog title=\"提示\" width=\"80%\" :visible.sync=\"isShowDlg\" :before-close=\"handleCancel\">",
      "      <el-form :model=\"queryParams\" ref=\"queryForm\" :inline=\"true\" label-width=\"100px\">",
      "        <el-form-item label=\"label\" prop=\"xxx\">",
      "          <el-input v-model=\"queryParams.xxx\" placeholder=\"请输入\" clearable />",
      "        </el-form-item>",
      "        <el-form-item>",
      "          <el-button type=\"primary\" icon=\"el-icon-search\" @click=\"handleQuery\">搜索</el-button>",
      "          <el-button icon=\"el-icon-refresh\" @click=\"handleReset\">重置</el-button>",
      "        </el-form-item>",
      "      </el-form>",
      "",
      "      <el-table :data=\"list\" @selection-change=\"handleSelectionChange\">",
      "        <el-table-column type=\"selection\" width=\"55\" />",
      "        <el-table-column label=\"序号\" type=\"index\" width=\"55\" align=\"center\" />",
      "        <el-table-column label=\"列名\" align=\"center\" prop=\"columnName\" />",
      "      </el-table>",
      "",
      "      <pagination",
      "        v-if=\"total > 0\"",
      "        :total=\"total\"",
      "        :page.sync=\"queryParams.pageNum\"",
      "        :limit.sync=\"queryParams.pageSize\"",
      "        @pagination=\"getList\" />",
      "",
      "      <span slot=\"footer\" class=\"dialog-footer\">",
      "        <el-button @click=\"handleCancel\">取 消</el-button>",
      "        <el-button type=\"primary\" @click=\"handleComfirm\">确 定</el-button>",
      "      </span>",
      "    </el-dialog>",
      "  </div>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "  name: 'commonDlg',",
      "  components: {},",
      "  data() {",
      "    return {",
      "      list: [],",
      "      multipleSelection: [],",
      "      total: 0,",
      "      queryParams: {",
      "        pageNum: 1,",
      "        pageSize: 10,",
      "      },",
      "    }",
      "  },",
      "  props: {",
      "    isShowDlg: {",
      "      type: Boolean,",
      "      default: false",
      "    }",
      "  },",
      "  computed: {},",
      "  created() {",
      "    this.getList()",
      "  },",
      "  methods: {",
      "    getList() {",
      "      getList(this.queryParams).then(res => {",
      "        this.list = res.data.records",
      "        this.total = Number(res.data.total);",
      "      })",
      "    },",
      "    handleQuery() {",
      "      this.queryParams.pageNum = 1;",
      "      this.getList();",
      "    },",
      "    handleReset() {",
      "      this.resetForm(\"queryForm\");",
      "      this.handleQuery();",
      "    },",
      "    handleSelectionChange(val) {",
      "      this.multipleSelection = val;",
      "    },",
      "    handleComfirm() {",
      "      // this.$emit(\"confirm\", this.multipleSelection)",
      "      this.$emit(\"update:isShowDlg\", false)",
      "    },",
      "    handleCancel() {",
      "      this.$emit(\"update:isShowDlg\", false)",
      "    }",
      "  }",
      "}",
      "</script>",
      "",
      "<style scoped lang=\"scss\">",
      ".popup-container {",
      "}",
      "</style>"
    ],
    "description": ""
  }
}
```

## handleCommonConfirm
```json
{
  "handleCommonConfirm": {
    "prefix": "handleCommonConfirm",
    "body": [
      "handleCommonConfirm(operation, api, id) {",
      "  this.$confirm(`是否确认${ operation || '' }?`, '提示', {",
      "    confirmButtonText: '确定',",
      "    cancelButtonText: '取消',",
      "    type: 'warning'",
      "  }).then(() => {",
      "    api(id).then(res => {",
      "      if (res.data.code === 200) {",
      "        this.$message({",
      "          type: 'success',",
      "          message: `${operation || '操作'}成功!`",
      "        });",
      "        this.refreshChange()",
      "      }",
      "    })",
      "  }).catch(() => {",
      "  });",
      "},",
      "        "
    ],
    "description": "handleCommonConfirm"
  }
}
```

## el-input(ei)
```json
{
  "el-input": {
    "prefix": "ei",
    "body": [
      "<el-input v-model=\"input\" placeholder=\"请输入内容\"></el-input>"
    ],
    "description": ""
  }
}
```

## el-message(eme)
```json
{
  "el-message-error": {
    "prefix": "eme",
    "body": [
      "this.$$message.error('错了哦，这是一条错误消息')"
    ],
    "description": ""
  },
  "el-message-warning": {
    "prefix": "emw",
    "body": [
      "this.$$message.warning('警告哦，这是一条警告消息')"
    ],
    "description": ""
  },
  "el-message-success": {
    "prefix": "ems",
    "body": [
      "this.$$message.success('操作成功！')"
    ],
    "description": ""
  }
}
```

## el-radio(er)
```json
{
  "el-radio": {
    "prefix": "er",
    "body": [
      "<el-radio v-model=\"radio\" label=\"1\">备选项</el-radio>"
    ],
    "description": ""
  }
}
```

## el-select-options-data(eso)
```json
{
  "el-select-options-data": {
    "prefix": "eso",
    "body": [
      "options: [",
      "  {",
      "    value: '选项1',",
      "    label: '黄金糕'",
      "  },",
      "  {",
      "    value: '选项2',",
      "    label: '双皮奶'",
      "  },",
      "  {",
      "    value: '选项3',",
      "    label: '蚵仔煎'",
      "  },",
      "],"
    ],
    "description": ""
  }
}
```

## el-select(es)
```json
{
  "el-select": {
    "prefix": "es",
    "body": [
      "  <el-select v-model=\"value\" placeholder=\"请选择\">",
      "    <el-option",
      "      v-for=\"item in options\"",
      "      :key=\"item.value\"",
      "      :label=\"item.label\"",
      "      :value=\"item.value\">",
      "    </el-option>",
      "  </el-select>"
    ],
    "description": ""
  }
}
```

## el-validate(ev)
```json
{
  "el-validate": {
    "prefix": "ev",
    "body": [
      "this.$refs[formName].validate((valid) => {",
      "  if (valid) {",
      "    $1 ",
      "  }",
      "})           "
    ],
    "description": "el-validate"
  }
}
```
