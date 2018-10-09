function getsel01(){
    var dom = document.getElementById("selBody01");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['10', '15', '20', '23', '24', '25', '30'],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            }
        },
        series: [{
            data: [8.20, 9.32, 9.01, 9.34, 12.90, 13.30, 15.50],
            type: 'line',
            areaStyle: {}
        }]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
    }
   function getrtsel01(){
    var dom = document.getElementById("rtselBody");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    var option = {
        dataset: {
            source: [
                ['score', 'amount', 'product'],
                [89.3, 100, '生蚝'],
                [57.1, 150, '石斑鱼'],
                [74.4, 300, '小红'],
                [50.1, 370, '墨鱼'],
                [89.7, 230, '青黄'],
                [68.1, 400, '大参'],
                [19.6, 350, '刀鱼仔'],
                [10.6, 390, '青虾'],
                [32.7, 410, '板蛤蜊']
            ]
        },
        grid: {containLabel: true},
        xAxis: {name: 'amount',
           axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            }
        }
    
               },
        yAxis: {type: 'category',
       
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            }
        }
    
    },
        visualMap: {
            orient: 'horizontal',
            // left: 'center',
            min: 10,
            max: 100,
            text: ['High Score', 'Low Score'],
            // Map the score column to color
            dimension: 0,
            inRange: {
                color: ['#D7DA8B', '#E15457']
            }
        },
        series: [
            {
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x: 'amount',
                    // Map the "product" column to Y axis
                    y: 'product'
                }
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
   } 
   function getrtData02(){
    var dom = document.getElementById("selBody02");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '坐标轴刻度与标签对齐';
    
    option = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
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
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                },
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
                name:'销售额',
                type:'bar',
                barWidth: '60%',
                data:[1, 5.2, 2, 3.34, 3.90, 3.30, 2.20]
            }
        ]
    };
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
   }
   function getslemap(){
    var dom = document.getElementById("rtselBody02");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title: {
            text: '动态数据',
            // subtext: '纯属虚构'
        
                textStyle: {
                    color: '#fff'
                }
            
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        },
        legend: {
            data:['最新成交价', '预购队列'],
       
              
                textStyle: {
                    color: '#fff'
                }
            
        },
        // toolbox: {
        //     show: true,
        //     feature: {
        //         dataView: {readOnly: false},
        //         restore: {},
        //         saveAsImage: {}
        //     }
        // },
        dataZoom: {
            show: false,
            start: 0,
            end: 100
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: true,
                data: (function (){
                    var now = new Date();
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                        now = new Date(now - 2000);
                    }
                    return res;
                })(),
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            {
                type: 'category',
                boundaryGap: true,
                data: (function (){
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.push(10 - len - 1);
                    }
                    return res;
                })()
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                name: '价格',
                max: 30,
                min: 0,
                boundaryGap: [0.2, 0.2],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            {
                type: 'value',
                scale: true,
                name: '预购量',
                max: 1200,
                min: 0,
                boundaryGap: [0.2, 0.2]
            }
        ],
        series: [
            {
                name:'预购队列',
                type:'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data:(function (){
                    var res = [];
                    var len = 10;
                    while (len--) {
                        res.push(Math.round(Math.random() * 1000));
                    }
                    return res;
                })()
            },
            {
                name:'最新成交价',
                type:'line',
                data:(function (){
                    var res = [];
                    var len = 0;
                    while (len < 10) {
                        res.push((Math.random()*10 + 5).toFixed(1) - 0);
                        len++;
                    }
                    return res;
                })()
            }
        ]
    };
    
    app.count = 11;
    setInterval(function (){
        axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
    
        var data0 = option.series[0].data;
        var data1 = option.series[1].data;
        data0.shift();
        data0.push(Math.round(Math.random() * 1000));
        data1.shift();
        data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
    
        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);
        option.xAxis[1].data.shift();
        option.xAxis[1].data.push(app.count++);
    
        myChart.setOption(option);
    }, 2100);
    ;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
        
}