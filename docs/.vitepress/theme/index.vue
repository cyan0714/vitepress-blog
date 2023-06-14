<template>
  <f-main>
    <f-text align="center" line-height="70px" bold block size="25px">
      <f-avatar class="avatar" round :size="150" src="http://1.12.218.227:8080/file/picture/e903b6f23adb1a813d44ac46e2795d99" />
    </f-text>

    <f-text align="center" style="margin-top: 20px">
      <f-button round color="#6296a4" font-color="#fff" class="start" href="/vitepress-blog/documents/frontend/html/html.html">
        😊 快速开始
      </f-button>
      <f-button round href="https://github.com/cyan0714" target="_blank" style="margin-left: 20px">
        Github
      </f-button>
    </f-text>

    <div v-for="(item, index) in quotes" :key="index">
      <f-divider margin="40px" color="#eef" />

      <f-text bold block center>{{ item['hero'] }}</f-text>
      <f-text block center>{{ item['word'] }}</f-text>
    </div>
  </f-main>
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
  }
}
</script>

<style scoped>
.f-main {
  max-width: 620px;
  margin: 40px auto;
  box-sizing: border-box;
  padding: 40px;
  padding-bottom: 0;
}

.f-button-default {
  margin-left: 10px;
}

.f-text {
  display: block;
  line-height: 40px;
}
</style>