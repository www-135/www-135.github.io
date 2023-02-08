

		$(function () {
			var datas = [
				{
					event : '余额',
					cast : 965,
					msg : '',
					thumb : ''
			},
				{
					event : '新会员',
					cast : 1960,
					msg: '8*200+2*180',//安迪后面加入，200在后面记录
					thumb: 'vip3.png'
			},
				{
					event : '充卡',
					cast : -3000,
					msg : '',
					thumb : ''
			},
				{
					event : '-------------',
					cast : -630,
					msg : '',
					thumb : ''
			},
				{
					event : '20221009',
					cast : 76,
					msg : '',
					thumb : '20221009.png'
			},
				{
					event : '20221012',
					cast : 300,
					msg : 'vip + 1',
					thumb : '20221012.png'
			},
				{
					event : '20221014',
					cast : 300,
					msg : 'vip + 1',
					thumb : '20221014.png'
			},
				{
					event : '-------------',
					cast : -630,
					msg : '',
					thumb : ''
			},
				{
					event : '20221017',
					cast : 20,
					msg : '',
					thumb : '20221017.png'
			},
				{
					event : '20221019',
					cast : 75,
					msg : '',
					thumb : '20221019.png'
			},
				{
					event : '20221021',
					cast : 60,
					msg : '',
					thumb : '20221021.png'
			},
				{
					event : '20221024',
					cast : 115,
					msg : '',
					thumb : '20221024.png'
			},
				{
					event : '20221102',
					cast : 10,
					msg : '',
					thumb : '20221102.png'
			},
				{
					event : '-------------',
					cast : -630,
					msg : '',
					thumb : ''
			},
				{
					event : '20221103',
					cast : 110,
					msg : '',
					thumb : '20221103.png'
			},
				{
					event : '20221104',
					cast : 0,
					msg : '<span style="font-size:10px">aa场</span>',
					thumb : '20221104.png'
			},
				{
					event : '20221107',
					cast : 130,
					msg : '',
					thumb : '20221107.png'
			},
				{
					event : '-------------',
					cast : -112,
					msg : '<span style="font-size:10px">红熏4，2桶</span>',
					thumb : ''
			},
				{
					event : '20221109',
					cast : 115,
					msg : '',
					thumb : '20221109.png'
			},
				{
					event : '20221111',
					cast : 155,
					msg : '',
					thumb : '20221111.png'
			},
				{
					event : '20221114',
					cast : 90,
					msg : '',
					thumb : '20221114.png'
			},
				{
					event : '20221116',
					cast : 230,
					msg : '',
					thumb : '20221116.png'
			},
				{
					event : '-------------',
					cast : -560,
					msg : '<span style="font-size:10px">熏*10</span>',
					thumb : ''
			},
				{
					event : '-------------',
					cast : -630,
					msg : '<span style="font-size:10px">中级星*10</span>',
					thumb : ''
			},
				{
					event : '20221118',
					cast : 238,
					msg : '',
					thumb : '20221118.png'
			},
				{
					event : '20221121',
					cast : 80,
					msg : '',
					thumb : '20221121.png'
			},
				{
					event : '20221123',
					cast : 160,
					msg : '',
					thumb : '20221123.png'
			},
				{
					event : '20221128',
					cast : 20,
					msg : '',
					thumb : '20221128.png'
			},
				{
					event : '20221205',
					cast : 40,
					msg : '',
					thumb : '20221205.png'
			},
				{
					event : '20221211',
					cast : 20,
					msg : '',
					thumb : '20221212.png'//日期写错
			},
				{
					event : '20221212',
					cast : 0,
					msg : '',
					thumb : '20221213.png'//日期写错
			},
				{
					event : '20221214',
					cast : 20,
					msg : '',
					thumb : '20221214.png'
			},
				{
					event : '20221215',
					cast : 55,
					msg : '',
					thumb : '20221215.png'
			},
				{
					event : '20230104',
					cast : 60,
					msg : 'VIP结束',
					thumb : '20230104.png'
			},
				{
					event : '20230106',
					cast : -136,
					msg : '<span style="font-size:10px">中级星*2</span>',
					thumb : ''
			},
				{
					event : '20230106',
					cast : 100,
					msg : 'AA场',
					thumb : '20230106.png'
			},
				{
					event : '20230109',
					cast : 95.28,
					msg : 'AA场',
					thumb : '20230109.png'
			},
				{
					event : '20230116',
					cast : 105,
					msg : 'AA场',
					thumb : '20230116.png'
			},
				{
					event : '20230119',
					cast : 56,
					msg : '熏风出一',
					thumb : '20230119.png'
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
