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
var or__3548__auto____187975 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____187975))
{return or__3548__auto____187975;
} else
{var or__3548__auto____187976 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____187976))
{return or__3548__auto____187976;
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
var _invoke__188040 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____187977 = this$;

if(cljs.core.truth_(and__3546__auto____187977))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____187977;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____187978 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____187978))
{return or__3548__auto____187978;
} else
{var or__3548__auto____187979 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____187979))
{return or__3548__auto____187979;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__188041 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____187980 = this$;

if(cljs.core.truth_(and__3546__auto____187980))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____187980;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____187981 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____187981))
{return or__3548__auto____187981;
} else
{var or__3548__auto____187982 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____187982))
{return or__3548__auto____187982;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__188042 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____187983 = this$;

if(cljs.core.truth_(and__3546__auto____187983))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____187983;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____187984 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____187984))
{return or__3548__auto____187984;
} else
{var or__3548__auto____187985 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____187985))
{return or__3548__auto____187985;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__188043 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____187986 = this$;

if(cljs.core.truth_(and__3546__auto____187986))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____187986;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____187987 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____187987))
{return or__3548__auto____187987;
} else
{var or__3548__auto____187988 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____187988))
{return or__3548__auto____187988;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__188044 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____187989 = this$;

if(cljs.core.truth_(and__3546__auto____187989))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____187989;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____187990 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____187990))
{return or__3548__auto____187990;
} else
{var or__3548__auto____187991 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____187991))
{return or__3548__auto____187991;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__188045 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____187992 = this$;

if(cljs.core.truth_(and__3546__auto____187992))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____187992;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____187993 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____187993))
{return or__3548__auto____187993;
} else
{var or__3548__auto____187994 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____187994))
{return or__3548__auto____187994;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__188046 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____187995 = this$;

if(cljs.core.truth_(and__3546__auto____187995))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____187995;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____187996 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____187996))
{return or__3548__auto____187996;
} else
{var or__3548__auto____187997 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____187997))
{return or__3548__auto____187997;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__188047 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____187998 = this$;

if(cljs.core.truth_(and__3546__auto____187998))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____187998;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____187999 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____187999))
{return or__3548__auto____187999;
} else
{var or__3548__auto____188000 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____188000))
{return or__3548__auto____188000;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__188048 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____188001 = this$;

if(cljs.core.truth_(and__3546__auto____188001))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____188001;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____188002 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____188002))
{return or__3548__auto____188002;
} else
{var or__3548__auto____188003 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____188003))
{return or__3548__auto____188003;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__188049 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____188004 = this$;

if(cljs.core.truth_(and__3546__auto____188004))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____188004;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____188005 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____188005))
{return or__3548__auto____188005;
} else
{var or__3548__auto____188006 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____188006))
{return or__3548__auto____188006;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__188050 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____188007 = this$;

if(cljs.core.truth_(and__3546__auto____188007))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____188007;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____188008 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____188008))
{return or__3548__auto____188008;
} else
{var or__3548__auto____188009 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____188009))
{return or__3548__auto____188009;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__188051 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____188010 = this$;

if(cljs.core.truth_(and__3546__auto____188010))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____188010;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____188011 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____188011))
{return or__3548__auto____188011;
} else
{var or__3548__auto____188012 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____188012))
{return or__3548__auto____188012;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__188052 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____188013 = this$;

if(cljs.core.truth_(and__3546__auto____188013))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____188013;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____188014 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____188014))
{return or__3548__auto____188014;
} else
{var or__3548__auto____188015 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____188015))
{return or__3548__auto____188015;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__188053 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____188016 = this$;

if(cljs.core.truth_(and__3546__auto____188016))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____188016;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____188017 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____188017))
{return or__3548__auto____188017;
} else
{var or__3548__auto____188018 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____188018))
{return or__3548__auto____188018;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__188054 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____188019 = this$;

if(cljs.core.truth_(and__3546__auto____188019))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____188019;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____188020 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____188020))
{return or__3548__auto____188020;
} else
{var or__3548__auto____188021 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____188021))
{return or__3548__auto____188021;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__188055 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____188022 = this$;

if(cljs.core.truth_(and__3546__auto____188022))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____188022;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____188023 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____188023))
{return or__3548__auto____188023;
} else
{var or__3548__auto____188024 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____188024))
{return or__3548__auto____188024;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__188056 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____188025 = this$;

if(cljs.core.truth_(and__3546__auto____188025))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____188025;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____188026 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____188026))
{return or__3548__auto____188026;
} else
{var or__3548__auto____188027 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____188027))
{return or__3548__auto____188027;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__188057 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____188028 = this$;

if(cljs.core.truth_(and__3546__auto____188028))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____188028;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____188029 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____188029))
{return or__3548__auto____188029;
} else
{var or__3548__auto____188030 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____188030))
{return or__3548__auto____188030;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__188058 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____188031 = this$;

if(cljs.core.truth_(and__3546__auto____188031))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____188031;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____188032 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____188032))
{return or__3548__auto____188032;
} else
{var or__3548__auto____188033 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____188033))
{return or__3548__auto____188033;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__188059 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____188034 = this$;

if(cljs.core.truth_(and__3546__auto____188034))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____188034;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____188035 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____188035))
{return or__3548__auto____188035;
} else
{var or__3548__auto____188036 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____188036))
{return or__3548__auto____188036;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__188060 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____188037 = this$;

if(cljs.core.truth_(and__3546__auto____188037))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____188037;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____188038 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____188038))
{return or__3548__auto____188038;
} else
{var or__3548__auto____188039 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____188039))
{return or__3548__auto____188039;
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
return _invoke__188040.call(this,this$);
case  2 :
return _invoke__188041.call(this,this$,a);
case  3 :
return _invoke__188042.call(this,this$,a,b);
case  4 :
return _invoke__188043.call(this,this$,a,b,c);
case  5 :
return _invoke__188044.call(this,this$,a,b,c,d);
case  6 :
return _invoke__188045.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__188046.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__188047.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__188048.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__188049.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__188050.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__188051.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__188052.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__188053.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__188054.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__188055.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__188056.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__188057.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__188058.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__188059.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__188060.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____188062 = coll;

if(cljs.core.truth_(and__3546__auto____188062))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____188062;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____188063 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____188063))
{return or__3548__auto____188063;
} else
{var or__3548__auto____188064 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____188064))
{return or__3548__auto____188064;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____188065 = coll;

if(cljs.core.truth_(and__3546__auto____188065))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____188065;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____188066 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____188066))
{return or__3548__auto____188066;
} else
{var or__3548__auto____188067 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____188067))
{return or__3548__auto____188067;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____188068 = coll;

if(cljs.core.truth_(and__3546__auto____188068))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____188068;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____188069 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____188069))
{return or__3548__auto____188069;
} else
{var or__3548__auto____188070 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____188070))
{return or__3548__auto____188070;
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
var _nth__188077 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____188071 = coll;

if(cljs.core.truth_(and__3546__auto____188071))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____188071;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____188072 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____188072))
{return or__3548__auto____188072;
} else
{var or__3548__auto____188073 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____188073))
{return or__3548__auto____188073;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__188078 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____188074 = coll;

if(cljs.core.truth_(and__3546__auto____188074))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____188074;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____188075 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____188075))
{return or__3548__auto____188075;
} else
{var or__3548__auto____188076 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____188076))
{return or__3548__auto____188076;
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
return _nth__188077.call(this,coll,n);
case  3 :
return _nth__188078.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____188080 = coll;

if(cljs.core.truth_(and__3546__auto____188080))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____188080;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____188081 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____188081))
{return or__3548__auto____188081;
} else
{var or__3548__auto____188082 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____188082))
{return or__3548__auto____188082;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____188083 = coll;

if(cljs.core.truth_(and__3546__auto____188083))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____188083;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____188084 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____188084))
{return or__3548__auto____188084;
} else
{var or__3548__auto____188085 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____188085))
{return or__3548__auto____188085;
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
var _lookup__188092 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____188086 = o;

if(cljs.core.truth_(and__3546__auto____188086))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____188086;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____188087 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____188087))
{return or__3548__auto____188087;
} else
{var or__3548__auto____188088 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____188088))
{return or__3548__auto____188088;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__188093 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____188089 = o;

if(cljs.core.truth_(and__3546__auto____188089))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____188089;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____188090 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____188090))
{return or__3548__auto____188090;
} else
{var or__3548__auto____188091 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____188091))
{return or__3548__auto____188091;
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
return _lookup__188092.call(this,o,k);
case  3 :
return _lookup__188093.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____188095 = coll;

if(cljs.core.truth_(and__3546__auto____188095))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____188095;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____188096 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____188096))
{return or__3548__auto____188096;
} else
{var or__3548__auto____188097 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____188097))
{return or__3548__auto____188097;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____188098 = coll;

if(cljs.core.truth_(and__3546__auto____188098))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____188098;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____188099 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____188099))
{return or__3548__auto____188099;
} else
{var or__3548__auto____188100 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____188100))
{return or__3548__auto____188100;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____188101 = coll;

if(cljs.core.truth_(and__3546__auto____188101))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____188101;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____188102 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____188102))
{return or__3548__auto____188102;
} else
{var or__3548__auto____188103 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____188103))
{return or__3548__auto____188103;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____188104 = coll;

if(cljs.core.truth_(and__3546__auto____188104))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____188104;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____188105 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____188105))
{return or__3548__auto____188105;
} else
{var or__3548__auto____188106 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____188106))
{return or__3548__auto____188106;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____188107 = coll;

if(cljs.core.truth_(and__3546__auto____188107))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____188107;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____188108 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____188108))
{return or__3548__auto____188108;
} else
{var or__3548__auto____188109 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____188109))
{return or__3548__auto____188109;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____188110 = coll;

if(cljs.core.truth_(and__3546__auto____188110))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____188110;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____188111 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____188111))
{return or__3548__auto____188111;
} else
{var or__3548__auto____188112 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____188112))
{return or__3548__auto____188112;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____188113 = coll;

if(cljs.core.truth_(and__3546__auto____188113))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____188113;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____188114 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____188114))
{return or__3548__auto____188114;
} else
{var or__3548__auto____188115 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____188115))
{return or__3548__auto____188115;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____188116 = o;

if(cljs.core.truth_(and__3546__auto____188116))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____188116;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____188117 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____188117))
{return or__3548__auto____188117;
} else
{var or__3548__auto____188118 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____188118))
{return or__3548__auto____188118;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____188119 = o;

if(cljs.core.truth_(and__3546__auto____188119))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____188119;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____188120 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____188120))
{return or__3548__auto____188120;
} else
{var or__3548__auto____188121 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____188121))
{return or__3548__auto____188121;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____188122 = o;

if(cljs.core.truth_(and__3546__auto____188122))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____188122;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____188123 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____188123))
{return or__3548__auto____188123;
} else
{var or__3548__auto____188124 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____188124))
{return or__3548__auto____188124;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____188125 = o;

if(cljs.core.truth_(and__3546__auto____188125))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____188125;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____188126 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____188126))
{return or__3548__auto____188126;
} else
{var or__3548__auto____188127 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____188127))
{return or__3548__auto____188127;
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
var _reduce__188134 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____188128 = coll;

if(cljs.core.truth_(and__3546__auto____188128))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____188128;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____188129 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____188129))
{return or__3548__auto____188129;
} else
{var or__3548__auto____188130 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____188130))
{return or__3548__auto____188130;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__188135 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____188131 = coll;

if(cljs.core.truth_(and__3546__auto____188131))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____188131;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____188132 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____188132))
{return or__3548__auto____188132;
} else
{var or__3548__auto____188133 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____188133))
{return or__3548__auto____188133;
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
return _reduce__188134.call(this,coll,f);
case  3 :
return _reduce__188135.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____188137 = o;

if(cljs.core.truth_(and__3546__auto____188137))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____188137;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____188138 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____188138))
{return or__3548__auto____188138;
} else
{var or__3548__auto____188139 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____188139))
{return or__3548__auto____188139;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____188140 = o;

if(cljs.core.truth_(and__3546__auto____188140))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____188140;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____188141 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____188141))
{return or__3548__auto____188141;
} else
{var or__3548__auto____188142 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____188142))
{return or__3548__auto____188142;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____188143 = o;

if(cljs.core.truth_(and__3546__auto____188143))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____188143;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____188144 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____188144))
{return or__3548__auto____188144;
} else
{var or__3548__auto____188145 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____188145))
{return or__3548__auto____188145;
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
if(cljs.core.truth_((function (){var and__3546__auto____188146 = o;

if(cljs.core.truth_(and__3546__auto____188146))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____188146;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____188147 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____188147))
{return or__3548__auto____188147;
} else
{var or__3548__auto____188148 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____188148))
{return or__3548__auto____188148;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____188149 = d;

if(cljs.core.truth_(and__3546__auto____188149))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____188149;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____188150 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____188150))
{return or__3548__auto____188150;
} else
{var or__3548__auto____188151 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____188151))
{return or__3548__auto____188151;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____188152 = this$;

if(cljs.core.truth_(and__3546__auto____188152))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____188152;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____188153 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____188153))
{return or__3548__auto____188153;
} else
{var or__3548__auto____188154 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____188154))
{return or__3548__auto____188154;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____188155 = this$;

if(cljs.core.truth_(and__3546__auto____188155))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____188155;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____188156 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____188156))
{return or__3548__auto____188156;
} else
{var or__3548__auto____188157 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____188157))
{return or__3548__auto____188157;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____188158 = this$;

if(cljs.core.truth_(and__3546__auto____188158))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____188158;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____188159 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____188159))
{return or__3548__auto____188159;
} else
{var or__3548__auto____188160 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____188160))
{return or__3548__auto____188160;
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
var G__188161 = null;
var G__188161__188162 = (function (o,k){
return null;
});
var G__188161__188163 = (function (o,k,not_found){
return not_found;
});
G__188161 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__188161__188162.call(this,o,k);
case  3 :
return G__188161__188163.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__188161;
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
var G__188165 = null;
var G__188165__188166 = (function (_,f){
return f.call(null);
});
var G__188165__188167 = (function (_,f,start){
return start;
});
G__188165 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__188165__188166.call(this,_,f);
case  3 :
return G__188165__188167.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__188165;
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
var G__188169 = null;
var G__188169__188170 = (function (_,n){
return null;
});
var G__188169__188171 = (function (_,n,not_found){
return not_found;
});
G__188169 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__188169__188170.call(this,_,n);
case  3 :
return G__188169__188171.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__188169;
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
var ci_reduce__188179 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__188173 = cljs.core._nth.call(null,cicoll,0);
var n__188174 = 1;

while(true){
if(cljs.core.truth_((n__188174 < cljs.core._count.call(null,cicoll))))
{{
var G__188183 = f.call(null,val__188173,cljs.core._nth.call(null,cicoll,n__188174));
var G__188184 = (n__188174 + 1);
val__188173 = G__188183;
n__188174 = G__188184;
continue;
}
} else
{return val__188173;
}
break;
}
}
});
var ci_reduce__188180 = (function (cicoll,f,val){
var val__188175 = val;
var n__188176 = 0;

while(true){
if(cljs.core.truth_((n__188176 < cljs.core._count.call(null,cicoll))))
{{
var G__188185 = f.call(null,val__188175,cljs.core._nth.call(null,cicoll,n__188176));
var G__188186 = (n__188176 + 1);
val__188175 = G__188185;
n__188176 = G__188186;
continue;
}
} else
{return val__188175;
}
break;
}
});
var ci_reduce__188181 = (function (cicoll,f,val,idx){
var val__188177 = val;
var n__188178 = idx;

while(true){
if(cljs.core.truth_((n__188178 < cljs.core._count.call(null,cicoll))))
{{
var G__188187 = f.call(null,val__188177,cljs.core._nth.call(null,cicoll,n__188178));
var G__188188 = (n__188178 + 1);
val__188177 = G__188187;
n__188178 = G__188188;
continue;
}
} else
{return val__188177;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__188179.call(this,cicoll,f);
case  3 :
return ci_reduce__188180.call(this,cicoll,f,val);
case  4 :
return ci_reduce__188181.call(this,cicoll,f,val,idx);
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
var this__188189 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__188202 = null;
var G__188202__188203 = (function (_,f){
var this__188190 = this;
return cljs.core.ci_reduce.call(null,this__188190.a,f,(this__188190.a[this__188190.i]),(this__188190.i + 1));
});
var G__188202__188204 = (function (_,f,start){
var this__188191 = this;
return cljs.core.ci_reduce.call(null,this__188191.a,f,start,this__188191.i);
});
G__188202 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__188202__188203.call(this,_,f);
case  3 :
return G__188202__188204.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__188202;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__188192 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__188193 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__188206 = null;
var G__188206__188207 = (function (coll,n){
var this__188194 = this;
var i__188195 = (n + this__188194.i);

if(cljs.core.truth_((i__188195 < this__188194.a.length)))
{return (this__188194.a[i__188195]);
} else
{return null;
}
});
var G__188206__188208 = (function (coll,n,not_found){
var this__188196 = this;
var i__188197 = (n + this__188196.i);

if(cljs.core.truth_((i__188197 < this__188196.a.length)))
{return (this__188196.a[i__188197]);
} else
{return not_found;
}
});
G__188206 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__188206__188207.call(this,coll,n);
case  3 :
return G__188206__188208.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__188206;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__188198 = this;
return (this__188198.a.length - this__188198.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__188199 = this;
return (this__188199.a[this__188199.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__188200 = this;
if(cljs.core.truth_(((this__188200.i + 1) < this__188200.a.length)))
{return (new cljs.core.IndexedSeq(this__188200.a,(this__188200.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__188201 = this;
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
var G__188210 = null;
var G__188210__188211 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__188210__188212 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__188210 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__188210__188211.call(this,array,f);
case  3 :
return G__188210__188212.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__188210;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__188214 = null;
var G__188214__188215 = (function (array,k){
return (array[k]);
});
var G__188214__188216 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__188214 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__188214__188215.call(this,array,k);
case  3 :
return G__188214__188216.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__188214;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__188218 = null;
var G__188218__188219 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__188218__188220 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__188218 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__188218__188219.call(this,array,n);
case  3 :
return G__188218__188220.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__188218;
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
var temp__3698__auto____188222 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____188222))
{var s__188223 = temp__3698__auto____188222;

return cljs.core._first.call(null,s__188223);
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
var G__188224 = cljs.core.next.call(null,s);
s = G__188224;
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
var s__188225 = cljs.core.seq.call(null,x);
var n__188226 = 0;

while(true){
if(cljs.core.truth_(s__188225))
{{
var G__188227 = cljs.core.next.call(null,s__188225);
var G__188228 = (n__188226 + 1);
s__188225 = G__188227;
n__188226 = G__188228;
continue;
}
} else
{return n__188226;
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
var conj__188229 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__188230 = (function() { 
var G__188232__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__188233 = conj.call(null,coll,x);
var G__188234 = cljs.core.first.call(null,xs);
var G__188235 = cljs.core.next.call(null,xs);
coll = G__188233;
x = G__188234;
xs = G__188235;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__188232 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188232__delegate.call(this, coll, x, xs);
};
G__188232.cljs$lang$maxFixedArity = 2;
G__188232.cljs$lang$applyTo = (function (arglist__188236){
var coll = cljs.core.first(arglist__188236);
var x = cljs.core.first(cljs.core.next(arglist__188236));
var xs = cljs.core.rest(cljs.core.next(arglist__188236));
return G__188232__delegate.call(this, coll, x, xs);
});
return G__188232;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__188229.call(this,coll,x);
default:
return conj__188230.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__188230.cljs$lang$applyTo;
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
var nth__188237 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__188238 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__188237.call(this,coll,n);
case  3 :
return nth__188238.call(this,coll,n,not_found);
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
var get__188240 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__188241 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__188240.call(this,o,k);
case  3 :
return get__188241.call(this,o,k,not_found);
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
var assoc__188244 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__188245 = (function() { 
var G__188247__delegate = function (coll,k,v,kvs){
while(true){
var ret__188243 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__188248 = ret__188243;
var G__188249 = cljs.core.first.call(null,kvs);
var G__188250 = cljs.core.second.call(null,kvs);
var G__188251 = cljs.core.nnext.call(null,kvs);
coll = G__188248;
k = G__188249;
v = G__188250;
kvs = G__188251;
continue;
}
} else
{return ret__188243;
}
break;
}
};
var G__188247 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__188247__delegate.call(this, coll, k, v, kvs);
};
G__188247.cljs$lang$maxFixedArity = 3;
G__188247.cljs$lang$applyTo = (function (arglist__188252){
var coll = cljs.core.first(arglist__188252);
var k = cljs.core.first(cljs.core.next(arglist__188252));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188252)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188252)));
return G__188247__delegate.call(this, coll, k, v, kvs);
});
return G__188247;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__188244.call(this,coll,k,v);
default:
return assoc__188245.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__188245.cljs$lang$applyTo;
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
var dissoc__188254 = (function (coll){
return coll;
});
var dissoc__188255 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__188256 = (function() { 
var G__188258__delegate = function (coll,k,ks){
while(true){
var ret__188253 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__188259 = ret__188253;
var G__188260 = cljs.core.first.call(null,ks);
var G__188261 = cljs.core.next.call(null,ks);
coll = G__188259;
k = G__188260;
ks = G__188261;
continue;
}
} else
{return ret__188253;
}
break;
}
};
var G__188258 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188258__delegate.call(this, coll, k, ks);
};
G__188258.cljs$lang$maxFixedArity = 2;
G__188258.cljs$lang$applyTo = (function (arglist__188262){
var coll = cljs.core.first(arglist__188262);
var k = cljs.core.first(cljs.core.next(arglist__188262));
var ks = cljs.core.rest(cljs.core.next(arglist__188262));
return G__188258__delegate.call(this, coll, k, ks);
});
return G__188258;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__188254.call(this,coll);
case  2 :
return dissoc__188255.call(this,coll,k);
default:
return dissoc__188256.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__188256.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__450__auto____188263 = o;

if(cljs.core.truth_((function (){var and__3546__auto____188264 = x__450__auto____188263;

if(cljs.core.truth_(and__3546__auto____188264))
{var and__3546__auto____188265 = x__450__auto____188263.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____188265))
{return cljs.core.not.call(null,x__450__auto____188263.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____188265;
}
} else
{return and__3546__auto____188264;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____188263);
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
var disj__188267 = (function (coll){
return coll;
});
var disj__188268 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__188269 = (function() { 
var G__188271__delegate = function (coll,k,ks){
while(true){
var ret__188266 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__188272 = ret__188266;
var G__188273 = cljs.core.first.call(null,ks);
var G__188274 = cljs.core.next.call(null,ks);
coll = G__188272;
k = G__188273;
ks = G__188274;
continue;
}
} else
{return ret__188266;
}
break;
}
};
var G__188271 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188271__delegate.call(this, coll, k, ks);
};
G__188271.cljs$lang$maxFixedArity = 2;
G__188271.cljs$lang$applyTo = (function (arglist__188275){
var coll = cljs.core.first(arglist__188275);
var k = cljs.core.first(cljs.core.next(arglist__188275));
var ks = cljs.core.rest(cljs.core.next(arglist__188275));
return G__188271__delegate.call(this, coll, k, ks);
});
return G__188271;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__188267.call(this,coll);
case  2 :
return disj__188268.call(this,coll,k);
default:
return disj__188269.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__188269.cljs$lang$applyTo;
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
{var x__450__auto____188276 = x;

if(cljs.core.truth_((function (){var and__3546__auto____188277 = x__450__auto____188276;

if(cljs.core.truth_(and__3546__auto____188277))
{var and__3546__auto____188278 = x__450__auto____188276.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____188278))
{return cljs.core.not.call(null,x__450__auto____188276.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____188278;
}
} else
{return and__3546__auto____188277;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__450__auto____188276);
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
{var x__450__auto____188279 = x;

if(cljs.core.truth_((function (){var and__3546__auto____188280 = x__450__auto____188279;

if(cljs.core.truth_(and__3546__auto____188280))
{var and__3546__auto____188281 = x__450__auto____188279.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____188281))
{return cljs.core.not.call(null,x__450__auto____188279.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____188281;
}
} else
{return and__3546__auto____188280;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__450__auto____188279);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__450__auto____188282 = x;

if(cljs.core.truth_((function (){var and__3546__auto____188283 = x__450__auto____188282;

if(cljs.core.truth_(and__3546__auto____188283))
{var and__3546__auto____188284 = x__450__auto____188282.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____188284))
{return cljs.core.not.call(null,x__450__auto____188282.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____188284;
}
} else
{return and__3546__auto____188283;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__450__auto____188282);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__450__auto____188285 = x;

if(cljs.core.truth_((function (){var and__3546__auto____188286 = x__450__auto____188285;

if(cljs.core.truth_(and__3546__auto____188286))
{var and__3546__auto____188287 = x__450__auto____188285.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____188287))
{return cljs.core.not.call(null,x__450__auto____188285.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____188287;
}
} else
{return and__3546__auto____188286;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__450__auto____188285);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__450__auto____188288 = x;

if(cljs.core.truth_((function (){var and__3546__auto____188289 = x__450__auto____188288;

if(cljs.core.truth_(and__3546__auto____188289))
{var and__3546__auto____188290 = x__450__auto____188288.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____188290))
{return cljs.core.not.call(null,x__450__auto____188288.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____188290;
}
} else
{return and__3546__auto____188289;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__450__auto____188288);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__450__auto____188291 = x;

if(cljs.core.truth_((function (){var and__3546__auto____188292 = x__450__auto____188291;

if(cljs.core.truth_(and__3546__auto____188292))
{var and__3546__auto____188293 = x__450__auto____188291.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____188293))
{return cljs.core.not.call(null,x__450__auto____188291.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____188293;
}
} else
{return and__3546__auto____188292;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__450__auto____188291);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__450__auto____188294 = x;

if(cljs.core.truth_((function (){var and__3546__auto____188295 = x__450__auto____188294;

if(cljs.core.truth_(and__3546__auto____188295))
{var and__3546__auto____188296 = x__450__auto____188294.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____188296))
{return cljs.core.not.call(null,x__450__auto____188294.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____188296;
}
} else
{return and__3546__auto____188295;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__450__auto____188294);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__188297 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__188297.push(key);
}));
return keys__188297;
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
{var x__450__auto____188298 = s;

if(cljs.core.truth_((function (){var and__3546__auto____188299 = x__450__auto____188298;

if(cljs.core.truth_(and__3546__auto____188299))
{var and__3546__auto____188300 = x__450__auto____188298.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____188300))
{return cljs.core.not.call(null,x__450__auto____188298.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____188300;
}
} else
{return and__3546__auto____188299;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__450__auto____188298);
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
var and__3546__auto____188301 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____188301))
{return cljs.core.not.call(null,(function (){var or__3548__auto____188302 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____188302))
{return or__3548__auto____188302;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____188301;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____188303 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____188303))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____188303;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____188304 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____188304))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____188304;
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
var and__3546__auto____188305 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____188305))
{return (n == n.toFixed());
} else
{return and__3546__auto____188305;
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
if(cljs.core.truth_((function (){var and__3546__auto____188306 = coll;

if(cljs.core.truth_(and__3546__auto____188306))
{var and__3546__auto____188307 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____188307))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____188307;
}
} else
{return and__3546__auto____188306;
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
var distinct_QMARK___188312 = (function (x){
return true;
});
var distinct_QMARK___188313 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___188314 = (function() { 
var G__188316__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__188308 = cljs.core.set([y,x]);
var xs__188309 = more;

while(true){
var x__188310 = cljs.core.first.call(null,xs__188309);
var etc__188311 = cljs.core.next.call(null,xs__188309);

if(cljs.core.truth_(xs__188309))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__188308,x__188310)))
{return false;
} else
{{
var G__188317 = cljs.core.conj.call(null,s__188308,x__188310);
var G__188318 = etc__188311;
s__188308 = G__188317;
xs__188309 = G__188318;
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
var G__188316 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188316__delegate.call(this, x, y, more);
};
G__188316.cljs$lang$maxFixedArity = 2;
G__188316.cljs$lang$applyTo = (function (arglist__188319){
var x = cljs.core.first(arglist__188319);
var y = cljs.core.first(cljs.core.next(arglist__188319));
var more = cljs.core.rest(cljs.core.next(arglist__188319));
return G__188316__delegate.call(this, x, y, more);
});
return G__188316;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___188312.call(this,x);
case  2 :
return distinct_QMARK___188313.call(this,x,y);
default:
return distinct_QMARK___188314.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___188314.cljs$lang$applyTo;
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
var r__188320 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__188320)))
{return r__188320;
} else
{if(cljs.core.truth_(r__188320))
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
var sort__188322 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__188323 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__188321 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__188321,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__188321);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__188322.call(this,comp);
case  2 :
return sort__188323.call(this,comp,coll);
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
var sort_by__188325 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__188326 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__188325.call(this,keyfn,comp);
case  3 :
return sort_by__188326.call(this,keyfn,comp,coll);
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
var reduce__188328 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__188329 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__188328.call(this,f,val);
case  3 :
return reduce__188329.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__188335 = (function (f,coll){
var temp__3695__auto____188331 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____188331))
{var s__188332 = temp__3695__auto____188331;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__188332),cljs.core.next.call(null,s__188332));
} else
{return f.call(null);
}
});
var seq_reduce__188336 = (function (f,val,coll){
var val__188333 = val;
var coll__188334 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__188334))
{{
var G__188338 = f.call(null,val__188333,cljs.core.first.call(null,coll__188334));
var G__188339 = cljs.core.next.call(null,coll__188334);
val__188333 = G__188338;
coll__188334 = G__188339;
continue;
}
} else
{return val__188333;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__188335.call(this,f,val);
case  3 :
return seq_reduce__188336.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__188340 = null;
var G__188340__188341 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__188340__188342 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__188340 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__188340__188341.call(this,coll,f);
case  3 :
return G__188340__188342.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__188340;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___188344 = (function (){
return 0;
});
var _PLUS___188345 = (function (x){
return x;
});
var _PLUS___188346 = (function (x,y){
return (x + y);
});
var _PLUS___188347 = (function() { 
var G__188349__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__188349 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188349__delegate.call(this, x, y, more);
};
G__188349.cljs$lang$maxFixedArity = 2;
G__188349.cljs$lang$applyTo = (function (arglist__188350){
var x = cljs.core.first(arglist__188350);
var y = cljs.core.first(cljs.core.next(arglist__188350));
var more = cljs.core.rest(cljs.core.next(arglist__188350));
return G__188349__delegate.call(this, x, y, more);
});
return G__188349;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___188344.call(this);
case  1 :
return _PLUS___188345.call(this,x);
case  2 :
return _PLUS___188346.call(this,x,y);
default:
return _PLUS___188347.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___188347.cljs$lang$applyTo;
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
var ___188351 = (function (x){
return (- x);
});
var ___188352 = (function (x,y){
return (x - y);
});
var ___188353 = (function() { 
var G__188355__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__188355 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188355__delegate.call(this, x, y, more);
};
G__188355.cljs$lang$maxFixedArity = 2;
G__188355.cljs$lang$applyTo = (function (arglist__188356){
var x = cljs.core.first(arglist__188356);
var y = cljs.core.first(cljs.core.next(arglist__188356));
var more = cljs.core.rest(cljs.core.next(arglist__188356));
return G__188355__delegate.call(this, x, y, more);
});
return G__188355;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___188351.call(this,x);
case  2 :
return ___188352.call(this,x,y);
default:
return ___188353.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___188353.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___188357 = (function (){
return 1;
});
var _STAR___188358 = (function (x){
return x;
});
var _STAR___188359 = (function (x,y){
return (x * y);
});
var _STAR___188360 = (function() { 
var G__188362__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__188362 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188362__delegate.call(this, x, y, more);
};
G__188362.cljs$lang$maxFixedArity = 2;
G__188362.cljs$lang$applyTo = (function (arglist__188363){
var x = cljs.core.first(arglist__188363);
var y = cljs.core.first(cljs.core.next(arglist__188363));
var more = cljs.core.rest(cljs.core.next(arglist__188363));
return G__188362__delegate.call(this, x, y, more);
});
return G__188362;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___188357.call(this);
case  1 :
return _STAR___188358.call(this,x);
case  2 :
return _STAR___188359.call(this,x,y);
default:
return _STAR___188360.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___188360.cljs$lang$applyTo;
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
var _SLASH___188364 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___188365 = (function (x,y){
return (x / y);
});
var _SLASH___188366 = (function() { 
var G__188368__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__188368 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188368__delegate.call(this, x, y, more);
};
G__188368.cljs$lang$maxFixedArity = 2;
G__188368.cljs$lang$applyTo = (function (arglist__188369){
var x = cljs.core.first(arglist__188369);
var y = cljs.core.first(cljs.core.next(arglist__188369));
var more = cljs.core.rest(cljs.core.next(arglist__188369));
return G__188368__delegate.call(this, x, y, more);
});
return G__188368;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___188364.call(this,x);
case  2 :
return _SLASH___188365.call(this,x,y);
default:
return _SLASH___188366.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___188366.cljs$lang$applyTo;
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
var _LT___188370 = (function (x){
return true;
});
var _LT___188371 = (function (x,y){
return (x < y);
});
var _LT___188372 = (function() { 
var G__188374__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__188375 = y;
var G__188376 = cljs.core.first.call(null,more);
var G__188377 = cljs.core.next.call(null,more);
x = G__188375;
y = G__188376;
more = G__188377;
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
var G__188374 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188374__delegate.call(this, x, y, more);
};
G__188374.cljs$lang$maxFixedArity = 2;
G__188374.cljs$lang$applyTo = (function (arglist__188378){
var x = cljs.core.first(arglist__188378);
var y = cljs.core.first(cljs.core.next(arglist__188378));
var more = cljs.core.rest(cljs.core.next(arglist__188378));
return G__188374__delegate.call(this, x, y, more);
});
return G__188374;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___188370.call(this,x);
case  2 :
return _LT___188371.call(this,x,y);
default:
return _LT___188372.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___188372.cljs$lang$applyTo;
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
var _LT__EQ___188379 = (function (x){
return true;
});
var _LT__EQ___188380 = (function (x,y){
return (x <= y);
});
var _LT__EQ___188381 = (function() { 
var G__188383__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__188384 = y;
var G__188385 = cljs.core.first.call(null,more);
var G__188386 = cljs.core.next.call(null,more);
x = G__188384;
y = G__188385;
more = G__188386;
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
var G__188383 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188383__delegate.call(this, x, y, more);
};
G__188383.cljs$lang$maxFixedArity = 2;
G__188383.cljs$lang$applyTo = (function (arglist__188387){
var x = cljs.core.first(arglist__188387);
var y = cljs.core.first(cljs.core.next(arglist__188387));
var more = cljs.core.rest(cljs.core.next(arglist__188387));
return G__188383__delegate.call(this, x, y, more);
});
return G__188383;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___188379.call(this,x);
case  2 :
return _LT__EQ___188380.call(this,x,y);
default:
return _LT__EQ___188381.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___188381.cljs$lang$applyTo;
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
var _GT___188388 = (function (x){
return true;
});
var _GT___188389 = (function (x,y){
return (x > y);
});
var _GT___188390 = (function() { 
var G__188392__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__188393 = y;
var G__188394 = cljs.core.first.call(null,more);
var G__188395 = cljs.core.next.call(null,more);
x = G__188393;
y = G__188394;
more = G__188395;
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
var G__188392 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188392__delegate.call(this, x, y, more);
};
G__188392.cljs$lang$maxFixedArity = 2;
G__188392.cljs$lang$applyTo = (function (arglist__188396){
var x = cljs.core.first(arglist__188396);
var y = cljs.core.first(cljs.core.next(arglist__188396));
var more = cljs.core.rest(cljs.core.next(arglist__188396));
return G__188392__delegate.call(this, x, y, more);
});
return G__188392;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___188388.call(this,x);
case  2 :
return _GT___188389.call(this,x,y);
default:
return _GT___188390.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___188390.cljs$lang$applyTo;
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
var _GT__EQ___188397 = (function (x){
return true;
});
var _GT__EQ___188398 = (function (x,y){
return (x >= y);
});
var _GT__EQ___188399 = (function() { 
var G__188401__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__188402 = y;
var G__188403 = cljs.core.first.call(null,more);
var G__188404 = cljs.core.next.call(null,more);
x = G__188402;
y = G__188403;
more = G__188404;
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
var G__188401 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188401__delegate.call(this, x, y, more);
};
G__188401.cljs$lang$maxFixedArity = 2;
G__188401.cljs$lang$applyTo = (function (arglist__188405){
var x = cljs.core.first(arglist__188405);
var y = cljs.core.first(cljs.core.next(arglist__188405));
var more = cljs.core.rest(cljs.core.next(arglist__188405));
return G__188401__delegate.call(this, x, y, more);
});
return G__188401;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___188397.call(this,x);
case  2 :
return _GT__EQ___188398.call(this,x,y);
default:
return _GT__EQ___188399.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___188399.cljs$lang$applyTo;
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
var max__188406 = (function (x){
return x;
});
var max__188407 = (function (x,y){
return ((x > y) ? x : y);
});
var max__188408 = (function() { 
var G__188410__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__188410 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188410__delegate.call(this, x, y, more);
};
G__188410.cljs$lang$maxFixedArity = 2;
G__188410.cljs$lang$applyTo = (function (arglist__188411){
var x = cljs.core.first(arglist__188411);
var y = cljs.core.first(cljs.core.next(arglist__188411));
var more = cljs.core.rest(cljs.core.next(arglist__188411));
return G__188410__delegate.call(this, x, y, more);
});
return G__188410;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__188406.call(this,x);
case  2 :
return max__188407.call(this,x,y);
default:
return max__188408.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__188408.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__188412 = (function (x){
return x;
});
var min__188413 = (function (x,y){
return ((x < y) ? x : y);
});
var min__188414 = (function() { 
var G__188416__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__188416 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188416__delegate.call(this, x, y, more);
};
G__188416.cljs$lang$maxFixedArity = 2;
G__188416.cljs$lang$applyTo = (function (arglist__188417){
var x = cljs.core.first(arglist__188417);
var y = cljs.core.first(cljs.core.next(arglist__188417));
var more = cljs.core.rest(cljs.core.next(arglist__188417));
return G__188416__delegate.call(this, x, y, more);
});
return G__188416;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__188412.call(this,x);
case  2 :
return min__188413.call(this,x,y);
default:
return min__188414.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__188414.cljs$lang$applyTo;
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
var rem__188418 = (n % d);

return cljs.core.fix.call(null,((n - rem__188418) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__188419 = cljs.core.quot.call(null,n,d);

return (n - (d * q__188419));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__188420 = (function (){
return Math.random.call(null);
});
var rand__188421 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__188420.call(this);
case  1 :
return rand__188421.call(this,n);
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
var _EQ__EQ___188423 = (function (x){
return true;
});
var _EQ__EQ___188424 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___188425 = (function() { 
var G__188427__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__188428 = y;
var G__188429 = cljs.core.first.call(null,more);
var G__188430 = cljs.core.next.call(null,more);
x = G__188428;
y = G__188429;
more = G__188430;
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
var G__188427 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188427__delegate.call(this, x, y, more);
};
G__188427.cljs$lang$maxFixedArity = 2;
G__188427.cljs$lang$applyTo = (function (arglist__188431){
var x = cljs.core.first(arglist__188431);
var y = cljs.core.first(cljs.core.next(arglist__188431));
var more = cljs.core.rest(cljs.core.next(arglist__188431));
return G__188427__delegate.call(this, x, y, more);
});
return G__188427;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___188423.call(this,x);
case  2 :
return _EQ__EQ___188424.call(this,x,y);
default:
return _EQ__EQ___188425.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___188425.cljs$lang$applyTo;
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
var n__188432 = n;
var xs__188433 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____188434 = xs__188433;

if(cljs.core.truth_(and__3546__auto____188434))
{return (n__188432 > 0);
} else
{return and__3546__auto____188434;
}
})()))
{{
var G__188435 = (n__188432 - 1);
var G__188436 = cljs.core.next.call(null,xs__188433);
n__188432 = G__188435;
xs__188433 = G__188436;
continue;
}
} else
{return xs__188433;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__188441 = null;
var G__188441__188442 = (function (coll,n){
var temp__3695__auto____188437 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____188437))
{var xs__188438 = temp__3695__auto____188437;

return cljs.core.first.call(null,xs__188438);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__188441__188443 = (function (coll,n,not_found){
var temp__3695__auto____188439 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____188439))
{var xs__188440 = temp__3695__auto____188439;

return cljs.core.first.call(null,xs__188440);
} else
{return not_found;
}
});
G__188441 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__188441__188442.call(this,coll,n);
case  3 :
return G__188441__188443.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__188441;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___188445 = (function (){
return "";
});
var str_STAR___188446 = (function (x){
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
var str_STAR___188447 = (function() { 
var G__188449__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__188450 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__188451 = cljs.core.next.call(null,more);
sb = G__188450;
more = G__188451;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__188449 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__188449__delegate.call(this, x, ys);
};
G__188449.cljs$lang$maxFixedArity = 1;
G__188449.cljs$lang$applyTo = (function (arglist__188452){
var x = cljs.core.first(arglist__188452);
var ys = cljs.core.rest(arglist__188452);
return G__188449__delegate.call(this, x, ys);
});
return G__188449;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___188445.call(this);
case  1 :
return str_STAR___188446.call(this,x);
default:
return str_STAR___188447.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___188447.cljs$lang$applyTo;
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
var str__188453 = (function (){
return "";
});
var str__188454 = (function (x){
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
var str__188455 = (function() { 
var G__188457__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__188457 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__188457__delegate.call(this, x, ys);
};
G__188457.cljs$lang$maxFixedArity = 1;
G__188457.cljs$lang$applyTo = (function (arglist__188458){
var x = cljs.core.first(arglist__188458);
var ys = cljs.core.rest(arglist__188458);
return G__188457__delegate.call(this, x, ys);
});
return G__188457;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__188453.call(this);
case  1 :
return str__188454.call(this,x);
default:
return str__188455.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__188455.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__188459 = (function (s,start){
return s.substring(start);
});
var subs__188460 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__188459.call(this,s,start);
case  3 :
return subs__188460.call(this,s,start,end);
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
var symbol__188462 = (function (name){
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
var symbol__188463 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__188462.call(this,ns);
case  2 :
return symbol__188463.call(this,ns,name);
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
var keyword__188465 = (function (name){
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
var keyword__188466 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"\/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__188465.call(this,ns);
case  2 :
return keyword__188466.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__188468 = cljs.core.seq.call(null,x);
var ys__188469 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__188468 === null)))
{return (ys__188469 === null);
} else
{if(cljs.core.truth_((ys__188469 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__188468),cljs.core.first.call(null,ys__188469))))
{{
var G__188470 = cljs.core.next.call(null,xs__188468);
var G__188471 = cljs.core.next.call(null,ys__188469);
xs__188468 = G__188470;
ys__188469 = G__188471;
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
return cljs.core.reduce.call(null,(function (p1__188472_SHARP_,p2__188473_SHARP_){
return cljs.core.hash_combine.call(null,p1__188472_SHARP_,cljs.core.hash.call(null,p2__188473_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__188474__188475 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__188474__188475))
{var G__188477__188479 = cljs.core.first.call(null,G__188474__188475);
var vec__188478__188480 = G__188477__188479;
var key_name__188481 = cljs.core.nth.call(null,vec__188478__188480,0,null);
var f__188482 = cljs.core.nth.call(null,vec__188478__188480,1,null);
var G__188474__188483 = G__188474__188475;

var G__188477__188484 = G__188477__188479;
var G__188474__188485 = G__188474__188483;

while(true){
var vec__188486__188487 = G__188477__188484;
var key_name__188488 = cljs.core.nth.call(null,vec__188486__188487,0,null);
var f__188489 = cljs.core.nth.call(null,vec__188486__188487,1,null);
var G__188474__188490 = G__188474__188485;

var str_name__188491 = cljs.core.name.call(null,key_name__188488);

obj[str_name__188491] = f__188489;
var temp__3698__auto____188492 = cljs.core.next.call(null,G__188474__188490);

if(cljs.core.truth_(temp__3698__auto____188492))
{var G__188474__188493 = temp__3698__auto____188492;

{
var G__188494 = cljs.core.first.call(null,G__188474__188493);
var G__188495 = G__188474__188493;
G__188477__188484 = G__188494;
G__188474__188485 = G__188495;
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
var this__188496 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__188497 = this;
return (new cljs.core.List(this__188497.meta,o,coll,(this__188497.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__188498 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__188499 = this;
return this__188499.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__188500 = this;
return this__188500.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__188501 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__188502 = this;
return this__188502.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__188503 = this;
return this__188503.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__188504 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__188505 = this;
return (new cljs.core.List(meta,this__188505.first,this__188505.rest,this__188505.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__188506 = this;
return this__188506.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__188507 = this;
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
var this__188508 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__188509 = this;
return (new cljs.core.List(this__188509.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__188510 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__188511 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__188512 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__188513 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__188514 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__188515 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__188516 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__188517 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__188518 = this;
return this__188518.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__188519 = this;
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
list.cljs$lang$applyTo = (function (arglist__188520){
var items = cljs.core.seq( arglist__188520 );;
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
var this__188521 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__188522 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__188523 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__188524 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__188524.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__188525 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__188526 = this;
return this__188526.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__188527 = this;
if(cljs.core.truth_((this__188527.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__188527.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__188528 = this;
return this__188528.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__188529 = this;
return (new cljs.core.Cons(meta,this__188529.first,this__188529.rest));
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
var G__188530 = null;
var G__188530__188531 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__188530__188532 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__188530 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__188530__188531.call(this,string,f);
case  3 :
return G__188530__188532.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__188530;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__188534 = null;
var G__188534__188535 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__188534__188536 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__188534 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__188534__188535.call(this,string,k);
case  3 :
return G__188534__188536.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__188534;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__188538 = null;
var G__188538__188539 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__188538__188540 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__188538 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__188538__188539.call(this,string,n);
case  3 :
return G__188538__188540.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__188538;
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
var G__188548 = null;
var G__188548__188549 = (function (tsym188542,coll){
var tsym188542__188544 = this;

var this$__188545 = tsym188542__188544;

return cljs.core.get.call(null,coll,this$__188545.toString());
});
var G__188548__188550 = (function (tsym188543,coll,not_found){
var tsym188543__188546 = this;

var this$__188547 = tsym188543__188546;

return cljs.core.get.call(null,coll,this$__188547.toString(),not_found);
});
G__188548 = function(tsym188543,coll,not_found){
switch(arguments.length){
case  2 :
return G__188548__188549.call(this,tsym188543,coll);
case  3 :
return G__188548__188550.call(this,tsym188543,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__188548;
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
var x__188552 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__188552;
} else
{lazy_seq.x = x__188552.call(null);
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
var this__188553 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__188554 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__188555 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__188556 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__188556.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__188557 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__188558 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__188559 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__188560 = this;
return this__188560.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__188561 = this;
return (new cljs.core.LazySeq(meta,this__188561.realized,this__188561.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__188562 = cljs.core.array.call(null);

var s__188563 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__188563)))
{ary__188562.push(cljs.core.first.call(null,s__188563));
{
var G__188564 = cljs.core.next.call(null,s__188563);
s__188563 = G__188564;
continue;
}
} else
{return ary__188562;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__188565 = s;
var i__188566 = n;
var sum__188567 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____188568 = (i__188566 > 0);

if(cljs.core.truth_(and__3546__auto____188568))
{return cljs.core.seq.call(null,s__188565);
} else
{return and__3546__auto____188568;
}
})()))
{{
var G__188569 = cljs.core.next.call(null,s__188565);
var G__188570 = (i__188566 - 1);
var G__188571 = (sum__188567 + 1);
s__188565 = G__188569;
i__188566 = G__188570;
sum__188567 = G__188571;
continue;
}
} else
{return sum__188567;
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
var concat__188575 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__188576 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__188577 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__188572 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__188572))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__188572),concat.call(null,cljs.core.rest.call(null,s__188572),y));
} else
{return y;
}
})));
});
var concat__188578 = (function() { 
var G__188580__delegate = function (x,y,zs){
var cat__188574 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__188573 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__188573))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__188573),cat.call(null,cljs.core.rest.call(null,xys__188573),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__188574.call(null,concat.call(null,x,y),zs);
};
var G__188580 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188580__delegate.call(this, x, y, zs);
};
G__188580.cljs$lang$maxFixedArity = 2;
G__188580.cljs$lang$applyTo = (function (arglist__188581){
var x = cljs.core.first(arglist__188581);
var y = cljs.core.first(cljs.core.next(arglist__188581));
var zs = cljs.core.rest(cljs.core.next(arglist__188581));
return G__188580__delegate.call(this, x, y, zs);
});
return G__188580;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__188575.call(this);
case  1 :
return concat__188576.call(this,x);
case  2 :
return concat__188577.call(this,x,y);
default:
return concat__188578.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__188578.cljs$lang$applyTo;
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
var list_STAR___188582 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___188583 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___188584 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___188585 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___188586 = (function() { 
var G__188588__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__188588 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__188588__delegate.call(this, a, b, c, d, more);
};
G__188588.cljs$lang$maxFixedArity = 4;
G__188588.cljs$lang$applyTo = (function (arglist__188589){
var a = cljs.core.first(arglist__188589);
var b = cljs.core.first(cljs.core.next(arglist__188589));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188589)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__188589))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__188589))));
return G__188588__delegate.call(this, a, b, c, d, more);
});
return G__188588;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___188582.call(this,a);
case  2 :
return list_STAR___188583.call(this,a,b);
case  3 :
return list_STAR___188584.call(this,a,b,c);
case  4 :
return list_STAR___188585.call(this,a,b,c,d);
default:
return list_STAR___188586.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___188586.cljs$lang$applyTo;
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
var apply__188599 = (function (f,args){
var fixed_arity__188590 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__188590 + 1)) <= fixed_arity__188590)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__188600 = (function (f,x,args){
var arglist__188591 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__188592 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__188591,fixed_arity__188592) <= fixed_arity__188592)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__188591));
} else
{return f.cljs$lang$applyTo(arglist__188591);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__188591));
}
});
var apply__188601 = (function (f,x,y,args){
var arglist__188593 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__188594 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__188593,fixed_arity__188594) <= fixed_arity__188594)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__188593));
} else
{return f.cljs$lang$applyTo(arglist__188593);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__188593));
}
});
var apply__188602 = (function (f,x,y,z,args){
var arglist__188595 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__188596 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__188595,fixed_arity__188596) <= fixed_arity__188596)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__188595));
} else
{return f.cljs$lang$applyTo(arglist__188595);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__188595));
}
});
var apply__188603 = (function() { 
var G__188605__delegate = function (f,a,b,c,d,args){
var arglist__188597 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__188598 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__188597,fixed_arity__188598) <= fixed_arity__188598)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__188597));
} else
{return f.cljs$lang$applyTo(arglist__188597);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__188597));
}
};
var G__188605 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__188605__delegate.call(this, f, a, b, c, d, args);
};
G__188605.cljs$lang$maxFixedArity = 5;
G__188605.cljs$lang$applyTo = (function (arglist__188606){
var f = cljs.core.first(arglist__188606);
var a = cljs.core.first(cljs.core.next(arglist__188606));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188606)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__188606))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__188606)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__188606)))));
return G__188605__delegate.call(this, f, a, b, c, d, args);
});
return G__188605;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__188599.call(this,f,a);
case  3 :
return apply__188600.call(this,f,a,b);
case  4 :
return apply__188601.call(this,f,a,b,c);
case  5 :
return apply__188602.call(this,f,a,b,c,d);
default:
return apply__188603.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__188603.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__188607){
var obj = cljs.core.first(arglist__188607);
var f = cljs.core.first(cljs.core.next(arglist__188607));
var args = cljs.core.rest(cljs.core.next(arglist__188607));
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
var not_EQ___188608 = (function (x){
return false;
});
var not_EQ___188609 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___188610 = (function() { 
var G__188612__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__188612 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188612__delegate.call(this, x, y, more);
};
G__188612.cljs$lang$maxFixedArity = 2;
G__188612.cljs$lang$applyTo = (function (arglist__188613){
var x = cljs.core.first(arglist__188613);
var y = cljs.core.first(cljs.core.next(arglist__188613));
var more = cljs.core.rest(cljs.core.next(arglist__188613));
return G__188612__delegate.call(this, x, y, more);
});
return G__188612;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___188608.call(this,x);
case  2 :
return not_EQ___188609.call(this,x,y);
default:
return not_EQ___188610.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___188610.cljs$lang$applyTo;
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
var G__188614 = pred;
var G__188615 = cljs.core.next.call(null,coll);
pred = G__188614;
coll = G__188615;
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
{var or__3548__auto____188616 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____188616))
{return or__3548__auto____188616;
} else
{{
var G__188617 = pred;
var G__188618 = cljs.core.next.call(null,coll);
pred = G__188617;
coll = G__188618;
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
var G__188619 = null;
var G__188619__188620 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__188619__188621 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__188619__188622 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__188619__188623 = (function() { 
var G__188625__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__188625 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188625__delegate.call(this, x, y, zs);
};
G__188625.cljs$lang$maxFixedArity = 2;
G__188625.cljs$lang$applyTo = (function (arglist__188626){
var x = cljs.core.first(arglist__188626);
var y = cljs.core.first(cljs.core.next(arglist__188626));
var zs = cljs.core.rest(cljs.core.next(arglist__188626));
return G__188625__delegate.call(this, x, y, zs);
});
return G__188625;
})()
;
G__188619 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__188619__188620.call(this);
case  1 :
return G__188619__188621.call(this,x);
case  2 :
return G__188619__188622.call(this,x,y);
default:
return G__188619__188623.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__188619.cljs$lang$maxFixedArity = 2;
G__188619.cljs$lang$applyTo = G__188619__188623.cljs$lang$applyTo;
return G__188619;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__188627__delegate = function (args){
return x;
};
var G__188627 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__188627__delegate.call(this, args);
};
G__188627.cljs$lang$maxFixedArity = 0;
G__188627.cljs$lang$applyTo = (function (arglist__188628){
var args = cljs.core.seq( arglist__188628 );;
return G__188627__delegate.call(this, args);
});
return G__188627;
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
var comp__188632 = (function (){
return cljs.core.identity;
});
var comp__188633 = (function (f){
return f;
});
var comp__188634 = (function (f,g){
return (function() {
var G__188638 = null;
var G__188638__188639 = (function (){
return f.call(null,g.call(null));
});
var G__188638__188640 = (function (x){
return f.call(null,g.call(null,x));
});
var G__188638__188641 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__188638__188642 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__188638__188643 = (function() { 
var G__188645__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__188645 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__188645__delegate.call(this, x, y, z, args);
};
G__188645.cljs$lang$maxFixedArity = 3;
G__188645.cljs$lang$applyTo = (function (arglist__188646){
var x = cljs.core.first(arglist__188646);
var y = cljs.core.first(cljs.core.next(arglist__188646));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188646)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188646)));
return G__188645__delegate.call(this, x, y, z, args);
});
return G__188645;
})()
;
G__188638 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__188638__188639.call(this);
case  1 :
return G__188638__188640.call(this,x);
case  2 :
return G__188638__188641.call(this,x,y);
case  3 :
return G__188638__188642.call(this,x,y,z);
default:
return G__188638__188643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__188638.cljs$lang$maxFixedArity = 3;
G__188638.cljs$lang$applyTo = G__188638__188643.cljs$lang$applyTo;
return G__188638;
})()
});
var comp__188635 = (function (f,g,h){
return (function() {
var G__188647 = null;
var G__188647__188648 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__188647__188649 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__188647__188650 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__188647__188651 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__188647__188652 = (function() { 
var G__188654__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__188654 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__188654__delegate.call(this, x, y, z, args);
};
G__188654.cljs$lang$maxFixedArity = 3;
G__188654.cljs$lang$applyTo = (function (arglist__188655){
var x = cljs.core.first(arglist__188655);
var y = cljs.core.first(cljs.core.next(arglist__188655));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188655)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188655)));
return G__188654__delegate.call(this, x, y, z, args);
});
return G__188654;
})()
;
G__188647 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__188647__188648.call(this);
case  1 :
return G__188647__188649.call(this,x);
case  2 :
return G__188647__188650.call(this,x,y);
case  3 :
return G__188647__188651.call(this,x,y,z);
default:
return G__188647__188652.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__188647.cljs$lang$maxFixedArity = 3;
G__188647.cljs$lang$applyTo = G__188647__188652.cljs$lang$applyTo;
return G__188647;
})()
});
var comp__188636 = (function() { 
var G__188656__delegate = function (f1,f2,f3,fs){
var fs__188629 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__188657__delegate = function (args){
var ret__188630 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__188629),args);
var fs__188631 = cljs.core.next.call(null,fs__188629);

while(true){
if(cljs.core.truth_(fs__188631))
{{
var G__188658 = cljs.core.first.call(null,fs__188631).call(null,ret__188630);
var G__188659 = cljs.core.next.call(null,fs__188631);
ret__188630 = G__188658;
fs__188631 = G__188659;
continue;
}
} else
{return ret__188630;
}
break;
}
};
var G__188657 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__188657__delegate.call(this, args);
};
G__188657.cljs$lang$maxFixedArity = 0;
G__188657.cljs$lang$applyTo = (function (arglist__188660){
var args = cljs.core.seq( arglist__188660 );;
return G__188657__delegate.call(this, args);
});
return G__188657;
})()
;
};
var G__188656 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__188656__delegate.call(this, f1, f2, f3, fs);
};
G__188656.cljs$lang$maxFixedArity = 3;
G__188656.cljs$lang$applyTo = (function (arglist__188661){
var f1 = cljs.core.first(arglist__188661);
var f2 = cljs.core.first(cljs.core.next(arglist__188661));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188661)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188661)));
return G__188656__delegate.call(this, f1, f2, f3, fs);
});
return G__188656;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__188632.call(this);
case  1 :
return comp__188633.call(this,f1);
case  2 :
return comp__188634.call(this,f1,f2);
case  3 :
return comp__188635.call(this,f1,f2,f3);
default:
return comp__188636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__188636.cljs$lang$applyTo;
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
var partial__188662 = (function (f,arg1){
return (function() { 
var G__188667__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__188667 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__188667__delegate.call(this, args);
};
G__188667.cljs$lang$maxFixedArity = 0;
G__188667.cljs$lang$applyTo = (function (arglist__188668){
var args = cljs.core.seq( arglist__188668 );;
return G__188667__delegate.call(this, args);
});
return G__188667;
})()
;
});
var partial__188663 = (function (f,arg1,arg2){
return (function() { 
var G__188669__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__188669 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__188669__delegate.call(this, args);
};
G__188669.cljs$lang$maxFixedArity = 0;
G__188669.cljs$lang$applyTo = (function (arglist__188670){
var args = cljs.core.seq( arglist__188670 );;
return G__188669__delegate.call(this, args);
});
return G__188669;
})()
;
});
var partial__188664 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__188671__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__188671 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__188671__delegate.call(this, args);
};
G__188671.cljs$lang$maxFixedArity = 0;
G__188671.cljs$lang$applyTo = (function (arglist__188672){
var args = cljs.core.seq( arglist__188672 );;
return G__188671__delegate.call(this, args);
});
return G__188671;
})()
;
});
var partial__188665 = (function() { 
var G__188673__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__188674__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__188674 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__188674__delegate.call(this, args);
};
G__188674.cljs$lang$maxFixedArity = 0;
G__188674.cljs$lang$applyTo = (function (arglist__188675){
var args = cljs.core.seq( arglist__188675 );;
return G__188674__delegate.call(this, args);
});
return G__188674;
})()
;
};
var G__188673 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__188673__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__188673.cljs$lang$maxFixedArity = 4;
G__188673.cljs$lang$applyTo = (function (arglist__188676){
var f = cljs.core.first(arglist__188676);
var arg1 = cljs.core.first(cljs.core.next(arglist__188676));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188676)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__188676))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__188676))));
return G__188673__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__188673;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__188662.call(this,f,arg1);
case  3 :
return partial__188663.call(this,f,arg1,arg2);
case  4 :
return partial__188664.call(this,f,arg1,arg2,arg3);
default:
return partial__188665.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__188665.cljs$lang$applyTo;
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
var fnil__188677 = (function (f,x){
return (function() {
var G__188681 = null;
var G__188681__188682 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__188681__188683 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__188681__188684 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__188681__188685 = (function() { 
var G__188687__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__188687 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__188687__delegate.call(this, a, b, c, ds);
};
G__188687.cljs$lang$maxFixedArity = 3;
G__188687.cljs$lang$applyTo = (function (arglist__188688){
var a = cljs.core.first(arglist__188688);
var b = cljs.core.first(cljs.core.next(arglist__188688));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188688)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188688)));
return G__188687__delegate.call(this, a, b, c, ds);
});
return G__188687;
})()
;
G__188681 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__188681__188682.call(this,a);
case  2 :
return G__188681__188683.call(this,a,b);
case  3 :
return G__188681__188684.call(this,a,b,c);
default:
return G__188681__188685.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__188681.cljs$lang$maxFixedArity = 3;
G__188681.cljs$lang$applyTo = G__188681__188685.cljs$lang$applyTo;
return G__188681;
})()
});
var fnil__188678 = (function (f,x,y){
return (function() {
var G__188689 = null;
var G__188689__188690 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__188689__188691 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__188689__188692 = (function() { 
var G__188694__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__188694 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__188694__delegate.call(this, a, b, c, ds);
};
G__188694.cljs$lang$maxFixedArity = 3;
G__188694.cljs$lang$applyTo = (function (arglist__188695){
var a = cljs.core.first(arglist__188695);
var b = cljs.core.first(cljs.core.next(arglist__188695));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188695)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188695)));
return G__188694__delegate.call(this, a, b, c, ds);
});
return G__188694;
})()
;
G__188689 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__188689__188690.call(this,a,b);
case  3 :
return G__188689__188691.call(this,a,b,c);
default:
return G__188689__188692.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__188689.cljs$lang$maxFixedArity = 3;
G__188689.cljs$lang$applyTo = G__188689__188692.cljs$lang$applyTo;
return G__188689;
})()
});
var fnil__188679 = (function (f,x,y,z){
return (function() {
var G__188696 = null;
var G__188696__188697 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__188696__188698 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__188696__188699 = (function() { 
var G__188701__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__188701 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__188701__delegate.call(this, a, b, c, ds);
};
G__188701.cljs$lang$maxFixedArity = 3;
G__188701.cljs$lang$applyTo = (function (arglist__188702){
var a = cljs.core.first(arglist__188702);
var b = cljs.core.first(cljs.core.next(arglist__188702));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188702)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188702)));
return G__188701__delegate.call(this, a, b, c, ds);
});
return G__188701;
})()
;
G__188696 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__188696__188697.call(this,a,b);
case  3 :
return G__188696__188698.call(this,a,b,c);
default:
return G__188696__188699.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__188696.cljs$lang$maxFixedArity = 3;
G__188696.cljs$lang$applyTo = G__188696__188699.cljs$lang$applyTo;
return G__188696;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__188677.call(this,f,x);
case  3 :
return fnil__188678.call(this,f,x,y);
case  4 :
return fnil__188679.call(this,f,x,y,z);
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
var mapi__188705 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____188703 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____188703))
{var s__188704 = temp__3698__auto____188703;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__188704)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__188704)));
} else
{return null;
}
})));
});

