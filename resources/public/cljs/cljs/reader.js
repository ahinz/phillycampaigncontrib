goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____189898 = reader;

if(cljs.core.truth_(and__3546__auto____189898))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____189898;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____189899 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____189899))
{return or__3548__auto____189899;
} else
{var or__3548__auto____189900 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____189900))
{return or__3548__auto____189900;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____189901 = reader;

if(cljs.core.truth_(and__3546__auto____189901))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____189901;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____189902 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____189902))
{return or__3548__auto____189902;
} else
{var or__3548__auto____189903 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____189903))
{return or__3548__auto____189903;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = (function (this__365__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__189904 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__189904.buffer_atom))))
{var idx__189905 = cljs.core.deref.call(null,this__189904.index_atom);

cljs.core.swap_BANG_.call(null,this__189904.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__189904.s,idx__189905);
} else
{var buf__189906 = cljs.core.deref.call(null,this__189904.buffer_atom);

cljs.core.swap_BANG_.call(null,this__189904.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__189906);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__189907 = this;
return cljs.core.swap_BANG_.call(null,this__189907.buffer_atom,(function (p1__189897_SHARP_){
return cljs.core.cons.call(null,ch,p1__189897_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____189908 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____189908))
{return or__3548__auto____189908;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____189909 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____189909))
{return or__3548__auto____189909;
} else
{var and__3546__auto____189911 = (function (){var or__3548__auto____189910 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____189910))
{return or__3548__auto____189910;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____189911))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__189912 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__189912);
return next_ch__189912;
})());
} else
{return and__3546__auto____189911;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__189913){
var rdr = cljs.core.first(arglist__189913);
var msg = cljs.core.rest(arglist__189913);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____189914 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____189914))
{var and__3546__auto____189915 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____189915))
{var and__3546__auto____189916 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____189916))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____189916;
}
} else
{return and__3546__auto____189915;
}
} else
{return and__3546__auto____189914;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__189917 = (new goog.string.StringBuffer(initch));
var ch__189918 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____189919 = (ch__189918 === null);

if(cljs.core.truth_(or__3548__auto____189919))
{return or__3548__auto____189919;
} else
{var or__3548__auto____189920 = cljs.reader.whitespace_QMARK_.call(null,ch__189918);

if(cljs.core.truth_(or__3548__auto____189920))
{return or__3548__auto____189920;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__189918);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__189918);
return sb__189917.toString();
} else
{{
var G__189921 = (function (){sb__189917.append(ch__189918);
return sb__189917;
})();
var G__189922 = cljs.reader.read_char.call(null,rdr);
sb__189917 = G__189921;
ch__189918 = G__189922;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__189923 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____189924 = cljs.core._EQ_.call(null,ch__189923,"n");

if(cljs.core.truth_(or__3548__auto____189924))
{return or__3548__auto____189924;
} else
{var or__3548__auto____189925 = cljs.core._EQ_.call(null,ch__189923,"r");

if(cljs.core.truth_(or__3548__auto____189925))
{return or__3548__auto____189925;
} else
{return (ch__189923 === null);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)\/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9\/].*\/)?([^0-9\/][^\/]*)");
cljs.reader.match_int = (function match_int(s){
var groups__189926 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__189927 = cljs.core.nth.call(null,groups__189926,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____189928 = (void 0 === group3__189927);

if(cljs.core.truth_(or__3548__auto____189928))
{return or__3548__auto____189928;
} else
{return (group3__189927.length < 1);
}
})())))
{return 0;
} else
{var negate__189930 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__189926,1)))?-1:1);
var vec__189929__189931 = (cljs.core.truth_(cljs.core.nth.call(null,groups__189926,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__189926,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__189926,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__189926,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__189926,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__189926,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__189926,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__189926,7),parseInt.call(null,cljs.core.nth.call(null,groups__189926,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__189932 = cljs.core.nth.call(null,vec__189929__189931,0,null);
var radix__189933 = cljs.core.nth.call(null,vec__189929__189931,1,null);

if(cljs.core.truth_((n__189932 === null)))
{return null;
} else
{return (negate__189930 * parseInt.call(null,n__189932,radix__189933));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__189934 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__189935 = cljs.core.nth.call(null,groups__189934,1);
var denominator__189936 = cljs.core.nth.call(null,groups__189934,2);

return (parseInt.call(null,numinator__189935) / parseInt.call(null,denominator__189936));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__189937 = cljs.reader.read_char.call(null,reader);
var mapresult__189938 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__189937);

if(cljs.core.truth_(mapresult__189938))
{return mapresult__189938;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____189939 = cljs.core._EQ_.call(null,"u",ch__189937);

if(cljs.core.truth_(or__3548__auto____189939))
{return or__3548__auto____189939;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__189937);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__189937);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__189937);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__189940 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__189940)))
{{
var G__189941 = cljs.reader.read_char.call(null,rdr);
ch__189940 = G__189941;
continue;
}
} else
{return ch__189940;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__189942 = cljs.core.Vector.fromArray([]);

while(true){
var ch__189943 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__189943))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__189943)))
{return a__189942;
} else
{var temp__3695__auto____189944 = cljs.core.get.call(null,cljs.reader.macros,ch__189943);

if(cljs.core.truth_(temp__3695__auto____189944))
{var macrofn__189945 = temp__3695__auto____189944;

var mret__189946 = macrofn__189945.call(null,rdr,ch__189943);

{
var G__189948 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__189946,rdr))?a__189942:cljs.core.conj.call(null,a__189942,mret__189946));
a__189942 = G__189948;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__189943);
var o__189947 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__189949 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__189947,rdr))?a__189942:cljs.core.conj.call(null,a__189942,o__189947));
a__189942 = G__189949;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__189950 = cljs.reader.read_char.call(null,rdr);
var dm__189951 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__189950);

