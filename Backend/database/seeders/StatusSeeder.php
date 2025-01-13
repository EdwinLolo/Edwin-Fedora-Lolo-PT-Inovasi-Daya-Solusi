<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusSeeder extends Seeder
{
    public function run()
    {

        DB::table('status')->updateOrInsert(
            ['id' => 0],
            ['name' => 'SUCCESS', 'created_at' => now(), 'updated_at' => now()]
        );

        DB::table('status')->updateOrInsert(
            ['id' => 1],
            ['name' => 'FAILED', 'created_at' => now(), 'updated_at' => now()]
        );
    }
}
