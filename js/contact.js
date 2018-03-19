$('.send').click(function(){
	var email = $('#mail').val()
	if($('#name').val() == ''){
		alert('您的姓名尚未填写')
		return;
	}else if( email == ''){
		alert('您的邮箱尚未填写')
		return;
	}else if(!email.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/)){
		alert('请填写正确的邮箱地址')
		return;
	}else if($('#msg').val() == ''){
		alert('您的留言为空')
		return;
	}else{
		$.ajax({
			type:'get',
			url:'https://d.carbros.cn:4433/Intego/Site/SendMail',
			data:{Type:0,Contact:$('#name').val(),ContactNumber:'暂无',Email:$('#mail').val(),Message:$('#msg').val()},
			success:function(data){
				console.log(data)
				if(data.code ==200){
					alert('留言成功')
				}
			}
		})
	}
})

// 地图
var map = new AMap.Map('container',{
   zoom: 17,
   center: [121.525034,31.077803]
});
var marker = new AMap.Marker({
	icon: '../img/location.png',
	position: [121.525034,31.077803],
	offset: new AMap.Pixel(-12,-12),
	zIndex: 101,
	title: '你好',
	map: map
});


// var info = [];
// info.push("<div>电话 : 010-400-821-9001");
// info.push(" 邮编 : 100102")
// info.push("地址 :上海市浦东新区盛夏路570号4层406-407</div>");
// infoWindow = new AMap.InfoWindow({
//     content: info.join("<br/>") 
// });
// infoWindow.open(map, map.getCenter());


