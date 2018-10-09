var dom = document.getElementById("box1div2");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '堆叠柱状图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['销售量','折扣'],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            }

        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            }
        }
    ],
    series : [
        {
            name:'销售量',
            type:'bar',
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210,300,350,120, 132, 101, 134, 90, 230,120, 132, 101, 134, 90, 230, 210,300,350,120, 132, 101, 134, 90, 230]
            
        },
        {
            name:'折扣',
            type:'bar',
            stack: '广告',
            data:[10,15 ,25, 30, 35, 20, 20, 27,18,10,15 ,25, 30, 35, 20,10,15 ,25, 30, 35, 20, 20, 27,18,10,15 ,25, 30, 35, 20]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}