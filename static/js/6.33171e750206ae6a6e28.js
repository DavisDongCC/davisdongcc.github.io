webpackJsonp([6],{"I/4Y":function(t,n){},c78J:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFBklEQVR4Xu2aV6gcVRzGv+9F8UEQXwQFFUTF8q4oCApKVPAtsbfYYiNGjIoFxULsir3GiL2jUVLURGxYsBeiEXtBDRbsBT/55Awclpmdmd05s7N77x8ul7t7Zu78fud/zpxGTPHgFOfHtIDpDJjiBqabwLglgKR9AOwF4C0Ai0m+OwzDWGWApLMAnB0BfwBgFsk3B5UwNgIknQngnBzQLwDsRPLjQSSMhQBJZwA4tw/g9wA2J+nftaLzAiSdDuC8iOp+AHNd6wDuiT7/A8C6JP+pY6DTAiSdBuD8GJ7krOxvSfMBXBRLILnORAiQdCqABUXwkQR3iu4cs1hFcquqEjqZAZJOAXBBGXwkoTdTlpLcvYqEzgmQdDKAC6vCRxLmALiu7nWdEpDTps2zN8n7qtRmTrNZSPKwftd2RoCkkwBcHD2sR3jbhL8PJHlHRQnOAmdDFn49flh0bScESDoRwKU98O7t/ZN1cLNJ3tpPgqTtALwYlfFQ2cPmwhi5AEnzAFzWC0/yPX8mKe7l55C8IY9G0tYA4nmBr/cwue9cYaQCJJ0A4PIi+KiDiyXMJXllLCEHfhWAmSTfKWs2IxMgyaO5K8rgCyTMJ3lJyBDX/OsA1gpl3w/wb5fB+/uRCJB0PIC4Fp2mTtf/074oepqD5wcPA1gCYONwTe3ZYesCJB0H4KqqNd8ro0dC/KZYHSS+UaXmszKtCpB0LICrB4UvaA7+2K85Z5CbQq1oTYCkYwBc0wC827wHRtkY4aPQ5l+rRR4KtyJA0tEArk0A70UQ9/avDgLfSico6SgA1yeA/ySk/SuDwicXIOlIAPHApVJvn9Px9ab9pwH+5WHgkwqQdASAGxPU/Och7V8aFj6ZAEmHA7gpAbwXQN3m4/H+UB4a7wQlzQZwSwL4L0PavzAUcc/FjQqQdCiAhQngvwrwzzcJ32gTkHQIgHi62lSH93WAf65p+MYESDoYwKIENf9NaPPPpoBvRICkgwDclgD+2wD/TCr4oQVIOgDA7Qngvwtp/3RK+KEESNofQLxO11SbXxPgV6aGH1iApP0A3Jmg5r235/f8ijbgBxIgaV8AdyWA/yHAP9UWfG0B4XDC3QngfwzwT7YJX0uAJC9R35sA/qfQ5pe3DV9ZgKSZYREie8amOryfQ80vGwV8JQGS1gfgBYdNw0M2Bf9LgF86KviqAnwoKWv3TcH/GuC9ojvSKJ0MSfLkxpMcxwKS3oquHGHTIl7D+y20+ccr3yRhwSoCPA3dMDzDriQr99Q58L8H+McSMtW6dV8Bkryx+Ei442ckN6l69xz4P0PaL656jzbKlQnwMraXsx2LSGZNoe+z5cD/FeAfbQOqzv8oE+ANh83CDSvt0efA/x3gs0yq83zJyxYKkLQjgGwRwhAbkPRwtTBy4H1kzTs23sPrZPQT4HM6Pq/jWEZyRgn89gBujnZs/g01/1AnycND9RPg7eVtQ7l5JOOtbB9cWBvAHgB2BrBLBO5LFOAf7DK8ny1XgKQtAfiQQRZbkFwtaSMAewLYLYB7lJgXntI+0HX4fgLio2rebvbxVIPv0AfKGxaex/ttkXwlpym5RRngzs+dYFl4g8IrNytJPlFWuIvfFwlwG84Lz9tdyx4NLiHpDcqxjiIBXt/3Or/DnaFnbD5+2tpSVVtWiwSsF6a/a0h6P25io3QyNLHkAWxawKTXcBnfdAaUGZr076d8BvwHEV06X51bxDEAAAAASUVORK5CYII="},rkD5:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var c={name:"Account",components:{},data:function(){return{accountInfo:{}}},created:function(){},mounted:function(){this.accountInfo=this.$store.getters.userInfo},computed:{createdTime:function(){return new Date(this.accountInfo.created_at).Format("yyyy-MM-dd hh:mm:ss")}},methods:{handleEdit:function(){this.$router.push({name:"AccountEdit",params:{accountInfo:this.accountInfo}})},handleClearAuthInfo:function(){Just.confirm({title:"提示",message:"确定要清除登录信息吗？",confirmButtonText:"清空",cancelButtonText:"再想想",onConfirm:function(){Just.logout().finally(function(){})},onCancel:function(){}})}}},o={render:function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("div",{staticClass:"account"},[c("Header",{attrs:{title:"Me",rightIcon:a("c78J")},on:{onRightClicked:t.handleEdit}}),t._v(" "),c("div",{staticClass:"account-content"},[c("img",{staticClass:"account-content-avatar",attrs:{src:t.accountInfo.avatar_url}}),t._v(" "),c("span",{staticClass:"account-content-login"},[t._v(t._s(t.accountInfo.login))]),t._v(" "),c("van-cell-group",[c("van-cell",{attrs:{title:"Name",value:t.accountInfo.name}}),t._v(" "),c("van-cell",{attrs:{title:"Email",value:t.accountInfo.email}}),t._v(" "),c("van-cell",{attrs:{title:"Company",value:t.accountInfo.company}}),t._v(" "),c("van-cell",{attrs:{title:"Location",value:t.accountInfo.location}}),t._v(" "),c("van-cell",{attrs:{title:"Follower",value:t.accountInfo.followers}}),t._v(" "),c("van-cell",{attrs:{title:"Following",value:t.accountInfo.following}}),t._v(" "),c("van-cell",{attrs:{title:"CreatedAt",value:t.createdTime}}),t._v(" "),c("van-cell",{attrs:{title:"Bio",value:t.accountInfo.bio}})],1)],1),t._v(" "),c("van-button",{staticClass:"account-content-logout",attrs:{type:"danger",size:"large"},on:{click:function(n){return t.handleClearAuthInfo()}}},[t._v("清除登录信息")])],1)},staticRenderFns:[]};var e=a("VU/8")(c,o,!1,function(t){a("I/4Y")},null,null);n.default=e.exports}});