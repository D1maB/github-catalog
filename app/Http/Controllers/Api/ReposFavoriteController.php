<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Repo;
use App\Http\Resources\RepoResource;
use App\Http\Requests\StoreRepoRequest;

use App\Models\User;

class ReposFavoriteController extends Controller
{
    public function index()
    {
        $repos = auth()->user()->repos;
        return RepoResource::collection($repos);
    }

    /**
     * @param StoreRepoRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreRepoRequest $request)
    {
        $data = $request->validated();

        $repo_url = $data['html_url'];
        $repo = Repo::where('html_url', $repo_url)->first();

        if(!$repo){
            $repo = Repo::create($data);
        }

        if(!auth()->user()->repos->contains($repo->id)) {
            auth()->user()->repos()->attach($repo);
        } else{
            return response()->json([
                'message' => 'Already in favorites',
            ], 402);
        }

        return response()->json([
            'message' => 'Added to favorites',
            'data' => new RepoResource($repo)
        ], 201);
    }

    public function destroy($id)
    {
        auth()->user()->repos()->detach($id);

        return response()->json([
            'message' => 'Repo has been removed from favorites',
        ], 201);
    }
}
