goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____155199 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____155199))
{return or__3548__auto____155199;
} else
{var or__3548__auto____155200 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____155200))
{return or__3548__auto____155200;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__155264 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____155201 = this$;

if(cljs.core.truth_(and__3546__auto____155201))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155201;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____155202 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155202))
{return or__3548__auto____155202;
} else
{var or__3548__auto____155203 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155203))
{return or__3548__auto____155203;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__155265 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____155204 = this$;

if(cljs.core.truth_(and__3546__auto____155204))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155204;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____155205 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155205))
{return or__3548__auto____155205;
} else
{var or__3548__auto____155206 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155206))
{return or__3548__auto____155206;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__155266 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____155207 = this$;

if(cljs.core.truth_(and__3546__auto____155207))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155207;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____155208 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155208))
{return or__3548__auto____155208;
} else
{var or__3548__auto____155209 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155209))
{return or__3548__auto____155209;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__155267 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____155210 = this$;

if(cljs.core.truth_(and__3546__auto____155210))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155210;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____155211 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155211))
{return or__3548__auto____155211;
} else
{var or__3548__auto____155212 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155212))
{return or__3548__auto____155212;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__155268 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____155213 = this$;

if(cljs.core.truth_(and__3546__auto____155213))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155213;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____155214 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155214))
{return or__3548__auto____155214;
} else
{var or__3548__auto____155215 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155215))
{return or__3548__auto____155215;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__155269 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____155216 = this$;

if(cljs.core.truth_(and__3546__auto____155216))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155216;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____155217 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155217))
{return or__3548__auto____155217;
} else
{var or__3548__auto____155218 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155218))
{return or__3548__auto____155218;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__155270 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____155219 = this$;

if(cljs.core.truth_(and__3546__auto____155219))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155219;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____155220 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155220))
{return or__3548__auto____155220;
} else
{var or__3548__auto____155221 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155221))
{return or__3548__auto____155221;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__155271 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____155222 = this$;

if(cljs.core.truth_(and__3546__auto____155222))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155222;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____155223 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155223))
{return or__3548__auto____155223;
} else
{var or__3548__auto____155224 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155224))
{return or__3548__auto____155224;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__155272 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____155225 = this$;

if(cljs.core.truth_(and__3546__auto____155225))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155225;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____155226 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155226))
{return or__3548__auto____155226;
} else
{var or__3548__auto____155227 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155227))
{return or__3548__auto____155227;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__155273 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____155228 = this$;

if(cljs.core.truth_(and__3546__auto____155228))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155228;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____155229 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155229))
{return or__3548__auto____155229;
} else
{var or__3548__auto____155230 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155230))
{return or__3548__auto____155230;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__155274 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____155231 = this$;

if(cljs.core.truth_(and__3546__auto____155231))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155231;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____155232 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155232))
{return or__3548__auto____155232;
} else
{var or__3548__auto____155233 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155233))
{return or__3548__auto____155233;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__155275 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____155234 = this$;

if(cljs.core.truth_(and__3546__auto____155234))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155234;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____155235 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155235))
{return or__3548__auto____155235;
} else
{var or__3548__auto____155236 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155236))
{return or__3548__auto____155236;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__155276 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____155237 = this$;

if(cljs.core.truth_(and__3546__auto____155237))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155237;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____155238 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155238))
{return or__3548__auto____155238;
} else
{var or__3548__auto____155239 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155239))
{return or__3548__auto____155239;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__155277 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____155240 = this$;

if(cljs.core.truth_(and__3546__auto____155240))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155240;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____155241 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155241))
{return or__3548__auto____155241;
} else
{var or__3548__auto____155242 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155242))
{return or__3548__auto____155242;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__155278 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____155243 = this$;

if(cljs.core.truth_(and__3546__auto____155243))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155243;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____155244 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155244))
{return or__3548__auto____155244;
} else
{var or__3548__auto____155245 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155245))
{return or__3548__auto____155245;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__155279 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____155246 = this$;

if(cljs.core.truth_(and__3546__auto____155246))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155246;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____155247 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155247))
{return or__3548__auto____155247;
} else
{var or__3548__auto____155248 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155248))
{return or__3548__auto____155248;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__155280 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____155249 = this$;

if(cljs.core.truth_(and__3546__auto____155249))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155249;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____155250 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155250))
{return or__3548__auto____155250;
} else
{var or__3548__auto____155251 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155251))
{return or__3548__auto____155251;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__155281 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____155252 = this$;

if(cljs.core.truth_(and__3546__auto____155252))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155252;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____155253 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155253))
{return or__3548__auto____155253;
} else
{var or__3548__auto____155254 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155254))
{return or__3548__auto____155254;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__155282 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____155255 = this$;

if(cljs.core.truth_(and__3546__auto____155255))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155255;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____155256 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155256))
{return or__3548__auto____155256;
} else
{var or__3548__auto____155257 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155257))
{return or__3548__auto____155257;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__155283 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____155258 = this$;

if(cljs.core.truth_(and__3546__auto____155258))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155258;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____155259 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155259))
{return or__3548__auto____155259;
} else
{var or__3548__auto____155260 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155260))
{return or__3548__auto____155260;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__155284 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____155261 = this$;

if(cljs.core.truth_(and__3546__auto____155261))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____155261;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____155262 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155262))
{return or__3548__auto____155262;
} else
{var or__3548__auto____155263 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____155263))
{return or__3548__auto____155263;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__155264.call(this,this$);
case  2 :
return _invoke__155265.call(this,this$,a);
case  3 :
return _invoke__155266.call(this,this$,a,b);
case  4 :
return _invoke__155267.call(this,this$,a,b,c);
case  5 :
return _invoke__155268.call(this,this$,a,b,c,d);
case  6 :
return _invoke__155269.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__155270.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__155271.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__155272.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__155273.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__155274.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__155275.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__155276.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__155277.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__155278.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__155279.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__155280.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__155281.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__155282.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__155283.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__155284.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____155286 = coll;

if(cljs.core.truth_(and__3546__auto____155286))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____155286;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____155287 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155287))
{return or__3548__auto____155287;
} else
{var or__3548__auto____155288 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____155288))
{return or__3548__auto____155288;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____155289 = coll;

if(cljs.core.truth_(and__3546__auto____155289))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____155289;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____155290 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155290))
{return or__3548__auto____155290;
} else
{var or__3548__auto____155291 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____155291))
{return or__3548__auto____155291;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____155292 = coll;

if(cljs.core.truth_(and__3546__auto____155292))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____155292;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____155293 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155293))
{return or__3548__auto____155293;
} else
{var or__3548__auto____155294 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____155294))
{return or__3548__auto____155294;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__155301 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____155295 = coll;

if(cljs.core.truth_(and__3546__auto____155295))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____155295;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____155296 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155296))
{return or__3548__auto____155296;
} else
{var or__3548__auto____155297 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____155297))
{return or__3548__auto____155297;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__155302 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____155298 = coll;

if(cljs.core.truth_(and__3546__auto____155298))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____155298;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____155299 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155299))
{return or__3548__auto____155299;
} else
{var or__3548__auto____155300 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____155300))
{return or__3548__auto____155300;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__155301.call(this,coll,n);
case  3 :
return _nth__155302.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____155304 = coll;

if(cljs.core.truth_(and__3546__auto____155304))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____155304;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____155305 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155305))
{return or__3548__auto____155305;
} else
{var or__3548__auto____155306 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____155306))
{return or__3548__auto____155306;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____155307 = coll;

if(cljs.core.truth_(and__3546__auto____155307))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____155307;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____155308 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155308))
{return or__3548__auto____155308;
} else
{var or__3548__auto____155309 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____155309))
{return or__3548__auto____155309;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__155316 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____155310 = o;

if(cljs.core.truth_(and__3546__auto____155310))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____155310;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____155311 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155311))
{return or__3548__auto____155311;
} else
{var or__3548__auto____155312 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____155312))
{return or__3548__auto____155312;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__155317 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____155313 = o;

if(cljs.core.truth_(and__3546__auto____155313))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____155313;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____155314 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155314))
{return or__3548__auto____155314;
} else
{var or__3548__auto____155315 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____155315))
{return or__3548__auto____155315;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__155316.call(this,o,k);
case  3 :
return _lookup__155317.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____155319 = coll;

if(cljs.core.truth_(and__3546__auto____155319))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____155319;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____155320 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155320))
{return or__3548__auto____155320;
} else
{var or__3548__auto____155321 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____155321))
{return or__3548__auto____155321;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____155322 = coll;

if(cljs.core.truth_(and__3546__auto____155322))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____155322;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____155323 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155323))
{return or__3548__auto____155323;
} else
{var or__3548__auto____155324 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____155324))
{return or__3548__auto____155324;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____155325 = coll;

if(cljs.core.truth_(and__3546__auto____155325))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____155325;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____155326 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155326))
{return or__3548__auto____155326;
} else
{var or__3548__auto____155327 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____155327))
{return or__3548__auto____155327;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____155328 = coll;

if(cljs.core.truth_(and__3546__auto____155328))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____155328;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____155329 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155329))
{return or__3548__auto____155329;
} else
{var or__3548__auto____155330 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____155330))
{return or__3548__auto____155330;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____155331 = coll;

if(cljs.core.truth_(and__3546__auto____155331))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____155331;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____155332 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155332))
{return or__3548__auto____155332;
} else
{var or__3548__auto____155333 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____155333))
{return or__3548__auto____155333;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____155334 = coll;

if(cljs.core.truth_(and__3546__auto____155334))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____155334;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____155335 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155335))
{return or__3548__auto____155335;
} else
{var or__3548__auto____155336 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____155336))
{return or__3548__auto____155336;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____155337 = coll;

if(cljs.core.truth_(and__3546__auto____155337))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____155337;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____155338 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155338))
{return or__3548__auto____155338;
} else
{var or__3548__auto____155339 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____155339))
{return or__3548__auto____155339;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____155340 = o;

if(cljs.core.truth_(and__3546__auto____155340))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____155340;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____155341 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155341))
{return or__3548__auto____155341;
} else
{var or__3548__auto____155342 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____155342))
{return or__3548__auto____155342;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____155343 = o;

if(cljs.core.truth_(and__3546__auto____155343))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____155343;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____155344 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155344))
{return or__3548__auto____155344;
} else
{var or__3548__auto____155345 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____155345))
{return or__3548__auto____155345;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____155346 = o;

if(cljs.core.truth_(and__3546__auto____155346))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____155346;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____155347 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155347))
{return or__3548__auto____155347;
} else
{var or__3548__auto____155348 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____155348))
{return or__3548__auto____155348;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____155349 = o;

if(cljs.core.truth_(and__3546__auto____155349))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____155349;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____155350 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155350))
{return or__3548__auto____155350;
} else
{var or__3548__auto____155351 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____155351))
{return or__3548__auto____155351;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__155358 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____155352 = coll;

if(cljs.core.truth_(and__3546__auto____155352))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____155352;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____155353 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155353))
{return or__3548__auto____155353;
} else
{var or__3548__auto____155354 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____155354))
{return or__3548__auto____155354;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__155359 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____155355 = coll;

if(cljs.core.truth_(and__3546__auto____155355))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____155355;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____155356 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____155356))
{return or__3548__auto____155356;
} else
{var or__3548__auto____155357 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____155357))
{return or__3548__auto____155357;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__155358.call(this,coll,f);
case  3 :
return _reduce__155359.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____155361 = o;

if(cljs.core.truth_(and__3546__auto____155361))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____155361;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____155362 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155362))
{return or__3548__auto____155362;
} else
{var or__3548__auto____155363 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____155363))
{return or__3548__auto____155363;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____155364 = o;

if(cljs.core.truth_(and__3546__auto____155364))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____155364;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____155365 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155365))
{return or__3548__auto____155365;
} else
{var or__3548__auto____155366 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____155366))
{return or__3548__auto____155366;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____155367 = o;

if(cljs.core.truth_(and__3546__auto____155367))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____155367;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____155368 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155368))
{return or__3548__auto____155368;
} else
{var or__3548__auto____155369 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____155369))
{return or__3548__auto____155369;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____155370 = o;

if(cljs.core.truth_(and__3546__auto____155370))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____155370;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____155371 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____155371))
{return or__3548__auto____155371;
} else
{var or__3548__auto____155372 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____155372))
{return or__3548__auto____155372;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____155373 = d;

if(cljs.core.truth_(and__3546__auto____155373))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____155373;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____155374 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____155374))
{return or__3548__auto____155374;
} else
{var or__3548__auto____155375 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____155375))
{return or__3548__auto____155375;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____155376 = this$;

if(cljs.core.truth_(and__3546__auto____155376))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____155376;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____155377 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155377))
{return or__3548__auto____155377;
} else
{var or__3548__auto____155378 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____155378))
{return or__3548__auto____155378;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____155379 = this$;

if(cljs.core.truth_(and__3546__auto____155379))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____155379;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____155380 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155380))
{return or__3548__auto____155380;
} else
{var or__3548__auto____155381 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____155381))
{return or__3548__auto____155381;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____155382 = this$;

if(cljs.core.truth_(and__3546__auto____155382))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____155382;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____155383 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____155383))
{return or__3548__auto____155383;
} else
{var or__3548__auto____155384 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____155384))
{return or__3548__auto____155384;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__155385 = null;
var G__155385__155386 = (function (o,k){
return null;
});
var G__155385__155387 = (function (o,k,not_found){
return not_found;
});
G__155385 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__155385__155386.call(this,o,k);
case  3 :
return G__155385__155387.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155385;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__155389 = null;
var G__155389__155390 = (function (_,f){
return f.call(null);
});
var G__155389__155391 = (function (_,f,start){
return start;
});
G__155389 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__155389__155390.call(this,_,f);
case  3 :
return G__155389__155391.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155389;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o === null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__155393 = null;
var G__155393__155394 = (function (_,n){
return null;
});
var G__155393__155395 = (function (_,n,not_found){
return not_found;
});
G__155393 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__155393__155394.call(this,_,n);
case  3 :
return G__155393__155395.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155393;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__155403 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__155397 = cljs.core._nth.call(null,cicoll,0);
var n__155398 = 1;

while(true){
if(cljs.core.truth_((n__155398 < cljs.core._count.call(null,cicoll))))
{{
var G__155407 = f.call(null,val__155397,cljs.core._nth.call(null,cicoll,n__155398));
var G__155408 = (n__155398 + 1);
val__155397 = G__155407;
n__155398 = G__155408;
continue;
}
} else
{return val__155397;
}
break;
}
}
});
var ci_reduce__155404 = (function (cicoll,f,val){
var val__155399 = val;
var n__155400 = 0;

while(true){
if(cljs.core.truth_((n__155400 < cljs.core._count.call(null,cicoll))))
{{
var G__155409 = f.call(null,val__155399,cljs.core._nth.call(null,cicoll,n__155400));
var G__155410 = (n__155400 + 1);
val__155399 = G__155409;
n__155400 = G__155410;
continue;
}
} else
{return val__155399;
}
break;
}
});
var ci_reduce__155405 = (function (cicoll,f,val,idx){
var val__155401 = val;
var n__155402 = idx;

while(true){
if(cljs.core.truth_((n__155402 < cljs.core._count.call(null,cicoll))))
{{
var G__155411 = f.call(null,val__155401,cljs.core._nth.call(null,cicoll,n__155402));
var G__155412 = (n__155402 + 1);
val__155401 = G__155411;
n__155402 = G__155412;
continue;
}
} else
{return val__155401;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__155403.call(this,cicoll,f);
case  3 :
return ci_reduce__155404.call(this,cicoll,f,val);
case  4 :
return ci_reduce__155405.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__155413 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__155426 = null;
var G__155426__155427 = (function (_,f){
var this__155414 = this;
return cljs.core.ci_reduce.call(null,this__155414.a,f,(this__155414.a[this__155414.i]),(this__155414.i + 1));
});
var G__155426__155428 = (function (_,f,start){
var this__155415 = this;
return cljs.core.ci_reduce.call(null,this__155415.a,f,start,this__155415.i);
});
G__155426 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__155426__155427.call(this,_,f);
case  3 :
return G__155426__155428.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155426;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__155416 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__155417 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__155430 = null;
var G__155430__155431 = (function (coll,n){
var this__155418 = this;
var i__155419 = (n + this__155418.i);

if(cljs.core.truth_((i__155419 < this__155418.a.length)))
{return (this__155418.a[i__155419]);
} else
{return null;
}
});
var G__155430__155432 = (function (coll,n,not_found){
var this__155420 = this;
var i__155421 = (n + this__155420.i);

if(cljs.core.truth_((i__155421 < this__155420.a.length)))
{return (this__155420.a[i__155421]);
} else
{return not_found;
}
});
G__155430 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__155430__155431.call(this,coll,n);
case  3 :
return G__155430__155432.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155430;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__155422 = this;
return (this__155422.a.length - this__155422.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__155423 = this;
return (this__155423.a[this__155423.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__155424 = this;
if(cljs.core.truth_(((this__155424.i + 1) < this__155424.a.length)))
{return (new cljs.core.IndexedSeq(this__155424.a,(this__155424.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__155425 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__155434 = null;
var G__155434__155435 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__155434__155436 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__155434 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__155434__155435.call(this,array,f);
case  3 :
return G__155434__155436.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155434;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__155438 = null;
var G__155438__155439 = (function (array,k){
return (array[k]);
});
var G__155438__155440 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__155438 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__155438__155439.call(this,array,k);
case  3 :
return G__155438__155440.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155438;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__155442 = null;
var G__155442__155443 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__155442__155444 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__155442 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__155442__155443.call(this,array,n);
case  3 :
return G__155442__155444.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155442;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____155446 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____155446))
{var s__155447 = temp__3698__auto____155446;

return cljs.core._first.call(null,s__155447);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__155448 = cljs.core.next.call(null,s);
s = G__155448;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__155449 = cljs.core.seq.call(null,x);
var n__155450 = 0;

while(true){
if(cljs.core.truth_(s__155449))
{{
var G__155451 = cljs.core.next.call(null,s__155449);
var G__155452 = (n__155450 + 1);
s__155449 = G__155451;
n__155450 = G__155452;
continue;
}
} else
{return n__155450;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__155453 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__155454 = (function() { 
var G__155456__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__155457 = conj.call(null,coll,x);
var G__155458 = cljs.core.first.call(null,xs);
var G__155459 = cljs.core.next.call(null,xs);
coll = G__155457;
x = G__155458;
xs = G__155459;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__155456 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155456__delegate.call(this, coll, x, xs);
};
G__155456.cljs$lang$maxFixedArity = 2;
G__155456.cljs$lang$applyTo = (function (arglist__155460){
var coll = cljs.core.first(arglist__155460);
var x = cljs.core.first(cljs.core.next(arglist__155460));
var xs = cljs.core.rest(cljs.core.next(arglist__155460));
return G__155456__delegate.call(this, coll, x, xs);
});
return G__155456;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__155453.call(this,coll,x);
default:
return conj__155454.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__155454.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__155461 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__155462 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__155461.call(this,coll,n);
case  3 :
return nth__155462.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__155464 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__155465 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__155464.call(this,o,k);
case  3 :
return get__155465.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__155468 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__155469 = (function() { 
var G__155471__delegate = function (coll,k,v,kvs){
while(true){
var ret__155467 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__155472 = ret__155467;
var G__155473 = cljs.core.first.call(null,kvs);
var G__155474 = cljs.core.second.call(null,kvs);
var G__155475 = cljs.core.nnext.call(null,kvs);
coll = G__155472;
k = G__155473;
v = G__155474;
kvs = G__155475;
continue;
}
} else
{return ret__155467;
}
break;
}
};
var G__155471 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__155471__delegate.call(this, coll, k, v, kvs);
};
G__155471.cljs$lang$maxFixedArity = 3;
G__155471.cljs$lang$applyTo = (function (arglist__155476){
var coll = cljs.core.first(arglist__155476);
var k = cljs.core.first(cljs.core.next(arglist__155476));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__155476)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__155476)));
return G__155471__delegate.call(this, coll, k, v, kvs);
});
return G__155471;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__155468.call(this,coll,k,v);
default:
return assoc__155469.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__155469.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__155478 = (function (coll){
return coll;
});
var dissoc__155479 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__155480 = (function() { 
var G__155482__delegate = function (coll,k,ks){
while(true){
var ret__155477 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__155483 = ret__155477;
var G__155484 = cljs.core.first.call(null,ks);
var G__155485 = cljs.core.next.call(null,ks);
coll = G__155483;
k = G__155484;
ks = G__155485;
continue;
}
} else
{return ret__155477;
}
break;
}
};
var G__155482 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155482__delegate.call(this, coll, k, ks);
};
G__155482.cljs$lang$maxFixedArity = 2;
G__155482.cljs$lang$applyTo = (function (arglist__155486){
var coll = cljs.core.first(arglist__155486);
var k = cljs.core.first(cljs.core.next(arglist__155486));
var ks = cljs.core.rest(cljs.core.next(arglist__155486));
return G__155482__delegate.call(this, coll, k, ks);
});
return G__155482;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__155478.call(this,coll);
case  2 :
return dissoc__155479.call(this,coll,k);
default:
return dissoc__155480.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__155480.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__450__auto____155487 = o;

if(cljs.core.truth_((function (){var and__3546__auto____155488 = x__450__auto____155487;

if(cljs.core.truth_(and__3546__auto____155488))
{var and__3546__auto____155489 = x__450__auto____155487.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____155489))
{return cljs.core.not.call(null,x__450__auto____155487.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____155489;
}
} else
{return and__3546__auto____155488;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____155487);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__155491 = (function (coll){
return coll;
});
var disj__155492 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__155493 = (function() { 
var G__155495__delegate = function (coll,k,ks){
while(true){
var ret__155490 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__155496 = ret__155490;
var G__155497 = cljs.core.first.call(null,ks);
var G__155498 = cljs.core.next.call(null,ks);
coll = G__155496;
k = G__155497;
ks = G__155498;
continue;
}
} else
{return ret__155490;
}
break;
}
};
var G__155495 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155495__delegate.call(this, coll, k, ks);
};
G__155495.cljs$lang$maxFixedArity = 2;
G__155495.cljs$lang$applyTo = (function (arglist__155499){
var coll = cljs.core.first(arglist__155499);
var k = cljs.core.first(cljs.core.next(arglist__155499));
var ks = cljs.core.rest(cljs.core.next(arglist__155499));
return G__155495__delegate.call(this, coll, k, ks);
});
return G__155495;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__155491.call(this,coll);
case  2 :
return disj__155492.call(this,coll,k);
default:
return disj__155493.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__155493.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____155500 = x;

if(cljs.core.truth_((function (){var and__3546__auto____155501 = x__450__auto____155500;

if(cljs.core.truth_(and__3546__auto____155501))
{var and__3546__auto____155502 = x__450__auto____155500.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____155502))
{return cljs.core.not.call(null,x__450__auto____155500.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____155502;
}
} else
{return and__3546__auto____155501;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____155500);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____155503 = x;

if(cljs.core.truth_((function (){var and__3546__auto____155504 = x__450__auto____155503;

if(cljs.core.truth_(and__3546__auto____155504))
{var and__3546__auto____155505 = x__450__auto____155503.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____155505))
{return cljs.core.not.call(null,x__450__auto____155503.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____155505;
}
} else
{return and__3546__auto____155504;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____155503);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____155506 = x;

if(cljs.core.truth_((function (){var and__3546__auto____155507 = x__450__auto____155506;

if(cljs.core.truth_(and__3546__auto____155507))
{var and__3546__auto____155508 = x__450__auto____155506.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____155508))
{return cljs.core.not.call(null,x__450__auto____155506.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____155508;
}
} else
{return and__3546__auto____155507;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____155506);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____155509 = x;

if(cljs.core.truth_((function (){var and__3546__auto____155510 = x__450__auto____155509;

if(cljs.core.truth_(and__3546__auto____155510))
{var and__3546__auto____155511 = x__450__auto____155509.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____155511))
{return cljs.core.not.call(null,x__450__auto____155509.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____155511;
}
} else
{return and__3546__auto____155510;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____155509);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____155512 = x;

if(cljs.core.truth_((function (){var and__3546__auto____155513 = x__450__auto____155512;

if(cljs.core.truth_(and__3546__auto____155513))
{var and__3546__auto____155514 = x__450__auto____155512.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____155514))
{return cljs.core.not.call(null,x__450__auto____155512.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____155514;
}
} else
{return and__3546__auto____155513;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____155512);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____155515 = x;

if(cljs.core.truth_((function (){var and__3546__auto____155516 = x__450__auto____155515;

if(cljs.core.truth_(and__3546__auto____155516))
{var and__3546__auto____155517 = x__450__auto____155515.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____155517))
{return cljs.core.not.call(null,x__450__auto____155515.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____155517;
}
} else
{return and__3546__auto____155516;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____155515);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____155518 = x;

if(cljs.core.truth_((function (){var and__3546__auto____155519 = x__450__auto____155518;

if(cljs.core.truth_(and__3546__auto____155519))
{var and__3546__auto____155520 = x__450__auto____155518.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____155520))
{return cljs.core.not.call(null,x__450__auto____155518.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____155520;
}
} else
{return and__3546__auto____155519;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____155518);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__155521 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__155521.push(key);
}));
return keys__155521;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__450__auto____155522 = s;

if(cljs.core.truth_((function (){var and__3546__auto____155523 = x__450__auto____155522;

if(cljs.core.truth_(and__3546__auto____155523))
{var and__3546__auto____155524 = x__450__auto____155522.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____155524))
{return cljs.core.not.call(null,x__450__auto____155522.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____155524;
}
} else
{return and__3546__auto____155523;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____155522);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____155525 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____155525))
{return cljs.core.not.call(null,(function (){var or__3548__auto____155526 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____155526))
{return or__3548__auto____155526;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____155525;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____155527 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____155527))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____155527;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____155528 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____155528))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____155528;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____155529 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____155529))
{return (n == n.toFixed());
} else
{return and__3546__auto____155529;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____155530 = coll;

if(cljs.core.truth_(and__3546__auto____155530))
{var and__3546__auto____155531 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____155531))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____155531;
}
} else
{return and__3546__auto____155530;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___155536 = (function (x){
return true;
});
var distinct_QMARK___155537 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___155538 = (function() { 
var G__155540__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__155532 = cljs.core.set([y,x]);
var xs__155533 = more;

while(true){
var x__155534 = cljs.core.first.call(null,xs__155533);
var etc__155535 = cljs.core.next.call(null,xs__155533);

if(cljs.core.truth_(xs__155533))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__155532,x__155534)))
{return false;
} else
{{
var G__155541 = cljs.core.conj.call(null,s__155532,x__155534);
var G__155542 = etc__155535;
s__155532 = G__155541;
xs__155533 = G__155542;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__155540 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155540__delegate.call(this, x, y, more);
};
G__155540.cljs$lang$maxFixedArity = 2;
G__155540.cljs$lang$applyTo = (function (arglist__155543){
var x = cljs.core.first(arglist__155543);
var y = cljs.core.first(cljs.core.next(arglist__155543));
var more = cljs.core.rest(cljs.core.next(arglist__155543));
return G__155540__delegate.call(this, x, y, more);
});
return G__155540;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___155536.call(this,x);
case  2 :
return distinct_QMARK___155537.call(this,x,y);
default:
return distinct_QMARK___155538.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___155538.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__155544 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__155544)))
{return r__155544;
} else
{if(cljs.core.truth_(r__155544))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__155546 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__155547 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__155545 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__155545,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__155545);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__155546.call(this,comp);
case  2 :
return sort__155547.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__155549 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__155550 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__155549.call(this,keyfn,comp);
case  3 :
return sort_by__155550.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__155552 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__155553 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__155552.call(this,f,val);
case  3 :
return reduce__155553.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__155559 = (function (f,coll){
var temp__3695__auto____155555 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____155555))
{var s__155556 = temp__3695__auto____155555;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__155556),cljs.core.next.call(null,s__155556));
} else
{return f.call(null);
}
});
var seq_reduce__155560 = (function (f,val,coll){
var val__155557 = val;
var coll__155558 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__155558))
{{
var G__155562 = f.call(null,val__155557,cljs.core.first.call(null,coll__155558));
var G__155563 = cljs.core.next.call(null,coll__155558);
val__155557 = G__155562;
coll__155558 = G__155563;
continue;
}
} else
{return val__155557;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__155559.call(this,f,val);
case  3 :
return seq_reduce__155560.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__155564 = null;
var G__155564__155565 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__155564__155566 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__155564 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__155564__155565.call(this,coll,f);
case  3 :
return G__155564__155566.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155564;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___155568 = (function (){
return 0;
});
var _PLUS___155569 = (function (x){
return x;
});
var _PLUS___155570 = (function (x,y){
return (x + y);
});
var _PLUS___155571 = (function() { 
var G__155573__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__155573 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155573__delegate.call(this, x, y, more);
};
G__155573.cljs$lang$maxFixedArity = 2;
G__155573.cljs$lang$applyTo = (function (arglist__155574){
var x = cljs.core.first(arglist__155574);
var y = cljs.core.first(cljs.core.next(arglist__155574));
var more = cljs.core.rest(cljs.core.next(arglist__155574));
return G__155573__delegate.call(this, x, y, more);
});
return G__155573;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___155568.call(this);
case  1 :
return _PLUS___155569.call(this,x);
case  2 :
return _PLUS___155570.call(this,x,y);
default:
return _PLUS___155571.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___155571.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___155575 = (function (x){
return (- x);
});
var ___155576 = (function (x,y){
return (x - y);
});
var ___155577 = (function() { 
var G__155579__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__155579 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155579__delegate.call(this, x, y, more);
};
G__155579.cljs$lang$maxFixedArity = 2;
G__155579.cljs$lang$applyTo = (function (arglist__155580){
var x = cljs.core.first(arglist__155580);
var y = cljs.core.first(cljs.core.next(arglist__155580));
var more = cljs.core.rest(cljs.core.next(arglist__155580));
return G__155579__delegate.call(this, x, y, more);
});
return G__155579;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___155575.call(this,x);
case  2 :
return ___155576.call(this,x,y);
default:
return ___155577.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___155577.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___155581 = (function (){
return 1;
});
var _STAR___155582 = (function (x){
return x;
});
var _STAR___155583 = (function (x,y){
return (x * y);
});
var _STAR___155584 = (function() { 
var G__155586__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__155586 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155586__delegate.call(this, x, y, more);
};
G__155586.cljs$lang$maxFixedArity = 2;
G__155586.cljs$lang$applyTo = (function (arglist__155587){
var x = cljs.core.first(arglist__155587);
var y = cljs.core.first(cljs.core.next(arglist__155587));
var more = cljs.core.rest(cljs.core.next(arglist__155587));
return G__155586__delegate.call(this, x, y, more);
});
return G__155586;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___155581.call(this);
case  1 :
return _STAR___155582.call(this,x);
case  2 :
return _STAR___155583.call(this,x,y);
default:
return _STAR___155584.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___155584.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___155588 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___155589 = (function (x,y){
return (x / y);
});
var _SLASH___155590 = (function() { 
var G__155592__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__155592 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155592__delegate.call(this, x, y, more);
};
G__155592.cljs$lang$maxFixedArity = 2;
G__155592.cljs$lang$applyTo = (function (arglist__155593){
var x = cljs.core.first(arglist__155593);
var y = cljs.core.first(cljs.core.next(arglist__155593));
var more = cljs.core.rest(cljs.core.next(arglist__155593));
return G__155592__delegate.call(this, x, y, more);
});
return G__155592;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___155588.call(this,x);
case  2 :
return _SLASH___155589.call(this,x,y);
default:
return _SLASH___155590.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___155590.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___155594 = (function (x){
return true;
});
var _LT___155595 = (function (x,y){
return (x < y);
});
var _LT___155596 = (function() { 
var G__155598__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__155599 = y;
var G__155600 = cljs.core.first.call(null,more);
var G__155601 = cljs.core.next.call(null,more);
x = G__155599;
y = G__155600;
more = G__155601;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__155598 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155598__delegate.call(this, x, y, more);
};
G__155598.cljs$lang$maxFixedArity = 2;
G__155598.cljs$lang$applyTo = (function (arglist__155602){
var x = cljs.core.first(arglist__155602);
var y = cljs.core.first(cljs.core.next(arglist__155602));
var more = cljs.core.rest(cljs.core.next(arglist__155602));
return G__155598__delegate.call(this, x, y, more);
});
return G__155598;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___155594.call(this,x);
case  2 :
return _LT___155595.call(this,x,y);
default:
return _LT___155596.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___155596.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___155603 = (function (x){
return true;
});
var _LT__EQ___155604 = (function (x,y){
return (x <= y);
});
var _LT__EQ___155605 = (function() { 
var G__155607__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__155608 = y;
var G__155609 = cljs.core.first.call(null,more);
var G__155610 = cljs.core.next.call(null,more);
x = G__155608;
y = G__155609;
more = G__155610;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__155607 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155607__delegate.call(this, x, y, more);
};
G__155607.cljs$lang$maxFixedArity = 2;
G__155607.cljs$lang$applyTo = (function (arglist__155611){
var x = cljs.core.first(arglist__155611);
var y = cljs.core.first(cljs.core.next(arglist__155611));
var more = cljs.core.rest(cljs.core.next(arglist__155611));
return G__155607__delegate.call(this, x, y, more);
});
return G__155607;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___155603.call(this,x);
case  2 :
return _LT__EQ___155604.call(this,x,y);
default:
return _LT__EQ___155605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___155605.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___155612 = (function (x){
return true;
});
var _GT___155613 = (function (x,y){
return (x > y);
});
var _GT___155614 = (function() { 
var G__155616__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__155617 = y;
var G__155618 = cljs.core.first.call(null,more);
var G__155619 = cljs.core.next.call(null,more);
x = G__155617;
y = G__155618;
more = G__155619;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__155616 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155616__delegate.call(this, x, y, more);
};
G__155616.cljs$lang$maxFixedArity = 2;
G__155616.cljs$lang$applyTo = (function (arglist__155620){
var x = cljs.core.first(arglist__155620);
var y = cljs.core.first(cljs.core.next(arglist__155620));
var more = cljs.core.rest(cljs.core.next(arglist__155620));
return G__155616__delegate.call(this, x, y, more);
});
return G__155616;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___155612.call(this,x);
case  2 :
return _GT___155613.call(this,x,y);
default:
return _GT___155614.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___155614.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___155621 = (function (x){
return true;
});
var _GT__EQ___155622 = (function (x,y){
return (x >= y);
});
var _GT__EQ___155623 = (function() { 
var G__155625__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__155626 = y;
var G__155627 = cljs.core.first.call(null,more);
var G__155628 = cljs.core.next.call(null,more);
x = G__155626;
y = G__155627;
more = G__155628;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__155625 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155625__delegate.call(this, x, y, more);
};
G__155625.cljs$lang$maxFixedArity = 2;
G__155625.cljs$lang$applyTo = (function (arglist__155629){
var x = cljs.core.first(arglist__155629);
var y = cljs.core.first(cljs.core.next(arglist__155629));
var more = cljs.core.rest(cljs.core.next(arglist__155629));
return G__155625__delegate.call(this, x, y, more);
});
return G__155625;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___155621.call(this,x);
case  2 :
return _GT__EQ___155622.call(this,x,y);
default:
return _GT__EQ___155623.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___155623.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__155630 = (function (x){
return x;
});
var max__155631 = (function (x,y){
return ((x > y) ? x : y);
});
var max__155632 = (function() { 
var G__155634__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__155634 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155634__delegate.call(this, x, y, more);
};
G__155634.cljs$lang$maxFixedArity = 2;
G__155634.cljs$lang$applyTo = (function (arglist__155635){
var x = cljs.core.first(arglist__155635);
var y = cljs.core.first(cljs.core.next(arglist__155635));
var more = cljs.core.rest(cljs.core.next(arglist__155635));
return G__155634__delegate.call(this, x, y, more);
});
return G__155634;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__155630.call(this,x);
case  2 :
return max__155631.call(this,x,y);
default:
return max__155632.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__155632.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__155636 = (function (x){
return x;
});
var min__155637 = (function (x,y){
return ((x < y) ? x : y);
});
var min__155638 = (function() { 
var G__155640__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__155640 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155640__delegate.call(this, x, y, more);
};
G__155640.cljs$lang$maxFixedArity = 2;
G__155640.cljs$lang$applyTo = (function (arglist__155641){
var x = cljs.core.first(arglist__155641);
var y = cljs.core.first(cljs.core.next(arglist__155641));
var more = cljs.core.rest(cljs.core.next(arglist__155641));
return G__155640__delegate.call(this, x, y, more);
});
return G__155640;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__155636.call(this,x);
case  2 :
return min__155637.call(this,x,y);
default:
return min__155638.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__155638.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__155642 = (n % d);

return cljs.core.fix.call(null,((n - rem__155642) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__155643 = cljs.core.quot.call(null,n,d);

return (n - (d * q__155643));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__155644 = (function (){
return Math.random.call(null);
});
var rand__155645 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__155644.call(this);
case  1 :
return rand__155645.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___155647 = (function (x){
return true;
});
var _EQ__EQ___155648 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___155649 = (function() { 
var G__155651__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__155652 = y;
var G__155653 = cljs.core.first.call(null,more);
var G__155654 = cljs.core.next.call(null,more);
x = G__155652;
y = G__155653;
more = G__155654;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__155651 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155651__delegate.call(this, x, y, more);
};
G__155651.cljs$lang$maxFixedArity = 2;
G__155651.cljs$lang$applyTo = (function (arglist__155655){
var x = cljs.core.first(arglist__155655);
var y = cljs.core.first(cljs.core.next(arglist__155655));
var more = cljs.core.rest(cljs.core.next(arglist__155655));
return G__155651__delegate.call(this, x, y, more);
});
return G__155651;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___155647.call(this,x);
case  2 :
return _EQ__EQ___155648.call(this,x,y);
default:
return _EQ__EQ___155649.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___155649.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__155656 = n;
var xs__155657 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____155658 = xs__155657;

if(cljs.core.truth_(and__3546__auto____155658))
{return (n__155656 > 0);
} else
{return and__3546__auto____155658;
}
})()))
{{
var G__155659 = (n__155656 - 1);
var G__155660 = cljs.core.next.call(null,xs__155657);
n__155656 = G__155659;
xs__155657 = G__155660;
continue;
}
} else
{return xs__155657;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__155665 = null;
var G__155665__155666 = (function (coll,n){
var temp__3695__auto____155661 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____155661))
{var xs__155662 = temp__3695__auto____155661;

return cljs.core.first.call(null,xs__155662);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__155665__155667 = (function (coll,n,not_found){
var temp__3695__auto____155663 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____155663))
{var xs__155664 = temp__3695__auto____155663;

return cljs.core.first.call(null,xs__155664);
} else
{return not_found;
}
});
G__155665 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__155665__155666.call(this,coll,n);
case  3 :
return G__155665__155667.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155665;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___155669 = (function (){
return "";
});
var str_STAR___155670 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___155671 = (function() { 
var G__155673__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__155674 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__155675 = cljs.core.next.call(null,more);
sb = G__155674;
more = G__155675;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__155673 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__155673__delegate.call(this, x, ys);
};
G__155673.cljs$lang$maxFixedArity = 1;
G__155673.cljs$lang$applyTo = (function (arglist__155676){
var x = cljs.core.first(arglist__155676);
var ys = cljs.core.rest(arglist__155676);
return G__155673__delegate.call(this, x, ys);
});
return G__155673;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___155669.call(this);
case  1 :
return str_STAR___155670.call(this,x);
default:
return str_STAR___155671.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___155671.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__155677 = (function (){
return "";
});
var str__155678 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__155679 = (function() { 
var G__155681__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__155681 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__155681__delegate.call(this, x, ys);
};
G__155681.cljs$lang$maxFixedArity = 1;
G__155681.cljs$lang$applyTo = (function (arglist__155682){
var x = cljs.core.first(arglist__155682);
var ys = cljs.core.rest(arglist__155682);
return G__155681__delegate.call(this, x, ys);
});
return G__155681;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__155677.call(this);
case  1 :
return str__155678.call(this,x);
default:
return str__155679.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__155679.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__155683 = (function (s,start){
return s.substring(start);
});
var subs__155684 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__155683.call(this,s,start);
case  3 :
return subs__155684.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__155686 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__155687 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__155686.call(this,ns);
case  2 :
return symbol__155687.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__155689 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__155690 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__155689.call(this,ns);
case  2 :
return keyword__155690.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__155692 = cljs.core.seq.call(null,x);
var ys__155693 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__155692 === null)))
{return (ys__155693 === null);
} else
{if(cljs.core.truth_((ys__155693 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__155692),cljs.core.first.call(null,ys__155693))))
{{
var G__155694 = cljs.core.next.call(null,xs__155692);
var G__155695 = cljs.core.next.call(null,ys__155693);
xs__155692 = G__155694;
ys__155693 = G__155695;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__155696_SHARP_,p2__155697_SHARP_){
return cljs.core.hash_combine.call(null,p1__155696_SHARP_,cljs.core.hash.call(null,p2__155697_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__155698__155699 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__155698__155699))
{var G__155701__155703 = cljs.core.first.call(null,G__155698__155699);
var vec__155702__155704 = G__155701__155703;
var key_name__155705 = cljs.core.nth.call(null,vec__155702__155704,0,null);
var f__155706 = cljs.core.nth.call(null,vec__155702__155704,1,null);
var G__155698__155707 = G__155698__155699;

var G__155701__155708 = G__155701__155703;
var G__155698__155709 = G__155698__155707;

while(true){
var vec__155710__155711 = G__155701__155708;
var key_name__155712 = cljs.core.nth.call(null,vec__155710__155711,0,null);
var f__155713 = cljs.core.nth.call(null,vec__155710__155711,1,null);
var G__155698__155714 = G__155698__155709;

var str_name__155715 = cljs.core.name.call(null,key_name__155712);

obj[str_name__155715] = f__155713;
var temp__3698__auto____155716 = cljs.core.next.call(null,G__155698__155714);

if(cljs.core.truth_(temp__3698__auto____155716))
{var G__155698__155717 = temp__3698__auto____155716;

{
var G__155718 = cljs.core.first.call(null,G__155698__155717);
var G__155719 = G__155698__155717;
G__155701__155708 = G__155718;
G__155698__155709 = G__155719;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__155720 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__155721 = this;
return (new cljs.core.List(this__155721.meta,o,coll,(this__155721.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__155722 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__155723 = this;
return this__155723.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__155724 = this;
return this__155724.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__155725 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__155726 = this;
return this__155726.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__155727 = this;
return this__155727.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__155728 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__155729 = this;
return (new cljs.core.List(meta,this__155729.first,this__155729.rest,this__155729.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__155730 = this;
return this__155730.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__155731 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__155732 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__155733 = this;
return (new cljs.core.List(this__155733.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__155734 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__155735 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__155736 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__155737 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__155738 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__155739 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__155740 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__155741 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__155742 = this;
return this__155742.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__155743 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__155744){
var items = cljs.core.seq( arglist__155744 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__155745 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__155746 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__155747 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__155748 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__155748.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__155749 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__155750 = this;
return this__155750.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__155751 = this;
if(cljs.core.truth_((this__155751.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__155751.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__155752 = this;
return this__155752.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__155753 = this;
return (new cljs.core.Cons(meta,this__155753.first,this__155753.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__155754 = null;
var G__155754__155755 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__155754__155756 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__155754 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__155754__155755.call(this,string,f);
case  3 :
return G__155754__155756.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155754;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__155758 = null;
var G__155758__155759 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__155758__155760 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__155758 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__155758__155759.call(this,string,k);
case  3 :
return G__155758__155760.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155758;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__155762 = null;
var G__155762__155763 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__155762__155764 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__155762 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__155762__155763.call(this,string,n);
case  3 :
return G__155762__155764.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155762;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__155772 = null;
var G__155772__155773 = (function (tsym155766,coll){
var tsym155766__155768 = this;

var this$__155769 = tsym155766__155768;

return cljs.core.get.call(null,coll,this$__155769.toString());
});
var G__155772__155774 = (function (tsym155767,coll,not_found){
var tsym155767__155770 = this;

var this$__155771 = tsym155767__155770;

return cljs.core.get.call(null,coll,this$__155771.toString(),not_found);
});
G__155772 = function(tsym155767,coll,not_found){
switch(arguments.length){
case  2 :
return G__155772__155773.call(this,tsym155767,coll);
case  3 :
return G__155772__155774.call(this,tsym155767,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__155772;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__155776 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__155776;
} else
{lazy_seq.x = x__155776.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__155777 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__155778 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__155779 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__155780 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__155780.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__155781 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__155782 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__155783 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__155784 = this;
return this__155784.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__155785 = this;
return (new cljs.core.LazySeq(meta,this__155785.realized,this__155785.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__155786 = cljs.core.array.call(null);

var s__155787 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__155787)))
{ary__155786.push(cljs.core.first.call(null,s__155787));
{
var G__155788 = cljs.core.next.call(null,s__155787);
s__155787 = G__155788;
continue;
}
} else
{return ary__155786;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__155789 = s;
var i__155790 = n;
var sum__155791 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____155792 = (i__155790 > 0);

if(cljs.core.truth_(and__3546__auto____155792))
{return cljs.core.seq.call(null,s__155789);
} else
{return and__3546__auto____155792;
}
})()))
{{
var G__155793 = cljs.core.next.call(null,s__155789);
var G__155794 = (i__155790 - 1);
var G__155795 = (sum__155791 + 1);
s__155789 = G__155793;
i__155790 = G__155794;
sum__155791 = G__155795;
continue;
}
} else
{return sum__155791;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__155799 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__155800 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__155801 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__155796 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__155796))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__155796),concat.call(null,cljs.core.rest.call(null,s__155796),y));
} else
{return y;
}
})));
});
var concat__155802 = (function() { 
var G__155804__delegate = function (x,y,zs){
var cat__155798 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__155797 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__155797))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__155797),cat.call(null,cljs.core.rest.call(null,xys__155797),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__155798.call(null,concat.call(null,x,y),zs);
};
var G__155804 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155804__delegate.call(this, x, y, zs);
};
G__155804.cljs$lang$maxFixedArity = 2;
G__155804.cljs$lang$applyTo = (function (arglist__155805){
var x = cljs.core.first(arglist__155805);
var y = cljs.core.first(cljs.core.next(arglist__155805));
var zs = cljs.core.rest(cljs.core.next(arglist__155805));
return G__155804__delegate.call(this, x, y, zs);
});
return G__155804;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__155799.call(this);
case  1 :
return concat__155800.call(this,x);
case  2 :
return concat__155801.call(this,x,y);
default:
return concat__155802.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__155802.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___155806 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___155807 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___155808 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___155809 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___155810 = (function() { 
var G__155812__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__155812 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__155812__delegate.call(this, a, b, c, d, more);
};
G__155812.cljs$lang$maxFixedArity = 4;
G__155812.cljs$lang$applyTo = (function (arglist__155813){
var a = cljs.core.first(arglist__155813);
var b = cljs.core.first(cljs.core.next(arglist__155813));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__155813)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__155813))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__155813))));
return G__155812__delegate.call(this, a, b, c, d, more);
});
return G__155812;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___155806.call(this,a);
case  2 :
return list_STAR___155807.call(this,a,b);
case  3 :
return list_STAR___155808.call(this,a,b,c);
case  4 :
return list_STAR___155809.call(this,a,b,c,d);
default:
return list_STAR___155810.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___155810.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__155823 = (function (f,args){
var fixed_arity__155814 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__155814 + 1)) <= fixed_arity__155814)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__155824 = (function (f,x,args){
var arglist__155815 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__155816 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__155815,fixed_arity__155816) <= fixed_arity__155816)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__155815));
} else
{return f.cljs$lang$applyTo(arglist__155815);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__155815));
}
});
var apply__155825 = (function (f,x,y,args){
var arglist__155817 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__155818 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__155817,fixed_arity__155818) <= fixed_arity__155818)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__155817));
} else
{return f.cljs$lang$applyTo(arglist__155817);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__155817));
}
});
var apply__155826 = (function (f,x,y,z,args){
var arglist__155819 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__155820 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__155819,fixed_arity__155820) <= fixed_arity__155820)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__155819));
} else
{return f.cljs$lang$applyTo(arglist__155819);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__155819));
}
});
var apply__155827 = (function() { 
var G__155829__delegate = function (f,a,b,c,d,args){
var arglist__155821 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__155822 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__155821,fixed_arity__155822) <= fixed_arity__155822)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__155821));
} else
{return f.cljs$lang$applyTo(arglist__155821);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__155821));
}
};
var G__155829 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__155829__delegate.call(this, f, a, b, c, d, args);
};
G__155829.cljs$lang$maxFixedArity = 5;
G__155829.cljs$lang$applyTo = (function (arglist__155830){
var f = cljs.core.first(arglist__155830);
var a = cljs.core.first(cljs.core.next(arglist__155830));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__155830)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__155830))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__155830)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__155830)))));
return G__155829__delegate.call(this, f, a, b, c, d, args);
});
return G__155829;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__155823.call(this,f,a);
case  3 :
return apply__155824.call(this,f,a,b);
case  4 :
return apply__155825.call(this,f,a,b,c);
case  5 :
return apply__155826.call(this,f,a,b,c,d);
default:
return apply__155827.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__155827.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__155831){
var obj = cljs.core.first(arglist__155831);
var f = cljs.core.first(cljs.core.next(arglist__155831));
var args = cljs.core.rest(cljs.core.next(arglist__155831));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___155832 = (function (x){
return false;
});
var not_EQ___155833 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___155834 = (function() { 
var G__155836__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__155836 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155836__delegate.call(this, x, y, more);
};
G__155836.cljs$lang$maxFixedArity = 2;
G__155836.cljs$lang$applyTo = (function (arglist__155837){
var x = cljs.core.first(arglist__155837);
var y = cljs.core.first(cljs.core.next(arglist__155837));
var more = cljs.core.rest(cljs.core.next(arglist__155837));
return G__155836__delegate.call(this, x, y, more);
});
return G__155836;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___155832.call(this,x);
case  2 :
return not_EQ___155833.call(this,x,y);
default:
return not_EQ___155834.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___155834.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__155838 = pred;
var G__155839 = cljs.core.next.call(null,coll);
pred = G__155838;
coll = G__155839;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____155840 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____155840))
{return or__3548__auto____155840;
} else
{{
var G__155841 = pred;
var G__155842 = cljs.core.next.call(null,coll);
pred = G__155841;
coll = G__155842;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__155843 = null;
var G__155843__155844 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__155843__155845 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__155843__155846 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__155843__155847 = (function() { 
var G__155849__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__155849 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__155849__delegate.call(this, x, y, zs);
};
G__155849.cljs$lang$maxFixedArity = 2;
G__155849.cljs$lang$applyTo = (function (arglist__155850){
var x = cljs.core.first(arglist__155850);
var y = cljs.core.first(cljs.core.next(arglist__155850));
var zs = cljs.core.rest(cljs.core.next(arglist__155850));
return G__155849__delegate.call(this, x, y, zs);
});
return G__155849;
})()
;
G__155843 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__155843__155844.call(this);
case  1 :
return G__155843__155845.call(this,x);
case  2 :
return G__155843__155846.call(this,x,y);
default:
return G__155843__155847.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__155843.cljs$lang$maxFixedArity = 2;
G__155843.cljs$lang$applyTo = G__155843__155847.cljs$lang$applyTo;
return G__155843;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__155851__delegate = function (args){
return x;
};
var G__155851 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__155851__delegate.call(this, args);
};
G__155851.cljs$lang$maxFixedArity = 0;
G__155851.cljs$lang$applyTo = (function (arglist__155852){
var args = cljs.core.seq( arglist__155852 );;
return G__155851__delegate.call(this, args);
});
return G__155851;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__155856 = (function (){
return cljs.core.identity;
});
var comp__155857 = (function (f){
return f;
});
var comp__155858 = (function (f,g){
return (function() {
var G__155862 = null;
var G__155862__155863 = (function (){
return f.call(null,g.call(null));
});
var G__155862__155864 = (function (x){
return f.call(null,g.call(null,x));
});
var G__155862__155865 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__155862__155866 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__155862__155867 = (function() { 
var G__155869__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__155869 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__155869__delegate.call(this, x, y, z, args);
};
G__155869.cljs$lang$maxFixedArity = 3;
G__155869.cljs$lang$applyTo = (function (arglist__155870){
var x = cljs.core.first(arglist__155870);
var y = cljs.core.first(cljs.core.next(arglist__155870));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__155870)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__155870)));
return G__155869__delegate.call(this, x, y, z, args);
});
return G__155869;
})()
;
G__155862 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__155862__155863.call(this);
case  1 :
return G__155862__155864.call(this,x);
case  2 :
return G__155862__155865.call(this,x,y);
case  3 :
return G__155862__155866.call(this,x,y,z);
default:
return G__155862__155867.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__155862.cljs$lang$maxFixedArity = 3;
G__155862.cljs$lang$applyTo = G__155862__155867.cljs$lang$applyTo;
return G__155862;
})()
});
var comp__155859 = (function (f,g,h){
return (function() {
var G__155871 = null;
var G__155871__155872 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__155871__155873 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__155871__155874 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__155871__155875 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__155871__155876 = (function() { 
var G__155878__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__155878 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__155878__delegate.call(this, x, y, z, args);
};
G__155878.cljs$lang$maxFixedArity = 3;
G__155878.cljs$lang$applyTo = (function (arglist__155879){
var x = cljs.core.first(arglist__155879);
var y = cljs.core.first(cljs.core.next(arglist__155879));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__155879)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__155879)));
return G__155878__delegate.call(this, x, y, z, args);
});
return G__155878;
})()
;
G__155871 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__155871__155872.call(this);
case  1 :
return G__155871__155873.call(this,x);
case  2 :
return G__155871__155874.call(this,x,y);
case  3 :
return G__155871__155875.call(this,x,y,z);
default:
return G__155871__155876.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__155871.cljs$lang$maxFixedArity = 3;
G__155871.cljs$lang$applyTo = G__155871__155876.cljs$lang$applyTo;
return G__155871;
})()
});
var comp__155860 = (function() { 
var G__155880__delegate = function (f1,f2,f3,fs){
var fs__155853 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__155881__delegate = function (args){
var ret__155854 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__155853),args);
var fs__155855 = cljs.core.next.call(null,fs__155853);

while(true){
if(cljs.core.truth_(fs__155855))
{{
var G__155882 = cljs.core.first.call(null,fs__155855).call(null,ret__155854);
var G__155883 = cljs.core.next.call(null,fs__155855);
ret__155854 = G__155882;
fs__155855 = G__155883;
continue;
}
} else
{return ret__155854;
}
break;
}
};
var G__155881 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__155881__delegate.call(this, args);
};
G__155881.cljs$lang$maxFixedArity = 0;
G__155881.cljs$lang$applyTo = (function (arglist__155884){
var args = cljs.core.seq( arglist__155884 );;
return G__155881__delegate.call(this, args);
});
return G__155881;
})()
;
};
var G__155880 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__155880__delegate.call(this, f1, f2, f3, fs);
};
G__155880.cljs$lang$maxFixedArity = 3;
G__155880.cljs$lang$applyTo = (function (arglist__155885){
var f1 = cljs.core.first(arglist__155885);
var f2 = cljs.core.first(cljs.core.next(arglist__155885));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__155885)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__155885)));
return G__155880__delegate.call(this, f1, f2, f3, fs);
});
return G__155880;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__155856.call(this);
case  1 :
return comp__155857.call(this,f1);
case  2 :
return comp__155858.call(this,f1,f2);
case  3 :
return comp__155859.call(this,f1,f2,f3);
default:
return comp__155860.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__155860.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__155886 = (function (f,arg1){
return (function() { 
var G__155891__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__155891 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__155891__delegate.call(this, args);
};
G__155891.cljs$lang$maxFixedArity = 0;
G__155891.cljs$lang$applyTo = (function (arglist__155892){
var args = cljs.core.seq( arglist__155892 );;
return G__155891__delegate.call(this, args);
});
return G__155891;
})()
;
});
var partial__155887 = (function (f,arg1,arg2){
return (function() { 
var G__155893__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__155893 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__155893__delegate.call(this, args);
};
G__155893.cljs$lang$maxFixedArity = 0;
G__155893.cljs$lang$applyTo = (function (arglist__155894){
var args = cljs.core.seq( arglist__155894 );;
return G__155893__delegate.call(this, args);
});
return G__155893;
})()
;
});
var partial__155888 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__155895__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__155895 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__155895__delegate.call(this, args);
};
G__155895.cljs$lang$maxFixedArity = 0;
G__155895.cljs$lang$applyTo = (function (arglist__155896){
var args = cljs.core.seq( arglist__155896 );;
return G__155895__delegate.call(this, args);
});
return G__155895;
})()
;
});
var partial__155889 = (function() { 
var G__155897__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__155898__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__155898 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__155898__delegate.call(this, args);
};
G__155898.cljs$lang$maxFixedArity = 0;
G__155898.cljs$lang$applyTo = (function (arglist__155899){
var args = cljs.core.seq( arglist__155899 );;
return G__155898__delegate.call(this, args);
});
return G__155898;
})()
;
};
var G__155897 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__155897__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__155897.cljs$lang$maxFixedArity = 4;
G__155897.cljs$lang$applyTo = (function (arglist__155900){
var f = cljs.core.first(arglist__155900);
var arg1 = cljs.core.first(cljs.core.next(arglist__155900));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__155900)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__155900))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__155900))));
return G__155897__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__155897;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__155886.call(this,f,arg1);
case  3 :
return partial__155887.call(this,f,arg1,arg2);
case  4 :
return partial__155888.call(this,f,arg1,arg2,arg3);
default:
return partial__155889.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__155889.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__155901 = (function (f,x){
return (function() {
var G__155905 = null;
var G__155905__155906 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__155905__155907 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__155905__155908 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__155905__155909 = (function() { 
var G__155911__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__155911 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__155911__delegate.call(this, a, b, c, ds);
};
G__155911.cljs$lang$maxFixedArity = 3;
G__155911.cljs$lang$applyTo = (function (arglist__155912){
var a = cljs.core.first(arglist__155912);
var b = cljs.core.first(cljs.core.next(arglist__155912));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__155912)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__155912)));
return G__155911__delegate.call(this, a, b, c, ds);
});
return G__155911;
})()
;
G__155905 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__155905__155906.call(this,a);
case  2 :
return G__155905__155907.call(this,a,b);
case  3 :
return G__155905__155908.call(this,a,b,c);
default:
return G__155905__155909.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__155905.cljs$lang$maxFixedArity = 3;
G__155905.cljs$lang$applyTo = G__155905__155909.cljs$lang$applyTo;
return G__155905;
})()
});
var fnil__155902 = (function (f,x,y){
return (function() {
var G__155913 = null;
var G__155913__155914 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__155913__155915 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__155913__155916 = (function() { 
var G__155918__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__155918 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__155918__delegate.call(this, a, b, c, ds);
};
G__155918.cljs$lang$maxFixedArity = 3;
G__155918.cljs$lang$applyTo = (function (arglist__155919){
var a = cljs.core.first(arglist__155919);
var b = cljs.core.first(cljs.core.next(arglist__155919));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__155919)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__155919)));
return G__155918__delegate.call(this, a, b, c, ds);
});
return G__155918;
})()
;
G__155913 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__155913__155914.call(this,a,b);
case  3 :
return G__155913__155915.call(this,a,b,c);
default:
return G__155913__155916.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__155913.cljs$lang$maxFixedArity = 3;
G__155913.cljs$lang$applyTo = G__155913__155916.cljs$lang$applyTo;
return G__155913;
})()
});
var fnil__155903 = (function (f,x,y,z){
return (function() {
var G__155920 = null;
var G__155920__155921 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__155920__155922 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__155920__155923 = (function() { 
var G__155925__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__155925 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__155925__delegate.call(this, a, b, c, ds);
};
G__155925.cljs$lang$maxFixedArity = 3;
G__155925.cljs$lang$applyTo = (function (arglist__155926){
var a = cljs.core.first(arglist__155926);
var b = cljs.core.first(cljs.core.next(arglist__155926));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__155926)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__155926)));
return G__155925__delegate.call(this, a, b, c, ds);
});
return G__155925;
})()
;
G__155920 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__155920__155921.call(this,a,b);
case  3 :
return G__155920__155922.call(this,a,b,c);
default:
return G__155920__155923.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__155920.cljs$lang$maxFixedArity = 3;
G__155920.cljs$lang$applyTo = G__155920__155923.cljs$lang$applyTo;
return G__155920;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__155901.call(this,f,x);
case  3 :
return fnil__155902.call(this,f,x,y);
case  4 :
return fnil__155903.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__155929 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____155927 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____155927))
{var s__155928 = temp__3698__auto____155927;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__155928)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__155928)));
} else
{return null;
}
})));
});

