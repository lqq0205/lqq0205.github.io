var count = 2;//每页的个数
var pageNumber =1; //当前页数
var page ;//定义列表多少页
var listString= '' //拼接品牌资讯列表
var listTem = '';//拼接页数
function getNews(c,p){

	$.ajax({
		type:'get',
		url:'https://d.carbros.cn:4433/Intego/Site/GetBrandNewsInfo',//获得新闻列表数据
		data:{Count:c,PageNumber:p},
		async:true,
		success:function(data){
			var date=data.QueryBrandNewsList;
			// page=Math.ceil(data.Count/count);
			console.log(data)
			if(date.length>0){
				$('.ldd').css('display','none')
				$('.ld').css('display','block')
				listString = '';
				for(var i=0;i<date.length;i++){
					// console.log(date)
					// listString = '';
					listString +="<div class='news clear'>"+
							"<img src='../img/newsDemo.png' class='fl' >"+
						// "<img src='https://d.carbros.cn/Gpluswx/Site/QueryImg?FileName="+date[i].BannerImg+"&FileType=PC'  class='fl' >"+
							"<div class='cRight fl'>"+
							"<div class='newTitle'>"+date[i].Title+"</div>"+
							"<div class='time'><i></i><em>"+date[i].CreateTime.substring(0,date[i].CreateTime.indexOf('T'))+"</em></div>"+
							"<div class='explan'>"+date[i].Intro+"</div></div></div>"

						 // $('.newsList').append(listString);
				}
				 $('.newsList').append(listString);
			}else{
				console.log('数据加载结束')
				$('.ldd').css('display','block')
				$('.ld').css('display','none')
				$('.down').css('display','none')
				$('.fly').text('暂无更多数据')
				// return;
			}
			
		}
	})	
}