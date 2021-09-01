<?php

use Illuminate\Support\Facades\Route;

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
Route::get('/customer/index', 'CustomerController@index');
Route::post('/customer/create', 'CustomerController@store');
Route::put('/customer/actualizar', 'CustomerController@update');

Route::get('/lawyer/index', 'LawyerController@index');
Route::post('/lawyer/create', 'LawyerController@store');
Route::put('/lawyer/actualizar', 'LawyerController@update');

Route::get('/caso/index', 'CasoController@index');
Route::post('/caso/create', 'CasoController@store');
Route::put('/caso/actualizar', 'CasoController@update');
Route::get('/caso/listcustomer', 'CasoController@listCustomer');

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');




