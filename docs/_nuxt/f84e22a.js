(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{458:function(e,t,n){"use strict";var o=n(3),c=n(57),r=n(463),l=n(271),d=n(7),f=1..toFixed,h=Math.floor,m=function(e,t,n){return 0===t?n:t%2==1?m(e,t-1,n*e):m(e*e,t/2,n)};o({target:"Number",proto:!0,forced:f&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){f.call({})}))},{toFixed:function(e){var t,n,o,d,f=r(this),v=c(e),data=[0,0,0,0,0,0],C="",x="0",w=function(e,t){for(var n=-1,o=t;++n<6;)o+=e*data[n],data[n]=o%1e7,o=h(o/1e7)},y=function(e){for(var t=6,n=0;--t>=0;)n+=data[t],data[t]=h(n/e),n=n%e*1e7},_=function(){for(var e=6,s="";--e>=0;)if(""!==s||0===e||0!==data[e]){var t=String(data[e]);s=""===s?t:s+l.call("0",7-t.length)+t}return s};if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return String(f);if(f<0&&(C="-",f=-f),f>1e-21)if(n=(t=function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t}(f*m(2,69,1))-69)<0?f*m(2,-t,1):f/m(2,t,1),n*=4503599627370496,(t=52-t)>0){for(w(0,n),o=v;o>=7;)w(1e7,0),o-=7;for(w(m(10,o,1),0),o=t-1;o>=23;)y(1<<23),o-=23;y(1<<o),w(1,1),y(2),x=_()}else w(0,n),w(1<<-t,0),x=_()+l.call("0",v);return x=v>0?C+((d=x.length)<=v?"0."+l.call("0",v-d)+x:x.slice(0,d-v)+"."+x.slice(d-v)):C+x}})},463:function(e,t,n){var o=n(46);e.exports=function(e){if("number"!=typeof e&&"Number"!=o(e))throw TypeError("Incorrect invocation");return+e}},464:function(e,t,n){"use strict";n.r(t);n(37),n(26),n(458),n(39),n(36);var o={name:"rtnumberchart",props:["config"],data:function(){return{receivedTime:0,value:0,time:Date.now(),nowTime:Date.now(),isMounted:!1,topic:"",store:[],lastTime:0,randonValue:0,chartOptions:{credits:{enabled:!1},chart:{renderTo:"container",defaultSeriesType:"line",type:"",backgroundColor:"rgba(0,0,0,0)"},title:{text:""},xAxis:{type:"datetime",labels:{style:{color:"#d4d2d2"}}},yAxis:{title:{text:""},labels:{style:{color:"#d4d2d2",font:"11px Trebuchet MS, Verdana, sans-serif"}}},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010},areaspline:{fillOpacity:.05}},series:[{name:"",data:[],color:"#e14eca"}],legend:{itemStyle:{color:"#d4d2d2"}},responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}}},watch:{config:{immediate:!0,deep:!0,handler:function(){var e=this;setTimeout((function(){e.value=0,e.$nuxt.$off(e.topic+"/sdata"),e.topic=e.config.userId+"/"+e.config.selectedDevice.dId+"/"+e.config.variable,e.$nuxt.$on(e.topic+"/sdata",e.procesReceivedData),e.chartOptions.series[0].data=[],e.getChartData(),e.chartOptions.series[0].name=e.config.variableFullName+" "+e.config.unit,e.updateColorClass(),e.getChartType(),window.dispatchEvent(new Event("resize"))}),300)}}},mounted:function(){this.getNow(),this.updateColorClass(),this.getChartType(),this.getChartData(),this.startCount(),this.lastTime=this.config.testTime},beforeDestroy:function(){this.$nuxt.$off(this.topic+"/sdata")},methods:{updateColorClass:function(){console.log("update"+this.config.class);var e=this.config.class;"success"==e&&(this.chartOptions.series[0].color="#00f2c3"),"primary"==e&&(this.chartOptions.series[0].color="#e14eca"),"warning"==e&&(this.chartOptions.series[0].color="#ff8d72"),"danger"==e&&(this.chartOptions.series[0].color="#fd5d93"),this.chartOptions.series[0].name=this.config.variableFullName+" "+this.config.unit},startCount:function(){var e=this;setTimeout((function(){e.lastTime=e.lastTime+1e3,e.randonValue=e.config.setValue+Math.floor(10*Math.random())/10,e.store.push([e.lastTime,e.randonValue]),e.value=e.randonValue,e.startCount()}),3e3)},getChartData:function(){return this.store=[[1606659067e3,22],[1606659068e3,27],[1606659069e3,32],[160665907e4,33]],this.chartOptions.series[0].data=this.store,void(this.isMounted=!0)},getIconColorClass:function(){return"success"==this.config.class?"text-success":"primary"==this.config.class?"text-primary":"warning"==this.config.class?"text-warning":"danger"==this.config.class?"text-danger":void 0},procesReceivedData:function(data){var e=this;try{this.time=Date.now(),this.value=data.value,setTimeout((function(){1==data.save&&e.getChartData()}),1e3)}catch(e){console.log(e)}},getNow:function(){var e=this;this.nowTime=Date.now(),setTimeout((function(){e.getNow()}),1e3)},getTimeAgo:function(e){return e<0&&(e=0),e<59?e.toFixed()+" secs":e>59&&e<=3600?(e/=60).toFixed()+" min":e>3600&&e<=86400?(e/=3600).toFixed()+" hour":e>86400?(e/=86400).toFixed()+" day":void 0},getChartType:function(){var e=this.config.typeChart;"line"==e&&(this.chartOptions.chart.type="line"),"spline"==e&&(this.chartOptions.chart.type="spline"),"area"==e&&(this.chartOptions.chart.type="area"),"areaspline"==e&&(this.chartOptions.chart.type="areaspline")}}},c=n(1),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("card",{attrs:{type:"chart"}},[n("template",{slot:"header"},[n("h5",{staticClass:"card-category pull-right"},[e._v(e._s(e.getTimeAgo((e.nowTime-e.time)/1e3))+" ago ")]),e._v(" "),n("h5",{staticClass:"card-category"},[e._v(e._s(e.config.selectedDevice.name)+" Device 1- "+e._s(e.config.variableFullName))]),e._v(" "),n("h3",{staticClass:"card-title"},[n("i",{staticClass:"fa ",class:[e.config.icon,e.getIconColorClass()],staticStyle:{"font-size":"30px"},attrs:{"aria-hidden":"true"}}),e._v(" "),n("span",[e._v(e._s(e.value.toFixed(e.config.decimalPlaces))+" "+e._s(e.config.unit))])])]),e._v(" "),n("div",{staticClass:"chart-area",staticStyle:{height:"300px"}},[e.isMounted?n("highchart",{staticStyle:{height:"100%"},attrs:{options:e.chartOptions}}):e._e()],1)],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Card:n(71).default})},465:function(e,t,n){"use strict";n.r(t);var o={name:"iotswitch",props:["config"],data:function(){return{value:!0}},watch:{config:{immediate:!0,deep:!0,handler:function(){}}},mounted:function(){},beforeDestroy:function(){},methods:{getIconColorClass:function(){return this.value?"success"==this.config.class?"text-success":"primary"==this.config.class?"text-primary":"warning"==this.config.class?"text-warning":"danger"==this.config.class?"text-danger":void 0:"text-dark"},sendValue:function(){var e={topic:this.config.userId+"/"+this.config.selectedDevice.dId+"/"+this.config.variable+"/actdata",msg:{value:this.value}};$nuxt.$emit("mqtt-sender",e)}}},c=n(1),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("card",[n("template",{slot:"header"},[n("h5",{staticClass:"card-category"},[e._v(" "+e._s(e.config.selectedDevice.name)+" - "+e._s(e.config.variableFullName))]),e._v(" "),n("h3",{staticClass:"card-title"},[n("i",{staticClass:"fa ",class:[e.config.icon,e.getIconColorClass()],staticStyle:{"font-size":"30px"},attrs:{"aria-hidden":"true"}}),e._v(" "),n("base-switch",{staticClass:"pull-right",staticStyle:{"margin-top":"10px"},attrs:{value:e.value,type:"primary","on-text":"ON","off-text":"OFF"},on:{click:function(t){e.value=!e.value,e.sendValue()}}})],1)])],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseSwitch:n(116).default,Card:n(71).default})},466:function(e,t,n){"use strict";n.r(t);n(36);var o={props:["config"],data:function(){return{sending:!1}},mounted:function(){},methods:{sendValue:function(){$nuxt.$emit("messageLedButton",this.config.message)},getIconColorClass:function(){return"success"==this.config.class?"text-success":"primary"==this.config.class?"text-primary":"warning"==this.config.class?"text-warning":"danger"==this.config.class?"text-danger":void 0}}},c=n(1),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("h4",{staticClass:"card-title"},[e._v("\n      "+e._s(e.config.selectedDevice.name)+" Device 3 - "+e._s(e.config.variableFullName)+"\n    ")])]),e._v(" "),n("i",{staticClass:"fa ",class:[e.config.icon,e.getIconColorClass()],staticStyle:{"font-size":"50px"}}),e._v(" "),n("base-button",{staticClass:"mb-3 pull-right",attrs:{type:e.config.class,size:"lg"},on:{click:function(t){return e.sendValue()}}},[e._v(e._s(e.config.text))])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseButton:n(72).default,Card:n(71).default})},467:function(e,t,n){"use strict";n.r(t);n(36);var o={props:["config"],data:function(){return{value:!1,topic:"",props:["config"]}},watch:{config:{immediate:!0,deep:!0,handler:function(){var e=this;setTimeout((function(){e.value=!1,e.$nuxt.$off(e.topic);var t=e.config.userId+"/"+e.config.selectedDevice.dId+"/"+e.config.variable+"/sdata";e.$nuxt.$on(t,e.processReceivedData)}),300)}}},mounted:function(){var e=this.config.userId+"/"+this.config.selectedDevice.dId+"/"+this.config.variable+"/sdata";this.$nuxt.$on(e,this.processReceivedData)},beforeDestroy:function(){this.$nuxt.$off(this.topic)},methods:{processReceivedData:function(data){try{console.log("received"),console.log(data),this.value=data.value}catch(e){console.log(e)}},getIconColorClass:function(){return this.value?"success"==this.config.class?"text-success":"primary"==this.config.class?"text-primary":"warning"==this.config.class?"text-warning":"danger"==this.config.class?"text-danger":void 0:"text-dark"}}},c=n(1),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("h4",{staticClass:"card-title"},[e._v("\n      "+e._s(e.config.selectedDevice.name)+" - "+e._s(e.config.variableFullName)+"\n    ")])]),e._v(" "),n("i",{staticClass:"fa ",class:[e.config.icon,e.getIconColorClass()],staticStyle:{"font-size":"30px"}})])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Card:n(71).default})},468:function(e,t,n){"use strict";n.r(t);n(117),n(458),n(11),n(38),n(90),n(36),n(272);var o={name:"espCam",props:["config"],data:function(){return{receivedTime:0,value:0,time:Date.now(),nowTime:Date.now(),isMounted:!1,topic:"",img:"img/LedOff.jpeg",wsHost:"192.168.1.37",wsPort:"8888"}},mounted:function(){var e=this;this.$nuxt.$on("messageLedButton",this.ledFunction),this.getNow();var t="ws:///".concat(this.wsHost,":").concat(this.wsPort),n=new WebSocket(t);n.onopen=function(){return console.log("Connected to ".concat(t))},n.onmessage=function(t){var n=t.data;e.img=URL.createObjectURL(new Blob([n]))}},methods:{ledFunction:function(e){"true"==e?this.img="img/LedOn.jpeg":"false"==e&&(this.img="img/LedOff.jpeg")},getNow:function(){var e=this;this.nowTime=Date.now(),setTimeout((function(){e.getNow()}),1e3)},getTimeAgo:function(e){return e<0&&(e=0),e<59?e.toFixed()+" secs":e>59&&e<=3600?(e/=60).toFixed()+" min":e>3600&&e<=86400?(e/=3600).toFixed()+" hour":e>86400?(e/=86400).toFixed()+" day":void 0},getIconColorClass:function(){return"success"==this.config.class?"text-success":"primary"==this.config.class?"text-primary":"warning"==this.config.class?"text-warning":"danger"==this.config.class?"text-danger":void 0}}},c=n(1),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("card",{attrs:{type:"chart"}},[n("template",{slot:"header"},[n("h5",{staticClass:"card-category pull-right"},[e._v(e._s(e.getTimeAgo((e.nowTime-e.time)/1e3))+" ago ")]),e._v(" "),n("h5",{staticClass:"card-category"},[e._v(e._s(e.config.selectedDevice.name)+" Device 2- "+e._s(e.config.variableFullName))]),e._v(" "),n("h3",{staticClass:"card-title"},[n("i",{staticClass:"fa ",class:[e.config.icon,e.getIconColorClass()],staticStyle:{"font-size":"30px"},attrs:{"aria-hidden":"true"}})])]),e._v(" "),n("div",{staticClass:"img-area"},[n("img",{attrs:{src:e.img,height:"100%",width:"380"}})])],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Card:n(71).default})},496:function(e,t,n){"use strict";n.r(t);n(26);var o={middleware:"authenticated",name:"Dashboard",data:function(){return{widgets:[{userId:"sampleuserid",selectedDevice:{name:"Home",dId:"8888"},variableFullName:"Heat Index",typeChart:"areaspline",variable:"IUnSGcDjRj",variableType:"input",variableSendFreq:30,unit:"°C",class:"success",column:"col-12",decimalPlaces:2,widget:"numberchart",setValue:15,testTime:1606659071e3,icon:"fa-thermometer-full",chartTimeAgo:60,demo:!0},{userId:"sampleuserid",selectedDevice:{name:"Home",dId:"8888"},variableFullName:"Temperature",typeChart:"areaspline",variable:"TjXSiiKr6m",variableType:"input",variableSendFreq:30,unit:"°C",class:"warning",column:"col-lg-4",decimalPlaces:2,widget:"numberchart",setValue:12,testTime:1606659071e3,icon:"fa-thermometer",chartTimeAgo:60,demo:!0},{userId:"sampleuserid",selectedDevice:{name:"Home",dId:"8888"},variableFullName:"Humidity",typeChart:"areaspline",variable:"R7Ypbaoy4C",variableType:"input",variableSendFreq:30,unit:"%",class:"primary",column:"col-lg-4",decimalPlaces:2,widget:"numberchart",setValue:40,testTime:1606659071e3,icon:"fa-tint",chartTimeAgo:60,demo:!0},{userId:"userid",selectedDevice:{name:"Esp32 Cam",dId:"8888"},variableFullName:"EspCam32",variable:"kDAfTIMyHT",variableType:"input",widget:"espCam",icon:"fa-camera",column:"col-lg-4",class:"danger"},{userId:"userid",selectedDevice:{name:"Home",dId:"8888",templateName:"Power Sensor",templateId:"984237562348756ldksjfh",saverRule:!1},variableFullName:"Led ON",variable:"j6iWecYDYx",variableType:"output",icon:"fa-lightbulb",column:"col-lg-6",widget:"button",class:"success",message:"true",text:"ON"},{userId:"userid",selectedDevice:{name:"Home",dId:"8888",templateName:"Power Sensor",templateId:"984237562348756ldksjfh",saverRule:!1},variableFullName:"Led OFF",variable:"CCNLjHe1aI",variableType:"output",icon:"fa-lightbulb",column:"col-lg-6",widget:"button",class:"danger",message:"false",text:"OFF"}]}},mounted:function(){},methods:{fixWidget:function(e){var t=JSON.parse(JSON.stringify(e));return t.selectedDevice.dId=this.$store.state.selectedDevice.dId,t.selectedDevice.name=this.$store.state.selectedDevice.name,t.userId=this.$store.state.selectedDevice.userId,"numberchart"==e.widget&&(t.demo=!1),t}}},c=n(1),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},e._l(e.widgets,(function(t,o){return n("div",{key:o,class:[t.column]},["numberchart"==t.widget?n("Rtnumberchart",{attrs:{config:e.fixWidget(t),test:100}}):e._e(),e._v(" "),"switch"==t.widget?n("Iotswitch",{attrs:{config:e.fixWidget(t)}}):e._e(),e._v(" "),"button"==t.widget?n("Iotbutton",{attrs:{config:e.fixWidget(t)}}):e._e(),e._v(" "),"indicator"==t.widget?n("Iotindicator",{attrs:{config:e.fixWidget(t)}}):e._e(),e._v(" "),"espCam"==t.widget?n("EspCam",{attrs:{config:e.fixWidget(t)}}):e._e()],1)})),0)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Rtnumberchart:n(464).default,Iotswitch:n(465).default,Iotbutton:n(466).default,Iotindicator:n(467).default,EspCam:n(468).default})}}]);