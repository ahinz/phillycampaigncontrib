goog.provide('crate.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
crate.core.xmlns = cljs.core.ObjMap.fromObject(["\uFDD0'xhtml","\uFDD0'svg"],{"\uFDD0'xhtml":"http:\/\/www.w3.org\/1999\/xhtml","\uFDD0'svg":"http:\/\/www.w3.org\/2000\/svg"});
crate.core.elem_id = cljs.core.atom.call(null,0);
crate.core.group_id = cljs.core.atom.call(null,0);
crate.core.dom_attr = (function() {
var dom_attr = null;
var dom_attr__156917 = (function (elem,attrs){
if(cljs.core.truth_(elem))
{if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.map_QMARK_.call(null,attrs))))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var G__156898__156899 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__156898__156899))
{var G__156901__156903 = cljs.core.first.call(null,G__156898__156899);
var vec__156902__156904 = G__156901__156903;
var k__156905 = cljs.core.nth.call(null,vec__156902__156904,0,null);
var v__156906 = cljs.core.nth.call(null,vec__156902__156904,1,null);
var G__156898__156907 = G__156898__156899;

var G__156901__156908 = G__156901__156903;
var G__156898__156909 = G__156898__156907;

while(true){
var vec__156910__156911 = G__156901__156908;
var k__156912 = cljs.core.nth.call(null,vec__156910__156911,0,null);
var v__156913 = cljs.core.nth.call(null,vec__156910__156911,1,null);
var G__156898__156914 = G__156898__156909;

dom_attr.call(null,elem,k__156912,v__156913);
var temp__3698__auto____156915 = cljs.core.next.call(null,G__156898__156914);

if(cljs.core.truth_(temp__3698__auto____156915))
{var G__156898__156916 = temp__3698__auto____156915;

{
var G__156920 = cljs.core.first.call(null,G__156898__156916);
var G__156921 = G__156898__156916;
G__156901__156908 = G__156920;
G__156898__156909 = G__156921;
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
var dom_attr__156918 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case  2 :
return dom_attr__156917.call(this,elem,k);
case  3 :
return dom_attr__156918.call(this,elem,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
return dom_attr;
})()
;
crate.core.as_content = (function as_content(parent,content){
var G__156922__156923 = cljs.core.seq.call(null,content);

if(cljs.core.truth_(G__156922__156923))
{var c__156924 = cljs.core.first.call(null,G__156922__156923);
var G__156922__156925 = G__156922__156923;

while(true){
var child__156926 = (cljs.core.truth_((c__156924 === null))?null:(cljs.core.truth_(cljs.core.map_QMARK_.call(null,c__156924))?(function(){throw "Maps cannot be used as content"})():(cljs.core.truth_(cljs.core.string_QMARK_.call(null,c__156924))?goog.dom.createTextNode.call(null,c__156924):(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,c__156924))?crate.core.elem_factory.call(null,c__156924):(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,c__156924))?as_content.call(null,parent,c__156924):(cljs.core.truth_(c__156924.nodeName)?c__156924:null))))));

if(cljs.core.truth_(child__156926))
{goog.dom.appendChild.call(null,parent,child__156926);
} else
{}
var temp__3698__auto____156927 = cljs.core.next.call(null,G__156922__156925);

if(cljs.core.truth_(temp__3698__auto____156927))
{var G__156922__156928 = temp__3698__auto____156927;

{
var G__156929 = cljs.core.first.call(null,G__156922__156928);
var G__156930 = G__156922__156928;
c__156924 = G__156929;
G__156922__156925 = G__156930;
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
crate.core.normalize_element = (function normalize_element(p__156932){
var vec__156933__156934 = p__156932;
var tag__156935 = cljs.core.nth.call(null,vec__156933__156934,0,null);
var content__156936 = cljs.core.nthnext.call(null,vec__156933__156934,1);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____156937 = cljs.core.keyword_QMARK_.call(null,tag__156935);

if(cljs.core.truth_(or__3548__auto____156937))
{return or__3548__auto____156937;
} else
{var or__3548__auto____156938 = cljs.core.symbol_QMARK_.call(null,tag__156935);

if(cljs.core.truth_(or__3548__auto____156938))
{return or__3548__auto____156938;
} else
{return cljs.core.string_QMARK_.call(null,tag__156935);
}
}
})())))
{throw cljs.core.str.call(null,tag__156935," is not a valid tag name.");
} else
{}
var vec__156939__156941 = cljs.core.re_matches.call(null,crate.core.re_tag,cljs.core.name.call(null,tag__156935));
var ___156942 = cljs.core.nth.call(null,vec__156939__156941,0,null);
var tag__156943 = cljs.core.nth.call(null,vec__156939__156941,1,null);
var id__156944 = cljs.core.nth.call(null,vec__156939__156941,2,null);
var class$__156945 = cljs.core.nth.call(null,vec__156939__156941,3,null);
var vec__156940__156952 = (function (){var vec__156946__156947 = clojure.string.split.call(null,tag__156943,/:/);
var nsp__156948 = cljs.core.nth.call(null,vec__156946__156947,0,null);
var t__156949 = cljs.core.nth.call(null,vec__156946__156947,1,null);
var ns_xmlns__156950 = crate.core.xmlns.call(null,cljs.core.keyword.call(null,nsp__156948));

if(cljs.core.truth_(t__156949))
{return cljs.core.Vector.fromArray([(function (){var or__3548__auto____156951 = ns_xmlns__156950;

if(cljs.core.truth_(or__3548__auto____156951))
{return or__3548__auto____156951;
} else
{return nsp__156948;
}
})(),t__156949]);
} else
{return cljs.core.Vector.fromArray(["\uFDD0'xhtml".call(null,crate.core.xmlns),nsp__156948]);
}
})();
var nsp__156953 = cljs.core.nth.call(null,vec__156940__156952,0,null);
var tag__156954 = cljs.core.nth.call(null,vec__156940__156952,1,null);
var tag_attrs__156956 = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.filter.call(null,(function (p1__156931_SHARP_){
return cljs.core.not.call(null,(cljs.core.second.call(null,p1__156931_SHARP_) === null));
}),cljs.core.ObjMap.fromObject(["\uFDD0'id","\uFDD0'class"],{"\uFDD0'id":(function (){var or__3548__auto____156955 = id__156944;

if(cljs.core.truth_(or__3548__auto____156955))
{return or__3548__auto____156955;
} else
{return null;
}
})(),"\uFDD0'class":(cljs.core.truth_(class$__156945)?clojure.string.replace.call(null,class$__156945,/\./," "):null)})));
var map_attrs__156957 = cljs.core.first.call(null,content__156936);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,map_attrs__156957)))
{return cljs.core.Vector.fromArray([nsp__156953,tag__156954,cljs.core.merge.call(null,tag_attrs__156956,map_attrs__156957),cljs.core.next.call(null,content__156936)]);
} else
{return cljs.core.Vector.fromArray([nsp__156953,tag__156954,tag_attrs__156956,content__156936]);
}
});
crate.core.parse_content = (function parse_content(elem,content){
var attrs__156958 = cljs.core.first.call(null,content);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,attrs__156958)))
{crate.core.dom_attr.call(null,elem,attrs__156958);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.core.create_elem = (function create_elem(nsp,tag){
return document.createElementNS(nsp,tag);
});
crate.core.elem_factory = (function elem_factory(tag_def){
var vec__156959__156960 = crate.core.normalize_element.call(null,tag_def);
var nsp__156961 = cljs.core.nth.call(null,vec__156959__156960,0,null);
var tag__156962 = cljs.core.nth.call(null,vec__156959__156960,1,null);
var attrs__156963 = cljs.core.nth.call(null,vec__156959__156960,2,null);
var content__156964 = cljs.core.nth.call(null,vec__156959__156960,3,null);
var elem__156965 = crate.core.create_elem.call(null,nsp__156961,tag__156962);

crate.core.dom_attr.call(null,elem__156965,cljs.core.merge.call(null,attrs__156963,cljs.core.ObjMap.fromObject(["\uFDD0'crateId"],{"\uFDD0'crateId":cljs.core.swap_BANG_.call(null,crate.core.elem_id,cljs.core.inc)})));
crate.core.as_content.call(null,elem__156965,content__156964);
return elem__156965;
});
/**
* @param {...*} var_args
*/
crate.core.html = (function() { 
var html__delegate = function (tags){
var res__156966 = cljs.core.map.call(null,crate.core.elem_factory,tags);

if(cljs.core.truth_(cljs.core.second.call(null,res__156966)))
{return res__156966;
} else
{return cljs.core.first.call(null,res__156966);
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
html.cljs$lang$applyTo = (function (arglist__156967){
var tags = cljs.core.seq( arglist__156967 );;
return html__delegate.call(this, tags);
});
return html;
})()
;
