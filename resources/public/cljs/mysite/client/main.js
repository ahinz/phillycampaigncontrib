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
{if(cljs.core.truth_((function (){var and__3546__auto____155176 = cljs.core._EQ_.call(null,(idx % 3),0);

if(cljs.core.truth_(and__3546__auto____155176))
{return cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,stri)));
} else
{return and__3546__auto____155176;
}
})()))
{{
var G__155177 = cljs.core.rest.call(null,stri);
var G__155178 = cljs.core.cons.call(null,",",cljs.core.cons.call(null,cljs.core.first.call(null,stri),stro));
var G__155179 = (idx + 1);
stri = G__155177;
stro = G__155178;
idx = G__155179;
continue;
}
} else
{{
var G__155180 = cljs.core.rest.call(null,stri);
var G__155181 = cljs.core.cons.call(null,cljs.core.first.call(null,stri),stro);
var G__155182 = (idx + 1);
stri = G__155180;
stro = G__155181;
idx = G__155182;
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
mysite.client.main.render = (function render(){
mysite.client.main.$content = jayq.core.$.call(null,"\uFDD0'#filers");
var group__3085__auto____155183 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

mysite.client.main.filer = (function filer(p__155184){
var vec__155185__155186 = p__155184;
var filer__155187 = cljs.core.nth.call(null,vec__155185__155186,0,null);
var amount__155188 = cljs.core.nth.call(null,vec__155185__155186,1,null);
var count__155189 = cljs.core.nth.call(null,vec__155185__155186,2,null);

var elem__3086__auto____155190 = crate.core.html.call(null,cljs.core.Vector.fromArray(["\uFDD0'li.filer",cljs.core.Vector.fromArray(["\uFDD0'ul",cljs.core.Vector.fromArray(["\uFDD0'h2",filer__155187]),cljs.core.Vector.fromArray(["\uFDD0'li.amount",mysite.client.main.fmti$.call(null,amount__155188)," (",mysite.client.main.fmti$.call(null,(amount__155188 / count__155189))," per contribution)"]),cljs.core.Vector.fromArray(["\uFDD0'li.count",mysite.client.main.fmti.call(null,count__155189)," contributions"])])]));

elem__3086__auto____155190.setAttribute("crateGroup",group__3085__auto____155183);
return elem__3086__auto____155190;
});
mysite.client.main.filer.prototype._crateGroup = group__3085__auto____155183;
fetch.remotes.remote_callback.call(null,"get-total-contrib",cljs.core.Vector.fromArray([]),(function (result){
jayq.core.text.call(null,jayq.core.$.call(null,"\uFDD0'#total"),mysite.client.main.fmti$.call(null,"\uFDD0'total".call(null,result)));
return jayq.core.text.call(null,jayq.core.$.call(null,"\uFDD0'#count"),mysite.client.main.fmti.call(null,"\uFDD0'count".call(null,result)));
}));
return fetch.remotes.remote_callback.call(null,"get-recipients",cljs.core.Vector.fromArray([]),(function (result){
var G__155191__155192 = cljs.core.seq.call(null,result);

if(cljs.core.truth_(G__155191__155192))
{var r__155193 = cljs.core.first.call(null,G__155191__155192);
var G__155191__155194 = G__155191__155192;

while(true){
jayq.core.append.call(null,mysite.client.main.$content,mysite.client.main.filer.call(null,r__155193));
var temp__3698__auto____155195 = cljs.core.next.call(null,G__155191__155194);

if(cljs.core.truth_(temp__3698__auto____155195))
{var G__155191__155196 = temp__3698__auto____155195;

{
var G__155197 = cljs.core.first.call(null,G__155191__155196);
var G__155198 = G__155191__155196;
r__155193 = G__155197;
G__155191__155194 = G__155198;
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
jQuery.call(null,mysite.client.main.render);