return mapi__155929.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____155930 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____155930))
{var s__155931 = temp__3698__auto____155930;

var x__155932 = f.call(null,cljs.core.first.call(null,s__155931));

if(cljs.core.truth_((x__155932 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__155931));
} else
{return cljs.core.cons.call(null,x__155932,keep.call(null,f,cljs.core.rest.call(null,s__155931)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__155942 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____155939 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____155939))
{var s__155940 = temp__3698__auto____155939;

var x__155941 = f.call(null,idx,cljs.core.first.call(null,s__155940));

if(cljs.core.truth_((x__155941 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__155940));
} else
{return cljs.core.cons.call(null,x__155941,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__155940)));
}
} else
{return null;
}
})));
});

return keepi__155942.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__155987 = (function (p){
return (function() {
var ep1 = null;
var ep1__155992 = (function (){
return true;
});
var ep1__155993 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__155994 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____155949 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____155949))
{return p.call(null,y);
} else
{return and__3546__auto____155949;
}
})());
});
var ep1__155995 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____155950 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____155950))
{var and__3546__auto____155951 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____155951))
{return p.call(null,z);
} else
{return and__3546__auto____155951;
}
} else
{return and__3546__auto____155950;
}
})());
});
var ep1__155996 = (function() { 
var G__155998__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____155952 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____155952))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____155952;
}
})());
};
var G__155998 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__155998__delegate.call(this, x, y, z, args);
};
G__155998.cljs$lang$maxFixedArity = 3;
G__155998.cljs$lang$applyTo = (function (arglist__155999){
var x = cljs.core.first(arglist__155999);
var y = cljs.core.first(cljs.core.next(arglist__155999));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__155999)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__155999)));
return G__155998__delegate.call(this, x, y, z, args);
});
return G__155998;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__155992.call(this);
case  1 :
return ep1__155993.call(this,x);
case  2 :
return ep1__155994.call(this,x,y);
case  3 :
return ep1__155995.call(this,x,y,z);
default:
return ep1__155996.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__155996.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__155988 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__156000 = (function (){
return true;
});
var ep2__156001 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____155953 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____155953))
{return p2.call(null,x);
} else
{return and__3546__auto____155953;
}
})());
});
var ep2__156002 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____155954 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____155954))
{var and__3546__auto____155955 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____155955))
{var and__3546__auto____155956 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____155956))
{return p2.call(null,y);
} else
{return and__3546__auto____155956;
}
} else
{return and__3546__auto____155955;
}
} else
{return and__3546__auto____155954;
}
})());
});
var ep2__156003 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____155957 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____155957))
{var and__3546__auto____155958 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____155958))
{var and__3546__auto____155959 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____155959))
{var and__3546__auto____155960 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____155960))
{var and__3546__auto____155961 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____155961))
{return p2.call(null,z);
} else
{return and__3546__auto____155961;
}
} else
{return and__3546__auto____155960;
}
} else
{return and__3546__auto____155959;
}
} else
{return and__3546__auto____155958;
}
} else
{return and__3546__auto____155957;
}
})());
});
var ep2__156004 = (function() { 
var G__156006__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____155962 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____155962))
{return cljs.core.every_QMARK_.call(null,(function (p1__155933_SHARP_){
var and__3546__auto____155963 = p1.call(null,p1__155933_SHARP_);

if(cljs.core.truth_(and__3546__auto____155963))
{return p2.call(null,p1__155933_SHARP_);
} else
{return and__3546__auto____155963;
}
}),args);
} else
{return and__3546__auto____155962;
}
})());
};
var G__156006 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156006__delegate.call(this, x, y, z, args);
};
G__156006.cljs$lang$maxFixedArity = 3;
G__156006.cljs$lang$applyTo = (function (arglist__156007){
var x = cljs.core.first(arglist__156007);
var y = cljs.core.first(cljs.core.next(arglist__156007));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156007)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156007)));
return G__156006__delegate.call(this, x, y, z, args);
});
return G__156006;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__156000.call(this);
case  1 :
return ep2__156001.call(this,x);
case  2 :
return ep2__156002.call(this,x,y);
case  3 :
return ep2__156003.call(this,x,y,z);
default:
return ep2__156004.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__156004.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__155989 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__156008 = (function (){
return true;
});
var ep3__156009 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____155964 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____155964))
{var and__3546__auto____155965 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____155965))
{return p3.call(null,x);
} else
{return and__3546__auto____155965;
}
} else
{return and__3546__auto____155964;
}
})());
});
var ep3__156010 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____155966 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____155966))
{var and__3546__auto____155967 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____155967))
{var and__3546__auto____155968 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____155968))
{var and__3546__auto____155969 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____155969))
{var and__3546__auto____155970 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____155970))
{return p3.call(null,y);
} else
{return and__3546__auto____155970;
}
} else
{return and__3546__auto____155969;
}
} else
{return and__3546__auto____155968;
}
} else
{return and__3546__auto____155967;
}
} else
{return and__3546__auto____155966;
}
})());
});
var ep3__156011 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____155971 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____155971))
{var and__3546__auto____155972 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____155972))
{var and__3546__auto____155973 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____155973))
{var and__3546__auto____155974 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____155974))
{var and__3546__auto____155975 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____155975))
{var and__3546__auto____155976 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____155976))
{var and__3546__auto____155977 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____155977))
{var and__3546__auto____155978 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____155978))
{return p3.call(null,z);
} else
{return and__3546__auto____155978;
}
} else
{return and__3546__auto____155977;
}
} else
{return and__3546__auto____155976;
}
} else
{return and__3546__auto____155975;
}
} else
{return and__3546__auto____155974;
}
} else
{return and__3546__auto____155973;
}
} else
{return and__3546__auto____155972;
}
} else
{return and__3546__auto____155971;
}
})());
});
var ep3__156012 = (function() { 
var G__156014__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____155979 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____155979))
{return cljs.core.every_QMARK_.call(null,(function (p1__155934_SHARP_){
var and__3546__auto____155980 = p1.call(null,p1__155934_SHARP_);

if(cljs.core.truth_(and__3546__auto____155980))
{var and__3546__auto____155981 = p2.call(null,p1__155934_SHARP_);

if(cljs.core.truth_(and__3546__auto____155981))
{return p3.call(null,p1__155934_SHARP_);
} else
{return and__3546__auto____155981;
}
} else
{return and__3546__auto____155980;
}
}),args);
} else
{return and__3546__auto____155979;
}
})());
};
var G__156014 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156014__delegate.call(this, x, y, z, args);
};
G__156014.cljs$lang$maxFixedArity = 3;
G__156014.cljs$lang$applyTo = (function (arglist__156015){
var x = cljs.core.first(arglist__156015);
var y = cljs.core.first(cljs.core.next(arglist__156015));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156015)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156015)));
return G__156014__delegate.call(this, x, y, z, args);
});
return G__156014;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__156008.call(this);
case  1 :
return ep3__156009.call(this,x);
case  2 :
return ep3__156010.call(this,x,y);
case  3 :
return ep3__156011.call(this,x,y,z);
default:
return ep3__156012.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__156012.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__155990 = (function() { 
var G__156016__delegate = function (p1,p2,p3,ps){
var ps__155982 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__156017 = (function (){
return true;
});
var epn__156018 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__155935_SHARP_){
return p1__155935_SHARP_.call(null,x);
}),ps__155982);
});
var epn__156019 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__155936_SHARP_){
var and__3546__auto____155983 = p1__155936_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____155983))
{return p1__155936_SHARP_.call(null,y);
} else
{return and__3546__auto____155983;
}
}),ps__155982);
});
var epn__156020 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__155937_SHARP_){
var and__3546__auto____155984 = p1__155937_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____155984))
{var and__3546__auto____155985 = p1__155937_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____155985))
{return p1__155937_SHARP_.call(null,z);
} else
{return and__3546__auto____155985;
}
} else
{return and__3546__auto____155984;
}
}),ps__155982);
});
var epn__156021 = (function() { 
var G__156023__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____155986 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____155986))
{return cljs.core.every_QMARK_.call(null,(function (p1__155938_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__155938_SHARP_,args);
}),ps__155982);
} else
{return and__3546__auto____155986;
}
})());
};
var G__156023 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156023__delegate.call(this, x, y, z, args);
};
G__156023.cljs$lang$maxFixedArity = 3;
G__156023.cljs$lang$applyTo = (function (arglist__156024){
var x = cljs.core.first(arglist__156024);
var y = cljs.core.first(cljs.core.next(arglist__156024));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156024)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156024)));
return G__156023__delegate.call(this, x, y, z, args);
});
return G__156023;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__156017.call(this);
case  1 :
return epn__156018.call(this,x);
case  2 :
return epn__156019.call(this,x,y);
case  3 :
return epn__156020.call(this,x,y,z);
default:
return epn__156021.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__156021.cljs$lang$applyTo;
return epn;
})()
};
var G__156016 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156016__delegate.call(this, p1, p2, p3, ps);
};
G__156016.cljs$lang$maxFixedArity = 3;
G__156016.cljs$lang$applyTo = (function (arglist__156025){
var p1 = cljs.core.first(arglist__156025);
var p2 = cljs.core.first(cljs.core.next(arglist__156025));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156025)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156025)));
return G__156016__delegate.call(this, p1, p2, p3, ps);
});
return G__156016;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__155987.call(this,p1);
case  2 :
return every_pred__155988.call(this,p1,p2);
case  3 :
return every_pred__155989.call(this,p1,p2,p3);
default:
return every_pred__155990.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__155990.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__156065 = (function (p){
return (function() {
var sp1 = null;
var sp1__156070 = (function (){
return null;
});
var sp1__156071 = (function (x){
return p.call(null,x);
});
var sp1__156072 = (function (x,y){
var or__3548__auto____156027 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____156027))
{return or__3548__auto____156027;
} else
{return p.call(null,y);
}
});
var sp1__156073 = (function (x,y,z){
var or__3548__auto____156028 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____156028))
{return or__3548__auto____156028;
} else
{var or__3548__auto____156029 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____156029))
{return or__3548__auto____156029;
} else
{return p.call(null,z);
}
}
});
var sp1__156074 = (function() { 
var G__156076__delegate = function (x,y,z,args){
var or__3548__auto____156030 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____156030))
{return or__3548__auto____156030;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__156076 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156076__delegate.call(this, x, y, z, args);
};
G__156076.cljs$lang$maxFixedArity = 3;
G__156076.cljs$lang$applyTo = (function (arglist__156077){
var x = cljs.core.first(arglist__156077);
var y = cljs.core.first(cljs.core.next(arglist__156077));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156077)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156077)));
return G__156076__delegate.call(this, x, y, z, args);
});
return G__156076;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__156070.call(this);
case  1 :
return sp1__156071.call(this,x);
case  2 :
return sp1__156072.call(this,x,y);
case  3 :
return sp1__156073.call(this,x,y,z);
default:
return sp1__156074.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__156074.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__156066 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__156078 = (function (){
return null;
});
var sp2__156079 = (function (x){
var or__3548__auto____156031 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____156031))
{return or__3548__auto____156031;
} else
{return p2.call(null,x);
}
});
var sp2__156080 = (function (x,y){
var or__3548__auto____156032 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____156032))
{return or__3548__auto____156032;
} else
{var or__3548__auto____156033 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____156033))
{return or__3548__auto____156033;
} else
{var or__3548__auto____156034 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____156034))
{return or__3548__auto____156034;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__156081 = (function (x,y,z){
var or__3548__auto____156035 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____156035))
{return or__3548__auto____156035;
} else
{var or__3548__auto____156036 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____156036))
{return or__3548__auto____156036;
} else
{var or__3548__auto____156037 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____156037))
{return or__3548__auto____156037;
} else
{var or__3548__auto____156038 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____156038))
{return or__3548__auto____156038;
} else
{var or__3548__auto____156039 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____156039))
{return or__3548__auto____156039;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__156082 = (function() { 
var G__156084__delegate = function (x,y,z,args){
var or__3548__auto____156040 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____156040))
{return or__3548__auto____156040;
} else
{return cljs.core.some.call(null,(function (p1__155943_SHARP_){
var or__3548__auto____156041 = p1.call(null,p1__155943_SHARP_);

if(cljs.core.truth_(or__3548__auto____156041))
{return or__3548__auto____156041;
} else
{return p2.call(null,p1__155943_SHARP_);
}
}),args);
}
};
var G__156084 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156084__delegate.call(this, x, y, z, args);
};
G__156084.cljs$lang$maxFixedArity = 3;
G__156084.cljs$lang$applyTo = (function (arglist__156085){
var x = cljs.core.first(arglist__156085);
var y = cljs.core.first(cljs.core.next(arglist__156085));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156085)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156085)));
return G__156084__delegate.call(this, x, y, z, args);
});
return G__156084;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__156078.call(this);
case  1 :
return sp2__156079.call(this,x);
case  2 :
return sp2__156080.call(this,x,y);
case  3 :
return sp2__156081.call(this,x,y,z);
default:
return sp2__156082.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__156082.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__156067 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__156086 = (function (){
return null;
});
var sp3__156087 = (function (x){
var or__3548__auto____156042 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____156042))
{return or__3548__auto____156042;
} else
{var or__3548__auto____156043 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____156043))
{return or__3548__auto____156043;
} else
{return p3.call(null,x);
}
}
});
var sp3__156088 = (function (x,y){
var or__3548__auto____156044 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____156044))
{return or__3548__auto____156044;
} else
{var or__3548__auto____156045 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____156045))
{return or__3548__auto____156045;
} else
{var or__3548__auto____156046 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____156046))
{return or__3548__auto____156046;
} else
{var or__3548__auto____156047 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____156047))
{return or__3548__auto____156047;
} else
{var or__3548__auto____156048 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____156048))
{return or__3548__auto____156048;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__156089 = (function (x,y,z){
var or__3548__auto____156049 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____156049))
{return or__3548__auto____156049;
} else
{var or__3548__auto____156050 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____156050))
{return or__3548__auto____156050;
} else
{var or__3548__auto____156051 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____156051))
{return or__3548__auto____156051;
} else
{var or__3548__auto____156052 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____156052))
{return or__3548__auto____156052;
} else
{var or__3548__auto____156053 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____156053))
{return or__3548__auto____156053;
} else
{var or__3548__auto____156054 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____156054))
{return or__3548__auto____156054;
} else
{var or__3548__auto____156055 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____156055))
{return or__3548__auto____156055;
} else
{var or__3548__auto____156056 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____156056))
{return or__3548__auto____156056;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__156090 = (function() { 
var G__156092__delegate = function (x,y,z,args){
var or__3548__auto____156057 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____156057))
{return or__3548__auto____156057;
} else
{return cljs.core.some.call(null,(function (p1__155944_SHARP_){
var or__3548__auto____156058 = p1.call(null,p1__155944_SHARP_);

if(cljs.core.truth_(or__3548__auto____156058))
{return or__3548__auto____156058;
} else
{var or__3548__auto____156059 = p2.call(null,p1__155944_SHARP_);

if(cljs.core.truth_(or__3548__auto____156059))
{return or__3548__auto____156059;
} else
{return p3.call(null,p1__155944_SHARP_);
}
}
}),args);
}
};
var G__156092 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156092__delegate.call(this, x, y, z, args);
};
G__156092.cljs$lang$maxFixedArity = 3;
G__156092.cljs$lang$applyTo = (function (arglist__156093){
var x = cljs.core.first(arglist__156093);
var y = cljs.core.first(cljs.core.next(arglist__156093));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156093)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156093)));
return G__156092__delegate.call(this, x, y, z, args);
});
return G__156092;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__156086.call(this);
case  1 :
return sp3__156087.call(this,x);
case  2 :
return sp3__156088.call(this,x,y);
case  3 :
return sp3__156089.call(this,x,y,z);
default:
return sp3__156090.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__156090.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__156068 = (function() { 
var G__156094__delegate = function (p1,p2,p3,ps){
var ps__156060 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__156095 = (function (){
return null;
});
var spn__156096 = (function (x){
return cljs.core.some.call(null,(function (p1__155945_SHARP_){
return p1__155945_SHARP_.call(null,x);
}),ps__156060);
});
var spn__156097 = (function (x,y){
return cljs.core.some.call(null,(function (p1__155946_SHARP_){
var or__3548__auto____156061 = p1__155946_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____156061))
{return or__3548__auto____156061;
} else
{return p1__155946_SHARP_.call(null,y);
}
}),ps__156060);
});
var spn__156098 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__155947_SHARP_){
var or__3548__auto____156062 = p1__155947_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____156062))
{return or__3548__auto____156062;
} else
{var or__3548__auto____156063 = p1__155947_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____156063))
{return or__3548__auto____156063;
} else
{return p1__155947_SHARP_.call(null,z);
}
}
}),ps__156060);
});
var spn__156099 = (function() { 
var G__156101__delegate = function (x,y,z,args){
var or__3548__auto____156064 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____156064))
{return or__3548__auto____156064;
} else
{return cljs.core.some.call(null,(function (p1__155948_SHARP_){
return cljs.core.some.call(null,p1__155948_SHARP_,args);
}),ps__156060);
}
};
var G__156101 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156101__delegate.call(this, x, y, z, args);
};
G__156101.cljs$lang$maxFixedArity = 3;
G__156101.cljs$lang$applyTo = (function (arglist__156102){
var x = cljs.core.first(arglist__156102);
var y = cljs.core.first(cljs.core.next(arglist__156102));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156102)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156102)));
return G__156101__delegate.call(this, x, y, z, args);
});
return G__156101;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__156095.call(this);
case  1 :
return spn__156096.call(this,x);
case  2 :
return spn__156097.call(this,x,y);
case  3 :
return spn__156098.call(this,x,y,z);
default:
return spn__156099.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__156099.cljs$lang$applyTo;
return spn;
})()
};
var G__156094 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156094__delegate.call(this, p1, p2, p3, ps);
};
G__156094.cljs$lang$maxFixedArity = 3;
G__156094.cljs$lang$applyTo = (function (arglist__156103){
var p1 = cljs.core.first(arglist__156103);
var p2 = cljs.core.first(cljs.core.next(arglist__156103));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156103)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156103)));
return G__156094__delegate.call(this, p1, p2, p3, ps);
});
return G__156094;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__156065.call(this,p1);
case  2 :
return some_fn__156066.call(this,p1,p2);
case  3 :
return some_fn__156067.call(this,p1,p2,p3);
default:
return some_fn__156068.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__156068.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__156116 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156104 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156104))
{var s__156105 = temp__3698__auto____156104;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__156105)),map.call(null,f,cljs.core.rest.call(null,s__156105)));
} else
{return null;
}
})));
});
var map__156117 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__156106 = cljs.core.seq.call(null,c1);
var s2__156107 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____156108 = s1__156106;

