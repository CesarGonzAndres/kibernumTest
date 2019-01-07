<?php

use App\Student;
use App\Teacher;
use App\Representative;
use App\User;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
   
	$password = 1234;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->ean8,
        'password' => $password,
        'api_token' => $faker->unique()->md5,
        'username' => $faker->unique()->phoneNumber
    ];

});

$factory->define(App\Student::class, function (Faker\Generator $faker) {
   
    return [
        'name' => $faker->name,
        'lastname' => $faker->lastname,
        'email' => $faker->email,
        'name' => $faker->name,
        'birthdate' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'address' => $faker->address,
        'state' => $faker->state,
        'city' => $faker->cityPrefix,
        'description' => $faker->realText,
        'phone' => $faker->phoneNumber,
        'phone_optional' => $faker->phoneNumber,
        'gender' => $faker->title,
        'document' => $faker->unique()->ean8,
        'address' => $faker->country
    ];

});

$factory->define(App\Representative::class, function (Faker\Generator $faker) {
   
    return [
        'name' => $faker->name,
        'lastname' => $faker->lastname,
        'email' => $faker->email,
        'name' => $faker->name,
        'birthdate' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'address' => $faker->address,
        'description' => $faker->realText,
        'phone' => $faker->phoneNumber,
        'phone_optional' => $faker->phoneNumber,
        'gender' => $faker->title,
        'document' => $faker->unique()->ean8,
        'address' => $faker->country,
        'student_id' => $faker->unique()->numberBetween($min = 1, $max = 100)
    ];

});

$factory->define(App\Teacher::class, function (Faker\Generator $faker) {
   
    return [
        'name' => $faker->name,
        'lastname' => $faker->lastname,
        'email' => $faker->email,
        'name' => $faker->name,
        'birthdate' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'address' => $faker->address,
        'state' => $faker->state,
        'city' => $faker->cityPrefix,
        'phone' => $faker->phoneNumber,
        'phone_optional' => $faker->phoneNumber,
        'gender' => $faker->title,
        'document' => $faker->unique()->ean8,
        'address' => $faker->country,
        'subject' => $faker->jobTitle
    ];

});