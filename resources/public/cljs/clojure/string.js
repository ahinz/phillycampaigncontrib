goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,match)))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw cljs.core.str.call(null,"Invalid match arg: ",match);
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__156968 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__156969 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__156968.call(this,separator);
case  2 :
return join__156969.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if(cljs.core.truth_((cljs.core.count.call(null,s) < 2)))
{return clojure.string.upper_case.call(null,s);
} else
{return cljs.core.str.call(null,clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__156977 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__156978 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__156971 = s;
var limit__156972 = limit;
var parts__156973 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__156972,1)))
{return cljs.core.conj.call(null,parts__156973,s__156971);
} else
{var temp__3695__auto____156974 = cljs.core.re_find.call(null,re,s__156971);

if(cljs.core.truth_(temp__3695__auto____156974))
{var m__156975 = temp__3695__auto____156974;

var index__156976 = s__156971.indexOf(m__156975);

{
var G__156980 = s__156971.substring((index__156976 + cljs.core.count.call(null,m__156975)));
var G__156981 = (limit__156972 - 1);
var G__156982 = cljs.core.conj.call(null,parts__156973,s__156971.substring(0,index__156976));
s__156971 = G__156980;
limit__156972 = G__156981;
parts__156973 = G__156982;
continue;
}
} else
{return cljs.core.conj.call(null,parts__156973,s__156971);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__156977.call(this,s,re);
case  3 :
return split__156978.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__156983 = s.length;

while(true){
if(cljs.core.truth_((index__156983 === 0)))
{return "";
} else
{var ch__156984 = cljs.core.get.call(null,s,(index__156983 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____156985 = cljs.core._EQ_.call(null,ch__156984,"\n");

if(cljs.core.truth_(or__3548__auto____156985))
{return or__3548__auto____156985;
} else
{return cljs.core._EQ_.call(null,ch__156984,"\r");
}
})()))
{{
var G__156986 = (index__156983 - 1);
index__156983 = G__156986;
continue;
}
} else
{return s.substring(0,index__156983);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__156987 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____156988 = cljs.core.not.call(null,s__156987);

if(cljs.core.truth_(or__3548__auto____156988))
{return or__3548__auto____156988;
} else
{var or__3548__auto____156989 = cljs.core._EQ_.call(null,"",s__156987);

if(cljs.core.truth_(or__3548__auto____156989))
{return or__3548__auto____156989;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__156987);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__156990 = (new goog.string.StringBuffer());
var length__156991 = s.length;

var index__156992 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__156991,index__156992)))
{return buffer__156990.toString();
} else
{var ch__156993 = s.charAt(index__156992);

var temp__3695__auto____156994 = cljs.core.get.call(null,cmap,ch__156993);

if(cljs.core.truth_(temp__3695__auto____156994))
{var replacement__156995 = temp__3695__auto____156994;

buffer__156990.append(cljs.core.str.call(null,replacement__156995));
} else
{buffer__156990.append(ch__156993);
}
{
var G__156996 = (index__156992 + 1);
index__156992 = G__156996;
continue;
}
}
break;
}
});
