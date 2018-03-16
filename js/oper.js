var country ='';
$.ajax({ 
  type : "get", 
  url : "https://d.carbros.cn:4433/Intego/Site/QueryPartnerCountry", //获取国家
  async : false, 
  success : function(data){
  	if(data.length == 1){          		
  		country ="<option>"+data[0]+"</option>";
  		$('#sb1 select').append(country);
  		$('.country').val($('#sb1 select').val())
  		getPro($('#sb1 select').val())
  		getCity($('#sb1 select').val(),$('#sb2 select').val())
  		getArea($('#sb1 select').val(),$('#sb2 select').val(),$('#sb3 select').val())
  	}else{
  		console.log(2)
  		for(var i=0;i<data.length;i++){
			country += "<option>"+data[i]+"</option>"
		}
		$('#sb1 select').append(country);
		$('.country').val($('#sb1 select').val())
		$('#sb1 input').change(function(){
			getPro($('#sb1 select').val())
			getCity($('#sb1 select').val(),$('#sb2 select').val())
			getArea($('#sb1 select').val(),$('#sb2 select').val(),$('#sb3 select').val())
		})
  	} 
	
  } 
});
//获取省份
function getPro(province){
	var pro='';
		$.ajax({ 
      type : "get", 
      url : "https://d.carbros.cn:4433/Intego/Site/QueryPartnerProvince", //获取省份范围
      async : false,
      data:{Country:province},
      success : function(data){ 
        for(var i=0;i<data.length;i++){
			pro += "<option>"+data[i]+"</option>"
		}
		$('#sb2 select').html('').append(pro);
		$('.province').val($('#sb2 select').val())
      } 
    });
}
// console.log($('#sb2 select').val())
$('#sb2 select').change(function(){
	 $('.province').val($('#sb2 select').val())
	 getCity($('#sb1 select').val(),$('#sb2 select').val())
	 getArea($('#sb1 select').val(),$('#sb2 select').val(),$('#sb3 select').val())
})
$('#sb3 select').change(function(){
	 $('.city').val($('#sb3 select').val())
	 getArea($('#sb1 select').val(),$('#sb2 select').val(),$('#sb3 select').val())
})
$('#sb4 select').change(function(){
	$('.area').val($('#sb4 select').val())    	
})
//获取city
function getCity(tt,cou){
	 var city='';
	$.ajax({ 
      type : "get", 
      url : "https://d.carbros.cn:4433/Intego/Site/QueryPartnerCity", //获取区域范围
      async : false,
      data:{Country:tt ,Province:cou} ,
      success : function(data){ 
        for(var i=0;i<data.length;i++){
			city += "<option>"+data[i]+"</option>"
		}
		$('#sb3 select').html(' ').append(city);
		 $('.city').val($('#sb3 select').val())
      } 
    });
}
//获取区域
function getArea(tt,cou,qiang){
		var area='';
	$.ajax({ 
      type : "get", 
      url : "https://d.carbros.cn:4433/Intego/Site/QueryPartnerCounty", //获取区域范围
      async : false,
      data:{Country:tt ,Province:cou,city:qiang} ,
      success : function(data){ 
        for(var i=0;i<data.length;i++){
			area += "<option>"+data[i]+"</option>"
		}
		$('#sb4 select').html(' ').append(area);
		$('.area').val($('#sb4 select').val())
      } 

    });
}
	var addre = [];//经销商地址集合
	var companyDeatil = []; //公司箱子地址的集合
	function getOper(cou,pro,city,area){         //获取经销商集合
		$.ajax({
		type:'get',
		url:"https://d.carbros.cn:4433/Intego/Site/QueryPartnerList",
		async:false,
		data:{Country:cou,Province:pro,City:city,County:area},
		success:function(data){
				addre =[];
				companyDeatil = [];
			for(let i=0;i<data.length;i++){
				// console.log(data[i].HomePageInfo);
				addre.push(data[i].Partner.Address)
				if(data[i].HomePageInfo !=null){
					companyDeatil += "<ul ><li class='li1'>"+
										"<img src='../img/operatorImg.png' ></li>"+ 
									"<li>门店名称：<i>"+data[i].Partner.Name+"</i></li>"+
									"<li>联系方式：<i>"+data[i].Partner.Contact+"</i></li>"+
									"<li>详细地址：<i>"+data[i].Partner.Address+"</i></li>"+
									"<li class='siteType' style='display:none'>"+data[i].HomePageInfo.Type+"</li>"+
									"<li class='siteUrl'  style='display:none'>"+data[i].HomePageInfo.Url+"</li>"+
									"<li class='pid'  style='display:none'>"+data[i].HomePageInfo.Pid+"</li></ul>"
									// "<li ><a class='btn' href='javascript:void(0);'>进入官网</a></li></ul>"	
				}else{
					companyDeatil += "<ul ><li class='li1'>"+
										"<img src='../img/operatorImg.png' ></li>"+ 
									"<li>门店名称：<i>"+data[i].Partner.Name+"</i></li>"+
									"<li>联系方式：<i>"+data[i].Partner.Contact+"</i></li>"+
									"<li>详细地址：<i>"+data[i].Partner.Address+"</i></li>"+
									"<li  class='siteType' style='display:none'>"+data[i].HomePageInfo+"</li></ul>"
									// "<li ><a  class='btn' href='javascript:void(0);'>进入官网</a></li></ul>"	
				}				 
			}
			// console.log(companyDeatil)
			$('.mapDetail').html('').append(companyDeatil)
			for(let i=0;i<addre.length;i++){
				geocoder(addre[i]);
			}
		}
	})
	}	
	$('.btn').click(function(){
        	getOper($('.country').val(),$('.province').val(),$('.city').val(),$('.area').val())
	    	 // console.log($('.mapDetail ul .btn'))

 			$('.mapDetail ul .btn').on('click',function(){
		    	var inde = $(this).index();
		    	var t=$(this).parent().siblings('.siteType').text()
		    	if($(this).parent().siblings('.siteType').text() === 'null'){
		    		alert('官网正在筹建中，请耐心等待')
		    		$(this).css({'backgroundColor':'#ddd','color':'#fff'})
		    	}else if($(this).parent().siblings('.siteType').text() == 2){
		    		// console.log(22)
		    		$(this).attr('href','../html/operatorTemplate.html?id='+$(this).parent().siblings('.pid').text());
		    	}else if($(this).parent().siblings('.siteType').text() == 1){
		    		$(this).attr('href',$(this).parent().siblings('.siteUrl').text());
		    		$(this).attr('target','_blank');
		    	}
		    })
        })	
	//地图
