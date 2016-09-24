(function(global) {

/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});

var JXON = new (function () {
  var
    sValueProp = "keyValue", sAttributesProp = "keyAttributes", sAttrPref = "@", /* you can customize these values */
    aCache = [], rIsNull = /^\s*$/, rIsBool = /^(?:true|false)$/i;

  function parseText (sValue) {
    if (rIsNull.test(sValue)) { return null; }
    if (rIsBool.test(sValue)) { return sValue.toLowerCase() === "true"; }
    if (isFinite(sValue)) { return parseFloat(sValue); }
    if (isFinite(Date.parse(sValue))) { return new Date(sValue); }
    return sValue;
  }

  function EmptyTree () { }
  EmptyTree.prototype.toString = function () { return "null"; };
  EmptyTree.prototype.valueOf = function () { return null; };

  function objectify (vValue) {
    return vValue === null ? new EmptyTree() : vValue instanceof Object ? vValue : new vValue.constructor(vValue);
  }

  function createObjTree (oParentNode, nVerb, bFreeze, bNesteAttr) {
    var
      nLevelStart = aCache.length, bChildren = oParentNode.hasChildNodes(),
      bAttributes = oParentNode.hasAttributes(), bHighVerb = Boolean(nVerb & 2);

    var
      sProp, vContent, nLength = 0, sCollectedTxt = "",
      vResult = bHighVerb ? {} : /* put here the default value for empty nodes: */ true;

    if (bChildren) {
      for (var oNode, nItem = 0; nItem < oParentNode.childNodes.length; nItem++) {
        oNode = oParentNode.childNodes.item(nItem);
        if (oNode.nodeType === 4) { sCollectedTxt += oNode.nodeValue; } /* nodeType is "CDATASection" (4) */
        else if (oNode.nodeType === 3) { sCollectedTxt += oNode.nodeValue.trim(); } /* nodeType is "Text" (3) */
        else if (oNode.nodeType === 1 && !oNode.prefix) { aCache.push(oNode); } /* nodeType is "Element" (1) */
      }
    }

    var nLevelEnd = aCache.length, vBuiltVal = parseText(sCollectedTxt);

    if (!bHighVerb && (bChildren || bAttributes)) { vResult = nVerb === 0 ? objectify(vBuiltVal) : {}; }

    for (var nElId = nLevelStart; nElId < nLevelEnd; nElId++) {
      sProp = aCache[nElId].nodeName.toLowerCase();
      vContent = createObjTree(aCache[nElId], nVerb, bFreeze, bNesteAttr);
      if (vResult.hasOwnProperty(sProp)) {
        if (vResult[sProp].constructor !== Array) { vResult[sProp] = [vResult[sProp]]; }
        vResult[sProp].push(vContent);
      } else {
        vResult[sProp] = vContent;
        nLength++;
      }
    }

    if (bAttributes) {
      var
        nAttrLen = oParentNode.attributes.length,
        sAPrefix = bNesteAttr ? "" : sAttrPref, oAttrParent = bNesteAttr ? {} : vResult;

      for (var oAttrib, nAttrib = 0; nAttrib < nAttrLen; nLength++, nAttrib++) {
        oAttrib = oParentNode.attributes.item(nAttrib);
        oAttrParent[sAPrefix + oAttrib.name.toLowerCase()] = parseText(oAttrib.value.trim());
      }

      if (bNesteAttr) {
        if (bFreeze) { Object.freeze(oAttrParent); }
        vResult[sAttributesProp] = oAttrParent;
        nLength -= nAttrLen - 1;
      }
    }

    if (nVerb === 3 || (nVerb === 2 || nVerb === 1 && nLength > 0) && sCollectedTxt) {
      vResult[sValueProp] = vBuiltVal;
    } else if (!bHighVerb && nLength === 0 && sCollectedTxt) {
      vResult = vBuiltVal;
    }

    if (bFreeze && (bHighVerb || nLength > 0)) { Object.freeze(vResult); }

    aCache.length = nLevelStart;

    return vResult;
  }

  function loadObjTree (oXMLDoc, oParentEl, oParentObj) {
    var vValue, oChild;

    if (oParentObj instanceof String || oParentObj instanceof Number || oParentObj instanceof Boolean) {
      oParentEl.appendChild(oXMLDoc.createTextNode(oParentObj.toString())); /* verbosity level is 0 */
    } else if (oParentObj.constructor === Date) {
      oParentEl.appendChild(oXMLDoc.createTextNode(oParentObj.toGMTString()));    
    }

    for (var sName in oParentObj) {
      vValue = oParentObj[sName];
      if (isFinite(sName) || vValue instanceof Function) { continue; } /* verbosity level is 0 */
      if (sName === sValueProp) {
        if (vValue !== null && vValue !== true) { oParentEl.appendChild(oXMLDoc.createTextNode(vValue.constructor === Date ? vValue.toGMTString() : String(vValue))); }
      } else if (sName === sAttributesProp) { /* verbosity level is 3 */
        for (var sAttrib in vValue) { oParentEl.setAttribute(sAttrib, vValue[sAttrib]); }
      } else if (sName.charAt(0) === sAttrPref) {
        oParentEl.setAttribute(sName.slice(1), vValue);
      } else if (vValue.constructor === Array) {
        for (var nItem = 0; nItem < vValue.length; nItem++) {
          oChild = oXMLDoc.createElement(sName);
          loadObjTree(oXMLDoc, oChild, vValue[nItem]);
          oParentEl.appendChild(oChild);
        }
      } else {
        oChild = oXMLDoc.createElement(sName);
        if (vValue instanceof Object) {
          loadObjTree(oXMLDoc, oChild, vValue);
        } else if (vValue !== null && vValue !== true) {
          oChild.appendChild(oXMLDoc.createTextNode(vValue.toString()));
        }
        oParentEl.appendChild(oChild);
     }
   }
  }

  this.build = function (oXMLParent, nVerbosity /* optional */, bFreeze /* optional */, bNesteAttributes /* optional */) {
    var _nVerb = arguments.length > 1 && typeof nVerbosity === "number" ? nVerbosity & 3 : /* put here the default verbosity level: */ 1;
    return createObjTree(oXMLParent, _nVerb, bFreeze || false, arguments.length > 3 ? bNesteAttributes : _nVerb === 3);    
  };

  this.unbuild = function (oObjTree) {    
    var oNewDoc = document.implementation.createDocument("", "", null);
    loadObjTree(oNewDoc, oNewDoc, oObjTree);
    return oNewDoc;
  };

  this.stringify = function (oObjTree) {
    return (new XMLSerializer()).serializeToString(JXON.unbuild(oObjTree));
  };
})();
// var myObject = JXON.build(doc);
// we got our javascript object! try: alert(JSON.stringify(myObject));

// var newDoc = JXON.unbuild(myObject);
// we got our Document instance! try: alert((new XMLSerializer()).serializeToString(newDoc));

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.osmAuth = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var ohauth = require('ohauth'),
    xtend = require('xtend'),
    store = require('store');

// # osm-auth
//
// This code is only compatible with IE10+ because the [XDomainRequest](http://bit.ly/LfO7xo)
// object, IE<10's idea of [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing),
// does not support custom headers, which this uses everywhere.
module.exports = function(o) {

    var oauth = {};

    // authenticated users will also have a request token secret, but it's
    // not used in transactions with the server
    oauth.authenticated = function() {
        return !!(token('oauth_token') && token('oauth_token_secret'));
    };

    oauth.logout = function() {
        token('oauth_token', '');
        token('oauth_token_secret', '');
        token('oauth_request_token_secret', '');
        return oauth;
    };

    // TODO: detect lack of click event
    oauth.authenticate = function(callback) {
        if (oauth.authenticated()) return callback();

        oauth.logout();

        // ## Getting a request token
        var params = timenonce(getAuth(o)),
            url = o.url + '/oauth/request_token';

        params.oauth_signature = ohauth.signature(
            o.oauth_secret, '',
            ohauth.baseString('POST', url, params));

        if (!o.singlepage) {
            // Create a 600x550 popup window in the center of the screen
            var w = 600, h = 550,
                settings = [
                    ['width', w], ['height', h],
                    ['left', screen.width / 2 - w / 2],
                    ['top', screen.height / 2 - h / 2]].map(function(x) {
                        return x.join('=');
                    }).join(','),
                popup = window.open('about:blank', 'oauth_window', settings);
        }

        // Request a request token. When this is complete, the popup
        // window is redirected to OSM's authorization page.
        ohauth.xhr('POST', url, params, null, {}, reqTokenDone);
        o.loading();

        function reqTokenDone(err, xhr) {
            o.done();
            if (err) return callback(err);
            var resp = ohauth.stringQs(xhr.response);
            token('oauth_request_token_secret', resp.oauth_token_secret);
            var authorize_url = o.url + '/oauth/authorize?' + ohauth.qsString({
                oauth_token: resp.oauth_token,
                oauth_callback: location.href.replace('index.html', '')
                    .replace(/#.*/, '').replace(location.search, '') + o.landing
            });

            if (o.singlepage) {
                location.href = authorize_url;
            } else {
                popup.location = authorize_url;
            }
        }

        // Called by a function in a landing page, in the popup window. The
        // window closes itself.
        window.authComplete = function(token) {
            var oauth_token = ohauth.stringQs(token.split('?')[1]);
            get_access_token(oauth_token.oauth_token);
            delete window.authComplete;
        };

        // ## Getting an request token
        //
        // At this point we have an `oauth_token`, brought in from a function
        // call on a landing page popup.
        function get_access_token(oauth_token) {
            var url = o.url + '/oauth/access_token',
                params = timenonce(getAuth(o)),
                request_token_secret = token('oauth_request_token_secret');
            params.oauth_token = oauth_token;
            params.oauth_signature = ohauth.signature(
                o.oauth_secret,
                request_token_secret,
                ohauth.baseString('POST', url, params));

            // ## Getting an access token
            //
            // The final token required for authentication. At this point
            // we have a `request token secret`
            ohauth.xhr('POST', url, params, null, {}, accessTokenDone);
            o.loading();
        }

        function accessTokenDone(err, xhr) {
            o.done();
            if (err) return callback(err);
            var access_token = ohauth.stringQs(xhr.response);
            token('oauth_token', access_token.oauth_token);
            token('oauth_token_secret', access_token.oauth_token_secret);
            callback(null, oauth);
        }
    };

    oauth.bootstrapToken = function(oauth_token, callback) {
        // ## Getting an request token
        // At this point we have an `oauth_token`, brought in from a function
        // call on a landing page popup.
        function get_access_token(oauth_token) {
            var url = o.url + '/oauth/access_token',
                params = timenonce(getAuth(o)),
                request_token_secret = token('oauth_request_token_secret');
            params.oauth_token = oauth_token;
            params.oauth_signature = ohauth.signature(
                o.oauth_secret,
                request_token_secret,
                ohauth.baseString('POST', url, params));

            // ## Getting an access token
            // The final token required for authentication. At this point
            // we have a `request token secret`
            ohauth.xhr('POST', url, params, null, {}, accessTokenDone);
            o.loading();
        }

        function accessTokenDone(err, xhr) {
            o.done();
            if (err) return callback(err);
            var access_token = ohauth.stringQs(xhr.response);
            token('oauth_token', access_token.oauth_token);
            token('oauth_token_secret', access_token.oauth_token_secret);
            callback(null, oauth);
        }

        get_access_token(oauth_token);
    };

    // # xhr
    //
    // A single XMLHttpRequest wrapper that does authenticated calls if the
    // user has logged in.
    oauth.xhr = function(options, callback) {
        if (!oauth.authenticated()) {
            if (o.auto) return oauth.authenticate(run);
            else return callback('not authenticated', null);
        } else return run();

        function run() {
            var params = timenonce(getAuth(o)),
                oauth_token_secret = token('oauth_token_secret');
            var url = (options.prefix !== false) ? o.url + options.path : options.path;

            // https://tools.ietf.org/html/rfc5849#section-3.4.1.3.1
            if ((!options.options || !options.options.header ||
                options.options.header['Content-Type'] === 'application/x-www-form-urlencoded') &&
                options.content) {
                params = xtend(params, ohauth.stringQs(options.content));
            }

            params.oauth_token = token('oauth_token');
            params.oauth_signature = ohauth.signature(
                o.oauth_secret,
                oauth_token_secret,
                ohauth.baseString(options.method, url, params));

            ohauth.xhr(options.method,
                url, params, options.content, options.options, done);
        }

        function done(err, xhr) {
            if (err) return callback(err);
            else if (xhr.responseXML) return callback(err, xhr.responseXML);
            else return callback(err, xhr.response);
        }
    };

    // pre-authorize this object, if we can just get a token and token_secret
    // from the start
    oauth.preauth = function(c) {
        if (!c) return;
        if (c.oauth_token) token('oauth_token', c.oauth_token);
        if (c.oauth_token_secret) token('oauth_token_secret', c.oauth_token_secret);
        return oauth;
    };

    oauth.options = function(_) {
        if (!arguments.length) return o;

        o = _;

        o.url = o.url || 'http://www.openstreetmap.org';
        o.landing = o.landing || 'land.html';

        o.singlepage = o.singlepage || false;

        // Optional loading and loading-done functions for nice UI feedback.
        // by default, no-ops
        o.loading = o.loading || function() {};
        o.done = o.done || function() {};

        return oauth.preauth(o);
    };

    // 'stamp' an authentication object from `getAuth()`
    // with a [nonce](http://en.wikipedia.org/wiki/Cryptographic_nonce)
    // and timestamp
    function timenonce(o) {
        o.oauth_timestamp = ohauth.timestamp();
        o.oauth_nonce = ohauth.nonce();
        return o;
    }

    // get/set tokens. These are prefixed with the base URL so that `osm-auth`
    // can be used with multiple APIs and the keys in `localStorage`
    // will not clash
    var token;

    if (store.enabled) {
        token = function (x, y) {
            if (arguments.length === 1) return store.get(o.url + x);
            else if (arguments.length === 2) return store.set(o.url + x, y);
        };
    } else {
        var storage = {};
        token = function (x, y) {
            if (arguments.length === 1) return storage[o.url + x];
            else if (arguments.length === 2) return storage[o.url + x] = y;
        };
    }

    // Get an authentication object. If you just add and remove properties
    // from a single object, you'll need to use `delete` to make sure that
    // it doesn't contain undesired properties for authentication
    function getAuth(o) {
        return {
            oauth_consumer_key: o.oauth_consumer_key,
            oauth_signature_method: "HMAC-SHA1"
        };
    }

    // potentially pre-authorize
    oauth.options(o);

    return oauth;
};

},{"ohauth":3,"store":4,"xtend":5}],2:[function(require,module,exports){
(function (global){
/**
 * jshashes - https://github.com/h2non/jshashes
 * Released under the "New BSD" license
 *
 * Algorithms specification:
 *
 * MD5 - http://www.ietf.org/rfc/rfc1321.txt
 * RIPEMD-160 - http://homes.esat.kuleuven.be/~bosselae/ripemd160.html
 * SHA1   - http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf
 * SHA256 - http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf
 * SHA512 - http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf
 * HMAC - http://www.ietf.org/rfc/rfc2104.txt
 */
(function() {
  var Hashes;

  function utf8Encode(str) {
    var x, y, output = '',
      i = -1,
      l;

    if (str && str.length) {
      l = str.length;
      while ((i += 1) < l) {
        /* Decode utf-16 surrogate pairs */
        x = str.charCodeAt(i);
        y = i + 1 < l ? str.charCodeAt(i + 1) : 0;
        if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
          x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
          i += 1;
        }
        /* Encode output as utf-8 */
        if (x <= 0x7F) {
          output += String.fromCharCode(x);
        } else if (x <= 0x7FF) {
          output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F),
            0x80 | (x & 0x3F));
        } else if (x <= 0xFFFF) {
          output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F),
            0x80 | ((x >>> 6) & 0x3F),
            0x80 | (x & 0x3F));
        } else if (x <= 0x1FFFFF) {
          output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07),
            0x80 | ((x >>> 12) & 0x3F),
            0x80 | ((x >>> 6) & 0x3F),
            0x80 | (x & 0x3F));
        }
      }
    }
    return output;
  }

  function utf8Decode(str) {
    var i, ac, c1, c2, c3, arr = [],
      l;
    i = ac = c1 = c2 = c3 = 0;

    if (str && str.length) {
      l = str.length;
      str += '';

      while (i < l) {
        c1 = str.charCodeAt(i);
        ac += 1;
        if (c1 < 128) {
          arr[ac] = String.fromCharCode(c1);
          i += 1;
        } else if (c1 > 191 && c1 < 224) {
          c2 = str.charCodeAt(i + 1);
          arr[ac] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
          i += 2;
        } else {
          c2 = str.charCodeAt(i + 1);
          c3 = str.charCodeAt(i + 2);
          arr[ac] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
          i += 3;
        }
      }
    }
    return arr.join('');
  }

  /**
   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
   * to work around bugs in some JS interpreters.
   */

  function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF),
      msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xFFFF);
  }

  /**
   * Bitwise rotate a 32-bit number to the left.
   */

  function bit_rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
  }

  /**
   * Convert a raw string to a hex string
   */

  function rstr2hex(input, hexcase) {
    var hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef',
      output = '',
      x, i = 0,
      l = input.length;
    for (; i < l; i += 1) {
      x = input.charCodeAt(i);
      output += hex_tab.charAt((x >>> 4) & 0x0F) + hex_tab.charAt(x & 0x0F);
    }
    return output;
  }

  /**
   * Encode a string as utf-16
   */

  function str2rstr_utf16le(input) {
    var i, l = input.length,
      output = '';
    for (i = 0; i < l; i += 1) {
      output += String.fromCharCode(input.charCodeAt(i) & 0xFF, (input.charCodeAt(i) >>> 8) & 0xFF);
    }
    return output;
  }

  function str2rstr_utf16be(input) {
    var i, l = input.length,
      output = '';
    for (i = 0; i < l; i += 1) {
      output += String.fromCharCode((input.charCodeAt(i) >>> 8) & 0xFF, input.charCodeAt(i) & 0xFF);
    }
    return output;
  }

  /**
   * Convert an array of big-endian words to a string
   */

  function binb2rstr(input) {
    var i, l = input.length * 32,
      output = '';
    for (i = 0; i < l; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> (24 - i % 32)) & 0xFF);
    }
    return output;
  }

  /**
   * Convert an array of little-endian words to a string
   */

  function binl2rstr(input) {
    var i, l = input.length * 32,
      output = '';
    for (i = 0; i < l; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
    }
    return output;
  }

  /**
   * Convert a raw string to an array of little-endian words
   * Characters >255 have their high-byte silently ignored.
   */

  function rstr2binl(input) {
    var i, l = input.length * 8,
      output = Array(input.length >> 2),
      lo = output.length;
    for (i = 0; i < lo; i += 1) {
      output[i] = 0;
    }
    for (i = 0; i < l; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
    }
    return output;
  }

  /**
   * Convert a raw string to an array of big-endian words
   * Characters >255 have their high-byte silently ignored.
   */

  function rstr2binb(input) {
    var i, l = input.length * 8,
      output = Array(input.length >> 2),
      lo = output.length;
    for (i = 0; i < lo; i += 1) {
      output[i] = 0;
    }
    for (i = 0; i < l; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (24 - i % 32);
    }
    return output;
  }

  /**
   * Convert a raw string to an arbitrary string encoding
   */

  function rstr2any(input, encoding) {
    var divisor = encoding.length,
      remainders = Array(),
      i, q, x, ld, quotient, dividend, output, full_length;

    /* Convert to an array of 16-bit big-endian values, forming the dividend */
    dividend = Array(Math.ceil(input.length / 2));
    ld = dividend.length;
    for (i = 0; i < ld; i += 1) {
      dividend[i] = (input.charCodeAt(i * 2) << 8) | input.charCodeAt(i * 2 + 1);
    }

    /**
     * Repeatedly perform a long division. The binary array forms the dividend,
     * the length of the encoding is the divisor. Once computed, the quotient
     * forms the dividend for the next step. We stop when the dividend is zerHashes.
     * All remainders are stored for later use.
     */
    while (dividend.length > 0) {
      quotient = Array();
      x = 0;
      for (i = 0; i < dividend.length; i += 1) {
        x = (x << 16) + dividend[i];
        q = Math.floor(x / divisor);
        x -= q * divisor;
        if (quotient.length > 0 || q > 0) {
          quotient[quotient.length] = q;
        }
      }
      remainders[remainders.length] = x;
      dividend = quotient;
    }

    /* Convert the remainders to the output string */
    output = '';
    for (i = remainders.length - 1; i >= 0; i--) {
      output += encoding.charAt(remainders[i]);
    }

    /* Append leading zero equivalents */
    full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));
    for (i = output.length; i < full_length; i += 1) {
      output = encoding[0] + output;
    }
    return output;
  }

  /**
   * Convert a raw string to a base-64 string
   */

  function rstr2b64(input, b64pad) {
    var tab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      output = '',
      len = input.length,
      i, j, triplet;
    b64pad = b64pad || '=';
    for (i = 0; i < len; i += 3) {
      triplet = (input.charCodeAt(i) << 16) | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
      for (j = 0; j < 4; j += 1) {
        if (i * 8 + j * 6 > input.length * 8) {
          output += b64pad;
        } else {
          output += tab.charAt((triplet >>> 6 * (3 - j)) & 0x3F);
        }
      }
    }
    return output;
  }

  Hashes = {
    /**
     * @property {String} version
     * @readonly
     */
    VERSION: '1.0.5',
    /**
     * @member Hashes
     * @class Base64
     * @constructor
     */
    Base64: function() {
      // private properties
      var tab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        pad = '=', // default pad according with the RFC standard
        url = false, // URL encoding support @todo
        utf8 = true; // by default enable UTF-8 support encoding

      // public method for encoding
      this.encode = function(input) {
        var i, j, triplet,
          output = '',
          len = input.length;

        pad = pad || '=';
        input = (utf8) ? utf8Encode(input) : input;

        for (i = 0; i < len; i += 3) {
          triplet = (input.charCodeAt(i) << 16) | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
          for (j = 0; j < 4; j += 1) {
            if (i * 8 + j * 6 > len * 8) {
              output += pad;
            } else {
              output += tab.charAt((triplet >>> 6 * (3 - j)) & 0x3F);
            }
          }
        }
        return output;
      };

      // public method for decoding
      this.decode = function(input) {
        // var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var i, o1, o2, o3, h1, h2, h3, h4, bits, ac,
          dec = '',
          arr = [];
        if (!input) {
          return input;
        }

        i = ac = 0;
        input = input.replace(new RegExp('\\' + pad, 'gi'), ''); // use '='
        //input += '';

        do { // unpack four hexets into three octets using index points in b64
          h1 = tab.indexOf(input.charAt(i += 1));
          h2 = tab.indexOf(input.charAt(i += 1));
          h3 = tab.indexOf(input.charAt(i += 1));
          h4 = tab.indexOf(input.charAt(i += 1));

          bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

          o1 = bits >> 16 & 0xff;
          o2 = bits >> 8 & 0xff;
          o3 = bits & 0xff;
          ac += 1;

          if (h3 === 64) {
            arr[ac] = String.fromCharCode(o1);
          } else if (h4 === 64) {
            arr[ac] = String.fromCharCode(o1, o2);
          } else {
            arr[ac] = String.fromCharCode(o1, o2, o3);
          }
        } while (i < input.length);

        dec = arr.join('');
        dec = (utf8) ? utf8Decode(dec) : dec;

        return dec;
      };

      // set custom pad string
      this.setPad = function(str) {
        pad = str || pad;
        return this;
      };
      // set custom tab string characters
      this.setTab = function(str) {
        tab = str || tab;
        return this;
      };
      this.setUTF8 = function(bool) {
        if (typeof bool === 'boolean') {
          utf8 = bool;
        }
        return this;
      };
    },

    /**
     * CRC-32 calculation
     * @member Hashes
     * @method CRC32
     * @static
     * @param {String} str Input String
     * @return {String}
     */
    CRC32: function(str) {
      var crc = 0,
        x = 0,
        y = 0,
        table, i, iTop;
      str = utf8Encode(str);

      table = [
        '00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 ',
        '79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 ',
        '84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F ',
        '63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD ',
        'A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC ',
        '51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 ',
        'B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 ',
        '06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 ',
        'E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 ',
        '12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 ',
        'D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 ',
        '33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 ',
        'CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 ',
        '9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E ',
        '7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D ',
        '806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 ',
        '60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA ',
        'AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 ',
        '5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 ',
        'B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 ',
        '05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 ',
        'F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA ',
        '11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 ',
        'D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F ',
        '30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E ',
        'C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D'
      ].join('');

      crc = crc ^ (-1);
      for (i = 0, iTop = str.length; i < iTop; i += 1) {
        y = (crc ^ str.charCodeAt(i)) & 0xFF;
        x = '0x' + table.substr(y * 9, 8);
        crc = (crc >>> 8) ^ x;
      }
      // always return a positive number (that's what >>> 0 does)
      return (crc ^ (-1)) >>> 0;
    },
    /**
     * @member Hashes
     * @class MD5
     * @constructor
     * @param {Object} [config]
     *
     * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
     * Digest Algorithm, as defined in RFC 1321.
     * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * See <http://pajhome.org.uk/crypt/md5> for more infHashes.
     */
    MD5: function(options) {
      /**
       * Private config properties. You may need to tweak these to be compatible with
       * the server-side, but the defaults work in most cases.
       * See {@link Hashes.MD5#method-setUpperCase} and {@link Hashes.SHA1#method-setUpperCase}
       */
      var hexcase = (options && typeof options.uppercase === 'boolean') ? options.uppercase : false, // hexadecimal output case format. false - lowercase; true - uppercase
        b64pad = (options && typeof options.pad === 'string') ? options.pda : '=', // base-64 pad character. Defaults to '=' for strict RFC compliance
        utf8 = (options && typeof options.utf8 === 'boolean') ? options.utf8 : true; // enable/disable utf8 encoding

      // privileged (public) methods
      this.hex = function(s) {
        return rstr2hex(rstr(s, utf8), hexcase);
      };
      this.b64 = function(s) {
        return rstr2b64(rstr(s), b64pad);
      };
      this.any = function(s, e) {
        return rstr2any(rstr(s, utf8), e);
      };
      this.raw = function(s) {
        return rstr(s, utf8);
      };
      this.hex_hmac = function(k, d) {
        return rstr2hex(rstr_hmac(k, d), hexcase);
      };
      this.b64_hmac = function(k, d) {
        return rstr2b64(rstr_hmac(k, d), b64pad);
      };
      this.any_hmac = function(k, d, e) {
        return rstr2any(rstr_hmac(k, d), e);
      };
      /**
       * Perform a simple self-test to see if the VM is working
       * @return {String} Hexadecimal hash sample
       */
      this.vm_test = function() {
        return hex('abc').toLowerCase() === '900150983cd24fb0d6963f7d28e17f72';
      };
      /**
       * Enable/disable uppercase hexadecimal returned string
       * @param {Boolean}
       * @return {Object} this
       */
      this.setUpperCase = function(a) {
        if (typeof a === 'boolean') {
          hexcase = a;
        }
        return this;
      };
      /**
       * Defines a base64 pad string
       * @param {String} Pad
       * @return {Object} this
       */
      this.setPad = function(a) {
        b64pad = a || b64pad;
        return this;
      };
      /**
       * Defines a base64 pad string
       * @param {Boolean}
       * @return {Object} [this]
       */
      this.setUTF8 = function(a) {
        if (typeof a === 'boolean') {
          utf8 = a;
        }
        return this;
      };

      // private methods

      /**
       * Calculate the MD5 of a raw string
       */

      function rstr(s) {
        s = (utf8) ? utf8Encode(s) : s;
        return binl2rstr(binl(rstr2binl(s), s.length * 8));
      }

      /**
       * Calculate the HMAC-MD5, of a key and some data (raw strings)
       */

      function rstr_hmac(key, data) {
        var bkey, ipad, opad, hash, i;

        key = (utf8) ? utf8Encode(key) : key;
        data = (utf8) ? utf8Encode(data) : data;
        bkey = rstr2binl(key);
        if (bkey.length > 16) {
          bkey = binl(bkey, key.length * 8);
        }

        ipad = Array(16), opad = Array(16);
        for (i = 0; i < 16; i += 1) {
          ipad[i] = bkey[i] ^ 0x36363636;
          opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binl(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl(opad.concat(hash), 512 + 128));
      }

      /**
       * Calculate the MD5 of an array of little-endian words, and a bit length.
       */

      function binl(x, len) {
        var i, olda, oldb, oldc, oldd,
          a = 1732584193,
          b = -271733879,
          c = -1732584194,
          d = 271733878;

        /* append padding */
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;

        for (i = 0; i < x.length; i += 16) {
          olda = a;
          oldb = b;
          oldc = c;
          oldd = d;

          a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
          d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
          b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

          a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
          a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

          a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
          d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
          c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

          a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
          d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

          a = safe_add(a, olda);
          b = safe_add(b, oldb);
          c = safe_add(c, oldc);
          d = safe_add(d, oldd);
        }
        return Array(a, b, c, d);
      }

      /**
       * These functions implement the four basic operations the algorithm uses.
       */

      function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
      }

      function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
      }

      function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
      }

      function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
      }

      function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
      }
    },
    /**
     * @member Hashes
     * @class Hashes.SHA1
     * @param {Object} [config]
     * @constructor
     *
     * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined in FIPS 180-1
     * Version 2.2 Copyright Paul Johnston 2000 - 2009.
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * See http://pajhome.org.uk/crypt/md5 for details.
     */
    SHA1: function(options) {
      /**
       * Private config properties. You may need to tweak these to be compatible with
       * the server-side, but the defaults work in most cases.
       * See {@link Hashes.MD5#method-setUpperCase} and {@link Hashes.SHA1#method-setUpperCase}
       */
      var hexcase = (options && typeof options.uppercase === 'boolean') ? options.uppercase : false, // hexadecimal output case format. false - lowercase; true - uppercase
        b64pad = (options && typeof options.pad === 'string') ? options.pda : '=', // base-64 pad character. Defaults to '=' for strict RFC compliance
        utf8 = (options && typeof options.utf8 === 'boolean') ? options.utf8 : true; // enable/disable utf8 encoding

      // public methods
      this.hex = function(s) {
        return rstr2hex(rstr(s, utf8), hexcase);
      };
      this.b64 = function(s) {
        return rstr2b64(rstr(s, utf8), b64pad);
      };
      this.any = function(s, e) {
        return rstr2any(rstr(s, utf8), e);
      };
      this.raw = function(s) {
        return rstr(s, utf8);
      };
      this.hex_hmac = function(k, d) {
        return rstr2hex(rstr_hmac(k, d));
      };
      this.b64_hmac = function(k, d) {
        return rstr2b64(rstr_hmac(k, d), b64pad);
      };
      this.any_hmac = function(k, d, e) {
        return rstr2any(rstr_hmac(k, d), e);
      };
      /**
       * Perform a simple self-test to see if the VM is working
       * @return {String} Hexadecimal hash sample
       * @public
       */
      this.vm_test = function() {
        return hex('abc').toLowerCase() === '900150983cd24fb0d6963f7d28e17f72';
      };
      /**
       * @description Enable/disable uppercase hexadecimal returned string
       * @param {boolean}
       * @return {Object} this
       * @public
       */
      this.setUpperCase = function(a) {
        if (typeof a === 'boolean') {
          hexcase = a;
        }
        return this;
      };
      /**
       * @description Defines a base64 pad string
       * @param {string} Pad
       * @return {Object} this
       * @public
       */
      this.setPad = function(a) {
        b64pad = a || b64pad;
        return this;
      };
      /**
       * @description Defines a base64 pad string
       * @param {boolean}
       * @return {Object} this
       * @public
       */
      this.setUTF8 = function(a) {
        if (typeof a === 'boolean') {
          utf8 = a;
        }
        return this;
      };

      // private methods

      /**
       * Calculate the SHA-512 of a raw string
       */

      function rstr(s) {
        s = (utf8) ? utf8Encode(s) : s;
        return binb2rstr(binb(rstr2binb(s), s.length * 8));
      }

      /**
       * Calculate the HMAC-SHA1 of a key and some data (raw strings)
       */

      function rstr_hmac(key, data) {
        var bkey, ipad, opad, i, hash;
        key = (utf8) ? utf8Encode(key) : key;
        data = (utf8) ? utf8Encode(data) : data;
        bkey = rstr2binb(key);

        if (bkey.length > 16) {
          bkey = binb(bkey, key.length * 8);
        }
        ipad = Array(16), opad = Array(16);
        for (i = 0; i < 16; i += 1) {
          ipad[i] = bkey[i] ^ 0x36363636;
          opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binb(ipad.concat(rstr2binb(data)), 512 + data.length * 8);
        return binb2rstr(binb(opad.concat(hash), 512 + 160));
      }

      /**
       * Calculate the SHA-1 of an array of big-endian words, and a bit length
       */

      function binb(x, len) {
        var i, j, t, olda, oldb, oldc, oldd, olde,
          w = Array(80),
          a = 1732584193,
          b = -271733879,
          c = -1732584194,
          d = 271733878,
          e = -1009589776;

        /* append padding */
        x[len >> 5] |= 0x80 << (24 - len % 32);
        x[((len + 64 >> 9) << 4) + 15] = len;

        for (i = 0; i < x.length; i += 16) {
          olda = a,
          oldb = b;
          oldc = c;
          oldd = d;
          olde = e;

          for (j = 0; j < 80; j += 1) {
            if (j < 16) {
              w[j] = x[i + j];
            } else {
              w[j] = bit_rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            }
            t = safe_add(safe_add(bit_rol(a, 5), sha1_ft(j, b, c, d)),
              safe_add(safe_add(e, w[j]), sha1_kt(j)));
            e = d;
            d = c;
            c = bit_rol(b, 30);
            b = a;
            a = t;
          }

          a = safe_add(a, olda);
          b = safe_add(b, oldb);
          c = safe_add(c, oldc);
          d = safe_add(d, oldd);
          e = safe_add(e, olde);
        }
        return Array(a, b, c, d, e);
      }

      /**
       * Perform the appropriate triplet combination function for the current
       * iteration
       */

      function sha1_ft(t, b, c, d) {
        if (t < 20) {
          return (b & c) | ((~b) & d);
        }
        if (t < 40) {
          return b ^ c ^ d;
        }
        if (t < 60) {
          return (b & c) | (b & d) | (c & d);
        }
        return b ^ c ^ d;
      }

      /**
       * Determine the appropriate additive constant for the current iteration
       */

      function sha1_kt(t) {
        return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 :
          (t < 60) ? -1894007588 : -899497514;
      }
    },
    /**
     * @class Hashes.SHA256
     * @param {config}
     *
     * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined in FIPS 180-2
     * Version 2.2 Copyright Angel Marin, Paul Johnston 2000 - 2009.
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * See http://pajhome.org.uk/crypt/md5 for details.
     * Also http://anmar.eu.org/projects/jssha2/
     */
    SHA256: function(options) {
      /**
       * Private properties configuration variables. You may need to tweak these to be compatible with
       * the server-side, but the defaults work in most cases.
       * @see this.setUpperCase() method
       * @see this.setPad() method
       */
      var hexcase = (options && typeof options.uppercase === 'boolean') ? options.uppercase : false, // hexadecimal output case format. false - lowercase; true - uppercase  */
        b64pad = (options && typeof options.pad === 'string') ? options.pda : '=',
        /* base-64 pad character. Default '=' for strict RFC compliance   */
        utf8 = (options && typeof options.utf8 === 'boolean') ? options.utf8 : true,
        /* enable/disable utf8 encoding */
        sha256_K;

      /* privileged (public) methods */
      this.hex = function(s) {
        return rstr2hex(rstr(s, utf8));
      };
      this.b64 = function(s) {
        return rstr2b64(rstr(s, utf8), b64pad);
      };
      this.any = function(s, e) {
        return rstr2any(rstr(s, utf8), e);
      };
      this.raw = function(s) {
        return rstr(s, utf8);
      };
      this.hex_hmac = function(k, d) {
        return rstr2hex(rstr_hmac(k, d));
      };
      this.b64_hmac = function(k, d) {
        return rstr2b64(rstr_hmac(k, d), b64pad);
      };
      this.any_hmac = function(k, d, e) {
        return rstr2any(rstr_hmac(k, d), e);
      };
      /**
       * Perform a simple self-test to see if the VM is working
       * @return {String} Hexadecimal hash sample
       * @public
       */
      this.vm_test = function() {
        return hex('abc').toLowerCase() === '900150983cd24fb0d6963f7d28e17f72';
      };
      /**
       * Enable/disable uppercase hexadecimal returned string
       * @param {boolean}
       * @return {Object} this
       * @public
       */
      this.setUpperCase = function(a) {
        if (typeof a === 'boolean') {
          hexcase = a;
        }
        return this;
      };
      /**
       * @description Defines a base64 pad string
       * @param {string} Pad
       * @return {Object} this
       * @public
       */
      this.setPad = function(a) {
        b64pad = a || b64pad;
        return this;
      };
      /**
       * Defines a base64 pad string
       * @param {boolean}
       * @return {Object} this
       * @public
       */
      this.setUTF8 = function(a) {
        if (typeof a === 'boolean') {
          utf8 = a;
        }
        return this;
      };

      // private methods

      /**
       * Calculate the SHA-512 of a raw string
       */

      function rstr(s, utf8) {
        s = (utf8) ? utf8Encode(s) : s;
        return binb2rstr(binb(rstr2binb(s), s.length * 8));
      }

      /**
       * Calculate the HMAC-sha256 of a key and some data (raw strings)
       */

      function rstr_hmac(key, data) {
        key = (utf8) ? utf8Encode(key) : key;
        data = (utf8) ? utf8Encode(data) : data;
        var hash, i = 0,
          bkey = rstr2binb(key),
          ipad = Array(16),
          opad = Array(16);

        if (bkey.length > 16) {
          bkey = binb(bkey, key.length * 8);
        }

        for (; i < 16; i += 1) {
          ipad[i] = bkey[i] ^ 0x36363636;
          opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }

        hash = binb(ipad.concat(rstr2binb(data)), 512 + data.length * 8);
        return binb2rstr(binb(opad.concat(hash), 512 + 256));
      }

      /*
       * Main sha256 function, with its support functions
       */

      function sha256_S(X, n) {
        return (X >>> n) | (X << (32 - n));
      }

      function sha256_R(X, n) {
        return (X >>> n);
      }

      function sha256_Ch(x, y, z) {
        return ((x & y) ^ ((~x) & z));
      }

      function sha256_Maj(x, y, z) {
        return ((x & y) ^ (x & z) ^ (y & z));
      }

      function sha256_Sigma0256(x) {
        return (sha256_S(x, 2) ^ sha256_S(x, 13) ^ sha256_S(x, 22));
      }

      function sha256_Sigma1256(x) {
        return (sha256_S(x, 6) ^ sha256_S(x, 11) ^ sha256_S(x, 25));
      }

      function sha256_Gamma0256(x) {
        return (sha256_S(x, 7) ^ sha256_S(x, 18) ^ sha256_R(x, 3));
      }

      function sha256_Gamma1256(x) {
        return (sha256_S(x, 17) ^ sha256_S(x, 19) ^ sha256_R(x, 10));
      }

      function sha256_Sigma0512(x) {
        return (sha256_S(x, 28) ^ sha256_S(x, 34) ^ sha256_S(x, 39));
      }

      function sha256_Sigma1512(x) {
        return (sha256_S(x, 14) ^ sha256_S(x, 18) ^ sha256_S(x, 41));
      }

      function sha256_Gamma0512(x) {
        return (sha256_S(x, 1) ^ sha256_S(x, 8) ^ sha256_R(x, 7));
      }

      function sha256_Gamma1512(x) {
        return (sha256_S(x, 19) ^ sha256_S(x, 61) ^ sha256_R(x, 6));
      }

      sha256_K = [
        1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987,
        1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522,
        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585,
        113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
        1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344,
        430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
        1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998
      ];

      function binb(m, l) {
        var HASH = [1779033703, -1150833019, 1013904242, -1521486534,
          1359893119, -1694144372, 528734635, 1541459225
        ];
        var W = new Array(64);
        var a, b, c, d, e, f, g, h;
        var i, j, T1, T2;

        /* append padding */
        m[l >> 5] |= 0x80 << (24 - l % 32);
        m[((l + 64 >> 9) << 4) + 15] = l;

        for (i = 0; i < m.length; i += 16) {
          a = HASH[0];
          b = HASH[1];
          c = HASH[2];
          d = HASH[3];
          e = HASH[4];
          f = HASH[5];
          g = HASH[6];
          h = HASH[7];

          for (j = 0; j < 64; j += 1) {
            if (j < 16) {
              W[j] = m[j + i];
            } else {
              W[j] = safe_add(safe_add(safe_add(sha256_Gamma1256(W[j - 2]), W[j - 7]),
                sha256_Gamma0256(W[j - 15])), W[j - 16]);
            }

            T1 = safe_add(safe_add(safe_add(safe_add(h, sha256_Sigma1256(e)), sha256_Ch(e, f, g)),
              sha256_K[j]), W[j]);
            T2 = safe_add(sha256_Sigma0256(a), sha256_Maj(a, b, c));
            h = g;
            g = f;
            f = e;
            e = safe_add(d, T1);
            d = c;
            c = b;
            b = a;
            a = safe_add(T1, T2);
          }

          HASH[0] = safe_add(a, HASH[0]);
          HASH[1] = safe_add(b, HASH[1]);
          HASH[2] = safe_add(c, HASH[2]);
          HASH[3] = safe_add(d, HASH[3]);
          HASH[4] = safe_add(e, HASH[4]);
          HASH[5] = safe_add(f, HASH[5]);
          HASH[6] = safe_add(g, HASH[6]);
          HASH[7] = safe_add(h, HASH[7]);
        }
        return HASH;
      }

    },

    /**
     * @class Hashes.SHA512
     * @param {config}
     *
     * A JavaScript implementation of the Secure Hash Algorithm, SHA-512, as defined in FIPS 180-2
     * Version 2.2 Copyright Anonymous Contributor, Paul Johnston 2000 - 2009.
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * See http://pajhome.org.uk/crypt/md5 for details.
     */
    SHA512: function(options) {
      /**
       * Private properties configuration variables. You may need to tweak these to be compatible with
       * the server-side, but the defaults work in most cases.
       * @see this.setUpperCase() method
       * @see this.setPad() method
       */
      var hexcase = (options && typeof options.uppercase === 'boolean') ? options.uppercase : false,
        /* hexadecimal output case format. false - lowercase; true - uppercase  */
        b64pad = (options && typeof options.pad === 'string') ? options.pda : '=',
        /* base-64 pad character. Default '=' for strict RFC compliance   */
        utf8 = (options && typeof options.utf8 === 'boolean') ? options.utf8 : true,
        /* enable/disable utf8 encoding */
        sha512_k;

      /* privileged (public) methods */
      this.hex = function(s) {
        return rstr2hex(rstr(s));
      };
      this.b64 = function(s) {
        return rstr2b64(rstr(s), b64pad);
      };
      this.any = function(s, e) {
        return rstr2any(rstr(s), e);
      };
      this.raw = function(s) {
        return rstr(s, utf8);
      };
      this.hex_hmac = function(k, d) {
        return rstr2hex(rstr_hmac(k, d));
      };
      this.b64_hmac = function(k, d) {
        return rstr2b64(rstr_hmac(k, d), b64pad);
      };
      this.any_hmac = function(k, d, e) {
        return rstr2any(rstr_hmac(k, d), e);
      };
      /**
       * Perform a simple self-test to see if the VM is working
       * @return {String} Hexadecimal hash sample
       * @public
       */
      this.vm_test = function() {
        return hex('abc').toLowerCase() === '900150983cd24fb0d6963f7d28e17f72';
      };
      /**
       * @description Enable/disable uppercase hexadecimal returned string
       * @param {boolean}
       * @return {Object} this
       * @public
       */
      this.setUpperCase = function(a) {
        if (typeof a === 'boolean') {
          hexcase = a;
        }
        return this;
      };
      /**
       * @description Defines a base64 pad string
       * @param {string} Pad
       * @return {Object} this
       * @public
       */
      this.setPad = function(a) {
        b64pad = a || b64pad;
        return this;
      };
      /**
       * @description Defines a base64 pad string
       * @param {boolean}
       * @return {Object} this
       * @public
       */
      this.setUTF8 = function(a) {
        if (typeof a === 'boolean') {
          utf8 = a;
        }
        return this;
      };

      /* private methods */

      /**
       * Calculate the SHA-512 of a raw string
       */

      function rstr(s) {
        s = (utf8) ? utf8Encode(s) : s;
        return binb2rstr(binb(rstr2binb(s), s.length * 8));
      }
      /*
       * Calculate the HMAC-SHA-512 of a key and some data (raw strings)
       */

      function rstr_hmac(key, data) {
        key = (utf8) ? utf8Encode(key) : key;
        data = (utf8) ? utf8Encode(data) : data;

        var hash, i = 0,
          bkey = rstr2binb(key),
          ipad = Array(32),
          opad = Array(32);

        if (bkey.length > 32) {
          bkey = binb(bkey, key.length * 8);
        }

        for (; i < 32; i += 1) {
          ipad[i] = bkey[i] ^ 0x36363636;
          opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }

        hash = binb(ipad.concat(rstr2binb(data)), 1024 + data.length * 8);
        return binb2rstr(binb(opad.concat(hash), 1024 + 512));
      }

      /**
       * Calculate the SHA-512 of an array of big-endian dwords, and a bit length
       */

      function binb(x, len) {
        var j, i, l,
          W = new Array(80),
          hash = new Array(16),
          //Initial hash values
          H = [
            new int64(0x6a09e667, -205731576),
            new int64(-1150833019, -2067093701),
            new int64(0x3c6ef372, -23791573),
            new int64(-1521486534, 0x5f1d36f1),
            new int64(0x510e527f, -1377402159),
            new int64(-1694144372, 0x2b3e6c1f),
            new int64(0x1f83d9ab, -79577749),
            new int64(0x5be0cd19, 0x137e2179)
          ],
          T1 = new int64(0, 0),
          T2 = new int64(0, 0),
          a = new int64(0, 0),
          b = new int64(0, 0),
          c = new int64(0, 0),
          d = new int64(0, 0),
          e = new int64(0, 0),
          f = new int64(0, 0),
          g = new int64(0, 0),
          h = new int64(0, 0),
          //Temporary variables not specified by the document
          s0 = new int64(0, 0),
          s1 = new int64(0, 0),
          Ch = new int64(0, 0),
          Maj = new int64(0, 0),
          r1 = new int64(0, 0),
          r2 = new int64(0, 0),
          r3 = new int64(0, 0);

        if (sha512_k === undefined) {
          //SHA512 constants
          sha512_k = [
            new int64(0x428a2f98, -685199838), new int64(0x71374491, 0x23ef65cd),
            new int64(-1245643825, -330482897), new int64(-373957723, -2121671748),
            new int64(0x3956c25b, -213338824), new int64(0x59f111f1, -1241133031),
            new int64(-1841331548, -1357295717), new int64(-1424204075, -630357736),
            new int64(-670586216, -1560083902), new int64(0x12835b01, 0x45706fbe),
            new int64(0x243185be, 0x4ee4b28c), new int64(0x550c7dc3, -704662302),
            new int64(0x72be5d74, -226784913), new int64(-2132889090, 0x3b1696b1),
            new int64(-1680079193, 0x25c71235), new int64(-1046744716, -815192428),
            new int64(-459576895, -1628353838), new int64(-272742522, 0x384f25e3),
            new int64(0xfc19dc6, -1953704523), new int64(0x240ca1cc, 0x77ac9c65),
            new int64(0x2de92c6f, 0x592b0275), new int64(0x4a7484aa, 0x6ea6e483),
            new int64(0x5cb0a9dc, -1119749164), new int64(0x76f988da, -2096016459),
            new int64(-1740746414, -295247957), new int64(-1473132947, 0x2db43210),
            new int64(-1341970488, -1728372417), new int64(-1084653625, -1091629340),
            new int64(-958395405, 0x3da88fc2), new int64(-710438585, -1828018395),
            new int64(0x6ca6351, -536640913), new int64(0x14292967, 0xa0e6e70),
            new int64(0x27b70a85, 0x46d22ffc), new int64(0x2e1b2138, 0x5c26c926),
            new int64(0x4d2c6dfc, 0x5ac42aed), new int64(0x53380d13, -1651133473),
            new int64(0x650a7354, -1951439906), new int64(0x766a0abb, 0x3c77b2a8),
            new int64(-2117940946, 0x47edaee6), new int64(-1838011259, 0x1482353b),
            new int64(-1564481375, 0x4cf10364), new int64(-1474664885, -1136513023),
            new int64(-1035236496, -789014639), new int64(-949202525, 0x654be30),
            new int64(-778901479, -688958952), new int64(-694614492, 0x5565a910),
            new int64(-200395387, 0x5771202a), new int64(0x106aa070, 0x32bbd1b8),
            new int64(0x19a4c116, -1194143544), new int64(0x1e376c08, 0x5141ab53),
            new int64(0x2748774c, -544281703), new int64(0x34b0bcb5, -509917016),
            new int64(0x391c0cb3, -976659869), new int64(0x4ed8aa4a, -482243893),
            new int64(0x5b9cca4f, 0x7763e373), new int64(0x682e6ff3, -692930397),
            new int64(0x748f82ee, 0x5defb2fc), new int64(0x78a5636f, 0x43172f60),
            new int64(-2067236844, -1578062990), new int64(-1933114872, 0x1a6439ec),
            new int64(-1866530822, 0x23631e28), new int64(-1538233109, -561857047),
            new int64(-1090935817, -1295615723), new int64(-965641998, -479046869),
            new int64(-903397682, -366583396), new int64(-779700025, 0x21c0c207),
            new int64(-354779690, -840897762), new int64(-176337025, -294727304),
            new int64(0x6f067aa, 0x72176fba), new int64(0xa637dc5, -1563912026),
            new int64(0x113f9804, -1090974290), new int64(0x1b710b35, 0x131c471b),
            new int64(0x28db77f5, 0x23047d84), new int64(0x32caab7b, 0x40c72493),
            new int64(0x3c9ebe0a, 0x15c9bebc), new int64(0x431d67c4, -1676669620),
            new int64(0x4cc5d4be, -885112138), new int64(0x597f299c, -60457430),
            new int64(0x5fcb6fab, 0x3ad6faec), new int64(0x6c44198c, 0x4a475817)
          ];
        }

        for (i = 0; i < 80; i += 1) {
          W[i] = new int64(0, 0);
        }

        // append padding to the source string. The format is described in the FIPS.
        x[len >> 5] |= 0x80 << (24 - (len & 0x1f));
        x[((len + 128 >> 10) << 5) + 31] = len;
        l = x.length;
        for (i = 0; i < l; i += 32) { //32 dwords is the block size
          int64copy(a, H[0]);
          int64copy(b, H[1]);
          int64copy(c, H[2]);
          int64copy(d, H[3]);
          int64copy(e, H[4]);
          int64copy(f, H[5]);
          int64copy(g, H[6]);
          int64copy(h, H[7]);

          for (j = 0; j < 16; j += 1) {
            W[j].h = x[i + 2 * j];
            W[j].l = x[i + 2 * j + 1];
          }

          for (j = 16; j < 80; j += 1) {
            //sigma1
            int64rrot(r1, W[j - 2], 19);
            int64revrrot(r2, W[j - 2], 29);
            int64shr(r3, W[j - 2], 6);
            s1.l = r1.l ^ r2.l ^ r3.l;
            s1.h = r1.h ^ r2.h ^ r3.h;
            //sigma0
            int64rrot(r1, W[j - 15], 1);
            int64rrot(r2, W[j - 15], 8);
            int64shr(r3, W[j - 15], 7);
            s0.l = r1.l ^ r2.l ^ r3.l;
            s0.h = r1.h ^ r2.h ^ r3.h;

            int64add4(W[j], s1, W[j - 7], s0, W[j - 16]);
          }

          for (j = 0; j < 80; j += 1) {
            //Ch
            Ch.l = (e.l & f.l) ^ (~e.l & g.l);
            Ch.h = (e.h & f.h) ^ (~e.h & g.h);

            //Sigma1
            int64rrot(r1, e, 14);
            int64rrot(r2, e, 18);
            int64revrrot(r3, e, 9);
            s1.l = r1.l ^ r2.l ^ r3.l;
            s1.h = r1.h ^ r2.h ^ r3.h;

            //Sigma0
            int64rrot(r1, a, 28);
            int64revrrot(r2, a, 2);
            int64revrrot(r3, a, 7);
            s0.l = r1.l ^ r2.l ^ r3.l;
            s0.h = r1.h ^ r2.h ^ r3.h;

            //Maj
            Maj.l = (a.l & b.l) ^ (a.l & c.l) ^ (b.l & c.l);
            Maj.h = (a.h & b.h) ^ (a.h & c.h) ^ (b.h & c.h);

            int64add5(T1, h, s1, Ch, sha512_k[j], W[j]);
            int64add(T2, s0, Maj);

            int64copy(h, g);
            int64copy(g, f);
            int64copy(f, e);
            int64add(e, d, T1);
            int64copy(d, c);
            int64copy(c, b);
            int64copy(b, a);
            int64add(a, T1, T2);
          }
          int64add(H[0], H[0], a);
          int64add(H[1], H[1], b);
          int64add(H[2], H[2], c);
          int64add(H[3], H[3], d);
          int64add(H[4], H[4], e);
          int64add(H[5], H[5], f);
          int64add(H[6], H[6], g);
          int64add(H[7], H[7], h);
        }

        //represent the hash as an array of 32-bit dwords
        for (i = 0; i < 8; i += 1) {
          hash[2 * i] = H[i].h;
          hash[2 * i + 1] = H[i].l;
        }
        return hash;
      }

      //A constructor for 64-bit numbers

      function int64(h, l) {
        this.h = h;
        this.l = l;
        //this.toString = int64toString;
      }

      //Copies src into dst, assuming both are 64-bit numbers

      function int64copy(dst, src) {
        dst.h = src.h;
        dst.l = src.l;
      }

      //Right-rotates a 64-bit number by shift
      //Won't handle cases of shift>=32
      //The function revrrot() is for that

      function int64rrot(dst, x, shift) {
        dst.l = (x.l >>> shift) | (x.h << (32 - shift));
        dst.h = (x.h >>> shift) | (x.l << (32 - shift));
      }

      //Reverses the dwords of the source and then rotates right by shift.
      //This is equivalent to rotation by 32+shift

      function int64revrrot(dst, x, shift) {
        dst.l = (x.h >>> shift) | (x.l << (32 - shift));
        dst.h = (x.l >>> shift) | (x.h << (32 - shift));
      }

      //Bitwise-shifts right a 64-bit number by shift
      //Won't handle shift>=32, but it's never needed in SHA512

      function int64shr(dst, x, shift) {
        dst.l = (x.l >>> shift) | (x.h << (32 - shift));
        dst.h = (x.h >>> shift);
      }

      //Adds two 64-bit numbers
      //Like the original implementation, does not rely on 32-bit operations

      function int64add(dst, x, y) {
        var w0 = (x.l & 0xffff) + (y.l & 0xffff);
        var w1 = (x.l >>> 16) + (y.l >>> 16) + (w0 >>> 16);
        var w2 = (x.h & 0xffff) + (y.h & 0xffff) + (w1 >>> 16);
        var w3 = (x.h >>> 16) + (y.h >>> 16) + (w2 >>> 16);
        dst.l = (w0 & 0xffff) | (w1 << 16);
        dst.h = (w2 & 0xffff) | (w3 << 16);
      }

      //Same, except with 4 addends. Works faster than adding them one by one.

      function int64add4(dst, a, b, c, d) {
        var w0 = (a.l & 0xffff) + (b.l & 0xffff) + (c.l & 0xffff) + (d.l & 0xffff);
        var w1 = (a.l >>> 16) + (b.l >>> 16) + (c.l >>> 16) + (d.l >>> 16) + (w0 >>> 16);
        var w2 = (a.h & 0xffff) + (b.h & 0xffff) + (c.h & 0xffff) + (d.h & 0xffff) + (w1 >>> 16);
        var w3 = (a.h >>> 16) + (b.h >>> 16) + (c.h >>> 16) + (d.h >>> 16) + (w2 >>> 16);
        dst.l = (w0 & 0xffff) | (w1 << 16);
        dst.h = (w2 & 0xffff) | (w3 << 16);
      }

      //Same, except with 5 addends

      function int64add5(dst, a, b, c, d, e) {
        var w0 = (a.l & 0xffff) + (b.l & 0xffff) + (c.l & 0xffff) + (d.l & 0xffff) + (e.l & 0xffff),
          w1 = (a.l >>> 16) + (b.l >>> 16) + (c.l >>> 16) + (d.l >>> 16) + (e.l >>> 16) + (w0 >>> 16),
          w2 = (a.h & 0xffff) + (b.h & 0xffff) + (c.h & 0xffff) + (d.h & 0xffff) + (e.h & 0xffff) + (w1 >>> 16),
          w3 = (a.h >>> 16) + (b.h >>> 16) + (c.h >>> 16) + (d.h >>> 16) + (e.h >>> 16) + (w2 >>> 16);
        dst.l = (w0 & 0xffff) | (w1 << 16);
        dst.h = (w2 & 0xffff) | (w3 << 16);
      }
    },
    /**
     * @class Hashes.RMD160
     * @constructor
     * @param {Object} [config]
     *
     * A JavaScript implementation of the RIPEMD-160 Algorithm
     * Version 2.2 Copyright Jeremy Lin, Paul Johnston 2000 - 2009.
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * See http://pajhome.org.uk/crypt/md5 for details.
     * Also http://www.ocf.berkeley.edu/~jjlin/jsotp/
     */
    RMD160: function(options) {
      /**
       * Private properties configuration variables. You may need to tweak these to be compatible with
       * the server-side, but the defaults work in most cases.
       * @see this.setUpperCase() method
       * @see this.setPad() method
       */
      var hexcase = (options && typeof options.uppercase === 'boolean') ? options.uppercase : false,
        /* hexadecimal output case format. false - lowercase; true - uppercase  */
        b64pad = (options && typeof options.pad === 'string') ? options.pda : '=',
        /* base-64 pad character. Default '=' for strict RFC compliance   */
        utf8 = (options && typeof options.utf8 === 'boolean') ? options.utf8 : true,
        /* enable/disable utf8 encoding */
        rmd160_r1 = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
          7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
          3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
          1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
          4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
        ],
        rmd160_r2 = [
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
          6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
          15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
          8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
          12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
        ],
        rmd160_s1 = [
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
          7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
          11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
          11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
          9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
        ],
        rmd160_s2 = [
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
          9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
          9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
          15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
          8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
        ];

      /* privileged (public) methods */
      this.hex = function(s) {
        return rstr2hex(rstr(s, utf8));
      };
      this.b64 = function(s) {
        return rstr2b64(rstr(s, utf8), b64pad);
      };
      this.any = function(s, e) {
        return rstr2any(rstr(s, utf8), e);
      };
      this.raw = function(s) {
        return rstr(s, utf8);
      };
      this.hex_hmac = function(k, d) {
        return rstr2hex(rstr_hmac(k, d));
      };
      this.b64_hmac = function(k, d) {
        return rstr2b64(rstr_hmac(k, d), b64pad);
      };
      this.any_hmac = function(k, d, e) {
        return rstr2any(rstr_hmac(k, d), e);
      };
      /**
       * Perform a simple self-test to see if the VM is working
       * @return {String} Hexadecimal hash sample
       * @public
       */
      this.vm_test = function() {
        return hex('abc').toLowerCase() === '900150983cd24fb0d6963f7d28e17f72';
      };
      /**
       * @description Enable/disable uppercase hexadecimal returned string
       * @param {boolean}
       * @return {Object} this
       * @public
       */
      this.setUpperCase = function(a) {
        if (typeof a === 'boolean') {
          hexcase = a;
        }
        return this;
      };
      /**
       * @description Defines a base64 pad string
       * @param {string} Pad
       * @return {Object} this
       * @public
       */
      this.setPad = function(a) {
        if (typeof a !== 'undefined') {
          b64pad = a;
        }
        return this;
      };
      /**
       * @description Defines a base64 pad string
       * @param {boolean}
       * @return {Object} this
       * @public
       */
      this.setUTF8 = function(a) {
        if (typeof a === 'boolean') {
          utf8 = a;
        }
        return this;
      };

      /* private methods */

      /**
       * Calculate the rmd160 of a raw string
       */

      function rstr(s) {
        s = (utf8) ? utf8Encode(s) : s;
        return binl2rstr(binl(rstr2binl(s), s.length * 8));
      }

      /**
       * Calculate the HMAC-rmd160 of a key and some data (raw strings)
       */

      function rstr_hmac(key, data) {
        key = (utf8) ? utf8Encode(key) : key;
        data = (utf8) ? utf8Encode(data) : data;
        var i, hash,
          bkey = rstr2binl(key),
          ipad = Array(16),
          opad = Array(16);

        if (bkey.length > 16) {
          bkey = binl(bkey, key.length * 8);
        }

        for (i = 0; i < 16; i += 1) {
          ipad[i] = bkey[i] ^ 0x36363636;
          opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binl(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl(opad.concat(hash), 512 + 160));
      }

      /**
       * Convert an array of little-endian words to a string
       */

      function binl2rstr(input) {
        var i, output = '',
          l = input.length * 32;
        for (i = 0; i < l; i += 8) {
          output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
        }
        return output;
      }

      /**
       * Calculate the RIPE-MD160 of an array of little-endian words, and a bit length.
       */

      function binl(x, len) {
        var T, j, i, l,
          h0 = 0x67452301,
          h1 = 0xefcdab89,
          h2 = 0x98badcfe,
          h3 = 0x10325476,
          h4 = 0xc3d2e1f0,
          A1, B1, C1, D1, E1,
          A2, B2, C2, D2, E2;

        /* append padding */
        x[len >> 5] |= 0x80 << (len % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;
        l = x.length;

        for (i = 0; i < l; i += 16) {
          A1 = A2 = h0;
          B1 = B2 = h1;
          C1 = C2 = h2;
          D1 = D2 = h3;
          E1 = E2 = h4;
          for (j = 0; j <= 79; j += 1) {
            T = safe_add(A1, rmd160_f(j, B1, C1, D1));
            T = safe_add(T, x[i + rmd160_r1[j]]);
            T = safe_add(T, rmd160_K1(j));
            T = safe_add(bit_rol(T, rmd160_s1[j]), E1);
            A1 = E1;
            E1 = D1;
            D1 = bit_rol(C1, 10);
            C1 = B1;
            B1 = T;
            T = safe_add(A2, rmd160_f(79 - j, B2, C2, D2));
            T = safe_add(T, x[i + rmd160_r2[j]]);
            T = safe_add(T, rmd160_K2(j));
            T = safe_add(bit_rol(T, rmd160_s2[j]), E2);
            A2 = E2;
            E2 = D2;
            D2 = bit_rol(C2, 10);
            C2 = B2;
            B2 = T;
          }

          T = safe_add(h1, safe_add(C1, D2));
          h1 = safe_add(h2, safe_add(D1, E2));
          h2 = safe_add(h3, safe_add(E1, A2));
          h3 = safe_add(h4, safe_add(A1, B2));
          h4 = safe_add(h0, safe_add(B1, C2));
          h0 = T;
        }
        return [h0, h1, h2, h3, h4];
      }

      // specific algorithm methods

      function rmd160_f(j, x, y, z) {
        return (0 <= j && j <= 15) ? (x ^ y ^ z) :
          (16 <= j && j <= 31) ? (x & y) | (~x & z) :
          (32 <= j && j <= 47) ? (x | ~y) ^ z :
          (48 <= j && j <= 63) ? (x & z) | (y & ~z) :
          (64 <= j && j <= 79) ? x ^ (y | ~z) :
          'rmd160_f: j out of range';
      }

      function rmd160_K1(j) {
        return (0 <= j && j <= 15) ? 0x00000000 :
          (16 <= j && j <= 31) ? 0x5a827999 :
          (32 <= j && j <= 47) ? 0x6ed9eba1 :
          (48 <= j && j <= 63) ? 0x8f1bbcdc :
          (64 <= j && j <= 79) ? 0xa953fd4e :
          'rmd160_K1: j out of range';
      }

      function rmd160_K2(j) {
        return (0 <= j && j <= 15) ? 0x50a28be6 :
          (16 <= j && j <= 31) ? 0x5c4dd124 :
          (32 <= j && j <= 47) ? 0x6d703ef3 :
          (48 <= j && j <= 63) ? 0x7a6d76e9 :
          (64 <= j && j <= 79) ? 0x00000000 :
          'rmd160_K2: j out of range';
      }
    }
  };

  // exposes Hashes
  (function(window, undefined) {
    var freeExports = false;
    if (typeof exports === 'object') {
      freeExports = exports;
      if (exports && typeof global === 'object' && global && global === global.global) {
        window = global;
      }
    }

    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
      // define as an anonymous module, so, through path mapping, it can be aliased
      define(function() {
        return Hashes;
      });
    } else if (freeExports) {
      // in Node.js or RingoJS v0.8.0+
      if (typeof module === 'object' && module && module.exports === freeExports) {
        module.exports = Hashes;
      }
      // in Narwhal or RingoJS v0.7.0-
      else {
        freeExports.Hashes = Hashes;
      }
    } else {
      // in a browser or Rhino
      window.Hashes = Hashes;
    }
  }(this));
}()); // IIFE

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
'use strict';

var hashes = require('jshashes'),
    xtend = require('xtend'),
    sha1 = new hashes.SHA1();

var ohauth = {};

ohauth.qsString = function(obj) {
    return Object.keys(obj).sort().map(function(key) {
        return ohauth.percentEncode(key) + '=' +
            ohauth.percentEncode(obj[key]);
    }).join('&');
};

ohauth.stringQs = function(str) {
    return str.split('&').filter(function (pair) {
        return pair !== '';
    }).reduce(function(obj, pair){
        var parts = pair.split('=');
        obj[decodeURIComponent(parts[0])] = (null === parts[1]) ?
            '' : decodeURIComponent(parts[1]);
        return obj;
    }, {});
};

ohauth.rawxhr = function(method, url, data, headers, callback) {
    var xhr = new XMLHttpRequest(),
        twoHundred = /^20\d$/;
    xhr.onreadystatechange = function() {
        if (4 == xhr.readyState && 0 !== xhr.status) {
            if (twoHundred.test(xhr.status)) callback(null, xhr);
            else return callback(xhr, null);
        }
    };
    xhr.onerror = function(e) { return callback(e, null); };
    xhr.open(method, url, true);
    for (var h in headers) xhr.setRequestHeader(h, headers[h]);
    xhr.send(data);
};

ohauth.xhr = function(method, url, auth, data, options, callback) {
    var headers = (options && options.header) || {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    headers.Authorization = 'OAuth ' + ohauth.authHeader(auth);
    ohauth.rawxhr(method, url, data, headers, callback);
};

ohauth.nonce = function() {
    for (var o = ''; o.length < 6;) {
        o += '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'[Math.floor(Math.random() * 61)];
    }
    return o;
};

ohauth.authHeader = function(obj) {
    return Object.keys(obj).sort().map(function(key) {
        return encodeURIComponent(key) + '="' + encodeURIComponent(obj[key]) + '"';
    }).join(', ');
};

ohauth.timestamp = function() { return ~~((+new Date()) / 1000); };

ohauth.percentEncode = function(s) {
    return encodeURIComponent(s)
        .replace(/\!/g, '%21').replace(/\'/g, '%27')
        .replace(/\*/g, '%2A').replace(/\(/g, '%28').replace(/\)/g, '%29');
};

ohauth.baseString = function(method, url, params) {
    if (params.oauth_signature) delete params.oauth_signature;
    return [
        method,
        ohauth.percentEncode(url),
        ohauth.percentEncode(ohauth.qsString(params))].join('&');
};

ohauth.signature = function(oauth_secret, token_secret, baseString) {
    return sha1.b64_hmac(
        ohauth.percentEncode(oauth_secret) + '&' +
        ohauth.percentEncode(token_secret),
        baseString);
};

/**
 * Takes an options object for configuration (consumer_key,
 * consumer_secret, version, signature_method, token, token_secret)
 * and returns a function that generates the Authorization header
 * for given data.
 *
 * The returned function takes these parameters:
 * - method: GET/POST/...
 * - uri: full URI with protocol, port, path and query string
 * - extra_params: any extra parameters (that are passed in the POST data),
 *   can be an object or a from-urlencoded string.
 *
 * Returned function returns full OAuth header with "OAuth" string in it.
 */

ohauth.headerGenerator = function(options) {
    options = options || {};
    var consumer_key = options.consumer_key || '',
        consumer_secret = options.consumer_secret || '',
        signature_method = options.signature_method || 'HMAC-SHA1',
        version = options.version || '1.0',
        token = options.token || '',
        token_secret = options.token_secret || '';

    return function(method, uri, extra_params) {
        method = method.toUpperCase();
        if (typeof extra_params === 'string' && extra_params.length > 0) {
            extra_params = ohauth.stringQs(extra_params);
        }

        var uri_parts = uri.split('?', 2),
        base_uri = uri_parts[0];

        var query_params = uri_parts.length === 2 ?
            ohauth.stringQs(uri_parts[1]) : {};

        var oauth_params = {
            oauth_consumer_key: consumer_key,
            oauth_signature_method: signature_method,
            oauth_version: version,
            oauth_timestamp: ohauth.timestamp(),
            oauth_nonce: ohauth.nonce()
        };

        if (token) oauth_params.oauth_token = token;

        var all_params = xtend({}, oauth_params, query_params, extra_params),
            base_str = ohauth.baseString(method, base_uri, all_params);

        oauth_params.oauth_signature = ohauth.signature(consumer_secret, token_secret, base_str);

        return 'OAuth ' + ohauth.authHeader(oauth_params);
    };
};

module.exports = ohauth;

},{"jshashes":2,"xtend":5}],4:[function(require,module,exports){
(function (global){
"use strict"
// Module export pattern from
// https://github.com/umdjs/umd/blob/master/returnExports.js
;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.store = factory();
  }
}(this, function () {
	
	// Store.js
	var store = {},
		win = (typeof window != 'undefined' ? window : global),
		doc = win.document,
		localStorageName = 'localStorage',
		scriptTag = 'script',
		storage

	store.disabled = false
	store.version = '1.3.20'
	store.set = function(key, value) {}
	store.get = function(key, defaultVal) {}
	store.has = function(key) { return store.get(key) !== undefined }
	store.remove = function(key) {}
	store.clear = function() {}
	store.transact = function(key, defaultVal, transactionFn) {
		if (transactionFn == null) {
			transactionFn = defaultVal
			defaultVal = null
		}
		if (defaultVal == null) {
			defaultVal = {}
		}
		var val = store.get(key, defaultVal)
		transactionFn(val)
		store.set(key, val)
	}
	store.getAll = function() {}
	store.forEach = function() {}

	store.serialize = function(value) {
		return JSON.stringify(value)
	}
	store.deserialize = function(value) {
		if (typeof value != 'string') { return undefined }
		try { return JSON.parse(value) }
		catch(e) { return value || undefined }
	}

	// Functions to encapsulate questionable FireFox 3.6.13 behavior
	// when about.config::dom.storage.enabled === false
	// See https://github.com/marcuswestin/store.js/issues#issue/13
	function isLocalStorageNameSupported() {
		try { return (localStorageName in win && win[localStorageName]) }
		catch(err) { return false }
	}

	if (isLocalStorageNameSupported()) {
		storage = win[localStorageName]
		store.set = function(key, val) {
			if (val === undefined) { return store.remove(key) }
			storage.setItem(key, store.serialize(val))
			return val
		}
		store.get = function(key, defaultVal) {
			var val = store.deserialize(storage.getItem(key))
			return (val === undefined ? defaultVal : val)
		}
		store.remove = function(key) { storage.removeItem(key) }
		store.clear = function() { storage.clear() }
		store.getAll = function() {
			var ret = {}
			store.forEach(function(key, val) {
				ret[key] = val
			})
			return ret
		}
		store.forEach = function(callback) {
			for (var i=0; i<storage.length; i++) {
				var key = storage.key(i)
				callback(key, store.get(key))
			}
		}
	} else if (doc && doc.documentElement.addBehavior) {
		var storageOwner,
			storageContainer
		// Since #userData storage applies only to specific paths, we need to
		// somehow link our data to a specific path.  We choose /favicon.ico
		// as a pretty safe option, since all browsers already make a request to
		// this URL anyway and being a 404 will not hurt us here.  We wrap an
		// iframe pointing to the favicon in an ActiveXObject(htmlfile) object
		// (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
		// since the iframe access rules appear to allow direct access and
		// manipulation of the document element, even for a 404 page.  This
		// document can be used instead of the current document (which would
		// have been limited to the current path) to perform #userData storage.
		try {
			storageContainer = new ActiveXObject('htmlfile')
			storageContainer.open()
			storageContainer.write('<'+scriptTag+'>document.w=window</'+scriptTag+'><iframe src="/favicon.ico"></iframe>')
			storageContainer.close()
			storageOwner = storageContainer.w.frames[0].document
			storage = storageOwner.createElement('div')
		} catch(e) {
			// somehow ActiveXObject instantiation failed (perhaps some special
			// security settings or otherwse), fall back to per-path storage
			storage = doc.createElement('div')
			storageOwner = doc.body
		}
		var withIEStorage = function(storeFunction) {
			return function() {
				var args = Array.prototype.slice.call(arguments, 0)
				args.unshift(storage)
				// See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
				// and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
				storageOwner.appendChild(storage)
				storage.addBehavior('#default#userData')
				storage.load(localStorageName)
				var result = storeFunction.apply(store, args)
				storageOwner.removeChild(storage)
				return result
			}
		}

		// In IE7, keys cannot start with a digit or contain certain chars.
		// See https://github.com/marcuswestin/store.js/issues/40
		// See https://github.com/marcuswestin/store.js/issues/83
		var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")
		var ieKeyFix = function(key) {
			return key.replace(/^d/, '___$&').replace(forbiddenCharsRegex, '___')
		}
		store.set = withIEStorage(function(storage, key, val) {
			key = ieKeyFix(key)
			if (val === undefined) { return store.remove(key) }
			storage.setAttribute(key, store.serialize(val))
			storage.save(localStorageName)
			return val
		})
		store.get = withIEStorage(function(storage, key, defaultVal) {
			key = ieKeyFix(key)
			var val = store.deserialize(storage.getAttribute(key))
			return (val === undefined ? defaultVal : val)
		})
		store.remove = withIEStorage(function(storage, key) {
			key = ieKeyFix(key)
			storage.removeAttribute(key)
			storage.save(localStorageName)
		})
		store.clear = withIEStorage(function(storage) {
			var attributes = storage.XMLDocument.documentElement.attributes
			storage.load(localStorageName)
			for (var i=attributes.length-1; i>=0; i--) {
				storage.removeAttribute(attributes[i].name)
			}
			storage.save(localStorageName)
		})
		store.getAll = function(storage) {
			var ret = {}
			store.forEach(function(key, val) {
				ret[key] = val
			})
			return ret
		}
		store.forEach = withIEStorage(function(storage, callback) {
			var attributes = storage.XMLDocument.documentElement.attributes
			for (var i=0, attr; attr=attributes[i]; ++i) {
				callback(attr.name, store.deserialize(storage.getAttribute(attr.name)))
			}
		})
	}

	try {
		var testKey = '__storejs__'
		store.set(testKey, testKey)
		if (store.get(testKey) != testKey) { store.disabled = true }
		store.remove(testKey)
	} catch(e) {
		store.disabled = true
	}
	store.enabled = !store.disabled
	
	return store
}));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}]},{},[1])(1)
});
(function() {var Color = (function() {
var w3cColors = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgrey: '#a9a9a9',
  darkgreen: '#006400',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  gold: '#ffd700',
  goldenrod: '#daa520',
  gray: '#808080',
  grey: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavender: '#e6e6fa',
  lavenderblush: '#fff0f5',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgrey: '#d3d3d3',
  lightgreen: '#90ee90',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
};

function hue2rgb(p, q, t) {
  if (t<0) t += 1;
  if (t>1) t -= 1;
  if (t<1/6) return p + (q - p)*6*t;
  if (t<1/2) return q;
  if (t<2/3) return p + (q - p)*(2/3 - t)*6;
  return p;
}

function clamp(v, max) {
  return Math.min(max, Math.max(0, v || 0));
}

/**
 * @param str, object can be in any of these: 'red', '#0099ff', 'rgb(64, 128, 255)', 'rgba(64, 128, 255, 0.5)', { r:0.2, g:0.3, b:0.9, a:1 }
 */
var Color = function(str) {
  str = str || '';

  if (typeof str === 'object') {
    var rgba = str;
    this.r = clamp(rgba.r, 1);
    this.g = clamp(rgba.g, 1);
    this.b = clamp(rgba.b, 1);
    this.a = (rgba.a !== undefined ? clamp(rgba.a, 1) : 1);
  } else if (typeof str === 'string') {
    str = str.toLowerCase();
    str = w3cColors[str] || str;
    var m;
    if ((m = str.match(/^#?(\w{2})(\w{2})(\w{2})$/))) {
      this.r = parseInt(m[1], 16)/255;
      this.g = parseInt(m[2], 16)/255;
      this.b = parseInt(m[3], 16)/255;
      this.a = 1;
    } else if ((m = str.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))) {
      this.r = parseInt(m[1], 10)/255;
      this.g = parseInt(m[2], 10)/255;
      this.b = parseInt(m[3], 10)/255;
      this.a = m[4] ? parseFloat(m[5]) : 1;
    }
  }
};

Color.prototype = {

  toHSL: function() {
    if (this.r === undefined || this.g === undefined || this.b === undefined) {
      return;
    }

    var
      max = Math.max(this.r, this.g, this.b),
      min = Math.min(this.r, this.g, this.b),
      h, s, l = (max + min)/2,
      d = max - min;

    if (!d) {
      h = s = 0; // achromatic
    } else {
      s = l>0.5 ? d/(2 - max - min) : d/(max + min);
      switch (max) {
        case this.r:
          h = (this.g - this.b)/d + (this.g<this.b ? 6 : 0);
          break;
        case this.g:
          h = (this.b - this.r)/d + 2;
          break;
        case this.b:
          h = (this.r - this.g)/d + 4;
          break;
      }
      h *= 60;
    }

    return { h: h, s: s, l: l };
  },

  fromHSL: function(hsl) {
    // h = clamp(hsl.h, 360),
    // s = clamp(hsl.s, 1),
    // l = clamp(hsl.l, 1),

    // achromatic
    if (hsl.s === 0) {
      this.r = hsl.l;
      this.g = hsl.l;
      this.b = hsl.l;
    } else {
      var
        q = hsl.l<0.5 ? hsl.l*(1 + hsl.s) : hsl.l + hsl.s - hsl.l*hsl.s,
        p = 2*hsl.l - q;
      hsl.h /= 360;
      this.r = hue2rgb(p, q, hsl.h + 1/3);
      this.g = hue2rgb(p, q, hsl.h);
      this.b = hue2rgb(p, q, hsl.h - 1/3);
    }

    return this;
  },

  toString: function() {
    if (this.r === undefined || this.g === undefined || this.b === undefined) {
      return '';
    }

    if (this.a === 1) {
      return '#' + ((1<<24) + (Math.round(this.r*255)<<16) + (Math.round(this.g*255)<<8) + Math.round(this.b*255)).toString(16).slice(1, 7);
    }
    return 'rgba(' + [Math.round(this.r*255), Math.round(this.g*255), Math.round(this.b*255), this.a.toFixed(2)].join(',') + ')';
  },

  toArray: function() {
    if (this.r === undefined || this.g === undefined || this.b === undefined) {
      return;
    }
    return [this.r, this.g, this.b];
  },

  hue: function(h) {
    var hsl = this.toHSL();
    hsl.h *= h;
    this.fromHSL(hsl);
    return this;
  },

  saturation: function(s) {
    var hsl = this.toHSL();
    hsl.s *= s;
    this.fromHSL(hsl);
    return this;
  },

  lightness: function(l) {
    var hsl = this.toHSL();
    hsl.l *= l;
    this.fromHSL(hsl);
    return this;
  },

  alpha: function(a) {
    this.a *= a;
    return this;
  }
};

return Color;

}());

if (typeof module === 'object') { module.exports = Color; }

/*
 (c) 2011-2015, Vladimir Agafonkin
 SunCalc is a JavaScript library for calculating sun position and light phases.
 https://github.com/mourner/suncalc
*/

var suncalc = (function () {
  'use strict';

// shortcuts for easier to read formulas

  var PI = Math.PI,
    sin = Math.sin,
    cos = Math.cos,
    tan = Math.tan,
    asin = Math.asin,
    atan = Math.atan2,
    rad = PI/180;

// sun calculations are based on http://aa.quae.nl/en/reken/zonpositie.html formulas


// date/time constants and conversions

  var dayMs = 1000*60*60*24,
    J1970 = 2440588,
    J2000 = 2451545;

  function toJulian(date) {
    return date.valueOf()/dayMs - 0.5 + J1970;
  }

  function toDays(date) {
    return toJulian(date) - J2000;
  }


// general calculations for position

  var e = rad*23.4397; // obliquity of the Earth

  function rightAscension(l, b) {
    return atan(sin(l)*cos(e) - tan(b)*sin(e), cos(l));
  }

  function declination(l, b) {
    return asin(sin(b)*cos(e) + cos(b)*sin(e)*sin(l));
  }

  function azimuth(H, phi, dec) {
    return atan(sin(H), cos(H)*sin(phi) - tan(dec)*cos(phi));
  }

  function altitude(H, phi, dec) {
    return asin(sin(phi)*sin(dec) + cos(phi)*cos(dec)*cos(H));
  }

  function siderealTime(d, lw) {
    return rad*(280.16 + 360.9856235*d) - lw;
  }


// general sun calculations

  function solarMeanAnomaly(d) {
    return rad*(357.5291 + 0.98560028*d);
  }

  function eclipticLongitude(M) {

    var C = rad*(1.9148*sin(M) + 0.02*sin(2*M) + 0.0003*sin(3*M)), // equation of center
      P = rad*102.9372; // perihelion of the Earth

    return M + C + P + PI;
  }

  function sunCoords(d) {

    var M = solarMeanAnomaly(d),
      L = eclipticLongitude(M);

    return {
      dec: declination(L, 0),
      ra: rightAscension(L, 0)
    };
  }

// calculates sun position for a given date and latitude/longitude

  return function(date, lat, lng) {

    var lw = rad* -lng,
      phi = rad*lat,
      d = toDays(date),

      c = sunCoords(d),
      H = siderealTime(d, lw) - c.ra;

    return {
      azimuth: azimuth(H, phi, c.dec),
      altitude: altitude(H, phi, c.dec)
    };
  };

}());


var Shaders = {"picking":{"vertex":"precision highp float;  //is default in vertex shaders anyway, using highp fixes #49\n#define halfPi 1.57079632679\nattribute vec4 aPosition;\nattribute vec3 aId;\nattribute vec4 aFilter;\nuniform mat4 uModelMatrix;\nuniform mat4 uMatrix;\nuniform float uFogRadius;\nuniform float uTime;\nvarying vec4 vColor;\nvoid main() {\n  float t = clamp((uTime-aFilter.r) / (aFilter.g-aFilter.r), 0.0, 1.0);\n  float f = aFilter.b + (aFilter.a-aFilter.b) * t;\n  if (f == 0.0) {\n    gl_Position = vec4(0.0, 0.0, 0.0, 0.0);\n    vColor = vec4(0.0, 0.0, 0.0, 0.0);\n  } else {\n    vec4 pos = vec4(aPosition.x, aPosition.y, aPosition.z*f, aPosition.w);\n    gl_Position = uMatrix * pos;\n    vec4 mPosition = vec4(uModelMatrix * pos);\n    float distance = length(mPosition);\n    if (distance > uFogRadius) {\n      vColor = vec4(0.0, 0.0, 0.0, 0.0);\n    } else {\n      vColor = vec4(aId, 1.0);\n    }\n  }\n}\n","fragment":"#ifdef GL_ES\n  precision mediump float;\n#endif\nvarying vec4 vColor;\nvoid main() {\n  gl_FragColor = vColor;\n}\n"},"buildings":{"vertex":"precision highp float;  //is default in vertex shaders anyway, using highp fixes #49\n#define halfPi 1.57079632679\nattribute vec4 aPosition;\nattribute vec2 aTexCoord;\nattribute vec3 aNormal;\nattribute vec3 aColor;\nattribute vec4 aFilter;\nattribute vec3 aId;\nuniform mat4 uModelMatrix;\nuniform mat4 uMatrix;\nuniform mat3 uNormalTransform;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nuniform vec3 uHighlightColor;\nuniform vec3 uHighlightId;\nuniform vec2 uViewDirOnMap;\nuniform vec2 uLowerEdgePoint;\nuniform float uTime;\nvarying vec3 vColor;\nvarying vec2 vTexCoord;\nvarying float verticalDistanceToLowerEdge;\nconst float gradientHeight = 90.0;\nconst float gradientStrength = 0.4;\nvoid main() {\n  float t = clamp((uTime-aFilter.r) / (aFilter.g-aFilter.r), 0.0, 1.0);\n  float f = aFilter.b + (aFilter.a-aFilter.b) * t;\n  if (f == 0.0) {\n    gl_Position = vec4(0.0, 0.0, 0.0, 0.0);\n    vColor = vec3(0.0, 0.0, 0.0);\n  } else {\n    vec4 pos = vec4(aPosition.x, aPosition.y, aPosition.z*f, aPosition.w);\n    gl_Position = uMatrix * pos;\n    //*** highlight object ******************************************************\n    vec3 color = aColor;\n    if (uHighlightId == aId) {\n      color = mix(aColor, uHighlightColor, 0.5);\n    }\n    //*** light intensity, defined by light direction on surface ****************\n    vec3 transformedNormal = aNormal * uNormalTransform;\n    float lightIntensity = max( dot(transformedNormal, uLightDirection), 0.0) / 1.5;\n    color = color + uLightColor * lightIntensity;\n    vTexCoord = aTexCoord;\n    //*** vertical shading ******************************************************\n    float verticalShading = clamp((gradientHeight-pos.z) / (gradientHeight/gradientStrength), 0.0, gradientStrength);\n    //***************************************************************************\n    vColor = color-verticalShading;\n    vec4 worldPos = uModelMatrix * pos;\n    vec2 dirFromLowerEdge = worldPos.xy / worldPos.w - uLowerEdgePoint;\n    verticalDistanceToLowerEdge = dot(dirFromLowerEdge, uViewDirOnMap);\n  }\n}\n","fragment":"#ifdef GL_ES\n  precision mediump float;\n#endif\nvarying vec3 vColor;\nvarying vec2 vTexCoord;\nvarying float verticalDistanceToLowerEdge;\nuniform vec3 uFogColor;\nuniform float uFogDistance;\nuniform float uFogBlurDistance;\nuniform sampler2D uWallTexIndex;\nvoid main() {\n    \n  float fogIntensity = (verticalDistanceToLowerEdge - uFogDistance) / uFogBlurDistance;\n  fogIntensity = clamp(fogIntensity, 0.0, 1.0);\n  gl_FragColor = vec4( vColor* texture2D(uWallTexIndex, vTexCoord).rgb, 1.0-fogIntensity);\n}\n"},"buildings.shadows":{"vertex":"precision highp float;  //is default in vertex shaders anyway, using highp fixes #49\n#define halfPi 1.57079632679\nattribute vec4 aPosition;\nattribute vec3 aNormal;\nattribute vec3 aColor;\nattribute vec4 aFilter;\nattribute vec3 aId;\nattribute vec2 aTexCoord;\nuniform mat4 uModelMatrix;\nuniform mat4 uMatrix;\nuniform mat4 uSunMatrix;\nuniform mat3 uNormalTransform;\nuniform vec3 uHighlightColor;\nuniform vec3 uHighlightId;\nuniform vec2 uViewDirOnMap;\nuniform vec2 uLowerEdgePoint;\nuniform float uTime;\nvarying vec3 vColor;\nvarying vec2 vTexCoord;\nvarying vec3 vNormal;\nvarying vec3 vSunRelPosition;\nvarying float verticalDistanceToLowerEdge;\nfloat gradientHeight = 90.0;\nfloat gradientStrength = 0.4;\nvoid main() {\n  float t = clamp((uTime-aFilter.r) / (aFilter.g-aFilter.r), 0.0, 1.0);\n  float f = aFilter.b + (aFilter.a-aFilter.b) * t;\n  if (f == 0.0) {\n    gl_Position = vec4(0.0, 0.0, 0.0, 0.0);\n    vColor = vec3(0.0, 0.0, 0.0);\n  } else {\n    vec4 pos = vec4(aPosition.x, aPosition.y, aPosition.z*f, aPosition.w);\n    gl_Position = uMatrix * pos;\n    //*** highlight object ******************************************************\n    vec3 color = aColor;\n    if (uHighlightId == aId) {\n      color = mix(aColor, uHighlightColor, 0.5);\n    }\n    //*** light intensity, defined by light direction on surface ****************\n    vNormal = aNormal;\n    vTexCoord = aTexCoord;\n    //vec3 transformedNormal = aNormal * uNormalTransform;\n    //float lightIntensity = max( dot(aNormal, uLightDirection), 0.0) / 1.5;\n    //color = color + uLightColor * lightIntensity;\n    //*** vertical shading ******************************************************\n    float verticalShading = clamp((gradientHeight-pos.z) / (gradientHeight/gradientStrength), 0.0, gradientStrength);\n    //***************************************************************************\n    vColor = color-verticalShading;\n    vec4 worldPos = uModelMatrix * pos;\n    vec2 dirFromLowerEdge = worldPos.xy / worldPos.w - uLowerEdgePoint;\n    verticalDistanceToLowerEdge = dot(dirFromLowerEdge, uViewDirOnMap);\n    \n    // *** shadow mapping ********\n    vec4 sunRelPosition = uSunMatrix * pos;\n    vSunRelPosition = (sunRelPosition.xyz / sunRelPosition.w + 1.0) / 2.0;\n  }\n}\n","fragment":"\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n#else\n  precision mediump float;\n#endif\nvarying vec2 vTexCoord;\nvarying vec3 vColor;\nvarying vec3 vNormal;\nvarying vec3 vSunRelPosition;\nvarying float verticalDistanceToLowerEdge;\nuniform vec3 uFogColor;\nuniform vec2 uShadowTexDimensions;\nuniform sampler2D uShadowTexIndex;\nuniform sampler2D uWallTexIndex;\nuniform float uFogDistance;\nuniform float uFogBlurDistance;\nuniform float uShadowStrength;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nfloat isSeenBySun(const vec2 sunViewNDC, const float depth, const float bias) {\n  if ( clamp( sunViewNDC, 0.0, 1.0) != sunViewNDC)  //not inside sun's viewport\n    return 1.0;\n  \n  float depthFromTexture = texture2D( uShadowTexIndex, sunViewNDC.xy).x;\n  \n  //compare depth values not in reciprocal but in linear depth\n  return step(1.0/depthFromTexture, 1.0/depth + bias);\n}\nvoid main() {\n  vec3 normal = normalize(vNormal); //may degenerate during per-pixel interpolation\n  float diffuse = dot(uLightDirection, normal);\n  diffuse = max(diffuse, 0.0);\n  // reduce shadow strength with:\n  // - lowering sun positions, to be consistent with the shadows on the basemap (there,\n  //   shadows are faded out with lowering sun positions to hide shadow artifacts caused\n  //   when sun direction and map surface are almost perpendicular\n  // - large angles between the sun direction and the surface normal, to hide shadow\n  //   artifacts that occur when surface normal and sun direction are almost perpendicular\n  float shadowStrength = pow( max( min(\n    dot(uLightDirection, vec3(0.0, 0.0, 1.0)),\n    dot(uLightDirection, normal)\n  ), 0.0), 1.5);\n  if (diffuse > 0.0 && shadowStrength > 0.0) {\n    // note: the diffuse term is also the cosine between the surface normal and the\n    // light direction\n    float bias = clamp(0.0007*tan(acos(diffuse)), 0.0, 0.01);\n    vec2 pos = fract( vSunRelPosition.xy * uShadowTexDimensions);\n    \n    vec2 tl = floor(vSunRelPosition.xy * uShadowTexDimensions) / uShadowTexDimensions;\n    float tlVal = isSeenBySun( tl,                           vSunRelPosition.z, bias);\n    float trVal = isSeenBySun( tl + vec2(1.0, 0.0) / uShadowTexDimensions, vSunRelPosition.z, bias);\n    float blVal = isSeenBySun( tl + vec2(0.0, 1.0) / uShadowTexDimensions, vSunRelPosition.z, bias);\n    float brVal = isSeenBySun( tl + vec2(1.0, 1.0) / uShadowTexDimensions, vSunRelPosition.z, bias);\n    float occludedBySun = mix( \n                            mix(tlVal, trVal, pos.x), \n                            mix(blVal, brVal, pos.x),\n                            pos.y);\n    diffuse *= 1.0 - (shadowStrength * (1.0 - occludedBySun));\n  }\n  vec3 color = vColor* texture2D( uWallTexIndex, vTexCoord.st).rgb +\n              (diffuse/1.5) * uLightColor;\n  float fogIntensity = (verticalDistanceToLowerEdge - uFogDistance) / uFogBlurDistance;\n  fogIntensity = clamp(fogIntensity, 0.0, 1.0);\n  //gl_FragColor = vec4( mix(color, uFogColor, fogIntensity), 1.0);\n  gl_FragColor = vec4( color, 1.0-fogIntensity);\n}\n"},"flatColor":{"vertex":"precision highp float;  //is default in vertex shaders anyway, using highp fixes #49\nattribute vec4 aPosition;\nuniform mat4 uMatrix;\nvoid main() {\n  gl_Position = uMatrix * aPosition;\n}\n","fragment":"#ifdef GL_ES\n  precision mediump float;\n#endif\nuniform vec4 uColor;\nvoid main() {\n  gl_FragColor = uColor;\n}\n"},"skywall":{"vertex":"precision highp float;  //is default in vertex shaders anyway, using highp fixes #49\n#define halfPi 1.57079632679\nattribute vec4 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMatrix;\nuniform float uAbsoluteHeight;\nvarying vec2 vTexCoord;\nvarying float vRelativeHeight;\nconst float gradientHeight = 10.0;\nconst float gradientStrength = 1.0;\nvoid main() {\n  gl_Position = uMatrix * aPosition;\n  vTexCoord = aTexCoord;\n  vRelativeHeight = aPosition.z / uAbsoluteHeight;\n}\n","fragment":"#ifdef GL_ES\n  precision mediump float;\n#endif\nuniform sampler2D uTexIndex;\nuniform vec3 uFogColor;\nvarying vec2 vTexCoord;\nvarying float vRelativeHeight;\nvoid main() {\n  float blendFactor = min(100.0 * vRelativeHeight, 1.0);\n  vec4 texColor = texture2D(uTexIndex, vTexCoord);\n  gl_FragColor = mix( vec4(uFogColor, 1.0), texColor,  blendFactor);\n}\n"},"basemap":{"vertex":"precision highp float;  //is default in vertex shaders anyway, using highp fixes #49\n#define halfPi 1.57079632679\nattribute vec4 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjMatrix;\nuniform mat4 uMatrix;\nuniform vec2 uViewDirOnMap;\nuniform vec2 uLowerEdgePoint;\nvarying vec2 vTexCoord;\nvarying float verticalDistanceToLowerEdge;\nvoid main() {\n  gl_Position = uMatrix * aPosition;\n  vTexCoord = aTexCoord;\n  vec4 worldPos = uModelMatrix * aPosition;\n  vec2 dirFromLowerEdge = worldPos.xy / worldPos.w - uLowerEdgePoint;\n  verticalDistanceToLowerEdge = dot(dirFromLowerEdge, uViewDirOnMap);\n}\n","fragment":"#ifdef GL_ES\n  precision mediump float;\n#endif\nuniform sampler2D uTexIndex;\nuniform vec3 uFogColor;\nvarying vec2 vTexCoord;\nvarying float verticalDistanceToLowerEdge;\nuniform float uFogDistance;\nuniform float uFogBlurDistance;\nvoid main() {\n  float fogIntensity = (verticalDistanceToLowerEdge - uFogDistance) / uFogBlurDistance;\n  fogIntensity = clamp(fogIntensity, 0.0, 1.0);\n  gl_FragColor = vec4(texture2D(uTexIndex, vec2(vTexCoord.x, 1.0-vTexCoord.y)).rgb, 1.0-fogIntensity);\n}\n"},"texture":{"vertex":"precision highp float;  //is default in vertex shaders anyway, using highp fixes #49\nattribute vec4 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMatrix;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_Position = uMatrix * aPosition;\n  vTexCoord = aTexCoord;\n}\n","fragment":"#ifdef GL_ES\n  precision mediump float;\n#endif\nuniform sampler2D uTexIndex;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_FragColor = vec4(texture2D(uTexIndex, vTexCoord.st).rgb, 1.0);\n}\n"},"fogNormal":{"vertex":"precision highp float;  //is default in vertex shaders anyway, using highp fixes #49\nattribute vec4 aPosition;\nattribute vec4 aFilter;\nattribute vec3 aNormal;\nuniform mat4 uMatrix;\nuniform mat4 uModelMatrix;\nuniform mat3 uNormalMatrix;\nuniform vec2 uViewDirOnMap;\nuniform vec2 uLowerEdgePoint;\nvarying float verticalDistanceToLowerEdge;\nvarying vec3 vNormal;\nuniform float uTime;\nvoid main() {\n  float t = clamp((uTime-aFilter.r) / (aFilter.g-aFilter.r), 0.0, 1.0);\n  float f = aFilter.b + (aFilter.a-aFilter.b) * t;\n  if (f == 0.0) {\n    gl_Position = vec4(0.0, 0.0, 0.0, 0.0);\n    verticalDistanceToLowerEdge = 0.0;\n  } else {\n    vec4 pos = vec4(aPosition.x, aPosition.y, aPosition.z*f, aPosition.w);\n    gl_Position = uMatrix * pos;\n    vNormal = uNormalMatrix * aNormal;\n    vec4 worldPos = uModelMatrix * pos;\n    vec2 dirFromLowerEdge = worldPos.xy / worldPos.w - uLowerEdgePoint;\n    verticalDistanceToLowerEdge = dot(dirFromLowerEdge, uViewDirOnMap);\n  }\n}\n","fragment":"\n#ifdef GL_ES\n  precision mediump float;\n#endif\nuniform float uFogDistance;\nuniform float uFogBlurDistance;\nvarying float verticalDistanceToLowerEdge;\nvarying vec3 vNormal;\nvoid main() {\n  float fogIntensity = (verticalDistanceToLowerEdge - uFogDistance) / uFogBlurDistance;\n  gl_FragColor = vec4(normalize(vNormal) / 2.0 + 0.5, clamp(fogIntensity, 0.0, 1.0));\n}\n"},"ambientFromDepth":{"vertex":"precision highp float;  //is default in vertex shaders anyway, using highp fixes #49\nattribute vec4 aPosition;\nattribute vec2 aTexCoord;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_Position = aPosition;\n  vTexCoord = aTexCoord;\n}\n","fragment":"#ifdef GL_FRAGMENT_PRECISION_HIGH\n  // we need high precision for the depth values\n  precision highp float;\n#else\n  precision mediump float;\n#endif\nuniform sampler2D uDepthTexIndex;\nuniform sampler2D uFogTexIndex;\nuniform vec2 uInverseTexSize;   //in 1/pixels, e.g. 1/512 if the texture is 512px wide\nuniform float uEffectStrength;\nuniform float uNearPlane;\nuniform float uFarPlane;\nvarying vec2 vTexCoord;\n/* Retrieves the depth value 'offset' pixels away from 'pos' from texture 'uDepthTexIndex'. */\nfloat getDepth(vec2 pos, ivec2 offset)\n{\n  float z = texture2D(uDepthTexIndex, pos + float(offset) * uInverseTexSize).x;\n  return (2.0 * uNearPlane) / (uFarPlane + uNearPlane - z * (uFarPlane - uNearPlane)); // linearize depth\n}\n/* getOcclusionFactor() determines a heuristic factor (from [0..1]) for how \n * much the fragment at 'pos' with depth 'depthHere'is occluded by the \n * fragment that is (dx, dy) texels away from it.\n */\nfloat getOcclusionFactor(float depthHere, vec2 pos, ivec2 offset)\n{\n    float depthThere = getDepth(pos, offset);\n    /* if the fragment at (dx, dy) has no depth (i.e. there was nothing rendered there), \n     * then 'here' is not occluded (result 1.0) */\n    if (depthThere == 0.0)\n      return 1.0;\n    /* if the fragment at (dx, dy) is further away from the viewer than 'here', then\n     * 'here is not occluded' */\n    if (depthHere < depthThere )\n      return 1.0;\n      \n    float relDepthDiff = depthThere / depthHere;\n    float depthDiff = abs(depthThere - depthHere) * uFarPlane;\n    /* if the fragment at (dx, dy) is closer to the viewer than 'here', then it occludes\n     * 'here'. The occlusion is the higher the bigger the depth difference between the two\n     * locations is.\n     * However, if the depth difference is too high, we assume that 'there' lies in a\n     * completely different depth region of the scene than 'here' and thus cannot occlude\n     * 'here'. This last assumption gets rid of very dark artifacts around tall buildings.\n     */\n    return depthDiff < 50.0 ? mix(0.99, 1.0, 1.0 - clamp(depthDiff, 0.0, 1.0)) : 1.0;\n}\n/* This shader approximates the ambient occlusion in screen space (SSAO). \n * It is based on the assumption that a pixel will be occluded by neighboring \n * pixels iff. those have a depth value closer to the camera than the original\n * pixel itself (the function getOcclusionFactor() computes this occlusion \n * by a single other pixel).\n *\n * A naive approach would sample all pixels within a given distance. For an\n * interesting-looking effect, the sampling area needs to be at least 9 pixels \n * wide (-/+ 4), requiring 81 texture lookups per pixel for ambient occlusion.\n * This overburdens many GPUs.\n * To make the ambient occlusion computation faster, we do not consider all \n * texels in the sampling area, but only 16. This causes some sampling artifacts\n * that are later removed by blurring the ambient occlusion texture (this is \n * done in a separate shader).\n */\nvoid main() {\n  float depthHere = getDepth(vTexCoord, ivec2(0, 0));\n  float fogIntensity = texture2D(uFogTexIndex, vTexCoord).w;\n  if (depthHere == 0.0)\n  {\n\t//there was nothing rendered 'here' --> it can't be occluded\n    gl_FragColor = vec4(1.0);\n    return;\n  }\n  float occlusionFactor = 1.0;\n  \n  occlusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(-1,  0));\n  occlusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(+1,  0));\n  occlusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2( 0, -1));\n  occlusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2( 0, +1));\n  occlusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(-2, -2));\n  occlusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(+2, +2));\n  occlusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(+2, -2));\n  occlusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(-2, +2));\n  occlusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(-4,  0));\n  occlusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(+4,  0));\n  occlusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2( 0, -4));\n  occlusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2( 0, +4));\n  occlusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(-4, -4));\n  occlusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(+4, +4));\n  occlusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(+4, -4));\n  occlusionFactor *= getOcclusionFactor(depthHere, vTexCoord, ivec2(-4, +4));\n  occlusionFactor = pow(occlusionFactor, 4.0) + 55.0/255.0; // empirical bias determined to let SSAO have no effect on the map plane\n  occlusionFactor = 1.0 - ((1.0 - occlusionFactor) * uEffectStrength * (1.0-fogIntensity));\n  gl_FragColor = vec4(vec3(occlusionFactor), 1.0);\n}\n"},"blur":{"vertex":"precision highp float;  //is default in vertex shaders anyway, using highp fixes #49\nattribute vec4 aPosition;\nattribute vec2 aTexCoord;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_Position = aPosition;\n  vTexCoord = aTexCoord;\n}\n","fragment":"#ifdef GL_ES\n  precision mediump float;\n#endif\nuniform sampler2D uTexIndex;\nuniform vec2 uInverseTexSize;   //in 1/pixels, e.g. 1/512 if the texture is 512px wide\nvarying vec2 vTexCoord;\n/* Retrieves the texel color 'offset' pixels away from 'pos' from texture 'uTexIndex'. */\nvec4 getTexel(vec2 pos, vec2 offset)\n{\n  return texture2D(uTexIndex, pos + offset * uInverseTexSize);\n}\nvoid main() {\n  vec4 center = texture2D(uTexIndex, vTexCoord);\n  vec4 nonDiagonalNeighbors = getTexel(vTexCoord, vec2(-1.0,  0.0)) +\n                              getTexel(vTexCoord, vec2(+1.0,  0.0)) +\n                              getTexel(vTexCoord, vec2( 0.0, -1.0)) +\n                              getTexel(vTexCoord, vec2( 0.0, +1.0));\n  vec4 diagonalNeighbors =    getTexel(vTexCoord, vec2(-1.0, -1.0)) +\n                              getTexel(vTexCoord, vec2(+1.0, +1.0)) +\n                              getTexel(vTexCoord, vec2(-1.0, +1.0)) +\n                              getTexel(vTexCoord, vec2(+1.0, -1.0));\n  \n  //approximate Gaussian blur (mean 0.0, stdev 1.0)\n  gl_FragColor = 0.2/1.0 * center + \n                 0.5/4.0 * nonDiagonalNeighbors + \n                 0.3/4.0 * diagonalNeighbors;\n}\n"},"basemap.shadows":{"vertex":"precision highp float;  //is default in vertex shaders anyway, using highp fixes #49\nattribute vec3 aPosition;\nattribute vec3 aNormal;\nuniform mat4 uModelMatrix;\nuniform mat4 uMatrix;\nuniform mat4 uSunMatrix;\nuniform vec2 uViewDirOnMap;\nuniform vec2 uLowerEdgePoint;\n//varying vec2 vTexCoord;\nvarying vec3 vSunRelPosition;\nvarying vec3 vNormal;\nvarying float verticalDistanceToLowerEdge;\nvoid main() {\n  vec4 pos = vec4(aPosition.xyz, 1.0);\n  gl_Position = uMatrix * pos;\n  vec4 sunRelPosition = uSunMatrix * pos;\n  vSunRelPosition = (sunRelPosition.xyz / sunRelPosition.w + 1.0) / 2.0;\n  vNormal = aNormal;\n  vec4 worldPos = uModelMatrix * pos;\n  vec2 dirFromLowerEdge = worldPos.xy / worldPos.w - uLowerEdgePoint;\n  verticalDistanceToLowerEdge = dot(dirFromLowerEdge, uViewDirOnMap);\n}\n","fragment":"\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n#else\n  precision mediump float;\n#endif\n/* This shader computes the diffuse brightness of the map layer. It does *not* \n * render the map texture itself, but is instead intended to be blended on top\n * of an already rendered map.\n * Note: this shader is not (and does not attempt to) be physically correct.\n *       It is intented to be a blend between a useful illustration of cast\n *       shadows and a mitigation of shadow casting artifacts occuring at\n *       low angles on incidence.\n *       Map brightness is only affected by shadows, not by light direction.\n *       Shadows are darkest when light comes from straight above (and thus\n *       shadows can be computed reliably) and become less and less visible\n *       with the light source close to the horizont (where moirC) and offset\n *       artifacts would otherwise be visible).\n */\n//uniform sampler2D uTexIndex;\nuniform sampler2D uShadowTexIndex;\nuniform vec3 uFogColor;\nuniform vec3 uDirToSun;\nuniform vec2 uShadowTexDimensions;\nuniform float uShadowStrength;\nvarying vec2 vTexCoord;\nvarying vec3 vSunRelPosition;\nvarying vec3 vNormal;\nvarying float verticalDistanceToLowerEdge;\nuniform float uFogDistance;\nuniform float uFogBlurDistance;\nfloat isSeenBySun( const vec2 sunViewNDC, const float depth, const float bias) {\n  if ( clamp( sunViewNDC, 0.0, 1.0) != sunViewNDC)  //not inside sun's viewport\n    return 1.0;\n  \n  float depthFromTexture = texture2D( uShadowTexIndex, sunViewNDC.xy).x;\n  \n  //compare depth values not in reciprocal but in linear depth\n  return step(1.0/depthFromTexture, 1.0/depth + bias);\n}\nvoid main() {\n  //vec2 tl = floor(vSunRelPosition.xy * uShadowTexDimensions) / uShadowTexDimensions;\n  //gl_FragColor = vec4(vec3(texture2D( uShadowTexIndex, tl).x), 1.0);\n  //return;\n  float diffuse = dot(uDirToSun, normalize(vNormal));\n  diffuse = max(diffuse, 0.0);\n  \n  float shadowStrength = uShadowStrength * pow(diffuse, 1.5);\n  if (diffuse > 0.0) {\n    // note: the diffuse term is also the cosine between the surface normal and the\n    // light direction\n    float bias = clamp(0.0007*tan(acos(diffuse)), 0.0, 0.01);\n    \n    vec2 pos = fract( vSunRelPosition.xy * uShadowTexDimensions);\n    \n    vec2 tl = floor(vSunRelPosition.xy * uShadowTexDimensions) / uShadowTexDimensions;\n    float tlVal = isSeenBySun( tl,                           vSunRelPosition.z, bias);\n    float trVal = isSeenBySun( tl + vec2(1.0, 0.0) / uShadowTexDimensions, vSunRelPosition.z, bias);\n    float blVal = isSeenBySun( tl + vec2(0.0, 1.0) / uShadowTexDimensions, vSunRelPosition.z, bias);\n    float brVal = isSeenBySun( tl + vec2(1.0, 1.0) / uShadowTexDimensions, vSunRelPosition.z, bias);\n    diffuse = mix( mix(tlVal, trVal, pos.x), \n                   mix(blVal, brVal, pos.x),\n                   pos.y);\n  }\n  diffuse = mix(1.0, diffuse, shadowStrength);\n  \n  float fogIntensity = (verticalDistanceToLowerEdge - uFogDistance) / uFogBlurDistance;\n  fogIntensity = clamp(fogIntensity, 0.0, 1.0);\n  float darkness = (1.0 - diffuse);\n  darkness *=  (1.0 - fogIntensity);\n  gl_FragColor = vec4(vec3(1.0 - darkness), 1.0);\n}\n"},"outlineMap":{"vertex":"precision highp float;  //is default in vertex shaders anyway, using highp fixes #49\nattribute vec4 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMatrix;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_Position = uMatrix * aPosition;\n  vTexCoord = aTexCoord;\n}\n","fragment":"#ifdef GL_FRAGMENT_PRECISION_HIGH\n  // we need high precision for the depth values\n  precision highp float;\n#else\n  precision mediump float;\n#endif\nuniform sampler2D uDepthTexIndex;\nuniform sampler2D uFogNormalTexIndex;\nuniform sampler2D uIdTexIndex;\nuniform vec2 uInverseTexSize;   //in 1/pixels, e.g. 1/512 if the texture is 512px wide\nuniform float uEffectStrength;\nuniform float uNearPlane;\nuniform float uFarPlane;\nvarying vec2 vTexCoord;\n/* Retrieves the depth value 'offset' pixels away from 'pos' from texture 'uDepthTexIndex'. */\nfloat getDepth(vec2 pos, vec2 offset)\n{\n  float z = texture2D(uDepthTexIndex, pos + offset * uInverseTexSize).x;\n  return (2.0 * uNearPlane) / (uFarPlane + uNearPlane - z * (uFarPlane - uNearPlane)); // linearize depth\n}\nvec3 getNormal(vec2 pos, vec2 offset)\n{\n  return normalize(texture2D(uFogNormalTexIndex, pos + offset * uInverseTexSize).xyz * 2.0 - 1.0);\n}\nvec3 getEncodedId(vec2 pos, vec2 offset)\n{\n  return texture2D(uIdTexIndex, pos + offset * uInverseTexSize).xyz;\n}\nvoid main() {\n  float fogIntensity = texture2D(uFogNormalTexIndex, vTexCoord).w;\n  vec3 normalHere =  getNormal(vTexCoord, vec2(0, 0));\n  vec3 normalRight = getNormal(vTexCoord, vec2(1, 0));\n  vec3 normalAbove = getNormal(vTexCoord, vec2(0,-1));\n  \n  float edgeStrengthFromNormal = \n    step( dot(normalHere, normalRight), 0.9) +\n    step( dot(normalHere, normalAbove), 0.9);\n  float depthHere =  getDepth(vTexCoord, vec2(0,  0));\n  float depthRight = getDepth(vTexCoord, vec2(1,  0));\n  float depthAbove = getDepth(vTexCoord, vec2(0, -1));\n  float depthDiffRight = abs(depthHere - depthRight) * 7500.0;\n  float depthDiffAbove = abs(depthHere - depthAbove) * 7500.0;\n  float edgeStrengthFromDepth = step(10.0, depthDiffRight) + \n                                step(10.0, depthDiffAbove);\n  \n  vec3 idHere = getEncodedId(vTexCoord, vec2(0,0));\n  vec3 idRight = getEncodedId(vTexCoord, vec2(1,0));\n  vec3 idAbove = getEncodedId(vTexCoord, vec2(0,-1));\n  float edgeStrengthFromId = (idHere != idRight || idHere != idAbove) ? 1.0 : 0.0;\n  \n  float edgeStrength = max( edgeStrengthFromId, max( edgeStrengthFromNormal, edgeStrengthFromDepth));\n  float occlusionFactor = 1.0 - (edgeStrength * uEffectStrength);\n  occlusionFactor = 1.0 - ((1.0- occlusionFactor) * (1.0-fogIntensity));\n  gl_FragColor = vec4(vec3(occlusionFactor), 1.0);\n}\n"}};

var GLX = (function() {
//var ext = GL.getExtension('WEBGL_lose_context');
//ext.loseContext();

var GLX = {};

GLX.getContext = function(canvas) {
  var options = {
    antialias: !APP.options.fastMode,
    depth: true,
    premultipliedAlpha: false
  };

  try {
    GL = canvas.getContext('webgl', options);
  } catch (ex) {}
  if (!GL) {
    try {
      GL = canvas.getContext('experimental-webgl', options);
    } catch (ex) {}
  }
  if (!GL) {
    throw new Error('WebGL not supported');
  }

  canvas.addEventListener('webglcontextlost', function(e) {
    console.warn('context lost');
  });

  canvas.addEventListener('webglcontextrestored', function(e) {
    console.warn('context restored');
  });

  GL.viewport(0, 0, APP.width, APP.height);
  GL.cullFace(GL.BACK);
  GL.enable(GL.CULL_FACE);
  GL.enable(GL.DEPTH_TEST);
  GL.clearColor(0.5, 0.5, 0.5, 1);

  if (!APP.options.fastMode) {
    GL.anisotropyExtension = GL.getExtension('EXT_texture_filter_anisotropic');
    if (GL.anisotropyExtension) {
      GL.anisotropyExtension.maxAnisotropyLevel = GL.getParameter(
        GL.anisotropyExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT
      );
    }

    GL.depthTextureExtension = GL.getExtension('WEBGL_depth_texture');
  }

  return GL;
};

GLX.start = function(render) {
  return setInterval(function() {
    requestAnimationFrame(render);
  }, 17);
};

GLX.stop = function(loop) {
  clearInterval(loop);
};

GLX.destroy = function() {
  if (GL !== undefined) {
    GL.canvas.parentNode.removeChild(GL.canvas);
    GL = undefined;
  }
};


GLX.util = {};

GLX.util.nextPowerOf2 = function(n) {
  n--;
  n |= n >> 1;  // handle  2 bit numbers
  n |= n >> 2;  // handle  4 bit numbers
  n |= n >> 4;  // handle  8 bit numbers
  n |= n >> 8;  // handle 16 bit numbers
  n |= n >> 16; // handle 32 bit numbers
  n++;
  return n;
};

GLX.util.calcNormal = function(ax, ay, az, bx, by, bz, cx, cy, cz) {
  var d1x = ax-bx;
  var d1y = ay-by;
  var d1z = az-bz;

  var d2x = bx-cx;
  var d2y = by-cy;
  var d2z = bz-cz;

  var nx = d1y*d2z - d1z*d2y;
  var ny = d1z*d2x - d1x*d2z;
  var nz = d1x*d2y - d1y*d2x;

  return this.calcUnit(nx, ny, nz);
};

GLX.util.calcUnit = function(x, y, z) {
  var m = Math.sqrt(x*x + y*y + z*z);

  if (m === 0) {
    m = 0.00001;
  }

  return [x/m, y/m, z/m];
};


GLX.Buffer = function(itemSize, data) {
  this.id = GL.createBuffer();
  this.itemSize = itemSize;
  this.numItems = data.length/itemSize;
  GL.bindBuffer(GL.ARRAY_BUFFER, this.id);
  GL.bufferData(GL.ARRAY_BUFFER, data, GL.STATIC_DRAW);
  data = null;
};

GLX.Buffer.prototype = {
  enable: function() {
    GL.bindBuffer(GL.ARRAY_BUFFER, this.id);
  },

  destroy: function() {
    GL.deleteBuffer(this.id);
    this.id = null;
  }
};


GLX.Framebuffer = function(width, height, useDepthTexture) {
  if (useDepthTexture && !GL.depthTextureExtension)
    throw "Depth textures are not supported by your GPU";
    
  this.useDepthTexture = !!useDepthTexture;
  this.setSize(width, height);
};

GLX.Framebuffer.prototype = {

  setSize: function(width, height) {
    if (!this.frameBuffer) {
      this.frameBuffer = GL.createFramebuffer();
    } else if (width === this.width && height === this.height) { // already has the right size
      return;
    }

    GL.bindFramebuffer(GL.FRAMEBUFFER, this.frameBuffer);


    this.width  = width;
    this.height = height;
    
    if (this.depthRenderBuffer) {
      GL.deleteRenderbuffer(this.depthRenderBuffer);
      this.depthRenderBuffer = null;
    } 
    
    if (this.depthTexture) {
      this.depthTexture.destroy();
      this.depthTexture = null;
    }
    
    if (this.useDepthTexture) {
      this.depthTexture = new GLX.texture.Image();//GL.createTexture();
      this.depthTexture.enable(0);
      GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.NEAREST);
      GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MAG_FILTER, GL.NEAREST);
      //CLAMP_TO_EDGE is required for NPOT textures
      GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_S, GL.CLAMP_TO_EDGE);
      GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_T, GL.CLAMP_TO_EDGE);
      GL.texImage2D(GL.TEXTURE_2D, 0, GL.DEPTH_STENCIL, width, height, 0, GL.DEPTH_STENCIL, GL.depthTextureExtension.UNSIGNED_INT_24_8_WEBGL, null);
      GL.framebufferTexture2D(GL.FRAMEBUFFER, GL.DEPTH_STENCIL_ATTACHMENT, GL.TEXTURE_2D, this.depthTexture.id, 0);
    } else {
      this.depthRenderBuffer = GL.createRenderbuffer();
      GL.bindRenderbuffer(GL.RENDERBUFFER, this.depthRenderBuffer);
      GL.renderbufferStorage(GL.RENDERBUFFER, GL.DEPTH_COMPONENT16, width, height);
      GL.framebufferRenderbuffer(GL.FRAMEBUFFER, GL.DEPTH_ATTACHMENT, GL.RENDERBUFFER, this.depthRenderBuffer);
    }

    if (this.renderTexture) {
      this.renderTexture.destroy();
    }

    this.renderTexture = new GLX.texture.Data(width, height);
    GL.bindTexture(GL.TEXTURE_2D, this.renderTexture.id);

    GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_S, GL.CLAMP_TO_EDGE); //necessary for NPOT textures
    GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_T, GL.CLAMP_TO_EDGE);
    GL.framebufferTexture2D(GL.FRAMEBUFFER, GL.COLOR_ATTACHMENT0, GL.TEXTURE_2D, this.renderTexture.id, 0);

    if (GL.checkFramebufferStatus(GL.FRAMEBUFFER) !== GL.FRAMEBUFFER_COMPLETE) {
      throw new Error('This combination of framebuffer attachments does not work');
    }

    GL.bindRenderbuffer(GL.RENDERBUFFER, null);
    GL.bindFramebuffer(GL.FRAMEBUFFER, null);
  },

  enable: function() {
    GL.bindFramebuffer(GL.FRAMEBUFFER, this.frameBuffer);

    if (!this.useDepthTexture) {
      GL.bindRenderbuffer(GL.RENDERBUFFER, this.depthRenderBuffer);
    }
  },

  disable: function() {
    GL.bindFramebuffer(GL.FRAMEBUFFER, null);
    if (!this.useDepthTexture) {
      GL.bindRenderbuffer(GL.RENDERBUFFER, null);
    }
  },

  getPixel: function(x, y) {
    var imageData = new Uint8Array(4);
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      return;
    }
    GL.readPixels(x, y, 1, 1, GL.RGBA, GL.UNSIGNED_BYTE, imageData);
    return imageData;
  },

  getData: function() {
    var imageData = new Uint8Array(this.width*this.height*4);
    GL.readPixels(0, 0, this.width, this.height, GL.RGBA, GL.UNSIGNED_BYTE, imageData);
    return imageData;
  },

  destroy: function() {
    if (this.renderTexture) {
      this.renderTexture.destroy();
    }
    
    if (this.depthTexture) {
      this.depthTexture.destroy();
    }
  }
};


GLX.Shader = function(config) {
  var i;

  this.shaderName = config.shaderName;
  this.id = GL.createProgram();

  this.attach(GL.VERTEX_SHADER,   config.vertexShader);
  this.attach(GL.FRAGMENT_SHADER, config.fragmentShader);

  GL.linkProgram(this.id);

  if (!GL.getProgramParameter(this.id, GL.LINK_STATUS)) {
    throw new Error(GL.getProgramParameter(this.id, GL.VALIDATE_STATUS) +'\n'+ GL.getError());
  }

  this.attributeNames = config.attributes || [];
  this.uniformNames   = config.uniforms || [];
  GL.useProgram(this.id);

  this.attributes = {};
  for (i = 0; i < this.attributeNames.length; i++) {
    this.locateAttribute(this.attributeNames[i]);
  }
  
  this.uniforms = {};
  for (i = 0; i < this.uniformNames.length; i++) {
    this.locateUniform(this.uniformNames[i]);
  }
};

GLX.Shader.warned = {};
GLX.Shader.prototype = {

  locateAttribute: function(name) {
    var loc = GL.getAttribLocation(this.id, name);
    if (loc < 0) {
      console.warn('unable to locate attribute "%s" in shader "%s"', name, this.shaderName);
      return;
    }
    this.attributes[name] = loc;
  },

  locateUniform: function(name) {
    var loc = GL.getUniformLocation(this.id, name);
    if (!loc) {
      console.warn('unable to locate uniform "%s" in shader "%s"', name, this.shaderName);
      return;
    }
    this.uniforms[name] = loc;
  },

  attach: function(type, src) {
    var shader = GL.createShader(type);
    GL.shaderSource(shader, src);
    GL.compileShader(shader);

    if (!GL.getShaderParameter(shader, GL.COMPILE_STATUS)) {
      throw new Error(GL.getShaderInfoLog(shader));
    }

    GL.attachShader(this.id, shader);
  },

  enable: function() {
    GL.useProgram(this.id);

    for (var name in this.attributes) {
      GL.enableVertexAttribArray(this.attributes[name]);
    }
    
    return this;
  },

  disable: function() {
    if (this.attributes) {
      for (var name in this.attributes) {
        GL.disableVertexAttribArray(this.attributes[name]);
      }
    }
  },
  
  bindBuffer: function(buffer, attribute) {
    if (this.attributes[attribute] === undefined) {
      var qualifiedName = this.shaderName + ":" + attribute;
      if ( !GLX.Shader.warned[qualifiedName]) {
        console.warn('attempt to bind VBO to invalid attribute "%s" in shader "%s"', attribute, this.shaderName);
        GLX.Shader.warned[qualifiedName] = true;
      }
      return;
    }
    
    buffer.enable();
    GL.vertexAttribPointer(this.attributes[attribute], buffer.itemSize, GL.FLOAT, false, 0, 0);
  },
  
  setUniform: function(uniform, type, value) {
    if (this.uniforms[uniform] === undefined) {
      var qualifiedName = this.shaderName + ":" + uniform;
      if ( !GLX.Shader.warned[qualifiedName]) {
        console.warn('attempt to bind to invalid uniform "%s" in shader "%s"', uniform, this.shaderName);
        GLX.Shader.warned[qualifiedName] = true;
      }

      return;
    }
    GL['uniform'+ type]( this.uniforms[uniform], value);
  },

  setUniforms: function(uniforms) {
    for (var i in uniforms) {
      this.setUniform(uniforms[i][0], uniforms[i][1], uniforms[i][2]);
    }
  },

  setUniformMatrix: function(uniform, type, value) {
    if (this.uniforms[uniform] === undefined) {
      var qualifiedName = this.shaderName + ":" + uniform;
      if ( !GLX.Shader.warned[qualifiedName]) {
        console.warn('attempt to bind to invalid uniform "%s" in shader "%s"', uniform, this.shaderName);
        GLX.Shader.warned[qualifiedName] = true;
      }
      return;
    }
    GL['uniformMatrix'+ type]( this.uniforms[uniform], false, value);
  },

  setUniformMatrices: function(uniforms) {
    for (var i in uniforms) {
      this.setUniformMatrix(uniforms[i][0], uniforms[i][1], uniforms[i][2]);
    }
  },
  
  bindTexture: function(uniform, textureUnit, glxTexture) {
    glxTexture.enable(textureUnit);
    this.setUniform(uniform, "1i", textureUnit);
  },

  destroy: function() {
    this.disable();
    this.id = null;
  }
};


GLX.Matrix = function(data) {
  this.data = new Float32Array(data ? data : [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ]);
};

GLX.Matrix.identity = function() {
  return new GLX.Matrix([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ]);
};

GLX.Matrix.identity3 = function() {
  return new GLX.Matrix([
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
  ]);
};

(function() {

  function rad(a) {
    return a * Math.PI/180;
  }

  function multiply(res, a, b) {
    var
      a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3],
      a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7],
      a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11],
      a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15],

      b00 = b[0],
      b01 = b[1],
      b02 = b[2],
      b03 = b[3],
      b10 = b[4],
      b11 = b[5],
      b12 = b[6],
      b13 = b[7],
      b20 = b[8],
      b21 = b[9],
      b22 = b[10],
      b23 = b[11],
      b30 = b[12],
      b31 = b[13],
      b32 = b[14],
      b33 = b[15];

    res[ 0] = a00*b00 + a01*b10 + a02*b20 + a03*b30;
    res[ 1] = a00*b01 + a01*b11 + a02*b21 + a03*b31;
    res[ 2] = a00*b02 + a01*b12 + a02*b22 + a03*b32;
    res[ 3] = a00*b03 + a01*b13 + a02*b23 + a03*b33;

    res[ 4] = a10*b00 + a11*b10 + a12*b20 + a13*b30;
    res[ 5] = a10*b01 + a11*b11 + a12*b21 + a13*b31;
    res[ 6] = a10*b02 + a11*b12 + a12*b22 + a13*b32;
    res[ 7] = a10*b03 + a11*b13 + a12*b23 + a13*b33;

    res[ 8] = a20*b00 + a21*b10 + a22*b20 + a23*b30;
    res[ 9] = a20*b01 + a21*b11 + a22*b21 + a23*b31;
    res[10] = a20*b02 + a21*b12 + a22*b22 + a23*b32;
    res[11] = a20*b03 + a21*b13 + a22*b23 + a23*b33;

    res[12] = a30*b00 + a31*b10 + a32*b20 + a33*b30;
    res[13] = a30*b01 + a31*b11 + a32*b21 + a33*b31;
    res[14] = a30*b02 + a31*b12 + a32*b22 + a33*b32;
    res[15] = a30*b03 + a31*b13 + a32*b23 + a33*b33;
  }

  GLX.Matrix.prototype = {

    multiply: function(m) {
      multiply(this.data, this.data, m.data);
      return this;
    },

    translate: function(x, y, z) {
      multiply(this.data, this.data, [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        x, y, z, 1
      ]);
      return this;
    },

    rotateX: function(angle) {
      var a = rad(angle), c = Math.cos(a), s = Math.sin(a);
      multiply(this.data, this.data, [
        1, 0, 0, 0,
        0, c, s, 0,
        0, -s, c, 0,
        0, 0, 0, 1
      ]);
      return this;
    },

    rotateY: function(angle) {
      var a = rad(angle), c = Math.cos(a), s = Math.sin(a);
      multiply(this.data, this.data, [
        c, 0, -s, 0,
        0, 1, 0, 0,
        s, 0, c, 0,
        0, 0, 0, 1
      ]);
      return this;
    },

    rotateZ: function(angle) {
      var a = rad(angle), c = Math.cos(a), s = Math.sin(a);
      multiply(this.data, this.data, [
        c, -s, 0, 0,
        s, c, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
      ]);
      return this;
    },

    scale: function(x, y, z) {
      multiply(this.data, this.data, [
        x, 0, 0, 0,
        0, y, 0, 0,
        0, 0, z, 0,
        0, 0, 0, 1
      ]);
      return this;
    }
  };

  GLX.Matrix.multiply = function(a, b) {
    var res = new Float32Array(16);
    multiply(res, a.data, b.data);
    return res;
  };

  // returns a perspective projection matrix with a field-of-view of 'fov' 
  // degrees, an width/height aspect ratio of 'aspect', the near plane at 'near'
  // and the far plane at 'far'
  GLX.Matrix.Perspective = function(fov, aspect, near, far) {
    var f =  1 / Math.tan(fov*(Math.PI/180)/2), 
        nf = 1 / (near - far);
        
    return new GLX.Matrix([
      f/aspect, 0,               0,  0,
      0,        f,               0,  0,
      0,        0, (far + near)*nf, -1,
      0,        0, (2*far*near)*nf,  0]);
  };

  //returns a perspective projection matrix with the near plane at 'near',
  //the far plane at 'far' and the view rectangle on the near plane bounded
  //by 'left', 'right', 'top', 'bottom'
  GLX.Matrix.Frustum = function (left, right, top, bottom, near, far) {
    var rl = 1 / (right - left),
        tb = 1 / (top - bottom),
        nf = 1 / (near - far);
        
    return new GLX.Matrix( [
          (near * 2) * rl,                   0,                     0,  0,
                        0,     (near * 2) * tb,                     0,  0,
      (right + left) * rl, (top + bottom) * tb,     (far + near) * nf, -1,
                        0,                   0, (far * near * 2) * nf,  0]);
  };
  
  GLX.Matrix.OffCenterProjection = function (screenBottomLeft, screenTopLeft, screenBottomRight, eye, near, far) {
    var vRight = norm3(sub3( screenBottomRight, screenBottomLeft));
    var vUp    = norm3(sub3( screenTopLeft,     screenBottomLeft));
    var vNormal= normal( screenBottomLeft, screenTopLeft, screenBottomRight);
    
    var eyeToScreenBottomLeft = sub3( screenBottomLeft, eye);
    var eyeToScreenTopLeft    = sub3( screenTopLeft,    eye);
    var eyeToScreenBottomRight= sub3( screenBottomRight,eye);
    
    var d = - dot3(eyeToScreenBottomLeft, vNormal);
    
    var l = dot3(vRight, eyeToScreenBottomLeft) * near / d;
    var r = dot3(vRight, eyeToScreenBottomRight)* near / d;
    var b = dot3(vUp,    eyeToScreenBottomLeft) * near / d;
    var t = dot3(vUp,    eyeToScreenTopLeft)    * near / d;
    
    return GLX.Matrix.Frustum(l, r, t, b, near, far);
  };
  
  // based on http://www.songho.ca/opengl/gl_projectionmatrix.html
  GLX.Matrix.Ortho = function(left, right, top, bottom, near, far) {
    return new GLX.Matrix([
                   2/(right-left),                          0,                       0, 0,
                                0,           2/(top - bottom),                       0, 0,
                                0,                          0,         -2/(far - near), 0,
      - (right+left)/(right-left), -(top+bottom)/(top-bottom), - (far+near)/(far-near), 1
    ]);
  };

  GLX.Matrix.invert3 = function(a) {
    var
      a00 = a[0], a01 = a[1], a02 = a[2],
      a04 = a[4], a05 = a[5], a06 = a[6],
      a08 = a[8], a09 = a[9], a10 = a[10],

      l =  a10 * a05 - a06 * a09,
      o = -a10 * a04 + a06 * a08,
      m =  a09 * a04 - a05 * a08,

      det = a00*l + a01*o + a02*m;

    if (!det) {
      return null;
    }

    det = 1.0/det;

    return [
      l                    * det,
      (-a10*a01 + a02*a09) * det,
      ( a06*a01 - a02*a05) * det,
      o                    * det,
      ( a10*a00 - a02*a08) * det,
      (-a06*a00 + a02*a04) * det,
      m                    * det,
      (-a09*a00 + a01*a08) * det,
      ( a05*a00 - a01*a04) * det
    ];
  };

  GLX.Matrix.transpose3 = function(a) {
    return new Float32Array([
      a[0], a[3], a[6],
      a[1], a[4], a[7],
      a[2], a[5], a[8]
    ]);
  };

  GLX.Matrix.transpose = function(a) {
    return new Float32Array([
      a[0], a[4],  a[8], a[12], 
      a[1], a[5],  a[9], a[13], 
      a[2], a[6], a[10], a[14], 
      a[3], a[7], a[11], a[15]
    ]);
  };

  // GLX.Matrix.transform = function(x, y, z, m) {
  //   var X = x*m[0] + y*m[4] + z*m[8]  + m[12];
  //   var Y = x*m[1] + y*m[5] + z*m[9]  + m[13];
  //   var Z = x*m[2] + y*m[6] + z*m[10] + m[14];
  //   var W = x*m[3] + y*m[7] + z*m[11] + m[15];
  //   return {
  //     x: (X/W +1) / 2,
  //     y: (Y/W +1) / 2
  //   };
  // };

  GLX.Matrix.transform = function(m) {
    var X = m[12];
    var Y = m[13];
    var Z = m[14];
    var W = m[15];
    return {
      x: (X/W + 1) / 2,
      y: (Y/W + 1) / 2,
      z: (Z/W + 1) / 2
    };
  };

  GLX.Matrix.invert = function(a) {
    var
      res = new Float32Array(16),

      a00 = a[ 0], a01 = a[ 1], a02 = a[ 2], a03 = a[ 3],
      a10 = a[ 4], a11 = a[ 5], a12 = a[ 6], a13 = a[ 7],
      a20 = a[ 8], a21 = a[ 9], a22 = a[10], a23 = a[11],
      a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

      b00 = a00 * a11 - a01 * a10,
      b01 = a00 * a12 - a02 * a10,
      b02 = a00 * a13 - a03 * a10,
      b03 = a01 * a12 - a02 * a11,
      b04 = a01 * a13 - a03 * a11,
      b05 = a02 * a13 - a03 * a12,
      b06 = a20 * a31 - a21 * a30,
      b07 = a20 * a32 - a22 * a30,
      b08 = a20 * a33 - a23 * a30,
      b09 = a21 * a32 - a22 * a31,
      b10 = a21 * a33 - a23 * a31,
      b11 = a22 * a33 - a23 * a32,

      // Calculate the determinant
      det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
      return;
    }

    det = 1 / det;

    res[ 0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    res[ 1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    res[ 2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    res[ 3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;

    res[ 4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    res[ 5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    res[ 6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    res[ 7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;

    res[ 8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    res[ 9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    res[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    res[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;

    res[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    res[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    res[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    res[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return res;
  };

}());


GLX.texture = {};


GLX.texture.Image = function() {
  this.id = GL.createTexture();
  GL.bindTexture(GL.TEXTURE_2D, this.id);

//GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_S, GL.CLAMP_TO_EDGE);
//GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_T, GL.CLAMP_TO_EDGE);

  GL.bindTexture(GL.TEXTURE_2D, null);
};

GLX.texture.Image.prototype = {

  clamp: function(image, maxSize) {
    if (image.width <= maxSize && image.height <= maxSize) {
      return image;
    }

    var w = maxSize, h = maxSize;
    var ratio = image.width/image.height;
    // TODO: if other dimension doesn't fit to POT after resize, there is still trouble
    if (ratio < 1) {
      w = Math.round(h*ratio);
    } else {
      h = Math.round(w/ratio);
    }

    var canvas = document.createElement('CANVAS');
    canvas.width  = w;
    canvas.height = h;

    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas;
  },

  load: function(url, callback) {
    var image = new Image();
    image.crossOrigin = '*';
    image.onload = function() {
      this.set(image);
      if (callback) {
        callback(image);
      }
    }.bind(this);
    image.onerror = function() {
      if (callback) {
        callback();
      }
    };
    image.src = url;
    return this;
  },

  color: function(color) {
    GL.bindTexture(GL.TEXTURE_2D, this.id);
    GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.LINEAR);
    GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MAG_FILTER, GL.LINEAR);
    GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, 1, 1, 0, GL.RGBA, GL.UNSIGNED_BYTE, new Uint8Array([color[0]*255, color[1]*255, color[2]*255, (color[3] === undefined ? 1 : color[3])*255]));
    GL.bindTexture(GL.TEXTURE_2D, null);
    return this;
  },

  set: function(image) {
    if (!this.id) {
      // texture has been destroyed
      return;
    }

    image = this.clamp(image, GL.getParameter(GL.MAX_TEXTURE_SIZE));

    GL.bindTexture(GL.TEXTURE_2D, this.id);
    GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.LINEAR_MIPMAP_NEAREST);
    GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MAG_FILTER, GL.LINEAR);

    GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, GL.RGBA, GL.UNSIGNED_BYTE, image);
    GL.generateMipmap(GL.TEXTURE_2D);

    if (GL.anisotropyExtension) {
      GL.texParameterf(GL.TEXTURE_2D, GL.anisotropyExtension.TEXTURE_MAX_ANISOTROPY_EXT, GL.anisotropyExtension.maxAnisotropyLevel);
    }

    GL.bindTexture(GL.TEXTURE_2D, null);
    return this;
  },

  enable: function(index) {
    if (!this.id) {
      return;
    }
    GL.activeTexture(GL.TEXTURE0 + (index || 0));
    GL.bindTexture(GL.TEXTURE_2D, this.id);
    return this;
  },

  destroy: function() {
    GL.bindTexture(GL.TEXTURE_2D, null);
    GL.deleteTexture(this.id);
    this.id = null;
  }
};


GLX.texture.Data = function(width, height, data, options) {
  //options = options || {};

  this.id = GL.createTexture();
  GL.bindTexture(GL.TEXTURE_2D, this.id);

  GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.NEAREST);
  GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MAG_FILTER, GL.NEAREST);

  var bytes = null;

  if (data) {
    var length = width*height*4;
    bytes = new Uint8Array(length);
    bytes.set(data.subarray(0, length));
  }

  GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, width, height, 0, GL.RGBA, GL.UNSIGNED_BYTE, bytes);
  GL.bindTexture(GL.TEXTURE_2D, null);
};

GLX.texture.Data.prototype = {

  enable: function(index) {
    GL.activeTexture(GL.TEXTURE0 + (index || 0));
    GL.bindTexture(GL.TEXTURE_2D, this.id);
    return this;
  },

  destroy: function() {
    GL.bindTexture(GL.TEXTURE_2D, null);
    GL.deleteTexture(this.id);
    this.id = null;
  }
};

return GLX;
}());

//

var vec2 = {
  len: function(a) {
    return Math.sqrt(a[0]*a[0] + a[1]*a[1]);
  },

  add: function(a, b) {
    return [a[0]+b[0], a[1]+b[1]];
  },

  sub: function(a, b) {
    return [a[0]-b[0], a[1]-b[1]];
  },

  dot: function(a, b) {
    return a[1]*b[0] - a[0]*b[1];
  },

  scale: function(a, f) {
    return [a[0]*f, a[1]*f];
  },

  equals: function(a, b) {
    return (a[0] === b[0] && a[1] === b[1]);
  }
};


var vec3 = {
  len: function(a) {
    return Math.sqrt(a[0]*a[0] + a[1]*a[1] + a[2]*a[2]);
  },

  sub: function(a, b) {
    return [a[0]-b[0], a[1]-b[1], a[2]-b[2]];
  },

  unit: function(a) {
    var l = this.len(a);
    return [a[0]/l, a[1]/l, a[2]/l];
  },

  normal: function(a, b, c) {
    var d1 = this.sub(a, b);
    var d2 = this.sub(b, c);
    // normalized cross product of d1 and d2
    return this.unit([
      d1[1]*d2[2] - d1[2]*d2[1],
      d1[2]*d2[0] - d1[0]*d2[2],
      d1[0]*d2[1] - d1[1]*d2[0]
    ]);
  }
};


var earcut = (function() {

  function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
      outerLen = hasHoles ? holeIndices[0]*dim : data.length,
      outerNode = linkedList(data, 0, outerLen, dim, true),
      triangles = [];

    if (!outerNode) return triangles;

    var minX, minY, maxX, maxY, x, y, size;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length>80*dim) {
      minX = maxX = data[0];
      minY = maxY = data[1];

      for (var i = dim; i<outerLen; i += dim) {
        x = data[i];
        y = data[i + 1];
        if (x<minX) minX = x;
        if (y<minY) minY = y;
        if (x>maxX) maxX = x;
        if (y>maxY) maxY = y;
      }

      // minX, minY and size are later used to transform coords into integers for z-order calculation
      size = Math.max(maxX - minX, maxY - minY);
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, size);

    return triangles;
  }

// create a circular doubly linked list from polygon points in the specified winding order
  function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === (signedArea(data, start, end, dim)>0)) {
      for (i = start; i<end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
    } else {
      for (i = end - dim; i>=start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
    }

    if (last && equals(last, last.next)) {
      removeNode(last);
      last = last.next;
    }

    return last;
  }

// eliminate colinear or duplicate points
  function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
      again;
    do {
      again = false;

      if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
        removeNode(p);
        p = end = p.prev;
        if (p === p.next) return null;
        again = true;

      } else {
        p = p.next;
      }
    } while (again || p !== end);

    return end;
  }

// main ear slicing loop which triangulates a polygon (given as a linked list)
  function earcutLinked(ear, triangles, dim, minX, minY, size, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && size) indexCurve(ear, minX, minY, size);

    var stop = ear,
      prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
      prev = ear.prev;
      next = ear.next;

      if (size ? isEarHashed(ear, minX, minY, size) : isEar(ear)) {
        // cut off the triangle
        triangles.push(prev.i/dim);
        triangles.push(ear.i/dim);
        triangles.push(next.i/dim);

        removeNode(ear);

        // skipping the next vertice leads to less sliver triangles
        ear = next.next;
        stop = next.next;

        continue;
      }

      ear = next;

      // if we looped through the whole remaining polygon and can't find any more ears
      if (ear === stop) {
        // try filtering points and slicing again
        if (!pass) {
          earcutLinked(filterPoints(ear), triangles, dim, minX, minY, size, 1);

          // if this didn't work, try curing all small self-intersections locally
        } else if (pass === 1) {
          ear = cureLocalIntersections(ear, triangles, dim);
          earcutLinked(ear, triangles, dim, minX, minY, size, 2);

          // as a last resort, try splitting the remaining polygon into two
        } else if (pass === 2) {
          splitEarcut(ear, triangles, dim, minX, minY, size);
        }

        break;
      }
    }
  }

// check whether a polygon node forms a valid ear with adjacent nodes
  function isEar(ear) {
    var a = ear.prev,
      b = ear,
      c = ear.next;

    if (area(a, b, c)>=0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var p = ear.next.next;

    while (p !== ear.prev) {
      if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
        area(p.prev, p, p.next)>=0) return false;
      p = p.next;
    }

    return true;
  }

  function isEarHashed(ear, minX, minY, size) {
    var a = ear.prev,
      b = ear,
      c = ear.next;

    if (area(a, b, c)>=0) return false; // reflex, can't be an ear

    // triangle bbox; min & max are calculated like this for speed
    var minTX = a.x<b.x ? (a.x<c.x ? a.x : c.x) : (b.x<c.x ? b.x : c.x),
      minTY = a.y<b.y ? (a.y<c.y ? a.y : c.y) : (b.y<c.y ? b.y : c.y),
      maxTX = a.x>b.x ? (a.x>c.x ? a.x : c.x) : (b.x>c.x ? b.x : c.x),
      maxTY = a.y>b.y ? (a.y>c.y ? a.y : c.y) : (b.y>c.y ? b.y : c.y);

    // z-order range for the current triangle bbox;
    var minZ = zOrder(minTX, minTY, minX, minY, size),
      maxZ = zOrder(maxTX, maxTY, minX, minY, size);

    // first look for points inside the triangle in increasing z-order
    var p = ear.nextZ;

    while (p && p.z<=maxZ) {
      if (p !== ear.prev && p !== ear.next &&
        pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
        area(p.prev, p, p.next)>=0) return false;
      p = p.nextZ;
    }

    // then look for points in decreasing z-order
    p = ear.prevZ;

    while (p && p.z>=minZ) {
      if (p !== ear.prev && p !== ear.next &&
        pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
        area(p.prev, p, p.next)>=0) return false;
      p = p.prevZ;
    }

    return true;
  }

// go through all polygon nodes and cure small local self-intersections
  function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
      var a = p.prev,
        b = p.next.next;

      if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

        triangles.push(a.i/dim);
        triangles.push(p.i/dim);
        triangles.push(b.i/dim);

        // remove two nodes involved
        removeNode(p);
        removeNode(p.next);

        p = start = b;
      }
      p = p.next;
    } while (p !== start);

    return p;
  }

// try splitting polygon into two and triangulate them independently
  function splitEarcut(start, triangles, dim, minX, minY, size) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
      var b = a.next.next;
      while (b !== a.prev) {
        if (a.i !== b.i && isValidDiagonal(a, b)) {
          // split the polygon in two by the diagonal
          var c = splitPolygon(a, b);

          // filter colinear points around the cuts
          a = filterPoints(a, a.next);
          c = filterPoints(c, c.next);

          // run earcut on each half
          earcutLinked(a, triangles, dim, minX, minY, size);
          earcutLinked(c, triangles, dim, minX, minY, size);
          return;
        }
        b = b.next;
      }
      a = a.next;
    } while (a !== start);
  }

// link every hole into the outer loop, producing a single-ring polygon without holes
  function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
      i, len, start, end, list;

    for (i = 0, len = holeIndices.length; i<len; i++) {
      start = holeIndices[i]*dim;
      end = i<len - 1 ? holeIndices[i + 1]*dim : data.length;
      list = linkedList(data, start, end, dim, false);
      if (list === list.next) list.steiner = true;
      queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i<queue.length; i++) {
      eliminateHole(queue[i], outerNode);
      outerNode = filterPoints(outerNode, outerNode.next);
    }

    return outerNode;
  }

  function compareX(a, b) {
    return a.x - b.x;
  }

// find a bridge between vertices that connects hole with an outer ring and and link it
  function eliminateHole(hole, outerNode) {
    outerNode = findHoleBridge(hole, outerNode);
    if (outerNode) {
      var b = splitPolygon(outerNode, hole);
      filterPoints(b, b.next);
    }
  }

// David Eberly's algorithm for finding a bridge between hole and outer polygon
  function findHoleBridge(hole, outerNode) {
    var p = outerNode,
      hx = hole.x,
      hy = hole.y,
      qx = -Infinity,
      m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
      if (hy<=p.y && hy>=p.next.y) {
        var x = p.x + (hy - p.y)*(p.next.x - p.x)/(p.next.y - p.y);
        if (x<=hx && x>qx) {
          qx = x;
          if (x === hx) {
            if (hy === p.y) return p;
            if (hy === p.next.y) return p.next;
          }
          m = p.x<p.next.x ? p : p.next;
        }
      }
      p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    if (hx === qx) return m.prev; // hole touches outer segment; pick lower endpoint

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
      mx = m.x,
      my = m.y,
      tanMin = Infinity,
      tan;

    p = m.next;

    while (p !== stop) {
      if (hx>=p.x && p.x>=mx &&
        pointInTriangle(hy<my ? hx : qx, hy, mx, my, hy<my ? qx : hx, hy, p.x, p.y)) {

        tan = Math.abs(hy - p.y)/(hx - p.x); // tangential

        if ((tan<tanMin || (tan === tanMin && p.x>m.x)) && locallyInside(p, hole)) {
          m = p;
          tanMin = tan;
        }
      }

      p = p.next;
    }

    return m;
  }

// interlink polygon nodes in z-order
  function indexCurve(start, minX, minY, size) {
    var p = start;
    do {
      if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, size);
      p.prevZ = p.prev;
      p.nextZ = p.next;
      p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
  }

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
  function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize,
      inSize = 1;

    do {
      p = list;
      list = null;
      tail = null;
      numMerges = 0;

      while (p) {
        numMerges++;
        q = p;
        pSize = 0;
        for (i = 0; i<inSize; i++) {
          pSize++;
          q = q.nextZ;
          if (!q) break;
        }

        qSize = inSize;

        while (pSize>0 || (qSize>0 && q)) {

          if (pSize === 0) {
            e = q;
            q = q.nextZ;
            qSize--;
          } else if (qSize === 0 || !q) {
            e = p;
            p = p.nextZ;
            pSize--;
          } else if (p.z<=q.z) {
            e = p;
            p = p.nextZ;
            pSize--;
          } else {
            e = q;
            q = q.nextZ;
            qSize--;
          }

          if (tail) tail.nextZ = e;
          else list = e;

          e.prevZ = tail;
          tail = e;
        }

        p = q;
      }

      tail.nextZ = null;
      inSize *= 2;

    } while (numMerges>1);

    return list;
  }

// z-order of a point given coords and size of the data bounding box
  function zOrder(x, y, minX, minY, size) {
    // coords are transformed into non-negative 15-bit integer range
    x = 32767*(x - minX)/size;
    y = 32767*(y - minY)/size;

    x = (x | (x<<8)) & 0x00FF00FF;
    x = (x | (x<<4)) & 0x0F0F0F0F;
    x = (x | (x<<2)) & 0x33333333;
    x = (x | (x<<1)) & 0x55555555;

    y = (y | (y<<8)) & 0x00FF00FF;
    y = (y | (y<<4)) & 0x0F0F0F0F;
    y = (y | (y<<2)) & 0x33333333;
    y = (y | (y<<1)) & 0x55555555;

    return x | (y<<1);
  }

// find the leftmost node of a polygon ring
  function getLeftmost(start) {
    var p = start,
      leftmost = start;
    do {
      if (p.x<leftmost.x) leftmost = p;
      p = p.next;
    } while (p !== start);

    return leftmost;
  }

// check if a point lies within a convex triangle
  function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px)*(ay - py) - (ax - px)*(cy - py)>=0 &&
      (ax - px)*(by - py) - (bx - px)*(ay - py)>=0 &&
      (bx - px)*(cy - py) - (cx - px)*(by - py)>=0;
  }

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
  function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) &&
      locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
  }

// signed area of a triangle
  function area(p, q, r) {
    return (q.y - p.y)*(r.x - q.x) - (q.x - p.x)*(r.y - q.y);
  }

// check if two points are equal
  function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
  }

// check if two segments intersect
  function intersects(p1, q1, p2, q2) {
    if ((equals(p1, q1) && equals(p2, q2)) ||
      (equals(p1, q2) && equals(p2, q1))) return true;
    return area(p1, q1, p2)>0 !== area(p1, q1, q2)>0 &&
      area(p2, q2, p1)>0 !== area(p2, q2, q1)>0;
  }

// check if a polygon diagonal intersects any polygon segments
  function intersectsPolygon(a, b) {
    var p = a;
    do {
      if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
        intersects(p, p.next, a, b)) return true;
      p = p.next;
    } while (p !== a);

    return false;
  }

// check if a polygon diagonal is locally inside the polygon
  function locallyInside(a, b) {
    return area(a.prev, a, a.next)<0 ?
    area(a, b, a.next)>=0 && area(a, a.prev, b)>=0 :
    area(a, b, a.prev)<0 || area(a, a.next, b)<0;
  }

// check if the middle point of a polygon diagonal is inside the polygon
  function middleInside(a, b) {
    var p = a,
      inside = false,
      px = (a.x + b.x)/2,
      py = (a.y + b.y)/2;
    do {
      if (((p.y>py) !== (p.next.y>py)) && (px<(p.next.x - p.x)*(py - p.y)/(p.next.y - p.y) + p.x))
        inside = !inside;
      p = p.next;
    } while (p !== a);

    return inside;
  }

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
  function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
      b2 = new Node(b.i, b.x, b.y),
      an = a.next,
      bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
  }

// create a node and optionally link it with previous one (in a circular doubly linked list)
  function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
      p.prev = p;
      p.next = p;

    } else {
      p.next = last.next;
      p.prev = last;
      last.next.prev = p;
      last.next = p;
    }
    return p;
  }

  function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
  }

  function Node(i, x, y) {
    // vertice index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertice nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = null;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
  }

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
  earcut.deviation = function(data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0]*dim : data.length;
    var i, len;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
      for (i = 0, len = holeIndices.length; i<len; i++) {
        var start = holeIndices[i]*dim;
        var end = i<len - 1 ? holeIndices[i + 1]*dim : data.length;
        polygonArea -= Math.abs(signedArea(data, start, end, dim));
      }
    }

    var trianglesArea = 0;
    for (i = 0, len = triangles.length; i < len; i += 3) {
      var a = triangles[i]*dim;
      var b = triangles[i + 1]*dim;
      var c = triangles[i + 2]*dim;
      trianglesArea += Math.abs(
        (data[a] - data[c])*(data[b + 1] - data[a + 1]) -
        (data[a] - data[b])*(data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 :
      Math.abs((trianglesArea - polygonArea)/polygonArea);
  };

  function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i<end; i += dim) {
      sum += (data[j] - data[i])*(data[i + 1] + data[j + 1]);
      j = i;
    }
    return sum;
  }

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
  earcut.flatten = function(data) {
    var dim = data[0][0].length,
      result = { vertices: [], holes: [], dimensions: dim },
      holeIndex = 0;

    for (var i = 0; i<data.length; i++) {
      for (var j = 0; j<data[i].length; j++) {
        for (var d = 0; d<dim; d++) result.vertices.push(data[i][j][d]);
      }
      if (i>0) {
        holeIndex += data[i - 1].length;
        result.holes.push(holeIndex);
      }
    }
    return result;
  };

  return earcut;

}(this));


function getSqDist(p1, p2) {
  var dx = p1[0] - p2[0], dy = p1[1] - p2[1];
  return dx * dx + dy * dy;
}

function simplify(polygon, sqTolerance) {
  var prevPoint = polygon[0],
    newPoints = [prevPoint],
    point;

  for (var i = 1, len = polygon.length; i < len; i++) {
    point = polygon[i];
    if (getSqDist(point, prevPoint) > sqTolerance) {
      newPoints.push(point);
      prevPoint = point;
    }
  }

  if (prevPoint !== point) {
    newPoints.push(point);
  }

  if (newPoints.length < 3) {
    return polygon;
  }

  return newPoints;
}

function getPolygonDirection(polygon) {
  var
    d,
    segmentLength = 0,
    maxSegmentLength = 0,
    maxSegment;

  var simplePolygon = simplify(polygon, 10);

  for (var i = 0, il = simplePolygon.length - 1; i<il; i++) {
    segmentLength = vec2.len(vec2.sub(simplePolygon[i+1], simplePolygon[i]));
    if (segmentLength>maxSegmentLength) {
      maxSegmentLength = segmentLength;
      maxSegment = [simplePolygon[i], simplePolygon[i + 1]];
    }
  }

  d = vec2.sub(maxSegment[1], maxSegment[0]);
  return [d[0]/maxSegmentLength, d[1]/maxSegmentLength];
}

function getPolygonIntersections(polygon, line) {
  var res = [], segment, intersection;
  for (var i = 0, il = polygon.length-1; i < il; i++) {
    segment = [polygon[i], polygon[i+1]];
    intersection = getLineIntersection(segment, line);
    if (intersection !== undefined) {
      res.push({ index:i, segment:segment });
    }
  }
  return res;
}

function getLineIntersection(line1, line2) {
  if (vec2.equals(line1[0], line2[0]) || vec2.equals(line1[0], line2[1]) || vec2.equals(line1[1], line2[0]) || vec2.equals(line1[1], line2[1])) {
    return;
  }

  var d1 = vec2.sub(line1[1], line1[0]), d2 = vec2.sub(line2[1], line2[0]);

  // calculate dot product;
  // if dot product is close to 0, the lines are parallel
  var denom = vec2.dot(d1, d2);
  if (Math.abs(denom) < 1e-10) {
    return;
  }

  // calculate vector for connection between line1[0] and line2[0]
  var amc = vec2.sub(line2[0], line1[0]);

  // calculate t so that intersection is at line1[0]+t*v
  var t = vec2.dot(amc, d2)/denom;
  if (t<0 || t>1) {
    return;
  }

  // calculate s so that intersection is at line2[0]+t*q
  var s = vec2.dot(amc, d1)/denom;
  if (s<0 || s>1) {
    return;
  }

  return vec2.add(line1[0], vec2.scale(d1, t));
}

// function getDistanceToSegment(point, line) {
//   var length = vec2.len(vec2.sub(line[1], line[0]));
//   if (length === 0) {
//     return vec2.len(vec2.sub(point, line[0]));
//   }
//
//   var t = ((point[0]-line[0][0]) * (line[1][0]-line[0][0]) + (point[1]-line[0][1]) * (line[1][1]-line[0][1])) / length;
//   t = Math.max(0, Math.min(1, t));
//
//   var d = vec2.len(vec2.sub(point, vec2.add(line[0], vec2.sub(line[1], vec2.scale(point, t)))));
//   return Math.sqrt(d);
// }

function getDistanceToLine(a, line) {
  var r1 = line[0];
  var r2 = line[1];
  if (r1[0] === r2[0] && r1[1] === r2[1]) {
    return;
  }

  var m1 = (r2[1] - r1[1]) / (r2[0] - r1[0]);
  var b1 = r1[1] - (m1*r1[0]);

  if (m1 === 0) {
    return Math.abs(b1-a[1]);
  }

  if (m1 === Infinity){
    return Math.abs(r1[0]-a[0]);
  }

  var m2 =- 1.0/m1;
  var b2 = a[1] - (m2*a[0]);

  var xs = (b2-b1)/(m1-m2);
  var ys = m1*xs+b1;

  var c1 = a[0]-xs;
  var c2 = a[1]-ys;

  return Math.sqrt(c1*c1+c2*c2);
}

function getSegmentCenter(seg) {
  return vec2.add(seg[0], vec2.scale(vec2.sub(seg[1], seg[0]), 0.5) );
}


// TODO: handle inner rings

function addRidgedRoof(buffers, properties, polygon, offset, dim, wallColor, roofColor) {
  offset = 0; // TODO

  var
    outerPolygon = polygon[0],
    direction,
    angle, rad;

  if (properties.roofRidgeDirection !== undefined) {
    angle = parseFloat(properties.roofRidgeDirection);
    if (!isNaN(angle)) {
      rad = 90+angle*Math.PI/180;
      direction = [Math.sin(rad), Math.cos(rad)];
    }
  } else if (properties.roofDirection !== undefined) {
    angle = parseFloat(properties.roofDirection);
    if (!isNaN(angle)) {
      rad = angle*Math.PI/180;
      direction = [Math.sin(rad), Math.cos(rad)];
    }
  } else {
    direction = getPolygonDirection(outerPolygon);
    if (properties.roofOrientation && properties.roofOrientation === 'across') {
      direction = [-direction[1], direction[0]];
    }
  }

  direction = vec2.scale(direction, 1000);

  // calculate the two outermost intersection indices of the
  // quasi-infinite ridge line with segments of the polygon

  var intersections = getPolygonIntersections(outerPolygon, [vec2.sub(dim.center, direction), vec2.add(dim.center, direction)]);

  if (intersections.length < 2) {
    throw new Error('can\'t handle ridged roof geometry');
  }

  // roof caps that are close to first and second vertex of the ridge
  var
    cap1 = intersections[0],
    cap2 = intersections[1];

  // make sure, indices are in ascending order
  if (cap1.index > cap2.index) {
    var tmp = cap1;
    cap1 = cap2;
    cap2 = tmp;
  }

  // put ridge to the centers of the intersected segments
  cap1.center = getSegmentCenter(cap1.segment);
  cap2.center = getSegmentCenter(cap2.segment);

  if (offset === 0) {
    var i;

    var ridge = [cap1.center, cap2.center];

    var
      maxDistance = 0,
      distances = [];

    for (i = 0; i < outerPolygon.length; i++) {
      distances[i] = getDistanceToLine(outerPolygon[i], ridge);
      maxDistance = Math.max(maxDistance, distances[i]);
    }

    // modify vertical position of all points
    for (i = 0; i < outerPolygon.length; i++) {
      outerPolygon[i][2] = (1-distances[i]/maxDistance) * dim.roofHeight;
    }

    cap1.center[2] = dim.roofHeight;
    cap2.center[2] = dim.roofHeight;

    // create roof faces

    var roofFace1 = [cap1.center];
    roofFace1 = roofFace1.concat(outerPolygon.slice(cap1.index+1, cap2.index+1));
    roofFace1.push(cap2.center, cap1.center);
    split.polygon(buffers, [roofFace1], dim.roofZ, roofColor);

    var roofFace2 = [cap2.center];
    roofFace2 = roofFace2.concat(outerPolygon.slice(cap2.index+1, outerPolygon.length-1));
    roofFace2 = roofFace2.concat(outerPolygon.slice(0, cap1.index+1));
    roofFace2.push(cap1.center, cap2.center);
    split.polygon(buffers, [roofFace2], dim.roofZ, roofColor);

    // create extra wall faces

    outerPolygon.splice(cap1.index+1, 0, cap1.center);
    outerPolygon.splice(cap2.index+2, 0, cap2.center);

    for (i = 0; i < outerPolygon.length-1; i++) {
      split.quad(
        buffers,
        [outerPolygon[i  ][0], outerPolygon[i  ][1],dim.roofZ+outerPolygon[i  ][2]],
        [outerPolygon[i  ][0], outerPolygon[i  ][1],dim.roofZ],
        [outerPolygon[i+1][0], outerPolygon[i+1][1],dim.roofZ],
        [outerPolygon[i+1][0], outerPolygon[i+1][1],dim.roofZ+outerPolygon[i+1][2]],
        wallColor
      );
    }
  }

// // absolute distance of ridge to outline
// var ridgeOffset = vec2.scale(vec2.sub(c2, c1), offset);
// return [vec2.add(c1, ridgeOffset), vec2.sub(c2, ridgeOffset)];
}

function addSkillionRoof(buffers, properties, polygon, dim, wallColor, roofColor) {

  var
    i, il,
    outerPolygon = polygon[0],
    direction,
    angle, rad;

  if (properties.roofSlopeDirection !== undefined) {
    angle = parseFloat(properties.roofSlopeDirection);
    if (!isNaN(angle)) {
      rad = angle*Math.PI/180;
      direction = [Math.sin(rad), Math.cos(rad)];
    }
  } else if (properties.roofDirection !== undefined) {
    angle = parseFloat(properties.roofDirection);
    if (!isNaN(angle)) {
      rad = angle*Math.PI/180;
      direction = [Math.sin(rad), Math.cos(rad)];
    }
  } else {
    direction = getPolygonDirection(outerPolygon);
    direction = [-direction[1], direction[0]];
    if (properties.roofOrientation && properties.roofOrientation === 'across') {
      direction = [-direction[1], direction[0]];
    }
  }

  direction = vec2.scale(direction, 1000);

  // get farthest intersection of polygon and slope line

  var
    intersections = getPolygonIntersections(outerPolygon, [vec2.sub(dim.center, direction), vec2.add(dim.center, direction)]),
    ridge,
    distance = 0,
    maxDistance = 0;

  for (i = 0, il = intersections.length; i<il; i++) {
    distance = getDistanceToLine(dim.center, intersections[i].segment);
    if (distance > maxDistance) {
      ridge = intersections[i].segment;
      maxDistance = distance;
    }
  }

  if (ridge === undefined) {
    return;
  }

  maxDistance = 0;
  var distances = [];
  for (i = 0; i < outerPolygon.length; i++) {
    distances[i] = getDistanceToLine(outerPolygon[i], ridge);
    maxDistance = Math.max(maxDistance, distances[i]);
  }

  // modify vertical position of all points
  for (i = 0; i < outerPolygon.length; i++) {
    outerPolygon[i][2] = (1-distances[i]/maxDistance) * dim.roofHeight;
  }

  // create roof face

  split.polygon(buffers, [outerPolygon], dim.roofZ, roofColor);

  // create extra wall faces

  for (i = 0; i < outerPolygon.length-1; i++) {
    split.quad(
      buffers,
      [outerPolygon[i  ][0], outerPolygon[i  ][1],dim.roofZ+outerPolygon[i  ][2]],
      [outerPolygon[i  ][0], outerPolygon[i  ][1],dim.roofZ],
      [outerPolygon[i+1][0], outerPolygon[i+1][1],dim.roofZ],
      [outerPolygon[i+1][0], outerPolygon[i+1][1],dim.roofZ+outerPolygon[i+1][2]],
      wallColor
    );
  }
}

/***
function HalfHippedRoof(tags, polygon) {
  RidgedRoof.call(this, tags, polygon, 1/6);

  this.cap1part = [
    interpolateBetween(this.cap1[0], this.cap1[1], 0.5 - this.ridgeOffset/this.cap1.getLength()),
    interpolateBetween(this.cap1[0], this.cap1[1], 0.5 + this.ridgeOffset/this.cap1.getLength())
  ];

  this.cap2part = [
    interpolateBetween(this.cap2[0], this.cap2[1], 0.5 - this.ridgeOffset/this.cap1.getLength()),
    interpolateBetween(this.cap2[0], this.cap2[1], 0.5 + this.ridgeOffset/this.cap1.getLength())
  ];
}

HalfHippedRoof.prototype = Object.create(RidgedRoof.prototype);

HalfHippedRoof.prototype.getPolygon = function() {
  var outerPoly = this.polygon[0];

  outerPoly = insertIntoPolygon(outerPoly, this.cap1part[0], 0.2);
  outerPoly = insertIntoPolygon(outerPoly, this.cap1part[1], 0.2);
  outerPoly = insertIntoPolygon(outerPoly, this.cap2part[0], 0.2);
  outerPoly = insertIntoPolygon(outerPoly, this.cap2part[1], 0.2);

  return new PolygonWithHolesXZ(outerPoly.asSimplePolygon(), this.polygon.getHoles());
};

HalfHippedRoof.prototype.getInnerPoints = function() {
  return [];
};

HalfHippedRoof.prototype.getInnerSegments = function() {
  return [this.ridge,
    [this.ridge[0], this.cap1part[0]],
    [this.ridge[0], this.cap1part[1]],
    [this.ridge[1], this.cap2part[0]],
    [this.ridge[1], this.cap2part[1]]
  ];
};



 function GambrelRoof(tags, polygon) {
  RidgedRoof.call(this, tags, polygon, 0);

  this.cap1part = [
    interpolateBetween(this.cap1[0], this.cap1[1], 1/6.0),
    interpolateBetween(this.cap1[0], this.cap1[1], 5/6.0)
  ];

  this.cap2part = [
    interpolateBetween(this.cap2[0], this.cap2[1], 1/6.0),
    interpolateBetween(this.cap2[0], this.cap2[1], 5/6.0)
  ];
}

 GambrelRoof.prototype = Object.create(RidgedRoof.prototype);

 GambrelRoof.prototype.getPolygon = function() {
  var outerPoly = this.polygon[0];

  outerPoly = insertIntoPolygon(outerPoly, this.ridge[0], 0.2);
  outerPoly = insertIntoPolygon(outerPoly, this.ridge[1], 0.2);
  outerPoly = insertIntoPolygon(outerPoly, this.cap1part[0], 0.2);
  outerPoly = insertIntoPolygon(outerPoly, this.cap1part[1], 0.2);
  outerPoly = insertIntoPolygon(outerPoly, this.cap2part[0], 0.2);
  outerPoly = insertIntoPolygon(outerPoly, this.cap2part[1], 0.2);

  // TODO: add intersections of additional edges with outline?

  return new PolygonWithHolesXZ(
    outerPoly.asSimplePolygon(),
    this.polygon.getHoles()
  );
};

 GambrelRoof.prototype.getInnerPoints = function() {
  return [];
};

 GambrelRoof.prototype.getInnerSegments = function() {
  return [this.ridge,
    [this.cap1part[0], this.cap2part[1]],
    [this.cap1part[1], this.cap2part[0]]
  ];
};

 //*************************************************************************************************

 function RoundRoof() {
  RidgedRoof.call(this, 0);

  if (this.roofHeight<this.maxDistanceToRidge) {
    var squaredHeight = this.roofHeight*this.roofHeight;
    var squaredDist = this.maxDistanceToRidge*this.maxDistanceToRidge;
    var centerY = (squaredDist - squaredHeight)/(2*this.roofHeight);
    this.radius = Math.sqrt(squaredDist + centerY*centerY);
  } else {
    this.radius = 0;
  }

  this.rings = Math.max(3, this.roofHeight/RoundRoof.ROOF_SUBDIVISION_METER);
  this.capParts = [];
  // TODO: would be good to vary step size with slope
  var step = 0.5/(this.rings + 1);
  for (var i = 1; i<=this.rings; i++) {
    this.capParts.push([
      interpolateBetween(this.cap1[0], this.cap1[1], i*step),
      interpolateBetween(this.cap1[0], this.cap1[1], 1 - i*step)
    ]);

    this.capParts.push([
      interpolateBetween(this.cap2[0], this.cap2[1], i*step),
      interpolateBetween(this.cap2[0], this.cap2[1], 1 - i*step)
    ]);
  }
}

 RoundRoof.prototype = Object.create(RidgedRoof.prototype);

 RoundRoof.ROOF_SUBDIVISION_METER = 2.5;

 RoundRoof.prototype.getPolygon = function() {
  var outerPoly = this.polygon[0];
  outerPoly = insertIntoPolygon(outerPoly, this.ridge[0], 0.2);
  outerPoly = insertIntoPolygon(outerPoly, this.ridge[1], 0.2);

  for (var capPart in this.capParts) {
    outerPoly = insertIntoPolygon(this.outerPoly, capPart[0], 0.2);
    outerPoly = insertIntoPolygon(this.outerPoly, capPart[1], 0.2);
  }

  //TODO: add intersections of additional edges with outline?
  return new PolygonWithHolesXZ(outerPoly.asSimplePolygon(), this.polygon.getHoles());
};

 RoundRoof.prototype.getInnerPoints = function() {
  return [];
};

 RoundRoof.prototype.getInnerSegments = function() {
  var innerSegments = [];
  innerSegments.push(this.ridge);
  for (var i = 0; i<this.rings*2; i += 2) {
    var cap1part = this.capParts[i];
    var cap2part = this.capParts[i + 1];
    innerSegments.push([cap1part[0], cap2part[1]]);
    innerSegments.push([cap1part[1], cap2part[0]]);
  }
  return innerSegments;
};

 //*************************************************************************************************

 function MansardRoof(tags, polygon) {
  RidgedRoof.call(this, tags, polygon, 1/3);

  this.mansardEdge1 = [
    interpolateBetween(this.cap1[0], this.ridge[0], 1/3.0),
    interpolateBetween(this.cap2[1], this.ridge[1], 1/3.0)
  ];

  this.mansardEdge2 = [
    interpolateBetween(this.cap1[1], this.ridge[0], 1/3.0),
    interpolateBetween(this.cap2[0], this.ridge[1], 1/3.0)
  ];
}

 MansardRoof.prototype = Object.create(RidgedRoof.prototype);

 MansardRoof.prototype.getInnerPoints = function() {
  return [];
};

 MansardRoof.prototype.getInnerSegments = function() {
  return [this.ridge,
    this.mansardEdge1,
    this.mansardEdge2,
    [this.ridge[0], this.mansardEdge1[0]],
    [this.ridge[0], this.mansardEdge2[0]],
    [this.ridge[1], this.mansardEdge1[1]],
    [this.ridge[1], this.mansardEdge2[1]],
    [this.cap1[0], this.mansardEdge1[0]],
    [this.cap2[1], this.mansardEdge1[1]],
    [this.cap1[1], this.mansardEdge2[0]],
    [this.cap2[0], this.mansardEdge2[1]],
    [this.mansardEdge1[0], this.mansardEdge2[0]],
    [this.mansardEdge1[1], this.mansardEdge2[1]]
  ];
};

 ***/


var split = {

  NUM_Y_SEGMENTS: 24,
  NUM_X_SEGMENTS: 32,

  //function isVertical(a, b, c) {
  //  return Math.abs(normal(a, b, c)[2]) < 1/5000;
  //}

  quad: function(buffers, a, b, c, d, color) {
    this.triangle(buffers, a, b, c, color);
    this.triangle(buffers, c, d, a, color);
  },

  triangle: function(buffers, a, b, c, color) {
    var n = vec3.normal(a, b, c);
    [].push.apply(buffers.vertices, [].concat(a, c, b));
    [].push.apply(buffers.normals,  [].concat(n, n, n));
    [].push.apply(buffers.colors,   [].concat(color, color, color));
    buffers.texCoords.push(0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
  },

  circle: function(buffers, center, radius, zPos, color) {
    zPos = zPos || 0;
    var u, v;
    for (var i = 0; i < this.NUM_X_SEGMENTS; i++) {
      u = i/this.NUM_X_SEGMENTS;
      v = (i+1)/this.NUM_X_SEGMENTS;
      this.triangle(
        buffers,
        [ center[0] + radius * Math.sin(u*Math.PI*2), center[1] + radius * Math.cos(u*Math.PI*2), zPos ],
        [ center[0],                                  center[1],                                  zPos ],
        [ center[0] + radius * Math.sin(v*Math.PI*2), center[1] + radius * Math.cos(v*Math.PI*2), zPos ],
        color
      );
    }
  },

  polygon: function(buffers, rings, zPos, color) {
    zPos = zPos || 0;
    var
      vertexBuffer = [], ringIndex = [],
      index = 0,
      i, il,
      j, jl,
      ri, rij;

    for (i = 0, il = rings.length; i < il; i++) {
      ri = rings[i];
      for (j = 0; j < ri.length; j++) {
        rij = ri[j];
        vertexBuffer.push(rij[0], rij[1], zPos + (rij[2] || 0));
      }
      if (i) {
        index += rings[i-1].length;
        ringIndex.push(index);
      }
    }

    var
      vertices = earcut(vertexBuffer, ringIndex, 3),
      v1, v2, v3;

    for (i = 0, il = vertices.length-2; i < il; i+=3) {
      v1 = vertices[i  ]*3;
      v2 = vertices[i+1]*3;
      v3 = vertices[i+2]*3;
      this.triangle(
        buffers,
        [ vertexBuffer[v1], vertexBuffer[v1+1], vertexBuffer[v1+2] ],
        [ vertexBuffer[v2], vertexBuffer[v2+1], vertexBuffer[v2+2] ],
        [ vertexBuffer[v3], vertexBuffer[v3+1], vertexBuffer[v3+2] ],
        color
      );
    }
  },

  //polygon3d: function(buffers, rings, color) {
  //  var ring = rings[0];
  //  var ringLength = ring.length;
  //  var vertices, t, tl;
  //
////  { r:255, g:0, b:0 }
//
  //  if (ringLength <= 4) { // 3: a triangle
  //    this.triangle(
  //      buffers,
  //      ring[0],
  //      ring[2],
  //      ring[1], color
  //    );
  //
  //    if (ringLength === 4) { // 4: a quad (2 triangles)
  //      this.triangle(
  //        buffers,
  //        ring[0],
  //        ring[3],
  //        ring[2], color
  //      );
  //    }
//      return;
  //  }
  //
  //  if (isVertical(ring[0], ring[1], ring[2])) {
  //    for (var i = 0, il = rings[0].length; i < il; i++) {
  //      rings[0][i] = [
  //        rings[0][i][2],
  //        rings[0][i][1],
  //        rings[0][i][0]
  //      ];
  //    }
  //
  //    vertices = earcut(rings);
  //    for (t = 0, tl = vertices.length-2; t < tl; t+=3) {
  //      this.triangle(
  //        buffers,
  //        [ vertices[t  ][2], vertices[t  ][1], vertices[t  ][0] ],
  //        [ vertices[t+1][2], vertices[t+1][1], vertices[t+1][0] ],
  //        [ vertices[t+2][2], vertices[t+2][1], vertices[t+2][0] ], color
  //      );
  //    }
//      return;
  //  }
  //
  //  vertices = earcut(rings);
  //  for (t = 0, tl = vertices.length-2; t < tl; t+=3) {
  //    this.triangle(
  //      buffers,
  //      [ vertices[t  ][0], vertices[t  ][1], vertices[t  ][2] ],
  //      [ vertices[t+1][0], vertices[t+1][1], vertices[t+1][2] ],
  //      [ vertices[t+2][0], vertices[t+2][1], vertices[t+2][2] ], color
  //    );
  //  }
  //},

  cube: function(buffers, sizeX, sizeY, sizeZ, X, Y, zPos, color) {
    X = X || 0;
    Y = Y || 0;
    zPos = zPos || 0;

    var a = [X,       Y,       zPos];
    var b = [X+sizeX, Y,       zPos];
    var c = [X+sizeX, Y+sizeY, zPos];
    var d = [X,       Y+sizeY, zPos];

    var A = [X,       Y,       zPos+sizeZ];
    var B = [X+sizeX, Y,       zPos+sizeZ];
    var C = [X+sizeX, Y+sizeY, zPos+sizeZ];
    var D = [X,       Y+sizeY, zPos+sizeZ];

    this.quad(buffers, b, a, d, c, color);
    this.quad(buffers, A, B, C, D, color);
    this.quad(buffers, a, b, B, A, color);
    this.quad(buffers, b, c, C, B, color);
    this.quad(buffers, c, d, D, C, color);
    this.quad(buffers, d, a, A, D, color);
  },

  cylinder: function(buffers, center, radius1, radius2, height, zPos, color) {
    zPos = zPos || 0;
    var
      currAngle, nextAngle,
      currSin, currCos,
      nextSin, nextCos,
      num = this.NUM_X_SEGMENTS,
      doublePI = Math.PI*2;

    for (var i = 0; i < num; i++) {
      currAngle = ( i   /num) * doublePI;
      nextAngle = ((i+1)/num) * doublePI;

      currSin = Math.sin(currAngle);
      currCos = Math.cos(currAngle);

      nextSin = Math.sin(nextAngle);
      nextCos = Math.cos(nextAngle);

      this.triangle(
        buffers,
        [ center[0] + radius1*currSin, center[1] + radius1*currCos, zPos ],
        [ center[0] + radius2*nextSin, center[1] + radius2*nextCos, zPos+height ],
        [ center[0] + radius1*nextSin, center[1] + radius1*nextCos, zPos ],
        color
      );

      if (radius2 !== 0) {
        this.triangle(
          buffers,
          [ center[0] + radius2*currSin, center[1] + radius2*currCos, zPos+height ],
          [ center[0] + radius2*nextSin, center[1] + radius2*nextCos, zPos+height ],
          [ center[0] + radius1*currSin, center[1] + radius1*currCos, zPos ],
          color
        );
      }
    }
  },

  dome: function(buffers, center, radius, height, zPos, color) {
    zPos = zPos || 0;
    var
      currAngle, nextAngle,
      currSin, currCos,
      nextSin, nextCos,
      currRadius, nextRadius,
      nextHeight, nextZ,
      num = this.NUM_Y_SEGMENTS/2,
      halfPI = Math.PI/2;

    for (var i = 0; i < num; i++) {
      currAngle = ( i   /num) * halfPI - halfPI;
      nextAngle = ((i+1)/num) * halfPI - halfPI;

      currSin = Math.sin(currAngle);
      currCos = Math.cos(currAngle);

      nextSin = Math.sin(nextAngle);
      nextCos = Math.cos(nextAngle);

      currRadius = currCos*radius;
      nextRadius = nextCos*radius;

      nextHeight = (nextSin-currSin)*height;
      nextZ = zPos - nextSin*height;

      this.cylinder(buffers, center, nextRadius, currRadius, nextHeight, nextZ, color);
    }
  },

  // TODO
  sphere: function(buffers, center, radius, height, zPos, color) {
    zPos = zPos || 0;
    var vertexCount = 0;
    vertexCount += this.circle(buffers, center, radius, zPos, color);
    vertexCount += this.cylinder(buffers, center, radius, radius, height, zPos, color);
    vertexCount += this.circle(buffers, center, radius, zPos+height, color);
    return vertexCount;
  },

  pyramid: function(buffers, polygon, center, height, zPos, color) {
    zPos = zPos || 0;
    polygon = polygon[0];
    for (var i = 0, il = polygon.length-1; i < il; i++) {
      this.triangle(
        buffers,
        [ polygon[i  ][0], polygon[i  ][1], zPos ],
        [ polygon[i+1][0], polygon[i+1][1], zPos ],
        [ center[0], center[1], zPos+height ],
        color
      );
    }
  },

  extrusion: function(buffers, polygon, height, zPos, color, texCoord) {
    zPos = zPos || 0;
    var
      ring, a, b,
      L,
      v0, v1, v2, v3, n,
      tx1, tx2,
      ty1 = texCoord[2]*height, ty2 = texCoord[3]*height,
      i, il,
      r, rl;

    for (i = 0, il = polygon.length; i < il; i++) {
      ring = polygon[i];
        for (r = 0, rl = ring.length-1; r < rl; r++) {
        a = ring[r];
        b = ring[r+1];
        L = vec2.len(vec2.sub(a, b));

        v0 = [ a[0], a[1], zPos];
        v1 = [ b[0], b[1], zPos];
        v2 = [ b[0], b[1], zPos+height];
        v3 = [ a[0], a[1], zPos+height];

        n = vec3.normal(v0, v1, v2);
        [].push.apply(buffers.vertices, [].concat(v0, v2, v1, v0, v3, v2));
        [].push.apply(buffers.normals,  [].concat(n, n, n, n, n, n));
        [].push.apply(buffers.colors,   [].concat(color, color, color, color, color, color));

        tx1 = (texCoord[0]*L) <<0;
        tx2 = (texCoord[1]*L) <<0;

        buffers.texCoords.push(
          tx1, ty2,
          tx2, ty1,
          tx2, ty2,

          tx1, ty2,
          tx1, ty1,
          tx2, ty1
        );
      }
    }
  }//,

  // extrusionXX: function(buffers, a, b, height, zPos, color) {
  //   zPos = zPos || 0;
  //   var v0, v1, v2, v3, n;
  //
  //   v0 = [ a[0], a[1], zPos];
  //   v1 = [ b[0], b[1], zPos];
  //   v2 = [ b[0], b[1], zPos+height+(b[2] || 0)];
  //   v3 = [ a[0], a[1], zPos+height+(a[2] || 0)];
  //
  //   n = vec3.normal(v0, v1, v2);
  //   [].push.apply(buffers.vertices, [].concat(v0, v2, v1, v0, v3, v2));
  //   [].push.apply(buffers.normals,  [].concat(n, n, n, n, n, n));
  //   [].push.apply(buffers.colors,   [].concat(color, color, color, color, color, color));
  //
  //   buffers.texCoords.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  // }

};


var triangulate = (function() {

  var
    DEFAULT_HEIGHT = 10,
    DEFAULT_COLOR = new Color('rgb(220, 210, 200)').toArray(),
    METERS_PER_LEVEL = 3;

  var MATERIAL_COLORS = {
    brick: '#cc7755',
    bronze: '#ffeecc',
    canvas: '#fff8f0',
    concrete: '#999999',
    copper: '#a0e0d0',
    glass: '#e8f8f8',
    gold: '#ffcc00',
    plants: '#009933',
    metal: '#aaaaaa',
    panel: '#fff8f0',
    plaster: '#999999',
    roof_tiles: '#f08060',
    silver: '#cccccc',
    slate: '#666666',
    stone: '#996666',
    tar_paper: '#333333',
    wood: '#deb887'
  };

  var BASE_MATERIALS = {
    asphalt: 'tar_paper',
    bitumen: 'tar_paper',
    block: 'stone',
    bricks: 'brick',
    glas: 'glass',
    glassfront: 'glass',
    grass: 'plants',
    masonry: 'stone',
    granite: 'stone',
    panels: 'panel',
    paving_stones: 'stone',
    plastered: 'plaster',
    rooftiles: 'roof_tiles',
    roofingfelt: 'tar_paper',
    sandstone: 'stone',
    sheet: 'canvas',
    sheets: 'canvas',
    shingle: 'tar_paper',
    shingles: 'tar_paper',
    slates: 'slate',
    steel: 'metal',
    tar: 'tar_paper',
    tent: 'canvas',
    thatch: 'plants',
    tile: 'roof_tiles',
    tiles: 'roof_tiles'
    // cardboard
    // eternit
    // limestone
    // straw
  };

  // number of windows per horizontal meter of building wall
  var WINDOWS_PER_METER = 0.5;

  // var EARTH_RADIUS_IN_METERS = 6378137;
  // var EARTH_CIRCUMFERENCE_IN_METERS = EARTH_RADIUS_IN_METERS * Math.PI * 2;
  // var METERS_PER_DEGREE_LATITUDE = EARTH_CIRCUMFERENCE_IN_METERS / 360;
  var METERS_PER_DEGREE_LATITUDE = 6378137 * Math.PI / 180;

  function triangulate(buffers, feature, origin, forcedColor, colorVariance) {
    // a single feature might split into several items
    var
      scale = [METERS_PER_DEGREE_LATITUDE*Math.cos(origin[1]/180*Math.PI), METERS_PER_DEGREE_LATITUDE],
      geometries = alignGeometry(feature.geometry),
      polygon;

    for (var i = 0, il = geometries.length; i<il; i++) {
      polygon = transform(geometries[i], origin, scale);
      addBuilding(buffers, feature.properties, polygon, forcedColor, colorVariance);
    }
  }

  //***************************************************************************

  // converts all coordinates of all rings in 'polygonRings' from lat/lon pairs to offsets from origin
  function transform(geometry, origin, scale) {
    return geometry.map(function(ring, i) {
      // outer ring (first ring) needs to be clockwise, inner rings
      // counter-clockwise. If they are not, make them by reverting order.
      if ((i === 0) !== isClockWise(ring)) {
        ring.reverse();
      }

      return ring.map(function(point) {
        return [
          (point[0]-origin[0])*scale[0],
          -(point[1]-origin[1])*scale[1]
        ];
      });
    });
  }

  function isClockWise(ring) {
    return 0 < ring.reduce(function(a, b, c, d) {
      return a + ((c < d.length - 1) ? (d[c+1][0] - b[0]) * (d[c+1][1] + b[1]) : 0);
    }, 0);
  }

  function getBBox(ring) {
    var
      x =  Infinity, y =  Infinity,
      X = -Infinity, Y = -Infinity;

    for (var i = 0; i < ring.length; i++) {
      x = Math.min(x, ring[i][0]);
      y = Math.min(y, ring[i][1]);

      X = Math.max(X, ring[i][0]);
      Y = Math.max(Y, ring[i][1]);
    }

    return { minX:x, minY:y, maxX:X, maxY:Y };
  }

  // TODO: handle GeometryCollection
  function alignGeometry(geometry) {
    switch (geometry.type) {
      case 'MultiPolygon': return geometry.coordinates;
      case 'Polygon': return [geometry.coordinates];
      default: return [];
    }
  }

  // TODO: colorVariance = (id/2%2 ? -1 : +1)*(id%2 ? 0.03 : 0.06)

  function getMaterialColor(str) {
    if (typeof str !== 'string') {
      return null;
    }
    str = str.toLowerCase();
    if (str[0] === '#') {
      return str;
    }
    return MATERIAL_COLORS[BASE_MATERIALS[str] || str] || null;
  }

  function varyColor(color, variance) {
    variance = variance || 0;
    var c = new Color(color).toArray();
    if (c === undefined) {
      c = DEFAULT_COLOR;
    }
    return [c[0]+variance, c[1]+variance, c[2]+variance];
  }

  //***************************************************************************

  // TODO: add floor polygons if items have a minHeight (or better: minHeight is greater than threshold)
  function addBuilding(buffers, properties, polygon, forcedColor, colorVariance) {
    var
      dim = getDimensions(properties, getBBox(polygon[0])),
      wallColor = varyColor((forcedColor || properties.wallColor || properties.color || getMaterialColor(properties.material)), colorVariance),
      roofColor = varyColor((forcedColor || properties.roofColor || getMaterialColor(properties.roofMaterial)), colorVariance);

    //*** process buildings that don't require a roof *************************

    switch (properties.shape) {
      case 'cone':
        split.cylinder(buffers, dim.center, dim.radius, 0, dim.wallHeight, dim.wallZ, wallColor);
        return;

      case 'dome':
        split.dome(buffers, dim.center, dim.radius, dim.wallHeight, dim.wallZ, wallColor);
        return;

      case 'pyramid':
        split.pyramid(buffers, polygon, dim.center, dim.wallHeight, dim.wallZ, wallColor);
        return;

      case 'sphere':
        split.sphere(buffers, dim.center, dim.radius, dim.wallHeight, dim.wallZ, wallColor);
        return;
    }

    //*** process roofs *******************************************************

    switch (properties.roofShape) {
      case 'cone':
        split.cylinder(buffers, dim.center, dim.radius, 0, dim.roofHeight, dim.roofZ, roofColor);
        break;

      case 'dome':
        split.dome(buffers, dim.center, dim.radius, dim.roofHeight, dim.roofZ, roofColor);
        break;

      case 'pyramid':
        if (properties.shape === 'cylinder') {
          split.cylinder(buffers, dim.center, dim.radius, 0, dim.roofHeight, dim.roofZ, roofColor);
        } else {
          split.pyramid(buffers, polygon, dim.center, dim.roofHeight, dim.roofZ, roofColor);
        }
        break;


//  var explicitRoofTagging = true;
//  if ((!properties.roofLines || properties.roofLines !== 'no') && this.building.hasComplexRoof) {
//    return new ComplexRoof();
//  }

      case 'skillion':
        addSkillionRoof(buffers, properties, polygon, dim, wallColor, roofColor);
        break; // no further processing

      case 'gabled':
        addRidgedRoof(buffers, properties, polygon, 0, dim, wallColor, roofColor);
        break;

      case 'hipped':
        addRidgedRoof(buffers, properties, polygon, 1/3, dim, wallColor, roofColor);
        break;

      case 'half-hipped':
        addRidgedRoof(buffers, properties, polygon, 0, dim, wallColor, roofColor);
        break;

      case 'gambrel':
     // addGambrelRoof(buffers, properties, polygon, dim, wallColor, roofColor);
        addRidgedRoof(buffers, properties, polygon, 0, dim, wallColor, roofColor);
        break;

      case 'mansard':
     // addMansardRoof(buffers, properties, polygon, dim, wallColor, roofColor);
        addRidgedRoof(buffers, properties, polygon, 0, dim, wallColor, roofColor);
        break;

      // case 'round':
      //   addRoundRoof(buffers, properties, polygon, dim, wallColor, roofColor);
      //   break;

      case 'onion':
        var rings = [
          { rScale: 1.0, hScale: 0.00 },
          { rScale: 0.8, hScale: 0.15 },
          { rScale: 1.0, hScale: 0.50 },
          { rScale: 0.8, hScale: 0.70 },
          { rScale: 0.4, hScale: 0.80 },
          { rScale: 0.0, hScale: 1.00 }
        ];

        var h1, h2;
        for (var i = 0, il = rings.length - 1; i<il; i++) {
          h1 = dim.roofHeight*rings[i].hScale;
          h2 = dim.roofHeight*rings[i + 1].hScale;
          split.cylinder(buffers, dim.center, dim.radius*rings[i].rScale, dim.radius*rings[i + 1].rScale, h2 - h1, dim.roofZ + h1, roofColor);
        }
        break;

      // case 'flat':
      default:
        if (properties.shape === 'cylinder') {
          split.circle(buffers, dim.center, dim.radius, dim.roofZ, roofColor);
        } else {
          split.polygon(buffers, polygon, dim.roofZ, roofColor);
        }
    }

    //*** process remaining buildings *****************************************

    switch(properties.roofShape) {
      case 'none':
        // no walls at all
        return;

      case 'cylinder':
        split.cylinder(buffers, dim.center, dim.radius, dim.radius, dim.wallHeight, dim.wallZ, wallColor);
        return;

      default: // extruded polygon
        var ty1 = 0.2;
        var ty2 = 0.4;
        // non-continuous windows
        if (properties.material !== 'glass') {
          ty1 = 0;
          ty2 = 0;
          if (properties.levels) {
            ty2 = (parseFloat(properties.levels) - parseFloat(properties.minLevel || 0))<<0;
          }
        }
        split.extrusion(buffers, polygon, dim.wallHeight, dim.wallZ, wallColor, [0, WINDOWS_PER_METER, ty1/dim.wallHeight, ty2/dim.wallHeight]);
    }
  }

  function getDimensions(properties, bbox) {
    var
      dim = {},
      totalHeight = properties.height || (properties.levels ? properties.levels*METERS_PER_LEVEL : 0);

    // dim.center = [
    //   (bbox.minX + (bbox.maxX - bbox.minX)/2 - origin[0]) * scale[0],
    //   (bbox.minY + (bbox.maxY - bbox.minY)/2 - origin[1]) * scale[1]
    // ]
    // dim.radius = (bbox.maxX - bbox.minX)/2 * scale[0]

    dim.center = [bbox.minX + (bbox.maxX - bbox.minX)/2, bbox.minY + (bbox.maxY - bbox.minY)/2];
    dim.radius = (bbox.maxX - bbox.minX)/2;

    //*** wall height *********************************************************

    dim.wallZ = properties.minHeight || (properties.minLevel ? properties.minLevel*METERS_PER_LEVEL : 0);
    dim.wallHeight = Math.max(0, totalHeight - dim.wallZ);

    switch (properties.shape) {
      case 'cone':
      case 'dome':
      case 'pyramid':
        dim.wallHeight = dim.wallHeight || 2*dim.radius;
        break;

      case 'sphere':
        dim.wallHeight = dim.wallHeight || 4*dim.radius;
        break;

      // case 'none': // no walls at all
      // case 'cylinder':
      default:
        dim.wallHeight = dim.wallHeight || DEFAULT_HEIGHT;
    }

    //*** roof height and update wall height **********************************

    dim.roofHeight = properties.roofHeight || (properties.roofLevels ? properties.roofLevels*METERS_PER_LEVEL : 0);

    switch (properties.roofShape) {
      case 'cone':
      case 'pyramid':
      case 'dome':
      case 'onion':
        dim.roofHeight = dim.roofHeight || 1*dim.radius;
        break;

      case 'gabled':
      case 'hipped':
      case 'half-hipped':
case 'skillion':
case 'gambrel':
case 'mansard':
case 'round':
         dim.roofHeight = dim.roofHeight || 1*METERS_PER_LEVEL;
         break;

      case 'flat':
        dim.roofHeight = 0;
        break;

      default:
        // roofs we don't handle should not affect wallHeight
        dim.roofHeight = 0;
    }

    dim.roofHeight = Math.min(dim.roofHeight, dim.wallHeight);
    dim.wallHeight = dim.wallHeight - dim.roofHeight;
    dim.roofZ = dim.wallHeight + dim.wallZ;

    return dim;
  }

  return triangulate;

}());


if (CustomEvent === undefined) {
  var CustomEvent = function(type, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail );
    return e;
  };

  CustomEvent.prototype = window.Event.prototype;
}

var APP, GL; // TODO: make them local references

/**
 * OSMBuildings
 * @OSMBuildings
 * @param {Object} options
 */

/*
 * NOTE: OSMBuildings cannot use a single global world coordinate system.
 *       The numerical accuracy required for such a system would be about
 *       32bits to represent world-wide geometry faithfully within a few
 *       centimeters of accuracy. Most computations in OSMBuildings, however,
 *       are performed on a GPU where only IEEE floats with 23bits of accuracy
 *       (plus 8 bits of range) are available.
 *       Instead, OSMBuildings' coordinate system has a reference point
 *       (APP.position) at the viewport center, and all world positions are
 *       expressed as distances in meters from that reference point. The
 *       reference point itself shifts with map panning so that all world
 *       positions relevant to the part of the world curently rendered on-screen
 *       can accurately be represented within the limited accuracy of IEEE floats. */

/**
 * OSMBuildings
 * @constructor
 * @param {Object} [options] - OSMBuildings options
 * @param {Number} [options.minZoom=14.5] - Global minimum allowed zoom
 * @param {Number} [options.maxZoom=20] - Global maximum allowed zoom
 * @param {Object} [options.bounds] - A bounding box to restrict the map to
 * @param {Boolean} [options.state=false] - Store the map state in the URL
 * @param {Boolean} [options.disabled=false] - Disable user input
 * @param {String} [options.attribution] - An attribution string
 * @param {Float} [options.zoom=minZoom..maxZoom] - Initial zoom, default is middle between global minZoom and maxZoom
 * @param {Float} [options.rotation=0] - Initial rotation
 * @param {Float} [options.tilt=0] - Initial tilt
 * @param {Object} [options.position] - Initial position
 * @param {Float} [options.position.latitude=52.520000]
 * @param {Float} [options.position.latitude=13.410000]

 * @param {String} [options.baseURL='.'] - For locating assets. This is relative to calling page
 * @param {Boolean} [options.showBackfaces=false] - Render front and backsides of polygons. false increases performance, true might be needed for bad geometries
 * @param {String} [options.fogColor='#e8e0d8'] - Color to be used for sky gradients and distance fog
 * @param {String} [options.backgroundColor='#efe8e0'] - Overall background color
 * @param {String} [options.highlightColor='#f08000'] - Default color for highlighting features
 * @param {Boolean} [options.fastMode=false] - Enables faster rendering at cost of image quality. If performance is an issue, consider also removing effects
 * @param {Array} [options.effects=[]] - Which effects to enable. The only effect at the moment is 'shadows'
 * @param {Object} [options.style={ color: 'rgb(220, 210, 200)' }] - Sets the default building style
 */

var OSMBuildings = function(options) {
  APP = this; // refers to 'this'. Should make other globals obsolete.

  APP.options = (options || {});

  if (APP.options.style) {
    var style = APP.options.style;
    if (style.color || style.wallColor) {
      DEFAULT_COLOR = new Color(style.color || style.wallColor).toArray();
    }
  }

  APP.baseURL = APP.options.baseURL || '.';

  render.backgroundColor = new Color(APP.options.backgroundColor || BACKGROUND_COLOR).toArray();
  render.fogColor        = new Color(APP.options.fogColor        || FOG_COLOR).toArray();

  if (APP.options.highlightColor) {
    HIGHLIGHT_COLOR = new Color(APP.options.highlightColor).toArray();
  }

  render.Buildings.showBackfaces = APP.options.showBackfaces;

  render.effects = {};
  var effects = APP.options.effects || [];
  for (var i = 0; i < effects.length; i++) {
    render.effects[ effects[i] ] = true;
  }

  APP.attribution = APP.options.attribution || OSMBuildings.ATTRIBUTION;

  APP.minZoom = Math.max(parseFloat(APP.options.minZoom || 14.5), 14.5);
  APP.maxZoom = Math.min(parseFloat(APP.options.maxZoom || 20), 20);
  if (APP.maxZoom < APP.minZoom) {
    APP.minZoom = 14.5;
    APP.maxZoom = 20;
  }

  APP.bounds = APP.options.bounds;

  APP.position = APP.options.position || { latitude: 52.520000, longitude: 13.410000 };
  APP.zoom = APP.options.zoom || (APP.minZoom + (APP.maxZoom-APP.minZoom)/2);
  APP.rotation = APP.options.rotation || 0;
  APP.tilt = APP.options.tilt || 0;

  if (APP.options.disabled) {
    APP.setDisabled(true);
  }
};

OSMBuildings.VERSION = '3.2.2';
OSMBuildings.ATTRIBUTION = '<a href="https://osmbuildings.org/">© OSM Buildings</a>';

OSMBuildings.prototype = {

  /**
   * Adds the OSMBuildings to DOM container
   * @public
   * @param {HTMLElement|String} DOM container or its id to append the map to
   */
  appendTo: function(container, width, height) {
    if (typeof container === 'string') {
      container = document.getElementById(container);
    }

    APP.container = document.createElement('DIV');
    APP.container.className = 'osmb';
    container.appendChild(APP.container);

    APP.width  = width  !== undefined ? width  : container.offsetWidth;
    APP.height = height !== undefined ? height : container.offsetHeight;

    var canvas = document.createElement('CANVAS');
    canvas.className = 'osmb-viewport';
    canvas.width = APP.width;
    canvas.height = APP.width;
    APP.container.appendChild(canvas);

    GL = GLX.getContext(canvas);

    Events.init(canvas);

    APP._getStateFromUrl();
    if (APP.options.state) {
      APP._setStateToUrl();
      APP.on('change', APP._setStateToUrl);
    }

    APP._attribution = document.createElement('DIV');
    APP._attribution.className = 'osmb-attribution';
    APP.container.appendChild(APP._attribution);
    APP._updateAttribution();

    APP.setDate(new Date());
    render.start();

    return APP;
  },

  /**
   * DEPRECATED
   */
  remove: function() {},

  /**
   * A function that will be called when an event is fired. The parameters passed to the function
   * depend on what type of event it is
   * @callback OSMBuildings~eventListenerFunction
   */
  
  /**
   * Adds an event listener
   * @public
   * @param {String} event - An event identifier to listen for
   * @param {OSMBuildings~eventListenerFunction} callback
   */
  on: function(type, fn) {
    GL.canvas.addEventListener(type, fn);
    return APP;
  },

  /**
   * Removes event listeners
   * @public
   * @param {String} event - An event identifier to listen for
   * @param {OSMBuildings~eventListenerFunction} [fn] - If given, only remove the given function
   */
  off: function(type, fn) {
    GL.canvas.removeEventListener(type, fn);
  },

  /**
   * Trigger a specific event
   * @public
   * @param {String} event - An event identifier to listen for
   * @param {OSMBuildings~eventListenerFunction} [fn] - If given, only remove the given function
   */
  emit: function(type, detail) {
    var event = new CustomEvent(type, { detail:detail });
    GL.canvas.dispatchEvent(event);
  },

  /**
   * DEPRECATED. This should be done initially or on feature basis
   */
  setStyle: function() {
    return APP;
  },

  /**
   * Sets the date for shadow calculations
   * @public
   * @param {Date} date
   */
  setDate: function(date) {
    Sun.setDate(typeof date === 'string' ? new Date(date) : date);
    return APP;
  },

  // TODO: this should be part of the underlying map engine
  /**
   * Returns the screen position of the point
   * @public
   * @param {Float} latitude - Latitude of the point
   * @param {Float} longitude - Longitude of the point
   * @param {Float} elevation - Elevation of the point
   * @returns {Object} Screen position in pixels {x,y}
   */
  project: function(latitude, longitude, elevation) {
    var
      metersPerDegreeLongitude = METERS_PER_DEGREE_LATITUDE *
                                 Math.cos(APP.position.latitude / 180 * Math.PI),
      worldPos = [ (longitude- APP.position.longitude) * metersPerDegreeLongitude,
                  -(latitude - APP.position.latitude)  * METERS_PER_DEGREE_LATITUDE,
                    elevation                          * HEIGHT_SCALE ];
    // takes current cam pos into account.
    var posNDC = transformVec3( render.viewProjMatrix.data, worldPos);
    posNDC = mul3scalar( add3(posNDC, [1, 1, 1]), 1/2); // from [-1..1] to [0..1]

    return { x:    posNDC[0]  * APP.width,
             y: (1-posNDC[1]) * APP.height,
             z:    posNDC[2]
    };
  },

  // TODO: this should be part of the underlying map engine
  /**
   * Returns the geographic position (latitude/longitude) of the map layer
   * (elevation==0) at viewport position (x,y), or 'undefined' if no part of the
   * map plane would be rendered at (x,y) - e.g. if (x,y) lies above the horizon.
   * @public
   * @param {Number} x - the x position in the viewport
   * @param {Number} y - the y position in the viewport
   * @returns {Object} Geographic position {latitude,longitude}
   */
  unproject: function(x, y) {
    var inverse = GLX.Matrix.invert(render.viewProjMatrix.data);
    /* convert window/viewport coordinates to NDC [0..1]. Note that the browser
     * screen coordinates are y-down, while the WebGL NDC coordinates are y-up,
     * so we have to invert the y value here */
    var posNDC = [x/APP.width, 1-y/APP.height];
    posNDC = add2( mul2scalar(posNDC, 2.0), [-1, -1, -1]); // [0..1] to [-1..1];
    var worldPos = getIntersectionWithXYPlane(posNDC[0], posNDC[1], inverse);
    if (worldPos === undefined) {
      return;
    }
    metersPerDegreeLongitude = METERS_PER_DEGREE_LATITUDE *
                               Math.cos(APP.position.latitude / 180 * Math.PI);

    return {
      latitude:  APP.position.latitude - worldPos[1]/ METERS_PER_DEGREE_LATITUDE,
      longitude: APP.position.longitude+ worldPos[0]/ metersPerDegreeLongitude
    };
  },

  /**
   * Adds an OBJ (3D object) file to the map
   * Important: objects with exactly the same url are cached and only loaded once
   * @public
   * @param {String} url - URL of the OBJ file
   * @param {Object} position - Where to render the OBJ
   * @param {Float} position.latitude - Latitude for the OBJ
   * @param {Float} position.longitude - Longitude for the OBJ
   * @param {Object} [options] - Options for rendering the OBJ
   * @param {Number} [options.scale=1] - Scale the model by this value before rendering
   * @param {Number} [options.rotation=0] - Rotate the model by this much before rendering
   * @param {Number} [options.elevation=<ground height>] - The height above ground to place the model at
   * @param {String} [options.id] - An identifier for the object. This is used for getting info about the object later
   * @param {String} [options.color] - A color to apply to the model
   */
  addOBJ: function(url, position, options) {
    return new mesh.OBJ(url, position, options);
  },

  /**
   * A function that will be called on each feature, for modification before rendering
   * @callback OSMBuildings~modifierFunction
   * @param {String} id - The feature's id
   * @param {Object} properties - The feature's properties
   */

  /**
   * Adds a GeoJSON layer to the map
   * @public
   * @param {String} url - URL of the GeoJSON file
   * @param {Object} options - Options to apply to the GeoJSON being rendered
   * @param {Number} [options.scale=1] - Scale the model by this value before rendering
   * @param {Number} [options.rotation=0] - Rotate the model by this much before rendering
   * @param {Number} [options.elevation=<ground height>] - The height above ground to place the model at
   * @param {String} [options.id] - An identifier for the object. This is used for getting info about the object later
   * @param {String} [options.color] - A color to apply to the model
   * @param {Number} [options.minZoom=14.5] - Minimum zoom level to show this feature, defaults to and limited by global minZoom
   * @param {Number} [options.maxZoom=maxZoom] - Maximum zoom level to show this feature, defaults to and limited by global maxZoom
   * @param {Boolean} [options.fadeIn=true] - Fade GeoJSON features; if `false`, then display immediately.
   */
  addGeoJSON: function(url, options) {
    return new mesh.GeoJSON(url, options);
  },

  // TODO: allow more data layers later on
  /**
   * Adds a GeoJSON tile layer, for rendering the 3D buildings
   * @public
   * @param {String} url - The URL of the GeoJSON tile server, in {@link https://github.com/OSMBuildings/OSMBuildings/blob/master/docs/server.md the correct format}
   * @param {Object} options
   * @param {Number} [options.fixedZoom=15]
   * @param {Object} [options.bounds] - Currently not used
   * @param {String} [options.color] - A color to apply to all features on this layer
   * @param {OSMBuildings~modifierFunction} [options.modifier] - DISCONTINUED. Use 'loadfeature' event instead.
   * @param {Number} [options.minZoom=14.5] - Minimum zoom level to show features from this layer, defaults to and limited by global minZoom
   * @param {Number} [options.maxZoom=maxZoom] - Maximum zoom level to show features from this layer, defaults to and limited by global maxZoom
   * @param {Boolean} [options.fadeIn=true] - Fade GeoJSON features; if `false`, then display immediately.
   */
  addGeoJSONTiles: function(url, options) {
    options = options || {};
    options.fixedZoom = options.fixedZoom || 15;
    APP.dataGrid = new Grid(url, data.Tile, options);
    return APP.dataGrid;
  },

  /**
   * Adds a 2D map source, to render below the 3D buildings
   * @public
   * @param {String} url - The URL of the map server. This could be Mapbox, or {@link https://wiki.openstreetmap.org/wiki/Tiles any other tile server} that supports the right format
   * @param {Object} options
   * @param {Number} [options.fixedZoom]
   * @param {Object} [options.bounds] - Currently not used
   * @param {String} [options.color] - A color to apply to all features on this layer
   */
  addMapTiles: function(url, options) {
    APP.basemapGrid = new Grid(url, basemap.Tile, options);
    return APP.basemapGrid;
  },

  /**
   * Highlight a given feature by id. Currently, the highlight can only be applied to one feature. Set id = `null` in order to un-highlight
   * @public
   * @param {String} id - The feature's id. For OSM buildings, it's the OSM id. For other objects, it's whatever is defined in the options passed to it.
   * @param {String} highlightColor - An optional color string to be used for highlighting
   */
  highlight: function(id, highlightColor) {
    render.Buildings.highlightId = id ? render.Picking.idToColor(id) : null;
    render.Buildings.highlightColor = id && highlightColor ? new Color(highlightColor).toArray() : HIGHLIGHT_COLOR;
    return APP;
  },

  /**
   * A function that will be called on each feature, for modification before rendering
   * @callback OSMBuildings~selectorFunction
   * @param {String} id - The feature's id
   * @param {Object} data - The feature's data
   */

  // TODO: check naming. show() suggests it affects the layer rather than objects on it

  /**
   * Sets a function that defines which objects to show on this layer
   * @public
   * @param {OSMBuildings~selectorFunction} selector - A function that will get run on each feature, and returns a boolean indicating whether or not to show the feature
   * @param {Integer} [duration=0] - How long to show the feature for
   */
  show: function(selector, duration) {
    Filter.remove('hidden', selector, duration);
    return APP;
  },

  // TODO: check naming. hide() suggests it affects the layer rather than objects on it

  /**
   * Sets a function that defines which objects to hide on this layer
   * @public
   * @param {OSMBuildings~selectorFunction} selector - A function that will get run on each feature, and returns a boolean indicating whether or not to hide the feature
   * @param {Integer} [duration=0] - How long to hide the feature for
   */
  hide: function(selector, duration) {
    Filter.add('hidden', selector, duration);
    return APP;
  },

  /**
   * A callback function for getTarget
   * @callback OSMBuildings~getTargetCallback
   * @param {Object} feature - The feature
   */

  /**
   * Returns the feature from a position on the screen. Works asynchronous.
   * @public
   * @param {Integer} x - The x coordinate (in pixels) of position on the screen
   * @param {Integer} y - The y coordinate (in pixels) of position on the screen
   * @param {OSMBuildings~getTargetCallback} callback - A callback function that receives the object
   */
  getTarget: function(x, y, callback) {
    // TODO: use promises here
    render.Picking.getTarget(x, y, callback);
    return APP;
  },

  /**
   * A callback function for screnshot
   * @callback OSMBuildings~screenshotCallback
   * @param screenshot - The screenshot
   */

  /**
   * Take a screenshot. Works asynchronous.
   * @public
   * @param {OSMBuildings~screenshotCallback} callback - A callback function that receives the screenshot
   */
  screenshot: function(callback) {
    // TODO: use promises here
    render.screenshotCallback = callback;
    return APP;
  },

  /**
   * @private
   */
  _updateAttribution: function() {
    var attribution = [];
    if (APP.attribution) {
      attribution.push(APP.attribution);
    }
    // for (var i = 0; i < APP.layers.length; i++) {
    //   if (APP.layers[i].attribution) {
    //     attribution.push(APP.layers[i].attribution);
    //   }
    // }
    APP._attribution.innerHTML = attribution.join(' · ');
  },

  /**
   * @private
   */
  _getStateFromUrl: function() {
    var
      query = location.search,
      state = {};
    if (query) {
      query.substring(1).replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
        if ($1) {
          state[$1] = $2;
        }
      });
    }

    APP.setPosition((state.lat !== undefined && state.lon !== undefined) ? { latitude:state.lat, longitude:state.lon } : APP.position);
    APP.setZoom(state.zoom !== undefined ? state.zoom : APP.zoom);
    APP.setRotation(state.rotation !== undefined ? state.rotation : APP.rotation);
    APP.setTilt(state.tilt !== undefined ? state.tilt : APP.tilt);
  },

  /**
   * @private
   */
  _setStateToUrl: function() {
    if (!history.replaceState || APP.stateDebounce) {
      return;
    }

    APP.stateDebounce = setTimeout(function() {
      APP.stateDebounce = null;
      var params = [];
      params.push('lat=' + APP.position.latitude.toFixed(6));
      params.push('lon=' + APP.position.longitude.toFixed(6));
      params.push('zoom=' + APP.zoom.toFixed(1));
      params.push('tilt=' + APP.tilt.toFixed(1));
      params.push('rotation=' + APP.rotation.toFixed(1));
      history.replaceState({}, '', '?' + params.join('&'));
    }, 1000);
  },

  setDisabled: function(flag) {
    Events.disabled = !!flag;
    return APP;
  },

  isDisabled: function() {
    return !!Events.disabled;
  },

  /**
   * Returns geographical bounds of the current view
   * - since the bounds are always axis-aligned they will contain areas that are
   *   not currently visible if the current view is not also axis-aligned.
   * - The bounds only contain the map area that OSMBuildings considers for rendering.
   *   OSMBuildings has a rendering distance of about 3.5km, so the bounds will
   *   never extend beyond that, even if the horizon is visible (in which case the
   *   bounds would mathematically be infinite).
   * - the bounds only consider ground level. For example, buildings whose top
   *   is seen at the lower edge of the screen, but whose footprint is outside
   * - The bounds only consider ground level. For example, buildings whose top
   *   is seen at the lower edge of the screen, but whose footprint is outside
   *   of the current view below the lower edge do not contribute to the bounds.
   *   so their top may be visible and they may still be out of bounds.
   * @public
   * @returns {Array} bounding coordinates in unspecific order [{latitude,longitude},...]
   */
  getBounds: function() {
    var viewQuad = render.getViewQuad(), res = [];
    for (var i in viewQuad) {
      res[i] = getPositionFromLocal(viewQuad[i]);
    }
    return res;
  },

  /**
   * Sets the zoom level
   * @public
   * @param {Float} zoom - The new zoom level
   * @param {Object} e - **Not currently used**
   * @fires OSMBuildings#zoom
   * @fires OSMBuildings#change
   */
  setZoom: function(zoom, e) {
    zoom = parseFloat(zoom);

    zoom = Math.max(zoom, APP.minZoom);
    zoom = Math.min(zoom, APP.maxZoom);

    if (APP.zoom !== zoom) {
      APP.zoom = zoom;

      /* if a screen position was given for which the geographic position displayed
       * should not change under the zoom */
      if (e) {
        // FIXME: add code; this needs to take the current camera (rotation and
        //        perspective) into account
        // NOTE:  the old code (comment out below) only works for north-up
        //        non-perspective views
        /*
         var dx = APP.container.offsetWidth/2  - e.clientX;
         var dy = APP.container.offsetHeight/2 - e.clientY;
         APP.center.x -= dx;
         APP.center.y -= dy;
         APP.center.x *= ratio;
         APP.center.y *= ratio;
         APP.center.x += dx;
         APP.center.y += dy;*/
      }
      /**
       * Fired when the map is zoomed (in either direction)
       * @public
       * @event OSMBuildings#zoom
       */
      APP.emit('zoom', { zoom: zoom });

      /**
       * Fired when the map is zoomed, tilted or panned
       * @public
       * @event OSMBuildings#change
       */
      APP.emit('change');
    }
    return APP;
  },

  /**
   * Gets current zoom level
   * @public
   * @returns {Number} zoom level
   */
  getZoom: function() {
    return APP.zoom;
  },

  /**
   * Sets the map's geographic position
   * @public
   * @param {Object} pos - The new position
   * @param {Float} pos.latitude
   * @param {Float} pos.longitude
   * @fires OSMBuildings#change
   */
  setPosition: function(pos) {
    var lat = parseFloat(pos.latitude);
    var lon = parseFloat(pos.longitude);
    if (isNaN(lat) || isNaN(lon)) {
      return;
    }
    APP.position = { latitude: clamp(lat, -90, 90), longitude: clamp(lon, -180, 180) };
    APP.emit('change');
    return APP;
  },

  /**
   * Returns the map's current geographic position
   * @public
   * @returns {Object} Geographic position {latitude,longitude}
   */
  getPosition: function() {
    return APP.position;
  },

  /**
   * Sets the map view's size in pixels
   * @public
   * @param {Object} size
   * @param {Integer} size.width
   * @param {Integer} size.height
   * @fires OSMBuildings#resize
   */
  setSize: function(size) {
    if (size.width !== APP.width || size.height !== APP.height) {
      APP.width = size.width;
      APP.height = size.height;

      /**
       * Fired when the map is resized
       * @public
       * @event OSMBuildings#resize
       */
      APP.emit('resize', { width: APP.width, height: APP.height });
    }
    return APP;
  },

  /**
   * Returns the map's current view size in pixels
   * @public
   * @returns {Object} View size {width,height}
   */
  getSize: function() {
    return { width: APP.width, height: APP.height };
  },

  /**
   * Set's the map's rotation
   * @public
   * @param {Float} rotation - The new rotation angle
   * @fires OSMBuildings#rotate
   * @fires OSMBuildings#change
   */
  setRotation: function(rotation) {
    rotation = parseFloat(rotation)%360;
    if (APP.rotation !== rotation) {
      APP.rotation = rotation;

      /**
       * Fired when the map is rotated
       * @public
       * @event OSMBuildings#rotate
       */
      APP.emit('rotate', { rotation: rotation });
      APP.emit('change');
    }
    return APP;
  },

  /**
   * Returns the map's current rotation
   * @public
   * @returns {Number} Rotation in degree
   */
  getRotation: function() {
    return APP.rotation;
  },

  /**
   * Sets the map's tilt
   * @public
   * @param {Float} tilt - The new tilt
   * @fires OSMBuildings#tilt
   * @fires OSMBuildings#change
   */
  setTilt: function(tilt) {
    tilt = clamp(parseFloat(tilt), 0, 45); // bigger max increases shadow moire on base map
    if (APP.tilt !== tilt) {
      APP.tilt = tilt;

      /**
       * Fired when the map is tilted
       * @public
       * @event OSMBuildings#tilt
       */
      APP.emit('tilt', { tilt: tilt });
      APP.emit('change');
    }
    return APP;
  },

  /**
   * Returns the map's current tilt
   * @public
   * @returns {Number} Tilt in degree
   */
  getTilt: function() {
    return APP.tilt;
  },

  /**
   * Destroys the map
   * @public
   */
  destroy: function() {
    render.destroy();

    // APP.basemapGrid.destroy();
    // APP.dataGrid.destroy();

    // TODO: when taking over an existing canvas, better don't destroy it here
    GLX.destroy();

    APP.container.innerHTML = '';
  }
};

//*****************************************************************************

if (typeof define === 'function') {
  define([], OSMBuildings);
} else if (typeof module === 'object') {
  module.exports = OSMBuildings;
} else {
  window.OSMBuildings = OSMBuildings;
}


// gesture polyfill adapted from https://raw.githubusercontent.com/seznam/JAK/master/lib/polyfills/gesturechange.js
// MIT License

/**
 * @private
 */
function add2(a, b) {
  return [a[0] + b[0], a[1] + b[1]];
}

/**
 * @private
 */
function mul2scalar(a, f) {
  return [a[0]*f, a[1]*f];
}

/**
 * @private
 */
function getEventPosition(e, offset) {
  return {
    x: e.clientX - offset.x,
    y: e.clientY - offset.y
  };
}

/**
 * @private
 */
function getElementOffset(el) {
  if (el.getBoundingClientRect) {
    var box = el.getBoundingClientRect();
    return { x:box.left, y:box.top };
  }

  var res = { x:0, y:0 };
  while(el.nodeType === 1) {
    res.x += el.offsetLeft;
    res.y += el.offsetTop;
    el = el.parentNode;
  }
  return res;
}

/**
 * @private
 */
function cancelEvent(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  //if (e.stopPropagation) {
  //  e.stopPropagation();
  //}
  e.returnValue = false;
}

/**
 * @private
 */
function addListener(target, type, fn) {
  target.addEventListener(type, fn, false);
}

/**
 * @private
 */
var Events = {};

/**
 * @private
 */
Events.disabled = false;

/**
 * @private
 */
Events.init = function(container) {

  if ('ontouchstart' in window) {
    addListener(container, 'touchstart', onTouchStart);
    addListener(document, 'touchmove', onTouchMove);
    addListener(document, 'touchend', onTouchEnd);
    addListener(document, 'gesturechange', onGestureChange);
  } else {
    addListener(container, 'mousedown', onMouseDown);
    addListener(document, 'mousemove', onMouseMove);
    addListener(document, 'mouseup', onMouseUp);
    addListener(container, 'dblclick', onDoubleClick);
    addListener(container, 'mousewheel', onMouseWheel);
    addListener(container, 'DOMMouseScroll', onMouseWheel);
  }

  var resizeDebounce;
  addListener(window, 'resize', function() {
    if (resizeDebounce) {
      return;
    }
    resizeDebounce = setTimeout(function() {
      resizeDebounce = null;
        APP.setSize({ width:container.offsetWidth, height:container.offsetHeight });
    }, 250);
  });

  //***************************************************************************

  var
    prevX = 0,
    prevY = 0,
    startX = 0,
    startY = 0,
    startZoom = 0,
    startOffset,
    prevRotation = 0,
    prevTilt = 0,
    pointerIsDown = false;

  function onDoubleClick(e) {
    cancelEvent(e);
    if (!Events.disabled) {
      APP.setZoom(APP.zoom + 1, e);
    }
    var pos = getEventPosition(e, getElementOffset(e.target));
      APP.emit('doubleclick', { x:pos.x, y:pos.y, button:e.button });
  }

  function onMouseDown(e) {
    cancelEvent(e);

    if (e.button > 1) {
      return;
    }

    startZoom = APP.zoom;
    prevRotation = APP.rotation;
    prevTilt = APP.tilt;

    startOffset = getElementOffset(e.target);
    var pos = getEventPosition(e, startOffset);
    startX = prevX = pos.x;
    startY = prevY = pos.y;

    pointerIsDown = true;
    APP.emit('pointerdown', { x: pos.x, y: pos.y, button: e.button });
  }

  function onMouseMove(e) {
    var pos;
    if (!pointerIsDown) {
      pos = getEventPosition(e, getElementOffset(e.target));
    } else {
      if (e.button === 0 && !e.altKey) {
        moveMap(e, startOffset);
      } else {
        rotateMap(e, startOffset);
      }

      pos = getEventPosition(e, startOffset);
      prevX = pos.x;
      prevY = pos.y;
    }

    APP.emit('pointermove', { x: pos.x, y: pos.y });
  }

  function onMouseUp(e) {
    // prevents clicks on other page elements
    if (!pointerIsDown) {
      return;
    }

    var pos = getEventPosition(e, startOffset);

    if (e.button === 0 && !e.altKey) {
      if (Math.abs(pos.x - startX)>5 || Math.abs(pos.y - startY)>5) {
        moveMap(e, startOffset);
      }
    } else {
      rotateMap(e, startOffset);
    }

    pointerIsDown = false;
    APP.emit('pointerup', { x: pos.x, y: pos.y, button: e.button });
  }

  function onMouseWheel(e) {
    cancelEvent(e);

    var delta = 0;
    if (e.wheelDeltaY) {
      delta = e.wheelDeltaY;
    } else if (e.wheelDelta) {
      delta = e.wheelDelta;
    } else if (e.detail) {
      delta = -e.detail;
    }

    if (!Events.disabled) {
      var adjust = 0.2*(delta>0 ? 1 : delta<0 ? -1 : 0);
      APP.setZoom(APP.zoom + adjust, e);
    }

    // we don't emit mousewheel here as we don't want to run into a loop of death
  }

  //***************************************************************************

  function moveMap(e, offset) {
    if (Events.disabled) {
      return;
    }

    // FIXME: make movement exact, i.e. make the position that
    // appeared at (prevX, prevY) before appear at (e.offsetX, e.offsetY) now.
    // the constant 0.86 was chosen experimentally for the map movement to be
    // "pinned" to the cursor movement when the map is shown top-down
    var
      scale = 0.86 * Math.pow(2, -APP.zoom),
      lonScale = 1/Math.cos( APP.position.latitude/ 180 * Math.PI),
      pos = getEventPosition(e, offset),
      dx = pos.x - prevX,
      dy = pos.y - prevY,
      angle = APP.rotation * Math.PI/180,
      vRight   = [ Math.cos(angle),             Math.sin(angle)],
      vForward = [ Math.cos(angle - Math.PI/2), Math.sin(angle - Math.PI/2)],
      dir = add2(mul2scalar(vRight, dx), mul2scalar(vForward, -dy));

    var newPosition = {
      longitude: APP.position.longitude - dir[0] * scale*lonScale,
      latitude:  APP.position.latitude  + dir[1] * scale };

    APP.setPosition(newPosition);
    APP.emit('move', newPosition);
  }

  function rotateMap(e, offset) {
    if (Events.disabled) {
      return;
    }
    var pos = getEventPosition(e, offset);
    prevRotation += (pos.x - prevX)*(360/innerWidth);
    prevTilt -= (pos.y - prevY)*(360/innerHeight);
    APP.setRotation(prevRotation);
    APP.setTilt(prevTilt);
  }

  //***************************************************************************

  var
    dist1 = 0,
    angle1 = 0,
    gestureStarted = false;

  function emitGestureChange(e) {
    var
      t1 = e.touches[0],
      t2 = e.touches[1],
      dx = t1.clientX - t2.clientX,
      dy = t1.clientY - t2.clientY,
      dist2 = dx*dx + dy*dy,
      angle2 = Math.atan2(dy, dx);

    onGestureChange({ rotation: ((angle2 - angle1)*(180/Math.PI))%360, scale: Math.sqrt(dist2/dist1) });
  }

  function onTouchStart(e) {
    pointerIsDown = true;

    cancelEvent(e);

    // gesturechange polyfill
    if (e.touches.length === 2 && !('ongesturechange' in window)) {
      var t1 = e.touches[0];
      var t2 = e.touches[1];
      var dx = t1.clientX - t2.clientX;
      var dy = t1.clientY - t2.clientY;
      dist1 = dx*dx + dy*dy;
      angle1 = Math.atan2(dy,dx);
      gestureStarted = true;
    }

    startZoom = APP.zoom;
    prevRotation = APP.rotation;
    prevTilt = APP.tilt;

    if (e.touches.length) {
      e = e.touches[0];
    }

    startOffset = getElementOffset(e.target);
    var pos = getEventPosition(e, startOffset);
    startX = prevX = pos.x;
    startY = prevY = pos.y;

    APP.emit('pointerdown', { x: pos.x, y: pos.y, button: 0 });
  }

  function onTouchMove(e) {
if (!pointerIsDown) {
  return;
}
    var pos = getEventPosition(e.touches[0], startOffset);
    if (e.touches.length>1) {
      APP.setTilt(prevTilt + (prevY - pos.y)*(360/innerHeight));
      prevTilt = APP.tilt;
      // gesturechange polyfill
      if (!('ongesturechange' in window)) {
        emitGestureChange(e);
      }
    } else {
      moveMap(e.touches[0], startOffset);
      APP.emit('pointermove', { x: pos.x, y: pos.y });
    }
    prevX = pos.x;
    prevY = pos.y;
  }

  function onTouchEnd(e) {
if (!pointerIsDown) {
  return;
}

    // gesturechange polyfill
    gestureStarted = false;

    if (e.touches.length === 0) {
pointerIsDown = false;
      APP.emit('pointerup', { x: prevX, y: prevY, button: 0 });
    } else if (e.touches.length === 1) {
      // There is one touch currently on the surface => gesture ended. Prepare for continued single touch move
      var pos = getEventPosition(e.touches[0], startOffset);
      prevX = pos.x;
      prevY = pos.y;
    }
  }

  function onGestureChange(e) {
if (!pointerIsDown) {
  return;
}

    cancelEvent(e);

    if (!Events.disabled) {
      APP.setZoom(startZoom + (e.scale - 1));
      APP.setRotation(prevRotation - e.rotation);
    }

    APP.emit('gesture', e);
  }
};


var Activity = {};

// TODO: could turn into a public loading handler
// OSMB.loader - stop(), start(), isBusy(), events..

(function() {

  var count = 0;
  var debounce;

  Activity.setBusy = function() {
    //console.log('setBusy', count);

    if (!count) {
      if (debounce) {
        clearTimeout(debounce);
        debounce = null;
      } else {
        /**
         * Fired when data loading starts
         * @event OSMBuildings#busy
         */
        APP.emit('busy');
      }
    }
    count++;
  };

  Activity.setIdle = function() {
    if (!count) {
      return;
    }

    count--;
    if (!count) {
      debounce = setTimeout(function() {
        debounce = null;
        
        /**
         * Fired when data loading ends
         * @event OSMBuildings#idle
         */
        APP.emit('idle');
      }, 33);
    }

    //console.log('setIdle', count);
  };

  Activity.isBusy = function() {
    return !!count;
  };

}());


var TILE_SIZE = 256;

var DEFAULT_HEIGHT = 10;
var HEIGHT_SCALE = 1.0;

var MAX_USED_ZOOM_LEVEL = 25;
var DEFAULT_COLOR = new Color('rgb(220, 210, 200)').toArray();
var HIGHLIGHT_COLOR = new Color('#f08000').toArray();
// #E8E0D8 is the background color of the current OSMBuildings map layer,
// and thus a good fog color to blend map tiles and buildings close to the horizont into
var FOG_COLOR = '#e8e0d8';
//var FOG_COLOR = '#f0f8ff';
var BACKGROUND_COLOR = '#efe8e0';

var document = window.document;

var EARTH_RADIUS_IN_METERS = 6378137;
var EARTH_CIRCUMFERENCE_IN_METERS = EARTH_RADIUS_IN_METERS * Math.PI * 2;
var METERS_PER_DEGREE_LATITUDE = EARTH_CIRCUMFERENCE_IN_METERS / 360;

/* the height of the skywall in meters */
var SKYWALL_HEIGHT = 2000.0;

/* For shadow mapping, the camera rendering the scene as seen by the sun has
 * to cover everything that's also visible to the user. For this to work 
 * reliably, we have to make assumptions on how high (in [m]) the buildings 
 * can become.
 * Note: using a lower-than-accurate value will lead to buildings parts at the
 * edge of the viewport to have incorrect shadows. Using a higher-than-necessary
 * value will lead to an unnecessarily large view area and thus to poor shadow
 * resolution. */
var SHADOW_MAP_MAX_BUILDING_HEIGHT = 100;

/* for shadow mapping, the scene needs to be rendered into a depth map as seen
 * by the light source. This rendering can have arbitrary dimensions -
 * they need not be related to the visible viewport size in any way. The higher
 * the resolution (width and height) for this depth map the smaller are
 * the visual artifacts introduced by shadow mapping. But increasing the
 * shadow depth map size impacts rendering performance */
var SHADOW_DEPTH_MAP_SIZE = 2048;

//the building wall texture as a data url
var BUILDING_TEXTURE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wwCCAUQLpaUSQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAGUExURebm5v///zFES9kAAAAcSURBVCjPY/gPBQyUMh4wAAH/KAPCoFaoDnYGAAKtZsamTRFlAAAAAElFTkSuQmCC';


// TODO: introduce promises

var Request = {};

(function() {

  function load(url, callback) {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
      if (req.readyState !== 4) {
        return;
      }

      if (!req.status || req.status<200 || req.status>299) {
        return;
      }

      callback(req);
    };

    req.open('GET', url);
    req.send(null);

    return {
      abort: function() {
        req.abort();
      }
    };
  }

  //***************************************************************************

  Request.getText = function(url, callback) {
    return load(url, function(res) {
      if (res.responseText !== undefined) {
        callback(res.responseText);
      }
    });
  };

  Request.getXML = function(url, callback) {
    return load(url, function(res) {
      if (res.responseXML !== undefined) {
        callback(res.responseXML);
      }
    });
  };

  Request.getJSON = function(url, callback) {
    return load(url, function(res) {
      if (res.responseText) {
        var json;
        try {
          json = JSON.parse(res.responseText);
        } catch(ex) {
          console.warn('Could not parse JSON from '+ url +'\n'+ ex.message);
        }
        callback(json);
      }
    });
  };

  Request.destroy = function() {};

}());

/*function project(latitude, longitude, worldSize) {
  var
    x = longitude/360 + 0.5,
    y = Math.min(1, Math.max(0, 0.5 - (Math.log(Math.tan((Math.PI/4) + (Math.PI/2)*latitude/180)) / Math.PI) / 2));
  return { x: x*worldSize, y: y*worldSize };
}

function unproject(x, y, worldSize) {
  x /= worldSize;
  y /= worldSize;
  return {
    latitude: (2 * Math.atan(Math.exp(Math.PI * (1 - 2*y))) - Math.PI/2) * (180/Math.PI),
    longitude: x*360 - 180
  };
}*/

function pattern(str, param) {
  return str.replace(/\{(\w+)\}/g, function(tag, key) {
    return param[key] || tag;
  });
}

function assert(condition, message) {
  if (!condition) {
    throw message;
  }
}

/* returns a new list of points based on 'points' where the 3rd coordinate in
 * each entry is set to 'zValue'
 */
function substituteZCoordinate(points, zValue) {
  var res = [];
  for (var i in points) {
    res.push( [points[i][0], points[i][1], zValue] );
  }
  
  return res;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(value, min));
}


var Grid = function(source, tileClass, options) {
  this.tiles = {};
  this.buffer = 1;

  this.source = source;
  this.tileClass = tileClass;
  options = options || {};

  this.bounds = options.bounds;
  this.fixedZoom = options.fixedZoom;

  this.tileOptions = { color:options.color, fadeIn:options.fadeIn };

  this.minZoom = Math.max(parseFloat(options.minZoom || 14.5), APP.minZoom);
  this.maxZoom = Math.min(parseFloat(options.maxZoom || 20), APP.maxZoom);
  if (this.maxZoom < this.minZoom) {
    this.minZoom = 14.5;
    this.maxZoom = 20;
  }

  APP.on('change', this._onChange = function() {
    this.update(500);
  }.bind(this));

  APP.on('resize', this._onResize = this.update.bind(this));

  this.update();
};

Grid.prototype = {

  // strategy: start loading after delay (ms), skip any attempts until then
  // effectively loads in intervals during movement
  update: function(delay) {
    if (APP.zoom < this.minZoom || APP.zoom > this.maxZoom) {
      return;
    }

    if (!delay) {
      this.loadTiles();
      return;
    }

    if (!this.debounce) {
      this.debounce = setTimeout(function() {
        this.debounce = null;
        this.loadTiles();
      }.bind(this), delay);
    }
  },

  getURL: function(x, y, z) {
    var s = 'abcd'[(x+y) % 4];
    return pattern(this.source, { s:s, x:x, y:y, z:z });
  },
  
  getClosestTiles: function(tileList, referencePoint) {
    tileList.sort(function(a, b) {
      // tile coordinates correspond to the tile's upper left corner, but for
      // the distance computation we should rather use their center; hence the 0.5 offsets
      var distA = Math.pow(a[0] + 0.5 - referencePoint[0], 2.0) +
                  Math.pow(a[1] + 0.5 - referencePoint[1], 2.0);

      var distB = Math.pow(b[0] + 0.5 - referencePoint[0], 2.0) +
                  Math.pow(b[1] + 0.5 - referencePoint[1], 2.0);
      
      return distA > distB;
    });

    var prevX, prevY;

    // removes duplicates
    return tileList.filter(function(tile) {
      if (tile[0] === prevX && tile[1] === prevY) {
        return false;
      }
      prevX = tile[0];
      prevY = tile[1];
      return true;
    });
  },
  
  /* Returns a set of tiles based on 'tiles' (at zoom level 'zoom'),
   * but with those tiles recursively replaced by their respective parent tile
   * (tile from zoom level 'zoom'-1 that contains 'tile') for which said parent
   * tile covers less than 'pixelAreaThreshold' pixels on screen based on the 
   * current view-projection matrix.
   *
   * The returned tile set is duplicate-free even if there were duplicates in
   * 'tiles' and even if multiple tiles from 'tiles' got replaced by the same parent.
   */
  mergeTiles: function(tiles, zoom, pixelAreaThreshold) {
    var parentTiles = {};
    var tileSet = {};
    var tileList = [];
    var key;
    
    // if there is no parent zoom level
    if (zoom === 0 || zoom <= this.minZoom) {
      for (key in tiles) {
        tiles[key][2] = zoom;
      }
      return tiles;
    }
    
    for (key in tiles) {
      var tile = tiles[key];

      var parentX = (tile[0] <<0) / 2;
      var parentY = (tile[1] <<0) / 2;
      
      if (parentTiles[ [parentX, parentY] ] === undefined) { //parent tile screen size unknown
        var numParentScreenPixels = getTileSizeOnScreen(parentX, parentY, zoom-1, render.viewProjMatrix);
        parentTiles[ [parentX, parentY] ] = (numParentScreenPixels < pixelAreaThreshold);
      }
      
      if (! parentTiles[ [parentX, parentY] ]) { //won't be replaced by a parent tile -->keep
        if (tileSet[ [tile[0], tile[1]] ] === undefined) {  //remove duplicates
          tileSet[ [tile[0], tile[1]]] = true;
          tileList.push( [tile[0], tile[1], zoom]);
        }
      }
    }
    
    var parentTileList = [];
    
    for (key in parentTiles) {
      if (parentTiles[key]) {
        var parentTile = key.split(',');
        parentTileList.push( [parseInt(parentTile[0]), parseInt(parentTile[1]), zoom-1]);
      }
    }
    
    if (parentTileList.length > 0) {
      parentTileList = this.mergeTiles(parentTileList, zoom - 1, pixelAreaThreshold);
    }
      
    return tileList.concat(parentTileList);
  },

  loadTiles: function() {
    var zoom = Math.round(this.fixedZoom || APP.zoom);

    // TODO: if there are user defined bounds for this layer, respect these too
    //  if (this.fixedBounds) {
    //    var
    //      min = project(this.bounds.s, this.bounds.w, 1<<zoom),
    //      max = project(this.bounds.n, this.bounds.e, 1<<zoom);
    //
    //    var bounds = {
    //      zoom: zoom,
    //      minX: (min.x <<0) - this.buffer,
    //      minY: (min.y <<0) - this.buffer,
    //      maxX: (max.x <<0) + this.buffer,
    //      maxY: (max.y <<0) + this.buffer
    //    };
    //  }

    var
      tile, tileX, tileY, tileZoom,
      queue = [],
      i,
      viewQuad = render.getViewQuad(render.viewProjMatrix.data),
      mapCenterTile = [ long2tile(APP.position.longitude, zoom),
                        lat2tile (APP.position.latitude,  zoom)];

    for (i = 0; i < 4; i++) {
      viewQuad[i] = getTilePositionFromLocal(viewQuad[i], zoom);
    }

    var tiles = rasterConvexQuad(viewQuad);
    tiles = ( this.fixedZoom ) ?
      this.getClosestTiles(tiles, mapCenterTile) :
      this.mergeTiles(tiles, zoom, 0.5 * TILE_SIZE * TILE_SIZE);
    
    this.visibleTiles = {};
    for (i = 0; i < tiles.length; i++) {
      if (tiles[i][2] === undefined) {
        tiles[i][2] = zoom;
      }
      this.visibleTiles[ tiles[i] ] = true;
    }

    for (var key in this.visibleTiles) {
      tile = key.split(',');
      tileX = parseInt(tile[0]);
      tileY = parseInt(tile[1]);
      tileZoom = parseInt(tile[2]);

      if (this.tiles[key]) {
        continue;
      }

      this.tiles[key] = new this.tileClass(tileX, tileY, tileZoom, this.tileOptions, this.tiles);

      queue.push({ tile:this.tiles[key], dist:distance2([tileX, tileY], mapCenterTile) });
    }

    this.purge();

    queue.sort(function(a, b) {
      return a.dist-b.dist;
    });

    for (i = 0; i < queue.length; i++) {
      tile = queue[i].tile;
      tile.load(this.getURL(tile.x, tile.y, tile.zoom));
    }
  },

  purge: function() {
    var
      zoom = Math.round(APP.zoom),
      tile, parent;

    for (var key in this.tiles) {
      tile = this.tiles[key];
      // tile is visible: keep
      if (this.visibleTiles[key]) {
        continue;
      }

      // tile is not visible and due to fixedZoom there are no alternate zoom levels: drop
      if (this.fixedZoom) {
        this.tiles[key].destroy();
        delete this.tiles[key];
        continue;
      }

      // tile's parent would be visible: keep
      if (tile.zoom === zoom+1) {
        parent = [tile.x/2<<0, tile.y/2<<0, zoom].join(',');
        if (this.visibleTiles[parent]) {
          continue;
        }
      }

      // any of tile's children would be visible: keep
      if (tile.zoom === zoom-1) {
        if (this.visibleTiles[[tile.x*2, tile.y*2, zoom].join(',')] ||
          this.visibleTiles[[tile.x*2 + 1, tile.y*2, zoom].join(',')] ||
          this.visibleTiles[[tile.x*2, tile.y*2 + 1, zoom].join(',')] ||
          this.visibleTiles[[tile.x*2 + 1, tile.y*2 + 1, zoom].join(',')]) {
          continue;
        }
      }

      // drop anything else
      delete this.tiles[key];
      continue;
    }
  },

  destroy: function() {
    APP.off('change', this._onChange);
    APP.off('resize', this._onResize);

    clearTimeout(this.debounce);
    for (var key in this.tiles) {
      this.tiles[key].destroy();
    }
    this.tiles = [];
    this.visibleTiles = {};
  }
};


var Filter = {

  start: Date.now(),
  now: 0,
  items: [],

  add: function(type, selector, duration) {
    duration = duration || 0;

    var filters = this.items;
    // if filter already exists, do nothing
    for (i = 0, il = filters.length; i < il; i++) {
      if (filters[i].type === type && filters[i].selector === selector) {
        return;
      }
    }

    filters.push({ type:type, selector:selector, duration:duration });

    // applies a single filter to all items
    // currently only suitable for 'hidden'
    var indexItem;
    var item;
    var j, jl;

    var start = this.getTime();
    var end = start+duration;

    for (var i = 0, il = data.Index.items.length; i<il; i++) {
      indexItem = data.Index.items[i];

      if (!indexItem.applyFilter) {
        continue;
      }

      for (j = 0, jl = indexItem.items.length; j < jl; j++) {
        item = indexItem.items[j];
        if (selector(item.id, item.data)) {
          item.filter = [start, end, item.filter ? item.filter[3] : 1, 0];
        }
      }

      indexItem.applyFilter();
    }
  },

  remove: function(type, selector, duration) {
    duration = duration || 0;

    var i, il;

    this.items = this.items.filter(function(item) {
      return (item.type !== type || item.selector !== selector);
    });

    // removes a single filter from all items
    // currently only suitable for 'hidden'
    var indexItem;
    var item;
    var j, jl;

    var start = this.getTime();
    var end = start+duration;

    for (i = 0, il = data.Index.items.length; i<il; i++) {
      indexItem = data.Index.items[i];

      if (!indexItem.applyFilter) {
        continue;
      }

      for (j = 0, jl = indexItem.items.length; j < jl; j++) {
        item = indexItem.items[j];
        if (selector(item.id, item.data)) {
          item.filter = [start, end, item.filter ? item.filter[3] : 0, 1];
        }
      }

      indexItem.applyFilter();
    }
  },

  // applies all existing filters to an item
  // currently only suitable for 'hidden'
  apply: function(indexItem) {
    var filters = this.items;
    var type, selector;
    var item;
    var j, jl;

    if (!indexItem.applyFilter) {
      return;
    }

    for (var i = 0, il = filters.length; i < il; i++) {
      type = filters[i].type;
      selector = filters[i].selector;

      for (j = 0, jl = indexItem.items.length; j < jl; j++) {
        item = indexItem.items[j];
        if (selector(item.id, item.data)) {
          item.filter = [0, 0, 0, 0];
        }
      }
    }

    indexItem.applyFilter();
  },

  getTime: function() {
    return this.now;
  },

  nextTick: function() {
    this.now = Date.now()-this.start;
  },

  destroy: function() {
    this.items = [];
  }
};


// TODO: collision check with bounding cylinders

var data = {
  Index: {
    items: [],

    add: function(item) {
      this.items.push(item);
    },

    remove: function(item) {
      this.items = this.items.filter(function(i) {
        return (i !== item);
      });
    },

    destroy: function() {
      // items are destroyed by grid
      this.items = [];
    }
  }
};


data.Tile = function(x, y, zoom, options) {
  this.x = x;
  this.y = y;
  this.zoom = zoom;
  this.key = [x, y, zoom].join(',');

  this.options = options;
};

data.Tile.prototype = {
  load: function(url) {
    this.mesh = new mesh.GeoJSON(url, this.options);
  },

  destroy: function() {
    if (this.mesh) {
      this.mesh.destroy();
    }
  }
};


var mesh = {};


mesh.GeoJSON = (function() {

  var FEATURES_PER_CHUNK = 90;
  var DELAY_PER_CHUNK = 75;

  function constructor(url, options) {
    options = options || {};

    this.forcedId = options.id;
    // no Color.toArray() needed as Triangulation does it internally
    this.forcedColor = options.color;

    this.replace      = !!options.replace;
    this.scale        = options.scale     || 1;
    this.rotation     = options.rotation  || 0;
    this.elevation    = options.elevation || 0;
    this.shouldFadeIn = 'fadeIn' in options ? !!options.fadeIn : true;

    this.minZoom = Math.max(parseFloat(options.minZoom || 14.5), APP.minZoom);
    this.maxZoom = Math.min(parseFloat(options.maxZoom || 20), APP.maxZoom);
    if (this.maxZoom < this.minZoom) {
      this.minZoom = 14.5;
      this.maxZoom = 20;
    }

    this.items = [];

    Activity.setBusy();
    if (typeof url === 'object') {
      var collection = url;
      this.setData(collection);
    } else {
      this.request = Request.getJSON(url, function(collection) {
        this.request = null;
        this.setData(collection);
      }.bind(this));
    }
  }

  constructor.prototype = {

    setData: function(collection) {
      if (!collection || !collection.features.length) {
        return;
      }

      var res = {
        vertices: [],
        texCoords: [],
        normals: [],
        colors: []
      };

      var
        resPickingColors = [],
        position = this.getOrigin(collection.features[0].geometry),
        feature, id, properties,
        vertexCountBefore, vertexCount, pickingColor,
        startIndex = 0,
        numFeatures = collection.features.length,
        endIndex = startIndex + Math.min(numFeatures, FEATURES_PER_CHUNK);

      this.position = { latitude:position[1], longitude:position[0] };

      var process = function() {
        for (var i = startIndex; i < endIndex; i++) {
          feature = collection.features[i];

          /**
           * Fired when a 3d object has been loaded
           * @event OSMBuildings#loadfeature
           */
          APP.emit('loadfeature', feature);
          
          properties = feature.properties;
          id = this.forcedId || properties.relationId || feature.id || properties.id;

          vertexCountBefore = res.vertices.length;

          triangulate(res, feature, position, this.forcedColor);

          vertexCount = (res.vertices.length - vertexCountBefore)/3;

          pickingColor = render.Picking.idToColor(id);
          for (var j = 0; j < vertexCount; j++) {
            [].push.apply(resPickingColors, pickingColor);
          }

          this.items.push({ id:id, vertexCount:vertexCount, data:properties.data });
        }

        if (endIndex === numFeatures) {
          this.vertexBuffer   = new GLX.Buffer(3, new Float32Array(res.vertices));
          this.normalBuffer   = new GLX.Buffer(3, new Float32Array(res.normals));
          this.texCoordBuffer = new GLX.Buffer(2, new Float32Array(res.texCoords));
          this.colorBuffer    = new GLX.Buffer(3, new Float32Array(res.colors));
          this.idBuffer       = new GLX.Buffer(3, new Float32Array(resPickingColors));
          this.fadeIn();

          Filter.apply(this);
          data.Index.add(this);

          this.isReady = true;
          Activity.setIdle();

          return;
        }

        startIndex = endIndex;
        endIndex = startIndex + Math.min((numFeatures-startIndex), FEATURES_PER_CHUNK);

        this.relaxTimer = setTimeout(process, DELAY_PER_CHUNK);
      }.bind(this);

      process();
    },

    fadeIn: function() {
      var item, filters = [];
      var start = Filter.getTime(), end = start;
      if (this.shouldFadeIn) {
        start += 250;
        end += 750;
      }
      for (var i = 0, il = this.items.length; i < il; i++) {
        item = this.items[i];
        item.filter = [start, end, 0, 1];
        for (var j = 0, jl = item.vertexCount; j < jl; j++) {
          filters.push.apply(filters, item.filter);
        }
      }
      this.filterBuffer = new GLX.Buffer(4, new Float32Array(filters));
    },

    applyFilter: function() {
      var item, filters = [];
      for (var i = 0, il = this.items.length; i < il; i++) {
        item = this.items[i];
        for (var j = 0, jl = item.vertexCount; j < jl; j++) {
          filters.push.apply(filters, item.filter);
        }
      }
      this.filterBuffer = new GLX.Buffer(4, new Float32Array(filters));
    },

    // TODO: switch to a notation like mesh.transform
    getMatrix: function() {
      var matrix = new GLX.Matrix();

      if (this.elevation) {
        matrix.translate(0, 0, this.elevation);
      }

      matrix.scale(this.scale, this.scale, this.scale*HEIGHT_SCALE);

      if (this.rotation) {
        matrix.rotateZ(-this.rotation);
      }

      // this position is available once geometry processing is complete.
      // should not be failing before because of this.isReady
      var dLat = this.position.latitude - APP.position.latitude;
      var dLon = this.position.longitude - APP.position.longitude;

      var metersPerDegreeLongitude = METERS_PER_DEGREE_LATITUDE * Math.cos(APP.position.latitude / 180 * Math.PI);

      matrix.translate( dLon*metersPerDegreeLongitude, -dLat*METERS_PER_DEGREE_LATITUDE, 0);

      return matrix;
    },

    getOrigin: function(geometry) {
      var coordinates = geometry.coordinates;
      switch (geometry.type) {
        case 'Point':
          return coordinates;

        case 'MultiPoint':
        case 'LineString':
          return coordinates[0];

        case 'MultiLineString':
        case 'Polygon':
          return coordinates[0][0];

        case 'MultiPolygon':
          return coordinates[0][0][0];
      }
    },

    destroy: function() {
      this.isReady = false;

      clearTimeout(this.relaxTimer);

      data.Index.remove(this);

      if (this.request) {
        this.request.abort();
      }

      this.items = [];

      if (this.isReady) {
        this.vertexBuffer.destroy();
        this.normalBuffer.destroy();
        this.colorBuffer.destroy();
        this.idBuffer.destroy();
      }
    }
  };

  return constructor;

}());


/* A 'MapPlane' object is a rectangular mesh in the X/Y plane (Z=0) that is
 * guaranteed to cover all of the area of that plane that is inside the skydome.
 *
 * A 'MapPlane' is untextured and featureless. Its intended use is as a stand-in
 * for a 'BaseMap' in situations where either using the actual BaseMap would be
 * inefficient (e.g. when the BaseMap would be rendered without a texture) or 
 * no BaseMap is present (e.g. if OSMBuildings is used as an overlay to Leaflet
 * or MapBoxGL). This mostly applies to creating depth and normal textures of the
 * scene, not to the actual shaded scene rendering.

*/

mesh.MapPlane = (function() {

  function constructor(options) {
    options = options || {};

    this.id = options.id;
    this.radius = options.radius || 5000;
    this.createGlGeometry();

    this.minZoom = APP.minZoom;
    this.maxZoom = APP.maxZoom;
  }

  constructor.prototype = {

    createGlGeometry: function() {
      /* This method creates front and back faces, in case rendering 
       * effect requires both. */
      var NUM_SEGMENTS = 50;
      var segmentSize = 2*this.radius / NUM_SEGMENTS;
      this.vertexBuffer = [];
      this.normalBuffer = [];
      this.filterBuffer = [];

      var normal = [0,0,1];
      var normals = [].concat(normal, normal, normal, normal, normal, normal);

      var filterEntry = [0, 1, 1, 1];
      var filterEntries = [].concat(filterEntry, filterEntry, filterEntry, filterEntry, filterEntry, filterEntry);
      
      for (var x = 0; x < NUM_SEGMENTS; x++)
        for (var y = 0; y < NUM_SEGMENTS; y++) {
          var baseX = -this.radius + x*segmentSize;
          var baseY = -this.radius + y*segmentSize;
          this.vertexBuffer.push( baseX,               baseY, 0,
                                  baseX + segmentSize, baseY + segmentSize, 0,
                                  baseX + segmentSize, baseY, 0,
                                  
                                  baseX,               baseY, 0,
                                  baseX,               baseY + segmentSize, 0,
                                  baseX + segmentSize, baseY + segmentSize, 0);

          this.vertexBuffer.push( baseX,               baseY, 0,
                                  baseX + segmentSize, baseY, 0,
                                  baseX + segmentSize, baseY + segmentSize, 0,

                                  baseX,               baseY, 0,
                                  baseX + segmentSize, baseY + segmentSize, 0,
                                  baseX,               baseY + segmentSize, 0);

          [].push.apply(this.normalBuffer, normals);
          [].push.apply(this.normalBuffer, normals);

          [].push.apply(this.filterBuffer, filterEntries);
          [].push.apply(this.filterBuffer, filterEntries);
      }
       
      this.vertexBuffer = new GLX.Buffer(3, new Float32Array(this.vertexBuffer));
      this.normalBuffer = new GLX.Buffer(3, new Float32Array(this.normalBuffer));
      this.filterBuffer = new GLX.Buffer(4, new Float32Array(this.filterBuffer));
    },

    // TODO: switch to a notation like mesh.transform
    getMatrix: function() {
      //var scale = Math.pow(2, APP.zoom - 16);

      var modelMatrix = new GLX.Matrix();
      //modelMatrix.scale(scale, scale, scale);
    
      return modelMatrix;
    },

    destroy: function() {
      this.vertexBuffer.destroy();
      this.normalBuffer.destroy();
      this.colorBuffer.destroy();
      this.idBuffer.destroy();
    }
  };

  return constructor;

}());


mesh.DebugQuad = (function() {

  function constructor(options) {
    options = options || {};

    this.id = options.id;
    /*if (options.color) {
      this.color = new Color(options.color).toArray();
    }*/

    this.v1 = this.v2 = this.v3 = this.v4 = [false, false, false];
    this.updateGeometry( [0,0,0], [0,0,0], [0,0,0], [0,0,0]);

    this.minZoom = APP.minZoom;
    this.maxZoom = APP.maxZoom;
  }

  constructor.prototype = {

    updateGeometry: function(v1, v2, v3, v4) {
      if (
        equal3(v1, this.v1) &&
        equal3(v2, this.v2) &&
        equal3(v3, this.v3) &&
        equal3(v4, this.v4)
      ) {
        return; //still up-to-date
      }

      this.v1 = v1;
      this.v2 = v2;
      this.v3 = v3;
      this.v4 = v4;
      
      if (this.vertexBuffer) {
        this.vertexBuffer.destroy();
      }

      var vertices = [].concat(v1, v2, v3, v1, v3, v4);
      this.vertexBuffer = new GLX.Buffer(3, new Float32Array(vertices));

      /*
      this.dummyMapPlaneTexCoords = new GLX.Buffer(2, new Float32Array([
        0.0, 0.0,
          1, 0.0,
          1,   1,
        
        0.0, 0.0,
          1,   1,
        0.0,   1]));*/

      if (this.normalBuffer) {
        this.normalBuffer.destroy();
      }

      this.normalBuffer = new GLX.Buffer(3, new Float32Array([
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        
        0, 0, 1,
        0, 0, 1,
        0, 0, 1]));
      
      var color = [1, 0.5, 0.25];
      if (this.colorBuffer)
        this.colorBuffer.destroy();
        
      this.colorBuffer = new GLX.Buffer(3, new Float32Array(
        [].concat(color, color, color, color, color, color)));


      if (this.idBuffer)
        this.idBuffer.destroy();

      this.idBuffer = new GLX.Buffer(3, new Float32Array(
        [].concat(color, color, color, color, color, color)));
        
      this.texCoordBuffer = new GLX.Buffer(2, new Float32Array(
        [0,0,0,0,0,0,0,0,0,0,0,0]));
        
      var filter = [0,1,1,1];
      
      this.filterBuffer = new GLX.Buffer(4, new Float32Array(
        [].concat(filter, filter, filter, filter, filter, filter)));
        
      //this.numDummyVertices = 6;
    },

    // TODO: switch to a notation like mesh.transform
    getMatrix: function() {
      //var scale = render.fogRadius/this.radius;
      var modelMatrix = new GLX.Matrix();
      //modelMatrix.scale(scale, scale, scale);
    
      return modelMatrix;
    },

    destroy: function() {
      this.vertexBuffer.destroy();
      this.normalBuffer.destroy();
      this.colorBuffer.destroy();
      this.idBuffer.destroy();
    }
  };

  return constructor;

}());

mesh.OBJ = (function() {

  function parseMTL(str) {
    var
      lines = str.split(/[\r\n]/g),
      cols,
      materials = {},
      data = null;

    for (var i = 0, il = lines.length; i < il; i++) {
      cols = lines[i].trim().split(/\s+/);

      switch (cols[0]) {
        case 'newmtl':
          storeMaterial(materials, data);
          data = { id:cols[1], color:{} };
          break;

        case 'Kd':
          data.color = [
            parseFloat(cols[1]),
            parseFloat(cols[2]),
            parseFloat(cols[3])
          ];
          break;

        case 'd':
          data.color[3] = parseFloat(cols[1]);
          break;
      }
    }

    storeMaterial(materials, data);
    str = null;

    return materials;
  }

  function storeMaterial(materials, data) {
    if (data !== null) {
      materials[ data.id ] = data.color;
    }
  }

  function parseOBJ(str, materials) {
    var
      vertexIndex = [],
      lines = str.split(/[\r\n]/g), cols,
      meshes = [],
      id,
      color,
      faces = [];

    for (var i = 0, il = lines.length; i < il; i++) {
      cols = lines[i].trim().split(/\s+/);

      switch (cols[0]) {
        case 'g':
        case 'o':
          storeOBJ(vertexIndex, meshes, id, color, faces);
          id = cols[1];
          faces = [];
          break;

        case 'usemtl':
          storeOBJ(vertexIndex, meshes, id, color, faces);
          if (materials[ cols[1] ]) {
            color = materials[ cols[1] ];
          }
          faces = [];
          break;

        case 'v':
          vertexIndex.push([parseFloat(cols[1]), parseFloat(cols[2]), parseFloat(cols[3])]);
          break;

        case 'f':
          faces.push([ parseFloat(cols[1])-1, parseFloat(cols[2])-1, parseFloat(cols[3])-1 ]);
          break;
      }
    }

    storeOBJ(vertexIndex, meshes, id, color, faces);
    str = null;

    return meshes;
  }

  function storeOBJ(vertexIndex, meshes, id, color, faces) {
    if (faces.length) {
      var geometry = createGeometry(vertexIndex, faces);
      meshes.push({
        id: id,
        color: color,
        vertices: geometry.vertices,
        normals: geometry.normals,
        texCoords: geometry.texCoords
      });
    }
  }

  function createGeometry(vertexIndex, faces) {
    var
      v0, v1, v2,
      nor,
      geometry = { vertices:[], normals:[], texCoords:[] };

    for (var i = 0, il = faces.length; i < il; i++) {
      v0 = vertexIndex[ faces[i][0] ];
      v1 = vertexIndex[ faces[i][1] ];
      v2 = vertexIndex[ faces[i][2] ];

      nor = normal(v0, v1, v2);

      geometry.vertices.push(
        v0[0], v0[2], v0[1],
        v1[0], v1[2], v1[1],
        v2[0], v2[2], v2[1]
      );

      geometry.normals.push(
        nor[0], nor[1], nor[2],
        nor[0], nor[1], nor[2],
        nor[0], nor[1], nor[2]
      );

      geometry.texCoords.push(
        0.0, 0.0,
        0.0, 0.0,
        0.0, 0.0
      );

    }

    return geometry;
  }

  //***************************************************************************

  function constructor(url, position, options) {
    options = options || {};

    this.forcedId = options.id;

    if (options.color) {
      this.forcedColor = new Color(options.color).toArray();
    }

    this.replace      = !!options.replace;
    this.scale        = options.scale     || 1;
    this.rotation     = options.rotation  || 0;
    this.elevation    = options.elevation || 0;
    this.position     = position;
    this.shouldFadeIn = 'fadeIn' in options ? !!options.fadeIn : true;

    this.minZoom = Math.max(parseFloat(options.minZoom || 14.5), APP.minZoom);
    this.maxZoom = Math.min(parseFloat(options.maxZoom || 20), APP.maxZoom);
    if (this.maxZoom < this.minZoom) {
      this.minZoom = 14.5;
      this.maxZoom = 20;
    }

    this.data = {
      colors: [],
      ids: [],
      vertices: [],
      normals: [],
      texCoords: []
    };

    Activity.setBusy();
    this.request = Request.getText(url, function(obj) {
      this.request = null;
      var match;
      if ((match = obj.match(/^mtllib\s+(.*)$/m))) {
        this.request = Request.getText(url.replace(/[^\/]+$/, '') + match[1], function(mtl) {
          this.request = null;
          this.onLoad(obj, parseMTL(mtl));
        }.bind(this));
      } else {
        this.onLoad(obj, null);
      }
    }.bind(this));
  }

  constructor.prototype = {
    onLoad: function(obj, mtl) {
      this.items = [];
      this.addItems( parseOBJ(obj, mtl) );
      this.onReady();
    },

    addItems: function(items) {
      var
        feature, color, idColor, j, jl,
        id, colorVariance;

      for (var i = 0, il = items.length; i < il; i++) {
        feature = items[i];

        /**
         * Fired when a 3d object has been loaded
         * @event OSMBuildings#loadfeature
         */
        APP.emit('loadfeature', feature);

        [].push.apply(this.data.vertices,  feature.vertices);
        [].push.apply(this.data.normals,   feature.normals);
        [].push.apply(this.data.texCoords, feature.texCoords);

        id = this.forcedId || feature.id;
        idColor = render.Picking.idToColor(id);

        colorVariance = (id/2 % 2 ? -1 : +1) * (id % 2 ? 0.03 : 0.06);
        color = this.forcedColor || feature.color || DEFAULT_COLOR;
        for (j = 0, jl = feature.vertices.length - 2; j<jl; j += 3) {
          [].push.apply(this.data.colors, add3scalar(color, colorVariance));
          [].push.apply(this.data.ids, idColor);
        }

        this.items.push({ id:id, vertexCount:feature.vertices.length/3, data:feature.data });
      }
    },

    fadeIn: function() {
      var item, filters = [];
      var start = Filter.getTime(), end = start;
      if (this.shouldFadeIn) {
        start += 250;
        end += 750;
      }
      for (var i = 0, il = this.items.length; i < il; i++) {
        item = this.items[i];
        item.filter = [start, end, 0, 1];
        for (var j = 0, jl = item.vertexCount; j < jl; j++) {
          filters.push.apply(filters, item.filter);
        }
      }
      this.filterBuffer = new GLX.Buffer(4, new Float32Array(filters));
    },

    applyFilter: function() {
      var item, filters = [];
      for (var i = 0, il = this.items.length; i < il; i++) {
        item = this.items[i];
        for (var j = 0, jl = item.vertexCount; j < jl; j++) {
          filters.push.apply(filters, item.filter);
        }
      }
      this.filterBuffer = new GLX.Buffer(4, new Float32Array(filters));
    },

    onReady: function() {
      this.vertexBuffer   = new GLX.Buffer(3, new Float32Array(this.data.vertices));
      this.normalBuffer   = new GLX.Buffer(3, new Float32Array(this.data.normals));
      this.texCoordBuffer = new GLX.Buffer(2, new Float32Array(this.data.texCoords));
      this.colorBuffer    = new GLX.Buffer(3, new Float32Array(this.data.colors));
      this.idBuffer       = new GLX.Buffer(3, new Float32Array(this.data.ids));
      this.fadeIn();
      this.data = null;

      Filter.apply(this);
      data.Index.add(this);

      this.isReady = true;
      Activity.setIdle();
    },

    // TODO: switch to a notation like mesh.transform
    getMatrix: function() {
      var matrix = new GLX.Matrix();

      if (this.elevation) {
        matrix.translate(0, 0, this.elevation);
      }

      matrix.scale(this.scale, this.scale, this.scale);

      if (this.rotation) {
        matrix.rotateZ(-this.rotation);
      }

      var metersPerDegreeLongitude = METERS_PER_DEGREE_LATITUDE * 
                                     Math.cos(APP.position.latitude / 180 * Math.PI);

      var dLat = this.position.latitude - APP.position.latitude;
      var dLon = this.position.longitude- APP.position.longitude;
      
      matrix.translate( dLon * metersPerDegreeLongitude,
                       -dLat * METERS_PER_DEGREE_LATITUDE, 0);
      
      return matrix;
    },

    destroy: function() {
      data.Index.remove(this);

      if (this.request) {
        this.request.abort();
      }

      this.items = [];

      if (this.isReady) {
        this.vertexBuffer.destroy();
        this.normalBuffer.destroy();
        this.colorBuffer.destroy();
        this.idBuffer.destroy();
      }
    }
  };

  return constructor;

}());


function distance2(a, b) {
  var
    dx = a[0]-b[0],
    dy = a[1]-b[1];
  return dx*dx + dy*dy;
}

function assert(condition, message) {
  if (!condition) {
    throw message;
  }
}

/* Returns the distance of point 'p' from line 'line1'->'line2'.
 * based on http://mathworld.wolfram.com/Point-LineDistance2-Dimensional.html
 */
 /*
function getDistancePointLine2( line1, line2, p) {

  //v: a unit-length vector perpendicular to the line;
  var v = norm2( [ line2[1] - line1[1], line1[0] - line2[0] ] );
  var r = sub2( line1, p);
  return Math.abs(dot2(v, r));
} */

/*  given a pixel's (integer) position through which the line 'segmentStart' ->
 *  'segmentEnd' passes, this method returns the one neighboring pixel of 
 *  'currentPixel' that would be traversed next if the line is followed in 
 *  the direction from 'segmentStart' to 'segmentEnd' (even if the next point
 *  would lie beyond 'segmentEnd'. )
 */
function getNextPixel(segmentStart, segmentEnd, currentPixel) {

  var vInc = [segmentStart[0] < segmentEnd[0] ? 1 : -1, 
              segmentStart[1] < segmentEnd[1] ? 1 : -1];
         
  var nextX = currentPixel[0] + (segmentStart[0] < segmentEnd[0] ?  +1 : 0);
  var nextY = currentPixel[1] + (segmentStart[1] < segmentEnd[1] ?  +1 : 0);
  
  // position of the edge to the next pixel on the line 'segmentStart'->'segmentEnd'
  var alphaX = (nextX - segmentStart[0])/ (segmentEnd[0] - segmentStart[0]);
  var alphaY = (nextY - segmentStart[1])/ (segmentEnd[1] - segmentStart[1]);
  
  // neither value is valid
  if ((alphaX <= 0.0 || alphaX > 1.0) && (alphaY <= 0.0 || alphaY > 1.0)) {
    return [undefined, undefined];
  }
    
  if (alphaX <= 0.0 || alphaX > 1.0) { // only alphaY is valid
    return [currentPixel[0], currentPixel[1] + vInc[1]];
  }

  if (alphaY <= 0.0 || alphaY > 1.0) { // only alphaX is valid
    return [currentPixel[0] + vInc[0], currentPixel[1]];
  }
    
  return alphaX < alphaY ? [currentPixel[0]+vInc[0], currentPixel[1]] :
                           [currentPixel[0],         currentPixel[1] + vInc[1]];
}

/* returns all pixels that are at least partially covered by the triangle
 * p1-p2-p3. 
 * Note: the returned array of pixels *will* contain duplicates that may need 
 * to be removed.
 */
function rasterTriangle(p1, p2, p3) {
  var points = [p1, p2, p3];
  points.sort(function(p, q) {
    return p[1] < q[1];
  });
  p1 = points[0];
  p2 = points[1];
  p3 = points[2];
  
  if (p1[1] == p2[1])
    return rasterFlatTriangle( p1, p2, p3);
    
  if (p2[1] == p3[1])
    return rasterFlatTriangle( p2, p3, p1);

  var alpha = (p2[1] - p1[1]) / (p3[1] - p1[1]);
  //point on the line p1->p3 with the same y-value as p2
  var p4 = [p1[0] + alpha*(p3[0]-p1[0]), p2[1]];
  
  /*  P3
   *   |\
   *   | \
   *  P4--P2
   *   | /
   *   |/
   *   P1
   * */
  return rasterFlatTriangle(p4, p2, p1).concat(rasterFlatTriangle(p4, p2, p3));
}

/* Returns all pixels that are at least partially covered by the triangle
 * flat0-flat1-other, where the points flat0 and flat1 need to have the
 * same y-value. This method is used internally for rasterTriangle(), which
 * splits a general triangle into two flat triangles, and calls this method
 * for both parts.
 * Note: the returned array of pixels will contain duplicates.
 *
 * other
 *  | \_
 *  |   \_
 *  |     \_
 * f0/f1--f1/f0  
 */
function rasterFlatTriangle( flat0, flat1, other ) {

  //console.log("RFT:\n%s\n%s\n%s", String(flat0), String(flat1), String(other));
  var points = [];
  assert(flat0[1] === flat1[1], 'not a flat triangle');
  assert(other[1] !== flat0[1], 'not a triangle');
  assert(flat0[0] !== flat1[0], 'not a triangle');

  if (flat0[0] > flat1[0]) //guarantees that flat0 is always left of flat1
  {
    var tmp = flat0;
    flat0 = flat1;
    flat1 = tmp;
  }
  
  var leftRasterPos = [other[0] <<0, other[1] <<0];
  var rightRasterPos = leftRasterPos.slice(0);
  points.push(leftRasterPos.slice(0));
  var yDir = other[1] < flat0[1] ? +1 : -1;
  var yStart = leftRasterPos[1];
  var yBeyond= (flat0[1] <<0) + yDir;
  var prevLeftRasterPos;
  var prevRightRasterPos;

  for (var y = yStart; (y*yDir) < (yBeyond*yDir); y+= yDir) {
    do {
      points.push( leftRasterPos.slice(0));
      prevLeftRasterPos = leftRasterPos;
      leftRasterPos = getNextPixel(other, flat0, leftRasterPos);
    } while (leftRasterPos[1]*yDir <= y*yDir);
    leftRasterPos = prevLeftRasterPos;
    
    do {
      points.push( rightRasterPos.slice(0));
      prevRightRasterPos = rightRasterPos;
      rightRasterPos = getNextPixel(other, flat1, rightRasterPos);
    } while (rightRasterPos[1]*yDir <= y*yDir);
    rightRasterPos = prevRightRasterPos;
    
    for (var x = leftRasterPos[0]; x <= rightRasterPos[0]; x++) {
      points.push([x, y]);
    }
  }
  
  return points;
}

/* Returns an array of all pixels that are at least partially covered by the
 * convex quadrilateral 'quad'. If the passed quadrilateral is not convex,
 * then the return value of this method is undefined.
 */
function rasterConvexQuad(quad) {
  assert(quad.length == 4, 'Error: Quadrilateral with more or less than four vertices');
  var res1  = rasterTriangle(quad[0], quad[1], quad[2]);
  var res2 =  rasterTriangle(quad[0], quad[2], quad[3]);
  return res1.concat(res2);
}

// computes the normal vector of the triangle a-b-c
function normal(a, b, c) {
  var d1 = sub3(a, b);
  var d2 = sub3(b, c);
  // normalized cross product of d1 and d2.
  return norm3([ d1[1]*d2[2] - d1[2]*d2[1],
                 d1[2]*d2[0] - d1[0]*d2[2],
                 d1[0]*d2[1] - d1[1]*d2[0] ]);
}

/* returns the quadrilateral part of the XY plane that is currently visible on
 * screen. The quad is returned in tile coordinates for tile zoom level
 * 'tileZoomLevel', and thus can directly be used to determine which basemap
 * and geometry tiles need to be loaded.
 * Note: if the horizon is level (as should usually be the case for 
 * OSMBuildings) then said quad is also a trapezoid. */
function getViewQuad(viewProjectionMatrix, maxFarEdgeDistance, viewDirOnMap) {
  /* maximum distance from the map center at which
   * geometry is still visible */
  //console.log("FMED:", MAX_FAR_EDGE_DISTANCE);

  var inverse = GLX.Matrix.invert(viewProjectionMatrix);

  var vBottomLeft  = getIntersectionWithXYPlane(-1, -1, inverse);
  var vBottomRight = getIntersectionWithXYPlane( 1, -1, inverse);
  var vTopRight    = getIntersectionWithXYPlane( 1,  1, inverse);
  var vTopLeft     = getIntersectionWithXYPlane(-1,  1, inverse);

  /* If even the lower edge of the screen does not intersect with the map plane,
   * then the map plane is not visible at all.
   * (Or somebody screwed up the projection matrix, putting the view upside-down 
   *  or something. But in any case we won't attempt to create a view rectangle).
   */
  if (!vBottomLeft || !vBottomRight) {
    return;
  }

  var vLeftDir, vRightDir, vLeftPoint, vRightPoint;
  var f;

  /* The lower screen edge shows the map layer, but the upper one does not.
   * This usually happens when the camera is close to parallel to the ground
   * so that the upper screen edge lies above the horizon. This is not a bug
   * and can legitimately happen. But from a theoretical standpoint, this means 
   * that the view 'trapezoid' stretches infinitely toward the horizon. Since this
   * is not a practically useful result - though formally correct - we instead
   * manually bound that area.*/
  if (!vTopLeft || !vTopRight) {
    /* point on the left screen edge with the same y-value as the map center*/
    vLeftPoint = getIntersectionWithXYPlane(-1, -0.9, inverse);
    vLeftDir = norm2(sub2( vLeftPoint, vBottomLeft));
    f = dot2(vLeftDir, viewDirOnMap);
    vTopLeft = add2( vBottomLeft, mul2scalar(vLeftDir, maxFarEdgeDistance/f));
    
    vRightPoint = getIntersectionWithXYPlane( 1, -0.9, inverse);
    vRightDir = norm2(sub2(vRightPoint, vBottomRight));
    f = dot2(vRightDir, viewDirOnMap);
    vTopRight = add2( vBottomRight, mul2scalar(vRightDir, maxFarEdgeDistance/f));
  }

  /* if vTopLeft is further than maxFarEdgeDistance away vertically from the lower edge,
   * move it closer. */
 if (dot2( viewDirOnMap, sub2(vTopLeft, vBottomLeft)) > maxFarEdgeDistance) {
    vLeftDir = norm2(sub2( vTopLeft, vBottomLeft));
    f = dot2(vLeftDir, viewDirOnMap);
    vTopLeft = add2( vBottomLeft, mul2scalar(vLeftDir, maxFarEdgeDistance/f));
 }

 /* dito for vTopRight*/
 if (dot2( viewDirOnMap, sub2(vTopRight, vBottomRight)) > maxFarEdgeDistance) {
    vRightDir = norm2(sub2( vTopRight, vBottomRight));
    f = dot2(vRightDir, viewDirOnMap);
    vTopRight = add2( vBottomRight, mul2scalar(vRightDir, maxFarEdgeDistance/f));
 }
 
  return [vBottomLeft, vBottomRight, vTopRight, vTopLeft];
}


/* Returns an orthographic projection matrix whose view rectangle contains all
 * points of 'points' when watched from the position given by targetViewMatrix.
 * The depth range of the returned matrix is [near, far].
 * The 'points' are given as euclidean coordinates in [m] distance to the 
 * current reference point (APP.position). 
 */
function getCoveringOrthoProjection(points, targetViewMatrix, near, far, height) {
  var p0 = transformVec3(targetViewMatrix.data, points[0]);
  var left = p0[0];
  var right= p0[0];
  var top  = p0[1];
  var bottom=p0[1];

  for (var i = 0; i < points.length; i++) {
    var p =  transformVec3(targetViewMatrix.data, points[i]);
    left = Math.min( left,  p[0]);
    right= Math.max( right, p[0]);
    top  = Math.max( top,   p[1]);
    bottom=Math.min( bottom,p[1]);
  }
  
  return new GLX.Matrix.Ortho(left, right, top, bottom, near, far);
}

/* transforms the 3D vector 'v' according to the transformation matrix 'm'.
 * Internally, the vector 'v' is interpreted as a 4D vector
 * (v[0], v[1], v[2], 1.0) in homogenous coordinates. The transformation is
 * performed on that vector, yielding a 4D homogenous result vector. That
 * vector is then converted back to a 3D Euler coordinates by dividing
 * its first three components each by its fourth component */
function transformVec3(m, v) {
  var x = v[0]*m[0] + v[1]*m[4] + v[2]*m[8]  + m[12];
  var y = v[0]*m[1] + v[1]*m[5] + v[2]*m[9]  + m[13];
  var z = v[0]*m[2] + v[1]*m[6] + v[2]*m[10] + m[14];
  var w = v[0]*m[3] + v[1]*m[7] + v[2]*m[11] + m[15];
  return [x/w, y/w, z/w]; //convert homogenous to Euler coordinates
}

/* returns the point (in OSMBuildings' local coordinates) on the XY plane (z==0)
 * that would be drawn at viewport position (screenNdcX, screenNdcY).
 * That viewport position is given in normalized device coordinates, i.e.
 * x==-1.0 is the left screen edge, x==+1.0 is the right one, y==-1.0 is the lower
 * screen edge and y==+1.0 is the upper one.
 */
function getIntersectionWithXYPlane(screenNdcX, screenNdcY, inverseTransform) {
  var v1 = transformVec3(inverseTransform, [screenNdcX, screenNdcY, 0]);
  var v2 = transformVec3(inverseTransform, [screenNdcX, screenNdcY, 1]);

  // direction vector from v1 to v2
  var vDir = sub3(v2, v1);

  if (vDir[2] >= 0) // ray would not intersect with the plane
  {
    return;
  }
  /* ray equation for all world-space points 'p' lying on the screen-space NDC position
   * (screenNdcX, screenNdcY) is:  p = v1 + λ*vDirNorm
   * For the intersection with the xy-plane (-> z=0) holds: v1[2] + λ*vDirNorm[2] = p[2] = 0.0.
   * Rearranged, this reads:   */
  var lambda = -v1[2]/vDir[2];
  var pos = add3( v1, mul3scalar(vDir, lambda));

  return [pos[0], pos[1]];  // z==0 
}

/* Returns: the number of screen pixels that would be covered by the tile 
 *          tileZoom/tileX/tileY *if* the screen would not end at the viewport
 *          edges. The intended use of this method is to return a measure of 
 *          how detailed the tile should be rendered.
 * Note: This method does not clip the tile to the viewport. So the number
 *       returned will be larger than the number of screen pixels covered iff.
 *       the tile intersects with a viewport edge. 
 */
function getTileSizeOnScreen(tileX, tileY, tileZoom, viewProjMatrix) {
  var metersPerDegreeLongitude = METERS_PER_DEGREE_LATITUDE * 
                                 Math.cos(APP.position.latitude / 180 * Math.PI);
  var tileLon = tile2lon(tileX, tileZoom);
  var tileLat = tile2lat(tileY, tileZoom);
  
  var modelMatrix = new GLX.Matrix();
  modelMatrix.translate( (tileLon - APP.position.longitude)* metersPerDegreeLongitude,
                        -(tileLat - APP.position.latitude) * METERS_PER_DEGREE_LATITUDE, 0);

  var size = getTileSizeInMeters( APP.position.latitude, tileZoom);
  
  var mvpMatrix = GLX.Matrix.multiply(modelMatrix, viewProjMatrix);
  var tl = transformVec3(mvpMatrix, [0   , 0   , 0]);
  var tr = transformVec3(mvpMatrix, [size, 0   , 0]);
  var bl = transformVec3(mvpMatrix, [0   , size, 0]);
  var br = transformVec3(mvpMatrix, [size, size, 0]);
  var verts = [tl, tr, bl, br];
  for (var i in verts) { 
    // transformation from NDC [-1..1] to viewport [0.. width/height] coordinates
    verts[i][0] = (verts[i][0] + 1.0) / 2.0 * APP.width;
    verts[i][1] = (verts[i][1] + 1.0) / 2.0 * APP.height;
  }
  
  return getConvexQuadArea( [tl, tr, br, bl]);
}

function getTriangleArea(p1, p2, p3) {
  //triangle edge lengths
  var a = len2(sub2( p1, p2));
  var b = len2(sub2( p1, p3));
  var c = len2(sub2( p2, p3));
  
  //Heron's formula
  var s = 0.5 * (a+b+c);
  return Math.sqrt( s * (s-a) * (s-b) * (s-c));
}

function getConvexQuadArea(quad) {
  return getTriangleArea( quad[0], quad[1], quad[2]) + 
         getTriangleArea( quad[0], quad[2], quad[3]);
}

function getTileSizeInMeters( latitude, zoom) {
  return EARTH_CIRCUMFERENCE_IN_METERS * Math.cos(latitude / 180 * Math.PI) / 
         Math.pow(2, zoom);
}

function getPositionFromLocal(localXY) {
  var metersPerDegreeLongitude = METERS_PER_DEGREE_LATITUDE * 
                                 Math.cos(APP.position.latitude / 180 * Math.PI);

  return {
    longitude: APP.position.longitude + localXY[0]/metersPerDegreeLongitude,
    latitude: APP.position.latitude - localXY[1]/METERS_PER_DEGREE_LATITUDE
  };
}

function getTilePositionFromLocal(localXY, zoom) {
  var pos = getPositionFromLocal(localXY);
  
  return [long2tile(pos.longitude, zoom), lat2tile(pos.latitude, zoom)];
}

//all four were taken from http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames
function long2tile(lon,zoom) { return (lon+180)/360*Math.pow(2,zoom); }
function lat2tile(lat,zoom)  { return (1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom); }
function tile2lon(x,z) { return (x/Math.pow(2,z)*360-180); }
function tile2lat(y,z) { 
  var n = Math.PI-2*Math.PI*y/Math.pow(2,z);
  return (180/Math.PI*Math.atan(0.5*(Math.exp(n)-Math.exp(-n))));
}

function len2(a)   { return Math.sqrt( a[0]*a[0] + a[1]*a[1]);}
function dot2(a,b) { return a[0]*b[0] + a[1]*b[1];}
function sub2(a,b) { return [a[0]-b[0], a[1]-b[1]];}
function add2(a,b) { return [a[0]+b[0], a[1]+b[1]];}
function mul2scalar(a,f) { return [a[0]*f, a[1]*f];}
function norm2(a)  { var l = len2(a); return [a[0]/l, a[1]/l]; }

function dot3(a,b) { return a[0]*b[0] + a[1]*b[1] + a[2]*b[2];}
function sub3(a,b) { return [a[0]-b[0], a[1]-b[1], a[2]-b[2]];}
function add3(a,b) { return [a[0]+b[0], a[1]+b[1], a[2]+b[2]];}
function add3scalar(a,f) { return [a[0]+f, a[1]+f, a[2]+f];}
function mul3scalar(a,f) { return [a[0]*f, a[1]*f, a[2]*f];}
function len3(a)   { return Math.sqrt( a[0]*a[0] + a[1]*a[1] + a[2]*a[2]);}
function squaredLength(a) { return a[0]*a[0] + a[1]*a[1] + a[2]*a[2];}
function norm3(a)  { var l = len3(a); return [a[0]/l, a[1]/l, a[2]/l]; }
function dist3(a,b){ return len3(sub3(a,b));}
function equal3(a, b) { return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];}


var render = {

  getViewQuad: function() {
    return getViewQuad( this.viewProjMatrix.data,
                       (this.fogDistance + this.fogBlurDistance),
                        this.viewDirOnMap);
  },

  start: function() {
    // disable effects if they rely on WebGL extensions
    // that the current hardware does not support
    if (!GL.depthTextureExtension) {
      console.log('[WARN] effects "shadows" and "outlines" disabled in OSMBuildings, because your GPU does not support WEBGL_depth_texture');
      //both effects rely on depth textures
      delete render.effects.shadows;
      delete render.effects.outlines;
    }

    APP.on('change', this._onChange = this.onChange.bind(this));
    APP.on('resize', this._onResize = this.onResize.bind(this));
    this.onResize();  //initialize view and projection matrix, fog distance, etc.

    GL.cullFace(GL.BACK);
    GL.enable(GL.CULL_FACE);
    GL.enable(GL.DEPTH_TEST);

    render.Picking.init(); // renders only on demand
    render.sky = new render.SkyWall();
    render.Buildings.init();
    render.Basemap.init();
    render.Overlay.init();
    render.AmbientMap.init();
    render.OutlineMap.init();
    render.blurredAmbientMap = new render.Blur();
    render.blurredOutlineMap = new render.Blur();
    //render.HudRect.init();
    //render.NormalMap.init();
    render.MapShadows.init();
    if (render.effects.shadows || render.effects.outlines) {
      render.cameraGBuffer = new render.DepthFogNormalMap();
    }
    
    if (render.effects.shadows) {
      render.sunGBuffer    = new render.DepthFogNormalMap();
      render.sunGBuffer.framebufferSize = [SHADOW_DEPTH_MAP_SIZE, SHADOW_DEPTH_MAP_SIZE];
    }

    //var quad = new mesh.DebugQuad();
    //quad.updateGeometry( [-100, -100, 1], [100, -100, 1], [100, 100, 1], [-100, 100, 1]);
    //data.Index.add(quad);

    requestAnimationFrame( this.renderFrame.bind(this));
  },
  
  renderFrame: function() {
    Filter.nextTick();
    requestAnimationFrame( this.renderFrame.bind(this));

    this.onChange();    
    GL.clearColor(this.fogColor[0], this.fogColor[1], this.fogColor[2], 0.0);
    GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);

    if (APP.zoom < APP.minZoom || APP.zoom > APP.maxZoom) {
      return;
    }
    var viewTrapezoid = this.getViewQuad();
    /*
    quad.updateGeometry([viewTrapezoid[0][0], viewTrapezoid[0][1], 1.0],
                        [viewTrapezoid[1][0], viewTrapezoid[1][1], 1.0],
                        [viewTrapezoid[2][0], viewTrapezoid[2][1], 1.0],
                        [viewTrapezoid[3][0], viewTrapezoid[3][1], 1.0]);*/

    Sun.updateView(viewTrapezoid);
    render.sky.updateGeometry(viewTrapezoid);
    var viewSize = [APP.width, APP.height];

    if (!render.effects.shadows) {
      render.Buildings.render();
      render.Basemap.render();

      if (render.effects.outlines) {
        render.cameraGBuffer.render(this.viewMatrix, this.projMatrix, viewSize, true);
        render.Picking.render(viewSize);
        render.OutlineMap.render(
          render.cameraGBuffer.getDepthTexture(), 
          render.cameraGBuffer.getFogNormalTexture(), 
          render.Picking.framebuffer.renderTexture, viewSize, 1.0);
          render.blurredOutlineMap.render(render.OutlineMap.framebuffer.renderTexture, viewSize);
      }

      GL.enable(GL.BLEND);
      if (render.effects.outlines) {
        GL.blendFuncSeparate(GL.ZERO, GL.SRC_COLOR, GL.ZERO, GL.ONE);
        render.Overlay.render(render.blurredOutlineMap.framebuffer.renderTexture, viewSize);
      }

      GL.blendFuncSeparate(GL.ONE_MINUS_DST_ALPHA, GL.DST_ALPHA, GL.ONE, GL.ONE);
      GL.disable(GL.DEPTH_TEST);
      render.sky.render();
      GL.disable(GL.BLEND);
      GL.enable(GL.DEPTH_TEST);
    } else {
      render.cameraGBuffer.render(this.viewMatrix, this.projMatrix, viewSize, true);
      render.sunGBuffer.render(Sun.viewMatrix, Sun.projMatrix);
      render.AmbientMap.render(render.cameraGBuffer.getDepthTexture(), render.cameraGBuffer.getFogNormalTexture(), viewSize, 2.0);
      render.blurredAmbientMap.render(render.AmbientMap.framebuffer.renderTexture, viewSize);
      render.Buildings.render(render.sunGBuffer.framebuffer, 0.5);
      render.Basemap.render();

      if (render.effects.outlines) {
        render.Picking.render(viewSize);
        render.OutlineMap.render(
          render.cameraGBuffer.getDepthTexture(), 
          render.cameraGBuffer.getFogNormalTexture(), 
          render.Picking.framebuffer.renderTexture, viewSize, 1.0
        );
        render.blurredOutlineMap.render(render.OutlineMap.framebuffer.renderTexture, viewSize);
      }

      GL.enable(GL.BLEND);
      {
        // multiply DEST_COLOR by SRC_COLOR, keep SRC alpha
        // this aplies the shadow and SSAO effects (which selectively darken the scene)
        // while keeping the alpha channel (that corresponds to how much the
        // geometry should be blurred into the background in the next step) intact
        GL.blendFuncSeparate(GL.ZERO, GL.SRC_COLOR, GL.ZERO, GL.ONE);
        if (render.effects.outlines) {
          render.Overlay.render(render.blurredOutlineMap.framebuffer.renderTexture, viewSize);
        }

        render.MapShadows.render(Sun, render.sunGBuffer.framebuffer, 0.5);
        render.Overlay.render( render.blurredAmbientMap.framebuffer.renderTexture, viewSize);

        // linear interpolation between the colors of the current framebuffer 
        // ( =building geometries) and of the sky. The interpolation factor
        // is the geometry alpha value, which contains the 'foggyness' of each pixel
        // the alpha interpolation functions is set to GL.ONE for both operands
        // to ensure that the alpha channel will become 1.0 for each pixel after this
        // operation, and thus the whole canvas is not rendered partially transparently
        // over its background.
        GL.blendFuncSeparate(GL.ONE_MINUS_DST_ALPHA, GL.DST_ALPHA, GL.ONE, GL.ONE);
        GL.disable(GL.DEPTH_TEST);
        render.sky.render();
        GL.enable(GL.DEPTH_TEST);
      }
      GL.disable(GL.BLEND);

      //render.HudRect.render( render.sunGBuffer.getFogNormalTexture(), config );
    }

    if (this.screenshotCallback) {
      this.screenshotCallback(GL.canvas.toDataURL());
      this.screenshotCallback = null;
    }  
  },

  stop: function() {
    clearInterval(this.loop);
  },
  
  onChange: function() {
    var
      scale = 1.3567 * Math.pow(2, APP.zoom-17),
      width = APP.width,
      height = APP.height,
      refHeight = 1024,
      refVFOV = 45;

    GL.viewport(0, 0, width, height);

    this.viewMatrix = new GLX.Matrix()
      .rotateZ(APP.rotation)
      .rotateX(APP.tilt)
      .translate(0, 8/scale, 0) // corrective offset to match Leaflet's coordinate system (value was determined empirically)
      .translate(0, 0, -1220/scale); //move away to simulate zoom; -1220 scales APP tiles to ~256px

    this.viewDirOnMap = [ Math.sin(APP.rotation / 180* Math.PI),
                         -Math.cos(APP.rotation / 180* Math.PI)];

    // First, we need to determine the field-of-view so that our map scale does
    // not change when the viewport size changes. The map scale is given by the
    // 'refFOV' (e.g. 45°) at a WebGL viewport height of 'refHeight' pixels.
    // Since our viewport will not usually be 1024 pixels high, we'll need to
    // find the FOV that corresponds to our viewport height.
    // The half viewport height and half FOV form a leg and the opposite angle
    // of a right triangle (see sketch below). Since the relation between the
    // two is non-linear, we cannot simply scale the reference FOV by the ratio
    // of reference height to actual height to get the desired FOV.
    // But be can use the reference height and reference FOV to determine the
    // virtual distance to the camera and then use that virtual distance to
    // compute the FOV corresponding to the actual height.
    //
    //                   ____/|
    //              ____/     |
    //         ____/          | refHeight/2
    //    ____/  \            |
    //   /refFOV/2|           |
    //  ----------------------|
    //     "virtual distance"
    var virtualDistance = refHeight/ (2 * Math.tan( (refVFOV/2) / 180 * Math.PI));
    var verticalFOV = 2* Math.atan((height/2.0)/virtualDistance) / Math.PI * 180;

    // OSMBuildings' perspective camera is ... special: The reference point for
    // camera movement, rotation and zoom is at the screen center (as usual). 
    // But the center of projection is not at the screen center as well but at
    // the bottom center of the screen. This projection was chosen for artistic
    // reasons so that when the map is seen from straight above, vertical building
    // walls would not be seen to face towards the screen center but would
    // uniformly face downward on the screen.
    
    // To achieve this projection, we need to
    // 1. shift the whole geometry up half a screen (so that the desired
    //    center of projection aligns with the view center) *in world coordinates*.
    // 2. perform the actual perspective projection (and flip the y coordinate for
    //    internal reasons).
    // 3. shift the geometry back down half a screen now *in screen coordinates*

    this.projMatrix = new GLX.Matrix()
      .translate(0, -height/(2.0*scale), 0) // 0, APP y offset to neutralize camera y offset, 
      .scale(1, -1, 1) // flip Y
      .multiply(new GLX.Matrix.Perspective(verticalFOV, width/height, 1, 7500))
      .translate(0, -1, 0); // camera y offset

    this.viewProjMatrix = new GLX.Matrix(GLX.Matrix.multiply(this.viewMatrix, this.projMatrix));

    //need to store this as a reference point to determine fog distance
    this.lowerLeftOnMap = getIntersectionWithXYPlane(-1, -1, GLX.Matrix.invert(this.viewProjMatrix.data));
    if (this.lowerLeftOnMap === undefined) {
      return;
    }

    var lowerLeftDistanceToCenter = len2(this.lowerLeftOnMap);

    /* fogDistance: closest distance at which the fog affects the geometry */
    this.fogDistance = Math.max(3000, lowerLeftDistanceToCenter);
    /* fogBlurDistance: closest distance *beyond* fogDistance at which everything is
     *                  completely enclosed in fog. */
    this.fogBlurDistance = 500;
  },

  onResize: function() {
    GL.canvas.width  = APP.width;
    GL.canvas.height = APP.height;
    this.onChange();
  },

  destroy: function() {
    APP.off('change', this._onChange);
    APP.off('resize', this._onResize);

    this.stop();
    render.Picking.destroy();
    render.sky.destroy();
    render.Buildings.destroy();
    render.Basemap.destroy();

    if (render.cameraGBuffer) {
      render.cameraGBuffer.destroy();
    }
    
    if (render.sunGBuffer) {
      render.sunGBuffer.destroy();  
    }
    
    render.AmbientMap.destroy();
    render.blurredAmbientMap.destroy();
    render.blurredOutlineMap.destroy();
  }
};


// TODO: perhaps render only clicked area

render.Picking = {

  idMapping: [null],
  viewportSize: 512,

  init: function() {
    this.shader = new GLX.Shader({
      vertexShader: Shaders.picking.vertex,
      fragmentShader: Shaders.picking.fragment,
      shaderName: 'picking shader',
      attributes: ['aPosition', 'aId', 'aFilter'],
      uniforms: [
        'uModelMatrix',
        'uMatrix',
        'uFogRadius',
        'uTime'
      ]
    });

    this.framebuffer = new GLX.Framebuffer(this.viewportSize, this.viewportSize);
  },

  render: function(framebufferSize) {
    var
      shader = this.shader,
      framebuffer = this.framebuffer;

    framebuffer.setSize(framebufferSize[0], framebufferSize[1]);
    
    shader.enable();
    framebuffer.enable();
    GL.viewport(0, 0, framebufferSize[0], framebufferSize[1]);

    GL.clearColor(0, 0, 0, 1);
    GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);

    shader.setUniforms([
      ['uFogRadius', '1f', render.fogDistance],
      ['uTime',      '1f', Filter.getTime()]
    ]);

    var
      dataItems = data.Index.items,
      item,
      modelMatrix;

    for (var i = 0, il = dataItems.length; i<il; i++) {
      item = dataItems[i];

      if (APP.zoom < item.minZoom || APP.zoom > item.maxZoom) {
        continue;
      }

      if (!(modelMatrix = item.getMatrix())) {
        continue;
      }

      shader.setUniformMatrices([
        ['uModelMatrix', '4fv', modelMatrix.data],
        ['uMatrix',      '4fv', GLX.Matrix.multiply(modelMatrix, render.viewProjMatrix)]
      ]);

      shader.bindBuffer(item.vertexBuffer, 'aPosition');
      shader.bindBuffer(item.idBuffer, 'aId');
      shader.bindBuffer(item.filterBuffer, 'aFilter');

      GL.drawArrays(GL.TRIANGLES, 0, item.vertexBuffer.numItems);
    }

    this.shader.disable();
    this.framebuffer.disable();
    GL.viewport(0, 0, APP.width, APP.height);
  },
  
  // TODO: throttle calls
  getTarget: function(x, y, callback) {
    requestAnimationFrame(function() {
      this.render( [this.viewportSize, this.viewportSize] );

      x = x/APP.width *this.viewportSize <<0;
      y = y/APP.height*this.viewportSize <<0;

      this.framebuffer.enable();
      var imageData = this.framebuffer.getPixel(x, this.viewportSize - 1 - y);
      this.framebuffer.disable();

      if (imageData === undefined) {
        callback(undefined);
        return;
      }
      var color = imageData[0] | (imageData[1]<<8) | (imageData[2]<<16);

      callback(this.idMapping[color]);
    }.bind(this));
  },

  idToColor: function(id) {
    var index = this.idMapping.indexOf(id);
    if (index === -1) {
      this.idMapping.push(id);
      index = this.idMapping.length-1;
    }
    return [
      ( index        & 0xff) / 255,
      ((index >>  8) & 0xff) / 255,
      ((index >> 16) & 0xff) / 255
    ];
  },

  destroy: function() {}
};


var Sun = {

  setDate: function(date) {
    var pos = suncalc(date, APP.position.latitude, APP.position.longitude);
    this.direction = [
      -Math.sin(pos.azimuth) * Math.cos(pos.altitude),
       Math.cos(pos.azimuth) * Math.cos(pos.altitude),
                               Math.sin(pos.altitude)
    ];

    var rotationInDeg = pos.azimuth / (Math.PI/180);
    var tiltInDeg     = 90 - pos.altitude / (Math.PI/180);

    this.viewMatrix = new GLX.Matrix()
      .rotateZ(rotationInDeg)
      .rotateX(tiltInDeg)
      .translate(0, 0, -5000)
      .scale(1, -1, 1); // flip Y
  },
  
  updateView: function(coveredGroundVertices) {
    // TODO: could parts be pre-calculated?
    this.projMatrix = getCoveringOrthoProjection(
      substituteZCoordinate(coveredGroundVertices, 0.0).concat(substituteZCoordinate(coveredGroundVertices,SHADOW_MAP_MAX_BUILDING_HEIGHT)),
      this.viewMatrix,
      1000,
      7500
    );

    this.viewProjMatrix = new GLX.Matrix(GLX.Matrix.multiply(this.viewMatrix, this.projMatrix));
  }
};


render.SkyWall = function() {
    
  this.v1 = this.v2 = this.v3 = this.v4 = [false, false, false];
  this.updateGeometry( [[0,0,0], [0,0,0], [0,0,0], [0,0,0]]);

  this.shader = new GLX.Shader({
    vertexShader: Shaders.skywall.vertex,
    fragmentShader: Shaders.skywall.fragment,
    shaderName: 'sky wall shader',
    attributes: ['aPosition', 'aTexCoord'],
    uniforms: ['uAbsoluteHeight', 'uMatrix', 'uTexIndex', 'uFogColor']
  });
  
  this.floorShader = new GLX.Shader({
    vertexShader:   Shaders.flatColor.vertex,
    fragmentShader: Shaders.flatColor.fragment,
    attributes: ['aPosition'],
    uniforms:   ['uColor', 'uMatrix']
  });
  
  Activity.setBusy();
  var url = APP.baseURL + '/skydome.jpg';
  this.texture = new GLX.texture.Image().load(url, function(image) {
    Activity.setIdle();
    if (image) {
      this.isReady = true;
    }
  }.bind(this));
};

render.SkyWall.prototype.updateGeometry = function(viewTrapezoid) {
  
  var v1 = [viewTrapezoid[3][0], viewTrapezoid[3][1], 0.0];
  var v2 = [viewTrapezoid[2][0], viewTrapezoid[2][1], 0.0];
  var v3 = [viewTrapezoid[2][0], viewTrapezoid[2][1], SKYWALL_HEIGHT];
  var v4 = [viewTrapezoid[3][0], viewTrapezoid[3][1], SKYWALL_HEIGHT];

  if ( equal3(v1, this.v1) &&
       equal3(v2, this.v2) &&
       equal3(v3, this.v3) &&
       equal3(v4, this.v4))
     return; //still up-to-date

  this.v1 = v1;
  this.v2 = v2;
  this.v3 = v3;
  this.v4 = v4;

  if (this.vertexBuffer)
    this.vertexBuffer.destroy();

  var vertices = [].concat(v1, v2, v3, v1, v3, v4);
  this.vertexBuffer = new GLX.Buffer(3, new Float32Array(vertices));

  if (this.texCoordBuffer)
    this.texCoordBuffer.destroy();

  var inverse = GLX.Matrix.invert(render.viewProjMatrix.data);
  var vBottomCenter = getIntersectionWithXYPlane(0, -1, inverse);
  
  var vLeftDir = norm2(sub2( v1, vBottomCenter));
  var vRightDir =norm2(sub2( v2, vBottomCenter));
  var vLeftArc = Math.atan2(vLeftDir[1],  vLeftDir[0])/  (2*Math.PI);
  var vRightArc= Math.atan2(vRightDir[1], vRightDir[0])/ (2*Math.PI);
  
  if (vLeftArc > vRightArc)
    vRightArc +=1;
  //console.log(vLeftArc, vRightArc);

  // var visibleSkyDiameterFraction = Math.asin(dot2( vLeftDir, vRightDir))/ (2*Math.PI);
  var tcLeft = vLeftArc;//APP.rotation/360.0;
  var tcRight =vRightArc;//APP.rotation/360.0 + visibleSkyDiameterFraction*3;
        
  this.texCoordBuffer = new GLX.Buffer(2, new Float32Array(
    [tcLeft, 1, tcRight, 1, tcRight, 0, tcLeft, 1, tcRight, 0, tcLeft, 0]));
    
  v1 = [viewTrapezoid[0][0], viewTrapezoid[0][1], 1.0];
  v2 = [viewTrapezoid[1][0], viewTrapezoid[1][1], 1.0];
  v3 = [viewTrapezoid[2][0], viewTrapezoid[2][1], 1.0];
  v4 = [viewTrapezoid[3][0], viewTrapezoid[3][1], 1.0];
  
  if (this.floorVertexBuffer)
    this.floorVertexBuffer.destroy();
    
  this.floorVertexBuffer = new GLX.Buffer(3, new Float32Array(
    [].concat( v1, v2, v3, v4)));
};

render.SkyWall.prototype.render = function() {
  if (!this.isReady) {
    return;
  }

  var
    fogColor = render.fogColor,
    shader = this.shader;

  shader.enable();

  shader.setUniforms([
    ['uFogColor',       '3fv', fogColor],
    ['uAbsoluteHeight', '1f',  SKYWALL_HEIGHT*10.0]
  ]);

  shader.setUniformMatrix('uMatrix', '4fv', render.viewProjMatrix.data);

  shader.bindBuffer( this.vertexBuffer,   'aPosition');
  shader.bindBuffer( this.texCoordBuffer, 'aTexCoord');

  shader.bindTexture('uTexIndex', 0, this.texture);

  GL.drawArrays(GL.TRIANGLES, 0, this.vertexBuffer.numItems);
  shader.disable();
  

  this.floorShader.enable();
  this.floorShader.setUniform('uColor', '4fv', fogColor.concat([1.0]));
  this.floorShader.setUniformMatrix('uMatrix', '4fv', render.viewProjMatrix.data);
  this.floorShader.bindBuffer(this.floorVertexBuffer, 'aPosition');
  GL.drawArrays(GL.TRIANGLE_FAN, 0, this.floorVertexBuffer.numItems);
  
  this.floorShader.disable();
  
};

render.SkyWall.prototype.destroy = function() {
  this.texture.destroy();
};



render.Buildings = {

  init: function() {
  
    this.shader = !render.effects.shadows ?
      new GLX.Shader({
        vertexShader: Shaders.buildings.vertex,
        fragmentShader: Shaders.buildings.fragment,
        shaderName: 'building shader',
        attributes: ['aPosition', 'aTexCoord', 'aColor', 'aFilter', 'aNormal', 'aId'],
        uniforms: [
          'uModelMatrix',
          'uViewDirOnMap',
          'uMatrix',
          'uNormalTransform',
          'uLightColor',
          'uLightDirection',
          'uLowerEdgePoint',
          'uFogDistance',
          'uFogBlurDistance',
          'uHighlightColor',
          'uHighlightId',
          'uTime',
          'uWallTexIndex'
        ]
      }) : new GLX.Shader({
        vertexShader: Shaders['buildings.shadows'].vertex,
        fragmentShader: Shaders['buildings.shadows'].fragment,
        shaderName: 'quality building shader',
        attributes: ['aPosition', 'aTexCoord', 'aColor', 'aFilter', 'aNormal', 'aId'],
        uniforms: [
          'uFogDistance',
          'uFogBlurDistance',
          'uHighlightColor',
          'uHighlightId',
          'uLightColor',
          'uLightDirection',
          'uLowerEdgePoint',
          'uMatrix',
          'uModelMatrix',
          'uSunMatrix',
          'uShadowTexIndex',
          'uShadowTexDimensions',
          'uTime',
          'uViewDirOnMap',
          'uWallTexIndex'
        ]
    });
    
    this.wallTexture = new GLX.texture.Image();
    this.wallTexture.color( [1,1,1]);
    this.wallTexture.load( BUILDING_TEXTURE);
  },

  render: function(depthFramebuffer) {

    var shader = this.shader;
    shader.enable();

    if (this.showBackfaces) {
      GL.disable(GL.CULL_FACE);
    }

    shader.setUniforms([
      ['uFogDistance',     '1f',  render.fogDistance],
      ['uFogBlurDistance', '1f',  render.fogBlurDistance],
      ['uHighlightColor',  '3fv', this.highlightColor || [0, 0, 0]],
      ['uHighlightId',     '3fv', this.highlightId || [0, 0, 0]],
      ['uLightColor',      '3fv', [0.5, 0.5, 0.5]],
      ['uLightDirection',  '3fv', Sun.direction],
      ['uLowerEdgePoint',  '2fv', render.lowerLeftOnMap],
      ['uTime',            '1f',  Filter.getTime()],
      ['uViewDirOnMap',    '2fv', render.viewDirOnMap]
    ]);

    if (!render.effects.shadows) {
      shader.setUniformMatrix('uNormalTransform', '3fv', GLX.Matrix.identity3().data);
    }

    shader.bindTexture('uWallTexIndex', 0, this.wallTexture);
    
    if (depthFramebuffer) {
      shader.setUniform('uShadowTexDimensions', '2fv', [depthFramebuffer.width, depthFramebuffer.height]);
      shader.bindTexture('uShadowTexIndex', 1, depthFramebuffer.depthTexture);
    }

    var
      dataItems = data.Index.items,
      item,
      modelMatrix;

    for (var i = 0, il = dataItems.length; i < il; i++) {
      // no visibility check needed, Grid.purge() is taking care

      item = dataItems[i];

      if (APP.zoom < item.minZoom || APP.zoom > item.maxZoom || !(modelMatrix = item.getMatrix())) {
        continue;
      }

      shader.setUniformMatrices([
        ['uModelMatrix', '4fv', modelMatrix.data],
        ['uMatrix',      '4fv', GLX.Matrix.multiply(modelMatrix, render.viewProjMatrix)]
      ]);
      
      if (render.effects.shadows) {
        shader.setUniformMatrix('uSunMatrix', '4fv', GLX.Matrix.multiply(modelMatrix, Sun.viewProjMatrix));
      }

      shader.bindBuffer(item.vertexBuffer,   'aPosition');
      shader.bindBuffer(item.texCoordBuffer, 'aTexCoord');
      shader.bindBuffer(item.normalBuffer,   'aNormal');
      shader.bindBuffer(item.colorBuffer,    'aColor');
      shader.bindBuffer(item.filterBuffer,   'aFilter');
      shader.bindBuffer(item.idBuffer,       'aId');

      GL.drawArrays(GL.TRIANGLES, 0, item.vertexBuffer.numItems);
    }

    if (this.showBackfaces) {
      GL.enable(GL.CULL_FACE);
    }

    shader.disable();
  },

  destroy: function() {}
};


/* This object renders the shadow for the map layer. It only renders the shadow,
 * not the map itself. The intended use for this class is as a blended overlay
 * so that the map can be rendered independently from the shadows cast on it.
 */

render.MapShadows = {

  init: function() {
    this.shader = new GLX.Shader({
      vertexShader: Shaders['basemap.shadows'].vertex,
      fragmentShader: Shaders['basemap.shadows'].fragment,
      shaderName: 'map shadows shader',
      attributes: ['aPosition', 'aNormal'],
      uniforms: [
        'uModelMatrix',
        'uViewDirOnMap',
        'uMatrix',
        'uDirToSun',
        'uLowerEdgePoint',
        'uFogDistance',
        'uFogBlurDistance',
        'uShadowTexDimensions', 
        'uShadowStrength',
        'uShadowTexIndex',
        'uSunMatrix',
      ]
    });
    
    this.mapPlane = new mesh.MapPlane();
  },

  render: function(Sun, depthFramebuffer, shadowStrength) {
    var shader = this.shader;
    shader.enable();

    if (this.showBackfaces) {
      GL.disable(GL.CULL_FACE);
    }

    shader.setUniforms([
      ['uDirToSun', '3fv', Sun.direction],
      ['uViewDirOnMap', '2fv',   render.viewDirOnMap],
      ['uLowerEdgePoint', '2fv', render.lowerLeftOnMap],
      ['uFogDistance', '1f', render.fogDistance],
      ['uFogBlurDistance', '1f', render.fogBlurDistance],
      ['uShadowTexDimensions', '2fv', [depthFramebuffer.width, depthFramebuffer.height] ],
      ['uShadowStrength', '1f', shadowStrength]
    ]);

    shader.bindTexture('uShadowTexIndex', 0, depthFramebuffer.depthTexture);

    var item = this.mapPlane;
    if (APP.zoom < item.minZoom || APP.zoom > item.maxZoom) {
      return;
    }

    var modelMatrix;
    if (!(modelMatrix = item.getMatrix())) {
      return;
    }

    shader.setUniformMatrices([
      ['uModelMatrix', '4fv', modelMatrix.data],
      ['uMatrix',      '4fv', GLX.Matrix.multiply(modelMatrix, render.viewProjMatrix)],
      ['uSunMatrix',   '4fv', GLX.Matrix.multiply(modelMatrix, Sun.viewProjMatrix)]
    ]);

    shader.bindBuffer(item.vertexBuffer, 'aPosition');
    shader.bindBuffer(item.normalBuffer, 'aNormal');

    GL.drawArrays(GL.TRIANGLES, 0, item.vertexBuffer.numItems);

    if (this.showBackfaces) {
      GL.enable(GL.CULL_FACE);
    }

    shader.disable();
  },

  destroy: function() {}
};


render.Basemap = {

  init: function() {
    this.shader = new GLX.Shader({
      vertexShader: Shaders.basemap.vertex,
      fragmentShader: Shaders.basemap.fragment,
      shaderName: 'basemap shader',
      attributes: ['aPosition', 'aTexCoord'],
      uniforms: ['uModelMatrix', 'uMatrix', 'uTexIndex', 'uFogDistance', 'uFogBlurDistance', 'uLowerEdgePoint', 'uViewDirOnMap']
    });
  },

  render: function() {
    var layer = APP.basemapGrid;

    if (!layer) {
      return;
    }

    if (APP.zoom < layer.minZoom || APP.zoom > layer.maxZoom) {
      return;
    }

    var
      shader = this.shader,
      tile,
      zoom = Math.round(APP.zoom);

    shader.enable();
    
    shader.setUniforms([
      ['uFogDistance',     '1f',  render.fogDistance],
      ['uFogBlurDistance', '1f',  render.fogBlurDistance],
      ['uViewDirOnMap',    '2fv', render.viewDirOnMap],
      ['uLowerEdgePoint',  '2fv', render.lowerLeftOnMap]
    ]);
    
    for (var key in layer.visibleTiles) {
      tile = layer.tiles[key];

      if (tile && tile.isReady) {
        this.renderTile(tile, shader);
        continue;
      }

      var parent = [tile.x/2<<0, tile.y/2<<0, zoom-1].join(',');
      if (layer.tiles[parent] && layer.tiles[parent].isReady) {
        // TODO: there will be overlap with adjacent tiles or parents of adjacent tiles!
        this.renderTile(layer.tiles[ parent ], shader);
        continue;
      }

      var children = [
        [tile.x*2,   tile.y*2,   tile.zoom+1].join(','),
        [tile.x*2+1, tile.y*2,   tile.zoom+1].join(','),
        [tile.x*2,   tile.y*2+1, tile.zoom+1].join(','),
        [tile.x*2+1, tile.y*2+1, tile.zoom+1].join(',')
      ];

      for (var i = 0; i < 4; i++) {
        if (layer.tiles[ children[i] ] && layer.tiles[ children[i] ].isReady) {
          this.renderTile(layer.tiles[ children[i] ], shader);
        }
      }
    }

    shader.disable();
  },

  renderTile: function(tile, shader) {
    var metersPerDegreeLongitude = METERS_PER_DEGREE_LATITUDE * 
                                   Math.cos(APP.position.latitude / 180 * Math.PI);

    var modelMatrix = new GLX.Matrix();
    modelMatrix.translate( (tile.longitude- APP.position.longitude)* metersPerDegreeLongitude,
                          -(tile.latitude - APP.position.latitude) * METERS_PER_DEGREE_LATITUDE, 0);

    GL.enable(GL.POLYGON_OFFSET_FILL);
    GL.polygonOffset(MAX_USED_ZOOM_LEVEL - tile.zoom,
                     MAX_USED_ZOOM_LEVEL - tile.zoom);
                     
    shader.setUniforms([
      ['uViewDirOnMap', '2fv',   render.viewDirOnMap],
      ['uLowerEdgePoint', '2fv', render.lowerLeftOnMap]
    ]);

    shader.setUniformMatrices([
      ['uModelMatrix', '4fv', modelMatrix.data],
      ['uMatrix',      '4fv', GLX.Matrix.multiply(modelMatrix, render.viewProjMatrix)]
    ]);

    shader.bindBuffer(tile.vertexBuffer,  'aPosition');
    shader.bindBuffer(tile.texCoordBuffer,'aTexCoord');
    shader.bindTexture('uTexIndex', 0, tile.texture);

    GL.drawArrays(GL.TRIANGLE_STRIP, 0, tile.vertexBuffer.numItems);
    GL.disable(GL.POLYGON_OFFSET_FILL);
  },

  destroy: function() {}
};


/* 'HudRect' renders a textured rectangle to the top-right quarter of the viewport.
   The intended use is visualize render-to-texture effects during development.
 */
render.HudRect = {

  init: function() {
  
    var geometry = this.createGeometry();
    this.vertexBuffer   = new GLX.Buffer(3, new Float32Array(geometry.vertices));
    this.texCoordBuffer = new GLX.Buffer(2, new Float32Array(geometry.texCoords));

    this.shader = new GLX.Shader({
      vertexShader: Shaders.texture.vertex,
      fragmentShader: Shaders.texture.fragment,
      shaderName: 'HUD rectangle shader',
      attributes: ['aPosition', 'aTexCoord'],
      uniforms: [ 'uMatrix', 'uTexIndex']
    });
  },

  createGeometry: function() {
    var vertices = [],
        texCoords= [];
    vertices.push(0, 0, 1E-5,
                  1, 0, 1E-5,
                  1, 1, 1E-5);
    
    vertices.push(0, 0, 1E-5,
                  1, 1, 1E-5,
                  0, 1, 1E-5);

    texCoords.push(0.5,0.5,
                   1.0,0.5,
                   1.0,1.0);

    texCoords.push(0.5,0.5,
                   1.0,1.0,
                   0.5,1.0);

    return { vertices: vertices , texCoords: texCoords };
  },

  render: function(texture) {
    var shader = this.shader;

    shader.enable();
    
    GL.uniformMatrix4fv(shader.uniforms.uMatrix, false, GLX.Matrix.identity().data);
    this.vertexBuffer.enable();

    GL.vertexAttribPointer(shader.attributes.aPosition, this.vertexBuffer.itemSize, GL.FLOAT, false, 0, 0);

    this.texCoordBuffer.enable();
    GL.vertexAttribPointer(shader.attributes.aTexCoord, this.texCoordBuffer.itemSize, GL.FLOAT, false, 0, 0);

    texture.enable(0);
    GL.uniform1i(shader.uniforms.uTexIndex, 0);

    GL.drawArrays(GL.TRIANGLES, 0, this.vertexBuffer.numItems);

    shader.disable();
  },

  destroy: function() {}
};


/* 'DepthFogNormalMap' renders the depth buffer and the scene's camera-space 
   normals and fog intensities into textures. Depth is stored as a 24bit depth 
   texture using the WEBGL_depth_texture extension, and normals and fog 
   intensities are stored as the 'rgb' and 'a' of a shared 32bit texture.
   Note that there is no dedicated shader to create the depth texture. Rather,
   the depth buffer used by the GPU in depth testing while rendering the normals
   and fog intensities is itself a texture.
*/

render.DepthFogNormalMap = function() {
  this.shader = new GLX.Shader({
    vertexShader: Shaders.fogNormal.vertex,
    fragmentShader: Shaders.fogNormal.fragment,
    shaderName: 'fog/normal shader',
    attributes: ['aPosition', 'aFilter', 'aNormal'],
    uniforms: ['uMatrix', 'uModelMatrix', 'uNormalMatrix', 'uTime', 'uFogDistance', 'uFogBlurDistance', 'uViewDirOnMap', 'uLowerEdgePoint']
  });
  
  this.framebuffer = new GLX.Framebuffer(128, 128, /*depthTexture=*/true); //dummy sizes, will be resized dynamically

  this.mapPlane = new mesh.MapPlane();
};

render.DepthFogNormalMap.prototype.getDepthTexture = function() {
  return this.framebuffer.depthTexture;
};

render.DepthFogNormalMap.prototype.getFogNormalTexture = function() {
  return this.framebuffer.renderTexture;
};


render.DepthFogNormalMap.prototype.render = function(viewMatrix, projMatrix, framebufferSize, isPerspective) {

  var
    shader = this.shader,
    framebuffer = this.framebuffer,
    viewProjMatrix = new GLX.Matrix(GLX.Matrix.multiply(viewMatrix,projMatrix));

  framebufferSize = framebufferSize || this.framebufferSize;
  framebuffer.setSize( framebufferSize[0], framebufferSize[1] );
    
  shader.enable();
  framebuffer.enable();
  GL.viewport(0, 0, framebufferSize[0], framebufferSize[1]);

  GL.clearColor(0.0, 0.0, 0.0, 1);
  GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);

  var item, modelMatrix;

  shader.setUniform('uTime', '1f', Filter.getTime());

  // render all actual data items, but also a dummy map plane
  // Note: SSAO on the map plane has been disabled temporarily
  var dataItems = data.Index.items.concat([this.mapPlane]);

  for (var i = 0; i < dataItems.length; i++) {
    item = dataItems[i];

    if (APP.zoom < item.minZoom || APP.zoom > item.maxZoom) {
      continue;
    }

    if (!(modelMatrix = item.getMatrix())) {
      continue;
    }

    shader.setUniforms([
      ['uViewDirOnMap',    '2fv', render.viewDirOnMap],
      ['uLowerEdgePoint',  '2fv', render.lowerLeftOnMap],
      ['uFogDistance',     '1f',  render.fogDistance],
      ['uFogBlurDistance', '1f',  render.fogBlurDistance]
    ]);

    shader.setUniformMatrices([
      ['uMatrix',       '4fv', GLX.Matrix.multiply(modelMatrix, viewProjMatrix)],
      ['uModelMatrix',  '4fv', modelMatrix.data],
      ['uNormalMatrix', '3fv', GLX.Matrix.transpose3(GLX.Matrix.invert3(GLX.Matrix.multiply(modelMatrix, viewMatrix)))]
    ]);
    
    shader.bindBuffer(item.vertexBuffer, 'aPosition');
    shader.bindBuffer(item.normalBuffer, 'aNormal');
    shader.bindBuffer(item.filterBuffer, 'aFilter');

    GL.drawArrays(GL.TRIANGLES, 0, item.vertexBuffer.numItems);
  }

  shader.disable();
  framebuffer.disable();

  GL.viewport(0, 0, APP.width, APP.height);
};

render.DepthFogNormalMap.prototype.destroy = function() {};


render.AmbientMap = {

  init: function() {
    this.shader = new GLX.Shader({
      vertexShader:   Shaders.ambientFromDepth.vertex,
      fragmentShader: Shaders.ambientFromDepth.fragment,
      shaderName: 'SSAO shader',
      attributes: ['aPosition', 'aTexCoord'],
      uniforms: ['uInverseTexSize', 'uNearPlane', 'uFarPlane', 'uDepthTexIndex', 'uFogTexIndex', 'uEffectStrength']
    });

    this.framebuffer = new GLX.Framebuffer(128, 128); //dummy value, size will be set dynamically
    
    this.vertexBuffer = new GLX.Buffer(3, new Float32Array([
      -1, -1, 1E-5,
       1, -1, 1E-5,
       1,  1, 1E-5,
      -1, -1, 1E-5,
       1,  1, 1E-5,
      -1,  1, 1E-5
    ]));
       
    this.texCoordBuffer = new GLX.Buffer(2, new Float32Array([
      0,0,
      1,0,
      1,1,
      0,0,
      1,1,
      0,1
    ]));
  },

  render: function(depthTexture, fogTexture, framebufferSize, effectStrength) {

    var
      shader = this.shader,
      framebuffer = this.framebuffer;

    if (effectStrength === undefined) {
      effectStrength = 1.0;
    }

    framebuffer.setSize( framebufferSize[0], framebufferSize[1] );

    GL.viewport(0, 0, framebufferSize[0], framebufferSize[1]);
    shader.enable();
    framebuffer.enable();

    GL.clearColor(1.0, 0.0, 0.0, 1);
    GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);

    shader.setUniforms([
      ['uInverseTexSize', '2fv', [1/framebufferSize[0], 1/framebufferSize[1]]],
      ['uEffectStrength', '1f',  effectStrength],
      ['uNearPlane',      '1f',  1.0], //FIXME: use actual near and far planes of the projection matrix
      ['uFarPlane',       '1f',  7500.0]
    ]);

    shader.bindBuffer(this.vertexBuffer,   'aPosition');
    shader.bindBuffer(this.texCoordBuffer, 'aTexCoord');

    shader.bindTexture('uDepthTexIndex', 0, depthTexture);
    shader.bindTexture('uFogTexIndex',   1, fogTexture);

    GL.drawArrays(GL.TRIANGLES, 0, this.vertexBuffer.numItems);

    shader.disable();
    framebuffer.disable();

    GL.viewport(0, 0, APP.width, APP.height);

  },

  destroy: function() {}
};


/* 'Overlay' renders part of a texture over the whole viewport.
   The intended use is for compositing of screen-space effects.
 */
render.Overlay = {

  init: function() {
  
    var geometry = this.createGeometry();
    this.vertexBuffer   = new GLX.Buffer(3, new Float32Array(geometry.vertices));
    this.texCoordBuffer = new GLX.Buffer(2, new Float32Array(geometry.texCoords));

    this.shader = new GLX.Shader({
      vertexShader: Shaders.texture.vertex,
      fragmentShader: Shaders.texture.fragment,
      shaderName: 'overlay texture shader',
      attributes: ['aPosition', 'aTexCoord'],
      uniforms: ['uMatrix', 'uTexIndex']
    });
  },

  createGeometry: function() {
    var vertices = [],
        texCoords= [];
    vertices.push(-1,-1, 1E-5,
                   1,-1, 1E-5,
                   1, 1, 1E-5);
    
    vertices.push(-1,-1, 1E-5,
                   1, 1, 1E-5,
                  -1, 1, 1E-5);

    texCoords.push(0.0,0.0,
                   1.0,0.0,
                   1.0,1.0);

    texCoords.push(0.0,0.0,
                   1.0,1.0,
                   0.0,1.0);

    return { vertices: vertices , texCoords: texCoords };
  },

  render: function(texture, framebufferSize) {

    var shader = this.shader;

    shader.enable();
    /* we are rendering an *overlay*, which is supposed to be rendered on top of the
     * scene no matter what its actual depth is. */
    GL.disable(GL.DEPTH_TEST);
    
    shader.setUniformMatrix('uMatrix', '4fv', GLX.Matrix.identity().data);

    shader.bindBuffer(this.vertexBuffer,  'aPosition');
    shader.bindBuffer(this.texCoordBuffer,'aTexCoord');
    shader.bindTexture('uTexIndex', 0, texture);

    GL.drawArrays(GL.TRIANGLES, 0, this.vertexBuffer.numItems);

    GL.enable(GL.DEPTH_TEST);
    shader.disable();
  },

  destroy: function() {}
};


render.OutlineMap = {

  init: function() {
    this.shader = new GLX.Shader({
      vertexShader:   Shaders.outlineMap.vertex,
      fragmentShader: Shaders.outlineMap.fragment,
      shaderName: 'outline map shader',
      attributes: ['aPosition', 'aTexCoord'],
      uniforms: ['uMatrix', 'uInverseTexSize', 'uNearPlane', 'uFarPlane', 'uDepthTexIndex', 'uFogNormalTexIndex', 'uIdTexIndex', 'uEffectStrength']
    });

    this.framebuffer = new GLX.Framebuffer(128, 128); //dummy value, size will be set dynamically
    
    this.vertexBuffer = new GLX.Buffer(3, new Float32Array([
      -1, -1, 1E-5,
       1, -1, 1E-5,
       1,  1, 1E-5,
      -1, -1, 1E-5,
       1,  1, 1E-5,
      -1,  1, 1E-5
    ]));
       
    this.texCoordBuffer = new GLX.Buffer(2, new Float32Array([
      0,0,
      1,0,
      1,1,
      0,0,
      1,1,
      0,1
    ]));
  },

  render: function(depthTexture, fogNormalTexture, idTexture, framebufferSize, effectStrength) {

    var
      shader = this.shader,
      framebuffer = this.framebuffer;

    if (effectStrength === undefined) {
      effectStrength = 1.0;
    }

    framebuffer.setSize( framebufferSize[0], framebufferSize[1] );

    GL.viewport(0, 0, framebufferSize[0], framebufferSize[1]);
    shader.enable();
    framebuffer.enable();

    GL.clearColor(1.0, 0.0, 0.0, 1);
    GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);

    GL.uniformMatrix4fv(shader.uniforms.uMatrix, false, GLX.Matrix.identity().data);

    shader.setUniforms([
      ['uInverseTexSize', '2fv', [1/framebufferSize[0], 1/framebufferSize[1]]],
      ['uEffectStrength', '1f',  effectStrength],
      ['uNearPlane',      '1f',  1.0], //FIXME: use actual near and far planes of the projection matrix
      ['uFarPlane',       '1f',  7500.0]      
    ]);

    shader.bindBuffer(this.vertexBuffer,   'aPosition');
    shader.bindBuffer(this.texCoordBuffer, 'aTexCoord');

    shader.bindTexture('uDepthTexIndex',    0, depthTexture);
    shader.bindTexture('uFogNormalTexIndex',1, fogNormalTexture);
    shader.bindTexture('uIdTexIndex',       2, idTexture);

    GL.drawArrays(GL.TRIANGLES, 0, this.vertexBuffer.numItems);

    shader.disable();
    framebuffer.disable();

    GL.viewport(0, 0, APP.width, APP.height);

  },

  destroy: function() {}
};


render.Blur = function() {
  this.shader = new GLX.Shader({
    vertexShader:   Shaders.blur.vertex,
    fragmentShader: Shaders.blur.fragment,
    shaderName: 'blur shader',
    attributes: ['aPosition', 'aTexCoord'],
    uniforms: ['uInverseTexSize', 'uTexIndex']
  });

  this.framebuffer = new GLX.Framebuffer(128, 128); //dummy value, size will be set dynamically
  
  this.vertexBuffer = new GLX.Buffer(3, new Float32Array([
    -1, -1, 1E-5,
     1, -1, 1E-5,
     1,  1, 1E-5,
    -1, -1, 1E-5,
     1,  1, 1E-5,
    -1,  1, 1E-5
  ]));
     
  this.texCoordBuffer = new GLX.Buffer(2, new Float32Array([
    0,0,
    1,0,
    1,1,
    0,0,
    1,1,
    0,1
  ]));
};

render.Blur.prototype.render = function(inputTexture, framebufferSize) {
  var
    shader = this.shader,
    framebuffer = this.framebuffer;

  framebuffer.setSize( framebufferSize[0], framebufferSize[1] );

  GL.viewport(0, 0, framebufferSize[0], framebufferSize[1]);
  shader.enable();
  framebuffer.enable();

  GL.clearColor(1.0, 0.0, 0, 1);
  GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);

  shader.setUniform('uInverseTexSize', '2fv', [1/framebuffer.width, 1/framebuffer.height]);
  shader.bindBuffer(this.vertexBuffer,  'aPosition');
  shader.bindBuffer(this.texCoordBuffer,'aTexCoord');
  shader.bindTexture('uTexIndex', 0, inputTexture);

  GL.drawArrays(GL.TRIANGLES, 0, this.vertexBuffer.numItems);

  shader.disable();
  framebuffer.disable();

  GL.viewport(0, 0, APP.width, APP.height);
};

render.Blur.prototype.destroy = function() 
{
  if (this.framebuffer) {
    this.framebuffer.destroy();
  }
};


var basemap = {};


basemap.Tile = function(x, y, zoom) {
  this.x = x;
  this.y = y;
  this.latitude = tile2lat(y, zoom);
  this.longitude= tile2lon(x, zoom);
  this.zoom = zoom;
  this.key = [x, y, zoom].join(',');

  // note: due to the Mercator projection the tile width in meters is equal
  //       to the tile height in meters.
  var size = getTileSizeInMeters( this.latitude, zoom);
  
  var vertices = [
    size, size, 0,
    size,    0, 0,
       0, size, 0,
       0,    0, 0
  ];

  var texCoords = [
    1, 0,
    1, 1,
    0, 0,
    0, 1
  ];

  this.vertexBuffer = new GLX.Buffer(3, new Float32Array(vertices));
  this.texCoordBuffer = new GLX.Buffer(2, new Float32Array(texCoords));
};

basemap.Tile.prototype = {
  load: function(url) {
    Activity.setBusy();
    this.texture = new GLX.texture.Image().load(url, function(image) {
      Activity.setIdle();
      if (image) {
        this.isReady = true;
        /* The whole texture will be mapped to fit the whole tile exactly. So
         * don't attempt to wrap around the texture coordinates. */
        GL.bindTexture(GL.TEXTURE_2D, this.texture.id);
        GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_S, GL.CLAMP_TO_EDGE);
        GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_T, GL.CLAMP_TO_EDGE);
      }
    }.bind(this));
  },

  destroy: function() {
    this.vertexBuffer.destroy();
    this.texCoordBuffer.destroy();
    if (this.texture) {
      this.texture.destroy();
    }
  }
};
}());
//# sourceMappingURL=OSMBuildings.debug.js.map
var config = {

  appName: 'Brick',
  appVersion: '0.2.0',

  editComment: 'Brick edit',

  map: {
    position: { latitude: 52.52179, longitude: 13.39503 },
    zoom: 17,
    maxZoom: 18,
    basemapUrl: 'https://{s}.tiles.mapbox.com/v3/osmbuildings.kbpalbpk/{z}/{x}/{y}.png'
  },

  osmapi: {
    endpoint: 'https://www.openstreetmap.org',
    auth: {
      landingPage: 'auth.html',
      consumerKey: 'QeKxsLrW2630aRNeGNglTee4tj1PUg9Czh6ZZ7S2',
      secret: 'C9g9MAaJHEkif59p2fKwNPFoMld3V5rgTUXOh0qp'
    }
  },

  editor: {
    fields: {
      'building': [
        'yes',
        'apartments',
        'barn',
        'bunker',
        'cabin',
        'cathedral',
        'chapel',
        'church',
        'college',
        'commercial',
        'construction',
        'detached',
        'dormitory',
        'entrance',
        'garage',
        'garages',
        'greenhouse',
        'hospital',
        'hotel',
        'house',
        'hut',
        'industrial',
        'kindergarten',
        'public',
        'residential',
        'retail',
        'roof',
        'school',
        'shed',
        'stable',
        'static_caravan',
        'terrace',
        'train_station',
        'university',
        'warehouse'
      ],

      'building:use': [
        '',
        'apartments',
        'barn',
        'bunker',
        'cabin',
        'cathedral',
        'chapel',
        'church',
        'college',
        'commercial',
        'construction',
        'detached',
        'dormitory',
        'entrance',
        'garage',
        'garages',
        'greenhouse',
        'hospital',
        'hotel',
        'house',
        'hut',
        'industrial',
        'kindergarten',
        'public',
        'residential',
        'retail',
        'roof',
        'school',
        'shed',
        'stable',
        'static_caravan',
        'terrace',
        'train_station',
        'university'
      ],

      'roof:shape': [
        '',
        'flat',
        'skillion',
        'gabled',
        'half-hipped',
        'hipped',
        'pyramidal',
        'gambrel',
        'mansard',
        'dome',
        'onion',
        'round',
        'saltbox'
      ]
     }
   }
};


var Events = (function() {

  function constructor() {
    this.listeners = {};
  }

  var prototype = constructor.prototype;

  prototype.on = function(type, fn) {
    (this.listeners[type] || (this.listeners[type] = [])).push(fn);
  };

  prototype.off = function(type, fn) {
    if (this.listeners[type] === undefined) {
      return;
    }

    this.listeners[type] = this.listeners[type].filter(function(item) {
      return item[0] !== fn;
    });
  };

  prototype.emit = function(type, payload) {
    if (this.listeners[type] === undefined) {
      return;
    }
    setTimeout(function() {
      var typeListeners = this.listeners[type];
      for (var i = 0, len = typeListeners.length; i < len; i++) {
        typeListeners[i](payload);
      }
    }.bind(this), 0);
  };

  prototype.destroy = function() {
    this.listeners = {};
  };

  return constructor;

}());

var Data = {};

(function() {

  var yardToMeter = 0.9144;
  var footToMeter = 0.3048;
  var inchToMeter = 0.0254;

  var baseMaterials = {
    asphalt: 'tar_paper',
    bitumen: 'tar_paper',
    block: 'stone',
    bricks: 'brick',
    glas: 'glass',
    glassfront: 'glass',
    grass: 'plants',
    masonry: 'stone',
    granite: 'stone',
    panels: 'panel',
    paving_stones: 'stone',
    plastered: 'plaster',
    rooftiles: 'roof_tiles',
    roofingfelt: 'tar_paper',
    sandstone: 'stone',
    sheet: 'canvas',
    sheets: 'canvas',
    shingle: 'tar_paper',
    shingles: 'tar_paper',
    slates: 'slate',
    steel: 'metal',
    tar: 'tar_paper',
    tent: 'canvas',
    thatch: 'plants',
    tile: 'roof_tiles',
    tiles: 'roof_tiles'
  };

  function getMaterial(str) {
    if (str === undefined) {
      return;
    }
    return baseMaterials[str] || str;
  }

  function getMeters(str) {
    if (str === undefined) {
      return;
    }
    var value = parseFloat(str);
    // no units given
    if (value == str) {
      return Math.round(value);
    }
    if (~str.indexOf('m')) {
      return Math.round(value);
    }
    if (~str.indexOf('yd')) {
      return Math.round(value*yardToMeter);
    }
    if (~str.indexOf('ft')) {
      return Math.round(value*footToMeter);
    }
    if (~str.indexOf('\'')) {
      var footInch = str.split('\'');
      return Math.round(footInch[0]*footToMeter + footInch[1]*inchToMeter);
    }
  }

  function getLevels(str) {
    if (str === undefined) {
      return;
    }
    return parseInt(str, 10);
  }

  Data.read = function(doc) {
    var data = JXON.build(doc.children[0]);

    var nodeIndex = {};
    if (data.node) {
      for (var i = 0; i < data.node.length; i++) {
        nodeIndex[ data.node[i]['@id'] ] = [ data.node[i]['@lon'], data.node[i]['@lat'] ];
      }
    }

    var
      way = data.way || {},
      tagList = way.tag,
      tags = {};
    if (tagList) {
      for (var i = 0; i < tagList.length; i++) {
        tags[ tagList[i]['@k'] ] = tagList[i]['@v'];
      }
    }

    var
      nodeList = way.nd,
      nodes = [];
    if (nodeList) {
      for (var i = 0, il = nodeList.length; i<il; i++) {
        nodes.push(nodeIndex[ nodeList[i]['@ref'] ]);
      }
    }

    var id = way['@id'];

    tags['height'] = getMeters(tags['height'] || tags['building:height']);
    delete tags['building:height'];

    tags['building:levels'] = getLevels(tags['levels'] || tags['building:levels']);
    delete tags['levels'];

    tags['min_height'] = getMeters(tags['min_height'] || tags['building:min_height']);
    delete tags['building:min_height'];

    tags['min_level']  = getLevels(tags['min_level']  || tags['building:min_level']);
    delete tags['building:min_level'];

    // wall material
    tags['building:material'] = getMaterial(tags['building:material'] || tags['building:facade:material'] || tags['building:cladding']);

    // wall color
    tags['building:colour'] = tags['building:color'] || tags['building:colour'];
    delete tags['building:color'];

    // roof material
    tags['roof:material'] = getMaterial(tags['roof:material'] || tags['building:roof:material']);
    delete tags['building:roof:material'];

    // roof color
    tags['roof:colour'] = tags['roof:color'] || tags['roof:colour'] || tags['building:roof:color'] || tags['building:roof:colour'];
    delete tags['roof:color'];
    delete tags['building:roof:color'];
    delete tags['building:roof:colour'];

    tags['roof:shape'] = tags['roof:shape'] || tags['building:roof:shape'];
    delete tags['building:roof:shape'];
    if (tags['roof:shape'] === 'pyramidal') {
      tags['roof:shape'] = 'pyramid';
    }

    tags['roof:height'] = getMeters(tags['roof:height'] || tags['building:roof:height']);
    delete tags['building:roof:height'];

    tags['roof:levels'] = getLevels(tags['roof:levels'] || tags['building:roof:levels']);
    delete tags['building:roof:levels'];

    return { id:id, tags:tags, nodes:nodes, data:data };
  };

  Data.write = function(data, tags) {
    var tagList = [];
    for (var k in tags) {
      if (tags[k] !== undefined && tags[k] !== 'undefined') {
        tagList.push({ '@k':k, '@v':tags[k] });
      } 
    }

    data.way.tag = tagList;
    return data;
  };

}());


var App = new Events();

$(function() {

  document.querySelector('.panel').addEventListener('touchstart', function(e) {
    e.stopPropagation();
  });

  User.init();
  Map.init();
  Editor.init();
  Position.start();

  App.on('FEATURE_SELECT', function() {
    $('#intro').hide();
    $('#editor').fadeIn();
  });

  // App.on('FEATURE_LOAD', function(feature) {
  //   if (history.pushState) {
  //     history.pushState(null, null, baseURL + 'feature/' + feature.id);
  //   }
  // });

  // App.on('MAP_CHANGE', function(state) {
  //   $('#intro-link-ideditor').attr('href', 'https://www.openstreetmap.org/edit#map=' + state.zoom + '/' + state.position.latitude + '/' + state.position.longitude);
  // });
});


var State = {};

(function() {

  // http://mathiasbynens.be/notes/localstorage-pattern#comment-9
  var storage;
  try {
    storage = localStorage;
  } catch (ex) {
    storage = (function() {
      var data = {};
      return {
        getItem: function(k) { return JSON.parse(data[k]); },
        setItem: function(k, v) { data[k] = JSON.stringify(v); },
        removeItem: function(k) { delete data[k]; }
      };
    }());
  }

  State.set = function(k, v) {
    storage.setItem(k, JSON.stringify(v));
  };

  State.get = function(k) {
    return JSON.parse(storage.getItem(k));
  };

  // function isStorable(n) {
  //   return typeof n !== 'object' && typeof n !== 'function' && n !== undefined && n !== null && n !== '';
  // }

}());


var OSMAPI = {};

(function() {

  var auth = osmAuth({
    url: config.osmapi.endpoint,
    landing: config.osmapi.auth.landingPage,
    oauth_consumer_key: config.osmapi.auth.consumerKey,
    oauth_secret: config.osmapi.auth.secret
  });

  function createChangeset(comment) {
    return {
      osm: {
        changeset: {
          tag: [
            { '@k':'created_by', '@v':config.appName },
            { '@k':'comment', '@v':comment }
          ],
          '@version': 0.6,
          '@generator': config.appName
        }
      }
    };
  }

  function nest(x, order) {
    var groups = {};
    for (var i = 0; i < x.length; i++) {
      var tagName = Object.keys(x[i])[0];
      if (!groups[tagName]) {
        groups[tagName] = [];
      }
      groups[tagName].push(x[i][tagName]);
    }
    var ordered = {};
    order.forEach(function(o) {
      if (groups[o]) {
        ordered[o] = groups[o];
      }
    });
    return ordered;
  }

  function itemToJXON(item, changesetId) {
    var res, data;

    if (item.relation) {
      data = item.relation;
      res = {
        relation: {
          '@id': data['@id'],
          '@version': data['@version'] || 0,
          member: data.member,
          tag: data.tag
        }
      };
    }

    if (item.way) {
      data = item.way;
      res = {
        way: {
          '@id': data['@id'],
          '@version': data['@version'] || 0,
          nd: data.nd,
          tag: data.tag
        }
      };
    }

    if (!res) {
      return;
    }

    if (changesetId) {
      res.way['@changeset'] = changesetId;
    }

    return res;
  }

  // Generate an OSM change (http://wiki.openstreetmap.org/wiki/OsmChange)
  function createChange(item, changesetId) {
    return {
      osmChange: {
        '@version': 0.6,
        '@generator': config.appName,
        modify: nest([itemToJXON(item, changesetId)], ['node', 'way', 'relation']),
      }
    };
  }

  OSMAPI.readItem = function(itemType, itemId) {
    return $.ajax('https://api.openstreetmap.org/api/0.6/'+ itemType +'/'+ itemId +'/full');
  };

  OSMAPI.writeItem = function(item, comment) {
    var promise = $.Deferred();

    auth.xhr({
      method: 'PUT',
      path: '/api/0.6/changeset/create',
      options: {
        header: {
          'Content-Type':'text/xml'
        }
      },
      content: JXON.unbuild(createChangeset(comment))
    }, function(err, changesetId) {
      if (err) {
        promise.reject(err);
        return;
      }
      auth.xhr({
        method: 'POST',
        path: '/api/0.6/changeset/' + changesetId + '/upload',
        options: {
          header: {
            'Content-Type':'text/xml'
          }
        },
        content: JXON.unbuild(createChange(item, changesetId))
      }, function(err) {
        if (err) {
          promise.reject(err);
          return;
        }
        auth.xhr({
          method: 'PUT',
          path: '/api/0.6/changeset/' + changesetId + '/close'
        }, function(err) {
          if (err) {
            promise.resolve(err);
          } else {
            promise.resolve(changesetId);
          }
        });
      });
    });

    return promise;
  };

  OSMAPI.isLoggedIn = function() {
    return auth.authenticated();
  };

  OSMAPI.login = function() {
    auth.authenticate(function() {
      if (!auth.authenticated()) {
        return;
      }
      App.emit('LOGIN');
    });
  };

  OSMAPI.logout = function() {
    auth.logout();
    App.emit('LOGOUT');
  };

  OSMAPI.getUserInfo = function() {
    var promise = $.Deferred();
    auth.xhr({
      method: 'GET',
      accept: 'application/json',
      path: '/api/0.6/user/details.json'
    }, function(err, doc) {
      var user = JXON.build(doc.getElementsByTagName('user')[0]);
      promise.resolve(user);
    });
    return promise;
  };

}());


var Picker = (function() {

  function constructor(srcField, pickerDom) {
    Events.call(this);

    var
      $srcField = $(srcField),
      $pickerDom = $(pickerDom),
      $options = $pickerDom.find('.picker-option');

    $pickerDom.find('button').click(function() {
      $pickerDom.hide();
      this.emit('HIDE');
    }.bind(this));

    $options.click(function(e) {
      var $target = $(e.target);
      if (!$target.is('.picker-option')) {
        $target = $target.parent('.picker-option');
      }
      var value = $target.data('value');
      $srcField.val(value);
      $pickerDom.hide();
      this.emit('SELECT', value);
    }.bind(this));

    $srcField.focus(function(e) {
      $srcField.blur();
      $pickerDom.show();

      $options.each(function(index, option) {
        if ($(option).data('value') === $srcField.val()) {
          $(option).addClass('selected');
        } else {
          $(option).removeClass('selected');
        }
      });

      this.emit('SHOW');
    }.bind(this));
  }

  var prototype = constructor.prototype = Object.create(Events.prototype);

  return constructor;

}());


var Editor = {};

(function() {

  var configFields = config.editor.fields;

  var isDirty = false;
  var loadedFeature;

  Editor.init = function() {

    // populate select fields

    $('#editor select').each(function(index, input) {
      var
        options = configFields[input.name],
        html = '';
      if (options) {
        for (var i = 0, il = options.length; i < il; i++) {
          html += '<option'+(!i ? ' selected' : '')+'>'+ options[i] +'</option>\n';
        }
        $(input).html(html);
      }
    });

    // initialize pickers

    var buildingColorPicker = new Picker($('#editor *[name=building\\:colour]'), $('#building-color-picker'));
    buildingColorPicker.on('SELECT', function(value) {
      $('#editor *[name=building\\:colour]').val(value).css('border-right-color', (value || 'transparent')).trigger('keyup');
    });

    var roofColorPicker = new Picker($('#editor *[name=roof\\:colour]'), $('#roof-color-picker'));
    roofColorPicker.on('SELECT', function(value) {
      $('#editor *[name=roof\\:colour]').val(value).css('border-right-color', (value || 'transparent')).trigger('keyup');
    });

    var roofShapePicker = new Picker($('#editor *[name=roof\\:shape]'), $('#roof-shape-picker'));
    roofShapePicker.on('SELECT', function(value) {
      $('#editor *[name=roof\\:shape]').trigger('keyup');
    });

    // toggle buttons

    toggleButtons();

    // event handlers

    App.on('LOGIN', toggleButtons);
    App.on('LOGOUT', toggleButtons);
    App.on('FEATURE_SELECT', onFeatureSelect);

    $('#editor select').change(onInputChange);
    $('#editor input').keyup(onInputChange);
    $('#editor input').change(onInputChange);

    $('#editor-button-submit').click(function() {
      OSMAPI.writeItem(Data.write(loadedFeature.data, getValues()), config.editComment)
        .done(function() {
          // TODO update loadedItem
          // TODO reset view
          isDirty = false;
          $('#editor-button-submit').attr('disabled', true);
          $('#editor-button-cancel').attr('disabled', true);

          // restore map view
          App.emit('FEATURE_RESET');
        });
    });

    $('#editor-button-cancel').click(function() {
      App.emit('FEATURE_RESET');
      setValues(loadedFeature);
    });
  };

  function toggleButtons() {
    if (OSMAPI.isLoggedIn()) {
      $('#editor-button-submit').show();
    } else {
      $('#editor-button-submit').hide();
    }
  }

  function onInputChange(e) {
    if (!isDirty) {
      isDirty = true;
      $('#editor-button-submit').attr('disabled', false);
      $('#editor-button-cancel').attr('disabled', false);
    }

    App.emit('FEATURE_CHANGE', { id:loadedFeature.id, tags:getValues(), nodes:loadedFeature.nodes, data:loadedFeature.data });
  }

  function onFeatureSelect(featureId) {
    // for now, we enable simple objects only
    if (featureId[0] !== 'w') {
      return;
    }

    var
      types = { n:'node', w:'way', r:'relation' },
      itemType = types[ featureId[0] ],
      itemId = featureId.replace(/^\D/, '');

    OSMAPI.readItem(itemType, itemId)
      .done(function(doc) {
        setValues(Data.read(doc));
      });
  }

  function setValues(feature) {
    isDirty = false;
    $('#editor-button-submit').attr('disabled', true);
    $('#editor-button-cancel').attr('disabled', true);

    loadedFeature = feature;

    var
      nameWithId = feature ? 'Building ' + feature.id : 'Select building',
      tags = feature ? feature.tags : {};

    document.title = (tags.name ? tags.name + ' - ' : '') + config.appName;
    $('#editor h1').text(tags.name ? tags.name : nameWithId);

    var value;
    $('#editor input, #editor select').each(function(index, input) {
      value = tags[input.name];
      switch(input.name) {
        case 'building':
          $(input).find('option').filter(function() {
            return $(this).html() === (value || 'yes');
          }).prop('selected', true);
          break;

        case 'roof:shape':
          input.value = value || '';
          break;

        case 'building:levels':
        case 'roof:levels':
          input.value = (value !== undefined ? value : '');
          break;

        case 'building:colour':
          input.value = value || '';
          $('#editor *[name=building\\:colour]').css('border-right-color', (value || 'transparent'));
          break;

        case 'roof:colour':
          input.value = value || '';
          $('#editor *[name=roof\\:colour]').css('border-right-color', (value || 'transparent'));
          break;
      }
    });

    $('#editor .info[name=height]').text(tags['height'] !== undefined ? '(' + tags['height'] + 'm)' : '');
    $('#editor .info[name=roof\\:height]').text(tags['roof:height'] !== undefined ? '(' + tags['roof:height'] + 'm)' : '');

    $('#editor .info[name=building\\:material]').text(tags['building:material'] !== undefined ? '(material: ' + tags['building:material'] + ')' : '');
    $('#editor .info[name=roof\\:material]').text(tags['roof:material'] !== undefined ? '(material: ' + tags['roof:material'] + ')' : '');
  }

  function getValues() {
    var tags = loadedFeature.tags;

    $('#editor input, #editor select').each(function(index, input) {
      switch(input.name) {
        case 'building':
          tags[input.name] = $(input).find('option:selected').val();
          break;
        case 'roof:shape':
        case 'building:levels':
        case 'roof:levels':
        case 'building:colour':
        case 'roof:colour':
          tags[input.name] = input.value;
          break;
      }
    });

    return tags;
  }

}());


var User = {};

(function() {

  function onLogin() {
    // OSMAPI.getUserInfo().done(function(user) {
    //   console.log('user', user);
    // });
    $('#login').hide();
  }

  function onLogout() {
    $('#login').show();
  }

  App.on('LOGIN', onLogin);
  App.on('LOGOUT', onLogout);

  User.init = function() {
    if (OSMAPI.isLoggedIn()) {
      onLogin();
    } else {
      onLogout();
    }

    $('#login-button-in').click(function(e) {
      e.stopPropagation();
      OSMAPI.login();
    });

    // $('#login-button-out').click(function(e) {
    //   e.stopPropagation();
    //   OSMAPI.logout();
    // });
  };

}());


var Map = new Events();

(function() {

  var
    buildingLayer,
    selectedBuilding,
    highlightedBuildingId;

  Map.init = function() {
    var position, p;
    if ((p = State.get('position'))) {
      position = p;
    } else {
      position = config.map.position;
    }

    var zoom = State.get('zoom') || config.map.zoom;

    // if nothing shows up, saving State has failed
    // position = config.map.position;
    // var zoom = config.map.zoom;

    var map = new OSMBuildings({
      position: position,
      zoom: zoom,
      tilt: 30,
      baseURL: 'assets', // not an ideal place, but good for now
      minZoom: 16,
      maxZoom: config.map.maxZoom+2,
      effects: ['shadows'],
      attribution: '© Data <a href="https://openstreetmap.org/copyright/">OpenStreetMap</a> · © Map <a href="https://mapbox.com/">Mapbox</a> · © 3D <a href="https://osmbuildings.org/copyright/">OSM Buildings</a>'
    }).appendTo(document.getElementById('map'));

    map.addMapTiles(config.map.basemapUrl);

    map.on('loadfeature', function(e) {
      var feature = e.detail;

      if (!feature.properties) {
        feature.properties = {};
      }

      // not editable for now
      if (feature.id[0] !== 'w' || feature.properties.relationId) {
        feature.properties.color = '#ffffff';
        feature.properties.roofColor = '#ffffff';
      } else {
        /*
        // is well tagged
        if (
          (feature.properties.levels || feature.properties.height) &&
          (feature.properties.color || feature.properties.wallColor || feature.properties.material) &&
          (feature.properties.roofShape) &&
          (feature.properties.roofLevels || feature.properties.roofHeight) &&
          (feature.properties.roofColor || feature.properties.roofMaterial)
        ) {} else {
          // poorly tagged
          feature.properties.color = '#ffcc00';
          feature.properties.roofColor = '#ffcc00';
        }
        */
      }

      return feature;
    });

    buildingLayer = map.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json', { fixedZoom: 15 });

    map.on('change', function() {
      var
        position = map.getPosition(),
        zoom = map.getZoom(),
        rotation = map.getRotation(),
        tilt = map.getTilt();
      State.set('latitude',  position.latitude.toFixed(5));
      State.set('longitude', position.longitude.toFixed(5));
      State.set('zoom', zoom);

      State.set('rotation', rotation.toFixed(5));
      State.set('tilt', tilt.toFixed(5));

      App.emit('MAP_CHANGE', { position:position, zoom:zoom, rotation:rotation, tilt:tilt });
    });

    map.on('pointerdown', function(e) {
      // no mouse interaction, if an object is currently edited
      if (selectedBuilding) {
        return;
      }
      map.getTarget(e.detail.x, e.detail.y, function(featureId) {
        if (featureId && featureId[0] === 'w') {
          App.emit('FEATURE_SELECT', featureId);
          map.highlight(featureId, '#ffcc00');
        }
      });
    });

    map.on('pointermove', function(e) {
      // no mouse interaction, if an object is currently edited
      if (selectedBuilding) {
        return;
      }
      map.getTarget(e.detail.x, e.detail.y, function(featureId) {
        App.emit('FEATURE_HOVER', featureId);
      });
    });

    App.on('POSITION_CHANGE', function(position) {
      map.setPosition(position);
   // map.setZoom(zoom);
    });

    App.on('FEATURE_CHANGE', function(feature) {
      if (buildingLayer) {
        buildingLayer.destroy();
        buildingLayer = undefined;
      }

      if (selectedBuilding) {
        selectedBuilding.destroy();
      }

      var tags = feature.tags;
      console.log(tags);

      // properties are converted into OSMB format
      var geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            id: 'w' + feature.id,
            properties: {
              color: tags['building:colour'],
              height: tags.height,
              levels: tags['building:levels'],
              minHeight: tags.min_height,
              minLevel: tags.min_level,
              material: tags['building:material'],
              roofMaterial: tags['roof:material'],
              roofColor: tags['roof:colour'],
              roofShape: tags['roof:shape'],
              roofHeight: tags['roof:height'],
              roofLevels: tags['roof:levels']
            },
            geometry: {
              type: 'Polygon',
              coordinates: [feature.nodes]
            }
          }
        ]
      };

      // remove selection color effect
      highlightedBuildingId = 'w' + feature.id;
      map.highlight(null);

      selectedBuilding = map.addGeoJSON(geojson, { fadeIn:false });
    });

    App.on('FEATURE_RESET', function() {
      buildingLayer = map.addGeoJSONTiles('https://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json', { fixedZoom:15, fadeIn:false });
      map.highlight(highlightedBuildingId, '#ffcc00');
      setTimeout(function() {
        selectedBuilding.destroy();
        selectedBuilding = null;
      }, 1000);
    });

    return map;
  };

}());


var Position = new Events();

(function() {

  var options = { timeout: 10000, enableHighAccuracy: false };
  var watchId;

  // Note that, if your page doesn't use HTTPS, this method will fail in
  // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
  Position.start = function() {
    if (!('geolocation' in navigator)) {
      onError({ code: 0, message: 'Geolocation not supported.' });
      return this;
    }

    watchId = navigator.geolocation.watchPosition(onSuccess, onError, options);
    // navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  };

  Position.stop = function() {
    if (navigator.geolocation && navigator.geolocation.clearWatch) {
      navigator.geolocation.clearWatch(watchId);
    }
  };

  function onError(code, message) {
    message = message || (code === 1 ? 'permission denied' : (code === 2 ? 'position unavailable' : 'timeout'));
    App.emit('POSITION_ERROR', { code:code, message:message });
  }

  function onSuccess(e) {
    App.emit('POSITION_CHANGE', e.coords);
  }

}());

}(this));