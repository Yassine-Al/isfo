<?php

namespace App\Http\Controllers;

use App\Models\Groupe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;

class GroupeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        return response()->json(['success' => true]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Groupe $groupe)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Groupe $groupe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Groupe $groupe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Groupe $groupe)
    {
        //
    }

    public function findgrp(Request $request){
        $annee = $request->Annee;
        $secteur = $request->Secteur;
        $result = DB::table('groupes')->where('Annee',$annee)->where('Secteur',$secteur)->get();
        return $result;
    }

    public function StagiaireGroupe(Request $request){
        $stagiaires = DB::table('groupes')
                        ->join('stagiaires' , 'stagiaires.Id_Groupe' , 'groupes.Id_Groupe')
                        ->where('groupes.id', $request->id)
                        ->orderBy('stagiaires.Nom')
                        ->select()
                        ->get();
        return $stagiaires;
    }

}
