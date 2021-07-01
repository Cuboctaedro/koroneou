<?php
use Kirby\Cms\Page;

class ExhibitionsPage extends Page {

    function selected()
    {
        return $this->children()->find('selected');
    }
}
