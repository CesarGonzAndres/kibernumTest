<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
| 
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
//$router->post('users/login/', ['cors','uses' => 'UsersController@getToken']);

$router->post('search/', ['uses' => 'SearchController@index']);
$router->post('details/', ['uses' => 'SearchController@detailedView']);
$router->get('ranking/', ['uses' => 'SearchController@rankingList']);
$router->post('subranking/', ['uses' => 'SearchController@subRanking']);