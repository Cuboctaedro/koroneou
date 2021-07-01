<?php

use Uniform\Form;

return function ($kirby)
{
    $inquire_form = new Form([
        'name' => [
            'rules' => ['required'],
            'message' => 'Please enter your name',
        ],
        'email' => [
            'rules' => ['required', 'email'],
            'message' => 'Please enter a valid email address',
        ],
        'artwork',
        'message',
    ]);

    if ($kirby->request()->is('POST')) {
        $inquire_form->honeypotGuard()
        ->emailAction([
            'to'   => 'info@koroneougallery.com',
            'from' => 'info@koroneougallery.com',
        ]);
    }

    return compact('inquire_form');
};