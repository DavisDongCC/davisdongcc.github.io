webpackJsonp([7],{k7We:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Xxa5"),r=n.n(i),s=n("mvHQ"),a=n.n(s),o=n("exGp"),u=n.n(o),c=n("0xiK"),d={name:"Auth",data:function(){return{initFired:!1,repoList:[]}},created:function(){},mounted:function(){var e=this;document.addEventListener("BridgeReady",function(t){e.initFired||(e.initAuthLogic(),e.initFired=!0)})},methods:{initAuthLogic:function(){var e=this;return u()(r.a.mark(function t(){var n,i,s,o,u,d,h,l,f,p;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=Just.showLoading("检查本地登录信息"),t.next=4,Just.nativeGetKey("loginInfo");case 4:if(i=t.sent,s=void 0,!i){t.next=10;break}s=JSON.parse(i),t.next=34;break;case 10:if(o=window.location.search,u=new URLSearchParams(o),d=u.get("code")){t.next=20;break}return window.location.href="https://github.com/login/oauth/authorize?scope=repo%20user&client_id="+c.a,t.abrupt("return");case 20:return n.message="正在申请令牌",t.next=24,Just.nativeRequest({url:"https://github.com/login/oauth/access_token?client_id="+c.a+"&client_secret="+c.b+"&code="+d});case 24:return h=t.sent,l=h.access_token,f=h.token_type,h.scope,n.message="正在获取用户信息",t.next=30,Just.nativeRequest({url:"https://api.github.com/user",header:{Authorization:f+" "+l}});case 30:return p=t.sent,s={authInfo:h,userInfo:p},t.next=34,Just.nativeSetKeyValue({key:"loginInfo",value:a()(s)});case 34:e.$store.commit("setLoginInfo",s),e.$router.replace({name:"RepoList"}),t.next=41;break;case 38:t.prev=38,t.t0=t.catch(0),Just.showMessage({message:t.t0.message});case 41:return t.prev=41,Just.hideLoading(),t.finish(41);case 44:case"end":return t.stop()}},t,e,[[0,38,41,44]])}))()}}},h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{padding:"10px"}},[t("h2",[this._v("Loading...")])])}]},l=n("VU/8")(d,h,!1,null,null,null);t.default=l.exports},mvHQ:function(e,t,n){e.exports={default:n("qkKv"),__esModule:!0}},qkKv:function(e,t,n){var i=n("FeBl"),r=i.JSON||(i.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}}});