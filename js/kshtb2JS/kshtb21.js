var chart = Highcharts.chart('box1div5', {
	chart: {
		polar: true,
        type: 'line',
        backgroundColor:'#232939'
	},
	title: {
		text: '',
		x: -80
	},
	pane: {
		size: '80%'
	},
	xAxis: {
		categories: ['南京','苏州', '贵州', '盐城', '扬州',
					 '徐州', '常州','南通'],
		tickmarkPlacement: 'on',
		lineWidth: 0
	},
	yAxis: {
		gridLineInterpolation: 'polygon',
		lineWidth: 0,
		min: 0
	},
	tooltip: {
		shared: true,
		pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
	},
	legend: {
		align: 'right',
		verticalAlign: 'top',
		y: 70,
		layout: 'vertical'
	},
	series: [{
		name: '预算拨款',
		data: [43000, 19000, 60000, 35000, 17000, 10000],
		pointPlacement: 'on'
	}, {
		name: '实际支出',
		data: [50000, 39000, 42000, 31000, 26000, 14000],
		pointPlacement: 'on'
	}]
});