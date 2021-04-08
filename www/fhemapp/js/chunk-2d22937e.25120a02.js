(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22937e"],{dd08:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-col",{staticClass:"col-12 col-sm-6 col-md-4 col-lg-4"},[s("v-card",{attrs:{dark:this.$vuetify.theme.dark,color:"secondary"}},[s("v-progress-linear",{attrs:{height:"7",value:e.vals.mainLevel,color:e.vals.mainColor,"background-color":"secondary darken-1"}}),s("v-card-title",{staticClass:"text-truncate"},[e._v(" "+e._s(e.vals.title)+" "),s("v-spacer"),e.app.options.debugMode?s("jsonList",{attrs:{item:e.item}}):e._e(),s("v-btn",{attrs:{small:"",icon:""},on:{click:e.expand}},[s("v-icon",{attrs:{small:""}},[e._v(" "+e._s(e.maxIcon)+" ")])],1)],1),s("v-divider"),s("v-card-text",[s("v-row",{attrs:{align:"center"}},[s("v-col",{staticClass:"col-3",attrs:{align:"center"}},[e.expanded?e._e():s("v-btn",{attrs:{icon:""},on:{click:function(t){return e.setVolume("D")}}},[s("v-icon",{attrs:{large:""}},[e._v(" "+e._s(e.leftIcon)+" ")])],1),e.expanded?s("v-btn",{attrs:{icon:"",disabled:e.prevDisabled},on:{click:function(t){return e.setPlayer("Previous")}}},[s("v-icon",{attrs:{large:""}},[e._v(" "+e._s(e.prevIcon)+" ")])],1):e._e()],1),s("v-divider",{attrs:{vertical:""}}),s("v-col",{attrs:{align:"center"}},[s("v-btn",{attrs:{icon:""},on:{click:function(t){return e.setPlay()}}},[s("v-icon",{attrs:{large:""}},[e._v(" "+e._s(e.playIcon)+" ")])],1)],1),s("v-divider",{attrs:{vertical:""}}),s("v-col",{staticClass:"col-3",attrs:{align:"center"}},[e.expanded?e._e():s("v-btn",{attrs:{icon:""},on:{click:function(t){return e.setVolume("U")}}},[s("v-icon",{attrs:{large:""}},[e._v(" "+e._s(e.rightIcon)+" ")])],1),e.expanded?s("v-btn",{attrs:{icon:"",disabled:e.nextDisabled},on:{click:function(t){return e.setPlayer("Next")}}},[s("v-icon",{attrs:{large:""}},[e._v(" "+e._s(e.nextIcon)+" ")])],1):e._e()],1)],1)],1),e.expanded?s("v-divider"):e._e(),e.expanded?s("v-card-text",[s("v-row",{attrs:{align:"center"}},[s("v-col",[s("v-slider",{attrs:{"hide-details":"",color:"accent"},on:{change:e.setVolume},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("v-icon",{on:{click:function(t){return e.setMute()}}},[e._v(" "+e._s(e.volumeIcon)+" ")])]},proxy:!0}],null,!1,4048868738),model:{value:e.vals.volume,callback:function(t){e.$set(e.vals,"volume",t)},expression:"vals.volume"}})],1)],1),s("v-row",{attrs:{align:"center"}},[s("v-col",{staticClass:"col-4"}),s("v-col",{staticClass:"col-4 text-h6",attrs:{align:"center"}},[e._v(" "+e._s(e.vals.trackPosition)+" ")]),s("v-col",{staticClass:"col-4",attrs:{align:"center"}},[e._v(" "+e._s(e.vals.tracks)+" ")])],1)],1):e._e(),e.expanded&&e.vals.zones.length>0?s("v-divider"):e._e(),e.expanded&&e.vals.zones.length>0?s("v-card-text",[s("v-row",[s("v-col",e._l(e.vals.zones,(function(t){return s("span",{key:t},[s("v-chip",{staticClass:"mr-2",attrs:{small:""}},[e._v(e._s(t))])],1)})),0)],1)],1):e._e(),s("v-divider"),s("v-system-bar",{attrs:{color:"secondary darken-1"}},[s("v-icon",[e._v(e._s(e.vals.systemIcon))]),s("span",{staticClass:"text-truncate"},[e._v(e._s(e.vals.systemIconValue))])],1)],1)],1)},n=[],i=(s("4de4"),s("1276"),s("ac1f"),s("649b")),l={components:{jsonList:i["a"]},props:{item:{type:Object,default:function(){return{name:"sonos"}}}},data:function(){return{name:"sonos",app:{options:{debugMode:!1}},defaultSet:["Volume:^[0]$:stumm::success:mdi-volume-off","transportState:PLAYING:an:100:success:mdi-play","transportState::aus:0:success:mdi-pause"],vals:{title:"",mainState:"",mainLevel:0,mainColor:"",play:!1,volume:0,volumeChanged:!1,mute:!1,trackPosition:"",zones:[],tracks:"",playInfo1:"",playInfo2:"",systemIcon:"",systemIconValue:""},leftIcon:"mdi-minus",playIcon:"mdi-play",rightIcon:"mdi-plus",maxIcon:"mdi-arrow-expand",expanded:!1,prevIcon:"mdi-skip-previous",prevDisabled:!0,nextIcon:"mdi-skip-next",nextDisabled:!0,volumeIcon:"mdi-volume-high",pendingClick:0}},watch:{item:{immediate:!0,deep:!0,handler:function(e){var t=this.$fhem.getEl(e,"Readings","transportState","Value"),s=this.$fhem.getEl(e,"Readings","nextTrackHandle","Value")||"|",a=this.$fhem.getEl(e,"Readings","Volume","Value"),n=this.$fhem.getEl(e,"Readings","Mute","Value"),i=this.$fhem.getEl(e,"Readings","currentStreamAudio","Value"),l=this.$fhem.getEl(e,"Readings","currentSender","Value"),o=this.$fhem.getEl(e,"Readings","currentSenderInfo","Value"),r=this.$fhem.getEl(e,"Readings","currentAlbum","Value"),c=this.$fhem.getEl(e,"Readings","currentArtist","Value"),d=this.$fhem.getEl(e,"Readings","currentTitle","Value"),v=this.$fhem.getEl(e,"Readings","currentTrack","Value"),u=this.$fhem.getEl(e,"Readings","numberOfTracks","Value"),m=this.$fhem.getEl(e,"Readings","ZoneGroupNameDetails","Value"),h=this.$fhem.getEl(e,"Attributes","alias")||e.Name;this.vals.title=this.$fhem.getEl(e,"Options","name")||h,this.vals=this.$fhem.handleStates(e,this.vals,this.defaultSet),m&&(this.vals.title+=" (gruppiert)"),this.vals.zones=m.split(" + ").filter(Boolean),this.prevDisabled=!(s.split("|")[0].length>0),this.nextDisabled=!(s.split("|")[1].length>0),this.vals.trackPosition=this.$fhem.getEl(e,"Readings","currentTrackPositionSimulated","Value"),this.vals.volumeChanged&&this.vals.volume===parseInt(a)&&(this.vals.volumeChanged=!1),this.vals.volumeChanged||(this.vals.volume=parseInt(a)),this.vals.mute="1"===n,this.volumeIcon=this.vals.mute?"mdi-volume-mute":"mdi-volume-high",r+=c?" ("+c+")":"",this.vals.playInfo1="1"===i?l:r,this.vals.playInfo2="1"===i?o:d,this.vals.systemIconValue||(this.vals.systemIconValue=this.vals.playInfo1),this.vals.tracks="0"===i?v+" von "+u:"",this.vals.play="PLAYING"===t,this.playIcon=this.vals.play?"mdi-pause":"mdi-play"}}},mounted:function(){var e=this;this.app.options=this.$fhem.app.options,setInterval((function(){e.vals.systemIconValue=e.vals.systemIconValue===e.vals.playInfo1?e.vals.playInfo2:e.vals.playInfo1}),3e3)},methods:{sendCmd:function(e,t){var s=this;t?(this.pendingClick&&(clearTimeout(this.pendingClick),this.pendingClick=0),this.pendingClick=setTimeout((function(){s.$fhem.request(e)}),1e3)):this.$fhem.request(e)},setVolume:function(e){this.vals.volumeChanged=!0;var t=this.vals.zones.length>0?" GroupVolume":" Volume";"D"!=e&&"U"!=e&&(e=" "+e);var s="set "+this.item.Name+t+e;this.sendCmd(s)},setPlayer:function(e){var t="set "+this.item.Name+" "+e;this.sendCmd(t)},setPlay:function(){var e="set "+this.item.Name+(this.vals.play?" Pause":" Play");this.sendCmd(e)},setMute:function(){var e="set "+this.item.Name+(this.vals.mute?" Mute 0":" Mute 1");this.sendCmd(e)},expand:function(){this.expanded?(this.expanded=!1,this.maxIcon="mdi-arrow-expand"):(this.expanded=!0,this.maxIcon="mdi-arrow-collapse")}}},o=l,r=s("2877"),c=s("6544"),d=s.n(c),v=s("8336"),u=s("b0af"),m=s("99d9"),h=s("cc20"),p=s("62ad"),g=s("ce7e"),f=s("132d"),y=s("8e36"),I=s("0fd9"),V=s("ba0d"),_=s("2fa4"),x=s("afd9"),k=Object(r["a"])(o,a,n,!1,null,null,null);t["default"]=k.exports;d()(k,{VBtn:v["a"],VCard:u["a"],VCardText:m["c"],VCardTitle:m["d"],VChip:h["a"],VCol:p["a"],VDivider:g["a"],VIcon:f["a"],VProgressLinear:y["a"],VRow:I["a"],VSlider:V["a"],VSpacer:_["a"],VSystemBar:x["a"]})}}]);