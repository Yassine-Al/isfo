<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formateur extends Model
{
    use HasFactory;
    protected $fillable = ['Matricule', 'Nom_Prenom', 'Sexe','Email_Edu'];

    public $timestamps = false;
}
