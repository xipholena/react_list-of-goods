(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),s=n.n(a),i=n(3),c=n(4),l=n(6),u=n(5);function h(e){var t=e.goods;return o.a.createElement("ul",null,t.map((function(e){return o.a.createElement("li",{key:e},e)})))}n(12);var d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={goods:[].concat(d),visible:!1,isReversed:!1},e.showGoods=function(t){var n=t.target;e.setState({visible:!0}),n.hidden=!0},e.sortAlphabetically=function(){e.setState({isReversed:!1,sortBy:"alphabet"})},e.sortbyLength=function(){e.setState({isReversed:!1,sortBy:"length"})},e.reset=function(){e.setState({isReversed:!1,sortBy:"index"})},e.reverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.visible,r=t.isReversed,a=t.goods,s=t.sortBy;return a.sort((function(e,t){switch(s){case"alphabet":return e.localeCompare(t);case"length":return e.length-t.length;case"index":return d.indexOf(e)-d.indexOf(t);default:return 0}})),r&&a.reverse(),o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Goods"),o.a.createElement("button",{type:"button",onClick:function(t){e.showGoods(t)}},"Show"),n&&o.a.createElement(h,{goods:a}),o.a.createElement("button",{type:"button",onClick:this.reverse},"Reverse"),o.a.createElement("button",{type:"button",onClick:this.sortAlphabetically},"Sort alphabetically"),o.a.createElement("button",{type:"button",onClick:this.sortbyLength},"Sort by length"),o.a.createElement("button",{type:"button",onClick:this.reset},"Reset"))}}]),n}(o.a.Component);s.a.render(o.a.createElement(b,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.9975b4c7.chunk.js.map