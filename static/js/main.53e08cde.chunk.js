(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,n){t.exports={App:"App_App__1i6ts",App__title:"App_App__title__1yZy8"}},11:function(t,e,n){t.exports={options:"FeedbackOptions_options__2u1wM",options__button:"FeedbackOptions_options__button__2LXQP"}},12:function(t,e,n){t.exports={section:"Section_section__Ejgun",section__title:"Section_section__title__3ghXu"}},14:function(t,e,n){},17:function(t,e,n){t.exports={feedback:"Feedback_feedback__3v_Y0"}},22:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),i=n(15),a=n.n(i),o=(n(22),n(2)),r=n(3),u=n(5),l=n(4),b=n(10),j=n.n(b),_=n(16),d=n(17),p=n.n(d),h=n(6),O=n(11),f=n.n(O),m=n(0),v=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.options,n=t.onIncrement;return Object(m.jsx)("div",{className:f.a.options,children:e.map((function(t){return Object(m.jsx)("button",{onClick:n,className:f.a.options__button,children:t},Object(h.generate)())}))})}}]),n}(c.Component),k=v,x=n(7),g=n.n(x),y=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.stats,n=t.values,c=t.onCountTotal,s=t.onCountPositive;return Object(m.jsx)("div",{className:g.a.statistics,children:Object(m.jsxs)("ul",{className:g.a.statistics__list,children:[e.map((function(t){return Object(m.jsxs)("li",{className:g.a.statistics__item,children:[t,": ",n[t]]},Object(h.generate)())})),Object(m.jsxs)("li",{className:g.a.statistics__item,children:["Total: ",c()]},Object(h.generate)()),Object(m.jsxs)("li",{className:g.a.statistics__item,children:["Positive Feedback: ",s(),"%"]},Object(h.generate)())]})})}}]),n}(c.Component),N=y,F=n(12),A=n.n(F),C=n(13),P=n.n(C);function T(t){var e=t.title,n=t.children;return Object(m.jsxs)("section",{className:A.a.section,children:[Object(m.jsx)("h2",{className:A.a.section__title,children:e}),n]})}T.prototype={title:P.a.string.isRequired,children:P.a.element.isRequired};var S=n(14),w=n.n(S);function I(t){var e=t.message;return Object(m.jsx)("div",{className:w.a.notification,children:Object(m.jsx)("p",{className:w.a.notification__message,children:e})})}var M=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={good:0,neutral:0,bad:0},t.handleIncrement=function(e){var n=e.currentTarget.textContent;t.setState((function(t){return Object(_.a)({},n,t[n]+1)}))},t.countTotalFeedback=function(){return Object.keys(t.state).reduce((function(e,n){return e+t.state[n]}),0)},t.countPositiveFeedbackPercentage=function(){var e=t.countTotalFeedback();return e?Math.floor(100*t.state.good/e):0},t}return Object(r.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:p.a.feedback,children:[Object(m.jsx)(T,{title:"Please leave your feedback",children:Object(m.jsx)(k,{options:Object.keys(this.state),onIncrement:this.handleIncrement})}),Object(m.jsx)(T,{title:"Statistics",children:this.countTotalFeedback()?Object(m.jsx)(N,{stats:Object.keys(this.state),values:this.state,onCountTotal:this.countTotalFeedback,onCountPositive:this.countPositiveFeedbackPercentage}):Object(m.jsx)(I,{message:"No feedback given"})})]})}}]),n}(c.Component),q=M,E=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:j.a.App,children:[Object(m.jsx)("h1",{className:j.a.App__title,children:"Feedback"}),Object(m.jsx)(q,{})]})}}]),n}(c.Component),J=E;a.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(J,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={statistics__list:"Statistics_statistics__list__Du3c1",statistics__item:"Statistics_statistics__item__2fs0A"}}},[[34,1,2]]]);
//# sourceMappingURL=main.53e08cde.chunk.js.map