<template>
  <article class="article-container">
    <div class="article-title">
      <!-- <img :src="require(`./images/icon_21.png`)" alt="" /> -->
      <span>{{ title }}</span>
    </div>
    <table class="article-table">
      <tbody class="article-tbody">
        <div class="article-div-left">
          <tr v-for="(item, index) in leftList" :key="index" class="article-tr">
            <td class="article-td key">{{ item.key }}</td>
            <td class="article-td value">{{ item.value }}</td>
          </tr>
        </div>

        <div class="article-div-right">
          <tr v-for="(item, index) in rightList" :key="index" class="article-tr">
            <td class="article-td key">{{ item.key }}</td>
            <td class="article-td value">{{ item.value }}</td>
          </tr>
        </div>
      </tbody>
    </table>
  </article>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: '企业基本情况',
    },
    leftList: {
      type: Array,
      default: () => [
        { key: '企业名称', value: 'XXXXXXXXXXXXXXXX' },
        { key: '组织机构', value: 'XXXXXXXXXXXXXXXX' },
        { key: '单位注册', value: 'XXXXXXXXXXXXXXXX' },
        { key: '单位所在', value: 'XXXXXXXXXXXXXXXX' },
        { key: '单位规模', value: 'XXXXXXXXXXXXXXXX' },
        { key: '成立时间', value: 'XXXXXXXXXXXXXXXX' },
        { key: '登记注册', value: 'XXXXXXXXXXXXXXXX' },
        { key: '企业集团', value: 'XXXXXXXXXXXXXXXX' },
        { key: '上市情况', value: 'XXXXXXXXXXXXXXXX' },
      ],
    },
    rightList: {
      type: Array,
      default: () => [
        { key: '行业类别', value: 'XXXXXXXXXXXXXXXX' },
        { key: '组织机构', value: 'XXXXXXXXXXXXXXXX' },
        { key: '单位地址', value: 'XXXXXXXXXXXXXXXX' },
        { key: '详细地址', value: 'XXXXXXXXXXXXXXXX' },
        { key: '法定代表人', value: 'XXXXXXXXXXXXXXXX' },
        { key: '联系方式', value: 'XXXXXXXXXXXXXXXX' },
        { key: '企业控股', value: 'XXXXXXXXXXXXXXXX' },
        { key: '从事跨国', value: 'XXXXXXXXXXXXXXXX' },
        { key: '是否有研', value: 'XXXXXXXXXXXXXXXX' },
      ],
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.article-container {
  padding-top: 20px;
  .article-title {
    display: flex;
    align-items: center;
    color: #506eda;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .article-table {
    border-collapse: collapse;
    width: 100%;
    .article-tbody {
      display: flex;
      > div {
        flex: 1;
      }
    }
    tr {
      display: flex;
      &:first-child {
        td.value {
          border-top: 1px solid #f5f5f5;
        }
      }
    }
    td {
      text-align: center;
      border-bottom: 1px solid #f5f5f5;
      padding: 14px;
      &.key {
        background-color: #f1f4fa;
        flex: 1;
      }
      &.value {
        flex: 2;
        text-align: left;
      }
    }
  }
}
</style>
