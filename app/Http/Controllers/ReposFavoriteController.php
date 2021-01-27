<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Repo;

class ReposFavoriteController extends Controller
{

    public function index()
    {
        $repos = auth()->user()->repos;
        dd($repos->toArray());
        //return 123;
    }


    public function store(Request $request)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
