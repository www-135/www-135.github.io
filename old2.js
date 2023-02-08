

		$(function () {
			var datas = [
				{
					event : '余额',
					cast : 1103,
					msg : '',
					thumb : ''
			},
				{
					event : '新会员',
					cast : 2600,
					msg: '13*200',
					thumb: 'vip2.png'
			},
				{
					event : '充卡',
					cast : -3000,
					msg : '',
					thumb : ''
			},
				{
					event : '20220715',
					cast : 20,
					msg : '1',
					thumb : '20220715.png'
			},
				
				{
					event : '------',
					cast : -630,
					msg : '',
					thumb : ''
			},
				{
					event : '20220718',
					cast : 40,
					msg : '2',
					thumb : '20220718.png'
			},
				{
					event : '20220720',
					cast : 120,
					msg : '3',
					thumb : '20220720.png'
			},
				{
					event : '20220722',
					cast : 204,
					msg : '4',
					thumb : '20220722.png'
			},
				{
					event : '20220725',
					cast : 272,
					msg : '5',
					thumb : '20220725.png'
			},
				{
					event : '20220729',
					cast : 228,
					msg : '6',
					thumb : '20220729.png'
			},
				{
					event : '------',
					cast : -630,
					msg : '',
					thumb : ''
			},
				{
					event : '20220803',
					cast : 132,
					msg : '7',
					thumb : '20220803.png'
			},
				{
					event : '20220805',
					cast : 80,
					msg : '8',
					thumb : '20220805.png'
			},
				{
					event : '20220808',
					cast : 192,
					msg : '9',
					thumb : '20220808.png'
			},
				{
					event : '20220810',
					cast : 120,
					msg : '10',
					thumb : '20220810.png'
			},
				{
					event : '20220812',
					cast : 248,
					msg : '11',
					thumb : '20220812.png'
			},
				{
					event : '------',
					cast : -630,
					msg : '',
					thumb : ''
			},
				{
					event : '20220815',
					cast : 100,
					msg : '12',
					thumb : '20220815.png'
			},
				{
					event : '20220817',
					cast : 176,
					msg : '13',
					thumb : '20220817.png'
			},
				{
					event : '20220819',
					cast : 76,
					msg : '14',
					thumb : '20220819.png'
			},
				{
					event : '20220822',
					cast : 116,
					msg : '15',
					thumb : '20220822.png'
			},
				{
					event : '20220824',
					cast : 160,
					msg : '16',
					thumb : '20220824.png'
			},
				{
					event : '------',
					cast : -630,
					msg : '',
					thumb : ''
			},
				{
					event : '20220826',
					cast : 92,
					msg : '17',
					thumb : '20220826.png'
			},
				{
					event : '20220829',
					cast : 130,
					msg : '18',
					thumb : '20220829.png'
			},{
					event : '20220831',
					cast : 76,
					msg : '19',
					thumb : '20220831.png'
			},{
					event : '20220905',
					cast : 120,
					msg : '20',
					thumb : '20220905.png'
			},
				{
					event : '20220907',
					cast : 220,
					msg : '21',
					thumb : '20220907.png'
			},
				{
					event : '月饼呗',
					cast : -230,
					msg : '<span style="font-size:10px">月饼30*6 + 红包抽奖</span>',
					thumb : ''
			},
				{
					event : '------',
					cast : -630,
					msg : '',
					thumb : ''
			},
				{
					event : '20220909',
					cast : 152,
					msg : '22',
					thumb : '20220909.png'
			},
				{
					event : '20220914',
					cast : 116,
					msg : '23',
					thumb : '20220914.png'
			},
				{
					event : '20220916',
					cast : 40,
					msg : '24',
					thumb : '20220916.png'
			},
				{
					event : '20220919',
					cast : 56,
					msg : '25',
					thumb : '20220919.png'
			},
				{
					event : '20220921',
					cast : 120,
					msg : '26',
					thumb : '20220921.png'
			},
				{
					event : '20220926',
					cast : 56,
					msg : '27',
					thumb : '20220926.png'
			},
				{
					event : '20220928',
					cast : 125,	// 110群收款，剩余15是红包
					msg : '28',
					thumb : '20220928.png'
			},
				{
					event : '20220930',
					cast : 55,	
					msg : '29',
					thumb : '20220930.png'
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

				$("#tb-body").append('<tr><td scope="row">' + datas[n].event + '</td><th' + clas + '>' + datas[n].cast + '</th><td>' + datas[n].msg + '</td><td>' + img + '</td></tr>');
				balance += datas[n].cast;
			}

			var cls = ' style="color: #24ed24; font-size: 32px"';
				if (balance < 0)
					cls = ' style="color:Red;  font-size: 32px"';
			balance = balance.toFixed(1);
			$("#tb-body").append('<tr><td scope="row" style="font-size:28px">余额</td><th ' + cls +  '>' + balance + '</th><td></td><td></td></tr>');
		})