if(cljs.core.truth_(and__3546__auto____156108))
{return s2__156107;
} else
{return and__3546__auto____156108;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__156106),cljs.core.first.call(null,s2__156107)),map.call(null,f,cljs.core.rest.call(null,s1__156106),cljs.core.rest.call(null,s2__156107)));
} else
{return null;
}
})));
});
var map__156118 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__156109 = cljs.core.seq.call(null,c1);
var s2__156110 = cljs.core.seq.call(null,c2);
var s3__156111 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____156112 = s1__156109;

if(cljs.core.truth_(and__3546__auto____156112))
{var and__3546__auto____156113 = s2__156110;

if(cljs.core.truth_(and__3546__auto____156113))
{return s3__156111;
} else
{return and__3546__auto____156113;
}
} else
{return and__3546__auto____156112;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__156109),cljs.core.first.call(null,s2__156110),cljs.core.first.call(null,s3__156111)),map.call(null,f,cljs.core.rest.call(null,s1__156109),cljs.core.rest.call(null,s2__156110),cljs.core.rest.call(null,s3__156111)));
} else
{return null;
}
})));
});
var map__156119 = (function() { 
var G__156121__delegate = function (f,c1,c2,c3,colls){
var step__156115 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__156114 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__156114)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__156114),step.call(null,map.call(null,cljs.core.rest,ss__156114)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__156026_SHARP_){
return cljs.core.apply.call(null,f,p1__156026_SHARP_);
}),step__156115.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__156121 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__156121__delegate.call(this, f, c1, c2, c3, colls);
};
G__156121.cljs$lang$maxFixedArity = 4;
G__156121.cljs$lang$applyTo = (function (arglist__156122){
var f = cljs.core.first(arglist__156122);
var c1 = cljs.core.first(cljs.core.next(arglist__156122));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156122)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__156122))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__156122))));
return G__156121__delegate.call(this, f, c1, c2, c3, colls);
});
return G__156121;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__156116.call(this,f,c1);
case  3 :
return map__156117.call(this,f,c1,c2);
case  4 :
return map__156118.call(this,f,c1,c2,c3);
default:
return map__156119.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__156119.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____156123 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156123))
{var s__156124 = temp__3698__auto____156123;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__156124),take.call(null,(n - 1),cljs.core.rest.call(null,s__156124)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__156127 = (function (n,coll){
while(true){
var s__156125 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____156126 = (n > 0);

if(cljs.core.truth_(and__3546__auto____156126))
{return s__156125;
} else
{return and__3546__auto____156126;
}
})()))
{{
var G__156128 = (n - 1);
var G__156129 = cljs.core.rest.call(null,s__156125);
n = G__156128;
coll = G__156129;
continue;
}
} else
{return s__156125;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__156127.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__156130 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__156131 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__156130.call(this,n);
case  2 :
return drop_last__156131.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__156133 = cljs.core.seq.call(null,coll);
var lead__156134 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__156134))
{{
var G__156135 = cljs.core.next.call(null,s__156133);
var G__156136 = cljs.core.next.call(null,lead__156134);
s__156133 = G__156135;
lead__156134 = G__156136;
continue;
}
} else
{return s__156133;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__156139 = (function (pred,coll){
while(true){
var s__156137 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____156138 = s__156137;

if(cljs.core.truth_(and__3546__auto____156138))
{return pred.call(null,cljs.core.first.call(null,s__156137));
} else
{return and__3546__auto____156138;
}
})()))
{{
var G__156140 = pred;
var G__156141 = cljs.core.rest.call(null,s__156137);
pred = G__156140;
coll = G__156141;
continue;
}
} else
{return s__156137;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__156139.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156142 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156142))
{var s__156143 = temp__3698__auto____156142;

return cljs.core.concat.call(null,s__156143,cycle.call(null,s__156143));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__156144 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__156145 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__156144.call(this,n);
case  2 :
return repeat__156145.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__156147 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__156148 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__156147.call(this,n);
case  2 :
return repeatedly__156148.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__156154 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__156150 = cljs.core.seq.call(null,c1);
var s2__156151 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____156152 = s1__156150;

if(cljs.core.truth_(and__3546__auto____156152))
{return s2__156151;
} else
{return and__3546__auto____156152;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__156150),cljs.core.cons.call(null,cljs.core.first.call(null,s2__156151),interleave.call(null,cljs.core.rest.call(null,s1__156150),cljs.core.rest.call(null,s2__156151))));
} else
{return null;
}
})));
});
var interleave__156155 = (function() { 
var G__156157__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__156153 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__156153)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__156153),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__156153)));
} else
{return null;
}
})));
};
var G__156157 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__156157__delegate.call(this, c1, c2, colls);
};
G__156157.cljs$lang$maxFixedArity = 2;
G__156157.cljs$lang$applyTo = (function (arglist__156158){
var c1 = cljs.core.first(arglist__156158);
var c2 = cljs.core.first(cljs.core.next(arglist__156158));
var colls = cljs.core.rest(cljs.core.next(arglist__156158));
return G__156157__delegate.call(this, c1, c2, colls);
});
return G__156157;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__156154.call(this,c1,c2);
default:
return interleave__156155.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__156155.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__156161 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____156159 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____156159))
{var coll__156160 = temp__3695__auto____156159;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__156160),cat.call(null,cljs.core.rest.call(null,coll__156160),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__156161.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__156162 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__156163 = (function() { 
var G__156165__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__156165 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__156165__delegate.call(this, f, coll, colls);
};
G__156165.cljs$lang$maxFixedArity = 2;
G__156165.cljs$lang$applyTo = (function (arglist__156166){
var f = cljs.core.first(arglist__156166);
var coll = cljs.core.first(cljs.core.next(arglist__156166));
var colls = cljs.core.rest(cljs.core.next(arglist__156166));
return G__156165__delegate.call(this, f, coll, colls);
});
return G__156165;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__156162.call(this,f,coll);
default:
return mapcat__156163.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__156163.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156167 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156167))
{var s__156168 = temp__3698__auto____156167;

var f__156169 = cljs.core.first.call(null,s__156168);
var r__156170 = cljs.core.rest.call(null,s__156168);

if(cljs.core.truth_(pred.call(null,f__156169)))
{return cljs.core.cons.call(null,f__156169,filter.call(null,pred,r__156170));
} else
{return filter.call(null,pred,r__156170);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__156172 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__156172.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__156171_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__156171_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__156179 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__156180 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156173 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156173))
{var s__156174 = temp__3698__auto____156173;

var p__156175 = cljs.core.take.call(null,n,s__156174);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__156175))))
{return cljs.core.cons.call(null,p__156175,partition.call(null,n,step,cljs.core.drop.call(null,step,s__156174)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__156181 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156176 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156176))
{var s__156177 = temp__3698__auto____156176;

var p__156178 = cljs.core.take.call(null,n,s__156177);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__156178))))
{return cljs.core.cons.call(null,p__156178,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__156177)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__156178,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__156179.call(this,n,step);
case  3 :
return partition__156180.call(this,n,step,pad);
case  4 :
return partition__156181.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__156187 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__156188 = (function (m,ks,not_found){
var sentinel__156183 = cljs.core.lookup_sentinel;
var m__156184 = m;
var ks__156185 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__156185))
{var m__156186 = cljs.core.get.call(null,m__156184,cljs.core.first.call(null,ks__156185),sentinel__156183);

if(cljs.core.truth_((sentinel__156183 === m__156186)))
{return not_found;
} else
{{
var G__156190 = sentinel__156183;
var G__156191 = m__156186;
var G__156192 = cljs.core.next.call(null,ks__156185);
sentinel__156183 = G__156190;
m__156184 = G__156191;
ks__156185 = G__156192;
continue;
}
}
} else
{return m__156184;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__156187.call(this,m,ks);
case  3 :
return get_in__156188.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__156193,v){
var vec__156194__156195 = p__156193;
var k__156196 = cljs.core.nth.call(null,vec__156194__156195,0,null);
var ks__156197 = cljs.core.nthnext.call(null,vec__156194__156195,1);

if(cljs.core.truth_(ks__156197))
{return cljs.core.assoc.call(null,m,k__156196,assoc_in.call(null,cljs.core.get.call(null,m,k__156196),ks__156197,v));
} else
{return cljs.core.assoc.call(null,m,k__156196,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__156198,f,args){
var vec__156199__156200 = p__156198;
var k__156201 = cljs.core.nth.call(null,vec__156199__156200,0,null);
var ks__156202 = cljs.core.nthnext.call(null,vec__156199__156200,1);

if(cljs.core.truth_(ks__156202))
{return cljs.core.assoc.call(null,m,k__156201,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__156201),ks__156202,f,args));
} else
{return cljs.core.assoc.call(null,m,k__156201,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__156201),args));
}
};
var update_in = function (m,p__156198,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__156198, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__156203){
var m = cljs.core.first(arglist__156203);
var p__156198 = cljs.core.first(cljs.core.next(arglist__156203));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156203)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156203)));
return update_in__delegate.call(this, m, p__156198, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__156204 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__156237 = null;
var G__156237__156238 = (function (coll,k){
var this__156205 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__156237__156239 = (function (coll,k,not_found){
var this__156206 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__156237 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__156237__156238.call(this,coll,k);
case  3 :
return G__156237__156239.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156237;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__156207 = this;
var new_array__156208 = cljs.core.aclone.call(null,this__156207.array);

(new_array__156208[k] = v);
return (new cljs.core.Vector(this__156207.meta,new_array__156208));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__156241 = null;
var G__156241__156242 = (function (tsym156209,k){
var this__156211 = this;
var tsym156209__156212 = this;

var coll__156213 = tsym156209__156212;

return cljs.core._lookup.call(null,coll__156213,k);
});
var G__156241__156243 = (function (tsym156210,k,not_found){
var this__156214 = this;
var tsym156210__156215 = this;

var coll__156216 = tsym156210__156215;

return cljs.core._lookup.call(null,coll__156216,k,not_found);
});
G__156241 = function(tsym156210,k,not_found){
switch(arguments.length){
case  2 :
return G__156241__156242.call(this,tsym156210,k);
case  3 :
return G__156241__156243.call(this,tsym156210,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156241;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__156217 = this;
var new_array__156218 = cljs.core.aclone.call(null,this__156217.array);

new_array__156218.push(o);
return (new cljs.core.Vector(this__156217.meta,new_array__156218));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__156245 = null;
var G__156245__156246 = (function (v,f){
var this__156219 = this;
return cljs.core.ci_reduce.call(null,this__156219.array,f);
});
var G__156245__156247 = (function (v,f,start){
var this__156220 = this;
return cljs.core.ci_reduce.call(null,this__156220.array,f,start);
});
G__156245 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__156245__156246.call(this,v,f);
case  3 :
return G__156245__156247.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156245;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__156221 = this;
if(cljs.core.truth_((this__156221.array.length > 0)))
{var vector_seq__156222 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__156221.array.length)))
{return cljs.core.cons.call(null,(this__156221.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__156222.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__156223 = this;
return this__156223.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__156224 = this;
var count__156225 = this__156224.array.length;

if(cljs.core.truth_((count__156225 > 0)))
{return (this__156224.array[(count__156225 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__156226 = this;
if(cljs.core.truth_((this__156226.array.length > 0)))
{var new_array__156227 = cljs.core.aclone.call(null,this__156226.array);

new_array__156227.pop();
return (new cljs.core.Vector(this__156226.meta,new_array__156227));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__156228 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__156229 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__156230 = this;
return (new cljs.core.Vector(meta,this__156230.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__156231 = this;
return this__156231.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__156249 = null;
var G__156249__156250 = (function (coll,n){
var this__156232 = this;
if(cljs.core.truth_((function (){var and__3546__auto____156233 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____156233))
{return (n < this__156232.array.length);
} else
{return and__3546__auto____156233;
}
})()))
{return (this__156232.array[n]);
} else
{return null;
}
});
var G__156249__156251 = (function (coll,n,not_found){
var this__156234 = this;
if(cljs.core.truth_((function (){var and__3546__auto____156235 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____156235))
{return (n < this__156234.array.length);
} else
{return and__3546__auto____156235;
}
})()))
{return (this__156234.array[n]);
} else
{return not_found;
}
});
G__156249 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__156249__156250.call(this,coll,n);
case  3 :
return G__156249__156251.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156249;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__156236 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__156236.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__156253){
var args = cljs.core.seq( arglist__156253 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__156254 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__156282 = null;
var G__156282__156283 = (function (coll,k){
var this__156255 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__156282__156284 = (function (coll,k,not_found){
var this__156256 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__156282 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__156282__156283.call(this,coll,k);
case  3 :
return G__156282__156284.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156282;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__156257 = this;
var v_pos__156258 = (this__156257.start + key);

return (new cljs.core.Subvec(this__156257.meta,cljs.core._assoc.call(null,this__156257.v,v_pos__156258,val),this__156257.start,((this__156257.end > (v_pos__156258 + 1)) ? this__156257.end : (v_pos__156258 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__156286 = null;
var G__156286__156287 = (function (tsym156259,k){
var this__156261 = this;
var tsym156259__156262 = this;

var coll__156263 = tsym156259__156262;

return cljs.core._lookup.call(null,coll__156263,k);
});
var G__156286__156288 = (function (tsym156260,k,not_found){
var this__156264 = this;
var tsym156260__156265 = this;

var coll__156266 = tsym156260__156265;

return cljs.core._lookup.call(null,coll__156266,k,not_found);
});
G__156286 = function(tsym156260,k,not_found){
switch(arguments.length){
case  2 :
return G__156286__156287.call(this,tsym156260,k);
case  3 :
return G__156286__156288.call(this,tsym156260,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156286;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__156267 = this;
return (new cljs.core.Subvec(this__156267.meta,cljs.core._assoc_n.call(null,this__156267.v,this__156267.end,o),this__156267.start,(this__156267.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__156290 = null;
var G__156290__156291 = (function (coll,f){
var this__156268 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__156290__156292 = (function (coll,f,start){
var this__156269 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__156290 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__156290__156291.call(this,coll,f);
case  3 :
return G__156290__156292.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156290;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__156270 = this;
var subvec_seq__156271 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__156270.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__156270.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__156271.call(null,this__156270.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__156272 = this;
return (this__156272.end - this__156272.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__156273 = this;
return cljs.core._nth.call(null,this__156273.v,(this__156273.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__156274 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__156274.start,this__156274.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__156274.meta,this__156274.v,this__156274.start,(this__156274.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__156275 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__156276 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__156277 = this;
return (new cljs.core.Subvec(meta,this__156277.v,this__156277.start,this__156277.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__156278 = this;
return this__156278.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__156294 = null;
var G__156294__156295 = (function (coll,n){
var this__156279 = this;
return cljs.core._nth.call(null,this__156279.v,(this__156279.start + n));
});
var G__156294__156296 = (function (coll,n,not_found){
var this__156280 = this;
return cljs.core._nth.call(null,this__156280.v,(this__156280.start + n),not_found);
});
G__156294 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__156294__156295.call(this,coll,n);
case  3 :
return G__156294__156296.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156294;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__156281 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__156281.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__156298 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__156299 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__156298.call(this,v,start);
case  3 :
return subvec__156299.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__156301 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__156302 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__156303 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__156304 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__156304.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__156305 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__156306 = this;
return cljs.core._first.call(null,this__156306.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__156307 = this;
var temp__3695__auto____156308 = cljs.core.next.call(null,this__156307.front);

if(cljs.core.truth_(temp__3695__auto____156308))
{var f1__156309 = temp__3695__auto____156308;

return (new cljs.core.PersistentQueueSeq(this__156307.meta,f1__156309,this__156307.rear));
} else
{if(cljs.core.truth_((this__156307.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__156307.meta,this__156307.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__156310 = this;
return this__156310.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__156311 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__156311.front,this__156311.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__156312 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__156313 = this;
if(cljs.core.truth_(this__156313.front))
{return (new cljs.core.PersistentQueue(this__156313.meta,(this__156313.count + 1),this__156313.front,cljs.core.conj.call(null,(function (){var or__3548__auto____156314 = this__156313.rear;

if(cljs.core.truth_(or__3548__auto____156314))
{return or__3548__auto____156314;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__156313.meta,(this__156313.count + 1),cljs.core.conj.call(null,this__156313.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__156315 = this;
var rear__156316 = cljs.core.seq.call(null,this__156315.rear);

if(cljs.core.truth_((function (){var or__3548__auto____156317 = this__156315.front;

if(cljs.core.truth_(or__3548__auto____156317))
{return or__3548__auto____156317;
} else
{return rear__156316;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__156315.front,cljs.core.seq.call(null,rear__156316)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__156318 = this;
return this__156318.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__156319 = this;
return cljs.core._first.call(null,this__156319.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__156320 = this;
if(cljs.core.truth_(this__156320.front))
{var temp__3695__auto____156321 = cljs.core.next.call(null,this__156320.front);

if(cljs.core.truth_(temp__3695__auto____156321))
{var f1__156322 = temp__3695__auto____156321;

return (new cljs.core.PersistentQueue(this__156320.meta,(this__156320.count - 1),f1__156322,this__156320.rear));
} else
{return (new cljs.core.PersistentQueue(this__156320.meta,(this__156320.count - 1),cljs.core.seq.call(null,this__156320.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__156323 = this;
return cljs.core.first.call(null,this__156323.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__156324 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__156325 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__156326 = this;
return (new cljs.core.PersistentQueue(meta,this__156326.count,this__156326.front,this__156326.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__156327 = this;
return this__156327.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__156328 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__156329 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__156330 = array.length;

var i__156331 = 0;

while(true){
if(cljs.core.truth_((i__156331 < len__156330)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__156331]))))
{return i__156331;
} else
{{
var G__156332 = (i__156331 + incr);
i__156331 = G__156332;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___156334 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___156335 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____156333 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____156333))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____156333;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___156334.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___156335.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__156338 = cljs.core.hash.call(null,a);
var b__156339 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__156338 < b__156339)))
{return -1;
} else
{if(cljs.core.truth_((a__156338 > b__156339)))
{return 1;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__156340 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__156367 = null;
var G__156367__156368 = (function (coll,k){
var this__156341 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__156367__156369 = (function (coll,k,not_found){
var this__156342 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__156342.strobj,(this__156342.strobj[k]),not_found);
});
G__156367 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__156367__156368.call(this,coll,k);
case  3 :
return G__156367__156369.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156367;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__156343 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__156344 = goog.object.clone.call(null,this__156343.strobj);
var overwrite_QMARK___156345 = new_strobj__156344.hasOwnProperty(k);

(new_strobj__156344[k] = v);
if(cljs.core.truth_(overwrite_QMARK___156345))
{return (new cljs.core.ObjMap(this__156343.meta,this__156343.keys,new_strobj__156344));
} else
{var new_keys__156346 = cljs.core.aclone.call(null,this__156343.keys);

new_keys__156346.push(k);
return (new cljs.core.ObjMap(this__156343.meta,new_keys__156346,new_strobj__156344));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__156343.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__156347 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__156347.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__156371 = null;
var G__156371__156372 = (function (tsym156348,k){
var this__156350 = this;
var tsym156348__156351 = this;

var coll__156352 = tsym156348__156351;

return cljs.core._lookup.call(null,coll__156352,k);
});
var G__156371__156373 = (function (tsym156349,k,not_found){
var this__156353 = this;
var tsym156349__156354 = this;

var coll__156355 = tsym156349__156354;

return cljs.core._lookup.call(null,coll__156355,k,not_found);
});
G__156371 = function(tsym156349,k,not_found){
switch(arguments.length){
case  2 :
return G__156371__156372.call(this,tsym156349,k);
case  3 :
return G__156371__156373.call(this,tsym156349,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156371;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__156356 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__156357 = this;
if(cljs.core.truth_((this__156357.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__156337_SHARP_){
return cljs.core.vector.call(null,p1__156337_SHARP_,(this__156357.strobj[p1__156337_SHARP_]));
}),this__156357.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__156358 = this;
return this__156358.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__156359 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__156360 = this;
return (new cljs.core.ObjMap(meta,this__156360.keys,this__156360.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__156361 = this;
return this__156361.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__156362 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__156362.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__156363 = this;
if(cljs.core.truth_((function (){var and__3546__auto____156364 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____156364))
{return this__156363.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____156364;
}
})()))
{var new_keys__156365 = cljs.core.aclone.call(null,this__156363.keys);
var new_strobj__156366 = goog.object.clone.call(null,this__156363.strobj);

new_keys__156365.splice(cljs.core.scan_array.call(null,1,k,new_keys__156365),1);
cljs.core.js_delete.call(null,new_strobj__156366,k);
return (new cljs.core.ObjMap(this__156363.meta,new_keys__156365,new_strobj__156366));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__156376 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__156414 = null;
var G__156414__156415 = (function (coll,k){
var this__156377 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__156414__156416 = (function (coll,k,not_found){
var this__156378 = this;
var bucket__156379 = (this__156378.hashobj[cljs.core.hash.call(null,k)]);
var i__156380 = (cljs.core.truth_(bucket__156379)?cljs.core.scan_array.call(null,2,k,bucket__156379):null);

if(cljs.core.truth_(i__156380))
{return (bucket__156379[(i__156380 + 1)]);
} else
{return not_found;
}
});
G__156414 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__156414__156415.call(this,coll,k);
case  3 :
return G__156414__156416.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156414;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__156381 = this;
var h__156382 = cljs.core.hash.call(null,k);
var bucket__156383 = (this__156381.hashobj[h__156382]);

if(cljs.core.truth_(bucket__156383))
{var new_bucket__156384 = cljs.core.aclone.call(null,bucket__156383);
var new_hashobj__156385 = goog.object.clone.call(null,this__156381.hashobj);

(new_hashobj__156385[h__156382] = new_bucket__156384);
var temp__3695__auto____156386 = cljs.core.scan_array.call(null,2,k,new_bucket__156384);

if(cljs.core.truth_(temp__3695__auto____156386))
{var i__156387 = temp__3695__auto____156386;

(new_bucket__156384[(i__156387 + 1)] = v);
return (new cljs.core.HashMap(this__156381.meta,this__156381.count,new_hashobj__156385));
} else
{new_bucket__156384.push(k,v);
return (new cljs.core.HashMap(this__156381.meta,(this__156381.count + 1),new_hashobj__156385));
}
} else
{var new_hashobj__156388 = goog.object.clone.call(null,this__156381.hashobj);

(new_hashobj__156388[h__156382] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__156381.meta,(this__156381.count + 1),new_hashobj__156388));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__156389 = this;
var bucket__156390 = (this__156389.hashobj[cljs.core.hash.call(null,k)]);
var i__156391 = (cljs.core.truth_(bucket__156390)?cljs.core.scan_array.call(null,2,k,bucket__156390):null);

if(cljs.core.truth_(i__156391))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__156418 = null;
var G__156418__156419 = (function (tsym156392,k){
var this__156394 = this;
var tsym156392__156395 = this;

var coll__156396 = tsym156392__156395;

return cljs.core._lookup.call(null,coll__156396,k);
});
var G__156418__156420 = (function (tsym156393,k,not_found){
var this__156397 = this;
var tsym156393__156398 = this;

var coll__156399 = tsym156393__156398;

return cljs.core._lookup.call(null,coll__156399,k,not_found);
});
G__156418 = function(tsym156393,k,not_found){
switch(arguments.length){
case  2 :
return G__156418__156419.call(this,tsym156393,k);
case  3 :
return G__156418__156420.call(this,tsym156393,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156418;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__156400 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__156401 = this;
if(cljs.core.truth_((this__156401.count > 0)))
{var hashes__156402 = cljs.core.js_keys.call(null,this__156401.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__156375_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__156401.hashobj[p1__156375_SHARP_])));
}),hashes__156402);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__156403 = this;
return this__156403.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__156404 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__156405 = this;
return (new cljs.core.HashMap(meta,this__156405.count,this__156405.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__156406 = this;
return this__156406.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__156407 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__156407.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__156408 = this;
var h__156409 = cljs.core.hash.call(null,k);
var bucket__156410 = (this__156408.hashobj[h__156409]);
var i__156411 = (cljs.core.truth_(bucket__156410)?cljs.core.scan_array.call(null,2,k,bucket__156410):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__156411)))
{return coll;
} else
{var new_hashobj__156412 = goog.object.clone.call(null,this__156408.hashobj);

if(cljs.core.truth_((3 > bucket__156410.length)))
{cljs.core.js_delete.call(null,new_hashobj__156412,h__156409);
} else
{var new_bucket__156413 = cljs.core.aclone.call(null,bucket__156410);

new_bucket__156413.splice(i__156411,2);
(new_hashobj__156412[h__156409] = new_bucket__156413);
}
return (new cljs.core.HashMap(this__156408.meta,(this__156408.count - 1),new_hashobj__156412));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__156422 = ks.length;

var i__156423 = 0;
var out__156424 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__156423 < len__156422)))
{{
var G__156425 = (i__156423 + 1);
var G__156426 = cljs.core.assoc.call(null,out__156424,(ks[i__156423]),(vs[i__156423]));
i__156423 = G__156425;
out__156424 = G__156426;
continue;
}
} else
{return out__156424;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__156427 = cljs.core.seq.call(null,keyvals);
var out__156428 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__156427))
{{
var G__156429 = cljs.core.nnext.call(null,in$__156427);
var G__156430 = cljs.core.assoc.call(null,out__156428,cljs.core.first.call(null,in$__156427),cljs.core.second.call(null,in$__156427));
in$__156427 = G__156429;
out__156428 = G__156430;
continue;
}
} else
{return out__156428;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__156431){
var keyvals = cljs.core.seq( arglist__156431 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__156432_SHARP_,p2__156433_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____156434 = p1__156432_SHARP_;

if(cljs.core.truth_(or__3548__auto____156434))
{return or__3548__auto____156434;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__156433_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__156435){
var maps = cljs.core.seq( arglist__156435 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__156438 = (function (m,e){
var k__156436 = cljs.core.first.call(null,e);
var v__156437 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__156436)))
{return cljs.core.assoc.call(null,m,k__156436,f.call(null,cljs.core.get.call(null,m,k__156436),v__156437));
} else
{return cljs.core.assoc.call(null,m,k__156436,v__156437);
}
});
var merge2__156440 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__156438,(function (){var or__3548__auto____156439 = m1;

if(cljs.core.truth_(or__3548__auto____156439))
{return or__3548__auto____156439;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__156440,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__156441){
var f = cljs.core.first(arglist__156441);
var maps = cljs.core.rest(arglist__156441);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__156443 = cljs.core.ObjMap.fromObject([],{});
var keys__156444 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__156444))
{var key__156445 = cljs.core.first.call(null,keys__156444);
var entry__156446 = cljs.core.get.call(null,map,key__156445,"\uFDD0'user/not-found");

{
var G__156447 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__156446,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__156443,key__156445,entry__156446):ret__156443);
var G__156448 = cljs.core.next.call(null,keys__156444);
ret__156443 = G__156447;
keys__156444 = G__156448;
continue;
}
} else
{return ret__156443;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__156449 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__156470 = null;
var G__156470__156471 = (function (coll,v){
var this__156450 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__156470__156472 = (function (coll,v,not_found){
var this__156451 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__156451.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__156470 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__156470__156471.call(this,coll,v);
case  3 :
return G__156470__156472.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156470;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__156474 = null;
var G__156474__156475 = (function (tsym156452,k){
var this__156454 = this;
var tsym156452__156455 = this;

var coll__156456 = tsym156452__156455;

return cljs.core._lookup.call(null,coll__156456,k);
});
var G__156474__156476 = (function (tsym156453,k,not_found){
var this__156457 = this;
var tsym156453__156458 = this;

var coll__156459 = tsym156453__156458;

return cljs.core._lookup.call(null,coll__156459,k,not_found);
});
G__156474 = function(tsym156453,k,not_found){
switch(arguments.length){
case  2 :
return G__156474__156475.call(this,tsym156453,k);
case  3 :
return G__156474__156476.call(this,tsym156453,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156474;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__156460 = this;
return (new cljs.core.Set(this__156460.meta,cljs.core.assoc.call(null,this__156460.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__156461 = this;
return cljs.core.keys.call(null,this__156461.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__156462 = this;
return (new cljs.core.Set(this__156462.meta,cljs.core.dissoc.call(null,this__156462.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__156463 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__156464 = this;
var and__3546__auto____156465 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____156465))
{var and__3546__auto____156466 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____156466))
{return cljs.core.every_QMARK_.call(null,(function (p1__156442_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__156442_SHARP_);
}),other);
} else
{return and__3546__auto____156466;
}
} else
{return and__3546__auto____156465;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__156467 = this;
return (new cljs.core.Set(meta,this__156467.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__156468 = this;
return this__156468.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__156469 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__156469.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__156479 = cljs.core.seq.call(null,coll);
var out__156480 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__156479))))
{{
var G__156481 = cljs.core.rest.call(null,in$__156479);
var G__156482 = cljs.core.conj.call(null,out__156480,cljs.core.first.call(null,in$__156479));
in$__156479 = G__156481;
out__156480 = G__156482;
continue;
}
} else
{return out__156480;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__156483 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____156484 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____156484))
{var e__156485 = temp__3695__auto____156484;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__156485));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__156483,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__156478_SHARP_){
var temp__3695__auto____156486 = cljs.core.find.call(null,smap,p1__156478_SHARP_);

if(cljs.core.truth_(temp__3695__auto____156486))
{var e__156487 = temp__3695__auto____156486;

return cljs.core.second.call(null,e__156487);
} else
{return p1__156478_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__156495 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__156488,seen){
while(true){
var vec__156489__156490 = p__156488;
var f__156491 = cljs.core.nth.call(null,vec__156489__156490,0,null);
var xs__156492 = vec__156489__156490;

var temp__3698__auto____156493 = cljs.core.seq.call(null,xs__156492);

if(cljs.core.truth_(temp__3698__auto____156493))
{var s__156494 = temp__3698__auto____156493;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__156491)))
{{
var G__156496 = cljs.core.rest.call(null,s__156494);
var G__156497 = seen;
p__156488 = G__156496;
seen = G__156497;
continue;
}
} else
{return cljs.core.cons.call(null,f__156491,step.call(null,cljs.core.rest.call(null,s__156494),cljs.core.conj.call(null,seen,f__156491)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__156495.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__156498 = cljs.core.Vector.fromArray([]);
var s__156499 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__156499)))
{{
var G__156500 = cljs.core.conj.call(null,ret__156498,cljs.core.first.call(null,s__156499));
var G__156501 = cljs.core.next.call(null,s__156499);
ret__156498 = G__156500;
s__156499 = G__156501;
continue;
}
} else
{return cljs.core.seq.call(null,ret__156498);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____156502 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____156502))
{return or__3548__auto____156502;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__156503 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__156503 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__156503 + 1));
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____156504 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____156504))
{return or__3548__auto____156504;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__156505 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__156505 > -1)))
{return cljs.core.subs.call(null,x,2,i__156505);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__156508 = cljs.core.ObjMap.fromObject([],{});
var ks__156509 = cljs.core.seq.call(null,keys);
var vs__156510 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____156511 = ks__156509;

if(cljs.core.truth_(and__3546__auto____156511))
{return vs__156510;
} else
{return and__3546__auto____156511;
}
})()))
{{
var G__156512 = cljs.core.assoc.call(null,map__156508,cljs.core.first.call(null,ks__156509),cljs.core.first.call(null,vs__156510));
var G__156513 = cljs.core.next.call(null,ks__156509);
var G__156514 = cljs.core.next.call(null,vs__156510);
map__156508 = G__156512;
ks__156509 = G__156513;
vs__156510 = G__156514;
continue;
}
} else
{return map__156508;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__156517 = (function (k,x){
return x;
});
var max_key__156518 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__156519 = (function() { 
var G__156521__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__156506_SHARP_,p2__156507_SHARP_){
return max_key.call(null,k,p1__156506_SHARP_,p2__156507_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__156521 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156521__delegate.call(this, k, x, y, more);
};
G__156521.cljs$lang$maxFixedArity = 3;
G__156521.cljs$lang$applyTo = (function (arglist__156522){
var k = cljs.core.first(arglist__156522);
var x = cljs.core.first(cljs.core.next(arglist__156522));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156522)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156522)));
return G__156521__delegate.call(this, k, x, y, more);
});
return G__156521;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__156517.call(this,k,x);
case  3 :
return max_key__156518.call(this,k,x,y);
default:
return max_key__156519.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__156519.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__156523 = (function (k,x){
return x;
});
var min_key__156524 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__156525 = (function() { 
var G__156527__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__156515_SHARP_,p2__156516_SHARP_){
return min_key.call(null,k,p1__156515_SHARP_,p2__156516_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__156527 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156527__delegate.call(this, k, x, y, more);
};
G__156527.cljs$lang$maxFixedArity = 3;
G__156527.cljs$lang$applyTo = (function (arglist__156528){
var k = cljs.core.first(arglist__156528);
var x = cljs.core.first(cljs.core.next(arglist__156528));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156528)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156528)));
return G__156527__delegate.call(this, k, x, y, more);
});
return G__156527;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__156523.call(this,k,x);
case  3 :
return min_key__156524.call(this,k,x,y);
default:
return min_key__156525.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__156525.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__156531 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__156532 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156529 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156529))
{var s__156530 = temp__3698__auto____156529;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__156530),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__156530)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__156531.call(this,n,step);
case  3 :
return partition_all__156532.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156534 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156534))
{var s__156535 = temp__3698__auto____156534;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__156535))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__156535),take_while.call(null,pred,cljs.core.rest.call(null,s__156535)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__156536 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__156537 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__156553 = null;
var G__156553__156554 = (function (rng,f){
var this__156538 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__156553__156555 = (function (rng,f,s){
var this__156539 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__156553 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__156553__156554.call(this,rng,f);
case  3 :
return G__156553__156555.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156553;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__156540 = this;
var comp__156541 = (cljs.core.truth_((this__156540.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__156541.call(null,this__156540.start,this__156540.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__156542 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__156542.end - this__156542.start) / this__156542.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__156543 = this;
return this__156543.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__156544 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__156544.meta,(this__156544.start + this__156544.step),this__156544.end,this__156544.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__156545 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__156546 = this;
return (new cljs.core.Range(meta,this__156546.start,this__156546.end,this__156546.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__156547 = this;
return this__156547.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__156557 = null;
var G__156557__156558 = (function (rng,n){
var this__156548 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__156548.start + (n * this__156548.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____156549 = (this__156548.start > this__156548.end);

if(cljs.core.truth_(and__3546__auto____156549))
{return cljs.core._EQ_.call(null,this__156548.step,0);
} else
{return and__3546__auto____156549;
}
})()))
{return this__156548.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__156557__156559 = (function (rng,n,not_found){
var this__156550 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__156550.start + (n * this__156550.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____156551 = (this__156550.start > this__156550.end);

if(cljs.core.truth_(and__3546__auto____156551))
{return cljs.core._EQ_.call(null,this__156550.step,0);
} else
{return and__3546__auto____156551;
}
})()))
{return this__156550.start;
} else
{return not_found;
}
}
});
G__156557 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__156557__156558.call(this,rng,n);
case  3 :
return G__156557__156559.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__156557;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__156552 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__156552.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__156561 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__156562 = (function (end){
return range.call(null,0,end,1);
});
var range__156563 = (function (start,end){
return range.call(null,start,end,1);
});
var range__156564 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__156561.call(this);
case  1 :
return range__156562.call(this,start);
case  2 :
return range__156563.call(this,start,end);
case  3 :
return range__156564.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156566 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156566))
{var s__156567 = temp__3698__auto____156566;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__156567),take_nth.call(null,n,cljs.core.drop.call(null,n,s__156567)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156569 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156569))
{var s__156570 = temp__3698__auto____156569;

var fst__156571 = cljs.core.first.call(null,s__156570);
var fv__156572 = f.call(null,fst__156571);
var run__156573 = cljs.core.cons.call(null,fst__156571,cljs.core.take_while.call(null,(function (p1__156568_SHARP_){
return cljs.core._EQ_.call(null,fv__156572,f.call(null,p1__156568_SHARP_));
}),cljs.core.next.call(null,s__156570)));

return cljs.core.cons.call(null,run__156573,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__156573),s__156570))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__156588 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____156584 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____156584))
{var s__156585 = temp__3695__auto____156584;

return reductions.call(null,f,cljs.core.first.call(null,s__156585),cljs.core.rest.call(null,s__156585));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__156589 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____156586 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____156586))
{var s__156587 = temp__3698__auto____156586;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__156587)),cljs.core.rest.call(null,s__156587));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__156588.call(this,f,init);
case  3 :
return reductions__156589.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__156592 = (function (f){
return (function() {
var G__156597 = null;
var G__156597__156598 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__156597__156599 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__156597__156600 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__156597__156601 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__156597__156602 = (function() { 
var G__156604__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__156604 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156604__delegate.call(this, x, y, z, args);
};
G__156604.cljs$lang$maxFixedArity = 3;
G__156604.cljs$lang$applyTo = (function (arglist__156605){
var x = cljs.core.first(arglist__156605);
var y = cljs.core.first(cljs.core.next(arglist__156605));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156605)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156605)));
return G__156604__delegate.call(this, x, y, z, args);
});
return G__156604;
})()
;
G__156597 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__156597__156598.call(this);
case  1 :
return G__156597__156599.call(this,x);
case  2 :
return G__156597__156600.call(this,x,y);
case  3 :
return G__156597__156601.call(this,x,y,z);
default:
return G__156597__156602.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__156597.cljs$lang$maxFixedArity = 3;
G__156597.cljs$lang$applyTo = G__156597__156602.cljs$lang$applyTo;
return G__156597;
})()
});
var juxt__156593 = (function (f,g){
return (function() {
var G__156606 = null;
var G__156606__156607 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__156606__156608 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__156606__156609 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__156606__156610 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__156606__156611 = (function() { 
var G__156613__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__156613 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156613__delegate.call(this, x, y, z, args);
};
G__156613.cljs$lang$maxFixedArity = 3;
G__156613.cljs$lang$applyTo = (function (arglist__156614){
var x = cljs.core.first(arglist__156614);
var y = cljs.core.first(cljs.core.next(arglist__156614));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156614)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156614)));
return G__156613__delegate.call(this, x, y, z, args);
});
return G__156613;
})()
;
G__156606 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__156606__156607.call(this);
case  1 :
return G__156606__156608.call(this,x);
case  2 :
return G__156606__156609.call(this,x,y);
case  3 :
return G__156606__156610.call(this,x,y,z);
default:
return G__156606__156611.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__156606.cljs$lang$maxFixedArity = 3;
G__156606.cljs$lang$applyTo = G__156606__156611.cljs$lang$applyTo;
return G__156606;
})()
});
var juxt__156594 = (function (f,g,h){
return (function() {
var G__156615 = null;
var G__156615__156616 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__156615__156617 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__156615__156618 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__156615__156619 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__156615__156620 = (function() { 
var G__156622__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__156622 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156622__delegate.call(this, x, y, z, args);
};
G__156622.cljs$lang$maxFixedArity = 3;
G__156622.cljs$lang$applyTo = (function (arglist__156623){
var x = cljs.core.first(arglist__156623);
var y = cljs.core.first(cljs.core.next(arglist__156623));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156623)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156623)));
return G__156622__delegate.call(this, x, y, z, args);
});
return G__156622;
})()
;
G__156615 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__156615__156616.call(this);
case  1 :
return G__156615__156617.call(this,x);
case  2 :
return G__156615__156618.call(this,x,y);
case  3 :
return G__156615__156619.call(this,x,y,z);
default:
return G__156615__156620.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__156615.cljs$lang$maxFixedArity = 3;
G__156615.cljs$lang$applyTo = G__156615__156620.cljs$lang$applyTo;
return G__156615;
})()
});
var juxt__156595 = (function() { 
var G__156624__delegate = function (f,g,h,fs){
var fs__156591 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__156625 = null;
var G__156625__156626 = (function (){
return cljs.core.reduce.call(null,(function (p1__156574_SHARP_,p2__156575_SHARP_){
return cljs.core.conj.call(null,p1__156574_SHARP_,p2__156575_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__156591);
});
var G__156625__156627 = (function (x){
return cljs.core.reduce.call(null,(function (p1__156576_SHARP_,p2__156577_SHARP_){
return cljs.core.conj.call(null,p1__156576_SHARP_,p2__156577_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__156591);
});
var G__156625__156628 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__156578_SHARP_,p2__156579_SHARP_){
return cljs.core.conj.call(null,p1__156578_SHARP_,p2__156579_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__156591);
});
var G__156625__156629 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__156580_SHARP_,p2__156581_SHARP_){
return cljs.core.conj.call(null,p1__156580_SHARP_,p2__156581_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__156591);
});
var G__156625__156630 = (function() { 
var G__156632__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__156582_SHARP_,p2__156583_SHARP_){
return cljs.core.conj.call(null,p1__156582_SHARP_,cljs.core.apply.call(null,p2__156583_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__156591);
};
var G__156632 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156632__delegate.call(this, x, y, z, args);
};
G__156632.cljs$lang$maxFixedArity = 3;
G__156632.cljs$lang$applyTo = (function (arglist__156633){
var x = cljs.core.first(arglist__156633);
var y = cljs.core.first(cljs.core.next(arglist__156633));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156633)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156633)));
return G__156632__delegate.call(this, x, y, z, args);
});
return G__156632;
})()
;
G__156625 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__156625__156626.call(this);
case  1 :
return G__156625__156627.call(this,x);
case  2 :
return G__156625__156628.call(this,x,y);
case  3 :
return G__156625__156629.call(this,x,y,z);
default:
return G__156625__156630.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__156625.cljs$lang$maxFixedArity = 3;
G__156625.cljs$lang$applyTo = G__156625__156630.cljs$lang$applyTo;
return G__156625;
})()
};
var G__156624 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__156624__delegate.call(this, f, g, h, fs);
};
G__156624.cljs$lang$maxFixedArity = 3;
G__156624.cljs$lang$applyTo = (function (arglist__156634){
var f = cljs.core.first(arglist__156634);
var g = cljs.core.first(cljs.core.next(arglist__156634));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156634)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__156634)));
return G__156624__delegate.call(this, f, g, h, fs);
});
return G__156624;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__156592.call(this,f);
case  2 :
return juxt__156593.call(this,f,g);
case  3 :
return juxt__156594.call(this,f,g,h);
default:
return juxt__156595.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__156595.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__156636 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__156639 = cljs.core.next.call(null,coll);
coll = G__156639;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__156637 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____156635 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____156635))
{return (n > 0);
} else
{return and__3546__auto____156635;
}
})()))
{{
var G__156640 = (n - 1);
var G__156641 = cljs.core.next.call(null,coll);
n = G__156640;
coll = G__156641;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__156636.call(this,n);
case  2 :
return dorun__156637.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__156642 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__156643 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__156642.call(this,n);
case  2 :
return doall__156643.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__156645 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__156645),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__156645),1)))
{return cljs.core.first.call(null,matches__156645);
} else
{return cljs.core.vec.call(null,matches__156645);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__156646 = re.exec(s);

if(cljs.core.truth_((matches__156646 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__156646),1)))
{return cljs.core.first.call(null,matches__156646);
} else
{return cljs.core.vec.call(null,matches__156646);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__156647 = cljs.core.re_find.call(null,re,s);
var match_idx__156648 = s.search(re);
var match_str__156649 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__156647))?cljs.core.first.call(null,match_data__156647):match_data__156647);
var post_match__156650 = cljs.core.subs.call(null,s,(match_idx__156648 + cljs.core.count.call(null,match_str__156649)));

if(cljs.core.truth_(match_data__156647))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__156647,re_seq.call(null,re,post_match__156650));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__156652__156653 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___156654 = cljs.core.nth.call(null,vec__156652__156653,0,null);
var flags__156655 = cljs.core.nth.call(null,vec__156652__156653,1,null);
var pattern__156656 = cljs.core.nth.call(null,vec__156652__156653,2,null);

return (new RegExp(pattern__156656,flags__156655));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__156651_SHARP_){
return print_one.call(null,p1__156651_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____156657 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____156657))
{var and__3546__auto____156661 = (function (){var x__450__auto____156658 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____156659 = x__450__auto____156658;

if(cljs.core.truth_(and__3546__auto____156659))
{var and__3546__auto____156660 = x__450__auto____156658.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____156660))
{return cljs.core.not.call(null,x__450__auto____156658.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____156660;
}
} else
{return and__3546__auto____156659;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____156658);
}
})();

if(cljs.core.truth_(and__3546__auto____156661))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____156661;
}
} else
{return and__3546__auto____156657;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____156662 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____156663 = x__450__auto____156662;

if(cljs.core.truth_(and__3546__auto____156663))
{var and__3546__auto____156664 = x__450__auto____156662.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____156664))
{return cljs.core.not.call(null,x__450__auto____156662.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____156664;
}
} else
{return and__3546__auto____156663;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____156662);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__156665 = cljs.core.first.call(null,objs);
var sb__156666 = (new goog.string.StringBuffer());

var G__156667__156668 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__156667__156668))
{var obj__156669 = cljs.core.first.call(null,G__156667__156668);
var G__156667__156670 = G__156667__156668;

while(true){
if(cljs.core.truth_((obj__156669 === first_obj__156665)))
{} else
{sb__156666.append(" ");
}
var G__156671__156672 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__156669,opts));

if(cljs.core.truth_(G__156671__156672))
{var string__156673 = cljs.core.first.call(null,G__156671__156672);
var G__156671__156674 = G__156671__156672;

while(true){
sb__156666.append(string__156673);
var temp__3698__auto____156675 = cljs.core.next.call(null,G__156671__156674);

if(cljs.core.truth_(temp__3698__auto____156675))
{var G__156671__156676 = temp__3698__auto____156675;

{
var G__156679 = cljs.core.first.call(null,G__156671__156676);
var G__156680 = G__156671__156676;
string__156673 = G__156679;
G__156671__156674 = G__156680;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____156677 = cljs.core.next.call(null,G__156667__156670);

if(cljs.core.truth_(temp__3698__auto____156677))
{var G__156667__156678 = temp__3698__auto____156677;

{
var G__156681 = cljs.core.first.call(null,G__156667__156678);
var G__156682 = G__156667__156678;
obj__156669 = G__156681;
G__156667__156670 = G__156682;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__156666);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__156683 = cljs.core.first.call(null,objs);

var G__156684__156685 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__156684__156685))
{var obj__156686 = cljs.core.first.call(null,G__156684__156685);
var G__156684__156687 = G__156684__156685;

while(true){
if(cljs.core.truth_((obj__156686 === first_obj__156683)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__156688__156689 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__156686,opts));

if(cljs.core.truth_(G__156688__156689))
{var string__156690 = cljs.core.first.call(null,G__156688__156689);
var G__156688__156691 = G__156688__156689;

while(true){
cljs.core.string_print.call(null,string__156690);
var temp__3698__auto____156692 = cljs.core.next.call(null,G__156688__156691);

if(cljs.core.truth_(temp__3698__auto____156692))
{var G__156688__156693 = temp__3698__auto____156692;

{
var G__156696 = cljs.core.first.call(null,G__156688__156693);
var G__156697 = G__156688__156693;
string__156690 = G__156696;
G__156688__156691 = G__156697;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____156694 = cljs.core.next.call(null,G__156684__156687);

if(cljs.core.truth_(temp__3698__auto____156694))
{var G__156684__156695 = temp__3698__auto____156694;

{
var G__156698 = cljs.core.first.call(null,G__156684__156695);
var G__156699 = G__156684__156695;
obj__156686 = G__156698;
G__156684__156687 = G__156699;
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
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__156700){
var objs = cljs.core.seq( arglist__156700 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__156701){
var objs = cljs.core.seq( arglist__156701 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__156702){
var objs = cljs.core.seq( arglist__156702 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__156703){
var objs = cljs.core.seq( arglist__156703 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__156704){
var objs = cljs.core.seq( arglist__156704 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__156705 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__156705,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____156706 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____156706))
{var nspc__156707 = temp__3698__auto____156706;

return cljs.core.str.call(null,nspc__156707,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____156708 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____156708))
{var nspc__156709 = temp__3698__auto____156708;

return cljs.core.str.call(null,nspc__156709,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__156710 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__156710,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__156711 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__156712 = this;
var G__156713__156714 = cljs.core.seq.call(null,this__156712.watches);

if(cljs.core.truth_(G__156713__156714))
{var G__156716__156718 = cljs.core.first.call(null,G__156713__156714);
var vec__156717__156719 = G__156716__156718;
var key__156720 = cljs.core.nth.call(null,vec__156717__156719,0,null);
var f__156721 = cljs.core.nth.call(null,vec__156717__156719,1,null);
var G__156713__156722 = G__156713__156714;

var G__156716__156723 = G__156716__156718;
var G__156713__156724 = G__156713__156722;

while(true){
var vec__156725__156726 = G__156716__156723;
var key__156727 = cljs.core.nth.call(null,vec__156725__156726,0,null);
var f__156728 = cljs.core.nth.call(null,vec__156725__156726,1,null);
var G__156713__156729 = G__156713__156724;

f__156728.call(null,key__156727,this$,oldval,newval);
var temp__3698__auto____156730 = cljs.core.next.call(null,G__156713__156729);

if(cljs.core.truth_(temp__3698__auto____156730))
{var G__156713__156731 = temp__3698__auto____156730;

{
var G__156738 = cljs.core.first.call(null,G__156713__156731);
var G__156739 = G__156713__156731;
G__156716__156723 = G__156738;
G__156713__156724 = G__156739;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__156732 = this;
return this$.watches = cljs.core.assoc.call(null,this__156732.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__156733 = this;
return this$.watches = cljs.core.dissoc.call(null,this__156733.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__156734 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__156734.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__156735 = this;
return this__156735.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__156736 = this;
return this__156736.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__156737 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__156746 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__156747 = (function() { 
var G__156749__delegate = function (x,p__156740){
var map__156741__156742 = p__156740;
var map__156741__156743 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__156741__156742))?cljs.core.apply.call(null,cljs.core.hash_map,map__156741__156742):map__156741__156742);
var validator__156744 = cljs.core.get.call(null,map__156741__156743,"\uFDD0'validator");
var meta__156745 = cljs.core.get.call(null,map__156741__156743,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__156745,validator__156744,null));
};
var G__156749 = function (x,var_args){
var p__156740 = null;
if (goog.isDef(var_args)) {
  p__156740 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__156749__delegate.call(this, x, p__156740);
};
G__156749.cljs$lang$maxFixedArity = 1;
G__156749.cljs$lang$applyTo = (function (arglist__156750){
var x = cljs.core.first(arglist__156750);
var p__156740 = cljs.core.rest(arglist__156750);
return G__156749__delegate.call(this, x, p__156740);
});
return G__156749;
})()
;
atom = function(x,var_args){
var p__156740 = var_args;
switch(arguments.length){
case  1 :
return atom__156746.call(this,x);
default:
return atom__156747.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__156747.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____156751 = a.validator;

if(cljs.core.truth_(temp__3698__auto____156751))
{var validate__156752 = temp__3698__auto____156751;

if(cljs.core.truth_(validate__156752.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__156753 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__156753,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___156754 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___156755 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___156756 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___156757 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___156758 = (function() { 
var G__156760__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__156760 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__156760__delegate.call(this, a, f, x, y, z, more);
};
G__156760.cljs$lang$maxFixedArity = 5;
G__156760.cljs$lang$applyTo = (function (arglist__156761){
var a = cljs.core.first(arglist__156761);
var f = cljs.core.first(cljs.core.next(arglist__156761));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__156761)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__156761))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__156761)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__156761)))));
return G__156760__delegate.call(this, a, f, x, y, z, more);
});
return G__156760;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___156754.call(this,a,f);
case  3 :
return swap_BANG___156755.call(this,a,f,x);
case  4 :
return swap_BANG___156756.call(this,a,f,x,y);
case  5 :
return swap_BANG___156757.call(this,a,f,x,y,z);
default:
return swap_BANG___156758.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___156758.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__156762){
var iref = cljs.core.first(arglist__156762);
var f = cljs.core.first(cljs.core.next(arglist__156762));
var args = cljs.core.rest(cljs.core.next(arglist__156762));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__156763 = (function (){
return gensym.call(null,"G__");
});
var gensym__156764 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__156763.call(this);
case  1 :
return gensym__156764.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__156766 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__156766.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__156767 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__156767.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__156767.state,this__156767.f);
}
return cljs.core.deref.call(null,this__156767.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__156768){
var body = cljs.core.seq( arglist__156768 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__156769__156770 = options;
var map__156769__156771 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__156769__156770))?cljs.core.apply.call(null,cljs.core.hash_map,map__156769__156770):map__156769__156770);
var keywordize_keys__156772 = cljs.core.get.call(null,map__156769__156771,"\uFDD0'keywordize-keys");
var keyfn__156773 = (cljs.core.truth_(keywordize_keys__156772)?cljs.core.keyword:cljs.core.str);
var f__156779 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____156778 = (function iter__156774(s__156775){
return (new cljs.core.LazySeq(null,false,(function (){
var s__156775__156776 = s__156775;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__156775__156776)))
{var k__156777 = cljs.core.first.call(null,s__156775__156776);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__156773.call(null,k__156777),thisfn.call(null,(x[k__156777]))]),iter__156774.call(null,cljs.core.rest.call(null,s__156775__156776)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____156778.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__156779.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__156780){
var x = cljs.core.first(arglist__156780);
var options = cljs.core.rest(arglist__156780);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__156781 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__156785__delegate = function (args){
var temp__3695__auto____156782 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__156781),args);

if(cljs.core.truth_(temp__3695__auto____156782))
{var v__156783 = temp__3695__auto____156782;

return v__156783;
} else
{var ret__156784 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__156781,cljs.core.assoc,args,ret__156784);
return ret__156784;
}
};
var G__156785 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__156785__delegate.call(this, args);
};
G__156785.cljs$lang$maxFixedArity = 0;
G__156785.cljs$lang$applyTo = (function (arglist__156786){
var args = cljs.core.seq( arglist__156786 );;
return G__156785__delegate.call(this, args);
});
return G__156785;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__156788 = (function (f){
while(true){
var ret__156787 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__156787)))
{{
var G__156791 = ret__156787;
f = G__156791;
continue;
}
} else
{return ret__156787;
}
break;
}
});
var trampoline__156789 = (function() { 
var G__156792__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__156792 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__156792__delegate.call(this, f, args);
};
G__156792.cljs$lang$maxFixedArity = 1;
G__156792.cljs$lang$applyTo = (function (arglist__156793){
var f = cljs.core.first(arglist__156793);
var args = cljs.core.rest(arglist__156793);
return G__156792__delegate.call(this, f, args);
});
return G__156792;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__156788.call(this,f);
default:
return trampoline__156789.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__156789.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__156794 = (function (){
return rand.call(null,1);
});
var rand__156795 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__156794.call(this);
case  1 :
return rand__156795.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__156797 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__156797,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__156797,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___156806 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___156807 = (function (h,child,parent){
var or__3548__auto____156798 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____156798))
{return or__3548__auto____156798;
} else
{var or__3548__auto____156799 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____156799))
{return or__3548__auto____156799;
} else
{var and__3546__auto____156800 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____156800))
{var and__3546__auto____156801 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____156801))
{var and__3546__auto____156802 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____156802))
{var ret__156803 = true;
var i__156804 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____156805 = cljs.core.not.call(null,ret__156803);

if(cljs.core.truth_(or__3548__auto____156805))
{return or__3548__auto____156805;
} else
{return cljs.core._EQ_.call(null,i__156804,cljs.core.count.call(null,parent));
}
})()))
{return ret__156803;
} else
{{
var G__156809 = isa_QMARK_.call(null,h,child.call(null,i__156804),parent.call(null,i__156804));
var G__156810 = (i__156804 + 1);
ret__156803 = G__156809;
i__156804 = G__156810;
continue;
}
}
break;
}
} else
{return and__3546__auto____156802;
}
} else
{return and__3546__auto____156801;
}
} else
{return and__3546__auto____156800;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___156806.call(this,h,child);
case  3 :
return isa_QMARK___156807.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__156811 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__156812 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__156811.call(this,h);
case  2 :
return parents__156812.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__156814 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__156815 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__156814.call(this,h);
case  2 :
return ancestors__156815.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__156817 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__156818 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__156817.call(this,h);
case  2 :
return descendants__156818.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__156828 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__156829 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__156823 = "\uFDD0'parents".call(null,h);
var td__156824 = "\uFDD0'descendants".call(null,h);
var ta__156825 = "\uFDD0'ancestors".call(null,h);
var tf__156826 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____156827 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__156823.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__156825.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__156825.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__156823,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__156826.call(null,"\uFDD0'ancestors".call(null,h),tag,td__156824,parent,ta__156825),"\uFDD0'descendants":tf__156826.call(null,"\uFDD0'descendants".call(null,h),parent,ta__156825,tag,td__156824)});
})());

if(cljs.core.truth_(or__3548__auto____156827))
{return or__3548__auto____156827;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__156828.call(this,h,tag);
case  3 :
return derive__156829.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__156835 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__156836 = (function (h,tag,parent){
var parentMap__156831 = "\uFDD0'parents".call(null,h);
var childsParents__156832 = (cljs.core.truth_(parentMap__156831.call(null,tag))?cljs.core.disj.call(null,parentMap__156831.call(null,tag),parent):cljs.core.set([]));
var newParents__156833 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__156832))?cljs.core.assoc.call(null,parentMap__156831,tag,childsParents__156832):cljs.core.dissoc.call(null,parentMap__156831,tag));
var deriv_seq__156834 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__156820_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__156820_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__156820_SHARP_),cljs.core.second.call(null,p1__156820_SHARP_)));
}),cljs.core.seq.call(null,newParents__156833)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__156831.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__156821_SHARP_,p2__156822_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__156821_SHARP_,p2__156822_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__156834));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__156835.call(this,h,tag);
case  3 :
return underive__156836.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__156838 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____156840 = (cljs.core.truth_((function (){var and__3546__auto____156839 = xprefs__156838;

if(cljs.core.truth_(and__3546__auto____156839))
{return xprefs__156838.call(null,y);
} else
{return and__3546__auto____156839;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____156840))
{return or__3548__auto____156840;
} else
{var or__3548__auto____156842 = (function (){var ps__156841 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__156841) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__156841),prefer_table)))
{} else
{}
{
var G__156845 = cljs.core.rest.call(null,ps__156841);
ps__156841 = G__156845;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____156842))
{return or__3548__auto____156842;
} else
{var or__3548__auto____156844 = (function (){var ps__156843 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__156843) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__156843),y,prefer_table)))
{} else
{}
{
var G__156846 = cljs.core.rest.call(null,ps__156843);
ps__156843 = G__156846;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____156844))
{return or__3548__auto____156844;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____156847 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____156847))
{return or__3548__auto____156847;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__156856 = cljs.core.reduce.call(null,(function (be,p__156848){
var vec__156849__156850 = p__156848;
var k__156851 = cljs.core.nth.call(null,vec__156849__156850,0,null);
var ___156852 = cljs.core.nth.call(null,vec__156849__156850,1,null);
var e__156853 = vec__156849__156850;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__156851)))
{var be2__156855 = (cljs.core.truth_((function (){var or__3548__auto____156854 = (be === null);

if(cljs.core.truth_(or__3548__auto____156854))
{return or__3548__auto____156854;
} else
{return cljs.core.dominates.call(null,k__156851,cljs.core.first.call(null,be),prefer_table);
}
})())?e__156853:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__156855),k__156851,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__156851," and ",cljs.core.first.call(null,be2__156855),", and neither is preferred")));
}
return be2__156855;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__156856))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__156856));
return cljs.core.second.call(null,best_entry__156856);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____156857 = mf;

