// Compiled by ClojureScript 1.7.170 {:target :nodejs}
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
var seq__1167_1181 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1168_1182 = null;
var count__1169_1183 = (0);
var i__1170_1184 = (0);
while(true){
if((i__1170_1184 < count__1169_1183)){
var f_1185 = cljs.core._nth.call(null,chunk__1168_1182,i__1170_1184);
cljs.core.println.call(null,"  ",f_1185);

var G__1186 = seq__1167_1181;
var G__1187 = chunk__1168_1182;
var G__1188 = count__1169_1183;
var G__1189 = (i__1170_1184 + (1));
seq__1167_1181 = G__1186;
chunk__1168_1182 = G__1187;
count__1169_1183 = G__1188;
i__1170_1184 = G__1189;
continue;
} else {
var temp__4425__auto___1190 = cljs.core.seq.call(null,seq__1167_1181);
if(temp__4425__auto___1190){
var seq__1167_1191__$1 = temp__4425__auto___1190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1167_1191__$1)){
var c__3197__auto___1192 = cljs.core.chunk_first.call(null,seq__1167_1191__$1);
var G__1193 = cljs.core.chunk_rest.call(null,seq__1167_1191__$1);
var G__1194 = c__3197__auto___1192;
var G__1195 = cljs.core.count.call(null,c__3197__auto___1192);
var G__1196 = (0);
seq__1167_1181 = G__1193;
chunk__1168_1182 = G__1194;
count__1169_1183 = G__1195;
i__1170_1184 = G__1196;
continue;
} else {
var f_1197 = cljs.core.first.call(null,seq__1167_1191__$1);
cljs.core.println.call(null,"  ",f_1197);

var G__1198 = cljs.core.next.call(null,seq__1167_1191__$1);
var G__1199 = null;
var G__1200 = (0);
var G__1201 = (0);
seq__1167_1181 = G__1198;
chunk__1168_1182 = G__1199;
count__1169_1183 = G__1200;
i__1170_1184 = G__1201;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1202 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__2822__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__2822__auto__)){
return or__2822__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1202);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1202)))?cljs.core.second.call(null,arglists_1202):arglists_1202));
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
var seq__1171 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1172 = null;
var count__1173 = (0);
var i__1174 = (0);
while(true){
if((i__1174 < count__1173)){
var vec__1175 = cljs.core._nth.call(null,chunk__1172,i__1174);
var name = cljs.core.nth.call(null,vec__1175,(0),null);
var map__1176 = cljs.core.nth.call(null,vec__1175,(1),null);
var map__1176__$1 = ((((!((map__1176 == null)))?((((map__1176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1176):map__1176);
var doc = cljs.core.get.call(null,map__1176__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__1176__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1203 = seq__1171;
var G__1204 = chunk__1172;
var G__1205 = count__1173;
var G__1206 = (i__1174 + (1));
seq__1171 = G__1203;
chunk__1172 = G__1204;
count__1173 = G__1205;
i__1174 = G__1206;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__1171);
if(temp__4425__auto__){
var seq__1171__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1171__$1)){
var c__3197__auto__ = cljs.core.chunk_first.call(null,seq__1171__$1);
var G__1207 = cljs.core.chunk_rest.call(null,seq__1171__$1);
var G__1208 = c__3197__auto__;
var G__1209 = cljs.core.count.call(null,c__3197__auto__);
var G__1210 = (0);
seq__1171 = G__1207;
chunk__1172 = G__1208;
count__1173 = G__1209;
i__1174 = G__1210;
continue;
} else {
var vec__1178 = cljs.core.first.call(null,seq__1171__$1);
var name = cljs.core.nth.call(null,vec__1178,(0),null);
var map__1179 = cljs.core.nth.call(null,vec__1178,(1),null);
var map__1179__$1 = ((((!((map__1179 == null)))?((((map__1179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__1179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1179):map__1179);
var doc = cljs.core.get.call(null,map__1179__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__1179__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__1211 = cljs.core.next.call(null,seq__1171__$1);
var G__1212 = null;
var G__1213 = (0);
var G__1214 = (0);
seq__1171 = G__1211;
chunk__1172 = G__1212;
count__1173 = G__1213;
i__1174 = G__1214;
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

//# sourceMappingURL=repl.js.map