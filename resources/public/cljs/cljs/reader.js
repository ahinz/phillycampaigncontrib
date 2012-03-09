goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____157122 = reader;

if(cljs.core.truth_(and__3546__auto____157122))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____157122;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____157123 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____157123))
{return or__3548__auto____157123;
} else
{var or__3548__auto____157124 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____157124))
{return or__3548__auto____157124;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____157125 = reader;

if(cljs.core.truth_(and__3546__auto____157125))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____157125;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____157126 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____157126))
{return or__3548__auto____157126;
} else
{var or__3548__auto____157127 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____157127))
{return or__3548__auto____157127;
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
var this__157128 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__157128.buffer_atom))))
{var idx__157129 = cljs.core.deref.call(null,this__157128.index_atom);

cljs.core.swap_BANG_.call(null,this__157128.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__157128.s,idx__157129);
} else
{var buf__157130 = cljs.core.deref.call(null,this__157128.buffer_atom);

cljs.core.swap_BANG_.call(null,this__157128.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__157130);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__157131 = this;
return cljs.core.swap_BANG_.call(null,this__157131.buffer_atom,(function (p1__157121_SHARP_){
return cljs.core.cons.call(null,ch,p1__157121_SHARP_);
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
var or__3548__auto____157132 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____157132))
{return or__3548__auto____157132;
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
var or__3548__auto____157133 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____157133))
{return or__3548__auto____157133;
} else
{var and__3546__auto____157135 = (function (){var or__3548__auto____157134 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____157134))
{return or__3548__auto____157134;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____157135))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__157136 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__157136);
return next_ch__157136;
})());
} else
{return and__3546__auto____157135;
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
reader_error.cljs$lang$applyTo = (function (arglist__157137){
var rdr = cljs.core.first(arglist__157137);
var msg = cljs.core.rest(arglist__157137);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____157138 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____157138))
{var and__3546__auto____157139 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____157139))
{var and__3546__auto____157140 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____157140))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____157140;
}
} else
{return and__3546__auto____157139;
}
} else
{return and__3546__auto____157138;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__157141 = (new goog.string.StringBuffer(initch));
var ch__157142 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____157143 = (ch__157142 === null);

if(cljs.core.truth_(or__3548__auto____157143))
{return or__3548__auto____157143;
} else
{var or__3548__auto____157144 = cljs.reader.whitespace_QMARK_.call(null,ch__157142);

if(cljs.core.truth_(or__3548__auto____157144))
{return or__3548__auto____157144;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__157142);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__157142);
return sb__157141.toString();
} else
{{
var G__157145 = (function (){sb__157141.append(ch__157142);
return sb__157141;
})();
var G__157146 = cljs.reader.read_char.call(null,rdr);
sb__157141 = G__157145;
ch__157142 = G__157146;
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
var ch__157147 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____157148 = cljs.core._EQ_.call(null,ch__157147,"n");

if(cljs.core.truth_(or__3548__auto____157148))
{return or__3548__auto____157148;
} else
{var or__3548__auto____157149 = cljs.core._EQ_.call(null,ch__157147,"r");

if(cljs.core.truth_(or__3548__auto____157149))
{return or__3548__auto____157149;
} else
{return (ch__157147 === null);
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
var groups__157150 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__157151 = cljs.core.nth.call(null,groups__157150,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____157152 = (void 0 === group3__157151);

if(cljs.core.truth_(or__3548__auto____157152))
{return or__3548__auto____157152;
} else
{return (group3__157151.length < 1);
}
})())))
{return 0;
} else
{var negate__157154 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__157150,1)))?-1:1);
var vec__157153__157155 = (cljs.core.truth_(cljs.core.nth.call(null,groups__157150,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__157150,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__157150,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__157150,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__157150,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__157150,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__157150,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__157150,7),parseInt.call(null,cljs.core.nth.call(null,groups__157150,7))]):(cljs.core.truth_("\uFDD0'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__157156 = cljs.core.nth.call(null,vec__157153__157155,0,null);
var radix__157157 = cljs.core.nth.call(null,vec__157153__157155,1,null);

if(cljs.core.truth_((n__157156 === null)))
{return null;
} else
{return (negate__157154 * parseInt.call(null,n__157156,radix__157157));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__157158 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__157159 = cljs.core.nth.call(null,groups__157158,1);
var denominator__157160 = cljs.core.nth.call(null,groups__157158,2);

return (parseInt.call(null,numinator__157159) / parseInt.call(null,denominator__157160));
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
var ch__157161 = cljs.reader.read_char.call(null,reader);
var mapresult__157162 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__157161);

if(cljs.core.truth_(mapresult__157162))
{return mapresult__157162;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____157163 = cljs.core._EQ_.call(null,"u",ch__157161);

if(cljs.core.truth_(or__3548__auto____157163))
{return or__3548__auto____157163;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__157161);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__157161);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__157161);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__157164 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__157164)))
{{
var G__157165 = cljs.reader.read_char.call(null,rdr);
ch__157164 = G__157165;
continue;
}
} else
{return ch__157164;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__157166 = cljs.core.Vector.fromArray([]);

while(true){
var ch__157167 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__157167))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__157167)))
{return a__157166;
} else
{var temp__3695__auto____157168 = cljs.core.get.call(null,cljs.reader.macros,ch__157167);

if(cljs.core.truth_(temp__3695__auto____157168))
{var macrofn__157169 = temp__3695__auto____157168;

var mret__157170 = macrofn__157169.call(null,rdr,ch__157167);

{
var G__157172 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__157170,rdr))?a__157166:cljs.core.conj.call(null,a__157166,mret__157170));
a__157166 = G__157172;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__157167);
var o__157171 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__157173 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__157171,rdr))?a__157166:cljs.core.conj.call(null,a__157166,o__157171));
a__157166 = G__157173;
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
var ch__157174 = cljs.reader.read_char.call(null,rdr);
var dm__157175 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__157174);

