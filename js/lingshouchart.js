function charts1(){

var chart = Highcharts.chart('articledivdiv22chart1', {
	chart: {
		type: 'areaspline'
	},
	title: {
		text: ''
	},
	legend: {
		// layout: 'vertical',
		// align: 'left',
		// verticalAlign: 'top',
		x: 150,
		y: 100,
		// floating: true,
		// borderWidth: 1,
		backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
	},
	xAxis: {
		categories: [
			'01','02','03','04','05','06','07','08','09','10','11','12','13'
		],
		plotBands: [{ // 标识出周末
			from: 4.5,
			to: 6.5,
			color: 'rgba(68, 170, 213, .2)'
		}]
	},
	yAxis: {
		title: {
			text: ''
		}
	},
	tooltip: {
		shared: true,
		valueSuffix: ' 单位'
	},
	plotOptions: {
		areaspline: {
			fillOpacity: 10000
		}
	},
	series: [{
		name: 'Sum',
		data: [14850, 10920, 11000, 8950, 5000, 6100, 8000,4000,15000,26800,12100,13000,24050]
	}]
});
}

function charts2(){
	var chart = Highcharts.chart('articledivdiv22chart2', {
	chart: {
		type: 'areaspline'
	},
	title: {
		text: ''
	},
	legend: {
		// layout: 'vertical',
		// align: 'left',
		// verticalAlign: 'top',
		x: 150,
		y: 100,
		// floating: true,
		// borderWidth: 1,
		backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
	},
	xAxis: {
		categories: [
			'01','02','03','04','05','06','07','08','09','10','11','12','13'
		],
		plotBands: [{ // 标识出周末
			from: 4.5,
			to: 6.5,
			color: 'rgba(68, 170, 213, .2)'
		}]
	},
	yAxis: {
		title: {
			text: ''
		}
	},
	tooltip: {
		shared: true,
		valueSuffix: ' 单位'
	},
	plotOptions: {
		areaspline: {
			fillOpacity: 10000
		}
	},
	series: [{
		name: 'Sum',
		data: [14850, 10920, 11000, 8950, 5000, 6100, 8000,4000,15000,26800,12100,13000,24050]
	}]
});
}

function charts3(){
	$(function () {
	/**
     * Create a constructor for sparklines that takes some sensible defaults and merges in the individual
     * chart options. This function is also available from the jQuery plugin as $(element).highcharts('SparkLine').
     */
	Highcharts.SparkLine = function (a, b, c) {
		var hasRenderToArg = typeof a === 'string' || a.nodeName,
			options = arguments[hasRenderToArg ? 1 : 0],
			defaultOptions = {
				chart: {
					renderTo: (options.chart && options.chart.renderTo) || this,
					backgroundColor: null,
					borderWidth: 0,
					type: 'area',
					margin: [2, 0, 2, 0],
					width: 120,
					height: 20,
					style: {
						overflow: 'visible'
					},
					skipClone: true
				},
				title: {
					text: ''
				},
				credits: {
					enabled: false
				},
				xAxis: {
					labels: {
						enabled: false
					},
					title: {
						text: null
					},
					startOnTick: false,
					endOnTick: false,
					tickPositions: []
				},
				yAxis: {
					endOnTick: false,
					startOnTick: false,
					labels: {
						enabled: false
					},
					title: {
						text: null
					},
					tickPositions: [0]
				},
				legend: {
					enabled: false
				},
				tooltip: {
					backgroundColor: null,
					borderWidth: 0,
					shadow: false,
					useHTML: true,
					hideDelay: 0,
					shared: true,
					padding: 0,
					positioner: function (w, h, point) {
						return { x: point.plotX - w / 2, y: point.plotY - h };
					}
				},
				plotOptions: {
					series: {
						animation: false,
						lineWidth: 1,
						shadow: false,
						states: {
							hover: {
								lineWidth: 1
							}
						},
						marker: {
							radius: 1,
							states: {
								hover: {
									radius: 2
								}
							}
						},
						fillOpacity: 0.25
					},
					column: {
						negativeColor: '#910000',
						borderColor: 'silver'
					}
				}
			};
		options = Highcharts.merge(defaultOptions, options);
		return hasRenderToArg ?
			new Highcharts.Chart(a, options, c) :
		new Highcharts.Chart(options, b);
	};
	var start = +new Date(),
		$tds = $('td[data-sparkline]'),
		fullLen = $tds.length,
		n = 0;
	// Creating 153 sparkline charts is quite fast in modern browsers, but IE8 and mobile
	// can take some seconds, so we split the input into chunks and apply them in timeouts
	// in order avoid locking up the browser process and allow interaction.
	function doChunk() {
		var time = +new Date(),
			i,
			len = $tds.length,
			$td,
			stringdata,
			arr,
			data,
			chart;
		for (i = 0; i < len; i += 1) {
			$td = $($tds[i]);
			stringdata = $td.data('sparkline');
			arr = stringdata.split('; ');
			data = $.map(arr[0].split(', '), parseFloat);
			chart = {};
			if (arr[1]) {
				chart.type = arr[1];
			}
			$td.highcharts('SparkLine', {
				series: [{
					data: data,
					pointStart: 1
				}],
				tooltip: {
					headerFormat: '<span>' + $td.parent().find('th').html() + ', Q{point.x}:</span><br/>',
					pointFormat: '<b>{point.y}.000</b> USD'
				},
				chart: chart
			});
			n += 1;
			// If the process takes too much time, run a timeout to allow interaction with the browser
			if (new Date() - time > 500) {
				$tds.splice(0, i + 1);
				setTimeout(doChunk, 0);
				break;
			}
			// 打印耗时
			if (n === fullLen) {
				$('#result').html('生成' + fullLen + '个迷你图，耗时 ' + (new Date() - start) + ' 毫秒');
			}
		}
	}
	doChunk();
});
}