webpackJsonp([4],{539:function(t,e,n){function o(t){n(638)}var r=n(66)(n(572),n(631),o,"data-v-68cc2150",null);t.exports=r.exports},545:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},546:function(t,e,n){e=t.exports=n(50)(),e.push([t.i,"#home-header[data-v-a4ca81d0]{background-color:#000;padding:.7rem .7rem .45rem}#home-header .logo[data-v-a4ca81d0]{padding-top:.1rem;font-size:14px;color:#fff}#home-header .headIcon[data-v-a4ca81d0]{width:1.2rem;height:1.2rem}#home-header .bg[data-v-a4ca81d0]{position:absolute;right:.28rem;top:.96rem;width:2.2rem;height:5.23rem;background-color:#000;opacity:.6}",""])},547:function(t,e,n){e=t.exports=n(50)(),e.push([t.i,"",""])},548:function(t,e,n){t.exports=n.p+"static/imgs/headIcon.png?a11fca5193e67925a81a4007a1b3797b"},549:function(t,e,n){function o(t){n(551),n(552)}var r=n(66)(n(545),n(550),o,"data-v-a4ca81d0",null);t.exports=r.exports},550:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{position:"relative"}},[o("div",{staticClass:"clear",attrs:{id:"home-header"}},[o("div",{staticClass:"left logo"},[t._v("INTEGO")]),t._v(" "),o("el-dropdown",{staticClass:"right",attrs:{trigger:"click"}},[o("span",{staticClass:"el-dropdown-link"},[o("img",{staticClass:"headIcon",attrs:{src:n(548)}})]),t._v(" "),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",[o("router-link",{staticClass:"it",attrs:{to:"/home"}},[t._v("首页")])],1),t._v(" "),o("el-dropdown-item",[o("router-link",{staticClass:"it",attrs:{to:"/service"}},[t._v("经销商")])],1),t._v(" "),o("el-dropdown-item",[o("router-link",{staticClass:"it",attrs:{to:"/news"}},[t._v("新闻资讯")])],1),t._v(" "),o("el-dropdown-item",[o("router-link",{staticClass:"it",attrs:{to:"/adv"}},[t._v("关于我们")])],1),t._v(" "),o("el-dropdown-item",[o("router-link",{staticClass:"it",attrs:{to:"/contact"}},[t._v("联系我们")])],1)],1)],1)],1)])},staticRenderFns:[]}},551:function(t,e,n){var o=n(546);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(139)("407494cb",o,!0,{})},552:function(t,e,n){var o=n(547);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(139)("0c27bb2c",o,!0,{})},553:function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return r});var o=function(t){return/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(t)},r=function(t){return/^1[34578]\d{9}$/.test(t)}},554:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i}),n.d(e,"d",function(){return c}),n.d(e,"e",function(){return s}),n.d(e,"f",function(){return u}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return d});var o=n(556),r=function(t,e){return n.i(o.a)("/Site/GetActivityNewsInfo",{Count:t,PageNumber:e})},a=function(t){return n.i(o.a)("/Site/QueryWarrantyInfo",{query:t})},i=function(t,e,r,a,i){return n.i(o.a)("/Site/SendMail",{Type:t,Contact:e,ContactNumber:r,Email:a,Message:i})},c=function(){return n.i(o.a)("/Site/QueryPartnerCountry")},s=function(t){return n.i(o.a)("/Site/QueryPartnerProvince",{Country:t})},u=function(t,e){return n.i(o.a)("/Site/QueryPartnerCity",{Country:t,Province:e})},l=function(t,e,r){return n.i(o.a)("/Site/QueryPartnerCounty",{Country:t,Province:e,City:r})},d=function(t,e,r,a){return n.i(o.a)("/Site/QueryPartnerList",{Country:t,Province:e,City:r,County:a})}},555:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o="";o="https://d.carbros.cn:4433/Intego"},556:function(t,e,n){"use strict";var o=n(555),r=(n(553),this),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.a=function(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function o(r,a){try{var i=e[r](a),c=i.value}catch(t){return void n(t)}if(!i.done)return Promise.resolve(c).then(function(t){o("next",t)},function(t){o("throw",t)});t(c)}return o("next")})}}(regeneratorRuntime.mark(function t(){var e,n,i,c,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"fetch";return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(l=l.toUpperCase(),-1==s.indexOf("http")&&(s=o.a+s),"GET"==l&&(e="",Object.keys(u).forEach(function(t){e+=t+"="+u[t]+"&"}),""!==e&&(e=e.substr(0,e.lastIndexOf("&")),s=s+"?"+e)),!window.fetch||"fetch"!=d){t.next=21;break}return n={method:l,headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"* ","Access-Control-Request-Method":" GET,PUT, DELETE,OPTIONS, POST"},mode:"cors",cache:"no-cache"},"POST"==l&&Object.defineProperty(n,"body",{value:JSON.stringify(u)}),t.prev=6,t.next=9,fetch(s,n);case 9:return i=t.sent,t.next=12,i.json();case 12:return c=t.sent,t.abrupt("return",c);case 16:return t.prev=16,t.t0=t.catch(6),t.abrupt("return",null);case 19:t.next=22;break;case 21:return t.abrupt("return",new Promise(function(t,e){var n=void 0;n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");var o="";"POST"==l&&(o=JSON.stringify(u)),n.open(l,s,!0),n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.setRequestHeader("Origin","*"),n.setRequestHeader("Access-Control-Request-Methods"," GET, PUT, DELETE,OPTIONS, POST"),n.onreadystatechange=function(){if(4==n.readyState){if(console.log("url:"+s+" status:"+n.status),200==n.status){var e=n.response;"object"!==(void 0===e?"undefined":a(e))&&(e=JSON.parse(e)),t(e)}}else n.readyState},n.send(o)}));case 22:case"end":return t.stop()}},t,r,[[6,16]])}))},572:function(t,e,n){"use strict";function o(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function o(r,a){try{var i=e[r](a),c=i.value}catch(t){return void n(t)}if(!i.done)return Promise.resolve(c).then(function(t){o("next",t)},function(t){o("throw",t)});t(c)}return o("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(578),a=n(553),i=n(554),c=n(549),s=n.n(c);e.default={data:function(){return{addresArr:["上海市闵行区联航路1239号(大众南侧8号楼一楼SeArt)"],name:"",pho:"",email:"",leaveMsg:"",modal:!1,modal_loading:!1,alertMsg:"",able:!1,content:"Send Message",noInfo:"表格信息不完整"}},components:{"head-top":s.a},created:function(){function t(){return e.apply(this,arguments)}var e=o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.AMap||!window.AMapUI){t.next=4;break}this.initMap(),t.next=9;break;case 4:return t.next=6,n.i(r.a)("http://webapi.amap.com/maps?v=1.4.1&key=c5178272e19f11ec5ccf3683ee19c94e&plugin=AMap.Geocoder");case 6:return t.next=8,n.i(r.a)("http://webapi.amap.com/ui/1.0/main.js");case 8:this.initMap();case 9:case"end":return t.stop()}},t,this)}));return t}(),mounted:function(){},methods:{initMap:function(){function t(t,e){var o=new AMap.Marker({map:n,position:[e.location.getLng(),e.location.getLat()]}),r=new AMap.InfoWindow({content:e.formattedAddress,offset:{x:0,y:-30}});o.on("mouseover",function(t){r.open(n,o.getPosition())})}function e(e){for(var o=e.geocodes,r=0;r<o.length;r++)t(r,o[r]);n.setFitView()}for(var n=new AMap.Map("container",{resizeEnable:!0,center:[116.41,39.91],zoom:10}),o=0;o<this.addresArr.length;o++)!function(t){new AMap.Geocoder({radius:1e3}).getLocation(t,function(t,n){"complete"===t&&"OK"===n.info&&(e(n),console.log(n))})}(this.addresArr[o])},send:function(){var t=this;return""==this.name?(this.modal=!0,void(this.alertMsg="姓名不能为空")):""==this.pho?(this.modal=!0,void(this.alertMsg="电话号码不能为空")):n.i(a.a)(this.pho)?""==this.email?(this.modal=!0,void(this.alertMsg="邮箱地址不能为空")):n.i(a.b)(this.email)?""==this.leaveMsg?(this.modal=!0,void(this.alertMsg="请填写您的留言")):void n.i(i.b)(this.value,this.name,this.pho,this.email,this.leaveMsg).then(function(e){console.log(e),"200"==e.code&&(t.modal=!0,t.alertMsg="邮件发送成功！",t.noInfo="恭喜");var n=30,o=setInterval(function(){n--,n>0?(t.able=!0,console.log(n),t.content=n):(clearInterval(o),t.able=!1,t.content="send Message")},1e3)}):(this.modal=!0,void(this.alertMsg="请填写正确的邮箱地址")):(this.modal=!0,void(this.alertMsg="请填写正确的手机号码"))},confirm:function(){this.modal=!1}}}},578:function(t,e,n){"use strict";function o(t,e){function n(t){document.body.removeChild(t)}return function(t){var o=document.createElement("script");document.body.appendChild(o);var r=new Promise(function(t,r){o.addEventListener("load",function(r){n(o),e||t(r)},!1),o.addEventListener("error",function(t){n(o),r(t)},!1),e&&(window.____callback____=function(){t(),window.____callback____=null})});return e&&(t+="&callback=____callback____"),o.src=t,r}(t)}e.a=o},582:function(t,e,n){e=t.exports=n(50)(),e.push([t.i,"#home-header[data-v-68cc2150]{background-color:#000;padding:.7rem .7rem .45rem}#home-header .logo[data-v-68cc2150]{padding-top:.1rem;font-size:14px;color:#fff}#home-header .headIcon[data-v-68cc2150]{width:1.2rem;height:1.2rem}#home-header .bg[data-v-68cc2150]{position:absolute;right:.28rem;top:.96rem;width:2.2rem;height:5.23rem;background-color:#000;opacity:.6}.contact[data-v-68cc2150]{padding:.5rem .75rem 0}.contact .map-contain[data-v-68cc2150]{width:17.15rem;height:6.6rem;border:1px solid red}.contact .el-input[data-v-68cc2150]{margin-bottom:.5rem}.contact .el-input textarea[data-v-68cc2150]{height:50.25rem!important;min-height:0!important}.contact .el-button[data-v-68cc2150]{width:100%;height:2rem;line-height:.3rem;background-color:#000;color:#fff;margin-top:.75rem}.ftInfo[data-v-68cc2150]{line-height:1.2rem;font-size:.7rem;text-align:center;margin-top:6.5rem}",""])},631:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("head-top"),t._v(" "),n("div",{staticClass:"contact"},[n("div",{staticClass:"map",staticStyle:{width:"100%",height:"9rem"},attrs:{id:"container"}}),t._v(" "),n("el-input",{staticStyle:{"margin-top":"1.0rem"},attrs:{placeholder:"您的姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("el-input",{attrs:{placeholder:"您的常用手机号"},model:{value:t.pho,callback:function(e){t.pho=e},expression:"pho"}}),t._v(" "),n("el-input",{attrs:{placeholder:"您的邮箱"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("el-input",{attrs:{placeholder:"您的留言",type:"textarea",autosize:{minRows:5,maxRows:5}},model:{value:t.leaveMsg,callback:function(e){t.leaveMsg=e},expression:"leaveMsg"}}),t._v(" "),n("el-button",{attrs:{disabled:t.able},on:{click:t.send}},[t._v(t._s(t.content))])],1),t._v(" "),n("Modal",{attrs:{width:"360"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[n("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[n("Icon",{attrs:{type:"information-circled"}}),t._v(" "),n("span",[t._v(t._s(t.noInfo))])],1),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("p",{staticStyle:{"font-size":"1rem"}},[t._v(t._s(t.alertMsg))])]),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"error",size:"large",long:"",loading:t.modal_loading},on:{click:t.confirm}},[t._v("确定")])],1)])],1)},staticRenderFns:[]}},638:function(t,e,n){var o=n(582);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(139)("24613acb",o,!0,{})}});