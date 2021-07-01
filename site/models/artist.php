<?php

class ArtistPage extends AbcPage
{

    
    /**
     * Get artworks
     */
    public function getArtworks()
    {
        return $this->getImagesArray($this->works());
    }

}