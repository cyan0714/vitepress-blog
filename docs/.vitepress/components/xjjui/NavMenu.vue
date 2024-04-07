<template>
  <div class="sl-content" ref="slContent" @scroll="handleScroll">
    <div class="menu-container">
      <!-- 一级 -->
      <div
        class="menu-item"
        :style="{ '--menu-item-height': item.isExpand ? 'calc(100% - 38px)' : '0' }"
        v-for="(item, index) in navMenu"
        :key="index">
        <div :class="['common-nav', currentIndex === item.index ? 'active-menu' : '']">
          <el-icon>
            <CaretTop @click="toggleMenuItemExpand(item.index)" v-if="item.isExpand" />
            <CaretBottom @click="toggleMenuItemExpand(item.index)" v-else />
          </el-icon>
          <span @click="handleMenuItemClick(item.index)">{{ item.name }}</span>
        </div>
        <!-- 二级 -->
        <div
          class="sub-menu-container"
          :style="{ maxHeight: item.isExpand ? subMenuHeightGroup[index] + 'px' : '0' }">
          <div
            class="sub-menu-item"
            v-for="(subItem, subIndex) in item.children"
            :style="{ '--sub-menu-item-height': subItem.isExpand ? 'calc(100% - 38px)' : '0' }"
            ref="subMenus"
            :key="subIndex">
            <div
              :class="[
                'common-nav',
                'common-nav-two',
                currentIndex === subItem.index ? 'active-menu' : '',
              ]">
              <el-icon>
                <CaretTop @click="toggleSubMenuItemExpand(subItem.index)" v-if="subItem.isExpand" />
                <CaretBottom @click="toggleSubMenuItemExpand(subItem.index)" v-else />
              </el-icon>
              <span @click="handleSubMenuItemClick(subItem.index)">{{ subItem.name }}</span>
            </div>
            <!-- 三级 -->
            <div
              class="sub-sub-menu-container"
              :style="{
                maxHeight: subItem.isExpand ? subSubMenuHeightGroup[index]?.[subIndex] + 'px' : '0',
              }">
              <div
                :class="[
                  'sub-sub-menu-item',
                  currentIndex === subSubItem.index ? 'active-menu' : '',
                ]"
                v-for="(subSubItem, subSubIndex) in subItem.children"
                :key="subSubIndex">
                <span @click="handleSubSubMenuItemClick(subSubItem.index)">{{
                  subSubItem.name
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      backTopBtnVisible: false,
      dialogVisible: true,
      currentIndex: '1',
      subMenuHeightGroup: [],
      subSubMenuHeightGroup: [],
      navMenu: [
        {
          index: '1',
          name: '今年中央政府工作报告中提到的任务到的任',
          isExpand: true,
          children: [
            {
              index: '1-1',
              name: '2023年全面推进乡村振兴战略振兴战略',
              isExpand: true,
              children: [
                {
                  index: '1-1-1',
                  name: '观察中国经济的表现中国经济的表现',
                },
                {
                  index: '1-1-2',
                  name: '观察中国经济的表现中国经济的表现',
                },
                {
                  index: '1-1-3',
                  name: '观察中国经济的表现中国经济的表现',
                },
                {
                  index: '1-1-4',
                  name: '观察中国经济的表现中国经济的表现',
                },
                {
                  index: '1-1-5',
                  name: '观察中国经济的表现中国经济的表现',
                },
              ],
            },
            {
              index: '1-2',
              name: '2023年全面推进乡村振兴战略振兴战略',
              isExpand: true,
              children: [
                {
                  index: '1-2-1',
                  name: '观察中国经济的表现中国经济的表现',
                },
                {
                  index: '1-2-2',
                  name: '观察中国经济的表现中国经济的表现',
                },
              ],
            },
          ],
        },
        {
          index: '2',
          name: '今年中央政府工作报告中提到的任务到的任',
          isExpand: true,
          children: [
            {
              index: '2-1',
              name: '2023年全面推进乡村振兴战略振兴战略',
              isExpand: true,
              children: [
                {
                  index: '2-1-1',
                  name: '观察中国经济的表现中国经济的表现',
                },
                {
                  index: '2-1-2',
                  name: '观察中国经济的表现中国经济的表现',
                },
              ],
            },
            {
              index: '2-2',
              name: '2023年全面推进乡村振兴战略振兴战略',
              isExpand: true,
              children: [
                {
                  index: '2-2-1',
                  name: '观察中国经济的表现中国经济的表现',
                },
                {
                  index: '2-2-2',
                  name: '观察中国经济的表现中国经济的表现',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  props: {},
  computed: {},
  created() {},
  mounted() {
    setTimeout(() => {
      const smCs = document.querySelectorAll('.sub-menu-container');
      const ssmCs = document.querySelectorAll('.sub-sub-menu-container');

      ssmCs.forEach(ssmC => {
        this.subSubMenuHeightGroup.push(ssmC.scrollHeight);
      });
      const newSubSubMenuHeightGroup = [];
      for (let i = 0; i < this.navMenu.length; i++) {
        const children = this.navMenu[i].children;
        newSubSubMenuHeightGroup.push(this.subSubMenuHeightGroup.splice(0, children.length));
      }
      this.subSubMenuHeightGroup = JSON.parse(JSON.stringify(newSubSubMenuHeightGroup));

      smCs.forEach(smC => {
        this.subMenuHeightGroup.push(smC.scrollHeight);
      });
    }, 300);
  },
  methods: {
    handleScroll(e) {
      this.backTopBtnVisible = e.target.scrollTop > 0;
    },
    handleBackTop() {
      this.$refs.slContent.scroll({
        top: 0,
        behavior: 'smooth',
      });
    },
    handleSubSubMenuItemClick(index) {
      this.currentIndex = index;
    },
    handleSubMenuItemClick(index) {
      this.currentIndex = index;
    },
    toggleSubMenuItemExpand(index) {
      const subMenu = this.navMenu
        .find(item => item.index === index.split('-')[0])
        .children.find(item => item.index === index);
      subMenu.isExpand = !subMenu.isExpand;
    },
    toggleMenuItemExpand(index) {
      const menu = this.navMenu.find(item => item.index === index);
      menu.isExpand = !menu.isExpand;
    },
    handleMenuItemClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped lang="scss">
div.sl-content {
  padding-top: 14px;
  height: calc(100% - 60px);
  overflow: auto;
  &::-webkit-scrollbar-track-piece {
    background-color: #f0f5ff;
  }
  &::-webkit-scrollbar {
    width: 4px;
    height: 40px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    //background-color: hsla(220, 4%, 58%, .3);
    background-color: #5479ff;
  }
  .menu-container {
    .menu-item {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 25px;
        left: 8px;
        width: 1px;
        height: var(--menu-item-height);
        background-color: #d3d3ef;
      }
      .common-nav {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        span {
          margin-bottom: 0;
        }
      }
      .common-nav-two {
        position: relative;
      }
      i {
        margin-right: 10px;
        font-size: 18px;
        cursor: pointer;
      }
      span {
        display: block;
        margin-bottom: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #000;
        cursor: pointer;
      }
      .sub-menu-item {
        position: relative;
        margin-left: 20px;
        &::before {
          content: '';
          position: absolute;
          top: 25px;
          left: 8px;
          width: 1px;
          height: var(--sub-menu-item-height);
          background-color: #d3d3ef;
        }
        .sub-sub-menu-item {
          padding-left: 28px;
        }
      }
    }
    .sub-menu-container {
      overflow: hidden;
      transition: all 0.5s;
      .sub-sub-menu-container {
        overflow: hidden;
        transition: all 0.5s;
      }
    }
  }
}
.single-row-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.active-menu {
  i {
    color: #5479ff;
  }
  span {
    color: #5479ff !important;
    font-weight: bold;
  }
}
</style>
<style lang="scss">
.lookui-dialog-no-content-padding {
  .el-dialog__body {
    padding: 0;
  }
}
</style>
