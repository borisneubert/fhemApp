(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72177cb1"],{"5d11":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-col",{class:t.setup.size},[s("v-card",{attrs:{dark:this.$vuetify.theme.dark,color:"secondary"}},[s("v-progress-linear",{attrs:{height:"7",value:t.getLevel,color:t.vals.status.color,"background-color":"secondary darken-1"}}),s("v-card-title",{staticClass:"text-truncate"},[t._v(" "+t._s(t.vals.title)+" "),s("v-spacer"),t.app.options.debugMode?s("jsonList",{attrs:{item:t.item}}):t._e()],1),s("v-divider"),s("v-card-text",{staticClass:"pa-0"},t._l(t.list,(function(e){return s("div",{key:e.Name,attrs:{align:"center"}},[s("v-row",{staticClass:"ma-1",attrs:{dense:"",align:"center"}},[s("v-col",{staticClass:"col-2"},[s("v-progress-circular",{attrs:{value:e.level,color:e.color}})],1),s("v-col",{staticClass:"text-truncate",attrs:{align:"left"}},[s("div",{staticClass:"text-truncate headline"},[t._v(" "+t._s(e.title)+" ")]),s("div",{staticClass:"text-truncate"},[t._v(" "+t._s(e.text)+" ")])]),s("v-col",{staticClass:"col-2",attrs:{align:"center"}},[e.route&&!e.click&&e.icon?s("v-btn",{attrs:{icon:"",link:"",to:e.route}},[s("v-icon",{attrs:{large:""}},[t._v(" "+t._s(e.icon)+" ")])],1):t._e(),e.click&&!e.route&&e.icon?s("div",[s("v-btn",{attrs:{icon:""},on:{click:function(s){return t.set(e.device,e.click)}}},[s("v-icon",{attrs:{large:""}},[t._v(" "+t._s(e.icon)+" ")])],1)],1):t._e(),e.menu&&!e.route&&!e.click&&e.icon?s("div",[s("v-menu",{attrs:{bottom:"",left:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on,n=i.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),a),[s("v-icon",{attrs:{large:""}},[t._v(" "+t._s(e.icon)+" ")])],1)]}}],null,!0)},[s("v-list",{attrs:{dense:"",color:"secondary lighten-2"}},[s("v-list-item-group",t._l(e.menu,(function(i,a){return s("v-list-item",{key:a,on:{click:function(s){return t.set(e.device,i.cmd)}}},[s("v-list-item-content",[s("v-list-item-title",{staticClass:"text-subtitle-1"},[t._v(" "+t._s(i.name)+" ")])],1)],1)})),1)],1)],1)],1):t._e()],1)],1),s("v-divider")],1)})),0),s("v-system-bar",{attrs:{color:"secondary darken-1"}},[s("v-icon",{staticClass:"ml-0"},[t._v(" "+t._s(t.vals.info.left1Icon)+" ")]),t._v(t._s(t.vals.info.left1Text)+" "),s("v-icon",{staticClass:"ml-2"},[t._v(" "+t._s(t.vals.info.left2Icon)+" ")]),t._v(t._s(t.vals.info.left2Text)+" "),s("v-spacer"),s("v-icon",[t._v(t._s(t.vals.info.mid1Icon))]),t._v(t._s(t.vals.info.mid1Text)+" "),s("v-icon",{staticClass:"ml-2"},[t._v(" "+t._s(t.vals.info.mid2Icon)+" ")]),t._v(t._s(t.vals.info.mid2Text)+" "),s("v-spacer"),s("v-icon",[t._v(t._s(t.vals.info.right1Icon))]),t._v(t._s(t.vals.info.right1Text)+" "),s("v-icon",{staticClass:"ml-2 mr-0"},[t._v(" "+t._s(t.vals.info.right2Icon)+" ")]),t._v(t._s(t.vals.info.right2Text)+" ")],1)],1)],1)},a=[],n=s("b85c"),l=(s("466d"),s("ac1f"),s("1276"),s("d81d"),s("b0c0"),s("a434"),s("649b")),o={components:{jsonList:l["a"]},props:{item:{type:Object,default:function(){return{name:"panel"}}}},data:function(){return{name:"panel",app:{options:{debugMode:!1}},setup:{size:"col-12 col-sm-6 col-md-6 col-lg-6",status:{bar:[],error:[],min:0,max:100},info:{left1:[],left2:[],mid1:[],mid2:[],right1:[],right2:[]}},vals:{title:"",status:{level:0,color:"",invert:!1},info:{left1Icon:"",left1Text:"",left2Icon:"",left2Text:"",mid1Icon:"",mid1Text:"",mid2Icon:"",mid2Text:"",right1Icon:"",right1Text:"",right2Icon:"",right2Text:""}},list:[],statusAlert:!1}},computed:{getLevel:function(){var t=100/(this.setup.status.max-this.setup.status.min),e=(this.vals.status.level-this.setup.status.min)*t;return this.vals.status.invert?100-e:e}},watch:{item:{immediate:!0,deep:!0,handler:function(t){var e=this.$fhem.getEl(t,"Attributes","alias")||t.Name;this.vals.title=this.$fhem.getEl(t,"Options","name")||e,this.setValues(),this.doList()}},setup:{deep:!0,handler:function(){this.setValues()}}},created:function(){this.app.options=this.$fhem.app.options;var t=this.$fhem.getEl(this.item,"Options","setup","size"),e=this.$fhem.getEl(this.item,"Options","setup","status"),s=this.$fhem.getEl(this.item,"Options","setup","info");t&&(this.setup.size=t),e&&Object.assign(this.setup.status,e),s&&Object.assign(this.setup.info,s)},methods:{setValues:function(){var t=this.$fhem.handleVals(this.item,this.setup.status.bar),e=this.$fhem.handleVals(this.item,this.setup.status.error),s=this.$fhem.handleVals(this.item,this.setup.info.left1),i=this.$fhem.handleVals(this.item,this.setup.info.left2),a=this.$fhem.handleVals(this.item,this.setup.info.mid1),n=this.$fhem.handleVals(this.item,this.setup.info.mid2),l=this.$fhem.handleVals(this.item,this.setup.info.right1),o=this.$fhem.handleVals(this.item,this.setup.info.right2);this.statusAlert||(this.vals.status.level=t[0]||"100",this.vals.status.color=t[1]||"success",this.vals.status.invert=!!t[2]),this.vals.info.left1Icon=s[1]||"",this.vals.info.left1Text=s[0]||"",this.vals.info.left2Icon=i[1]||"",this.vals.info.left2Text=i[0]||"",this.vals.info.mid1Icon=a[1]||"",this.vals.info.mid1Text=a[0]||"",this.vals.info.mid2Icon=n[1]||"",this.vals.info.mid2Text=n[0]||"",this.vals.info.right1Icon=l[1]||"",this.vals.info.right1Text=l[0]||"",this.vals.info.right2Icon=o[1]||"",this.vals.info.right2Text=o[0]||"",e.length>0?(this.vals.status.level=e[0]||"100",this.vals.status.color=e[1]||"error",this.vals.main.text=e[2]||"Fehler",this.isActive=!1):this.isActive=!0},set:function(t,e){var s=e.match("set")?e:"set "+t+" "+e;this.$fhem.request(s)},loadItem:function(t){var e=this.$fhem.getEl(t,"Name")||"",s=this.$fhem.getEl(t,"Attributes","alias")||t.Name,i=this.$fhem.getEl(t,"Options","name")||s,a=this.$fhem.getEl(t,"Options","panel","link")||"",l=this.$fhem.handleVals(t,this.$fhem.getEl(t,"Options","panel","status"))||[],o=this.$fhem.handleVals(t,this.$fhem.getEl(t,"Options","panel","btn"))||[],c=this.$fhem.handleVals(t,this.$fhem.getEl(t,"Options","panel","click"))||[],r=this.$fhem.getEl(t,"Options","panel","menu")||[],h=this.$fhem.getEl(t,"Options","panel","min")||0,v=this.$fhem.getEl(t,"Options","panel","max")||100,u=100/(v-h),d=((l[1]||0)-h)*u,m=[];if(r.length>0){var f,p=Object(n["a"])(r);try{for(p.s();!(f=p.n()).done;){var g=f.value,_=g.split(":");2==_.length&&m.push({name:_[0],cmd:_[1]})}}catch(x){p.e(x)}finally{p.f()}}var b={device:e,title:i,text:l[0]||"",level:l[3]?100-d:d,color:l[2]||"success",icon:o[0]||"",route:a,click:c[0]||"",menu:m};return b},doList:function(){if(this.item.Connected)for(var t in this.item.Options.connected){var e=this.list.map((function(t){return t.name})).indexOf(t),s=this.loadItem(this.item.Connected[t]),i={name:t,device:s.device,level:s.level,color:s.color,title:s.title,text:s.text,icon:s.icon,route:s.route,click:s.click,menu:s.menu};0==this.setup.status.bar.length&&"success"!=i.color&&"success"===this.vals.status.color&&(this.statusAlert=!0,this.vals.status.color=i.color),-1!=e?this.list.splice(e,1,i):this.list.push(i)}}}},c=o,r=s("2877"),h=s("6544"),v=s.n(h),u=s("8336"),d=s("b0af"),m=s("99d9"),f=s("62ad"),p=s("ce7e"),g=s("132d"),_=s("8860"),b=s("da13"),x=s("5d23"),V=s("1baa"),$=s("e449"),C=s("490a"),k=s("8e36"),I=s("0fd9"),T=s("2fa4"),y=s("afd9"),O=Object(r["a"])(c,i,a,!1,null,null,null);e["default"]=O.exports;v()(O,{VBtn:u["a"],VCard:d["a"],VCardText:m["c"],VCardTitle:m["d"],VCol:f["a"],VDivider:p["a"],VIcon:g["a"],VList:_["a"],VListItem:b["a"],VListItemContent:x["a"],VListItemGroup:V["a"],VListItemTitle:x["c"],VMenu:$["a"],VProgressCircular:C["a"],VProgressLinear:k["a"],VRow:I["a"],VSpacer:T["a"],VSystemBar:y["a"]})},"649b":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("v-dialog",{attrs:{"max-width":"90%",scrollable:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[s("v-btn",t._g(t._b({attrs:{small:"",icon:""}},"v-btn",a,!1),i),[s("v-icon",{attrs:{small:""}},[t._v(" mdi-code-json ")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",{staticClass:"secondary lighten-1"},[s("v-card-title",{staticClass:"secondary"},[s("v-btn",{attrs:{icon:""},on:{click:function(e){t.deep=t.deep>1?1:5}}},[s("v-icon",[t._v("mdi-file-tree-outline")])],1),s("v-btn",{attrs:{icon:""},on:{click:function(e){return t.copyToClipboard()}}},[s("v-icon",[t._v("mdi-content-copy")])],1),s("v-spacer"),t._v(" "+t._s(t.item.Name)+" "),s("v-spacer"),s("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[s("v-icon",[t._v("mdi-close")])],1)],1),s("v-card-text",[s("vue-json-pretty",{ref:"jsonContent",attrs:{"show-line":!1,deep:t.deep,data:t.item}})],1)],1)],1)],1)},a=[],n=s("838b"),l=s.n(n),o=(s("b83f"),{props:{item:{type:Object,default:function(){return{name:"json"}}}},data:function(){return{dialog:!1,deep:1}},components:{VueJsonPretty:l.a},methods:{copyToClipboard:function(){var t=JSON.stringify(this.$refs.jsonContent.data,null,2);navigator.clipboard.writeText(t)}}}),c=o,r=s("2877"),h=s("6544"),v=s.n(h),u=s("8336"),d=s("b0af"),m=s("99d9"),f=s("169a"),p=s("132d"),g=s("2fa4"),_=Object(r["a"])(c,i,a,!1,null,null,null);e["a"]=_.exports;v()(_,{VBtn:u["a"],VCard:d["a"],VCardText:m["c"],VCardTitle:m["d"],VDialog:f["a"],VIcon:p["a"],VSpacer:g["a"]})}}]);