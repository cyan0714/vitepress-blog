<template>
  <div class="list">
    <div class="cc rowup">
      <div class="item">1- 121233fffffr国家认可更健康进口价格困扰</div>
      <div class="item">2- 3123233</div>
      <div class="item">3- 个人口结构俄跨入国际科技馆客人感觉</div>
      <div class="item">4- ggrgerg</div>
      <div class="item">5- fvdgdv</div>
      <div class="item">
        6- 德国南部巴士与卡车相撞起火 31人受伤11人死亡朴槿惠庭审时突然昏迷
        支持者：她死了法官要负责！
      </div>
      <div class="item">7- 外交部再次回应印军越界:要求立即将越界部队撤回</div>
      <div class="item">8- 德国网红致信默克尔</div>
      <div class="item">9- 国资委原</div>
      <div class="item">1- 121233fffffr国家认可更健康进口价格困扰</div>
      <div class="item">2- 3123233</div>
      <div class="item">3- 个人口结构俄跨入国际科技馆客人感觉</div>
      <div class="item">4- ggrgerg</div>
      <div class="item">5- fvdgdv</div>
      <div class="item">
        6- 德国南部巴士与卡车相撞起火 31人受伤11人死亡朴槿惠庭审时突然昏迷
        支持者：她死了法官要负责！
      </div>
      <div class="item">7- 外交部再次回应印军越界:要求立即将越界部队撤回</div>
      <div class="item">8- 德国网红致信默克尔</div>
      <div class="item">9- 国资委原</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes rowup {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0); // 50% 是相对于 rowup 这个 class 所在的盒子的高度的 50%，如果重复的内容有2份，则为50%，如果为3份，则为33.33%，以此类推
  }
}
.list {
  width: 300px;
  border: 1px solid #999;
  margin: 20px auto;
  position: relative;
  height: 200px;
  overflow: hidden;
}

.list .rowup {
  -webkit-animation: 10s rowup linear infinite normal;
  animation: 10s rowup linear infinite normal;
  position: relative;
}
</style>
