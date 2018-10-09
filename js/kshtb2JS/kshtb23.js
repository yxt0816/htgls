var chart = Highcharts.chart('box1div7', {
	chart: {
		type: 'pie',
		options3d: {
			enabled: true,
			alpha: 45
        },
        backgroundColor:'#232939'
	},
	title: {
		text: '每日水果消耗量'
	},
	subtitle: {
		text: ''
	},
	plotOptions: {
		pie: {
			innerSize: 100,
			depth: 45
		}
	},
	series: [{
		name: '货物金额',
		data: [
			['香蕉', 8],
			['猕猴桃', 3],
			['桃子', 1],
			['橘子', 6],
			['苹果', 8],
			['梨', 4],
			['柑橘', 4],
			['橙子', 1],
			['葡萄 (串)', 1]
		]
	}]
});