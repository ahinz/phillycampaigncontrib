goog.provide('fetch.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('clojure.string');
goog.require('fetch.util');
goog.require('cljs.reader');
goog.require('goog.events');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
fetch.core.__GT_method = (function __GT_method(m){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,m));
});
fetch.core.parse_route = (function parse_route(route){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,route)))
{return cljs.core.Vector.fromArray(["GET",route]);
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,route)))
{var vec__189873__189874 = route;
var m__189875 = cljs.core.nth.call(null,vec__189873__189874,0,null);
var u__189876 = cljs.core.nth.call(null,vec__189873__189874,1,null);

return cljs.core.Vector.fromArray([fetch.core.__GT_method.call(null,m__189875),u__189876]);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.Vector.fromArray(["GET",route]);
} else
{return null;
}
}
}
});
fetch.core.__GT_data = (function __GT_data(d){
var cur__189877 = fetch.util.clj__GT_js.call(null,d);
var query__189878 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__189877)));

return cljs.core.str.call(null,query__189878);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__189879 = req.getResponseText();

return callback.call(null,data__189879);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__189880){
var vec__189881__189882 = p__189880;
var opts__189883 = cljs.core.nth.call(null,vec__189881__189882,0,null);

var req__189885 = (new goog.net.XhrIo());
var vec__189884__189886 = fetch.core.parse_route.call(null,route);
var method__189887 = cljs.core.nth.call(null,vec__189884__189886,0,null);
var uri__189888 = cljs.core.nth.call(null,vec__189884__189886,1,null);
var data__189889 = fetch.core.__GT_data.call(null,content);
var callback__189890 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__189890))
{goog.events.listen.call(null,req__189885,goog.net.EventType.COMPLETE,(function (){
return callback__189890.call(null,req__189885);
}));
} else
{}
return req__189885.send(uri__189888,method__189887,data__189889,(cljs.core.truth_(opts__189883)?fetch.util.clj__GT_js.call(null,opts__189883):null));
};
var xhr = function (route,content,callback,var_args){
var p__189880 = null;
if (goog.isDef(var_args)) {
  p__189880 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__189880);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__189891){
var route = cljs.core.first(arglist__189891);
var content = cljs.core.first(cljs.core.next(arglist__189891));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__189891)));
var p__189880 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__189891)));
return xhr__delegate.call(this, route, content, callback, p__189880);
});
return xhr;
})()
;
