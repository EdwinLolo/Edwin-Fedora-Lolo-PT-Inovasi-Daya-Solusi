<?php

use App\Http\Controllers\TransactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/transactions', [TransactionController::class, 'index']); // Menampilkan semua transaksi (group by year & month)
Route::get('/transactions/{id}', [TransactionController::class, 'show']); // Menampilkan detail transaksi
Route::post('/transactions', [TransactionController::class, 'store']); // Menambahkan transaksi baru
Route::put('/transactions/{id}', [TransactionController::class, 'update']); // Mengedit transaksi
Route::delete('/transactions/{id}', [TransactionController::class, 'destroy']); // Menghapus transaksi


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
