goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,sel)))
{return sel;
} else
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,sel)))
{return cljs.core.str.call(null,"[crateGroup=",jayq.core.crate_meta.call(null,sel),"]");
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,sel)))
{return cljs.core.name.call(null,sel);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__156997){
var vec__156998__156999 = p__156997;
var context__157000 = cljs.core.nth.call(null,vec__156998__156999,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__157000)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__157000);
}
};
var $ = function (sel,var_args){
var p__156997 = null;
if (goog.isDef(var_args)) {
  p__156997 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__156997);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__157001){
var sel = cljs.core.first(arglist__157001);
var p__156997 = cljs.core.rest(arglist__157001);
return $__delegate.call(this, sel, p__156997);
});
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup = (function() {
var G__157003 = null;
var G__157003__157004 = (function (this$,k){
var or__3548__auto____157002 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____157002))
{return or__3548__auto____157002;
} else
{return null;
}
});
var G__157003__157005 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__157003 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__157003__157004.call(this,this$,k);
case  3 :
return G__157003__157005.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__157003;
})()
;
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n,not_found){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{if(cljs.core.truth_((void 0 === not_found)))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first = (function (this$){
return this$.slice(0,1);
});
jQuery.prototype.cljs$core$ISeq$_rest = (function (this$){
if(cljs.core.truth_((cljs.core.count.call(null,this$) > 1)))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__157007 = null;
var G__157007__157008 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__157007__157009 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__157007 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__157007__157008.call(this,_,k);
case  3 :
return G__157007__157009.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__157007;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.map__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,opts)))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.map__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__157011){
var vec__157012__157013 = p__157011;
var v__157014 = cljs.core.nth.call(null,vec__157012__157013,0,null);

var a__157015 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__157014)))
{return $elem.attr(a__157015);
} else
{return $elem.attr(a__157015,v__157014);
}
};
var attr = function ($elem,a,var_args){
var p__157011 = null;
if (goog.isDef(var_args)) {
  p__157011 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__157011);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__157016){
var $elem = cljs.core.first(arglist__157016);
var a = cljs.core.first(cljs.core.next(arglist__157016));
var p__157011 = cljs.core.rest(cljs.core.next(arglist__157016));
return attr__delegate.call(this, $elem, a, p__157011);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__157017){
var vec__157018__157019 = p__157017;
var v__157020 = cljs.core.nth.call(null,vec__157018__157019,0,null);

var k__157021 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__157020)))
{return $elem.data(k__157021);
} else
{return $elem.data(k__157021,v__157020);
}
};
var data = function ($elem,k,var_args){
var p__157017 = null;
if (goog.isDef(var_args)) {
  p__157017 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__157017);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__157022){
var $elem = cljs.core.first(arglist__157022);
var k = cljs.core.first(cljs.core.next(arglist__157022));
var p__157017 = cljs.core.rest(cljs.core.next(arglist__157022));
return data__delegate.call(this, $elem, k, p__157017);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__157023 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__157023);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__157024 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__157024);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__157025){
var vec__157026__157027 = p__157025;
var speed__157028 = cljs.core.nth.call(null,vec__157026__157027,0,null);
var on_finish__157029 = cljs.core.nth.call(null,vec__157026__157027,1,null);

return $elem.hide(speed__157028,on_finish__157029);
};
var hide = function ($elem,var_args){
var p__157025 = null;
if (goog.isDef(var_args)) {
  p__157025 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__157025);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__157030){
var $elem = cljs.core.first(arglist__157030);
var p__157025 = cljs.core.rest(arglist__157030);
return hide__delegate.call(this, $elem, p__157025);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__157031){
var vec__157032__157033 = p__157031;
var speed__157034 = cljs.core.nth.call(null,vec__157032__157033,0,null);
var on_finish__157035 = cljs.core.nth.call(null,vec__157032__157033,1,null);

return $elem.show(speed__157034,on_finish__157035);
};
var show = function ($elem,var_args){
var p__157031 = null;
if (goog.isDef(var_args)) {
  p__157031 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__157031);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__157036){
var $elem = cljs.core.first(arglist__157036);
var p__157031 = cljs.core.rest(arglist__157036);
return show__delegate.call(this, $elem, p__157031);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__157037){
var vec__157038__157039 = p__157037;
var speed__157040 = cljs.core.nth.call(null,vec__157038__157039,0,null);
var on_finish__157041 = cljs.core.nth.call(null,vec__157038__157039,1,null);

return $elem.fadeOut(speed__157040,on_finish__157041);
};
var fade_out = function ($elem,var_args){
var p__157037 = null;
if (goog.isDef(var_args)) {
  p__157037 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__157037);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__157042){
var $elem = cljs.core.first(arglist__157042);
var p__157037 = cljs.core.rest(arglist__157042);
return fade_out__delegate.call(this, $elem, p__157037);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__157043){
var vec__157044__157045 = p__157043;
var speed__157046 = cljs.core.nth.call(null,vec__157044__157045,0,null);
var on_finish__157047 = cljs.core.nth.call(null,vec__157044__157045,1,null);

return $elem.fadeIn(speed__157046,on_finish__157047);
};
var fade_in = function ($elem,var_args){
var p__157043 = null;
if (goog.isDef(var_args)) {
  p__157043 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__157043);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__157048){
var $elem = cljs.core.first(arglist__157048);
var p__157043 = cljs.core.rest(arglist__157048);
return fade_in__delegate.call(this, $elem, p__157043);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__157049){
var vec__157050__157051 = p__157049;
var speed__157052 = cljs.core.nth.call(null,vec__157050__157051,0,null);
var on_finish__157053 = cljs.core.nth.call(null,vec__157050__157051,1,null);

return $elem.slideUp(speed__157052,on_finish__157053);
};
var slide_up = function ($elem,var_args){
var p__157049 = null;
if (goog.isDef(var_args)) {
  p__157049 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__157049);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__157054){
var $elem = cljs.core.first(arglist__157054);
var p__157049 = cljs.core.rest(arglist__157054);
return slide_up__delegate.call(this, $elem, p__157049);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__157055){
var vec__157056__157057 = p__157055;
var speed__157058 = cljs.core.nth.call(null,vec__157056__157057,0,null);
var on_finish__157059 = cljs.core.nth.call(null,vec__157056__157057,1,null);

return $elem.slideDown(speed__157058,on_finish__157059);
};
var slide_down = function ($elem,var_args){
var p__157055 = null;
if (goog.isDef(var_args)) {
  p__157055 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__157055);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__157060){
var $elem = cljs.core.first(arglist__157060);
var p__157055 = cljs.core.rest(arglist__157060);
return slide_down__delegate.call(this, $elem, p__157055);
});
return slide_down;
})()
;
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__157061){
var vec__157062__157063 = p__157061;
var v__157064 = cljs.core.nth.call(null,vec__157062__157063,0,null);

if(cljs.core.truth_(v__157064))
{return $elem.val(v__157064);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__157061 = null;
if (goog.isDef(var_args)) {
  p__157061 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__157061);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__157065){
var $elem = cljs.core.first(arglist__157065);
var p__157061 = cljs.core.rest(arglist__157065);
return val__delegate.call(this, $elem, p__157061);
});
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.xhr = (function xhr(p__157066,content,callback){
var vec__157067__157068 = p__157066;
var method__157069 = cljs.core.nth.call(null,vec__157067__157068,0,null);
var uri__157070 = cljs.core.nth.call(null,vec__157067__157068,1,null);

var params__157071 = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__157069)),"\uFDD0'data":jayq.util.map__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__157070,params__157071);
});
