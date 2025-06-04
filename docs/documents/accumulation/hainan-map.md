# 海南省地图

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

      const convertFeatures = haiNanMap.features.map((item, index) => {
        return {
          name: item.properties.name,
          value: item.properties.cp,
        };
      });

      this.option = {
        title: {
          text: "HN",
          subtext: "hn map",
          left: "right",
          show: false
        },
        // visualMap: {
        //   left: "right",
        //   realtime: false,
        //   min: 500000,
        //   max: 38000000,
        //   inRange: {
        //     color: ["#1e5a9a", "#4395e1"],
        //   },
        //   text: ["High", "Low"],
        //   // calculable: true,
        // },
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

        // 地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
        geo: {
          show: true,
          map: this.defaultCode.name,
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          roam: false, // 是否可拖拽
          aspectScale: 1,
          itemStyle: {
            areaColor: "#01215c",
            borderWidth: 1, // 外层边框宽度
            borderColor: "#fff",
            shadowColor: "#021838",
            shadowOffsetX: 0,
            shadowOffsetY: 0,
          },
        },

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
              areaColor: "#01215c",
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
          {
            name: "pic",
            type: "scatter",
            coordinateSystem: "geo",
            //自定义图片的 位置（lng, lat）
            data: convertFeatures,
            //自定义图片的 大小
            symbolSize: [40, 40],
            //自定义图片的 路径(注：必须以image://开头)
            symbol: `image://https://images.wanjunshijie.com/2021/08/20210828120639693.png?imageView2/0/format/webp/q/75`,
          },

          {
            name: '引导线',
            type: 'lines',
            symbol: 'circle',
            symbolSize: 1,
            opacity: 1,
            data: [
              {
                name: '海口市',
                coords: [[110.42, 19.8651], [110.63119, 20.201971]]
              }
            ],
            label: {
              show: true,
              padding: [10, 20],
              color: '#fff',
              backgroundColor: '#af6062',
              borderRadius: 6,
              formatter: () => {
                return 'label';
              },
            },
            lineStyle: {
              type: 'solid',
              opacity: 1,
              color: '#725846',
            },
          }
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
