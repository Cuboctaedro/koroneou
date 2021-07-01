<?php
use Kirby\Cms\Page;

class AbcPage extends Page {

    /**
     * Get array from gallery field.
     */
    public function getImagesArray($field) {
        $views = [];
        foreach ($field->toStructure() as $view) {
            $viewarray = [
                'image' => $view->image()->toFile(),
                'caption' => $view->caption()->kt(),
                'inquire' => $view->inquire()->toBool(),
                'worktitle' => $view->worktitle(),
            ];
            $views[] = $viewarray;
        };
        return $views;
    }

    public function hasCoverImage()
    {
        return $this->hasImages() || ($this->hasChildren() && $this->children()->first()->hasImages());
    }
    
    /**
     * Get cover image as file object.
     *
     * @return mixed
     */
    public function getCoverImage()
    {
        if ($this->coverimage()->exists() && $this->coverimage()->isNotEmpty()) {
            return $this->coverimage()->toFile();
        } elseif ($this->hasChildren()) {
            return $this->children()->first()->images()->first();
        } elseif ($this->hasImages()) {
            return $this->images()->first();
        } 
    }

}
