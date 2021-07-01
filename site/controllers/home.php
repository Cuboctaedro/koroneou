<?php

return function ($page, $pages, $kirby) {
    
    $currentExhibitions = $pages->find('exhibitions')->children()->limit(6)->filter(function ($child) {
        return $child->startdate()->toDate() <= time() && $child->enddate()->toDate() >= time();
    });

    $allPastExhibitions = $pages->find('exhibitions')->children()->filter(function ($child) {
        return $child->enddate()->toDate() <= time();
    })->sortBy('getStartDateISO', 'desc');

    if ($currentExhibitions->isNotEmpty()) {
        $currentExhibition = $currentExhibitions->first();
    } else {
        $currentExhibition = $allPastExhibitions->first();
    }

    return [
        'currentExhibition' => $currentExhibition,
    ];
};