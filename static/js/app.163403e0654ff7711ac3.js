webpackJsonp([2,0],{0:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var u=s(188),r=n(u),a=s(187),i=n(a),o=s(179),l=n(o),c=s(135),d=n(c);r.default.use(i.default);var f=new i.default({routes:d.default});new r.default({router:f,template:"<App/>",components:{App:l.default}}).$mount("#app")},11:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=s(137),r=n(u),a=s(138),i=n(a),o=s(7),l=n(o),c=s(18),d=n(c),f=s(19),m=n(f),v=s(1),p=n(v),h={data:"./static/uva.data"},j=[["Accepted","AC",18,90,"green"],["Presentation Error","PE",17,80,"olive"],["Wrong Answer","WA",16,70,"red"],["Compilation Error","CE",10,30,"yellow"],["Runtime Error","RE",12,40,"teal"],["Time Limit Exceeded","TLE",14,50,"blue"],["Output Limit Exceeded","OLE",13,45,"purple"],["Memory Limit Exceeded","MLE",15,60,"violet"],["Restricted Function","RF",11,35,"pink"],["Submission Error","SE",7,10,"black"],["Can't be Judged","NJ",8,15,"brown"],["In Queue","InQ",9,20,"gray"]],b=l.default.keyBy(j,function(t){return t[3]}),g=[void 0,"ANSI C","Java","C++","Pascal","C++11"],_=function(){function t(e){(0,r.default)(this,t),this.data=e||[],this.info=b[this.getVer()]||[]}return(0,i.default)(t,[{key:"getData",value:function(){return this.data}},{key:"getId",value:function(){return this.data[0]}},{key:"getProbId",value:function(){return this.data[1]}},{key:"getVer",value:function(){return this.data[2]}},{key:"getRuntime",value:function(){return this.data[3]}},{key:"getTime",value:function(){return p.default.unix(this.data[4])}},{key:"getLang",value:function(){return g[this.data[5]]||"unknown"}},{key:"getRank",value:function(){return this.data[6]}},{key:"getFullStatus",value:function(){return this.info[0]||"unknown"}},{key:"getStatus",value:function(){return this.info[1]||"unknown"}},{key:"getColor",value:function(){return this.info[4]||"basic"}}]),t}(),y=(new _(Array(6)),function(){function t(e,s){(0,r.default)(this,t),this.id=e,this.prob=s,this.info=[]}return(0,i.default)(t,[{key:"registerSubmissions",value:function(t){this.subs=t;var e=l.default.countBy(t,function(t){return t.getVer()});return this.info=l.default.chain(j).find(function(t){return e[t[3]]}).value(),this}},{key:"getData",value:function(){return this.prob}},{key:"getId",value:function(){return this.prob[0]}},{key:"getNum",value:function(){return this.prob[1]}},{key:"getHeader",value:function(){return this.prob[2]}},{key:"getIdNum",value:function(){return this.prob.slice(0,2)}},{key:"getSubs",value:function(){return this.subs}},{key:"getSubsProbId",value:function(){return l.default.map(this.subs,function(t){return t.getProbId()})}},{key:"getSubsVer",value:function(){return l.default.map(this.subs,function(t){return t.getVer()})}},{key:"getColor",value:function(){return this.info[4]||"basic"}},{key:"getTrans",value:function(){return this.trans||[]}},{key:"getStats",value:function(){var t=this;return j.map(function(e){return{label:e[1],color:e[4],count:t.prob[e[2]]}})}}]),t}()),k=function(){function t(){(0,r.default)(this,t)}return(0,i.default)(t,null,[{key:"getId",value:function(t){return t.prob[0]}},{key:"getNum",value:function(t){return t.prob[1]}},{key:"getHeader",value:function(t){return t.prob[2]}},{key:"getIdNum",value:function(t){return t.prob.slice(0,2)}}]),t}(),C=function(t){return d.default.getJSON("http://uhunt.felix-halim.net/api"+t)},w=function(t){return d.default.get(t).then(function(t){return m.default.load(t)})};e.default={util:k,config:h,$:{uva:C,getYaml:w},Submission:_,Problem:y}},131:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=s(7),r=n(u),a=s(18),i=n(a),o=s(19),l=n(o),c=s(11),d=n(c);window._=r.default,window.$=window.jQuery=i.default,window.uhunt=d.default,window.yaml=l.default,s(153),s(178),e.default={name:"app",data:function(){return{username:void 0,userid:0,user:{subs:[]},asset:{problem:[],submission:[],translate:{}}}},created:function(){var t=this;"undefined"!==localStorage.username&&(t.username=localStorage.username),d.default.$.uva("/p").then(function(e){t.asset.problem=e}),d.default.$.getYaml(d.default.config.data+"/translate/translate.yml").then(function(e){t.asset.translate=e})},computed:{store:function(){var t=this,e=t.asset,s=r.default.map(e.problem,function(t,e){return new d.default.Problem(e,t)});s.length>0&&(s=r.default.chain(s).keyBy(function(t){return t.getId()}).mergeWith(r.default.chain(e.submission).map(function(t){return new d.default.Submission(t)}).groupBy(function(t){return t.getProbId()}).mapValues(function(t){return t.sort(function(t,e){return e.getId()-t.getId()})}).value(),function(t,e){return t.registerSubmissions(e)}).values().value(),s=r.default.chain(s).keyBy(function(t){return d.default.util.getNum(t)}).mergeWith(r.default.chain(e.translate).flatMap(function(t,e){return r.default.map(t.trans,function(s,n){return{num:r.default.isArray(t.trans)?s:n,type:e,link:t.site+s}})}).groupBy(function(t){return t.num}).value(),function(t,e){return r.default.assign(t,{trans:e})}).values().value()),window.console.log("data",s);var n=r.default.chain(s).map(function(t){return d.default.util.getIdNum(t)}),u={id:r.default.keyBy(s,function(t){return d.default.util.getId(t)}),num:r.default.keyBy(s,function(t){return d.default.util.getNum(t)}),volume:r.default.groupBy(s,function(t){return Math.floor(d.default.util.getNum(t)/100)}),id2num:n.fromPairs().value(),num2id:n.reverse().fromPairs().value()};return{data:s,category:u}}},watch:{username:function(t){var e=this;return"undefined"==typeof t?void(e.userid=0):void d.default.$.uva("/uname2uid/"+e.username).then(function(t){e.userid=t})},userid:function(t){if(0!==t){var e=this;d.default.$.uva("/subs-user/"+e.userid).then(function(t){e.user=t,e.asset.submission=t.subs})}}}}},132:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=s(7),r=(n(u),s(181)),a=n(r);e.default={name:"index",props:["store"],components:{ProbDot:a.default},computed:{volumes:function(){return this.store.category.volume}}}},133:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=s(7),r=n(u),a=s(11),i=n(a);e.default={name:"prob-dot",props:["item"],computed:{probNum:function(){return r.default.padStart(i.default.util.getNum(this.item)%100,2,"0")}}}},134:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=s(7),r=n(u),a=s(1),i=(n(a),s(11)),o=n(i);e.default={name:"prob-name",props:["store","userid"],data:function(){return{setting:o.default}},computed:{problem:function(){var t=this;return t.store.category.num[t.$route.params.num]},subs:function(){var t=this;o.default.util.getId(t.problem);return r.default.chain(t.problem.getSubs()).map(function(t){return{status:t.getStatus(),color:t.getColor(),rank:t.getRank(),others:[["hourglass full",t.getRuntime()+" ms"],["code",t.getLang()],["time",t.getTime().format("YYYY/MM/DD HH:mm:ss")]]}}).value()},stats:function(){var t=this;return t.problem.getStats()},trans:function(){var t=this;return t.problem.getTrans()}}}},135:function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=s(180),r=n(u),a=s(182),i=n(a);e.default=[{path:"/",component:r.default},{path:"/problem/:num",component:i.default}]},153:function(t,e){},154:function(t,e){},177:function(t,e,s){function n(t){return s(u(t))}function u(t){return r[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var r={"./af":22,"./af.js":22,"./ar":28,"./ar-dz":23,"./ar-dz.js":23,"./ar-ly":24,"./ar-ly.js":24,"./ar-ma":25,"./ar-ma.js":25,"./ar-sa":26,"./ar-sa.js":26,"./ar-tn":27,"./ar-tn.js":27,"./ar.js":28,"./az":29,"./az.js":29,"./be":30,"./be.js":30,"./bg":31,"./bg.js":31,"./bn":32,"./bn.js":32,"./bo":33,"./bo.js":33,"./br":34,"./br.js":34,"./bs":35,"./bs.js":35,"./ca":36,"./ca.js":36,"./cs":37,"./cs.js":37,"./cv":38,"./cv.js":38,"./cy":39,"./cy.js":39,"./da":40,"./da.js":40,"./de":42,"./de-at":41,"./de-at.js":41,"./de.js":42,"./dv":43,"./dv.js":43,"./el":44,"./el.js":44,"./en-au":45,"./en-au.js":45,"./en-ca":46,"./en-ca.js":46,"./en-gb":47,"./en-gb.js":47,"./en-ie":48,"./en-ie.js":48,"./en-nz":49,"./en-nz.js":49,"./eo":50,"./eo.js":50,"./es":52,"./es-do":51,"./es-do.js":51,"./es.js":52,"./et":53,"./et.js":53,"./eu":54,"./eu.js":54,"./fa":55,"./fa.js":55,"./fi":56,"./fi.js":56,"./fo":57,"./fo.js":57,"./fr":60,"./fr-ca":58,"./fr-ca.js":58,"./fr-ch":59,"./fr-ch.js":59,"./fr.js":60,"./fy":61,"./fy.js":61,"./gd":62,"./gd.js":62,"./gl":63,"./gl.js":63,"./he":64,"./he.js":64,"./hi":65,"./hi.js":65,"./hr":66,"./hr.js":66,"./hu":67,"./hu.js":67,"./hy-am":68,"./hy-am.js":68,"./id":69,"./id.js":69,"./is":70,"./is.js":70,"./it":71,"./it.js":71,"./ja":72,"./ja.js":72,"./jv":73,"./jv.js":73,"./ka":74,"./ka.js":74,"./kk":75,"./kk.js":75,"./km":76,"./km.js":76,"./ko":77,"./ko.js":77,"./ky":78,"./ky.js":78,"./lb":79,"./lb.js":79,"./lo":80,"./lo.js":80,"./lt":81,"./lt.js":81,"./lv":82,"./lv.js":82,"./me":83,"./me.js":83,"./mi":84,"./mi.js":84,"./mk":85,"./mk.js":85,"./ml":86,"./ml.js":86,"./mr":87,"./mr.js":87,"./ms":89,"./ms-my":88,"./ms-my.js":88,"./ms.js":89,"./my":90,"./my.js":90,"./nb":91,"./nb.js":91,"./ne":92,"./ne.js":92,"./nl":94,"./nl-be":93,"./nl-be.js":93,"./nl.js":94,"./nn":95,"./nn.js":95,"./pa-in":96,"./pa-in.js":96,"./pl":97,"./pl.js":97,"./pt":99,"./pt-br":98,"./pt-br.js":98,"./pt.js":99,"./ro":100,"./ro.js":100,"./ru":101,"./ru.js":101,"./se":102,"./se.js":102,"./si":103,"./si.js":103,"./sk":104,"./sk.js":104,"./sl":105,"./sl.js":105,"./sq":106,"./sq.js":106,"./sr":108,"./sr-cyrl":107,"./sr-cyrl.js":107,"./sr.js":108,"./ss":109,"./ss.js":109,"./sv":110,"./sv.js":110,"./sw":111,"./sw.js":111,"./ta":112,"./ta.js":112,"./te":113,"./te.js":113,"./tet":114,"./tet.js":114,"./th":115,"./th.js":115,"./tl-ph":116,"./tl-ph.js":116,"./tlh":117,"./tlh.js":117,"./tr":118,"./tr.js":118,"./tzl":119,"./tzl.js":119,"./tzm":121,"./tzm-latn":120,"./tzm-latn.js":120,"./tzm.js":121,"./uk":122,"./uk.js":122,"./uz":123,"./uz.js":123,"./vi":124,"./vi.js":124,"./x-pseudo":125,"./x-pseudo.js":125,"./yo":126,"./yo.js":126,"./zh-cn":127,"./zh-cn.js":127,"./zh-hk":128,"./zh-hk.js":128,"./zh-tw":129,"./zh-tw.js":129};n.keys=function(){return Object.keys(r)},n.resolve=u,t.exports=n,n.id=177},179:function(t,e,s){s(154);var n=s(10)(s(131),s(183),null,null);t.exports=n.exports},180:function(t,e,s){var n=s(10)(s(132),s(186),null,null);t.exports=n.exports},181:function(t,e,s){var n=s(10)(s(133),s(185),null,null);t.exports=n.exports},182:function(t,e,s){var n=s(10)(s(134),s(184),null,null);t.exports=n.exports},183:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui centered grid",attrs:{id:"app"}},[s("nav",{staticClass:"ui top fixed labeled icon menu"},[s("router-link",{staticClass:"item",attrs:{to:"/"}},[s("i",{staticClass:"home icon"}),t._v("\n      主頁\n    ")]),t._v(" "),s("div",{staticClass:"right menu"},[s("div",{staticClass:"item"},[s("div",{staticClass:"ui transparent icon input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),s("i",{staticClass:"user icon"})])])])],1),t._v(" "),s("div",{staticClass:"fourteen wide column",attrs:{id:"content"}},[s("router-view",{attrs:{store:t.store,userid:t.userid}})],1)])},staticRenderFns:[]}},184:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"probpage"}},[s("header",{staticClass:"ui huge header"},[s("div",{staticClass:"content"},[t._v("\r\n      UVa "+t._s(t.$route.params.num)+"\r\n      "),t.problem?s("div",{staticClass:"sub header"},[t._v(t._s(t.setting.util.getHeader(t.problem)))]):t._e()])]),t._v(" "),t.trans.length>0?s("h3",{staticClass:"ui header"},[s("i",{staticClass:"coffee icon"}),t._v(" "),t._m(0)]):t._e(),t._v(" "),t.trans.length>0?s("article",t._l(t.trans,function(e){return s("a",{staticClass:"ui primary button",attrs:{target:"_blank",href:e.link}},[t._v(t._s(e.type))])})):t._e(),t._v(" "),t.userid?s("h3",{staticClass:"ui header"},[s("i",{staticClass:"user icon"}),t._v(" "),t._m(1)]):t._e(),t._v(" "),t.userid?s("article",[t.subs.length>0?s("div",{staticClass:"ui stackable doubling six column grid"},t._l(t.subs,function(e){return s("div",{staticClass:"column"},[s("section",{staticClass:"ui segment"},[s("div",{class:"ui "+e.color+" statistic"},[s("div",{staticClass:"value"},[t._v(t._s(e.status))])]),t._v(" "),s("div",{staticClass:"ui list"},[e.rank>0?s("div",{staticClass:"item"},[s("i",{staticClass:"star icon"}),t._v(" "),s("div",{staticClass:"content"},[t._v(t._s(e.rank))])]):t._e(),t._v(" "),t._l(e.others,function(e){return s("div",{staticClass:"item"},[s("i",{class:e[0]+" icon"}),t._v(" "),s("div",{staticClass:"content"},[t._v(t._s(e[1]))])])})],2)])])})):s("div",[s("div",{staticClass:"column"},[t._v("沒有上傳紀錄。")])])]):t._e(),t._v(" "),t._m(2),t._v(" "),t.problem?s("article",{staticClass:"ui statistics"},t._l(t.stats,function(e){return s("div",{class:e.color+" statistic"},[s("div",{staticClass:"value"},[t._v(t._s(e.count))]),t._v(" "),s("div",{staticClass:"label"},[t._v(t._s(e.label))])])})):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._v("\r\n      翻譯\r\n      "),s("div",{staticClass:"sub header"},[t._v("Translates")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._v("\r\n      使用者狀態\r\n      "),s("div",{staticClass:"sub header"},[t._v("User Status")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{staticClass:"ui header"},[s("i",{staticClass:"bar chart icon"}),t._v(" "),s("div",{staticClass:"content"},[t._v("\r\n      統計"),s("div",{staticClass:"sub header"},[t._v("Statistics")])])])}]}},185:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{class:"ui "+t.item.getColor()+" label",attrs:{to:"/problem/"+t.item.getNum(),id:"probdot"}},[t.item.getTrans().length>0?s("i",{staticClass:"coffee icon"}):t._e(),t._v(t._s(t.probNum)+"\r\n")])},staticRenderFns:[]}},186:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"ui stackable doubling two column grid",attrs:{id:"index"}},t._l(t.volumes,function(e,n){return s("article",{staticClass:"column"},[s("header",{staticClass:"ui top attached segment"},[s("h2",{staticClass:"header"},[t._v("Volume "+t._s(n))])]),t._v(" "),s("div",{staticClass:"ui bottom attached segment circular labels"},t._l(e,function(t){return s("prob-dot",{attrs:{item:t}})}))])}))},staticRenderFns:[]}}});
//# sourceMappingURL=app.163403e0654ff7711ac3.js.map