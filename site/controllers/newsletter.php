<?php

use Uniform\Form;

return function ($kirby)
{
    $form = new Form([
        'name' => [
            'rules' => ['required'],
            'message' => 'Please enter your name',
        ],
        'email' => [
            'rules' => ['required', 'email'],
            'message' => 'Please enter a valid email address',
        ],
        'phone' => [],
        'address' => [],
        'message' => [],
    ]);

    if ($kirby->request()->is('POST')) {
        $form->honeypotGuard()
        ->emailAction([
            'to'   => 'info@koroneougallery.com',
            'from' => 'info@koroneougallery.com',
            'subject' => 'Newsletter Subscription',
            'template' => 'newsletter',
        ]);
    }

    return compact('form');
};