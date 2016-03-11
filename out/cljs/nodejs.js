// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1217__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1218__i = 0, G__1218__a = new Array(arguments.length -  0);
while (G__1218__i < G__1218__a.length) {G__1218__a[G__1218__i] = arguments[G__1218__i + 0]; ++G__1218__i;}
  args = new cljs.core.IndexedSeq(G__1218__a,0);
} 
return G__1217__delegate.call(this,args);};
G__1217.cljs$lang$maxFixedArity = 0;
G__1217.cljs$lang$applyTo = (function (arglist__1219){
var args = cljs.core.seq(arglist__1219);
return G__1217__delegate(args);
});
G__1217.cljs$core$IFn$_invoke$arity$variadic = G__1217__delegate;
return G__1217;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1220__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1221__i = 0, G__1221__a = new Array(arguments.length -  0);
while (G__1221__i < G__1221__a.length) {G__1221__a[G__1221__i] = arguments[G__1221__i + 0]; ++G__1221__i;}
  args = new cljs.core.IndexedSeq(G__1221__a,0);
} 
return G__1220__delegate.call(this,args);};
G__1220.cljs$lang$maxFixedArity = 0;
G__1220.cljs$lang$applyTo = (function (arglist__1222){
var args = cljs.core.seq(arglist__1222);
return G__1220__delegate(args);
});
G__1220.cljs$core$IFn$_invoke$arity$variadic = G__1220__delegate;
return G__1220;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map