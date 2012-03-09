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
var $__delegate = function (sel,p__189773){
var vec__189774__189775 = p__189773;
var context__189776 = cljs.core.nth.call(null,vec__189774__189775,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__189776)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__189776);
}
};
var $ = function (sel,var_args){
var p__189773 = null;
if (goog.isDef(var_args)) {
  p__189773 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__189773);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__189777){
var sel = cljs.core.first(arglist__189777);
var p__189773 = cljs.core.rest(arglist__189777);
return $__delegate.call(this, sel, p__189773);
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
var G__189779 = null;
var G__189779__189780 = (function (this$,k){
var or__3548__auto____189778 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____189778))
{return or__3548__auto____189778;
} else
{return null;
}
});
var G__189779__189781 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__189779 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__189779__189780.call(this,this$,k);
case  3 :
return G__189779__189781.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189779;
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
var G__189783 = null;
var G__189783__189784 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__189783__189785 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__189783 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__189783__189784.call(this,_,k);
case  3 :
return G__189783__189785.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189783;
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
var attr__delegate = function ($elem,a,p__189787){
var vec__189788__189789 = p__189787;
var v__189790 = cljs.core.nth.call(null,vec__189788__189789,0,null);

var a__189791 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__189790)))
{return $elem.attr(a__189791);
} else
{return $elem.attr(a__189791,v__189790);
}
};
var attr = function ($elem,a,var_args){
var p__189787 = null;
if (goog.isDef(var_args)) {
  p__189787 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__189787);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__189792){
var $elem = cljs.core.first(arglist__189792);
var a = cljs.core.first(cljs.core.next(arglist__189792));
var p__189787 = cljs.core.rest(cljs.core.next(arglist__189792));
return attr__delegate.call(this, $elem, a, p__189787);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__189793){
var vec__189794__189795 = p__189793;
var v__189796 = cljs.core.nth.call(null,vec__189794__189795,0,null);

var k__189797 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__189796)))
{return $elem.data(k__189797);
} else
{return $elem.data(k__189797,v__189796);
}
};
var data = function ($elem,k,var_args){
var p__189793 = null;
if (goog.isDef(var_args)) {
  p__189793 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__189793);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__189798){
var $elem = cljs.core.first(arglist__189798);
var k = cljs.core.first(cljs.core.next(arglist__189798));
var p__189793 = cljs.core.rest(cljs.core.next(arglist__189798));
return data__delegate.call(this, $elem, k, p__189793);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__189799 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__189799);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__189800 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__189800);
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
var hide__delegate = function ($elem,p__189801){
var vec__189802__189803 = p__189801;
var speed__189804 = cljs.core.nth.call(null,vec__189802__189803,0,null);
var on_finish__189805 = cljs.core.nth.call(null,vec__189802__189803,1,null);

return $elem.hide(speed__189804,on_finish__189805);
};
var hide = function ($elem,var_args){
var p__189801 = null;
if (goog.isDef(var_args)) {
  p__189801 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__189801);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__189806){
var $elem = cljs.core.first(arglist__189806);
var p__189801 = cljs.core.rest(arglist__189806);
return hide__delegate.call(this, $elem, p__189801);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__189807){
var vec__189808__189809 = p__189807;
var speed__189810 = cljs.core.nth.call(null,vec__189808__189809,0,null);
var on_finish__189811 = cljs.core.nth.call(null,vec__189808__189809,1,null);

return $elem.show(speed__189810,on_finish__189811);
};
var show = function ($elem,var_args){
var p__189807 = null;
if (goog.isDef(var_args)) {
  p__189807 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__189807);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__189812){
var $elem = cljs.core.first(arglist__189812);
var p__189807 = cljs.core.rest(arglist__189812);
return show__delegate.call(this, $elem, p__189807);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__189813){
var vec__189814__189815 = p__189813;
var speed__189816 = cljs.core.nth.call(null,vec__189814__189815,0,null);
var on_finish__189817 = cljs.core.nth.call(null,vec__189814__189815,1,null);

return $elem.fadeOut(speed__189816,on_finish__189817);
};
var fade_out = function ($elem,var_args){
var p__189813 = null;
if (goog.isDef(var_args)) {
  p__189813 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__189813);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__189818){
var $elem = cljs.core.first(arglist__189818);
var p__189813 = cljs.core.rest(arglist__189818);
return fade_out__delegate.call(this, $elem, p__189813);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__189819){
var vec__189820__189821 = p__189819;
var speed__189822 = cljs.core.nth.call(null,vec__189820__189821,0,null);
var on_finish__189823 = cljs.core.nth.call(null,vec__189820__189821,1,null);

return $elem.fadeIn(speed__189822,on_finish__189823);
};
var fade_in = function ($elem,var_args){
var p__189819 = null;
if (goog.isDef(var_args)) {
  p__189819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__189819);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__189824){
var $elem = cljs.core.first(arglist__189824);
var p__189819 = cljs.core.rest(arglist__189824);
return fade_in__delegate.call(this, $elem, p__189819);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__189825){
var vec__189826__189827 = p__189825;
var speed__189828 = cljs.core.nth.call(null,vec__189826__189827,0,null);
var on_finish__189829 = cljs.core.nth.call(null,vec__189826__189827,1,null);

return $elem.slideUp(speed__189828,on_finish__189829);
};
var slide_up = function ($elem,var_args){
var p__189825 = null;
if (goog.isDef(var_args)) {
  p__189825 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__189825);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__189830){
var $elem = cljs.core.first(arglist__189830);
var p__189825 = cljs.core.rest(arglist__189830);
return slide_up__delegate.call(this, $elem, p__189825);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__189831){
var vec__189832__189833 = p__189831;
var speed__189834 = cljs.core.nth.call(null,vec__189832__189833,0,null);
var on_finish__189835 = cljs.core.nth.call(null,vec__189832__189833,1,null);

return $elem.slideDown(speed__189834,on_finish__189835);
};
var slide_down = function ($elem,var_args){
var p__189831 = null;
if (goog.isDef(var_args)) {
  p__189831 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__189831);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__189836){
var $elem = cljs.core.first(arglist__189836);
var p__189831 = cljs.core.rest(arglist__189836);
return slide_down__delegate.call(this, $elem, p__189831);
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
var val__delegate = function ($elem,p__189837){
var vec__189838__189839 = p__189837;
var v__189840 = cljs.core.nth.call(null,vec__189838__189839,0,null);

if(cljs.core.truth_(v__189840))
{return $elem.val(v__189840);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__189837 = null;
if (goog.isDef(var_args)) {
  p__189837 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__189837);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__189841){
var $elem = cljs.core.first(arglist__189841);
var p__189837 = cljs.core.rest(arglist__189841);
return val__delegate.call(this, $elem, p__189837);
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
jayq.core.xhr = (function xhr(p__189842,content,callback){
var vec__189843__189844 = p__189842;
var method__189845 = cljs.core.nth.call(null,vec__189843__189844,0,null);
var uri__189846 = cljs.core.nth.call(null,vec__189843__189844,1,null);

var params__189847 = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__189845)),"\uFDD0'data":jayq.util.map__GT_js.call(null,content),"\uFDD0'success":callback}));

return jQuery.ajax(uri__189846,params__189847);
});
