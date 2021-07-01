<?php

return function ($page, $site, $kirby) {
    
    $represented = $page->children()->filter(function ($child) {
        return $child->type()->value() === 'represented';
    });
    $exhibited = $page->children()->filter(function ($child) {
        return $child->type()->value() === 'exhibited';
    });

    return [
        'represented' => $represented,
        'exhibited' => $exhibited,
    ];
};
