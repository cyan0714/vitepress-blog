# Vue

## bind-img-dynamic(img)
```json
{
  "bind img dynamic": {
    "prefix": "img",
    "body": [
      "<img :src=\"require(`@/imgs/${$1}`)\" alt=\"\">"
    ],
    "description": "bind img dynamic"
  }
}
```

## bind-background-style-dynamic(bgs)
```json
{
  "backgroundStyle": {
    "prefix": "bgs",
    "body": [
      "backgroundStyle(imgUrl) {",
      "  return {",
      "    backgroundImage: `url(\\${imgUrl})`,",
      "    backgroundRepeat: 'no-repeat',",
      "    backgroundSize: '100% 100%',",
      "  };",
      "},"
    ],
    "description": "bind background style dynamically"
  }
}
```

## vue-template(vue)
```json
{
  "Print to console": {
    "prefix": "vue",
    "body": [
      "<template>",
      "  <div class=\"$TM_FILENAME_BASE\"></div>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "  components: {},",
      "  data() {",
      "    return {}",
      "  },",
      "  props: {},",
      "  computed: {},",
      "  created() {},",
      "  mounted() {},",
      "  methods: {}",
      "}",
      "</script>",
      "",
      "<style scoped lang=\"scss\">",
      ".$TM_FILENAME_BASE {",
      "",
      "}",
      "</style>",
      ""
    ],
    "description": "a vue options template"
  }
}
```

## v-for in list
```json
{
  "v-for in list": {
    "prefix": "vfor",
    "body": [
      "<div v-for=\"(item, index) in list\"",
      "   :class=\"['list-item', currentIndex === index ? 'list-item-actived' : '']\"",
      "   :key=\"index\"",
      "   @click=\"handleClick(index)\">",
      "</div>"
    ],
    "description": "v-for in list"
  }
}
```