if(cljs.core.truth_(and__3546__auto____156857))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____156857;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____156858 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____156858))
{return or__3548__auto____156858;
} else
{var or__3548__auto____156859 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____156859))
{return or__3548__auto____156859;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____156860 = mf;

if(cljs.core.truth_(and__3546__auto____156860))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____156860;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____156861 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____156861))
{return or__3548__auto____156861;
} else
{var or__3548__auto____156862 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____156862))
{return or__3548__auto____156862;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____156863 = mf;

if(cljs.core.truth_(and__3546__auto____156863))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____156863;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____156864 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____156864))
{return or__3548__auto____156864;
} else
{var or__3548__auto____156865 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____156865))
{return or__3548__auto____156865;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____156866 = mf;

if(cljs.core.truth_(and__3546__auto____156866))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____156866;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____156867 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____156867))
{return or__3548__auto____156867;
} else
{var or__3548__auto____156868 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____156868))
{return or__3548__auto____156868;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____156869 = mf;

if(cljs.core.truth_(and__3546__auto____156869))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____156869;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____156870 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____156870))
{return or__3548__auto____156870;
} else
{var or__3548__auto____156871 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____156871))
{return or__3548__auto____156871;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____156872 = mf;

if(cljs.core.truth_(and__3546__auto____156872))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____156872;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____156873 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____156873))
{return or__3548__auto____156873;
} else
{var or__3548__auto____156874 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____156874))
{return or__3548__auto____156874;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____156875 = mf;

if(cljs.core.truth_(and__3546__auto____156875))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____156875;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____156876 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____156876))
{return or__3548__auto____156876;
} else
{var or__3548__auto____156877 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____156877))
{return or__3548__auto____156877;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____156878 = mf;

if(cljs.core.truth_(and__3546__auto____156878))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____156878;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____156879 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____156879))
{return or__3548__auto____156879;
} else
{var or__3548__auto____156880 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____156880))
{return or__3548__auto____156880;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__156881 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__156882 = cljs.core._get_method.call(null,mf,dispatch_val__156881);

if(cljs.core.truth_(target_fn__156882))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__156881)));
}
return cljs.core.apply.call(null,target_fn__156882,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__156883 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__156884 = this;
cljs.core.swap_BANG_.call(null,this__156884.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__156884.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__156884.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__156884.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__156885 = this;
cljs.core.swap_BANG_.call(null,this__156885.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__156885.method_cache,this__156885.method_table,this__156885.cached_hierarchy,this__156885.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__156886 = this;
cljs.core.swap_BANG_.call(null,this__156886.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__156886.method_cache,this__156886.method_table,this__156886.cached_hierarchy,this__156886.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__156887 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__156887.cached_hierarchy),cljs.core.deref.call(null,this__156887.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__156887.method_cache,this__156887.method_table,this__156887.cached_hierarchy,this__156887.hierarchy);
}
var temp__3695__auto____156888 = cljs.core.deref.call(null,this__156887.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____156888))
{var target_fn__156889 = temp__3695__auto____156888;

return target_fn__156889;
} else
{var temp__3695__auto____156890 = cljs.core.find_and_cache_best_method.call(null,this__156887.name,dispatch_val,this__156887.hierarchy,this__156887.method_table,this__156887.prefer_table,this__156887.method_cache,this__156887.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____156890))
{var target_fn__156891 = temp__3695__auto____156890;

return target_fn__156891;
} else
{return cljs.core.deref.call(null,this__156887.method_table).call(null,this__156887.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__156892 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__156892.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__156892.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__156892.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__156892.method_cache,this__156892.method_table,this__156892.cached_hierarchy,this__156892.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__156893 = this;
return cljs.core.deref.call(null,this__156893.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__156894 = this;
return cljs.core.deref.call(null,this__156894.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__156895 = this;
return cljs.core.do_dispatch.call(null,mf,this__156895.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__156896__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__156896 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__156896__delegate.call(this, _, args);
};
G__156896.cljs$lang$maxFixedArity = 1;
G__156896.cljs$lang$applyTo = (function (arglist__156897){
var _ = cljs.core.first(arglist__156897);
var args = cljs.core.rest(arglist__156897);
return G__156896__delegate.call(this, _, args);
});
return G__156896;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