if(cljs.core.truth_(dm__189951))
{return dm__189951.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__189950);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__189952 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__189952))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__189952);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__189953 = (new goog.string.StringBuffer(initch));
var ch__189954 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____189955 = (ch__189954 === null);

if(cljs.core.truth_(or__3548__auto____189955))
{return or__3548__auto____189955;
} else
{var or__3548__auto____189956 = cljs.reader.whitespace_QMARK_.call(null,ch__189954);

if(cljs.core.truth_(or__3548__auto____189956))
{return or__3548__auto____189956;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__189954);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__189954);
var s__189957 = buffer__189953.toString();

var or__3548__auto____189958 = cljs.reader.match_number.call(null,s__189957);

if(cljs.core.truth_(or__3548__auto____189958))
{return or__3548__auto____189958;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__189957,"]");
}
} else
{{
var G__189959 = (function (){buffer__189953.append(ch__189954);
return buffer__189953;
})();
var G__189960 = cljs.reader.read_char.call(null,reader);
buffer__189953 = G__189959;
ch__189954 = G__189960;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__189961 = (new goog.string.StringBuffer());
var ch__189962 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__189962 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__189962)))
{{
var G__189963 = (function (){buffer__189961.append(cljs.reader.escape_char.call(null,buffer__189961,reader));
return buffer__189961;
})();
var G__189964 = cljs.reader.read_char.call(null,reader);
buffer__189961 = G__189963;
ch__189962 = G__189964;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__189962)))
{return buffer__189961.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__189965 = (function (){buffer__189961.append(ch__189962);
return buffer__189961;
})();
var G__189966 = cljs.reader.read_char.call(null,reader);
buffer__189961 = G__189965;
ch__189962 = G__189966;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__189967 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__189967,"\/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__189967,0,token__189967.indexOf("\/")),cljs.core.subs.call(null,token__189967,(token__189967.indexOf("\/") + 1),token__189967.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__189967,cljs.core.symbol.call(null,token__189967));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__189969 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__189968__189970 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__189969);
var token__189971 = cljs.core.nth.call(null,vec__189968__189970,0,null);
var ns__189972 = cljs.core.nth.call(null,vec__189968__189970,1,null);
var name__189973 = cljs.core.nth.call(null,vec__189968__189970,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____189975 = (function (){var and__3546__auto____189974 = cljs.core.not.call(null,(void 0 === ns__189972));

if(cljs.core.truth_(and__3546__auto____189974))
{return (ns__189972.substring((ns__189972.length - 2),ns__189972.length) === ":\/");
} else
{return and__3546__auto____189974;
}
})();

if(cljs.core.truth_(or__3548__auto____189975))
{return or__3548__auto____189975;
} else
{var or__3548__auto____189976 = ((name__189973[(name__189973.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____189976))
{return or__3548__auto____189976;
} else
{return cljs.core.not.call(null,(token__189971.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__189971);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__189972.substring(0,ns__189972.indexOf("\/")),name__189973);
} else
{return cljs.core.keyword.call(null,token__189971);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__189977 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__189977)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__189978 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__450__auto____189979 = o__189978;

if(cljs.core.truth_((function (){var and__3546__auto____189980 = x__450__auto____189979;

if(cljs.core.truth_(and__3546__auto____189980))
{var and__3546__auto____189981 = x__450__auto____189979.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____189981))
{return cljs.core.not.call(null,x__450__auto____189979.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____189981;
}
} else
{return and__3546__auto____189980;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__450__auto____189979);
}
})()))
{return cljs.core.with_meta.call(null,o__189978,cljs.core.merge.call(null,cljs.core.meta.call(null,o__189978),m__189977));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"\uFDD1'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"\uFDD1'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__189982 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__189982 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__189982)))
{{
var G__189984 = reader;
var G__189985 = eof_is_error;
var G__189986 = sentinel;
var G__189987 = is_recursive;
reader = G__189984;
eof_is_error = G__189985;
sentinel = G__189986;
is_recursive = G__189987;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__189982)))
{{
var G__189988 = cljs.reader.read_comment.call(null,reader,ch__189982);
var G__189989 = eof_is_error;
var G__189990 = sentinel;
var G__189991 = is_recursive;
reader = G__189988;
eof_is_error = G__189989;
sentinel = G__189990;
is_recursive = G__189991;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__189983 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__189982))?cljs.reader.macros.call(null,ch__189982).call(null,reader,ch__189982):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__189982))?cljs.reader.read_number.call(null,reader,ch__189982):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__189982):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__189983,reader)))
{{
var G__189992 = reader;
var G__189993 = eof_is_error;
var G__189994 = sentinel;
var G__189995 = is_recursive;
reader = G__189992;
eof_is_error = G__189993;
sentinel = G__189994;
is_recursive = G__189995;
continue;
}
} else
{return res__189983;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__189996 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__189996,true,null,false);
});
