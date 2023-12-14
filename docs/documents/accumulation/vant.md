# vant 自定义组件

## 1. 自定义 loading

```vue
<template>
  <van-loading class="diy-dialog" color="#1989fa" vertical style="">加载中...</van-loading>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss">
.diy-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
```

## 2. 自定义 nav-bar

```vue
<template>
  <van-nav-bar
    :title="title || options.title"
    :border="options.border"
    left-arrow
    @click-left="goBack"
    :style="{
      '--var-title-color': options.titleColor,
      '--var-left-arrow-color': options.leftArrowColor,
      '--var-background-color': options.bgColor,
    }" />
</template>

<script>
import { NavBar } from 'vant';
export default {
  components: {
    [NavBar.name]: NavBar,
  },
  data() {
    return {};
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          border: true,
          bgColor: '#fff',
          titleColor: '#000',
          leftArrowColor: '#000',
        };
      },
    },
    title: {
      type: String,
      default: '',
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
.van-nav-bar {
  background-color: var(--var-background-color);
  ::v-deep .van-icon {
    color: var(--var-left-arrow-color);
  }
}
::v-deep .van-nav-bar__arrow {
  font-size: 20px;
}
::v-deep .van-nav-bar__title {
  font-size: 18px;
  color: var(--var-title-color);
}
</style>
```

## 3. 自定义 tab-bar

```vue
<template>
  <van-tabbar v-if="isShowTabbar" v-model="active" route>
    <van-tabbar-item
      v-for="(tabbar, index) in tabbars"
      :key="index"
      :name="tabbar.ename"
      replace
      :to="tabbar.path">
      <span>{{ tabbar.name }}</span>
      <template #icon="props">
        <img :src="props.active ? tabbar.activeIcon : tabbar.icon" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  data() {
    return {
      active: 'supervise-unite',
      tabbars: [
        {
          name: '首页',
          activeIcon: require('./images/tabbar/icon_home_active.png'),
          icon: require('./images/tabbar/icon_home.png'),
          path: '/home',
          ename: 'home',
        },
        {
          name: '督办任务',
          activeIcon: require('./images/tabbar/icon_supervise_mission_active.png'),
          icon: require('./images/tabbar/icon_supervise_mission.png'),
          path: '/supervise-mission',
          ename: 'supervise-mission',
        },
        {
          name: '多督合一',
          activeIcon: require('./images/tabbar/icon_supervise_unite_active.png'),
          icon: require('./images/tabbar/icon_supervise_unite.png'),
          path: '/supervise-unite',
          ename: 'supervise-unite',
        },
        {
          name: '我的',
          activeIcon: require('./images/tabbar/icon_profile_active.png'),
          icon: require('./images/tabbar/icon_profile.png'),
          path: '/profile-page',
          ename: 'profile-page',
        },
      ],
    };
  },
  methods: {},
  created() {},
  computed: {
    isShowTabbar() {
      return ['/home', '/supervise-mission', '/supervise-unite', '/profile-page'].includes(
        this.$route.path
      );
    },
  },
};
</script>
```

## 4. 自定义下拉刷新上拉加载列表

```vue
<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh" :disabled="isRefreshDisable">
    <van-list
      class="lw-list"
      ref="vanList"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :immediate-check="false"
      @load="onLoad">
      <ListItem v-for="(item, index) in projects" :key="index" :item="item" />
    </van-list>
  </van-pull-refresh>
</template>

<script>
import ListItem from '../components/ListItem';
import { List, PullRefresh } from 'vant';

export default {
  data() {
    return {
      isRefreshDisable: false,
      projects: [],
      loading: false,
      finished: false,
      refreshing: false,
      scrollTop: 0,
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.resolveConflict(this.$refs.vanList.$el);
    });
  },

  watch: {
    scrollTop(newval) {
      if (newval > 0) {
        this.isRefreshDisable = true;
      } else {
        this.isRefreshDisable = false;
      }
    },
  },

  methods: {
    // 解决van-pull-refresh下拉刷新与局部滚动条下滑冲突问题
    resolveConflict(val) {
      const vantList = val;
      vantList.addEventListener('touchmove', () => {
        this.scrollTop = vantList.scrollTop;
      });
      vantList.addEventListener('touchend', () => {
        this.scrollTop = vantList.scrollTop;
      });
    },

    async onLoad() {
      this.loading = true;

      if (this.roleList.includes('CBDW') && this.type === PERSONAL) {
        this.queryParams.queryObj.csldStatus = 1;
      }

      const { resultData } = await getDdhyTaskList(this.queryParams);

      if (this.refreshing) {
        this.projects = [];
        this.refreshing = false;
      }

      this.projects.push(...resultData.items);
      this.queryParams.skip += this.queryParams.pageSize;

      if (this.projects.length >= Number(resultData.total)) {
        this.finished = true;
      } else {
        this.finished = false;
      }

      // this.loading 得放在列表赋值的后面, 否则会导致上拉加载时, 加载所有数据
      this.loading = false;
    },

    onRefresh() {
      this.refreshing = true;
      this.loading = true;
      this.finished = false;
      this.queryParams.skip = 0;
      this.onLoad();
      this.$toast('刷新成功');
    },
  },
};
</script>
```