return mapi__188705.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____188706 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____188706))
{var s__188707 = temp__3698__auto____188706;

var x__188708 = f.call(null,cljs.core.first.call(null,s__188707));

if(cljs.core.truth_((x__188708 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__188707));
} else
{return cljs.core.cons.call(null,x__188708,keep.call(null,f,cljs.core.rest.call(null,s__188707)));
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
var keepi__188718 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____188715 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____188715))
{var s__188716 = temp__3698__auto____188715;

var x__188717 = f.call(null,idx,cljs.core.first.call(null,s__188716));

if(cljs.core.truth_((x__188717 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__188716));
} else
{return cljs.core.cons.call(null,x__188717,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__188716)));
}
} else
{return null;
}
})));
});

return keepi__188718.call(null,0,coll);
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
var every_pred__188763 = (function (p){
return (function() {
var ep1 = null;
var ep1__188768 = (function (){
return true;
});
var ep1__188769 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__188770 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____188725 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____188725))
{return p.call(null,y);
} else
{return and__3546__auto____188725;
}
})());
});
var ep1__188771 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____188726 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____188726))
{var and__3546__auto____188727 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____188727))
{return p.call(null,z);
} else
{return and__3546__auto____188727;
}
} else
{return and__3546__auto____188726;
}
})());
});
var ep1__188772 = (function() { 
var G__188774__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____188728 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____188728))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____188728;
}
})());
};
var G__188774 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__188774__delegate.call(this, x, y, z, args);
};
G__188774.cljs$lang$maxFixedArity = 3;
G__188774.cljs$lang$applyTo = (function (arglist__188775){
var x = cljs.core.first(arglist__188775);
var y = cljs.core.first(cljs.core.next(arglist__188775));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188775)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188775)));
return G__188774__delegate.call(this, x, y, z, args);
});
return G__188774;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__188768.call(this);
case  1 :
return ep1__188769.call(this,x);
case  2 :
return ep1__188770.call(this,x,y);
case  3 :
return ep1__188771.call(this,x,y,z);
default:
return ep1__188772.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__188772.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__188764 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__188776 = (function (){
return true;
});
var ep2__188777 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____188729 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____188729))
{return p2.call(null,x);
} else
{return and__3546__auto____188729;
}
})());
});
var ep2__188778 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____188730 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____188730))
{var and__3546__auto____188731 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____188731))
{var and__3546__auto____188732 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____188732))
{return p2.call(null,y);
} else
{return and__3546__auto____188732;
}
} else
{return and__3546__auto____188731;
}
} else
{return and__3546__auto____188730;
}
})());
});
var ep2__188779 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____188733 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____188733))
{var and__3546__auto____188734 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____188734))
{var and__3546__auto____188735 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____188735))
{var and__3546__auto____188736 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____188736))
{var and__3546__auto____188737 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____188737))
{return p2.call(null,z);
} else
{return and__3546__auto____188737;
}
} else
{return and__3546__auto____188736;
}
} else
{return and__3546__auto____188735;
}
} else
{return and__3546__auto____188734;
}
} else
{return and__3546__auto____188733;
}
})());
});
var ep2__188780 = (function() { 
var G__188782__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____188738 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____188738))
{return cljs.core.every_QMARK_.call(null,(function (p1__188709_SHARP_){
var and__3546__auto____188739 = p1.call(null,p1__188709_SHARP_);

if(cljs.core.truth_(and__3546__auto____188739))
{return p2.call(null,p1__188709_SHARP_);
} else
{return and__3546__auto____188739;
}
}),args);
} else
{return and__3546__auto____188738;
}
})());
};
var G__188782 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__188782__delegate.call(this, x, y, z, args);
};
G__188782.cljs$lang$maxFixedArity = 3;
G__188782.cljs$lang$applyTo = (function (arglist__188783){
var x = cljs.core.first(arglist__188783);
var y = cljs.core.first(cljs.core.next(arglist__188783));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188783)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188783)));
return G__188782__delegate.call(this, x, y, z, args);
});
return G__188782;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__188776.call(this);
case  1 :
return ep2__188777.call(this,x);
case  2 :
return ep2__188778.call(this,x,y);
case  3 :
return ep2__188779.call(this,x,y,z);
default:
return ep2__188780.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__188780.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__188765 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__188784 = (function (){
return true;
});
var ep3__188785 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____188740 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____188740))
{var and__3546__auto____188741 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____188741))
{return p3.call(null,x);
} else
{return and__3546__auto____188741;
}
} else
{return and__3546__auto____188740;
}
})());
});
var ep3__188786 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____188742 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____188742))
{var and__3546__auto____188743 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____188743))
{var and__3546__auto____188744 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____188744))
{var and__3546__auto____188745 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____188745))
{var and__3546__auto____188746 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____188746))
{return p3.call(null,y);
} else
{return and__3546__auto____188746;
}
} else
{return and__3546__auto____188745;
}
} else
{return and__3546__auto____188744;
}
} else
{return and__3546__auto____188743;
}
} else
{return and__3546__auto____188742;
}
})());
});
var ep3__188787 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____188747 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____188747))
{var and__3546__auto____188748 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____188748))
{var and__3546__auto____188749 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____188749))
{var and__3546__auto____188750 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____188750))
{var and__3546__auto____188751 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____188751))
{var and__3546__auto____188752 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____188752))
{var and__3546__auto____188753 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____188753))
{var and__3546__auto____188754 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____188754))
{return p3.call(null,z);
} else
{return and__3546__auto____188754;
}
} else
{return and__3546__auto____188753;
}
} else
{return and__3546__auto____188752;
}
} else
{return and__3546__auto____188751;
}
} else
{return and__3546__auto____188750;
}
} else
{return and__3546__auto____188749;
}
} else
{return and__3546__auto____188748;
}
} else
{return and__3546__auto____188747;
}
})());
});
var ep3__188788 = (function() { 
var G__188790__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____188755 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____188755))
{return cljs.core.every_QMARK_.call(null,(function (p1__188710_SHARP_){
var and__3546__auto____188756 = p1.call(null,p1__188710_SHARP_);

if(cljs.core.truth_(and__3546__auto____188756))
{var and__3546__auto____188757 = p2.call(null,p1__188710_SHARP_);

if(cljs.core.truth_(and__3546__auto____188757))
{return p3.call(null,p1__188710_SHARP_);
} else
{return and__3546__auto____188757;
}
} else
{return and__3546__auto____188756;
}
}),args);
} else
{return and__3546__auto____188755;
}
})());
};
var G__188790 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__188790__delegate.call(this, x, y, z, args);
};
G__188790.cljs$lang$maxFixedArity = 3;
G__188790.cljs$lang$applyTo = (function (arglist__188791){
var x = cljs.core.first(arglist__188791);
var y = cljs.core.first(cljs.core.next(arglist__188791));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188791)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188791)));
return G__188790__delegate.call(this, x, y, z, args);
});
return G__188790;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__188784.call(this);
case  1 :
return ep3__188785.call(this,x);
case  2 :
return ep3__188786.call(this,x,y);
case  3 :
return ep3__188787.call(this,x,y,z);
default:
return ep3__188788.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__188788.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__188766 = (function() { 
var G__188792__delegate = function (p1,p2,p3,ps){
var ps__188758 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__188793 = (function (){
return true;
});
var epn__188794 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__188711_SHARP_){
return p1__188711_SHARP_.call(null,x);
}),ps__188758);
});
var epn__188795 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__188712_SHARP_){
var and__3546__auto____188759 = p1__188712_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____188759))
{return p1__188712_SHARP_.call(null,y);
} else
{return and__3546__auto____188759;
}
}),ps__188758);
});
var epn__188796 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__188713_SHARP_){
var and__3546__auto____188760 = p1__188713_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____188760))
{var and__3546__auto____188761 = p1__188713_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____188761))
{return p1__188713_SHARP_.call(null,z);
} else
{return and__3546__auto____188761;
}
} else
{return and__3546__auto____188760;
}
}),ps__188758);
});
var epn__188797 = (function() { 
var G__188799__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____188762 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____188762))
{return cljs.core.every_QMARK_.call(null,(function (p1__188714_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__188714_SHARP_,args);
}),ps__188758);
} else
{return and__3546__auto____188762;
}
})());
};
var G__188799 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__188799__delegate.call(this, x, y, z, args);
};
G__188799.cljs$lang$maxFixedArity = 3;
G__188799.cljs$lang$applyTo = (function (arglist__188800){
var x = cljs.core.first(arglist__188800);
var y = cljs.core.first(cljs.core.next(arglist__188800));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188800)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188800)));
return G__188799__delegate.call(this, x, y, z, args);
});
return G__188799;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__188793.call(this);
case  1 :
return epn__188794.call(this,x);
case  2 :
return epn__188795.call(this,x,y);
case  3 :
return epn__188796.call(this,x,y,z);
default:
return epn__188797.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__188797.cljs$lang$applyTo;
return epn;
})()
};
var G__188792 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__188792__delegate.call(this, p1, p2, p3, ps);
};
G__188792.cljs$lang$maxFixedArity = 3;
G__188792.cljs$lang$applyTo = (function (arglist__188801){
var p1 = cljs.core.first(arglist__188801);
var p2 = cljs.core.first(cljs.core.next(arglist__188801));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188801)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188801)));
return G__188792__delegate.call(this, p1, p2, p3, ps);
});
return G__188792;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__188763.call(this,p1);
case  2 :
return every_pred__188764.call(this,p1,p2);
case  3 :
return every_pred__188765.call(this,p1,p2,p3);
default:
return every_pred__188766.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__188766.cljs$lang$applyTo;
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
var some_fn__188841 = (function (p){
return (function() {
var sp1 = null;
var sp1__188846 = (function (){
return null;
});
var sp1__188847 = (function (x){
return p.call(null,x);
});
var sp1__188848 = (function (x,y){
var or__3548__auto____188803 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____188803))
{return or__3548__auto____188803;
} else
{return p.call(null,y);
}
});
var sp1__188849 = (function (x,y,z){
var or__3548__auto____188804 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____188804))
{return or__3548__auto____188804;
} else
{var or__3548__auto____188805 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____188805))
{return or__3548__auto____188805;
} else
{return p.call(null,z);
}
}
});
var sp1__188850 = (function() { 
var G__188852__delegate = function (x,y,z,args){
var or__3548__auto____188806 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____188806))
{return or__3548__auto____188806;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__188852 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__188852__delegate.call(this, x, y, z, args);
};
G__188852.cljs$lang$maxFixedArity = 3;
G__188852.cljs$lang$applyTo = (function (arglist__188853){
var x = cljs.core.first(arglist__188853);
var y = cljs.core.first(cljs.core.next(arglist__188853));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188853)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188853)));
return G__188852__delegate.call(this, x, y, z, args);
});
return G__188852;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__188846.call(this);
case  1 :
return sp1__188847.call(this,x);
case  2 :
return sp1__188848.call(this,x,y);
case  3 :
return sp1__188849.call(this,x,y,z);
default:
return sp1__188850.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__188850.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__188842 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__188854 = (function (){
return null;
});
var sp2__188855 = (function (x){
var or__3548__auto____188807 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____188807))
{return or__3548__auto____188807;
} else
{return p2.call(null,x);
}
});
var sp2__188856 = (function (x,y){
var or__3548__auto____188808 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____188808))
{return or__3548__auto____188808;
} else
{var or__3548__auto____188809 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____188809))
{return or__3548__auto____188809;
} else
{var or__3548__auto____188810 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____188810))
{return or__3548__auto____188810;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__188857 = (function (x,y,z){
var or__3548__auto____188811 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____188811))
{return or__3548__auto____188811;
} else
{var or__3548__auto____188812 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____188812))
{return or__3548__auto____188812;
} else
{var or__3548__auto____188813 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____188813))
{return or__3548__auto____188813;
} else
{var or__3548__auto____188814 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____188814))
{return or__3548__auto____188814;
} else
{var or__3548__auto____188815 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____188815))
{return or__3548__auto____188815;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__188858 = (function() { 
var G__188860__delegate = function (x,y,z,args){
var or__3548__auto____188816 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____188816))
{return or__3548__auto____188816;
} else
{return cljs.core.some.call(null,(function (p1__188719_SHARP_){
var or__3548__auto____188817 = p1.call(null,p1__188719_SHARP_);

if(cljs.core.truth_(or__3548__auto____188817))
{return or__3548__auto____188817;
} else
{return p2.call(null,p1__188719_SHARP_);
}
}),args);
}
};
var G__188860 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__188860__delegate.call(this, x, y, z, args);
};
G__188860.cljs$lang$maxFixedArity = 3;
G__188860.cljs$lang$applyTo = (function (arglist__188861){
var x = cljs.core.first(arglist__188861);
var y = cljs.core.first(cljs.core.next(arglist__188861));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188861)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188861)));
return G__188860__delegate.call(this, x, y, z, args);
});
return G__188860;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__188854.call(this);
case  1 :
return sp2__188855.call(this,x);
case  2 :
return sp2__188856.call(this,x,y);
case  3 :
return sp2__188857.call(this,x,y,z);
default:
return sp2__188858.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__188858.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__188843 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__188862 = (function (){
return null;
});
var sp3__188863 = (function (x){
var or__3548__auto____188818 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____188818))
{return or__3548__auto____188818;
} else
{var or__3548__auto____188819 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____188819))
{return or__3548__auto____188819;
} else
{return p3.call(null,x);
}
}
});
var sp3__188864 = (function (x,y){
var or__3548__auto____188820 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____188820))
{return or__3548__auto____188820;
} else
{var or__3548__auto____188821 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____188821))
{return or__3548__auto____188821;
} else
{var or__3548__auto____188822 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____188822))
{return or__3548__auto____188822;
} else
{var or__3548__auto____188823 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____188823))
{return or__3548__auto____188823;
} else
{var or__3548__auto____188824 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____188824))
{return or__3548__auto____188824;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__188865 = (function (x,y,z){
var or__3548__auto____188825 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____188825))
{return or__3548__auto____188825;
} else
{var or__3548__auto____188826 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____188826))
{return or__3548__auto____188826;
} else
{var or__3548__auto____188827 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____188827))
{return or__3548__auto____188827;
} else
{var or__3548__auto____188828 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____188828))
{return or__3548__auto____188828;
} else
{var or__3548__auto____188829 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____188829))
{return or__3548__auto____188829;
} else
{var or__3548__auto____188830 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____188830))
{return or__3548__auto____188830;
} else
{var or__3548__auto____188831 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____188831))
{return or__3548__auto____188831;
} else
{var or__3548__auto____188832 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____188832))
{return or__3548__auto____188832;
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
var sp3__188866 = (function() { 
var G__188868__delegate = function (x,y,z,args){
var or__3548__auto____188833 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____188833))
{return or__3548__auto____188833;
} else
{return cljs.core.some.call(null,(function (p1__188720_SHARP_){
var or__3548__auto____188834 = p1.call(null,p1__188720_SHARP_);

if(cljs.core.truth_(or__3548__auto____188834))
{return or__3548__auto____188834;
} else
{var or__3548__auto____188835 = p2.call(null,p1__188720_SHARP_);

if(cljs.core.truth_(or__3548__auto____188835))
{return or__3548__auto____188835;
} else
{return p3.call(null,p1__188720_SHARP_);
}
}
}),args);
}
};
var G__188868 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__188868__delegate.call(this, x, y, z, args);
};
G__188868.cljs$lang$maxFixedArity = 3;
G__188868.cljs$lang$applyTo = (function (arglist__188869){
var x = cljs.core.first(arglist__188869);
var y = cljs.core.first(cljs.core.next(arglist__188869));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188869)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188869)));
return G__188868__delegate.call(this, x, y, z, args);
});
return G__188868;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__188862.call(this);
case  1 :
return sp3__188863.call(this,x);
case  2 :
return sp3__188864.call(this,x,y);
case  3 :
return sp3__188865.call(this,x,y,z);
default:
return sp3__188866.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__188866.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__188844 = (function() { 
var G__188870__delegate = function (p1,p2,p3,ps){
var ps__188836 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__188871 = (function (){
return null;
});
var spn__188872 = (function (x){
return cljs.core.some.call(null,(function (p1__188721_SHARP_){
return p1__188721_SHARP_.call(null,x);
}),ps__188836);
});
var spn__188873 = (function (x,y){
return cljs.core.some.call(null,(function (p1__188722_SHARP_){
var or__3548__auto____188837 = p1__188722_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____188837))
{return or__3548__auto____188837;
} else
{return p1__188722_SHARP_.call(null,y);
}
}),ps__188836);
});
var spn__188874 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__188723_SHARP_){
var or__3548__auto____188838 = p1__188723_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____188838))
{return or__3548__auto____188838;
} else
{var or__3548__auto____188839 = p1__188723_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____188839))
{return or__3548__auto____188839;
} else
{return p1__188723_SHARP_.call(null,z);
}
}
}),ps__188836);
});
var spn__188875 = (function() { 
var G__188877__delegate = function (x,y,z,args){
var or__3548__auto____188840 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____188840))
{return or__3548__auto____188840;
} else
{return cljs.core.some.call(null,(function (p1__188724_SHARP_){
return cljs.core.some.call(null,p1__188724_SHARP_,args);
}),ps__188836);
}
};
var G__188877 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__188877__delegate.call(this, x, y, z, args);
};
G__188877.cljs$lang$maxFixedArity = 3;
G__188877.cljs$lang$applyTo = (function (arglist__188878){
var x = cljs.core.first(arglist__188878);
var y = cljs.core.first(cljs.core.next(arglist__188878));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188878)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188878)));
return G__188877__delegate.call(this, x, y, z, args);
});
return G__188877;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__188871.call(this);
case  1 :
return spn__188872.call(this,x);
case  2 :
return spn__188873.call(this,x,y);
case  3 :
return spn__188874.call(this,x,y,z);
default:
return spn__188875.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__188875.cljs$lang$applyTo;
return spn;
})()
};
var G__188870 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__188870__delegate.call(this, p1, p2, p3, ps);
};
G__188870.cljs$lang$maxFixedArity = 3;
G__188870.cljs$lang$applyTo = (function (arglist__188879){
var p1 = cljs.core.first(arglist__188879);
var p2 = cljs.core.first(cljs.core.next(arglist__188879));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188879)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188879)));
return G__188870__delegate.call(this, p1, p2, p3, ps);
});
return G__188870;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__188841.call(this,p1);
case  2 :
return some_fn__188842.call(this,p1,p2);
case  3 :
return some_fn__188843.call(this,p1,p2,p3);
default:
return some_fn__188844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__188844.cljs$lang$applyTo;
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
var map__188892 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____188880 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____188880))
{var s__188881 = temp__3698__auto____188880;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__188881)),map.call(null,f,cljs.core.rest.call(null,s__188881)));
} else
{return null;
}
})));
});
var map__188893 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__188882 = cljs.core.seq.call(null,c1);
var s2__188883 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____188884 = s1__188882;

