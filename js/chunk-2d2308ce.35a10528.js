(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2308ce"],{ed81:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"users"},[r("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("v-btn",e._g({staticClass:"mb-3 pa-4",attrs:{height:"100%",block:""}},a),[r("v-icon",[e._v("mdi-plus")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-form",{ref:"form"},[r("v-card-title",[r("span",{staticClass:"headline"},[e._v("User info")])]),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:e.nameRules,label:"Legal first name*",required:""},model:{value:e.formValues.firstName,callback:function(t){e.$set(e.formValues,"firstName",t)},expression:"formValues.firstName"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{rules:e.nameRules,label:"Legal middle name*",required:""},model:{value:e.formValues.lastName,callback:function(t){e.$set(e.formValues,"lastName",t)},expression:"formValues.lastName"}})],1)],1)],1),r("small",[e._v("*indicates required field")])],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.createUser}},[e._v("Save")])],1)],1)],1)],1),e._l(e.users,(function(e,t){return r("UserCard",{key:t,class:{"mt-3":t>0},attrs:{user:e}})}))],2)},s=[],o=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("25f0"),r("159b"),r("ade3")),n=r("2f62"),l=r("2957");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={components:{UserCard:l["a"]},data:function(){return{dialog:!1,formValues:{id:"",firstName:"",lastName:"",reservationTimes:[]},nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}]}},computed:i({},Object(n["d"])(["users"])),methods:i({},Object(n["c"])(["setUser"]),{createUser:function(){this.$refs.form.validate()&&(this.formValues.id="f".concat(Math.floor(1e8*Math.random()).toString(16)),this.setUser(this.formValues),this.$refs.form.reset(),this.dialog=!1)}})},d=u,f=r("2877"),m=r("6544"),b=r.n(m),v=r("8336"),p=r("b0af"),h=r("99d9"),V=r("62ad"),g=r("a523"),O=r("169a"),j=r("4bd4"),w=r("132d"),k=r("0fd9"),x=r("2fa4"),y=r("8654"),C=Object(f["a"])(d,a,s,!1,null,null,null);t["default"]=C.exports;b()(C,{VBtn:v["a"],VCard:p["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VCol:V["a"],VContainer:g["a"],VDialog:O["a"],VForm:j["a"],VIcon:w["a"],VRow:k["a"],VSpacer:x["a"],VTextField:y["a"]})}}]);
//# sourceMappingURL=chunk-2d2308ce.35a10528.js.map