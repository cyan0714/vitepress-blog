<template>
  <section class="section-container">
    <el-form :inline="true" :model="form" class="form-inline">
      <el-form-item label="企业名称">
        <el-input v-model="form.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="地区">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
        <span style="cursor: pointer; margin-left: 12px"
          >高级搜索<i class="el-icon-arrow-down"></i
        ></span>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" style="width: 100%" class="lookui-table" height="550">
      <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
      <el-table-column prop="name" label="企业名称" align="center">
        <!-- vue3 -->
        <template #default="{row}">
          <a style="color: #5b81fc" @click="goDetail">{{ row.name }}</a>
        </template>
        <!-- vue2 -->
        <!-- <template slot-scope="{ row }">
          <a style="color: #5b81fc" @click="goDetail">{{ row.name }}</a>
        </template> -->
      </el-table-column>
      <el-table-column prop="area" label="地区" align="center"></el-table-column>
      <el-table-column prop="belongIndustry" label="所属产业" align="center"></el-table-column>
      <el-table-column prop="code" label="统一社会信用代码" align="center"></el-table-column>
    </el-table>
    <div style="display: flex; justify-content: flex-end">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        background>
      </el-pagination>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      currentPage: 1,
      form: {},
      tableData: [],
    };
  },
  computed: {},
  created() {},
  mounted() {
    for (let i = 0; i < 10; i++) {
      this.tableData.push({
        name: '海南新境界软件有限公司',
        area: '海口',
        belongIndustry: '计算机软件',
        code: 12323423434,
        income: 365,
        cost: 365,
        profit: 365,
        totalMoney: 365,
        saleMoney: 365,
      });
    }
  },
  methods: {
    goDetail() {
      this.$router.push({
        name: 'gxlyyxjcDetail'
      })
    },
    onSubmit() {

    },
    handleCurrentChange() {

    },
    handleSizeChange() {

    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped lang="scss">
section.section-container {
  margin-top: 10px;
  padding: 20px;
  background-color: #fff;
  ::v-deep .el-table th {
    background-color: #e6ebfb !important;
    color: #000;
  }
}
</style>
<style>
/* vitepress 中才设置以下样式 */
.vp-doc table {
  margin: 0;
}
</style>