if(cljs.core.truth_(and__3546__auto____188884))
{return s2__188883;
} else
{return and__3546__auto____188884;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__188882),cljs.core.first.call(null,s2__188883)),map.call(null,f,cljs.core.rest.call(null,s1__188882),cljs.core.rest.call(null,s2__188883)));
} else
{return null;
}
})));
});
var map__188894 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__188885 = cljs.core.seq.call(null,c1);
var s2__188886 = cljs.core.seq.call(null,c2);
var s3__188887 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____188888 = s1__188885;

if(cljs.core.truth_(and__3546__auto____188888))
{var and__3546__auto____188889 = s2__188886;

if(cljs.core.truth_(and__3546__auto____188889))
{return s3__188887;
} else
{return and__3546__auto____188889;
}
} else
{return and__3546__auto____188888;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__188885),cljs.core.first.call(null,s2__188886),cljs.core.first.call(null,s3__188887)),map.call(null,f,cljs.core.rest.call(null,s1__188885),cljs.core.rest.call(null,s2__188886),cljs.core.rest.call(null,s3__188887)));
} else
{return null;
}
})));
});
var map__188895 = (function() { 
var G__188897__delegate = function (f,c1,c2,c3,colls){
var step__188891 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__188890 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__188890)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__188890),step.call(null,map.call(null,cljs.core.rest,ss__188890)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__188802_SHARP_){
return cljs.core.apply.call(null,f,p1__188802_SHARP_);
}),step__188891.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__188897 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__188897__delegate.call(this, f, c1, c2, c3, colls);
};
G__188897.cljs$lang$maxFixedArity = 4;
G__188897.cljs$lang$applyTo = (function (arglist__188898){
var f = cljs.core.first(arglist__188898);
var c1 = cljs.core.first(cljs.core.next(arglist__188898));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188898)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__188898))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__188898))));
return G__188897__delegate.call(this, f, c1, c2, c3, colls);
});
return G__188897;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__188892.call(this,f,c1);
case  3 :
return map__188893.call(this,f,c1,c2);
case  4 :
return map__188894.call(this,f,c1,c2,c3);
default:
return map__188895.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__188895.cljs$lang$applyTo;
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
{var temp__3698__auto____188899 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____188899))
{var s__188900 = temp__3698__auto____188899;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__188900),take.call(null,(n - 1),cljs.core.rest.call(null,s__188900)));
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
var step__188903 = (function (n,coll){
while(true){
var s__188901 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____188902 = (n > 0);

if(cljs.core.truth_(and__3546__auto____188902))
{return s__188901;
} else
{return and__3546__auto____188902;
}
})()))
{{
var G__188904 = (n - 1);
var G__188905 = cljs.core.rest.call(null,s__188901);
n = G__188904;
coll = G__188905;
continue;
}
} else
{return s__188901;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__188903.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__188906 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__188907 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__188906.call(this,n);
case  2 :
return drop_last__188907.call(this,n,s);
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
var s__188909 = cljs.core.seq.call(null,coll);
var lead__188910 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__188910))
{{
var G__188911 = cljs.core.next.call(null,s__188909);
var G__188912 = cljs.core.next.call(null,lead__188910);
s__188909 = G__188911;
lead__188910 = G__188912;
continue;
}
} else
{return s__188909;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__188915 = (function (pred,coll){
while(true){
var s__188913 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____188914 = s__188913;

if(cljs.core.truth_(and__3546__auto____188914))
{return pred.call(null,cljs.core.first.call(null,s__188913));
} else
{return and__3546__auto____188914;
}
})()))
{{
var G__188916 = pred;
var G__188917 = cljs.core.rest.call(null,s__188913);
pred = G__188916;
coll = G__188917;
continue;
}
} else
{return s__188913;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__188915.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____188918 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____188918))
{var s__188919 = temp__3698__auto____188918;

return cljs.core.concat.call(null,s__188919,cycle.call(null,s__188919));
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
var repeat__188920 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__188921 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__188920.call(this,n);
case  2 :
return repeat__188921.call(this,n,x);
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
var repeatedly__188923 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__188924 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__188923.call(this,n);
case  2 :
return repeatedly__188924.call(this,n,f);
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
var interleave__188930 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__188926 = cljs.core.seq.call(null,c1);
var s2__188927 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____188928 = s1__188926;

if(cljs.core.truth_(and__3546__auto____188928))
{return s2__188927;
} else
{return and__3546__auto____188928;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__188926),cljs.core.cons.call(null,cljs.core.first.call(null,s2__188927),interleave.call(null,cljs.core.rest.call(null,s1__188926),cljs.core.rest.call(null,s2__188927))));
} else
{return null;
}
})));
});
var interleave__188931 = (function() { 
var G__188933__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__188929 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__188929)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__188929),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__188929)));
} else
{return null;
}
})));
};
var G__188933 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188933__delegate.call(this, c1, c2, colls);
};
G__188933.cljs$lang$maxFixedArity = 2;
G__188933.cljs$lang$applyTo = (function (arglist__188934){
var c1 = cljs.core.first(arglist__188934);
var c2 = cljs.core.first(cljs.core.next(arglist__188934));
var colls = cljs.core.rest(cljs.core.next(arglist__188934));
return G__188933__delegate.call(this, c1, c2, colls);
});
return G__188933;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__188930.call(this,c1,c2);
default:
return interleave__188931.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__188931.cljs$lang$applyTo;
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
var cat__188937 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____188935 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____188935))
{var coll__188936 = temp__3695__auto____188935;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__188936),cat.call(null,cljs.core.rest.call(null,coll__188936),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__188937.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__188938 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__188939 = (function() { 
var G__188941__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__188941 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__188941__delegate.call(this, f, coll, colls);
};
G__188941.cljs$lang$maxFixedArity = 2;
G__188941.cljs$lang$applyTo = (function (arglist__188942){
var f = cljs.core.first(arglist__188942);
var coll = cljs.core.first(cljs.core.next(arglist__188942));
var colls = cljs.core.rest(cljs.core.next(arglist__188942));
return G__188941__delegate.call(this, f, coll, colls);
});
return G__188941;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__188938.call(this,f,coll);
default:
return mapcat__188939.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__188939.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____188943 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____188943))
{var s__188944 = temp__3698__auto____188943;

var f__188945 = cljs.core.first.call(null,s__188944);
var r__188946 = cljs.core.rest.call(null,s__188944);

if(cljs.core.truth_(pred.call(null,f__188945)))
{return cljs.core.cons.call(null,f__188945,filter.call(null,pred,r__188946));
} else
{return filter.call(null,pred,r__188946);
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
var walk__188948 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__188948.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__188947_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__188947_SHARP_));
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
var partition__188955 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__188956 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____188949 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____188949))
{var s__188950 = temp__3698__auto____188949;

var p__188951 = cljs.core.take.call(null,n,s__188950);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__188951))))
{return cljs.core.cons.call(null,p__188951,partition.call(null,n,step,cljs.core.drop.call(null,step,s__188950)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__188957 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____188952 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____188952))
{var s__188953 = temp__3698__auto____188952;

var p__188954 = cljs.core.take.call(null,n,s__188953);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__188954))))
{return cljs.core.cons.call(null,p__188954,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__188953)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__188954,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__188955.call(this,n,step);
case  3 :
return partition__188956.call(this,n,step,pad);
case  4 :
return partition__188957.call(this,n,step,pad,coll);
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
var get_in__188963 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__188964 = (function (m,ks,not_found){
var sentinel__188959 = cljs.core.lookup_sentinel;
var m__188960 = m;
var ks__188961 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__188961))
{var m__188962 = cljs.core.get.call(null,m__188960,cljs.core.first.call(null,ks__188961),sentinel__188959);

if(cljs.core.truth_((sentinel__188959 === m__188962)))
{return not_found;
} else
{{
var G__188966 = sentinel__188959;
var G__188967 = m__188962;
var G__188968 = cljs.core.next.call(null,ks__188961);
sentinel__188959 = G__188966;
m__188960 = G__188967;
ks__188961 = G__188968;
continue;
}
}
} else
{return m__188960;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__188963.call(this,m,ks);
case  3 :
return get_in__188964.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__188969,v){
var vec__188970__188971 = p__188969;
var k__188972 = cljs.core.nth.call(null,vec__188970__188971,0,null);
var ks__188973 = cljs.core.nthnext.call(null,vec__188970__188971,1);

if(cljs.core.truth_(ks__188973))
{return cljs.core.assoc.call(null,m,k__188972,assoc_in.call(null,cljs.core.get.call(null,m,k__188972),ks__188973,v));
} else
{return cljs.core.assoc.call(null,m,k__188972,v);
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
var update_in__delegate = function (m,p__188974,f,args){
var vec__188975__188976 = p__188974;
var k__188977 = cljs.core.nth.call(null,vec__188975__188976,0,null);
var ks__188978 = cljs.core.nthnext.call(null,vec__188975__188976,1);

if(cljs.core.truth_(ks__188978))
{return cljs.core.assoc.call(null,m,k__188977,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__188977),ks__188978,f,args));
} else
{return cljs.core.assoc.call(null,m,k__188977,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__188977),args));
}
};
var update_in = function (m,p__188974,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__188974, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__188979){
var m = cljs.core.first(arglist__188979);
var p__188974 = cljs.core.first(cljs.core.next(arglist__188979));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__188979)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__188979)));
return update_in__delegate.call(this, m, p__188974, f, args);
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
var this__188980 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__189013 = null;
var G__189013__189014 = (function (coll,k){
var this__188981 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__189013__189015 = (function (coll,k,not_found){
var this__188982 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__189013 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__189013__189014.call(this,coll,k);
case  3 :
return G__189013__189015.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189013;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__188983 = this;
var new_array__188984 = cljs.core.aclone.call(null,this__188983.array);

(new_array__188984[k] = v);
return (new cljs.core.Vector(this__188983.meta,new_array__188984));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__189017 = null;
var G__189017__189018 = (function (tsym188985,k){
var this__188987 = this;
var tsym188985__188988 = this;

var coll__188989 = tsym188985__188988;

return cljs.core._lookup.call(null,coll__188989,k);
});
var G__189017__189019 = (function (tsym188986,k,not_found){
var this__188990 = this;
var tsym188986__188991 = this;

var coll__188992 = tsym188986__188991;

return cljs.core._lookup.call(null,coll__188992,k,not_found);
});
G__189017 = function(tsym188986,k,not_found){
switch(arguments.length){
case  2 :
return G__189017__189018.call(this,tsym188986,k);
case  3 :
return G__189017__189019.call(this,tsym188986,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189017;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__188993 = this;
var new_array__188994 = cljs.core.aclone.call(null,this__188993.array);

new_array__188994.push(o);
return (new cljs.core.Vector(this__188993.meta,new_array__188994));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__189021 = null;
var G__189021__189022 = (function (v,f){
var this__188995 = this;
return cljs.core.ci_reduce.call(null,this__188995.array,f);
});
var G__189021__189023 = (function (v,f,start){
var this__188996 = this;
return cljs.core.ci_reduce.call(null,this__188996.array,f,start);
});
G__189021 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__189021__189022.call(this,v,f);
case  3 :
return G__189021__189023.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189021;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__188997 = this;
if(cljs.core.truth_((this__188997.array.length > 0)))
{var vector_seq__188998 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__188997.array.length)))
{return cljs.core.cons.call(null,(this__188997.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__188998.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__188999 = this;
return this__188999.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__189000 = this;
var count__189001 = this__189000.array.length;

if(cljs.core.truth_((count__189001 > 0)))
{return (this__189000.array[(count__189001 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__189002 = this;
if(cljs.core.truth_((this__189002.array.length > 0)))
{var new_array__189003 = cljs.core.aclone.call(null,this__189002.array);

new_array__189003.pop();
return (new cljs.core.Vector(this__189002.meta,new_array__189003));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__189004 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__189005 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__189006 = this;
return (new cljs.core.Vector(meta,this__189006.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__189007 = this;
return this__189007.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__189025 = null;
var G__189025__189026 = (function (coll,n){
var this__189008 = this;
if(cljs.core.truth_((function (){var and__3546__auto____189009 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____189009))
{return (n < this__189008.array.length);
} else
{return and__3546__auto____189009;
}
})()))
{return (this__189008.array[n]);
} else
{return null;
}
});
var G__189025__189027 = (function (coll,n,not_found){
var this__189010 = this;
if(cljs.core.truth_((function (){var and__3546__auto____189011 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____189011))
{return (n < this__189010.array.length);
} else
{return and__3546__auto____189011;
}
})()))
{return (this__189010.array[n]);
} else
{return not_found;
}
});
G__189025 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__189025__189026.call(this,coll,n);
case  3 :
return G__189025__189027.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189025;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__189012 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__189012.meta);
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
vector.cljs$lang$applyTo = (function (arglist__189029){
var args = cljs.core.seq( arglist__189029 );;
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
var this__189030 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__189058 = null;
var G__189058__189059 = (function (coll,k){
var this__189031 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__189058__189060 = (function (coll,k,not_found){
var this__189032 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__189058 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__189058__189059.call(this,coll,k);
case  3 :
return G__189058__189060.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189058;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__189033 = this;
var v_pos__189034 = (this__189033.start + key);

return (new cljs.core.Subvec(this__189033.meta,cljs.core._assoc.call(null,this__189033.v,v_pos__189034,val),this__189033.start,((this__189033.end > (v_pos__189034 + 1)) ? this__189033.end : (v_pos__189034 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__189062 = null;
var G__189062__189063 = (function (tsym189035,k){
var this__189037 = this;
var tsym189035__189038 = this;

var coll__189039 = tsym189035__189038;

return cljs.core._lookup.call(null,coll__189039,k);
});
var G__189062__189064 = (function (tsym189036,k,not_found){
var this__189040 = this;
var tsym189036__189041 = this;

var coll__189042 = tsym189036__189041;

return cljs.core._lookup.call(null,coll__189042,k,not_found);
});
G__189062 = function(tsym189036,k,not_found){
switch(arguments.length){
case  2 :
return G__189062__189063.call(this,tsym189036,k);
case  3 :
return G__189062__189064.call(this,tsym189036,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189062;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__189043 = this;
return (new cljs.core.Subvec(this__189043.meta,cljs.core._assoc_n.call(null,this__189043.v,this__189043.end,o),this__189043.start,(this__189043.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__189066 = null;
var G__189066__189067 = (function (coll,f){
var this__189044 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__189066__189068 = (function (coll,f,start){
var this__189045 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__189066 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__189066__189067.call(this,coll,f);
case  3 :
return G__189066__189068.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189066;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__189046 = this;
var subvec_seq__189047 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__189046.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__189046.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__189047.call(null,this__189046.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__189048 = this;
return (this__189048.end - this__189048.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__189049 = this;
return cljs.core._nth.call(null,this__189049.v,(this__189049.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__189050 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__189050.start,this__189050.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__189050.meta,this__189050.v,this__189050.start,(this__189050.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__189051 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__189052 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__189053 = this;
return (new cljs.core.Subvec(meta,this__189053.v,this__189053.start,this__189053.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__189054 = this;
return this__189054.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__189070 = null;
var G__189070__189071 = (function (coll,n){
var this__189055 = this;
return cljs.core._nth.call(null,this__189055.v,(this__189055.start + n));
});
var G__189070__189072 = (function (coll,n,not_found){
var this__189056 = this;
return cljs.core._nth.call(null,this__189056.v,(this__189056.start + n),not_found);
});
G__189070 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__189070__189071.call(this,coll,n);
case  3 :
return G__189070__189072.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189070;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__189057 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__189057.meta);
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
var subvec__189074 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__189075 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__189074.call(this,v,start);
case  3 :
return subvec__189075.call(this,v,start,end);
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
var this__189077 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__189078 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__189079 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__189080 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__189080.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__189081 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__189082 = this;
return cljs.core._first.call(null,this__189082.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__189083 = this;
var temp__3695__auto____189084 = cljs.core.next.call(null,this__189083.front);

if(cljs.core.truth_(temp__3695__auto____189084))
{var f1__189085 = temp__3695__auto____189084;

return (new cljs.core.PersistentQueueSeq(this__189083.meta,f1__189085,this__189083.rear));
} else
{if(cljs.core.truth_((this__189083.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__189083.meta,this__189083.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__189086 = this;
return this__189086.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__189087 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__189087.front,this__189087.rear));
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
var this__189088 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__189089 = this;
if(cljs.core.truth_(this__189089.front))
{return (new cljs.core.PersistentQueue(this__189089.meta,(this__189089.count + 1),this__189089.front,cljs.core.conj.call(null,(function (){var or__3548__auto____189090 = this__189089.rear;

if(cljs.core.truth_(or__3548__auto____189090))
{return or__3548__auto____189090;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__189089.meta,(this__189089.count + 1),cljs.core.conj.call(null,this__189089.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__189091 = this;
var rear__189092 = cljs.core.seq.call(null,this__189091.rear);

if(cljs.core.truth_((function (){var or__3548__auto____189093 = this__189091.front;

if(cljs.core.truth_(or__3548__auto____189093))
{return or__3548__auto____189093;
} else
{return rear__189092;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__189091.front,cljs.core.seq.call(null,rear__189092)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__189094 = this;
return this__189094.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__189095 = this;
return cljs.core._first.call(null,this__189095.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__189096 = this;
if(cljs.core.truth_(this__189096.front))
{var temp__3695__auto____189097 = cljs.core.next.call(null,this__189096.front);

if(cljs.core.truth_(temp__3695__auto____189097))
{var f1__189098 = temp__3695__auto____189097;

return (new cljs.core.PersistentQueue(this__189096.meta,(this__189096.count - 1),f1__189098,this__189096.rear));
} else
{return (new cljs.core.PersistentQueue(this__189096.meta,(this__189096.count - 1),cljs.core.seq.call(null,this__189096.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__189099 = this;
return cljs.core.first.call(null,this__189099.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__189100 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__189101 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__189102 = this;
return (new cljs.core.PersistentQueue(meta,this__189102.count,this__189102.front,this__189102.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__189103 = this;
return this__189103.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__189104 = this;
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
var this__189105 = this;
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
var len__189106 = array.length;

var i__189107 = 0;

while(true){
if(cljs.core.truth_((i__189107 < len__189106)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__189107]))))
{return i__189107;
} else
{{
var G__189108 = (i__189107 + incr);
i__189107 = G__189108;
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
var obj_map_contains_key_QMARK___189110 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___189111 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____189109 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____189109))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____189109;
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
return obj_map_contains_key_QMARK___189110.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___189111.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__189114 = cljs.core.hash.call(null,a);
var b__189115 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__189114 < b__189115)))
{return -1;
} else
{if(cljs.core.truth_((a__189114 > b__189115)))
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
var this__189116 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__189143 = null;
var G__189143__189144 = (function (coll,k){
var this__189117 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__189143__189145 = (function (coll,k,not_found){
var this__189118 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__189118.strobj,(this__189118.strobj[k]),not_found);
});
G__189143 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__189143__189144.call(this,coll,k);
case  3 :
return G__189143__189145.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189143;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__189119 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__189120 = goog.object.clone.call(null,this__189119.strobj);
var overwrite_QMARK___189121 = new_strobj__189120.hasOwnProperty(k);

(new_strobj__189120[k] = v);
if(cljs.core.truth_(overwrite_QMARK___189121))
{return (new cljs.core.ObjMap(this__189119.meta,this__189119.keys,new_strobj__189120));
} else
{var new_keys__189122 = cljs.core.aclone.call(null,this__189119.keys);

new_keys__189122.push(k);
return (new cljs.core.ObjMap(this__189119.meta,new_keys__189122,new_strobj__189120));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__189119.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__189123 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__189123.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__189147 = null;
var G__189147__189148 = (function (tsym189124,k){
var this__189126 = this;
var tsym189124__189127 = this;

var coll__189128 = tsym189124__189127;

return cljs.core._lookup.call(null,coll__189128,k);
});
var G__189147__189149 = (function (tsym189125,k,not_found){
var this__189129 = this;
var tsym189125__189130 = this;

var coll__189131 = tsym189125__189130;

return cljs.core._lookup.call(null,coll__189131,k,not_found);
});
G__189147 = function(tsym189125,k,not_found){
switch(arguments.length){
case  2 :
return G__189147__189148.call(this,tsym189125,k);
case  3 :
return G__189147__189149.call(this,tsym189125,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189147;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__189132 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__189133 = this;
if(cljs.core.truth_((this__189133.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__189113_SHARP_){
return cljs.core.vector.call(null,p1__189113_SHARP_,(this__189133.strobj[p1__189113_SHARP_]));
}),this__189133.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__189134 = this;
return this__189134.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__189135 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__189136 = this;
return (new cljs.core.ObjMap(meta,this__189136.keys,this__189136.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__189137 = this;
return this__189137.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__189138 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__189138.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__189139 = this;
if(cljs.core.truth_((function (){var and__3546__auto____189140 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____189140))
{return this__189139.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____189140;
}
})()))
{var new_keys__189141 = cljs.core.aclone.call(null,this__189139.keys);
var new_strobj__189142 = goog.object.clone.call(null,this__189139.strobj);

new_keys__189141.splice(cljs.core.scan_array.call(null,1,k,new_keys__189141),1);
cljs.core.js_delete.call(null,new_strobj__189142,k);
return (new cljs.core.ObjMap(this__189139.meta,new_keys__189141,new_strobj__189142));
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
var this__189152 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__189190 = null;
var G__189190__189191 = (function (coll,k){
var this__189153 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__189190__189192 = (function (coll,k,not_found){
var this__189154 = this;
var bucket__189155 = (this__189154.hashobj[cljs.core.hash.call(null,k)]);
var i__189156 = (cljs.core.truth_(bucket__189155)?cljs.core.scan_array.call(null,2,k,bucket__189155):null);

if(cljs.core.truth_(i__189156))
{return (bucket__189155[(i__189156 + 1)]);
} else
{return not_found;
}
});
G__189190 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__189190__189191.call(this,coll,k);
case  3 :
return G__189190__189192.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189190;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__189157 = this;
var h__189158 = cljs.core.hash.call(null,k);
var bucket__189159 = (this__189157.hashobj[h__189158]);

if(cljs.core.truth_(bucket__189159))
{var new_bucket__189160 = cljs.core.aclone.call(null,bucket__189159);
var new_hashobj__189161 = goog.object.clone.call(null,this__189157.hashobj);

(new_hashobj__189161[h__189158] = new_bucket__189160);
var temp__3695__auto____189162 = cljs.core.scan_array.call(null,2,k,new_bucket__189160);

if(cljs.core.truth_(temp__3695__auto____189162))
{var i__189163 = temp__3695__auto____189162;

(new_bucket__189160[(i__189163 + 1)] = v);
return (new cljs.core.HashMap(this__189157.meta,this__189157.count,new_hashobj__189161));
} else
{new_bucket__189160.push(k,v);
return (new cljs.core.HashMap(this__189157.meta,(this__189157.count + 1),new_hashobj__189161));
}
} else
{var new_hashobj__189164 = goog.object.clone.call(null,this__189157.hashobj);

(new_hashobj__189164[h__189158] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__189157.meta,(this__189157.count + 1),new_hashobj__189164));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__189165 = this;
var bucket__189166 = (this__189165.hashobj[cljs.core.hash.call(null,k)]);
var i__189167 = (cljs.core.truth_(bucket__189166)?cljs.core.scan_array.call(null,2,k,bucket__189166):null);

if(cljs.core.truth_(i__189167))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__189194 = null;
var G__189194__189195 = (function (tsym189168,k){
var this__189170 = this;
var tsym189168__189171 = this;

var coll__189172 = tsym189168__189171;

return cljs.core._lookup.call(null,coll__189172,k);
});
var G__189194__189196 = (function (tsym189169,k,not_found){
var this__189173 = this;
var tsym189169__189174 = this;

var coll__189175 = tsym189169__189174;

return cljs.core._lookup.call(null,coll__189175,k,not_found);
});
G__189194 = function(tsym189169,k,not_found){
switch(arguments.length){
case  2 :
return G__189194__189195.call(this,tsym189169,k);
case  3 :
return G__189194__189196.call(this,tsym189169,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189194;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__189176 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__189177 = this;
if(cljs.core.truth_((this__189177.count > 0)))
{var hashes__189178 = cljs.core.js_keys.call(null,this__189177.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__189151_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__189177.hashobj[p1__189151_SHARP_])));
}),hashes__189178);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__189179 = this;
return this__189179.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__189180 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__189181 = this;
return (new cljs.core.HashMap(meta,this__189181.count,this__189181.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__189182 = this;
return this__189182.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__189183 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__189183.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__189184 = this;
var h__189185 = cljs.core.hash.call(null,k);
var bucket__189186 = (this__189184.hashobj[h__189185]);
var i__189187 = (cljs.core.truth_(bucket__189186)?cljs.core.scan_array.call(null,2,k,bucket__189186):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__189187)))
{return coll;
} else
{var new_hashobj__189188 = goog.object.clone.call(null,this__189184.hashobj);

if(cljs.core.truth_((3 > bucket__189186.length)))
{cljs.core.js_delete.call(null,new_hashobj__189188,h__189185);
} else
{var new_bucket__189189 = cljs.core.aclone.call(null,bucket__189186);

new_bucket__189189.splice(i__189187,2);
(new_hashobj__189188[h__189185] = new_bucket__189189);
}
return (new cljs.core.HashMap(this__189184.meta,(this__189184.count - 1),new_hashobj__189188));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__189198 = ks.length;

var i__189199 = 0;
var out__189200 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__189199 < len__189198)))
{{
var G__189201 = (i__189199 + 1);
var G__189202 = cljs.core.assoc.call(null,out__189200,(ks[i__189199]),(vs[i__189199]));
i__189199 = G__189201;
out__189200 = G__189202;
continue;
}
} else
{return out__189200;
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
var in$__189203 = cljs.core.seq.call(null,keyvals);
var out__189204 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__189203))
{{
var G__189205 = cljs.core.nnext.call(null,in$__189203);
var G__189206 = cljs.core.assoc.call(null,out__189204,cljs.core.first.call(null,in$__189203),cljs.core.second.call(null,in$__189203));
in$__189203 = G__189205;
out__189204 = G__189206;
continue;
}
} else
{return out__189204;
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
hash_map.cljs$lang$applyTo = (function (arglist__189207){
var keyvals = cljs.core.seq( arglist__189207 );;
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
{return cljs.core.reduce.call(null,(function (p1__189208_SHARP_,p2__189209_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____189210 = p1__189208_SHARP_;

if(cljs.core.truth_(or__3548__auto____189210))
{return or__3548__auto____189210;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__189209_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__189211){
var maps = cljs.core.seq( arglist__189211 );;
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
{var merge_entry__189214 = (function (m,e){
var k__189212 = cljs.core.first.call(null,e);
var v__189213 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__189212)))
{return cljs.core.assoc.call(null,m,k__189212,f.call(null,cljs.core.get.call(null,m,k__189212),v__189213));
} else
{return cljs.core.assoc.call(null,m,k__189212,v__189213);
}
});
var merge2__189216 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__189214,(function (){var or__3548__auto____189215 = m1;

if(cljs.core.truth_(or__3548__auto____189215))
{return or__3548__auto____189215;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__189216,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__189217){
var f = cljs.core.first(arglist__189217);
var maps = cljs.core.rest(arglist__189217);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__189219 = cljs.core.ObjMap.fromObject([],{});
var keys__189220 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__189220))
{var key__189221 = cljs.core.first.call(null,keys__189220);
var entry__189222 = cljs.core.get.call(null,map,key__189221,"\uFDD0'user/not-found");

{
var G__189223 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__189222,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__189219,key__189221,entry__189222):ret__189219);
var G__189224 = cljs.core.next.call(null,keys__189220);
ret__189219 = G__189223;
keys__189220 = G__189224;
continue;
}
} else
{return ret__189219;
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
var this__189225 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__189246 = null;
var G__189246__189247 = (function (coll,v){
var this__189226 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__189246__189248 = (function (coll,v,not_found){
var this__189227 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__189227.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__189246 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__189246__189247.call(this,coll,v);
case  3 :
return G__189246__189248.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189246;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__189250 = null;
var G__189250__189251 = (function (tsym189228,k){
var this__189230 = this;
var tsym189228__189231 = this;

var coll__189232 = tsym189228__189231;

return cljs.core._lookup.call(null,coll__189232,k);
});
var G__189250__189252 = (function (tsym189229,k,not_found){
var this__189233 = this;
var tsym189229__189234 = this;

var coll__189235 = tsym189229__189234;

return cljs.core._lookup.call(null,coll__189235,k,not_found);
});
G__189250 = function(tsym189229,k,not_found){
switch(arguments.length){
case  2 :
return G__189250__189251.call(this,tsym189229,k);
case  3 :
return G__189250__189252.call(this,tsym189229,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189250;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__189236 = this;
return (new cljs.core.Set(this__189236.meta,cljs.core.assoc.call(null,this__189236.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__189237 = this;
return cljs.core.keys.call(null,this__189237.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__189238 = this;
return (new cljs.core.Set(this__189238.meta,cljs.core.dissoc.call(null,this__189238.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__189239 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__189240 = this;
var and__3546__auto____189241 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____189241))
{var and__3546__auto____189242 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____189242))
{return cljs.core.every_QMARK_.call(null,(function (p1__189218_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__189218_SHARP_);
}),other);
} else
{return and__3546__auto____189242;
}
} else
{return and__3546__auto____189241;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__189243 = this;
return (new cljs.core.Set(meta,this__189243.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__189244 = this;
return this__189244.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__189245 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__189245.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__189255 = cljs.core.seq.call(null,coll);
var out__189256 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__189255))))
{{
var G__189257 = cljs.core.rest.call(null,in$__189255);
var G__189258 = cljs.core.conj.call(null,out__189256,cljs.core.first.call(null,in$__189255));
in$__189255 = G__189257;
out__189256 = G__189258;
continue;
}
} else
{return out__189256;
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
{var n__189259 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____189260 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____189260))
{var e__189261 = temp__3695__auto____189260;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__189261));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__189259,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__189254_SHARP_){
var temp__3695__auto____189262 = cljs.core.find.call(null,smap,p1__189254_SHARP_);

if(cljs.core.truth_(temp__3695__auto____189262))
{var e__189263 = temp__3695__auto____189262;

return cljs.core.second.call(null,e__189263);
} else
{return p1__189254_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__189271 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__189264,seen){
while(true){
var vec__189265__189266 = p__189264;
var f__189267 = cljs.core.nth.call(null,vec__189265__189266,0,null);
var xs__189268 = vec__189265__189266;

var temp__3698__auto____189269 = cljs.core.seq.call(null,xs__189268);

if(cljs.core.truth_(temp__3698__auto____189269))
{var s__189270 = temp__3698__auto____189269;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__189267)))
{{
var G__189272 = cljs.core.rest.call(null,s__189270);
var G__189273 = seen;
p__189264 = G__189272;
seen = G__189273;
continue;
}
} else
{return cljs.core.cons.call(null,f__189267,step.call(null,cljs.core.rest.call(null,s__189270),cljs.core.conj.call(null,seen,f__189267)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__189271.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__189274 = cljs.core.Vector.fromArray([]);
var s__189275 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__189275)))
{{
var G__189276 = cljs.core.conj.call(null,ret__189274,cljs.core.first.call(null,s__189275));
var G__189277 = cljs.core.next.call(null,s__189275);
ret__189274 = G__189276;
s__189275 = G__189277;
continue;
}
} else
{return cljs.core.seq.call(null,ret__189274);
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
{if(cljs.core.truth_((function (){var or__3548__auto____189278 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____189278))
{return or__3548__auto____189278;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__189279 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__189279 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__189279 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____189280 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____189280))
{return or__3548__auto____189280;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__189281 = x.lastIndexOf("\/");

if(cljs.core.truth_((i__189281 > -1)))
{return cljs.core.subs.call(null,x,2,i__189281);
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
var map__189284 = cljs.core.ObjMap.fromObject([],{});
var ks__189285 = cljs.core.seq.call(null,keys);
var vs__189286 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____189287 = ks__189285;

if(cljs.core.truth_(and__3546__auto____189287))
{return vs__189286;
} else
{return and__3546__auto____189287;
}
})()))
{{
var G__189288 = cljs.core.assoc.call(null,map__189284,cljs.core.first.call(null,ks__189285),cljs.core.first.call(null,vs__189286));
var G__189289 = cljs.core.next.call(null,ks__189285);
var G__189290 = cljs.core.next.call(null,vs__189286);
map__189284 = G__189288;
ks__189285 = G__189289;
vs__189286 = G__189290;
continue;
}
} else
{return map__189284;
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
var max_key__189293 = (function (k,x){
return x;
});
var max_key__189294 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__189295 = (function() { 
var G__189297__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__189282_SHARP_,p2__189283_SHARP_){
return max_key.call(null,k,p1__189282_SHARP_,p2__189283_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__189297 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__189297__delegate.call(this, k, x, y, more);
};
G__189297.cljs$lang$maxFixedArity = 3;
G__189297.cljs$lang$applyTo = (function (arglist__189298){
var k = cljs.core.first(arglist__189298);
var x = cljs.core.first(cljs.core.next(arglist__189298));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__189298)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__189298)));
return G__189297__delegate.call(this, k, x, y, more);
});
return G__189297;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__189293.call(this,k,x);
case  3 :
return max_key__189294.call(this,k,x,y);
default:
return max_key__189295.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__189295.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__189299 = (function (k,x){
return x;
});
var min_key__189300 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__189301 = (function() { 
var G__189303__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__189291_SHARP_,p2__189292_SHARP_){
return min_key.call(null,k,p1__189291_SHARP_,p2__189292_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__189303 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__189303__delegate.call(this, k, x, y, more);
};
G__189303.cljs$lang$maxFixedArity = 3;
G__189303.cljs$lang$applyTo = (function (arglist__189304){
var k = cljs.core.first(arglist__189304);
var x = cljs.core.first(cljs.core.next(arglist__189304));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__189304)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__189304)));
return G__189303__delegate.call(this, k, x, y, more);
});
return G__189303;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__189299.call(this,k,x);
case  3 :
return min_key__189300.call(this,k,x,y);
default:
return min_key__189301.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__189301.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__189307 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__189308 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____189305 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____189305))
{var s__189306 = temp__3698__auto____189305;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__189306),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__189306)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__189307.call(this,n,step);
case  3 :
return partition_all__189308.call(this,n,step,coll);
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
var temp__3698__auto____189310 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____189310))
{var s__189311 = temp__3698__auto____189310;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__189311))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__189311),take_while.call(null,pred,cljs.core.rest.call(null,s__189311)));
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
var this__189312 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__189313 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__189329 = null;
var G__189329__189330 = (function (rng,f){
var this__189314 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__189329__189331 = (function (rng,f,s){
var this__189315 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__189329 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__189329__189330.call(this,rng,f);
case  3 :
return G__189329__189331.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189329;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__189316 = this;
var comp__189317 = (cljs.core.truth_((this__189316.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__189317.call(null,this__189316.start,this__189316.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__189318 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__189318.end - this__189318.start) / this__189318.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__189319 = this;
return this__189319.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__189320 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__189320.meta,(this__189320.start + this__189320.step),this__189320.end,this__189320.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__189321 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__189322 = this;
return (new cljs.core.Range(meta,this__189322.start,this__189322.end,this__189322.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__189323 = this;
return this__189323.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__189333 = null;
var G__189333__189334 = (function (rng,n){
var this__189324 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__189324.start + (n * this__189324.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____189325 = (this__189324.start > this__189324.end);

if(cljs.core.truth_(and__3546__auto____189325))
{return cljs.core._EQ_.call(null,this__189324.step,0);
} else
{return and__3546__auto____189325;
}
})()))
{return this__189324.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__189333__189335 = (function (rng,n,not_found){
var this__189326 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__189326.start + (n * this__189326.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____189327 = (this__189326.start > this__189326.end);

if(cljs.core.truth_(and__3546__auto____189327))
{return cljs.core._EQ_.call(null,this__189326.step,0);
} else
{return and__3546__auto____189327;
}
})()))
{return this__189326.start;
} else
{return not_found;
}
}
});
G__189333 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__189333__189334.call(this,rng,n);
case  3 :
return G__189333__189335.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__189333;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__189328 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__189328.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__189337 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__189338 = (function (end){
return range.call(null,0,end,1);
});
var range__189339 = (function (start,end){
return range.call(null,start,end,1);
});
var range__189340 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__189337.call(this);
case  1 :
return range__189338.call(this,start);
case  2 :
return range__189339.call(this,start,end);
case  3 :
return range__189340.call(this,start,end,step);
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
var temp__3698__auto____189342 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____189342))
{var s__189343 = temp__3698__auto____189342;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__189343),take_nth.call(null,n,cljs.core.drop.call(null,n,s__189343)));
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
var temp__3698__auto____189345 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____189345))
{var s__189346 = temp__3698__auto____189345;

var fst__189347 = cljs.core.first.call(null,s__189346);
var fv__189348 = f.call(null,fst__189347);
var run__189349 = cljs.core.cons.call(null,fst__189347,cljs.core.take_while.call(null,(function (p1__189344_SHARP_){
return cljs.core._EQ_.call(null,fv__189348,f.call(null,p1__189344_SHARP_));
}),cljs.core.next.call(null,s__189346)));

return cljs.core.cons.call(null,run__189349,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__189349),s__189346))));
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
var reductions__189364 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____189360 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____189360))
{var s__189361 = temp__3695__auto____189360;

return reductions.call(null,f,cljs.core.first.call(null,s__189361),cljs.core.rest.call(null,s__189361));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__189365 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____189362 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____189362))
{var s__189363 = temp__3698__auto____189362;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__189363)),cljs.core.rest.call(null,s__189363));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__189364.call(this,f,init);
case  3 :
return reductions__189365.call(this,f,init,coll);
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
var juxt__189368 = (function (f){
return (function() {
var G__189373 = null;
var G__189373__189374 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__189373__189375 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__189373__189376 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__189373__189377 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__189373__189378 = (function() { 
var G__189380__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__189380 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__189380__delegate.call(this, x, y, z, args);
};
G__189380.cljs$lang$maxFixedArity = 3;
G__189380.cljs$lang$applyTo = (function (arglist__189381){
var x = cljs.core.first(arglist__189381);
var y = cljs.core.first(cljs.core.next(arglist__189381));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__189381)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__189381)));
return G__189380__delegate.call(this, x, y, z, args);
});
return G__189380;
})()
;
G__189373 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__189373__189374.call(this);
case  1 :
return G__189373__189375.call(this,x);
case  2 :
return G__189373__189376.call(this,x,y);
case  3 :
return G__189373__189377.call(this,x,y,z);
default:
return G__189373__189378.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__189373.cljs$lang$maxFixedArity = 3;
G__189373.cljs$lang$applyTo = G__189373__189378.cljs$lang$applyTo;
return G__189373;
})()
});
var juxt__189369 = (function (f,g){
return (function() {
var G__189382 = null;
var G__189382__189383 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__189382__189384 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__189382__189385 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__189382__189386 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__189382__189387 = (function() { 
var G__189389__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__189389 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__189389__delegate.call(this, x, y, z, args);
};
G__189389.cljs$lang$maxFixedArity = 3;
G__189389.cljs$lang$applyTo = (function (arglist__189390){
var x = cljs.core.first(arglist__189390);
var y = cljs.core.first(cljs.core.next(arglist__189390));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__189390)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__189390)));
return G__189389__delegate.call(this, x, y, z, args);
});
return G__189389;
})()
;
G__189382 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__189382__189383.call(this);
case  1 :
return G__189382__189384.call(this,x);
case  2 :
return G__189382__189385.call(this,x,y);
case  3 :
return G__189382__189386.call(this,x,y,z);
default:
return G__189382__189387.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__189382.cljs$lang$maxFixedArity = 3;
G__189382.cljs$lang$applyTo = G__189382__189387.cljs$lang$applyTo;
return G__189382;
})()
});
var juxt__189370 = (function (f,g,h){
return (function() {
var G__189391 = null;
var G__189391__189392 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__189391__189393 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__189391__189394 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__189391__189395 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__189391__189396 = (function() { 
var G__189398__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__189398 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__189398__delegate.call(this, x, y, z, args);
};
G__189398.cljs$lang$maxFixedArity = 3;
G__189398.cljs$lang$applyTo = (function (arglist__189399){
var x = cljs.core.first(arglist__189399);
var y = cljs.core.first(cljs.core.next(arglist__189399));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__189399)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__189399)));
return G__189398__delegate.call(this, x, y, z, args);
});
return G__189398;
})()
;
G__189391 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__189391__189392.call(this);
case  1 :
return G__189391__189393.call(this,x);
case  2 :
return G__189391__189394.call(this,x,y);
case  3 :
return G__189391__189395.call(this,x,y,z);
default:
return G__189391__189396.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__189391.cljs$lang$maxFixedArity = 3;
G__189391.cljs$lang$applyTo = G__189391__189396.cljs$lang$applyTo;
return G__189391;
})()
});
var juxt__189371 = (function() { 
var G__189400__delegate = function (f,g,h,fs){
var fs__189367 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__189401 = null;
var G__189401__189402 = (function (){
return cljs.core.reduce.call(null,(function (p1__189350_SHARP_,p2__189351_SHARP_){
return cljs.core.conj.call(null,p1__189350_SHARP_,p2__189351_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__189367);
});
var G__189401__189403 = (function (x){
return cljs.core.reduce.call(null,(function (p1__189352_SHARP_,p2__189353_SHARP_){
return cljs.core.conj.call(null,p1__189352_SHARP_,p2__189353_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__189367);
});
var G__189401__189404 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__189354_SHARP_,p2__189355_SHARP_){
return cljs.core.conj.call(null,p1__189354_SHARP_,p2__189355_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__189367);
});
var G__189401__189405 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__189356_SHARP_,p2__189357_SHARP_){
return cljs.core.conj.call(null,p1__189356_SHARP_,p2__189357_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__189367);
});
var G__189401__189406 = (function() { 
var G__189408__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__189358_SHARP_,p2__189359_SHARP_){
return cljs.core.conj.call(null,p1__189358_SHARP_,cljs.core.apply.call(null,p2__189359_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__189367);
};
var G__189408 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__189408__delegate.call(this, x, y, z, args);
};
G__189408.cljs$lang$maxFixedArity = 3;
G__189408.cljs$lang$applyTo = (function (arglist__189409){
var x = cljs.core.first(arglist__189409);
var y = cljs.core.first(cljs.core.next(arglist__189409));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__189409)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__189409)));
return G__189408__delegate.call(this, x, y, z, args);
});
return G__189408;
})()
;
G__189401 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__189401__189402.call(this);
case  1 :
return G__189401__189403.call(this,x);
case  2 :
return G__189401__189404.call(this,x,y);
case  3 :
return G__189401__189405.call(this,x,y,z);
default:
return G__189401__189406.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__189401.cljs$lang$maxFixedArity = 3;
G__189401.cljs$lang$applyTo = G__189401__189406.cljs$lang$applyTo;
return G__189401;
})()
};
var G__189400 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__189400__delegate.call(this, f, g, h, fs);
};
G__189400.cljs$lang$maxFixedArity = 3;
G__189400.cljs$lang$applyTo = (function (arglist__189410){
var f = cljs.core.first(arglist__189410);
var g = cljs.core.first(cljs.core.next(arglist__189410));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__189410)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__189410)));
return G__189400__delegate.call(this, f, g, h, fs);
});
return G__189400;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__189368.call(this,f);
case  2 :
return juxt__189369.call(this,f,g);
case  3 :
return juxt__189370.call(this,f,g,h);
default:
return juxt__189371.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__189371.cljs$lang$applyTo;
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
var dorun__189412 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__189415 = cljs.core.next.call(null,coll);
coll = G__189415;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__189413 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____189411 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____189411))
{return (n > 0);
} else
{return and__3546__auto____189411;
}
})()))
{{
var G__189416 = (n - 1);
var G__189417 = cljs.core.next.call(null,coll);
n = G__189416;
coll = G__189417;
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
return dorun__189412.call(this,n);
case  2 :
return dorun__189413.call(this,n,coll);
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
var doall__189418 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__189419 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__189418.call(this,n);
case  2 :
return doall__189419.call(this,n,coll);
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
var matches__189421 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__189421),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__189421),1)))
{return cljs.core.first.call(null,matches__189421);
} else
{return cljs.core.vec.call(null,matches__189421);
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
var matches__189422 = re.exec(s);

if(cljs.core.truth_((matches__189422 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__189422),1)))
{return cljs.core.first.call(null,matches__189422);
} else
{return cljs.core.vec.call(null,matches__189422);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__189423 = cljs.core.re_find.call(null,re,s);
var match_idx__189424 = s.search(re);
var match_str__189425 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__189423))?cljs.core.first.call(null,match_data__189423):match_data__189423);
var post_match__189426 = cljs.core.subs.call(null,s,(match_idx__189424 + cljs.core.count.call(null,match_str__189425)));

if(cljs.core.truth_(match_data__189423))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__189423,re_seq.call(null,re,post_match__189426));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__189428__189429 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___189430 = cljs.core.nth.call(null,vec__189428__189429,0,null);
var flags__189431 = cljs.core.nth.call(null,vec__189428__189429,1,null);
var pattern__189432 = cljs.core.nth.call(null,vec__189428__189429,2,null);

return (new RegExp(pattern__189432,flags__189431));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__189427_SHARP_){
return print_one.call(null,p1__189427_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____189433 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____189433))
{var and__3546__auto____189437 = (function (){var x__450__auto____189434 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____189435 = x__450__auto____189434;

if(cljs.core.truth_(and__3546__auto____189435))
{var and__3546__auto____189436 = x__450__auto____189434.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____189436))
{return cljs.core.not.call(null,x__450__auto____189434.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____189436;
}
} else
{return and__3546__auto____189435;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__450__auto____189434);
}
})();

if(cljs.core.truth_(and__3546__auto____189437))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____189437;
}
} else
{return and__3546__auto____189433;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__450__auto____189438 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____189439 = x__450__auto____189438;

if(cljs.core.truth_(and__3546__auto____189439))
{var and__3546__auto____189440 = x__450__auto____189438.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____189440))
{return cljs.core.not.call(null,x__450__auto____189438.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____189440;
}
} else
{return and__3546__auto____189439;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__450__auto____189438);
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
var first_obj__189441 = cljs.core.first.call(null,objs);
var sb__189442 = (new goog.string.StringBuffer());

var G__189443__189444 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__189443__189444))
{var obj__189445 = cljs.core.first.call(null,G__189443__189444);
var G__189443__189446 = G__189443__189444;

while(true){
if(cljs.core.truth_((obj__189445 === first_obj__189441)))
{} else
{sb__189442.append(" ");
}
var G__189447__189448 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__189445,opts));

if(cljs.core.truth_(G__189447__189448))
{var string__189449 = cljs.core.first.call(null,G__189447__189448);
var G__189447__189450 = G__189447__189448;

while(true){
sb__189442.append(string__189449);
var temp__3698__auto____189451 = cljs.core.next.call(null,G__189447__189450);

if(cljs.core.truth_(temp__3698__auto____189451))
{var G__189447__189452 = temp__3698__auto____189451;

{
var G__189455 = cljs.core.first.call(null,G__189447__189452);
var G__189456 = G__189447__189452;
string__189449 = G__189455;
G__189447__189450 = G__189456;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____189453 = cljs.core.next.call(null,G__189443__189446);

if(cljs.core.truth_(temp__3698__auto____189453))
{var G__189443__189454 = temp__3698__auto____189453;

{
var G__189457 = cljs.core.first.call(null,G__189443__189454);
var G__189458 = G__189443__189454;
obj__189445 = G__189457;
G__189443__189446 = G__189458;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__189442);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__189459 = cljs.core.first.call(null,objs);

var G__189460__189461 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__189460__189461))
{var obj__189462 = cljs.core.first.call(null,G__189460__189461);
var G__189460__189463 = G__189460__189461;

while(true){
if(cljs.core.truth_((obj__189462 === first_obj__189459)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__189464__189465 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__189462,opts));

if(cljs.core.truth_(G__189464__189465))
{var string__189466 = cljs.core.first.call(null,G__189464__189465);
var G__189464__189467 = G__189464__189465;

while(true){
cljs.core.string_print.call(null,string__189466);
var temp__3698__auto____189468 = cljs.core.next.call(null,G__189464__189467);

if(cljs.core.truth_(temp__3698__auto____189468))
{var G__189464__189469 = temp__3698__auto____189468;

{
var G__189472 = cljs.core.first.call(null,G__189464__189469);
var G__189473 = G__189464__189469;
string__189466 = G__189472;
G__189464__189467 = G__189473;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____189470 = cljs.core.next.call(null,G__189460__189463);

if(cljs.core.truth_(temp__3698__auto____189470))
{var G__189460__189471 = temp__3698__auto____189470;

{
var G__189474 = cljs.core.first.call(null,G__189460__189471);
var G__189475 = G__189460__189471;
obj__189462 = G__189474;
G__189460__189463 = G__189475;
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
pr_str.cljs$lang$applyTo = (function (arglist__189476){
var objs = cljs.core.seq( arglist__189476 );;
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
pr.cljs$lang$applyTo = (function (arglist__189477){
var objs = cljs.core.seq( arglist__189477 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__189478){
var objs = cljs.core.seq( arglist__189478 );;
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
println.cljs$lang$applyTo = (function (arglist__189479){
var objs = cljs.core.seq( arglist__189479 );;
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
prn.cljs$lang$applyTo = (function (arglist__189480){
var objs = cljs.core.seq( arglist__189480 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__189481 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__189481,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____189482 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____189482))
{var nspc__189483 = temp__3698__auto____189482;

return cljs.core.str.call(null,nspc__189483,"\/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____189484 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____189484))
{var nspc__189485 = temp__3698__auto____189484;

return cljs.core.str.call(null,nspc__189485,"\/");
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
var pr_pair__189486 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__189486,"{",", ","}",opts,coll);
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
var this__189487 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__189488 = this;
var G__189489__189490 = cljs.core.seq.call(null,this__189488.watches);

if(cljs.core.truth_(G__189489__189490))
{var G__189492__189494 = cljs.core.first.call(null,G__189489__189490);
var vec__189493__189495 = G__189492__189494;
var key__189496 = cljs.core.nth.call(null,vec__189493__189495,0,null);
var f__189497 = cljs.core.nth.call(null,vec__189493__189495,1,null);
var G__189489__189498 = G__189489__189490;

var G__189492__189499 = G__189492__189494;
var G__189489__189500 = G__189489__189498;

while(true){
var vec__189501__189502 = G__189492__189499;
var key__189503 = cljs.core.nth.call(null,vec__189501__189502,0,null);
var f__189504 = cljs.core.nth.call(null,vec__189501__189502,1,null);
var G__189489__189505 = G__189489__189500;

f__189504.call(null,key__189503,this$,oldval,newval);
var temp__3698__auto____189506 = cljs.core.next.call(null,G__189489__189505);

if(cljs.core.truth_(temp__3698__auto____189506))
{var G__189489__189507 = temp__3698__auto____189506;

{
var G__189514 = cljs.core.first.call(null,G__189489__189507);
var G__189515 = G__189489__189507;
G__189492__189499 = G__189514;
G__189489__189500 = G__189515;
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
var this__189508 = this;
return this$.watches = cljs.core.assoc.call(null,this__189508.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__189509 = this;
return this$.watches = cljs.core.dissoc.call(null,this__189509.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__189510 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__189510.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__189511 = this;
return this__189511.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__189512 = this;
return this__189512.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__189513 = this;
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
var atom__189522 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__189523 = (function() { 
var G__189525__delegate = function (x,p__189516){
var map__189517__189518 = p__189516;
var map__189517__189519 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__189517__189518))?cljs.core.apply.call(null,cljs.core.hash_map,map__189517__189518):map__189517__189518);
var validator__189520 = cljs.core.get.call(null,map__189517__189519,"\uFDD0'validator");
var meta__189521 = cljs.core.get.call(null,map__189517__189519,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__189521,validator__189520,null));
};
var G__189525 = function (x,var_args){
var p__189516 = null;
if (goog.isDef(var_args)) {
  p__189516 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__189525__delegate.call(this, x, p__189516);
};
G__189525.cljs$lang$maxFixedArity = 1;
G__189525.cljs$lang$applyTo = (function (arglist__189526){
var x = cljs.core.first(arglist__189526);
var p__189516 = cljs.core.rest(arglist__189526);
return G__189525__delegate.call(this, x, p__189516);
});
return G__189525;
})()
;
atom = function(x,var_args){
var p__189516 = var_args;
switch(arguments.length){
case  1 :
return atom__189522.call(this,x);
default:
return atom__189523.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__189523.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____189527 = a.validator;

if(cljs.core.truth_(temp__3698__auto____189527))
{var validate__189528 = temp__3698__auto____189527;

if(cljs.core.truth_(validate__189528.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3073))))));
}
} else
{}
var old_value__189529 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__189529,new_value);
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
var swap_BANG___189530 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___189531 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___189532 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___189533 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___189534 = (function() { 
var G__189536__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__189536 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__189536__delegate.call(this, a, f, x, y, z, more);
};
G__189536.cljs$lang$maxFixedArity = 5;
G__189536.cljs$lang$applyTo = (function (arglist__189537){
var a = cljs.core.first(arglist__189537);
var f = cljs.core.first(cljs.core.next(arglist__189537));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__189537)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__189537))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__189537)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__189537)))));
return G__189536__delegate.call(this, a, f, x, y, z, more);
});
return G__189536;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___189530.call(this,a,f);
case  3 :
return swap_BANG___189531.call(this,a,f,x);
case  4 :
return swap_BANG___189532.call(this,a,f,x,y);
case  5 :
return swap_BANG___189533.call(this,a,f,x,y,z);
default:
return swap_BANG___189534.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___189534.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__189538){
var iref = cljs.core.first(arglist__189538);
var f = cljs.core.first(cljs.core.next(arglist__189538));
var args = cljs.core.rest(cljs.core.next(arglist__189538));
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
var gensym__189539 = (function (){
return gensym.call(null,"G__");
});
var gensym__189540 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__189539.call(this);
case  1 :
return gensym__189540.call(this,prefix_string);
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
var this__189542 = this;
return cljs.core.not.call(null,(cljs.core.deref.call(null,this__189542.state) === null));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__189543 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__189543.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__189543.state,this__189543.f);
}
return cljs.core.deref.call(null,this__189543.state);
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
delay.cljs$lang$applyTo = (function (arglist__189544){
var body = cljs.core.seq( arglist__189544 );;
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
var map__189545__189546 = options;
var map__189545__189547 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__189545__189546))?cljs.core.apply.call(null,cljs.core.hash_map,map__189545__189546):map__189545__189546);
var keywordize_keys__189548 = cljs.core.get.call(null,map__189545__189547,"\uFDD0'keywordize-keys");
var keyfn__189549 = (cljs.core.truth_(keywordize_keys__189548)?cljs.core.keyword:cljs.core.str);
var f__189555 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__514__auto____189554 = (function iter__189550(s__189551){
return (new cljs.core.LazySeq(null,false,(function (){
var s__189551__189552 = s__189551;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__189551__189552)))
{var k__189553 = cljs.core.first.call(null,s__189551__189552);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__189549.call(null,k__189553),thisfn.call(null,(x[k__189553]))]),iter__189550.call(null,cljs.core.rest.call(null,s__189551__189552)));
} else
{return null;
}
break;
}
})));
});

return iter__514__auto____189554.call(null,cljs.core.js_keys.call(null,x));
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

return f__189555.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__189556){
var x = cljs.core.first(arglist__189556);
var options = cljs.core.rest(arglist__189556);
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
var mem__189557 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__189561__delegate = function (args){
var temp__3695__auto____189558 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__189557),args);

if(cljs.core.truth_(temp__3695__auto____189558))
{var v__189559 = temp__3695__auto____189558;

return v__189559;
} else
{var ret__189560 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__189557,cljs.core.assoc,args,ret__189560);
return ret__189560;
}
};
var G__189561 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__189561__delegate.call(this, args);
};
G__189561.cljs$lang$maxFixedArity = 0;
G__189561.cljs$lang$applyTo = (function (arglist__189562){
var args = cljs.core.seq( arglist__189562 );;
return G__189561__delegate.call(this, args);
});
return G__189561;
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
var trampoline__189564 = (function (f){
while(true){
var ret__189563 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__189563)))
{{
var G__189567 = ret__189563;
f = G__189567;
continue;
}
} else
{return ret__189563;
}
break;
}
});
var trampoline__189565 = (function() { 
var G__189568__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__189568 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__189568__delegate.call(this, f, args);
};
G__189568.cljs$lang$maxFixedArity = 1;
G__189568.cljs$lang$applyTo = (function (arglist__189569){
var f = cljs.core.first(arglist__189569);
var args = cljs.core.rest(arglist__189569);
return G__189568__delegate.call(this, f, args);
});
return G__189568;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__189564.call(this,f);
default:
return trampoline__189565.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__189565.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__189570 = (function (){
return rand.call(null,1);
});
var rand__189571 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__189570.call(this);
case  1 :
return rand__189571.call(this,n);
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
var k__189573 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__189573,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__189573,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___189582 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___189583 = (function (h,child,parent){
var or__3548__auto____189574 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____189574))
{return or__3548__auto____189574;
} else
{var or__3548__auto____189575 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____189575))
{return or__3548__auto____189575;
} else
{var and__3546__auto____189576 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____189576))
{var and__3546__auto____189577 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____189577))
{var and__3546__auto____189578 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____189578))
{var ret__189579 = true;
var i__189580 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____189581 = cljs.core.not.call(null,ret__189579);

if(cljs.core.truth_(or__3548__auto____189581))
{return or__3548__auto____189581;
} else
{return cljs.core._EQ_.call(null,i__189580,cljs.core.count.call(null,parent));
}
})()))
{return ret__189579;
} else
{{
var G__189585 = isa_QMARK_.call(null,h,child.call(null,i__189580),parent.call(null,i__189580));
var G__189586 = (i__189580 + 1);
ret__189579 = G__189585;
i__189580 = G__189586;
continue;
}
}
break;
}
} else
{return and__3546__auto____189578;
}
} else
{return and__3546__auto____189577;
}
} else
{return and__3546__auto____189576;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___189582.call(this,h,child);
case  3 :
return isa_QMARK___189583.call(this,h,child,parent);
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
var parents__189587 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__189588 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__189587.call(this,h);
case  2 :
return parents__189588.call(this,h,tag);
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
var ancestors__189590 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__189591 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__189590.call(this,h);
case  2 :
return ancestors__189591.call(this,h,tag);
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
var descendants__189593 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__189594 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__189593.call(this,h);
case  2 :
return descendants__189594.call(this,h,tag);
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
var derive__189604 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3365))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__189605 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3369))))));
}
var tp__189599 = "\uFDD0'parents".call(null,h);
var td__189600 = "\uFDD0'descendants".call(null,h);
var ta__189601 = "\uFDD0'ancestors".call(null,h);
var tf__189602 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____189603 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__189599.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__189601.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__189601.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__189599,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__189602.call(null,"\uFDD0'ancestors".call(null,h),tag,td__189600,parent,ta__189601),"\uFDD0'descendants":tf__189602.call(null,"\uFDD0'descendants".call(null,h),parent,ta__189601,tag,td__189600)});
})());

