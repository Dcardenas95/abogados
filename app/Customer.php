<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table='customers';

    protected $fillable = [
        'cedula',
        'nombre',
        'apellido',
        'direccion',
        'telefono',
    ];

    public function caso()
    {
        return $this->hasMany('App\Caso');
    }
}
