webpackJsonp([5],{542:function(t,e,r){function n(t){r(599)}var a=r(66)(r(567),r(593),n,"data-v-26e47052",null);t.exports=a.exports},544:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},545:function(t,e,r){e=t.exports=r(50)(),e.push([t.i,"#home-header[data-v-a4ca81d0]{background-color:#000;padding:.7rem .7rem .45rem}#home-header .logo[data-v-a4ca81d0]{padding-top:.1rem;font-size:14px;color:#fff}#home-header .headIcon[data-v-a4ca81d0]{width:1.2rem;height:1.2rem}#home-header .bg[data-v-a4ca81d0]{position:absolute;right:.28rem;top:.96rem;width:2.2rem;height:5.23rem;background-color:#000;opacity:.6}",""])},546:function(t,e,r){e=t.exports=r(50)(),e.push([t.i,"",""])},547:function(t,e,r){t.exports=r.p+"static/imgs/headIcon.png?a11fca5193e67925a81a4007a1b3797b"},548:function(t,e,r){function n(t){r(550),r(551)}var a=r(66)(r(544),r(549),n,"data-v-a4ca81d0",null);t.exports=a.exports},549:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"clear",attrs:{id:"home-header"}},[n("div",{staticClass:"left logo"},[t._v("INTEGO")]),t._v(" "),n("el-dropdown",{staticClass:"right",attrs:{trigger:"click"}},[n("span",{staticClass:"el-dropdown-link"},[n("img",{staticClass:"headIcon",attrs:{src:r(547)}})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("router-link",{staticClass:"it",attrs:{to:"/home"}},[t._v("首页")])],1),t._v(" "),n("el-dropdown-item",[n("router-link",{staticClass:"it",attrs:{to:"/service"}},[t._v("经销商")])],1),t._v(" "),n("el-dropdown-item",[n("router-link",{staticClass:"it",attrs:{to:"/news"}},[t._v("新闻资讯")])],1),t._v(" "),n("el-dropdown-item",[n("router-link",{staticClass:"it",attrs:{to:"/adv"}},[t._v("关于我们")])],1),t._v(" "),n("el-dropdown-item",[n("router-link",{staticClass:"it",attrs:{to:"/contact"}},[t._v("联系我们")])],1)],1)],1)],1)])},staticRenderFns:[]}},550:function(t,e,r){var n=r(545);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(139)("407494cb",n,!0,{})},551:function(t,e,r){var n=r(546);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(139)("0c27bb2c",n,!0,{})},552:function(t,e,r){"use strict";r.d(e,"b",function(){return n}),r.d(e,"a",function(){return a});var n=function(t){return/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(t)},a=function(t){return/^1[34578]\d{9}$/.test(t)}},553:function(t,e,r){"use strict";r.d(e,"c",function(){return a}),r.d(e,"a",function(){return o}),r.d(e,"b",function(){return i}),r.d(e,"d",function(){return s}),r.d(e,"e",function(){return c}),r.d(e,"f",function(){return l}),r.d(e,"g",function(){return d}),r.d(e,"h",function(){return u});var n=r(555),a=function(t,e){return r.i(n.a)("/Site/GetActivityNewsInfo",{Count:t,PageNumber:e})},o=function(t){return r.i(n.a)("/Site/QueryWarrantyInfo",{query:t})},i=function(t,e,a,o,i){return r.i(n.a)("/Site/SendMail",{Type:t,Contact:e,ContactNumber:a,Email:o,Message:i})},s=function(){return r.i(n.a)("/Site/QueryPartnerCountry")},c=function(t){return r.i(n.a)("/Site/QueryPartnerProvince",{Country:t})},l=function(t,e){return r.i(n.a)("/Site/QueryPartnerCity",{Country:t,Province:e})},d=function(t,e,a){return r.i(n.a)("/Site/QueryPartnerCounty",{Country:t,Province:e,City:a})},u=function(t,e,a,o){return r.i(n.a)("/Site/QueryPartnerList",{Country:t,Province:e,City:a,County:o})}},554:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n="";n="https://d.carbros.cn:4433/Intego"},555:function(t,e,r){"use strict";var n=r(554),a=(r(552),this),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.a=function(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(a,o){try{var i=e[a](o),s=i.value}catch(t){return void r(t)}if(!i.done)return Promise.resolve(s).then(function(t){n("next",t)},function(t){n("throw",t)});t(s)}return n("next")})}}(regeneratorRuntime.mark(function t(){var e,r,i,s,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"fetch";return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(d=d.toUpperCase(),-1==c.indexOf("http")&&(c=n.a+c),"GET"==d&&(e="",Object.keys(l).forEach(function(t){e+=t+"="+l[t]+"&"}),""!==e&&(e=e.substr(0,e.lastIndexOf("&")),c=c+"?"+e)),!window.fetch||"fetch"!=u){t.next=21;break}return r={method:d,headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"* ","Access-Control-Request-Method":" GET,PUT, DELETE,OPTIONS, POST"},mode:"cors",cache:"no-cache"},"POST"==d&&Object.defineProperty(r,"body",{value:JSON.stringify(l)}),t.prev=6,t.next=9,fetch(c,r);case 9:return i=t.sent,t.next=12,i.json();case 12:return s=t.sent,t.abrupt("return",s);case 16:return t.prev=16,t.t0=t.catch(6),t.abrupt("return",null);case 19:t.next=22;break;case 21:return t.abrupt("return",new Promise(function(t,e){var r=void 0;r=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");var n="";"POST"==d&&(n=JSON.stringify(l)),r.open(d,c,!0),r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.setRequestHeader("Origin","*"),r.setRequestHeader("Access-Control-Request-Methods"," GET, PUT, DELETE,OPTIONS, POST"),r.onreadystatechange=function(){if(4==r.readyState){if(console.log("url:"+c+" status:"+r.status),200==r.status){var e=r.response;"object"!==(void 0===e?"undefined":o(e))&&(e=JSON.parse(e)),t(e)}}else r.readyState},r.send(n)}));case 22:case"end":return t.stop()}},t,a,[[6,16]])}))},567:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(553),a=r(548),o=r.n(a);e.default={data:function(){return{dialogTableVisible:!1,carNum:"",msgTotal:{},Imgs:[],startTime:"",alertMsg:"请正确输入信息",modal:!1,expTime:"",value1:"1"}},components:{"head-top":o.a},created:function(){},mounted:function(){var t=this;this.carNum=this.$route.query.backFlag,r.i(n.a)(this.carNum).then(function(e){console.log(e.Count),0==e.Count?t.modal=!0:(t.msgTotal=e.QueryWarrantyList[0],console.log(t.msgTotal),t.Imgs=t.msgTotal.Imgs.split(";"),t.startTime=t.msgTotal.SaleTime.substring(0,t.msgTotal.SaleTime.indexOf("T")),t.expTime=t.msgTotal.EXP.substring(0,t.msgTotal.EXP.indexOf("T")))})},methods:{confirm:function(){this.modal=!1,this.$router.push({path:"/service"})}}}},570:function(t,e,r){e=t.exports=r(50)(),e.push([t.i,"#home-header[data-v-26e47052]{background-color:#000;padding:.7rem .7rem .45rem}#home-header .logo[data-v-26e47052]{padding-top:.1rem;font-size:14px;color:#fff}#home-header .headIcon[data-v-26e47052]{width:1.2rem;height:1.2rem}#home-header .bg[data-v-26e47052]{position:absolute;right:.28rem;top:.96rem;width:2.2rem;height:5.23rem;background-color:#000;opacity:.6}.main[data-v-26e47052]{padding:.925rem .75rem 0}.main .title .qu[data-v-26e47052]{display:flex;flex-direction:row}.main .title .qu h2[data-v-26e47052]{font-size:.9rem;color:#636262;font-weight:700}.main .title .qu i[data-v-26e47052]{font-size:.6rem;color:#636262;line-height:1.5rem;padding-left:.5rem;font-style:italic}.main .title .wish[data-v-26e47052]{font-size:.6rem;color:#98040b;padding-bottom:.5rem}.main .queryPart table[data-v-26e47052]{border-collapse:collapse}.main .queryPart table tr[data-v-26e47052]{width:100%}.main .queryPart table tr td[data-v-26e47052]{border:1px solid #dcdcdc;padding-left:.7rem}.main .queryPart table tr td[data-v-26e47052]:first-of-type{width:220px;height:1.5rem}.main .queryPart table tr td[data-v-26e47052]:nth-of-type(2){width:70%}",""])},593:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("head-top"),t._v(" "),r("div",{staticClass:"main"},[t._m(0),t._v(" "),r("div",{staticClass:"queryPart"},[r("Collapse",{model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},[r("Panel",{attrs:{name:"1"}},[t._v("\n\t\t\t            G + 车辆信息\n\t\t\t            "),r("table",{attrs:{slot:"content",border:"1",cellspacing:"0"},slot:"content"},[r("tr",[r("td",[t._v("车辆品牌")]),t._v(" "),r("td",[t._v(t._s(t.msgTotal.CarModel))])]),t._v(" "),r("tr",[r("td",[t._v("车架号码")]),t._v(" "),r("td",[t._v(t._s(t.msgTotal.CarNumber))])]),t._v(" "),r("tr",[r("td",[t._v("牌照号码")]),t._v(" "),r("td",[t._v(t._s(t.msgTotal.VIN))])]),t._v(" "),r("tr",[r("td",[t._v("车辆颜色")]),t._v(" "),r("td",[t._v(t._s(t.msgTotal.CarColor))])])])]),t._v(" "),r("Panel",{attrs:{name:"2"}},[t._v("\n\t\t\t            G + 产品信息\n\t\t\t             "),r("table",{attrs:{slot:"content",border:"1",cellspacing:"0"},slot:"content"},[r("tr",[r("td",[t._v("产品系列")]),t._v(" "),r("td",[t._v(t._s(t.msgTotal.ProductName))])]),t._v(" "),r("tr",[r("td",[t._v("卷轴编号")]),t._v(" "),r("td",[t._v(t._s(t.msgTotal.GP))])]),t._v(" "),r("tr",[r("td",[t._v("质保年限")]),t._v(" "),r("td",[t._v(t._s(t.msgTotal.PN))])]),t._v(" "),r("tr",[r("td",[t._v("安装范围")]),t._v(" "),r("td",[t._v(t._s(t.msgTotal.SalePart))])])])]),t._v(" "),r("Panel",{attrs:{name:"3"}},[t._v("\n\t\t\t            G + 装贴信息\n\t\t\t              "),r("table",{attrs:{slot:"content",border:"1",cellspacing:"0"},slot:"content"},[r("tr",[r("td",[t._v("装贴日期")]),t._v(" "),r("td",[t._v(t._s(this.startTime))])]),t._v(" "),r("tr",[r("td",[t._v("装贴门店")]),t._v(" "),r("td",[t._v(t._s(t.msgTotal.StoreName))])])])]),t._v(" "),r("Panel",{attrs:{name:"4"}},[t._v("\n\t\t\t            G + 质保信息\n\t\t\t             "),r("table",{attrs:{slot:"content",border:"1",cellspacing:"0"},slot:"content"},[r("tr",[r("td",[t._v("质保日期")]),t._v(" "),r("td",[t._v(t._s(this.expTime))])]),t._v(" "),r("tr",[r("td",[t._v("质保范围")]),t._v(" "),r("td",[t._v("G+漆面保护膜，质保期限内因生产材料或工艺缺陷导致的开裂，起泡，翘边，分层等现象，G+授权经销商将免费为您更换。   \n\t\t\t\t\t\t\t\tG+漆面膜日常养护须知：\n\t\t\t\t\t\t\t\t+安装后72小时避免洗车。\n\t\t\t\t\t\t\t\t+请勿用高压水枪对着边角直接冲洗。\n\t\t\t\t\t\t\t\t+避免硬物刮擦膜或含有腐蚀化学清洗剂擦洗膜表面。\n\t\t\t\t\t\t\t\t+配合使用G+漆面保护膜专用养护蜡，让商家或自行涂抹在保护膜上，每隔三月一次，可大大增加透明膜耐久性。")])]),t._v(" "),r("tr",[r("td",{attrs:{colspan:"2"}},[t._v("车辆照片")])]),t._v(" "),r("tr",[r("td",{attrs:{colspan:"2"}},t._l(t.Imgs,function(t){return r("img",{attrs:{src:t,alt:"",width:"40%"}})}))])])])],1)],1)]),t._v(" "),r("Modal",{attrs:{width:"360"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[r("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[r("Icon",{attrs:{type:"information-circled"}}),t._v(" "),r("span",[t._v("查询码有误")])],1),t._v(" "),r("div",{staticStyle:{"text-align":"center"}},[r("p",{staticStyle:{"font-size":"1rem"}},[t._v(t._s(t.alertMsg))])]),t._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("Button",{attrs:{type:"error",size:"large",long:""},on:{click:t.confirm}},[t._v("确定")])],1)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[r("div",{staticClass:"qu"},[r("h2",[t._v("质保查询")]),t._v(" "),r("i",[t._v("Warranty inquiries")])])])}]}},599:function(t,e,r){var n=r(570);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(139)("64f0ae97",n,!0,{})}});