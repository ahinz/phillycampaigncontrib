goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.elem_id = cljs.core.atom.call(null,0);
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__189693 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__189674__189675 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__189674__189675))
{var G__189677__189679 = cljs.core.first.call(null,G__189674__189675);
var vec__189678__189680 = G__189677__189679;
var k__189681 = cljs.core.nth.call(null,vec__189678__189680,0,null);
var v__189682 = cljs.core.nth.call(null,vec__189678__189680,1,null);
var G__189674__189683 = G__189674__189675;

var G__189677__189684 = G__189677__189679;
var G__189674__189685 = G__189674__189683;

while(true){
var vec__189686__189687 = G__189677__189684;
var k__189688 = cljs.core.nth.call(null,vec__189686__189687,0,null);
var v__189689 = cljs.core.nth.call(null,vec__189686__189687,1,null);
var G__189674__189690 = G__189674__189685;

dom_attr.call(null,elem,k__189688,v__189689);
var temp__3698__auto____189691 = cljs.core.next.call(null,G__189674__189690);

if(cljs.core.truth_(temp__3698__auto____189691))
{var G__189674__189692 = temp__3698__auto____189691;

{
var G__189696 = cljs.core.first.call(null,G__189674__189692);
var G__189697 = G__189674__189692;
G__189677__189684 = G__189696;
G__189674__189685 = G__189697;
continue;
}
} else
{}
break;
}
} else
{}
return elem;
}
} else
{return null;
}
});
var dom_attr__189694 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__189693.call(this,elem,k);
case  3 :
return dom_attr__189694.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__189698__189699 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__189698__189699))
{var c__189700 = cljs.core.first.call(null,G__189698__189699);
var G__189698__189701 = G__189698__189699;

while(true){
var child__189702 = (cljs.core.truth_((c__189700 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__189700))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__189700))?goog.dom.createTextNode.call(null,c__189700):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__189700))?crate.core.elem_factory.call(null,c__189700):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__189700))?as_content.call(null,parent,c__189700):(cljs.core.truth_(c__189700.nodeName)?c__189700:null))))));

if(cljs.core.truth_(child__189702))
{goog.dom.appendChild.call(null,parent,child__189702);
} else
{}
var temp__3698__auto____189703 = cljs.core.next.call(null,G__189698__189701);

if(cljs.core.truth_(temp__3698__auto____189703))
{var G__189698__189704 = temp__3698__auto____189703;

{
var G__189705 = cljs.core.first.call(null,G__189698__189704);
var G__189706 = G__189698__189704;
c__189700 = G__189705;
G__189698__189701 = G__189706;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.core.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.core.normalize_element = (function normalize_element(p__189708){
var vec__189709__189710 = p__189708;
var tag__189711 = cljs.core.nth.call(null,vec__189709__189710,0,null);
var content__189712 = cljs.core.nthnext.call(null,vec__189709__189710,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____189713 = cljs.core.keyword_QMARK_.call(null,tag__189711);

if(cljs.core.truth_(or__3548__auto____189713))
{return or__3548__auto____189713;
} else
{var or__3548__auto____189714 = cljs.core.symbol_QMARK_.call(null,tag__189711);

if(cljs.core.truth_(or__3548__auto____189714))
{return or__3548__auto____189714;
} else
{return cljs.core.string_QMARK_.call(null,tag__189711);
}
}
})())))
{throw cljs.core.str.call(null,tag__189711," is not a valid tag name.");
} else
{}
var vec__189715__189717 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__189711));
var ___189718 = cljs.core.nth.call(null,vec__189715__189717,0,null);
var tag__189719 = cljs.core.nth.call(null,vec__189715__189717,1,null);
var id__189720 = cljs.core.nth.call(null,vec__189715__189717,2,null);
var class$__189721 = cljs.core.nth.call(null,vec__189715__189717,3,null);
var vec__189716__189728 = (function (){var vec__189722__189723 = clojure.string.split.call(null,tag__189719,/:/);
var nsp__189724 = cljs.core.nth.call(null,vec__189722__189723,0,null);
var t__189725 = cljs.core.nth.call(null,vec__189722__189723,1,null);
var ns_xmlns__189726 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__189724));

if(cljs.core.truth_(t__189725))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____189727 = ns_xmlns__189726;

if(cljs.core.truth_(or__3548__auto____189727))
{return or__3548__auto____189727;
} else
{return nsp__189724;
}
})(),t__189725]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__189724]);
}
})();
var nsp__189729 = cljs.core.nth.call(null,vec__189716__189728,0,null);
var tag__189730 = cljs.core.nth.call(null,vec__189716__189728,1,null);
var tag_attrs__189732 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__189707_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__189707_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____189731 = id__189720;

if(cljs.core.truth_(or__3548__auto____189731))
{return or__3548__auto____189731;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__189721)?clojure.string.replace.call(null,class$__189721,/\./," "):null)})));
var map_attrs__189733 = cljs.core.first.call(null,content__189712);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__189733)))
{return cljs.core.Vector.fromArray([nsp__189729,tag__189730,cljs.core.merge.call(null,tag_attrs__189732,map_attrs__189733),cljs.core.next.call(null,content__189712)]);
} else
{return cljs.core.Vector.fromArray([nsp__189729,tag__189730,tag_attrs__189732,content__189712]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__189734 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__189734)))
{crate.core.dom_attr.call(null,elem,attrs__189734);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.core.create_elem = (function create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
crate.core.elem_factory = (function elem_factory(tag_def){
var vec__189735__189736 = crate.core.normalize_element.call(null,tag_def);
var nsp__189737 = cljs.core.nth.call(null,vec__189735__189736,0,null);
var tag__189738 = cljs.core.nth.call(null,vec__189735__189736,1,null);
var attrs__189739 = cljs.core.nth.call(null,vec__189735__189736,2,null);
var content__189740 = cljs.core.nth.call(null,vec__189735__189736,3,null);
var elem__189741 = crate.core.create_elem.call(null,nsp__189737,tag__189738);

crate.core.dom_attr.call(null,elem__189741,cljs.core.merge.call(null,attrs__189739,cljs.core.ObjMap.fromObject(["\uFDD0'crateId"],{"\uFDD0'crateId":cljs.core.swap_BANG_.call(null,crate.core.elem_id,cljs.core.inc)})));
crate.core.as_content.call(null,elem__189741,content__189740);
return elem__189741;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__189742 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__189742)))
{return res__189742;
} else
{return cljs.core.first.call(null,res__189742);
}
};
var html = function (var_args){
var tags = null;
if (goog.isDef(var_args)) {
  tags = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return html__delegate.call(this, tags);
};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__189743){
var tags = cljs.core.seq( arglist__189743 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
