<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Repo extends Model
{
    protected $fillable = [
        'name',
        'html_url',
        'description',
        'owner_login',
        'stargazers_count',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
