const t=Math.min,e=Math.max,n=Math.round,o=t=>({x:t,y:t});function i(t,e){return"function"==typeof t?t(e):t}function r(t){return t.split("-")[0]}function c(t){return t.split("-")[1]}function l(t){return"y"===t?"height":"width"}function s(t){return["top","bottom"].includes(r(t))?"y":"x"}function f(t){return"x"===s(t)?"y":"x"}function u(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function a(t,e,n){let{reference:o,floating:i}=t;const u=s(e),a=f(e),d=l(a),h=r(e),p="y"===u,y=o.x+o.width/2-i.width/2,m=o.y+o.height/2-i.height/2,g=o[d]/2-i[d]/2;let x;switch(h){case"top":x={x:y,y:o.y-i.height};break;case"bottom":x={x:y,y:o.y+o.height};break;case"right":x={x:o.x+o.width,y:m};break;case"left":x={x:o.x-i.width,y:m};break;default:x={x:o.x,y:o.y}}switch(c(e)){case"start":x[a]-=g*(n&&p?-1:1);break;case"end":x[a]+=g*(n&&p?-1:1)}return x}const d=n=>({name:"arrow",options:n,async fn(o){const{x:r,y:s,placement:u,rects:a,platform:d,elements:h}=o,{element:p,padding:y=0}=i(n,o)||{};if(null==p)return{};const m=function(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}(y),g={x:r,y:s},x=f(u),w=l(x),b=await d.getDimensions(p),v="y"===x,T=v?"top":"left",L=v?"bottom":"right",R=v?"clientHeight":"clientWidth",E=a.reference[w]+a.reference[x]-g[x]-a.floating[w],C=g[x]-a.reference[x],D=await(null==d.getOffsetParent?void 0:d.getOffsetParent(p));let S=D?D[R]:0;S&&await(null==d.isElement?void 0:d.isElement(D))||(S=h.floating[R]||a.floating[w]);const A=E/2-C/2,H=S/2-b[w]/2-1,W=t(m[T],H),k=t(m[L],H),F=W,O=S-b[w]-k,P=S/2-b[w]/2+A,V=e(F,t(P,O));const M=null!=c(u)&&P!=V&&a.reference[w]/2-(P<F?W:k)-b[w]/2<0?P<F?F-P:O-P:0;return{[x]:g[x]-M,data:{[x]:V,centerOffset:P-V+M}}}});const h=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,l=await async function(t,e){const{placement:n,platform:o,elements:l}=t,f=await(null==o.isRTL?void 0:o.isRTL(l.floating)),u=r(n),a=c(n),d="y"===s(n),h=["left","top"].includes(u)?-1:1,p=f&&d?-1:1,y=i(e,t);let{mainAxis:m,crossAxis:g,alignmentAxis:x}="number"==typeof y?{mainAxis:y,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...y};return a&&"number"==typeof x&&(g="end"===a?-1*x:x),d?{x:g*p,y:m*h}:{x:m*h,y:g*p}}(e,t);return{x:n+l.x,y:o+l.y,data:l}}}};function p(t){return g(t)?(t.nodeName||"").toLowerCase():"#document"}function y(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function m(t){var e;return null==(e=(g(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function g(t){return t instanceof Node||t instanceof y(t).Node}function x(t){return t instanceof Element||t instanceof y(t).Element}function w(t){return t instanceof HTMLElement||t instanceof y(t).HTMLElement}function b(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof y(t).ShadowRoot)}function v(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=C(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function T(t){return["table","td","th"].includes(p(t))}function L(t){const e=R(),n=C(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function R(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function E(t){return["html","body","#document"].includes(p(t))}function C(t){return y(t).getComputedStyle(t)}function D(t){return x(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function S(t){if("html"===p(t))return t;const e=t.assignedSlot||t.parentNode||b(t)&&t.host||m(t);return b(e)?e.host:e}function A(t){const e=S(t);return E(e)?t.ownerDocument?t.ownerDocument.body:t.body:w(e)&&v(e)?e:A(e)}function H(t,e){var n;void 0===e&&(e=[]);const o=A(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=y(o);return i?e.concat(r,r.visualViewport||[],v(o)?o:[]):e.concat(o,H(o))}function W(t){const e=C(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=w(t),c=r?t.offsetWidth:o,l=r?t.offsetHeight:i,s=n(o)!==c||n(i)!==l;return s&&(o=c,i=l),{width:o,height:i,$:s}}function k(t){return x(t)?t:t.contextElement}function F(t){const e=k(t);if(!w(e))return o(1);const i=e.getBoundingClientRect(),{width:r,height:c,$:l}=W(e);let s=(l?n(i.width):i.width)/r,f=(l?n(i.height):i.height)/c;return s&&Number.isFinite(s)||(s=1),f&&Number.isFinite(f)||(f=1),{x:s,y:f}}const O=o(0);function P(t){const e=y(t);return R()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:O}function V(t,e,n,i){void 0===e&&(e=!1),void 0===n&&(n=!1);const r=t.getBoundingClientRect(),c=k(t);let l=o(1);e&&(i?x(i)&&(l=F(i)):l=F(t));const s=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==y(t))&&e}(c,n,i)?P(c):o(0);let f=(r.left+s.x)/l.x,a=(r.top+s.y)/l.y,d=r.width/l.x,h=r.height/l.y;if(c){const t=y(c),e=i&&x(i)?y(i):i;let n=t.frameElement;for(;n&&i&&e!==t;){const t=F(n),e=n.getBoundingClientRect(),o=C(n),i=e.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,r=e.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;f*=t.x,a*=t.y,d*=t.x,h*=t.y,f+=i,a+=r,n=y(n).frameElement}}return u({width:d,height:h,x:f,y:a})}function M(t){return V(m(t)).left+D(t).scrollLeft}function N(t,n,i){let r;if("viewport"===n)r=function(t,e){const n=y(t),o=m(t),i=n.visualViewport;let r=o.clientWidth,c=o.clientHeight,l=0,s=0;if(i){r=i.width,c=i.height;const t=R();(!t||t&&"fixed"===e)&&(l=i.offsetLeft,s=i.offsetTop)}return{width:r,height:c,x:l,y:s}}(t,i);else if("document"===n)r=function(t){const n=m(t),o=D(t),i=t.ownerDocument.body,r=e(n.scrollWidth,n.clientWidth,i.scrollWidth,i.clientWidth),c=e(n.scrollHeight,n.clientHeight,i.scrollHeight,i.clientHeight);let l=-o.scrollLeft+M(t);const s=-o.scrollTop;return"rtl"===C(i).direction&&(l+=e(n.clientWidth,i.clientWidth)-r),{width:r,height:c,x:l,y:s}}(m(t));else if(x(n))r=function(t,e){const n=V(t,!0,"fixed"===e),i=n.top+t.clientTop,r=n.left+t.clientLeft,c=w(t)?F(t):o(1);return{width:t.clientWidth*c.x,height:t.clientHeight*c.y,x:r*c.x,y:i*c.y}}(n,i);else{const e=P(t);r={...n,x:n.x-e.x,y:n.y-e.y}}return u(r)}function B(t,e){const n=S(t);return!(n===e||!x(n)||E(n))&&("fixed"===C(n).position||B(n,e))}function X(t,e,n){const i=w(e),r=m(e),c="fixed"===n,l=V(t,!0,c,e);let s={scrollLeft:0,scrollTop:0};const f=o(0);if(i||!i&&!c)if(("body"!==p(e)||v(r))&&(s=D(e)),i){const t=V(e,!0,c,e);f.x=t.x+e.clientLeft,f.y=t.y+e.clientTop}else r&&(f.x=M(r));return{x:l.left+s.scrollLeft-f.x,y:l.top+s.scrollTop-f.y,width:l.width,height:l.height}}function Y(t,e){return w(t)&&"fixed"!==C(t).position?e?e(t):t.offsetParent:null}function $(t,e){const n=y(t);if(!w(t))return n;let o=Y(t,e);for(;o&&T(o)&&"static"===C(o).position;)o=Y(o,e);return o&&("html"===p(o)||"body"===p(o)&&"static"===C(o).position&&!L(o))?n:o||function(t){let e=S(t);for(;w(e)&&!E(e);){if(L(e))return e;e=S(e)}return null}(t)||n}const _={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:i}=t;const r=w(n),c=m(n);if(n===c)return e;let l={scrollLeft:0,scrollTop:0},s=o(1);const f=o(0);if((r||!r&&"fixed"!==i)&&(("body"!==p(n)||v(c))&&(l=D(n)),w(n))){const t=V(n);s=F(n),f.x=t.x+n.clientLeft,f.y=t.y+n.clientTop}return{width:e.width*s.x,height:e.height*s.y,x:e.x*s.x-l.scrollLeft*s.x+f.x,y:e.y*s.y-l.scrollTop*s.y+f.y}},getDocumentElement:m,getClippingRect:function(n){let{element:o,boundary:i,rootBoundary:r,strategy:c}=n;const l=[..."clippingAncestors"===i?function(t,e){const n=e.get(t);if(n)return n;let o=H(t).filter((t=>x(t)&&"body"!==p(t))),i=null;const r="fixed"===C(t).position;let c=r?S(t):t;for(;x(c)&&!E(c);){const e=C(c),n=L(c);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||v(c)&&!n&&B(t,c))?o=o.filter((t=>t!==c)):i=e,c=S(c)}return e.set(t,o),o}(o,this._c):[].concat(i),r],s=l[0],f=l.reduce(((n,i)=>{const r=N(o,i,c);return n.top=e(r.top,n.top),n.right=t(r.right,n.right),n.bottom=t(r.bottom,n.bottom),n.left=e(r.left,n.left),n}),N(o,s,c));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}},getOffsetParent:$,getElementRects:async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||$,r=this.getDimensions;return{reference:X(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return W(t)},getScale:F,isElement:x,isRTL:function(t){return"rtl"===C(t).direction}},j=(t,e,n)=>{const o=new Map,i={platform:_,...n},r={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:c}=n,l=r.filter(Boolean),s=await(null==c.isRTL?void 0:c.isRTL(e));let f=await c.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=a(f,o,s),h=o,p={},y=0;for(let m=0;m<l.length;m++){const{name:n,fn:r}=l[m],{x:g,y:x,data:w,reset:b}=await r({x:u,y:d,initialPlacement:o,placement:h,strategy:i,middlewareData:p,rects:f,platform:c,elements:{reference:t,floating:e}});u=null!=g?g:u,d=null!=x?x:d,p={...p,[n]:{...p[n],...w}},b&&y<=50&&(y++,"object"==typeof b&&(b.placement&&(h=b.placement),b.rects&&(f=!0===b.rects?await c.getElementRects({reference:t,floating:e,strategy:i}):b.rects),({x:u,y:d}=a(f,h,s))),m=-1)}return{x:u,y:d,placement:h,strategy:i,middlewareData:p}})(t,e,{...i,platform:r})};export{d as a,j as c,h as o};
