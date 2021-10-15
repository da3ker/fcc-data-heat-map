(this["webpackJsonpfcc-data-heat-map-project"]=this["webpackJsonpfcc-data-heat-map-project"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n.n(r),c=n(6),i=n.n(c),s=(n(12),n(4)),l=n.n(s),o=n(7),d=n(5),u=n(1),h=(n(14),n(0));var j=function(){var t,e,n,a,c=Object(r.useState)(""),i=Object(d.a)(c,2),s=i[0],j=i[1],b=Object(r.useState)([]),x=Object(d.a)(b,2),f=x[0],m=x[1];Object(r.useEffect)((function(){function t(){return(t=Object(o.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,m(n.monthlyVariance),j(n.baseTemperature),console.log(n.monthlyVariance),console.log(n.baseTemperature);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var p=1200,y=550,O=80,g=u.select("#canvas");g.attr("width",p),g.attr("height",y);var v=u.select("#tooltip");return Object(r.useEffect)((function(){n=u.min(f,(function(t){return t.year})),a=u.max(f,(function(t){return t.year})),t=u.scaleLinear().domain([n,a+1]).range([O,1120]),e=u.scaleTime().domain([new Date(0,0,0,0,0,0,0),new Date(0,12,0,0,0,0,0)]).range([O,470]),g.selectAll("rect").data(f).enter().append("rect").attr("class","cell").attr("fill",(function(t){var e=t.variance;return e<=-1?"#4795FF":e<=0?"#47E3FF":e<=1?"#FFBF47":"#FEFF47"})).attr("data-year",(function(t){return t.year})).attr("data-month",(function(t){return t.month-1})).attr("data-temp",(function(t){return s+t.variance})).attr("height",32.5).attr("y",(function(t){return e(new Date(0,t.month-1,0,0,0,0,0))})).attr("width",(function(t){return 1040/(a-n)})).attr("x",(function(e){return t(e.year)})).on("mouseover",(function(t){v.transition().duration(100).style("visibility","visible"),v.html(t.year+" - "+["January","February","March","April","May","June","July","August","September","October","November","December"][t.month-1]+"<br/>"+u.format("+.1f")(s+t.variance)+"&#8451; <br/>"+u.format("+.1f")(t.variance)+"&#8451;"),v.style("left",u.event.pageX+20+"px").style("top",u.event.pageY-20+"px"),v.attr("data-year",t.year)})).on("mouseout",(function(t){v.transition().duration(100).style("visibility","hidden")})),function(){var n=u.axisBottom(t).tickFormat(u.format("d")),r=u.axisLeft(e).tickFormat(u.timeFormat("%B"));g.append("g").call(n).attr("id","x-axis").attr("transform","translate(0, 470)"),g.append("g").call(r).attr("id","y-axis").attr("transform","translate(80, 0)")}()}),[s]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{id:"title",children:"Monthly Global Land-Surface Temperature"}),Object(h.jsxs)("div",{id:"container",children:[Object(h.jsx)("svg",{id:"canvas",children:Object(h.jsx)("text",{x:"50%",y:"7%",dominantBaseline:"middle",textAnchor:"middle",id:"description",children:"1753 - 2015: Base Temperature 8.66\u2103"})}),Object(h.jsxs)("div",{id:"name",children:[Object(h.jsxs)("svg",{height:"180",width:"160",id:"legend",children:[Object(h.jsx)("text",{x:"50%",y:"10%",dominantBaseline:"middle",textAnchor:"middle",children:"Variance"}),Object(h.jsxs)("g",{children:[Object(h.jsx)("rect",{x:"40",y:"40",width:"20",height:"20",fill:"#4795FF"}),Object(h.jsx)("text",{x:"70",y:"52",fill:"black",children:"-1 or less"})]}),Object(h.jsxs)("g",{children:[Object(h.jsx)("rect",{x:"40",y:"70",width:"20",height:"20",fill:"#47E3FF"}),Object(h.jsx)("text",{x:"70",y:"82",fill:"black",children:"0 or less"})]}),Object(h.jsxs)("g",{children:[Object(h.jsx)("rect",{x:"40",y:"100",width:"20",height:"20",fill:"#FFBF47"}),Object(h.jsx)("text",{x:"70",y:"113 ",fill:"black",children:"1 or less"})]}),Object(h.jsxs)("g",{children:[Object(h.jsx)("rect",{x:"40",y:"130",width:"20",height:"20",fill:"#FEFF47"}),Object(h.jsx)("text",{x:"70",y:"142",fill:"black",children:"1 or more"})]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{id:"da3ker",children:"by da3ker"})]}),Object(h.jsx)("div",{id:"tooltip"})]})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),r(t),a(t),c(t),i(t)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(j,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.b49f8fd1.chunk.js.map