<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CaseLawyer extends Model
{
    protected $table='case_lawyers';

    protected $fillable = [
        'caso_id',
        'lawyer_id',
    ];

    public function caso(){
        return $this->belongsToMany('App\Caso','caso_id');
    }

    public function lawyer(){
        return $this->belongsToMany('App\Lawyer','case_lawyers');
    }
}
