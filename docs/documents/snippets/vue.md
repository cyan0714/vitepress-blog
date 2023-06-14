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