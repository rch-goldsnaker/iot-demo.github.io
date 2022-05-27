(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{493:function(e,t,c){"use strict";c.r(t);c(26),c(31);var n,l=c(6),o=c(17),r=(c(269),c(45),c(120)),d=c.n(r),m=(c(270),c(122)),v=c.n(m),h=(c(459),c(460)),f=c.n(h),y=(c(461),c(462)),w=c.n(y),x={middleware:"authenticated",components:(n={},Object(o.a)(n,w.a.name,w.a),Object(o.a)(n,f.a.name,f.a),Object(o.a)(n,v.a.name,v.a),Object(o.a)(n,d.a.name,d.a),n),data:function(){return{templates:[],selectedIndexTemplate:null,newDevice:{name:"",dId:"",templateId:"",templateName:""}}},mounted:function(){this.getTemplates()},methods:Object(o.a)({updateSaverRuleStatus:function(e){var t=this;if("진실"!=localStorage.getItem("데머")){var c=JSON.parse(JSON.stringify(e));c.status=!c.status;var n={rule:c},l={headers:{token:this.$store.state.auth.token}};this.$axios.put("/saver-rule",n,l).then((function(e){"success"==e.data.status&&(t.$store.dispatch("getDevices"),t.$notify({type:"success",icon:"tim-icons icon-check-2",message:" Device Saver Status Updated"}))})).catch((function(e){console.log(e),t.$notify({type:"danger",icon:"tim-icons icon-alert-circle-exc",message:" Error updating saver rule status"})}))}else this.$notify({type:"success",icon:"tim-icons icon-alert-circle-exc",message:"This is a Demo version"})},deleteDevice:function(e){var t=this,c={headers:{token:this.$store.state.auth.accessToken},params:{dId:e.dId}};this.$axios.delete("/device",c).then((function(c){"success"==c.data.status&&t.$notify({type:"success",icon:"tim-icons icon-check-2",message:e.name+" deleted!"}),$nuxt.$emit("time-to-get-devices")})).catch((function(c){console.log(c),t.$notify({type:"danger",icon:"tim-icons icon-alert-circle-exc",message:" Error deleting "+e.name})}))},createNewDevice:function(){var e=this;if("진실"!=localStorage.getItem("데머"))if(""!=this.newDevice.name)if(""!=this.newDevice.dId)if(null!=this.selectedIndexTemplate){var t={headers:{token:this.$store.state.auth.token}};this.newDevice.templateId=this.templates[this.selectedIndexTemplate]._id,this.newDevice.templateName=this.templates[this.selectedIndexTemplate].name;var c={newDevice:this.newDevice};this.$axios.post("/device",c,t).then((function(t){if("success"==t.data.status)return e.$store.dispatch("getDevices"),e.newDevice.name="",e.newDevice.dId="",e.selectedIndexTemplate=null,void e.$notify({type:"success",icon:"tim-icons icon-check-2",message:"Success! Device was added"})})).catch((function(t){return"error"==t.response.data.status&&"unique"==t.response.data.error.errors.dId.kind?void e.$notify({type:"warning",icon:"tim-icons icon-alert-circle-exc",message:"The device is already registered in the system. Try another device"}):void e.showNotify("danger","Error")}))}else this.$notify({type:"warning",icon:"tim-icons icon-alert-circle-exc",message:" Tempalte must be selected"});else this.$notify({type:"warning",icon:"tim-icons icon-alert-circle-exc",message:" Device ID is Empty :("});else this.$notify({type:"warning",icon:"tim-icons icon-alert-circle-exc",message:" Device Name is Empty :("});else this.$notify({type:"success",icon:"tim-icons icon-alert-circle-exc",message:"This is a Demo version"})},getTemplates:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var c,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={headers:{token:e.$store.state.auth.token}},t.prev=1,t.next=4,e.$axios.get("/template",c);case 4:n=t.sent,console.log(n.data),"success"==n.data.status&&(e.templates=n.data.data),t.next=14;break;case 9:return t.prev=9,t.t0=t.catch(1),e.$notify({type:"danger",icon:"tim-icons icon-alert-circle-exc",message:"Error getting templates..."}),console.log(t.t0),t.abrupt("return");case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()}},"deleteDevice",(function(e){var t=this;if("진실"!=localStorage.getItem("데머")){var c={headers:{token:this.$store.state.auth.token},params:{dId:e.dId}};this.$axios.delete("/device",c).then((function(c){"success"==c.data.status&&(t.$notify({type:"success",icon:"tim-icons icon-check-2",message:e.name+" deleted!"}),t.$store.dispatch("getDevices"))})).catch((function(c){console.log(c),t.$notify({type:"danger",icon:"tim-icons icon-alert-circle-exc",message:" Error deleting "+e.name})}))}else this.$notify({type:"success",icon:"tim-icons icon-alert-circle-exc",message:"This is a Demo version"})}))},D=c(1),component=Object(D.a)(x,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[c("div",{staticClass:"row"},[c("card",[c("div",{attrs:{slot:"header"},slot:"header"},[c("h4",{staticClass:"card-title"},[e._v("Add new Device")])]),e._v(" "),c("div",{staticClass:"row"},[c("div",{staticClass:"col-4"},[c("base-input",{attrs:{label:"Device Name",type:"text",placeholder:"Ex: Home, Office..."},model:{value:e.newDevice.name,callback:function(t){e.$set(e.newDevice,"name",t)},expression:"newDevice.name"}})],1),e._v(" "),c("div",{staticClass:"col-4"},[c("base-input",{attrs:{label:"Device Id",type:"text",placeholder:"Ex: 7777-8888"},model:{value:e.newDevice.dId,callback:function(t){e.$set(e.newDevice,"dId",t)},expression:"newDevice.dId"}})],1),e._v(" "),c("div",{staticClass:"col-4"},[e._t("label",[c("label",[e._v(" Template ")])]),e._v(" "),c("el-select",{staticClass:"select-primary",staticStyle:{width:"100%"},attrs:{placeholder:"Select Template"},model:{value:e.selectedIndexTemplate,callback:function(t){e.selectedIndexTemplate=t},expression:"selectedIndexTemplate"}},e._l(e.templates,(function(template,e){return c("el-option",{key:template._id,staticClass:"text-dark",attrs:{value:e,label:template.name}})})),1)],2)]),e._v(" "),c("div",{staticClass:"row pull-right"},[c("div",{staticClass:"col-12"},[c("base-button",{staticClass:"mb-3",attrs:{type:"primary",size:"lg"},on:{click:function(t){return e.createNewDevice()}}},[e._v("Add")])],1)])])],1),e._v(" "),c("div",{staticClass:"row"},[c("card",[c("div",{attrs:{slot:"header"},slot:"header"},[c("h4",{staticClass:"card-title"},[e._v("Devices")])]),e._v(" "),c("el-table",{attrs:{data:e.$store.state.devices}},[c("el-table-column",{attrs:{label:"#","min-width":"50",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){t.row;var n=t.$index;return c("div",{},[e._v("\n            "+e._s(n+1)+"\n          ")])}}])}),e._v(" "),c("el-table-column",{attrs:{prop:"name",label:"Name"}}),e._v(" "),c("el-table-column",{attrs:{prop:"dId",label:"Device Id"}}),e._v(" "),c("el-table-column",{attrs:{prop:"password",label:"Password"}}),e._v(" "),c("el-table-column",{attrs:{prop:"templateName",label:"Template"}}),e._v(" "),c("el-table-column",{attrs:{label:"Actions"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;t.$index;return c("div",{},[c("el-tooltip",{staticStyle:{"margin-right":"10px"},attrs:{content:"Saver Status Indicator"}},[c("i",{staticClass:"fas fa-database ",class:{"text-success":n.saverRule.status,"text-dark":!n.saverRule.status}})]),e._v(" "),c("el-tooltip",{attrs:{content:"Database Saver"}},[c("base-switch",{attrs:{value:n.saverRule.status,type:"primary","on-text":"On","off-text":"Off"},on:{click:function(t){return e.updateSaverRuleStatus(n.saverRule)}}})],1),e._v(" "),c("el-tooltip",{attrs:{content:"Delete",effect:"light","open-delay":300,placement:"top"}},[c("base-button",{staticClass:"btn-link",attrs:{type:"danger",icon:"",size:"sm"},on:{click:function(t){return e.deleteDevice(n)}}},[c("i",{staticClass:"tim-icons icon-simple-remove "})])],1)],1)}}])})],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseInput:c(73).default,BaseButton:c(72).default,Card:c(71).default,BaseSwitch:c(116).default})}}]);