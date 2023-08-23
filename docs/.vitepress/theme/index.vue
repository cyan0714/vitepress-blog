<template>
  <div class="home-container">
    <header class="header">
      <img src="http://1.12.218.227:8080/file/picture/e903b6f23adb1a813d44ac46e2795d99" alt="" />
      <div class="btns-area">
        <a class="started" href="/documents/frontend/html/html">😊 快速开始</a>
        <a class="github" href="https://github.com/cyan0714">Github</a>
      </div>
    </header>
    <section class="section" v-for="(item, index) in quotes" :key="index">
      <img :src="`http://${item['picture']}`" alt="" />
      <div class="text-area">
        <p>{{ item['hero'] }}</p>
        <p>{{ item['word'] }}</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { getRandomQuote } from '../service/api.js';
import { getPicturesByType } from '../service/api.js';

export default {
  data() {
    return {
      quotes: [],
    };
  },
  async created() {
    this.quotes = await getRandomQuote();
    for (let i = 0; i < this.quotes.length; i++) {
      const picture = await getPicturesByType(this.quotes[i].hero);
      this.quotes[i].picture = picture[0].path;
    }
  },
};
</script>

<style lang="scss" scoped>
@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 5vh;
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      border-radius: 50%;
      width: 150px;
    }
    .btns-area {
      display: flex;
      margin-top: 20px;
      .started {
        background-color: #6296a4;
        color: #fff;
        padding: 6px 14px;
        border-radius: 30px;
      }
      .github {
        background-color: #fff;
        color: #000;
        padding: 6px 14px;
        border-radius: 30px;
        border: 1px solid #d0d7de;
        margin-left: 20px;
        transition: 0.3s all;
        box-shadow: 7px 7px 12px rgba(0, 0, 0, 0.4), -7px -7px 12px rgba(255, 255, 255, 0.9),
          inset 0 0 0x rgba(255, 255, 255, 0.9), inset 0 0 0 rgba(0, 0, 0, 0.4);
        &:active {
          box-shadow: 0 0 0 rgba(0, 0, 0, 0.4), 0 0 0 rgba(255, 255, 255, 0.9),
            inset -7px -7px 12px rgba(255, 255, 255, 0.9), inset 7px 7px 12px rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
  .section {
    display: flex;
    width: 500px;
    border-radius: 10px;
    padding: 6px;
    margin: 30px 0;
    background-color: #fff;

    .text-area {
      width: calc(100% - 90px);
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      p:nth-child(1) {
        font-weight: bold;
        color: #6296a4;
      }
      p:nth-child(2) {
        margin-top: 8px;
        display: -webkit-box;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    img {
      height: 80px;
      width: auto;
      border-radius: 10px;
    }
  }

  @media screen and (max-width: 400px) {
    .section {
      width: 90%;
    }
  }
}
</style>
