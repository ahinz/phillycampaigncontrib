goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__157072 = cljs.core.js_obj.call(null);

var G__157073__157074 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__157073__157074))
{var G__157076__157078 = cljs.core.first.call(null,G__157073__157074);
var vec__157077__157079 = G__157076__157078;
var k__157080 = cljs.core.nth.call(null,vec__157077__157079,0,null);
var v__157081 = cljs.core.nth.call(null,vec__157077__157079,1,null);
var G__157073__157082 = G__157073__157074;

var G__157076__157083 = G__157076__157078;
var G__157073__157084 = G__157073__157082;

while(true){
var vec__157085__157086 = G__157076__157083;
var k__157087 = cljs.core.nth.call(null,vec__157085__157086,0,null);
var v__157088 = cljs.core.nth.call(null,vec__157085__157086,1,null);
var G__157073__157089 = G__157073__157084;

(out__157072[cljs.core.name.call(null,k__157087)] = v__157088);
var temp__3698__auto____157090 = cljs.core.next.call(null,G__157073__157089);

if(cljs.core.truth_(temp__3698__auto____157090))
{var G__157073__157091 = temp__3698__auto____157090;

{
var G__157092 = cljs.core.first.call(null,G__157073__157091);
var G__157093 = G__157073__157091;
G__157076__157083 = G__157092;
G__157073__157084 = G__157093;
continue;
}
} else
{}
break;
}
} else
{}
return out__157072;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__157094 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__157094);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__157095){
var v = cljs.core.first(arglist__157095);
var text = cljs.core.rest(arglist__157095);
return log__delegate.call(this, v, text);
});
return log;
})()
;
