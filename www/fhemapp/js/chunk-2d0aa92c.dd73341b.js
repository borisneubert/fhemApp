(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa92c"],{"121f":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-col",{class:t.setup.size},[e("v-card",{attrs:{dark:this.$vuetify.theme.dark,color:"secondary"}},[e("v-progress-linear",{attrs:{height:"7",value:t.getLevel,color:t.vals.status.color,"background-color":"secondary darken-1"}}),e("v-card-title",{staticClass:"text-truncate"},[t._v(" "+t._s(t.vals.title)+" "),e("v-spacer"),t.app.options.debugMode?e("jsonList",{attrs:{item:t.item}}):t._e(),t.multiLevel&&t.isActive?e("v-btn",{attrs:{small:"",icon:""},on:{click:function(i){return t.setLevel()}}},[e("v-icon",{attrs:{small:""}},[t._v(" "+t._s(t.multiLevelIcon)+" ")])],1):t._e()],1),e("v-divider"),t.vals.main.slider&&t.isActive?t._e():e("v-card-text",[e("v-row",{attrs:{align:"center"}},[0==t.vals.main.leftMenu.length&&t.vals.main.leftBtn&&t.isActive?e("v-col",{staticClass:"col-3",attrs:{align:"center"}},[e("v-btn",{attrs:{small:"",icon:"",disabled:t.vals.main.leftBtnDisabled},on:{touchstart:function(i){return t.clickStart("left","touch")},touchend:function(i){return t.clickEnd("left","touch")},mousedown:function(i){return t.clickStart("left","mouse")},mouseup:function(i){return t.clickEnd("left","mouse")}}},[e("v-icon",{attrs:{large:""}},[t._v(" "+t._s(t.vals.main.leftBtn)+" ")])],1)],1):t._e(),t.vals.main.leftMenu.length>0&&t.vals.main.leftBtn&&t.isActive?e("v-col",{staticClass:"col-3",attrs:{align:"center"}},[e("v-menu",{attrs:{bottom:"",left:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(i){var s=i.on,n=i.attrs;return[e("v-btn",t._g(t._b({attrs:{small:"",icon:""}},"v-btn",n,!1),s),[e("v-icon",{attrs:{large:""}},[t._v(" "+t._s(t.vals.main.leftBtn)+" ")])],1)]}}],null,!1,3898370877)},[e("v-list",{attrs:{dense:"",color:"secondary lighten-2"}},[e("v-list-item-group",t._l(t.vals.main.leftMenu,(function(i,s){return e("v-list-item",{key:s,on:{click:function(e){return t.sendCmd(i.cmd)}}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"text-subtitle-1"},[t._v(" "+t._s(i.name)+" ")])],1)],1)})),1)],1)],1)],1):t._e(),t.vals.main.leftBtn&&t.isActive?e("v-divider",{attrs:{vertical:""}}):t._e(),e("v-col",{attrs:{align:"center"}},[e("div",{staticClass:"headline font-weight-bold"},[t._v(" "+t._s(t.vals.main.text)+" ")])]),t.vals.main.text2&&t.isActive?e("v-col",{attrs:{align:"center"}},[e("div",{staticClass:"headline font-weight-bold"},[t._v(" "+t._s(t.vals.main.text2)+" ")])]):t._e(),t.vals.main.rightBtn&&t.isActive?e("v-divider",{attrs:{vertical:""}}):t._e(),0==t.vals.main.rightMenu.length&&t.vals.main.rightBtn&&t.isActive?e("v-col",{staticClass:"col-3",attrs:{align:"center"}},[e("v-btn",{attrs:{small:"",icon:"",disabled:t.vals.main.rightBtnDisabled},on:{touchstart:function(i){return t.clickStart("right","touch")},touchend:function(i){return t.clickEnd("right","touch")},mousedown:function(i){return t.clickStart("right","mouse")},mouseup:function(i){return t.clickEnd("right","mouse")}}},[e("v-icon",{attrs:{large:""}},[t._v(" "+t._s(t.vals.main.rightBtn)+" ")])],1)],1):t._e(),t.vals.main.rightMenu.length>0&&t.vals.main.rightBtn&&t.isActive?e("v-col",{staticClass:"col-3",attrs:{align:"center"}},[e("v-menu",{attrs:{bottom:"",left:"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(i){var s=i.on,n=i.attrs;return[e("v-btn",t._g(t._b({attrs:{small:"",icon:""}},"v-btn",n,!1),s),[e("v-icon",{attrs:{large:""}},[t._v(" "+t._s(t.vals.main.rightBtn)+" ")])],1)]}}],null,!1,845781958)},[e("v-list",{attrs:{dense:"",color:"secondary lighten-2"}},[e("v-list-item-group",t._l(t.vals.main.rightMenu,(function(i,s){return e("v-list-item",{key:s,on:{click:function(e){return t.sendCmd(i.cmd)}}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"text-subtitle-1"},[t._v(" "+t._s(i.name)+" ")])],1)],1)})),1)],1)],1)],1):t._e()],1)],1),t.vals.main.slider&&t.isActive?e("v-card-text",[e("v-slider",{staticClass:"ml-5 mr-5",attrs:{min:t.vals.main.sliderMin,max:t.vals.main.sliderMax,"hide-details":"","thumb-label":"",color:"success"},on:{change:t.setSlider},scopedSlots:t._u([t.vals.main.leftBtn?{key:"prepend",fn:function(){return[e("v-icon",{on:{click:function(i){return t.clickEnd("left")}}},[t._v(" "+t._s(t.vals.main.leftBtn)+" ")])]},proxy:!0}:null,t.vals.main.rightBtn?{key:"append",fn:function(){return[e("v-icon",{on:{click:function(i){return t.clickEnd("right")}}},[t._v(" "+t._s(t.vals.main.rightBtn)+" ")])]},proxy:!0}:null],null,!0),model:{value:t.vals.main.sliderCurrent,callback:function(i){t.$set(t.vals.main,"sliderCurrent",i)},expression:"vals.main.sliderCurrent"}})],1):t._e(),e("v-divider"),e("v-system-bar",{attrs:{color:"secondary darken-1"}},[e("v-icon",{staticClass:"ml-0"},[t._v(" "+t._s(t.vals.info.left1Icon)+" ")]),t._v(t._s(t.vals.info.left1Text)+" "),e("v-icon",[t._v(t._s(t.vals.info.left2Icon))]),t._v(t._s(t.vals.info.left2Text)+" "),e("v-spacer"),e("v-icon",[t._v(t._s(t.vals.info.mid1Icon))]),t._v(t._s(t.vals.info.mid1Text)+" "),e("v-icon",{staticClass:"ml-2"},[t._v(" "+t._s(t.vals.info.mid2Icon)+" ")]),t._v(t._s(t.vals.info.mid2Text)+" "),e("v-spacer"),e("v-icon",[t._v(t._s(t.vals.info.right1Icon))]),t._v(t._s(t.vals.info.right1Text)+" "),e("v-icon",{staticClass:"mr-0"},[t._v(" "+t._s(t.vals.info.right2Icon)+" ")]),t._v(t._s(t.vals.info.right2Text)+" ")],1)],1)],1)},n=[],a=e("b85c"),l=(e("1276"),e("ac1f"),e("466d"),e("5319"),e("a15b"),e("c740"),e("649b")),r={components:{jsonList:l["a"]},props:{item:{type:Object,default:function(){return{name:"default"}}}},data:function(){return{name:"default",app:{options:{debugMode:!1}},setup:{size:"col-12 col-sm-6 col-md-4 col-lg-4",status:{bar:[],error:[]},main:[{leftBtn:"",text:"Template unbekannt",rightBtn:""}],info:{left1:[],left2:[],mid1:[],mid2:[],right1:[],right2:[]}},vals:{title:"",status:{level:0,color:"",invert:!1},main:{leftBtn:"",leftBtnDisabled:!1,leftMenu:[],text:"",text2:"",slider:!1,sliderCurrent:0,sliderPrevent:!1,sliderMin:0,sliderMax:100,rightBtn:"",rightBtnDisabled:!1,rightMenu:[]},info:{left1Icon:"",left1Text:"",left2Icon:"",left2Text:"",mid1Icon:"",mid1Text:"",mid2Icon:"",mid2Text:"",right1Icon:"",right1Text:"",right2Icon:"",right2Text:""}},multiLevel:!1,multiLevelIcon:"mdi-swap-vertical",mainLevel:0,isActive:!0,timer:!1,long:!1,pendingClick:0,touchFirst:!1}},computed:{getLevel:function(){return this.vals.status.invert?100-this.vals.status.level:this.vals.status.level}},watch:{item:{immediate:!0,deep:!0,handler:function(t){var i=this.$fhem.getEl(t,"Attributes","alias")||t.Name;this.vals.title=this.$fhem.getEl(t,"Options","name")||i,this.setValues()}},setup:{deep:!0,handler:function(){this.setValues()}}},mounted:function(){this.app.options=this.$fhem.app.options;var t=this.$fhem.getEl(this.item,"Options","setup","size"),i=this.$fhem.getEl(this.item,"Options","setup","status"),e=this.$fhem.getEl(this.item,"Options","setup","main"),s=this.$fhem.getEl(this.item,"Options","setup","info");t&&(this.setup.size=t),i&&Object.assign(this.setup.status,i),e&&Object.assign(this.setup.main,e),s&&Object.assign(this.setup.info,s),this.setLevel(0)},methods:{sendCmd:function(t,i){var e=this;i?(this.pendingClick&&(clearTimeout(this.pendingClick),this.pendingClick=0),this.pendingClick=setTimeout((function(){e.$fhem.request(t)}),1e3)):this.$fhem.request(t)},updateReading:function(t){var i=t.split(" ");4===i.length&&this.$fhem.getEl(this.item,"Readings",i[2],"Value")&&(this.item.Readings[i[2]].Value=i[3])},createCmd:function(t){var i="";if(t.match("set")){var e=t.split(" ");if(e[1].match("Connected")){var s=e[1].replace("Connected.","");e[1]=this.$fhem.getEl(this.item,"Connected",s,"Internals","NAME"),e[1]?i=e.join(" "):this.log={type:"error",message:"Connected Device not found. "+this.item.Options,debugLevel:1}}else i=t}else i="set "+this.item.Name+" "+t;return i},clickStart:function(t,i){var e=this;this.long=!1,this.$fhem.log={type:"intern",message:"ClickStart: type "+t+":"+i,debugLevel:5},this.touchFirst&&"mouse"===i||("touch"===i&&(this.touchFirst=!0),this.timer=setInterval((function(){e.long=!0;var i=e.setup.main[e.mainLevel][t+"Long"];if(e.$fhem.log={type:"intern",message:"ClickEvent: Long  ["+i+"]",debugLevel:5},i){var s=e.$fhem.handleVals(e.item,i);if(s[0]){var n=e.createCmd(s[0]);e.sendCmd(n),e.timer=clearInterval(e.timer)}}}),1e3))},clickEnd:function(t,i){if(this.$fhem.log={type:"intern",message:"ClickEnd: type "+t+":"+i,debugLevel:5},!this.touchFirst||"mouse"!==i){"touch"===i&&(this.touchFirst=!0),this.timer=clearInterval(this.timer);var e=this.setup.main[this.mainLevel][t+(this.long?"LongRelease":"Click")];if(this.$fhem.log={type:"intern",message:"ClickEvent: "+(this.long?"LongRelease":"Click")+" ["+e+"]",debugLevel:5},e){var s=this.$fhem.handleVals(this.item,e);if(s[0]){this.vals.main.sliderPrevent=!1;var n=this.createCmd(s[0]),a=-1!=e.findIndex((function(t){return t.match("%i")}));!this.long&&a&&this.updateReading(n),this.sendCmd(n,a)}}}},setSlider:function(t){var i=this.setup.main[this.mainLevel].slider;if(i){var e=this.$fhem.handleVals(this.item,i);if(e[0]){this.vals.main.sliderPrevent=!0;var s=this.createCmd(e[0]);s=s.replace("%v",t),this.sendCmd(s)}}},createMenu:function(t){var i=[];if(t&&t.length>0){var e,s=Object(a["a"])(t);try{for(s.s();!(e=s.n()).done;){var n=e.value,l=n.split(":");if(l.length>1){var r=this.createCmd(l[1]);i.push({name:l[0],cmd:r})}}}catch(h){s.e(h)}finally{s.f()}}return i},setLevel:function(t){isNaN(t)?(this.mainLevel++,this.mainLevel>this.setup.main.length-1&&(this.mainLevel=0)):(this.multiLevel=this.setup.main.length>1,this.mainLevel=t),this.vals.main.leftBtn=this.setup.main[this.mainLevel].leftBtn,this.vals.main.rightBtn=this.setup.main[this.mainLevel].rightBtn;var i=this.$fhem.handleVals(this.item,this.setup.main[this.mainLevel].text),e=this.$fhem.handleVals(this.item,this.setup.main[this.mainLevel].text2),s=this.$fhem.handleVals(this.item,this.setup.main[this.mainLevel].leftBtn),n=this.$fhem.handleVals(this.item,this.setup.main[this.mainLevel].rightBtn),a=this.$fhem.handleVals(this.item,this.setup.main[this.mainLevel].slider),l=this.createMenu(this.setup.main[this.mainLevel].leftMenu),r=this.createMenu(this.setup.main[this.mainLevel].rightMenu);this.vals.main.text=i[0]||"",this.vals.main.text2=e[0]||"",this.vals.main.leftBtn=s[0]||"",this.vals.main.rightBtn=n[0]||"",this.vals.main.leftBtnDisabled=!!s[1],this.vals.main.rightBtnDisabled=!!n[1],this.vals.main.leftMenu=l,this.vals.main.rightMenu=r,this.vals.main.slider=!!a[0],this.vals.main.sliderMin=a[2]||0,this.vals.main.sliderMax=a[3]||100,this.vals.main.sliderPrevent?this.vals.main.sliderCurrent===a[1]&&(this.vals.main.sliderPrevent=!1,this.vals.main.sliderCurrent=a[1]||0):this.vals.main.sliderCurrent=a[1]||0},setValues:function(){if(this.setup.main.length>0){var t=this.$fhem.handleVals(this.item,this.setup.status.bar),i=this.$fhem.handleVals(this.item,this.setup.status.error),e=this.$fhem.handleVals(this.item,this.setup.main[this.mainLevel].text),s=this.$fhem.handleVals(this.item,this.setup.main[this.mainLevel].text2),n=this.$fhem.handleVals(this.item,this.setup.main[this.mainLevel].slider),a=this.$fhem.handleVals(this.item,this.setup.main[this.mainLevel].leftBtn),l=this.$fhem.handleVals(this.item,this.setup.main[this.mainLevel].rightBtn),r=this.createMenu(this.setup.main[this.mainLevel].leftMenu),h=this.createMenu(this.setup.main[this.mainLevel].rightMenu),m=this.$fhem.handleVals(this.item,this.setup.info.left1),v=this.$fhem.handleVals(this.item,this.setup.info.left2),o=this.$fhem.handleVals(this.item,this.setup.info.mid1),c=this.$fhem.handleVals(this.item,this.setup.info.mid2),u=this.$fhem.handleVals(this.item,this.setup.info.right1),d=this.$fhem.handleVals(this.item,this.setup.info.right2);this.vals.status.level=t[0]||"0",this.vals.status.color=t[1]||"success",this.vals.status.invert=!!t[2],this.vals.info.left1Icon=m[1]||"",this.vals.info.left1Text=m[0]||"",this.vals.info.left2Icon=v[1]||"",this.vals.info.left2Text=v[0]||"",this.vals.info.mid1Icon=o[1]||"",this.vals.info.mid1Text=o[0]||"",this.vals.info.mid2Icon=c[1]||"",this.vals.info.mid2Text=c[0]||"",this.vals.info.right1Icon=u[1]||"",this.vals.info.right1Text=u[0]||"",this.vals.info.right2Icon=d[1]||"",this.vals.info.right2Text=d[0]||"",this.vals.main.text=e[0]||"",this.vals.main.text2=s[0]||"",this.vals.main.slider=!!n[0],this.vals.main.sliderMin=n[2]||0,this.vals.main.sliderMax=n[3]||100,this.vals.main.sliderPrevent?this.vals.main.sliderCurrent===n[1]&&(this.vals.main.sliderPrevent=!1,this.vals.main.sliderCurrent=n[1]||0):this.vals.main.sliderCurrent=n[1]||0,this.vals.main.leftBtn=a[0]||"",this.vals.main.rightBtn=l[0]||"",this.vals.main.leftBtnDisabled=!!a[1],this.vals.main.rightBtnDisabled=!!l[1],this.vals.main.leftMenu=r,this.vals.main.rightMenu=h,i.length>0?(this.vals.status.level=i[0]||"100",this.vals.status.color=i[1]||"error",this.vals.main.text=i[2]||"Fehler",this.isActive=!1):this.isActive=!0}}}},h=r,m=e("2877"),v=e("6544"),o=e.n(v),c=e("8336"),u=e("b0af"),d=e("99d9"),f=e("62ad"),g=e("ce7e"),p=e("132d"),_=e("8860"),b=e("da13"),C=e("5d23"),L=e("1baa"),x=e("e449"),k=e("8e36"),V=e("0fd9"),B=e("ba0d"),$=e("2fa4"),M=e("afd9"),I=Object(m["a"])(h,s,n,!1,null,null,null);i["default"]=I.exports;o()(I,{VBtn:c["a"],VCard:u["a"],VCardText:d["c"],VCardTitle:d["d"],VCol:f["a"],VDivider:g["a"],VIcon:p["a"],VList:_["a"],VListItem:b["a"],VListItemContent:C["a"],VListItemGroup:L["a"],VListItemTitle:C["c"],VMenu:x["a"],VProgressLinear:k["a"],VRow:V["a"],VSlider:B["a"],VSpacer:$["a"],VSystemBar:M["a"]})}}]);