var marker, map = new AMap.Map("js-container", {
    resizeEnable: true,
    center: [121.510727,31.084217],
    zoom: 13
});

/**
	地址转换成经纬度
**/ 

function geocoder(add) {

    var geocoder = new AMap.Geocoder({
        // city: "0512", //城市，默认：“全国”
        radius: 1000 //范围，默认：500
    });
    //地理编码,返回地理编码结果
    // console.log(this.addresArr)
    
    geocoder.getLocation(add, function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
            geocoder_CallBack(result);
            // console.log(result)
        }
    });
}
 	function addMarker(d) {

    if (marker) {
        return;
    }
    marker = new AMap.Marker({
        icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        position: [d.location.getLng(),d.location.getLat()]
    });
    marker.setMap(map);
    var infoWindow = new AMap.InfoWindow({
        content: d.formattedAddress,
        offset: {x: 0, y: -30}
    });

    marker.on("mouseover", function(e) {
        infoWindow.open(map, marker.getPosition());
    });
}
function geocoder_CallBack(data) {
 	var geocode = data.geocodes;
 	 // marker.setMap(null);
 	if (marker) {
        marker.setMap(null);
        marker = null;
    }
 	for (var i = 0; i < geocode.length; i++) {
        addMarker(geocode[i]);
    }
    map.setFitView();
}