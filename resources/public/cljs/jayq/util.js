goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__189848 = cljs.core.js_obj.call(null);

var G__189849__189850 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__189849__189850))
{var G__189852__189854 = cljs.core.first.call(null,G__189849__189850);
var vec__189853__189855 = G__189852__189854;
var k__189856 = cljs.core.nth.call(null,vec__189853__189855,0,null);
var v__189857 = cljs.core.nth.call(null,vec__189853__189855,1,null);
var G__189849__189858 = G__189849__189850;

var G__189852__189859 = G__189852__189854;
var G__189849__189860 = G__189849__189858;

while(true){
var vec__189861__189862 = G__189852__189859;
var k__189863 = cljs.core.nth.call(null,vec__189861__189862,0,null);
var v__189864 = cljs.core.nth.call(null,vec__189861__189862,1,null);
var G__189849__189865 = G__189849__189860;

(out__189848[cljs.core.name.call(null,k__189863)] = v__189864);
var temp__3698__auto____189866 = cljs.core.next.call(null,G__189849__189865);

if(cljs.core.truth_(temp__3698__auto____189866))
{var G__189849__189867 = temp__3698__auto____189866;

{
var G__189868 = cljs.core.first.call(null,G__189849__189867);
var G__189869 = G__189849__189867;
G__189852__189859 = G__189868;
G__189849__189860 = G__189869;
continue;
}
} else
{}
break;
}
} else
{}
return out__189848;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__189870 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__189870);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__189871){
var v = cljs.core.first(arglist__189871);
var text = cljs.core.rest(arglist__189871);
return log__delegate.call(this, v, text);
});
return log;
})()
;
