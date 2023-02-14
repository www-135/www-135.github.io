

		$(function () {
			var datas = [
				{
					event : '余额',
					cast : -567,
					msg : '卡余1000.0+',
					showmsg : true,
					thumb : ''
			},
				{
					event : '新会员',
					cast : 1780,
					msg: '8*200+180',
					showmsg : true,
					thumb: 'vip4.png'
			},
				{
					event : '充卡',
					cast : -1000,
					showmsg : true,
					msg : '1000送300',
					thumb : ''
			},
				{
					event : '20230201',
					cast : 0,
					msg : '冷满武x',
					thumb : ''
			},
				{
					event : '-------------',
					cast : -680,
					msg : 'zjstar*10',
					showmsg : true,
					thumb : ''
			},
				{
					event : '20230203',
					cast : 0,
					msg : '勇毅梁满瓦',
					thumb : ''
			},
				{
					event : '20230206',
					cast : 40,
					msg : '勇毅武满sir梁沉',
					thumb : '20230206.png'
			},
				{
					event : '20230210',
					cast : 112,
					msg : '彦武天可迪鑫卢毅满梁',
					thumb : '20230211.png'
			},
				{
					event : '20230213',
					cast : 60,
					msg : '冷毅满梁武sir瓦沉松',
					thumb : '20230213.png'
			}
			];
			var show_all_msg = false;
			var balance = 0;
			for (var n = 0; n < datas.length; n++) {
				var clas = '';
				if (datas[n].cast < 0)
					clas = ' style="color:Red"';

				var img = '';
				if (datas[n].thumb.length > 0)
					img = '<a target="_blank" href="' + datas[n].thumb + '">||||</a>';
				
				if(!show_all_msg && !datas[n].showmsg)
					datas[n].msg = '';
					
				var color = '';
				if(!datas[n].showmsg)
					color = ';color:#f5663a';
				$("#tb-body").append('<tr><td scope="row">' + datas[n].event + '</td><th' + clas + '>' + datas[n].cast + '</th><td style="font-size:10px' + color + '">' + datas[n].msg + '</td><td>' + img + '</td></tr>');
				balance += datas[n].cast;
			}

			var cls = ' style="color: #24ed24; font-size: 32px"';
				if (balance < 0)
					cls = ' style="color:Red;  font-size: 32px"';
			balance = balance.toFixed(1);
			$("#tb-body").append('<tr><td scope="row" style="font-size:28px">余额</td><th ' + cls +  '>' + balance + '</th><td></td><td></td></tr>');
		})
