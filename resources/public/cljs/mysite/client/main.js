goog.provide('mysite.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('fetch.remotes');
mysite.client.main.fmtih = (function fmtih(stri,stro,idx){
while(true){
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,stri)))
{return stro;
} else
{if(cljs.core.truth_((function (){var and__3546__auto____187952 = cljs.core._EQ_.call(null,(idx % 3),0);

if(cljs.core.truth_(and__3546__auto____187952))
{return cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,stri)));
} else
{return and__3546__auto____187952;
}
})()))
{{
var G__187953 = cljs.core.rest.call(null,stri);
var G__187954 = cljs.core.cons.call(null,",",cljs.core.cons.call(null,cljs.core.first.call(null,stri),stro));
var G__187955 = (idx + 1);
stri = G__187953;
stro = G__187954;
idx = G__187955;
continue;
}
} else
{{
var G__187956 = cljs.core.rest.call(null,stri);
var G__187957 = cljs.core.cons.call(null,cljs.core.first.call(null,stri),stro);
var G__187958 = (idx + 1);
stri = G__187956;
stro = G__187957;
idx = G__187958;
continue;
}
}
}
break;
}
});
mysite.client.main.fmti = (function fmti(intg){
return cljs.core.apply.call(null,cljs.core.str,mysite.client.main.fmtih.call(null,cljs.core.reverse.call(null,cljs.core.seq.call(null,cljs.core.str.call(null,parseInt.call(null,intg)))),cljs.core.Vector.fromArray([]),1));
});
mysite.client.main.fmti$ = (function fmti$(intg){
return cljs.core.str.call(null,"$",mysite.client.main.fmti.call(null,intg));
});
mysite.client.main.update_contributions = (function update_contributions(filter,$content){
return fetch.remotes.remote_callback.call(null,"get-recipients",cljs.core.Vector.fromArray([filter]),(function (result){
var G__187959__187960 = cljs.core.seq.call(null,result);

if(cljs.core.truth_(G__187959__187960))
{var r__187961 = cljs.core.first.call(null,G__187959__187960);
var G__187959__187962 = G__187959__187960;

while(true){
jayq.core.append.call(null,$content,mysite.client.main.filer.call(null,r__187961));
var temp__3698__auto____187963 = cljs.core.next.call(null,G__187959__187962);

if(cljs.core.truth_(temp__3698__auto____187963))
{var G__187959__187964 = temp__3698__auto____187963;

{
var G__187965 = cljs.core.first.call(null,G__187959__187964);
var G__187966 = G__187959__187964;
r__187961 = G__187965;
G__187959__187962 = G__187966;
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
}));
});
mysite.client.main.render = (function render(){
var group__3085__auto____187967 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

mysite.client.main.filer = (function filer(p__187968){
var vec__187969__187970 = p__187968;
var filer__187971 = cljs.core.nth.call(null,vec__187969__187970,0,null);
var amount__187972 = cljs.core.nth.call(null,vec__187969__187970,1,null);
var count__187973 = cljs.core.nth.call(null,vec__187969__187970,2,null);

var elem__3086__auto____187974 = crate.core.html.call(null,cljs.core.Vector.fromArray(["\uFDD0'li.filer",cljs.core.Vector.fromArray(["\uFDD0'ul",cljs.core.Vector.fromArray(["\uFDD0'h2",filer__187971]),cljs.core.Vector.fromArray(["\uFDD0'li.amount",mysite.client.main.fmti$.call(null,amount__187972)," (",mysite.client.main.fmti$.call(null,(amount__187972 / count__187973))," per contribution)"]),cljs.core.Vector.fromArray(["\uFDD0'li.count",mysite.client.main.fmti.call(null,count__187973)," contributions"])])]));

elem__3086__auto____187974.setAttribute("crateGroup",group__3085__auto____187967);
return elem__3086__auto____187974;
});
mysite.client.main.filer.prototype._crateGroup = group__3085__auto____187967;
fetch.remotes.remote_callback.call(null,"get-total-contrib",cljs.core.Vector.fromArray([""]),(function (result){
jayq.core.text.call(null,jayq.core.$.call(null,"\uFDD0'#total"),mysite.client.main.fmti$.call(null,"\uFDD0'total".call(null,result)));
return jayq.core.text.call(null,jayq.core.$.call(null,"\uFDD0'#count"),mysite.client.main.fmti.call(null,"\uFDD0'count".call(null,result)));
}));
mysite.client.main.update_contributions.call(null,"",jayq.core.$.call(null,"\uFDD0'#filers"));
return jayq.core.bind.call(null,jayq.core.$.call(null,"\uFDD0'#search"),"change",(function (){
jayq.core.$.call(null,"\uFDD0'#filers").empty();
return mysite.client.main.update_contributions.call(null,jayq.core.$.call(null,"\uFDD0'#search").val(),jayq.core.$.call(null,"\uFDD0'#filers"));
}));
});
jQuery.call(null,mysite.client.main.render);
