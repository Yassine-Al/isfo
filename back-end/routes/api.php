<?php

use App\Http\Controllers\FormateurController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GroupeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/datagroups', [GroupeController::class , 'index']);

Route::resource('/groupe', GroupeController::class);

Route::resource('/formateur', FormateurController::class);

Route::patch('/api/formateur/{id}', [FormateurController::class, 'update']);

// Route::post('/Createformateur',[ FormateurController::class, 'store']);

Route::post('/groupes/find', [GroupeController::class, 'findgrp']);

Route::get('/groupes/spec', [GroupeController::class, 'spec'])->name('spec');

// Recuperer les stagiaires par leur groupe

Route::get('/stagiaire/groupe/{id}', [GroupeController::class , 'StagiaireGroupe']);
