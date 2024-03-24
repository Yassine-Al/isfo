<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('stagiaires', function (Blueprint $table) {
            $table->id();
            $table->integer('Matricule');
            $table->string('Nom');
            $table->string('Prenom');
            $table->string('Sexe');
            $table->date('Date_Naissance');
            $table->string('Lieu_Naissance');
            $table->string('Cin');
            $table->integer('Tel');
            $table->string('Nom_Arabe');
            $table->string('Prenom_Arabe');
            $table->date('Date_Inscription');
            $table->date('Date_Dossier_Complet');
            $table->string('Motif_Admission');

            $table->unsignedBigInteger('Id_Groupe');
            $table->foreign('Id_Groupe')->references('id')->on('groupes');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stagiaires');
    }
};
