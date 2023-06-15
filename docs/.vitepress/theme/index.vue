<template>
  <div class="home-container">
    <header class="header">
      <img
        src="http://1.12.218.227:8080/file/picture/e903b6f23adb1a813d44ac46e2795d99"
        alt="" />
      <div class="btns-area">
        <a class="started" href="/documents/frontend/html/html">😊 快速开始</a>
        <a class="github" href="https://github.com/cyan0714">Github</a>
      </div>
    </header>
    <section
      class="section"
      v-for="(item, index) in quotes"
      :key="index">
      <p>{{ item['hero'] }}</p>
      <p>{{ item['word'] }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { getRandomQuote } from '../service/api.js'

export default {
  data() {
    return {
      quotes: [],
    }
  },
  created() {
    getRandomQuote().then(res => {
      this.quotes = res
    })
  },
}
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;
  margin: 0 auto;
  margin-top: 80px;
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
      }
    }
  }
  .section {
    width: 500px;
    padding: 40px;
    border-radius: 10px;
    text-align: center;
    margin: 30px 0;
    box-shadow: 0 3px 6px rgba(140,149,159,0.15);
    border: 1px solid #d0d7de;
  }
}
</style>
