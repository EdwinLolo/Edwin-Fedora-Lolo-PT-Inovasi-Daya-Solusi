<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $table = 'transactions';

    protected $fillable = [
        'productID',
        'productName',
        'amount',
        'customerName',
        'status',
        'transactionDate',
        'createBy',
        'createOn',
    ];

    public function status()
    {
        return $this->belongsTo(Status::class, 'status', 'id');
    }
}
