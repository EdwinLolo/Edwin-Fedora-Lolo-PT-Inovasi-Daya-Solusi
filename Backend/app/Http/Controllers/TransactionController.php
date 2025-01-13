<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\Status;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    // Mendapatkan semua transaksi dengan grouping berdasarkan tahun & bulan
    public function index()
    {
        $transactions = Transaction::all()
            ->groupBy(function ($item) {
                return date('Y-m', strtotime($item->transactionDate));
            });

        return response()->json($transactions);
    }

    // Menampilkan detail transaksi
    public function show($id)
    {
        $transaction = Transaction::find($id);

        if (!$transaction) {
            return response()->json(['message' => 'Transaction not found'], 404);
        }

        return response()->json($transaction);
    }

    // Menambahkan transaksi baru
    public function store(Request $request)
    {
        $validated = $request->validate([
            'productID' => 'required|string',
            'productName' => 'required|string',
            'amount' => 'required|numeric',
            'customerName' => 'required|string',
            'status' => 'required|integer|exists:status,id',
            'transactionDate' => 'required|date',
            'createBy' => 'required|string',
            'createOn' => 'required|date',
        ]);

        $transaction = Transaction::create($validated);

        return response()->json($transaction, 201);
    }

    // Mengedit transaksi
    public function update(Request $request, $id)
    {
        $transaction = Transaction::find($id);

        if (!$transaction) {
            return response()->json(['message' => 'Transaction not found'], 404);
        }

        $validated = $request->validate([
            'productID' => 'required|string',
            'productName' => 'required|string',
            'amount' => 'required|numeric',
            'customerName' => 'required|string',
            'status' => 'required|integer|exists:status,id',
            'transactionDate' => 'required|date',
            'createBy' => 'required|string',
            'createOn' => 'required|date',
        ]);

        $transaction->update($validated);

        return response()->json($transaction);
    }

    // Menghapus transaksi
    public function destroy($id)
    {
        $transaction = Transaction::find($id);

        if (!$transaction) {
            return response()->json(['message' => 'Transaction not found'], 404);
        }

        $transaction->delete();

        return response()->json(['message' => 'Transaction deleted successfully']);
    }
}
