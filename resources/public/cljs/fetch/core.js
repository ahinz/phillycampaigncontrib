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
{var vec__157097__157098 = route;
var m__157099 = cljs.core.nth.call(null,vec__157097__157098,0,null);
var u__157100 = cljs.core.nth.call(null,vec__157097__157098,1,null);

return cljs.core.Vector.fromArray([fetch.core.__GT_method.call(null,m__157099),u__157100]);
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
var cur__157101 = fetch.util.clj__GT_js.call(null,d);
var query__157102 = goog.Uri.QueryData.createFromMap.call(null,(new goog.structs.Map(cur__157101)));

return cljs.core.str.call(null,query__157102);
});
fetch.core.__GT_callback = (function __GT_callback(callback){
if(cljs.core.truth_(callback))
{return (function (req){
var data__157103 = req.getResponseText();

return callback.call(null,data__157103);
});
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
fetch.core.xhr = (function() { 
var xhr__delegate = function (route,content,callback,p__157104){
var vec__157105__157106 = p__157104;
var opts__157107 = cljs.core.nth.call(null,vec__157105__157106,0,null);

var req__157109 = (new goog.net.XhrIo());
var vec__157108__157110 = fetch.core.parse_route.call(null,route);
var method__157111 = cljs.core.nth.call(null,vec__157108__157110,0,null);
var uri__157112 = cljs.core.nth.call(null,vec__157108__157110,1,null);
var data__157113 = fetch.core.__GT_data.call(null,content);
var callback__157114 = fetch.core.__GT_callback.call(null,callback);

if(cljs.core.truth_(callback__157114))
{goog.events.listen.call(null,req__157109,goog.net.EventType.COMPLETE,(function (){
return callback__157114.call(null,req__157109);
}));
} else
{}
return req__157109.send(uri__157112,method__157111,data__157113,(cljs.core.truth_(opts__157107)?fetch.util.clj__GT_js.call(null,opts__157107):null));
};
var xhr = function (route,content,callback,var_args){
var p__157104 = null;
if (goog.isDef(var_args)) {
  p__157104 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return xhr__delegate.call(this, route, content, callback, p__157104);
};
xhr.cljs$lang$maxFixedArity = 3;
xhr.cljs$lang$applyTo = (function (arglist__157115){
var route = cljs.core.first(arglist__157115);
var content = cljs.core.first(cljs.core.next(arglist__157115));
var callback = cljs.core.first(cljs.core.next(cljs.core.next(arglist__157115)));
var p__157104 = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__157115)));
return xhr__delegate.call(this, route, content, callback, p__157104);
});
return xhr;
})()
;
