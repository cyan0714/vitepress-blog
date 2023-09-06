## 海南省地图

<div id="map-container">
  <div ref="echartRef" class="chart" style="width: 800px; height: 500px;"></div>
</div>

<script>
import * as echarts from "echarts";
import haiNanMap from "./js/haiNan.json";

export default {
  name: "haiNan-map",
  components: {},
  data() {
    return {
      chart: null,
      option: null,
      defaultCode: {
        name: "hainan",
        mapCode: haiNanMap,
      }
    };
  },
  mounted() {
    this.loadMap(); //初始化地图
  },
  methods: {
    loadMap() {
      const chart = echarts.init(this.$refs.echartRef);
      echarts.registerMap(this.defaultCode.name, this.defaultCode.mapCode);
      this.option = {
        title: {
          text: "HN",
          subtext: "hn map",
          left: "right",
          show: false
        },
        visualMap: {
          left: "right",
          realtime: false,
          min: 500000,
          max: 38000000,
          inRange: {
            color: [
              "#0e56c2",
              "#0e56c2",
              "#0a3c7b",
              "#0c4281",
              "#0d4799",
              "#114892",
              "#133361",
              "#105cc5",
              "#154185",
              "#06234b",
              "#1566c4",
              "#0f428c",
              "#06234b",
              "#062b58",
              "#105bc5",
              "#062b58",
              "#032d5d",
              "#062b58",
              "#0e56c2",
            ],
          },
          text: ["High", "Low"],
          // calculable: true,
        },
        // toolbox: {
        //   show: false,
        //   orient: "vertical",
        //   left: "left",
        //   top: "top",
        //   feature: {
        //     dataView: { readOnly: false },
        //     restore: {},
        //     saveAsImage: {},
        //   },
        // },
        series: [
          {
            name: "Map",
            type: "map",
            aspectScale: 1,
            roam: false,
            map: this.defaultCode.name,
            label: {
              formatter: ["{b|{b}}", "{c|{c}}"].join("\n"),
              show: true,
              rich: {
                b: {
                  color: "#fff",
                  lineHeight: 26,
                  fontSize: 15,
                },
                c: {
                  color: "#fff",
                  fontSize: 15,
                },
              },
            },
            itemStyle: {
              borderColor: "#2a7fa3",
              borderWidth: 1.2,
              shadowColor: "rgba(100, 100, 100, 0.6)",
              shadowBlur: 100,
              shadowOffsetX: -10,
              opacity: 0.9,
              emphasis: {
                areaColor: "#0e56c2",
              },
            },
            data: [
              { name: "三沙市", value: 0, itemStyle: {borderColor: "#0e56c2"}},
              { name: "儋州市", value: 4822023 },
              { name: "海口市", value: 2685905 },
              { name: "三亚市", value: 6553255 },
              { name: "白沙县", value: 2949131 },
              { name: "保亭县", value: 38041430 },
              { name: "昌江县", value: 5187582 },
              { name: "澄迈县", value: 3590347 },
              { name: "定安县", value: 917092 },
              { name: "东方市", value: 632323 },
              { name: "乐东县", value: 19317568 },
              { name: "临高县", value: 9919945 },
              { name: "陵水县", value: 1392313 },
              { name: "琼海市", value: 1595728 },
              { name: "琼中县", value: 12875255 },
              { name: "屯昌县", value: 6537334 },
              { name: "万宁市", value: 3074186 },
              { name: "文昌市", value: 2085905 },
              { name: "五指山市", value: 4380415 },
              { name: "秀英区", value: 114822023 },
              { name: "龙华区", value: 4822023 },
              { name: "琼山区", value: 19317568 },
              { name: "美兰区", value: 38041430 },
              { name: "崖州区", value: 5187582 },
              { name: "天涯区", value: 3590347 },
              { name: "吉阳区", value: 917092 },
              { name: "海棠区", value: 632323 },
            ],
          },
        ],
      };
      chart.setOption(this.option);
      chart.on("click", function (params) {
        alert("当前点击:" + '\n 城市：' + params.name + '\n value值：' + params.value);
      });
    }
  },
};
</script>

<style lang="scss">
</style>
