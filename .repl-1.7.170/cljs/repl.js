// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__3984_3998 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3985_3999 = null;
var count__3986_4000 = (0);
var i__3987_4001 = (0);
while(true){
if((i__3987_4001 < count__3986_4000)){
var f_4002 = cljs.core._nth.call(null,chunk__3985_3999,i__3987_4001);
cljs.core.println.call(null,"  ",f_4002);

var G__4003 = seq__3984_3998;
var G__4004 = chunk__3985_3999;
var G__4005 = count__3986_4000;
var G__4006 = (i__3987_4001 + (1));
seq__3984_3998 = G__4003;
chunk__3985_3999 = G__4004;
count__3986_4000 = G__4005;
i__3987_4001 = G__4006;
continue;
} else {
var temp__4425__auto___4007 = cljs.core.seq.call(null,seq__3984_3998);
if(temp__4425__auto___4007){
var seq__3984_4008__$1 = temp__4425__auto___4007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3984_4008__$1)){
var c__3197__auto___4009 = cljs.core.chunk_first.call(null,seq__3984_4008__$1);
var G__4010 = cljs.core.chunk_rest.call(null,seq__3984_4008__$1);
var G__4011 = c__3197__auto___4009;
var G__4012 = cljs.core.count.call(null,c__3197__auto___4009);
var G__4013 = (0);
seq__3984_3998 = G__4010;
chunk__3985_3999 = G__4011;
count__3986_4000 = G__4012;
i__3987_4001 = G__4013;
continue;
} else {
var f_4014 = cljs.core.first.call(null,seq__3984_4008__$1);
cljs.core.println.call(null,"  ",f_4014);

var G__4015 = cljs.core.next.call(null,seq__3984_4008__$1);
var G__4016 = null;
var G__4017 = (0);
var G__4018 = (0);
seq__3984_3998 = G__4015;
chunk__3985_3999 = G__4016;
count__3986_4000 = G__4017;
i__3987_4001 = G__4018;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_4019 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__2822__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__2822__auto__)){
return or__2822__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_4019);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_4019)))?cljs.core.second.call(null,arglists_4019):arglists_4019));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__3988 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3989 = null;
var count__3990 = (0);
var i__3991 = (0);
while(true){
if((i__3991 < count__3990)){
var vec__3992 = cljs.core._nth.call(null,chunk__3989,i__3991);
var name = cljs.core.nth.call(null,vec__3992,(0),null);
var map__3993 = cljs.core.nth.call(null,vec__3992,(1),null);
var map__3993__$1 = ((((!((map__3993 == null)))?((((map__3993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3993):map__3993);
var doc = cljs.core.get.call(null,map__3993__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__3993__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__4020 = seq__3988;
var G__4021 = chunk__3989;
var G__4022 = count__3990;
var G__4023 = (i__3991 + (1));
seq__3988 = G__4020;
chunk__3989 = G__4021;
count__3990 = G__4022;
i__3991 = G__4023;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__3988);
if(temp__4425__auto__){
var seq__3988__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3988__$1)){
var c__3197__auto__ = cljs.core.chunk_first.call(null,seq__3988__$1);
var G__4024 = cljs.core.chunk_rest.call(null,seq__3988__$1);
var G__4025 = c__3197__auto__;
var G__4026 = cljs.core.count.call(null,c__3197__auto__);
var G__4027 = (0);
seq__3988 = G__4024;
chunk__3989 = G__4025;
count__3990 = G__4026;
i__3991 = G__4027;
continue;
} else {
var vec__3995 = cljs.core.first.call(null,seq__3988__$1);
var name = cljs.core.nth.call(null,vec__3995,(0),null);
var map__3996 = cljs.core.nth.call(null,vec__3995,(1),null);
var map__3996__$1 = ((((!((map__3996 == null)))?((((map__3996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__3996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3996):map__3996);
var doc = cljs.core.get.call(null,map__3996__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__3996__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__4028 = cljs.core.next.call(null,seq__3988__$1);
var G__4029 = null;
var G__4030 = (0);
var G__4031 = (0);
seq__3988 = G__4028;
chunk__3989 = G__4029;
count__3990 = G__4030;
i__3991 = G__4031;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
