<?php

namespace App\Http\Controllers;

use App\Models\Formateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FormateurController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $formateurs = Formateur::all();
        return $formateurs;
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
        Formateur::create($request->post());
        return response()->json([
            'message' => 'Hello world'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Formateur $formateur)
    {
        $info = DB::table('formateurs')->where('id',$formateur->id)->get();
        return $info;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Formateur $formateur)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Formateur $formateur)
    {
        // $updateFormateur = DB::table('formateurs')
        //                         ->where('id', $formateur->id)
        //                         ->update([
        //                             'Matricule' => $request->Matricule,
        //                             'Nom_Prenom' => $request->Nom_Prenom,
        //                             'Email_Edu' => $request->Email_Edu,
        //                             'Email' => $request->Email,
        //                             'Tel' => $request->Tel,
        //                         ]);

        $formateur->Matricule = $request->Matricule;
        $formateur->Nom_Prenom = $request->Nom_Prenom;
        $formateur->Email_Edu = $request->Email_Edu;
        $formateur->Email = $request->Email ;
        $formateur->Tel = $request->Tel ;
        $formateur->save();

            return $formateur;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Formateur $formateur)
    {
        //
    }
}
