<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/about', function () {
    return view('welcome');
});
Route::get('/topics', function () {
    return view('welcome');
});

Route::get('/tasks', 'TaskController@index');
Route::post('/task', 'TaskController@store');
Route::put('/task/put/{task}','TaskController@edit');
Route::delete('/task/{task}', 'TaskController@destroy');


Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

Route::get('/count',function(){
 	return view('count');
});
Route::get('/count/home',function(){
 	return view('count');
});
Route::get('/count/{task}',function(){
 	return view('count');
});

Route::get('/react','TaskController@index');

Route::get('/todo','TodoController@index');