if(cljs.core.truth_(dm__157175))
{return dm__157175.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__157174);
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
var l__157176 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__157176))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__157176);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__157177 = (new goog.string.StringBuffer(initch));
var ch__157178 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____157179 = (ch__157178 === null);

if(cljs.core.truth_(or__3548__auto____157179))
{return or__3548__auto____157179;
} else
{var or__3548__auto____157180 = cljs.reader.whitespace_QMARK_.call(null,ch__157178);

if(cljs.core.truth_(or__3548__auto____157180))
{return or__3548__auto____157180;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__157178);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__157178);
var s__157181 = buffer__157177.toString();

var or__3548__auto____157182 = cljs.reader.match_number.call(null,s__157181);

if(cljs.core.truth_(or__3548__auto____157182))
{return or__3548__auto____157182;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__157181,"]");
}
} else
{{
var G__157183 = (function (){buffer__157177.append(ch__157178);
return buffer__157177;
})();
var G__157184 = cljs.reader.read_char.call(null,reader);
buffer__157177 = G__157183;
ch__157178 = G__157184;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__157185 = (new goog.string.StringBuffer());
var ch__157186 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((ch__157186 === null)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__157186)))
{{
var G__157187 = (function (){buffer__157185.append(cljs.reader.escape_char.call(null,buffer__157185,reader));
return buffer__157185;
})();
var G__157188 = cljs.reader.read_char.call(null,reader);
buffer__157185 = G__157187;
ch__157186 = G__157188;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__157186)))
{return buffer__157185.toString();
} else
{if(cljs.core.truth_("\uFDD0'default"))
{{
var G__157189 = (function (){buffer__157185.append(ch__157186);
return buffer__157185;
})();
var G__157190 = cljs.reader.read_char.call(null,reader);
buffer__157185 = G__157189;
ch__157186 = G__157190;
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
var token__157191 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__157191,"\/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__157191,0,token__157191.indexOf("\/")),cljs.core.subs.call(null,token__157191,(token__157191.indexOf("\/") + 1),token__157191.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__157191,cljs.core.symbol.call(null,token__157191));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__157193 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__157192__157194 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__157193);
var token__157195 = cljs.core.nth.call(null,vec__157192__157194,0,null);
var ns__157196 = cljs.core.nth.call(null,vec__157192__157194,1,null);
var name__157197 = cljs.core.nth.call(null,vec__157192__157194,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____157199 = (function (){var and__3546__auto____157198 = cljs.core.not.call(null,(void 0 === ns__157196));

if(cljs.core.truth_(and__3546__auto____157198))
{return (ns__157196.substring((ns__157196.length - 2),ns__157196.length) === ":\/");
} else
{return and__3546__auto____157198;
}
})();

if(cljs.core.truth_(or__3548__auto____157199))
{return or__3548__auto____157199;
} else
{var or__3548__auto____157200 = ((name__157197[(name__157197.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____157200))
{return or__3548__auto____157200;
} else
{return cljs.core.not.call(null,(token__157195.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__157195);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__157196.substring(0,ns__157196.indexOf("\/")),name__157197);
} else
{return cljs.core.keyword.call(null,token__157195);
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
var m__157201 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__157201)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__157202 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__450__auto____157203 = o__157202;

if(cljs.core.truth_((function (){var and__3546__auto____157204 = x__450__auto____157203;

if(cljs.core.truth_(and__3546__auto____157204))
{var and__3546__auto____157205 = x__450__auto____157203.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____157205))
{return cljs.core.not.call(null,x__450__auto____157203.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____157205;
}
} else
{return and__3546__auto____157204;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__450__auto____157203);
}
})()))
{return cljs.core.with_meta.call(null,o__157202,cljs.core.merge.call(null,cljs.core.meta.call(null,o__157202),m__157201));
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
var ch__157206 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((ch__157206 === null)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__157206)))
{{
var G__157208 = reader;
var G__157209 = eof_is_error;
var G__157210 = sentinel;
var G__157211 = is_recursive;
reader = G__157208;
eof_is_error = G__157209;
sentinel = G__157210;
is_recursive = G__157211;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__157206)))
{{
var G__157212 = cljs.reader.read_comment.call(null,reader,ch__157206);
var G__157213 = eof_is_error;
var G__157214 = sentinel;
var G__157215 = is_recursive;
reader = G__157212;
eof_is_error = G__157213;
sentinel = G__157214;
is_recursive = G__157215;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var res__157207 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__157206))?cljs.reader.macros.call(null,ch__157206).call(null,reader,ch__157206):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__157206))?cljs.reader.read_number.call(null,reader,ch__157206):(cljs.core.truth_("\uFDD0'else")?cljs.reader.read_symbol.call(null,reader,ch__157206):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__157207,reader)))
{{
var G__157216 = reader;
var G__157217 = eof_is_error;
var G__157218 = sentinel;
var G__157219 = is_recursive;
reader = G__157216;
eof_is_error = G__157217;
sentinel = G__157218;
is_recursive = G__157219;
continue;
}
} else
{return res__157207;
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
var r__157220 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__157220,true,null,false);
});
