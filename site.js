

		$(function () {
			var datas = [
				{
					event : '余额',
					cast : -567,
					msg : '卡余1000.0+',
					thumb : ''
			},
				{
					event : '新会员',
					cast : 1780,
					msg: '8*200+180',
					thumb: 'vip4.png'
			},
				{
					event : '充卡',
					cast : -1000,
					msg : '1000送300',
					thumb : ''
			},
				{
					event : '20230201',
					cast : 0,
					thumb : ''
			},
				{
					event : '-------------',
					cast : -680,
					msg : 'zjstar*10',
					thumb : ''
			},
				{
					event : '20230203',
					cast : 0,
					thumb : ''
			},
				{
					event : '20230206',
					cast : 40,
					thumb : '20230206.png'
			},
				{
					event : '20230210',
					cast : 112,
					thumb : '20230211.png'
			},
				{
					event : '20230213',
					cast : 60,
					thumb : '20230213.png'
			},
				{
					event : '20230215',
					cast : 96,
					thumb : '20230215.png'
			},
				{
					event : '20230217',
					cast : 73.01,
					thumb : '20230217.png'
			},
				{
					event : '20230220',
					cast : 20,
					thumb : '20230220.png'
			},
				{
					event : '20230224',
					cast : 20,
					thumb : '20230224.png'
			},
				{
					event : '20230227',
					cast : 20,
					thumb : '20230227.png'
			},
				{
					event : '20230301',
					cast : 204.32,
					thumb : '20230301.png'
			},
				{
					event : '-------------',
					cast : -650,
					thumb : '20230306_1'
			},
				{
					event : '20230306',
					cast : 52,
					thumb : '20230306.png'
			},
				{
					event : '20230308',
					cast : 72.16,
					thumb : '20230308.png'
			},
				{
					event : '20230310',
					cast : 60,
					thumb : '20230310.png'
			},
				{
					event : '20230313',
					cast : 136,
					msg : '',
					thumb : '20230313.png'
			},
				{
					event : '---------',
					cast : -24,
					msg : '4耐三换中级',
					thumb : ''
			},
				{
					event : '20230315',
					cast : 80,
					msg : '',
					thumb : '20230315.png'
			},
				{
					event : '---------',
					cast : -680,
					msg : '球*10',
					thumb : ''
			},
				{
					event : '20230317',
					cast : 112,
					msg : '',
					thumb : '20230317.png'
			},
				{
					event : '20230320',
					cast : 56,
					msg : '',
					thumb : '20230320.png'
			},
				{
					event : '20230322',
					cast : 96,
					msg : '',
					thumb : '20230322.png'
			},
				{
					event : '20230324',
					cast : 156,
					msg : '',
					thumb : '20230324.png'
			},
				{
					event : '20230327',
					cast : 96,
					msg : '',
					thumb : '20230327.png'
			},
				{
					event : '20230329',
					cast : 20,
					msg : '',
					thumb : '20230329.png'
			},
				{
					event : '20230331',
					cast : 239,
					msg : '',
					thumb : '20230331.png'
			},
				{
					event : '20230403',
					cast : 0,
					msg : '60每人一碗螺蛳粉',
					thumb : ''
			},
			];
			var balance = 0;
			for (var n = 0; n < datas.length; n++) {
				var clas = '';
				if (datas[n].cast < 0)
					clas = ' style="color:Red"';

				var img = '';
				if (datas[n].thumb.length > 0)
					img = '<a target="_blank" href="' + datas[n].thumb + '">||||</a>';
					
				if(!datas[n].msg)
					datas[n].msg = '';
					
				$("#tb-body").append('<tr><td scope="row">' + datas[n].event + '</td><th' + clas + '>' + datas[n].cast + '</th><td style="font-size:10px">' + datas[n].msg + '</td><td>' + img + '</td></tr>');
				balance += datas[n].cast;
			}

			var cls = ' style="color: #24ed24; font-size: 32px"';
				if (balance < 0)
					cls = ' style="color:Red;  font-size: 32px"';
			balance = balance.toFixed(1);
			$("#tb-body").append('<tr><td scope="row" style="font-size:28px">余额</td><th ' + cls +  '>' + balance + '</th><td></td><td></td></tr>');
		})
