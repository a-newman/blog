(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"69YC":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Annie Makes Tech Styles"}}}}')},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var n,i=r(a("v06X")),l=r(a("XEEL")),s=r(a("uDP2")),o=r(a("j8BX")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=m(t);return p[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,v=E&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+d+l+s+a+r+t+i+n+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=e.ariaHidden,l=d.default.createElement(R,(0,o.default)({src:t},n,{ariaHidden:i}));return a.length>1?d.default.createElement("picture",null,r(a),l):l},R=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},g,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,E=e.durationFadeIn,v=e.Tag,y=e.itemProp,w=e.loading,N=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:k?1:0,transition:x?"opacity "+E+"ms":"none"},s),C="boolean"==typeof b?"lightgray":b,T={transitionDelay:E+"ms"},M=(0,o.default)({opacity:this.state.imgLoaded?0:1},x&&T,{},s,{},f),P={title:t,alt:this.state.isVisible?"":a,style:M,className:m,itemProp:y};if(p){var q=p,H=g(p);return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),C&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&T)}),H.base64&&d.default.createElement(z,{ariaHidden:!0,src:H.base64,spreadProps:P,imageVariants:q,generateSources:I}),H.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,src:H.tracedSVG,spreadProps:P,imageVariants:q,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,S(q),d.default.createElement(R,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:w},H,{imageVariants:q}))}}))}if(h){var F=h,j=g(h),B=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},i);return"inherit"===i.display&&delete B.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},C&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},x&&T)}),j.base64&&d.default.createElement(z,{ariaHidden:!0,src:j.base64,spreadProps:P,imageVariants:F,generateSources:I}),j.tracedSVG&&d.default.createElement(z,{ariaHidden:!0,src:j.tracedSVG,spreadProps:P,imageVariants:F,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,S(F),d.default.createElement(R,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:w},j,{imageVariants:F}))}}))}return null},t}(d.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});x.propTypes={resolutions:V,sizes:C,fixed:c.default.oneOfType([V,c.default.arrayOf(V)]),fluid:c.default.oneOfType([C,c.default.arrayOf(C)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=x;t.default=T},Bl7J:function(e,t,a){"use strict";var r=a("69YC"),n=a("q1tI"),i=a.n(n),l=a("Wbzz"),s=a("fcpr"),o=a.n(s),d=a("M8no"),c=a.n(d),u=function(){return i.a.createElement("div",{className:c.a.container},"                                      '||'        ",i.a.createElement("br",null),"    .0000000000000000000000000000000000000000.    ",i.a.createElement("br",null),"    000000000000000000000000000000000000000000    ",i.a.createElement("br",null),"    00000000000000000000000000000000 oo oo 000    ",i.a.createElement("br",null),"    00000000000000000000000000000000 oo oo 000.00.",i.a.createElement("br",null),"    00000000000000000000000000000000       000.000",i.a.createElement("br",null),"    00000000000000000000000000000000 ooooo 000.000",i.a.createElement("br",null),"    00000000000000           '000000 ooooo 000.00'",i.a.createElement("br",null),"    '000000000000'            000000       000    ",i.a.createElement("br",null),"         '|'                  0000000000000000    ",i.a.createElement("br",null),"          |                   0000000000000000    ",i.a.createElement("br",null),".---------|-------------------0000000000000000    ",i.a.createElement("br",null),"0000000000000000000000000000000000000000000000    ",i.a.createElement("br",null),"0000000000000000000000000000000000000000000000    ",i.a.createElement("br",null),"0000000000000000000000000000000000000000000000    ",i.a.createElement("br",null),"0000000000000000000000000000000000000000000000    ",i.a.createElement("br",null),"0000000000000000000000000000000000000000000000    ",i.a.createElement("br",null),"0000000000000000000000000000000000000000000000    ",i.a.createElement("br",null),"'00000000000000000000000000000000000000000000'    ",i.a.createElement("br",null))},f=function(e){return i.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},i.a.createElement(l.Link,{to:e.to},e.children))},m=function(){return i.a.createElement("h1",{className:o.a.title},i.a.createElement("span",{className:o.a.titleFlouncy},"Annie Makes "),i.a.createElement("div",{className:o.a.titleSpaceHolder}),i.a.createElement("br",null),i.a.createElement("div",{className:o.a.titleSpaceHolder}),i.a.createElement("span",{className:o.a.titleTech},"Tech"),i.a.createElement("span",{className:o.a.titleFlouncy}," Styles"))},g=function(e){return i.a.createElement("div",{className:o.a.blogHeader+" shadowBox",style:{textAlign:"center"}},i.a.createElement("div",{className:o.a.titleFlexBox},i.a.createElement("div",null,i.a.createElement(u,null)),i.a.createElement("div",null,i.a.createElement(l.Link,{className:o.a.titleLink,to:"/"},i.a.createElement(m,null)))),i.a.createElement("ul",{className:o.a.navLinks},i.a.createElement(f,{to:"/"},"Posts"),i.a.createElement(f,{to:"/about/"},"About")))};t.a=function(e){var t=e.children,a=r.data.site.siteMetadata.title;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:o.a.backgroundDimmer}),i.a.createElement("div",null,i.a.createElement("div",{className:o.a.centerSection},i.a.createElement(g,{title:a}),t)))}},INYr:function(e,t,a){"use strict";var r=a("XKFU"),n=a("CkkT")(6),i="findIndex",l=!0;i in[]&&Array(1)[i]((function(){l=!1})),r(r.P+r.F*l,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(i)},OGtf:function(e,t,a){var r=a("XKFU"),n=a("eeVq"),i=a("vhPU"),l=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(l,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),l=a("Bl7J"),s=a("Mtsz"),o=a.n(s),d=a("9eSz"),c=a.n(d),u=function(e){var t=e.post;return console.log("frontmatter",t.frontmatter),n.a.createElement("div",{className:o.a.container+" shadowBox"},n.a.createElement(i.Link,{className:o.a.titleLink,to:t.fields.slug},n.a.createElement("h3",null,n.a.createElement("span",null,t.frontmatter.title))),n.a.createElement("h4",null,t.frontmatter.date),t.frontmatter.cover&&n.a.createElement(c.a,{fluid:t.frontmatter.cover.childImageSharp.fluid}),n.a.createElement("p",{className:o.a.excerpt},t.excerpt),n.a.createElement(i.Link,{to:t.fields.slug,className:o.a.readmore},"Read More ",n.a.createElement("span",{className:o.a.readmorespan},">")))};a.d(t,"query",(function(){return f}));t.default=function(e){var t=e.data;console.log("data",t);var a=t.allMarkdownRemark.edges;return n.a.createElement(l.a,null,n.a.createElement("div",null,a.map((function(e,t){var a=e.node;return n.a.createElement(u,{post:a,key:t})}))))};var f="2510955886"}}]);
//# sourceMappingURL=component---src-pages-index-js-12d26dd5292b8c0a8432.js.map