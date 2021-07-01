<?php

return function ($page, $site, $kirby) {
    
    $currentExhibitions = $page->children()->limit(6)->filter(function ($child) {
        return $child->startdate()->toDate() <= time() && $child->enddate()->toDate() >= time() && $child->intendedTemplate()->name() === 'exhibition';
    });

    $allPastExhibitions = $page->children()->filter(function ($child) {
        return $child->enddate()->toDate() <= time() && $child->intendedTemplate()->name() === 'exhibition';
    })->sortBy('getStartDateISO', 'desc');

    if ($currentExhibitions->isNotEmpty()) {
        $currentExhibition = $currentExhibitions->first();
        $pastExhibitions = $allPastExhibitions;
    } else {
        $currentExhibition = $allPastExhibitions->first();
        $pastExhibitions = $allPastExhibitions->not($currentExhibition->id());
    }

    $futureExhibitions = $page->children()->limit(2)->filter(function ($child) {
        return $child->startdate()->toDate() >= time() && $child->intendedTemplate()->name() === 'exhibition';
    });

    if ($futureExhibitions->isNotEmpty()) {
        $futureExhibition = $futureExhibitions->first();
    } else {
        $futureExhibition = false;
    }

    return [
        'currentExhibition' => $currentExhibition,
        'futureExhibition' => $futureExhibition,
        'pastExhibitions' => $pastExhibitions,
    ];
};
