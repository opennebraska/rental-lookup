(this["webpackJsonpnebraska-renters-report"]=this["webpackJsonpnebraska-renters-report"]||[]).push([[0],{109:function(e,t,n){},111:function(e,t,n){},153:function(e,t){},155:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),i=(n(109),n(13)),s=n.n(i),u=n(21),l=n(16),p=(n(111),n(196)),j=n(90),d=n(3),h=Object(p.a)({titleText:{marginTop:100,marginBottom:30}});function b(){var e=h();return Object(d.jsx)(j.a,{variant:"h3",component:"h1",className:e.titleText,children:"Omaha Rental Lookup"})}var O=n(218),x=n(201),m=n(64),f=n.n(m),v=n(12),g=Object(p.a)({main:{maxWidth:"95%",width:500,marginBottom:20},root:{borderRadius:25}});function y(e){var t=e.searchValue,n=e.setSearchValue,a=g(),r=Object(v.f)();return Object(d.jsx)(O.a,{variant:"outlined",placeholder:"Search by address, landlord, rental company....",className:a.main,InputProps:{startAdornment:Object(d.jsx)(x.a,{position:"start",children:Object(d.jsx)(f.a,{})}),classes:{root:a.root}},autoFocus:!0,value:t,onChange:function(e){n(e.target.value)},onKeyDown:function(e){return function(e){"Enter"===e.key&&r.push("/properties-preview?search="+encodeURIComponent(t))}(e)}})}var w=n(202);function k(e){var t=e.searchValue,n=e.searchForProperties,a=Object(v.f)();return Object(d.jsx)("div",{children:Object(d.jsx)(w.a,{variant:"contained",onClick:function(){return n(t),void a.push("/properties-preview")},children:"Search"})})}function C(e){var t=e.searchValue,n=e.setSearchValue,a=e.searchForProperties;return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(b,{}),Object(d.jsx)(y,{searchValue:t,setSearchValue:n,searchForProperties:a}),Object(d.jsx)(k,{searchValue:t,searchForProperties:a})]})}var S=n(50),P=n(203),N=n(204),V=n(92),F=n(11),R=n(205),T=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(S.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block",textAlign:"justify"}),search:Object(S.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(F.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(F.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%",minWidth:200},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(S.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function I(e){var t=e.searchValue,n=e.setSearchValue,a=(e.searchForProperties,T()),r=Object(v.f)();return Object(d.jsx)("div",{className:a.root,children:Object(d.jsx)(P.a,{position:"static",children:Object(d.jsxs)(N.a,{children:[Object(d.jsx)(j.a,{className:a.title,noWrap:!0,children:Object(d.jsx)(R.a,{component:"a",href:"/rental-lookup",style:{textDecoration:"none",color:"white",verticalAlign:"middle"},children:"Omaha Rental Lookup"})}),Object(d.jsxs)("div",{className:a.search,children:[Object(d.jsx)("div",{className:a.searchIcon,children:Object(d.jsx)(f.a,{})}),Object(d.jsx)(V.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"},value:t,onChange:function(e){n(e.target.value)},onKeyDown:function(e){return function(e){"Enter"===e.key&&r.push("/properties-preview?search="+encodeURIComponent(t))}(e)}})]})]})})})}var L=n(31),B=n(37),E=n(41),A=n.n(E);function q(){return"localhost:3000"===window.location.host?"http://localhost:3001":"https://codefornebraska-housing.herokuapp.com"}var W=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=q(),e.next=3,A.a.get("".concat(n,"/properties?search=").concat(t));case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=q(),e.next=3,A.a.get("".concat(n,"/landlords?search=").concat(t));case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=q(),e.next=3,A.a.get("".concat(n,"/properties/").concat(t));case 3:return a=e.sent,r=a.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=q(),e.next=3,A.a.get("".concat(a,"/properties/").concat(t,"/image"));case 3:return r=e.sent,e.abrupt("return",null===r||void 0===r||null===(n=r.data)||void 0===n?void 0:n.image_url);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=n(88),Z=n(212),Q=n(206),_=n(207),G=n(208),H=n(209),J=n(210),K=n(211),X=n(217),Y=n(91),$=[{id:"address2",label:"address"},{id:"propertyCity",label:"city"},{id:"propertyZip",label:"zip"},{id:"condition",label:"condition"},{id:"quality",label:"quality"},{id:"ownerName",label:"owner"},{id:"violationCount",label:"violations"}],ee=Object(p.a)({root:{width:"100%"},container:{maxHeight:"100%"}});function te(e){var t=e.properties,n=ee(),a=r.a.useState(0),c=Object(l.a)(a,2),o=c[0],i=c[1],s=r.a.useState(10),u=Object(l.a)(s,2),p=u[0],j=u[1],h=Object(v.f)();return Object(d.jsxs)(Y.a,{className:n.root,children:[Object(d.jsx)(Q.a,{className:n.container,children:Object(d.jsxs)(_.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(d.jsx)(G.a,{children:Object(d.jsx)(H.a,{children:$.map((function(e){return Object(d.jsx)(J.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(d.jsx)(K.a,{children:t.slice(o*p,o*p+p).map((function(e){return Object(d.jsx)(H.a,{hover:!0,role:"checkbox",tabIndex:-1,onClick:function(){return h.push("/property/".concat(e.pin))},children:$.map((function(t){var n=e[t.id];return Object(d.jsx)(J.a,{align:t.align,children:t.format&&"number"===typeof n?t.format(n):n},t.id)}))},e.pin)}))})]})}),Object(d.jsx)(X.a,{rowsPerPageOptions:[10,25,100],component:"div",count:t.length,rowsPerPage:p,page:o,onChangePage:function(e,t){i(t)},onChangeRowsPerPage:function(e){j(+e.target.value),i(0)}})]})}function ne(e){var t=r.a.useState([]),n=Object(l.a)(t,2),c=n[0],o=n[1],i=r.a.useState(!0),p=Object(l.a)(i,2),h=p[0],b=p[1];return Object(a.useEffect)((function(){function t(){return(t=Object(u.a)(s.a.mark((function t(){var n,a,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(M.parse)(e.location.search,{ignoreQueryPrefix:!0}),t.next=3,W(n.search);case 3:a=t.sent,b(!1),r=a.map((function(e){return""===e.violationCount?Object(B.a)(Object(B.a)({},e),{},{violationCount:"0"}):e}),[]),o(r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().then()}),[e.location.search]),h?Object(d.jsx)(Z.a,{size:100,style:{marginTop:120}}):c.length?Object(d.jsx)(te,{properties:c}):Object(d.jsx)(j.a,{variant:"h6",style:{marginTop:120},children:"No results found. Try another search."})}var ae=n(213),re=n(214),ce=n(216),oe=n(219);function ie(e){var t=Object(a.useState)({quality:"",condition:""}),n=Object(l.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),p=i[0],h=i[1],b=Object(a.useState)(!0),O=Object(l.a)(b,2),x=O[0],m=O[1],f=Object(a.useState)(""),g=Object(l.a)(f,2),y=g[0],w=g[1],k=Object(v.g)().pin;return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(k);case 2:return t=e.sent,e.next=5,D(k);case 5:n=e.sent,c(Object(B.a)({condition:"",quality:""},t)),h(encodeURIComponent("".concat(t.addressLA,", ").concat(t.propertyCity,", NE ").concat(t.propertyZip))),w(n),m(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[k]),x?Object(d.jsx)(Z.a,{size:100,style:{marginTop:120}}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(ce.a,{mb:2,children:Object(d.jsxs)(oe.a,{"aria-label":"breadcrumb",separator:"\u203a",children:[Object(d.jsx)(j.a,{color:"textPrimary",children:Object(d.jsx)(R.a,{href:"/landlord/".concat(e.source),children:e.source})}),Object(d.jsx)(j.a,{color:"textPrimary",children:r.ownerName})]})}),Object(d.jsx)(ae.a,{children:Object(d.jsxs)(re.a,{children:[Object(d.jsx)(ce.a,{mb:2,children:y&&Object(d.jsx)("img",{src:y,alt:"Property at ".concat(r.addressLA)})}),Object(d.jsxs)(ce.a,{children:[Object(d.jsx)(j.a,{variant:"h4",gutterBottom:!0,children:"Property"}),Object(d.jsx)(j.a,{variant:"body1",component:"p",children:r.addressLA}),Object(d.jsxs)(j.a,{variant:"body1",component:"p",children:[r.propertyCity,", NE ",r.propertyZip]}),Object(d.jsx)(j.a,{variant:"body1",component:"p",gutterBottom:!0,children:Object(d.jsx)(R.a,{target:"_blank",rel:"noreferrer",href:"http://maps.google.com/?q=".concat(p),children:"View On Map"})}),Object(d.jsx)(j.a,{variant:"h6",gutterBottom:!0,children:"Condition/Quality"}),Object(d.jsxs)(j.a,{variant:"body1",component:"p",children:["Condition: ",r.condition.trim()||"Unknown"]}),Object(d.jsxs)(j.a,{variant:"body1",component:"p",gutterBottom:!0,children:["Quality: ",r.quality.trim()||"Unknown"]})]}),Object(d.jsxs)(ce.a,{mb:2,children:[Object(d.jsx)(j.a,{variant:"h4",gutterBottom:!0,children:"Owner"}),Object(d.jsx)(j.a,{variant:"body1",component:"p",children:r.ownerName}),Object(d.jsx)(j.a,{variant:"body1",component:"p",children:r.address2}),Object(d.jsxs)(j.a,{variant:"body1",component:"p",children:[r.ownerCity,", ",r.OWNER_STAT," ",r.ownerZip]})]})]})})]})}function se(e){var t,n=e.properties;return Object(d.jsxs)(Y.a,{style:{padding:10},children:[Object(d.jsxs)(j.a,{component:"h1",children:["Landlord: ",(null===(t=n[0])||void 0===t?void 0:t.ownerName)||"unknown"]}),Object(d.jsxs)(j.a,{component:"body",children:["Properties: ",n.length]}),Object(d.jsxs)(j.a,{component:"body",children:["Code violations: ",Math.floor(20*Math.random())]})]})}function ue(e){var t=r.a.useState(!0),n=Object(l.a)(t,2),c=n[0],o=n[1],i=r.a.useState([]),p=Object(l.a)(i,2),h=p[0],b=p[1],O=Object(v.g)().landlord;return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(O);case 2:t=e.sent,o(!1),n=t.map((function(e){return""===e.violationCount?Object(B.a)(Object(B.a)({},e),{},{violationCount:"0"}):e}),[]),b(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then()}),[e.location.search]),c?Object(d.jsx)(Z.a,{size:100,style:{marginTop:120}}):h.length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(se,{properties:h}),Object(d.jsx)(te,{properties:h})]}):Object(d.jsx)(j.a,{variant:"h6",style:{marginTop:120},children:"Something went wrong. No properties found for this landlord."})}var le=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),o=Object(l.a)(c,2),i=(o[0],o[1]),p=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=q(),e.next=3,A.a.get("".concat(n,"/properties?search=").concat(t));case 3:a=e.sent,r=a.data,i(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(L.a,{basename:"rental-lookup",children:[Object(d.jsx)(I,{searchValue:n,setSearchValue:r,searchForProperties:p}),Object(d.jsxs)(v.c,{children:[Object(d.jsx)(v.a,{exact:!0,path:"/",children:Object(d.jsx)(C,{searchValue:n,setSearchValue:r})}),Object(d.jsx)(v.a,{exact:!0,path:"/properties-preview",component:ne}),Object(d.jsx)(v.a,{exact:!0,path:"/landlord/:landlord",component:ue}),Object(d.jsx)(v.a,{path:"/property/:pin",component:ie})]})]})})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,222)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(le,{})}),document.getElementById("root")),pe()}},[[155,1,2]]]);
//# sourceMappingURL=main.066bfa7a.chunk.js.map