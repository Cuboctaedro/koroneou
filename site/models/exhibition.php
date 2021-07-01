<?php

class ExhibitionPage extends AbcPage {

    /**
     * Get start date for sorting.
     *
     * @return string
     */
    public function getStartDateISO()
    {
        return $this->startdate()->toDate();
    }

    /**
     * Get start date for template.
     *
     * @return string
     */
    public function getStartDate()
    {
        return $this->startdate()->toDate(option('date.format'));
    }

    /**
     * Get finish date for template.
     *
     * @return string
     */
    public function getEndDate()
    {
        return $this->enddate()->toDate(option('date.format'));
    }

    /**
     * Get year
     */
    public function getYear()
    {
        return $this->startdate()->toDate('%G');
    }

    /**
     * Get pages collection of gallery artits.
     *
     * @return array
     */
    public function getGalleryArtists()
    {
        return $this->artists()->toPages();
    }

    private function hasArtistsList()
    {
        return $this->artislslist()->exists() && $this->artislslist()->isNotEmpty();
    }

    private function artistsList()
    {
        if ($this->hasArtistsList()) {
            $artistarray = [];
            foreach ($this->artislslist()->yaml() as $name) {
                $artistarray[] = $name;
            }
            return $artistarray;
        }
    }

    private function hasOtherArtists()
    {
        return $this->otherartists()->exists() && $this->otherartists()->isNotEmpty();
    }

    private function getOtherArtists()
    {
        if ($this->hasOtherArtists()) {
            return $this->otherartists()->kt();
        }
    }

    /**
     * Check for other artists.
     *
     * @return bool
     */
    public function hasOutsideArtists()
    {
        return $this->hasArtistsList() || $this->hasOtherArtists();
    }

    /**
     * Get string of other artists for template.
     *
     * @return string
     */
    public function getOutsideArtists()
    {
        $artistsNames = '';
        if ($this->hasArtistsList()) {
            foreach ($this->artislslist()->yaml() as $i => $name) {
                if ($i === 0) {
                    $artistsNames = $artistsNames . $name;
                } else {
                    $artistsNames = $artistsNames . ', ' . $name;
                }
            }
            return $artistsNames;
        } elseif ($this->hasOtherArtists()) {
            $artistsNames = $this->getOtherArtists();
        }
        return $artistsNames;
    }


    /**
     * Check for cover image.
     *
     * @return bool
     */
    public function hasCoverImage()
    {
        return $this->hasImages();
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
        } elseif ($this->hasImages()) {
            return $this->images()->first();
        }
    }

    /**
     * Get images for the installation views tab
     */
    public function getInstallationViews()
    {
        if ($this->views()->exists() && $this->views()->isNotEmpty()) {
            return $this->getImagesArray($this->views());
        }
        else {
            $views = [];
            foreach( $this->images() as $image) {
                $imagearray = [
                    'image' => $image,
                    'caption' => $image->description(),
                    'inquire' => false,
                ];
                $views[] = $imagearray;
            }
        }
        return $views;
    }

    /**
     * Get artworks
     */
    public function getArtworks()
    {
        return $this->getImagesArray($this->artworks());
    }

    public function isSingleArtist()
    {
        return $this->artists()->toPages()->count() === 1;
    }

    public function printArtists()
    {
        $galleryArtists = $this->artists()->toPages();
        $total = $galleryArtists->count();
        $artists = '';
        $i = 1;
        foreach ($galleryArtists as $artist) {
            $artists = $artists . $artist->title();
            if ($i < $total) {
                $artists = $artists . ', ';
            }
            $i++;
        }
        if ($this->hasOutsideArtists()) {
            $artists = $artists . ', ' . strip_tags($this->getOutsideArtists());
        }
        return $artists;
    }
}