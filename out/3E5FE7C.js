goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__1231__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__1231 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1232__i = 0, G__1232__a = new Array(arguments.length -  0);
while (G__1232__i < G__1232__a.length) {G__1232__a[G__1232__i] = arguments[G__1232__i + 0]; ++G__1232__i;}
  args = new cljs.core.IndexedSeq(G__1232__a,0);
} 
return G__1231__delegate.call(this,args);};
G__1231.cljs$lang$maxFixedArity = 0;
G__1231.cljs$lang$applyTo = (function (arglist__1233){
var args = cljs.core.seq(arglist__1233);
return G__1231__delegate(args);
});
G__1231.cljs$core$IFn$_invoke$arity$variadic = G__1231__delegate;
return G__1231;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__1234__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__1234 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1235__i = 0, G__1235__a = new Array(arguments.length -  0);
while (G__1235__i < G__1235__a.length) {G__1235__a[G__1235__i] = arguments[G__1235__i + 0]; ++G__1235__i;}
  args = new cljs.core.IndexedSeq(G__1235__a,0);
} 
return G__1234__delegate.call(this,args);};
G__1234.cljs$lang$maxFixedArity = 0;
G__1234.cljs$lang$applyTo = (function (arglist__1236){
var args = cljs.core.seq(arglist__1236);
return G__1234__delegate(args);
});
G__1234.cljs$core$IFn$_invoke$arity$variadic = G__1234__delegate;
return G__1234;
})()
;

return null;
});