if(cljs.core.truth_(or__3548__auto____189603))
{return or__3548__auto____189603;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__189604.call(this,h,tag);
case  3 :
return derive__189605.call(this,h,tag,parent);
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
var underive__189611 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__189612 = (function (h,tag,parent){
var parentMap__189607 = "\uFDD0'parents".call(null,h);
var childsParents__189608 = (cljs.core.truth_(parentMap__189607.call(null,tag))?cljs.core.disj.call(null,parentMap__189607.call(null,tag),parent):cljs.core.set([]));
var newParents__189609 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__189608))?cljs.core.assoc.call(null,parentMap__189607,tag,childsParents__189608):cljs.core.dissoc.call(null,parentMap__189607,tag));
var deriv_seq__189610 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__189596_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__189596_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__189596_SHARP_),cljs.core.second.call(null,p1__189596_SHARP_)));
}),cljs.core.seq.call(null,newParents__189609)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__189607.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__189597_SHARP_,p2__189598_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__189597_SHARP_,p2__189598_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__189610));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__189611.call(this,h,tag);
case  3 :
return underive__189612.call(this,h,tag,parent);
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
var xprefs__189614 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____189616 = (cljs.core.truth_((function (){var and__3546__auto____189615 = xprefs__189614;

if(cljs.core.truth_(and__3546__auto____189615))
{return xprefs__189614.call(null,y);
} else
{return and__3546__auto____189615;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____189616))
{return or__3548__auto____189616;
} else
{var or__3548__auto____189618 = (function (){var ps__189617 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__189617) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__189617),prefer_table)))
{} else
{}
{
var G__189621 = cljs.core.rest.call(null,ps__189617);
ps__189617 = G__189621;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____189618))
{return or__3548__auto____189618;
} else
{var or__3548__auto____189620 = (function (){var ps__189619 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__189619) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__189619),y,prefer_table)))
{} else
{}
{
var G__189622 = cljs.core.rest.call(null,ps__189619);
ps__189619 = G__189622;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____189620))
{return or__3548__auto____189620;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____189623 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____189623))
{return or__3548__auto____189623;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__189632 = cljs.core.reduce.call(null,(function (be,p__189624){
var vec__189625__189626 = p__189624;
var k__189627 = cljs.core.nth.call(null,vec__189625__189626,0,null);
var ___189628 = cljs.core.nth.call(null,vec__189625__189626,1,null);
var e__189629 = vec__189625__189626;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__189627)))
{var be2__189631 = (cljs.core.truth_((function (){var or__3548__auto____189630 = (be === null);

if(cljs.core.truth_(or__3548__auto____189630))
{return or__3548__auto____189630;
} else
{return cljs.core.dominates.call(null,k__189627,cljs.core.first.call(null,be),prefer_table);
}
})())?e__189629:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__189631),k__189627,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__189627," and ",cljs.core.first.call(null,be2__189631),", and neither is preferred")));
}
return be2__189631;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__189632))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__189632));
return cljs.core.second.call(null,best_entry__189632);
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
if(cljs.core.truth_((function (){var and__3546__auto____189633 = mf;

if(cljs.core.truth_(and__3546__auto____189633))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____189633;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____189634 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____189634))
{return or__3548__auto____189634;
} else
{var or__3548__auto____189635 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____189635))
{return or__3548__auto____189635;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____189636 = mf;

if(cljs.core.truth_(and__3546__auto____189636))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____189636;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____189637 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____189637))
{return or__3548__auto____189637;
} else
{var or__3548__auto____189638 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____189638))
{return or__3548__auto____189638;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____189639 = mf;

if(cljs.core.truth_(and__3546__auto____189639))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____189639;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____189640 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____189640))
{return or__3548__auto____189640;
} else
{var or__3548__auto____189641 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____189641))
{return or__3548__auto____189641;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____189642 = mf;

if(cljs.core.truth_(and__3546__auto____189642))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____189642;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____189643 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____189643))
{return or__3548__auto____189643;
} else
{var or__3548__auto____189644 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____189644))
{return or__3548__auto____189644;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____189645 = mf;

if(cljs.core.truth_(and__3546__auto____189645))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____189645;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____189646 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____189646))
{return or__3548__auto____189646;
} else
{var or__3548__auto____189647 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____189647))
{return or__3548__auto____189647;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____189648 = mf;

if(cljs.core.truth_(and__3546__auto____189648))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____189648;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____189649 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____189649))
{return or__3548__auto____189649;
} else
{var or__3548__auto____189650 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____189650))
{return or__3548__auto____189650;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____189651 = mf;

if(cljs.core.truth_(and__3546__auto____189651))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____189651;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____189652 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____189652))
{return or__3548__auto____189652;
} else
{var or__3548__auto____189653 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____189653))
{return or__3548__auto____189653;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____189654 = mf;

if(cljs.core.truth_(and__3546__auto____189654))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____189654;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____189655 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____189655))
{return or__3548__auto____189655;
} else
{var or__3548__auto____189656 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____189656))
{return or__3548__auto____189656;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__189657 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__189658 = cljs.core._get_method.call(null,mf,dispatch_val__189657);

if(cljs.core.truth_(target_fn__189658))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__189657)));
}
return cljs.core.apply.call(null,target_fn__189658,args);
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
var this__189659 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__189660 = this;
cljs.core.swap_BANG_.call(null,this__189660.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__189660.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__189660.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__189660.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__189661 = this;
cljs.core.swap_BANG_.call(null,this__189661.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__189661.method_cache,this__189661.method_table,this__189661.cached_hierarchy,this__189661.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__189662 = this;
cljs.core.swap_BANG_.call(null,this__189662.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__189662.method_cache,this__189662.method_table,this__189662.cached_hierarchy,this__189662.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__189663 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__189663.cached_hierarchy),cljs.core.deref.call(null,this__189663.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__189663.method_cache,this__189663.method_table,this__189663.cached_hierarchy,this__189663.hierarchy);
}
var temp__3695__auto____189664 = cljs.core.deref.call(null,this__189663.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____189664))
{var target_fn__189665 = temp__3695__auto____189664;

return target_fn__189665;
} else
{var temp__3695__auto____189666 = cljs.core.find_and_cache_best_method.call(null,this__189663.name,dispatch_val,this__189663.hierarchy,this__189663.method_table,this__189663.prefer_table,this__189663.method_cache,this__189663.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____189666))
{var target_fn__189667 = temp__3695__auto____189666;

return target_fn__189667;
} else
{return cljs.core.deref.call(null,this__189663.method_table).call(null,this__189663.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__189668 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__189668.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__189668.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__189668.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__189668.method_cache,this__189668.method_table,this__189668.cached_hierarchy,this__189668.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__189669 = this;
return cljs.core.deref.call(null,this__189669.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__189670 = this;
return cljs.core.deref.call(null,this__189670.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__189671 = this;
return cljs.core.do_dispatch.call(null,mf,this__189671.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__189672__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__189672 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__189672__delegate.call(this, _, args);
};
G__189672.cljs$lang$maxFixedArity = 1;
G__189672.cljs$lang$applyTo = (function (arglist__189673){
var _ = cljs.core.first(arglist__189673);
var args = cljs.core.rest(arglist__189673);
return G__189672__delegate.call(this, _, args);
});
return G__189672;
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
