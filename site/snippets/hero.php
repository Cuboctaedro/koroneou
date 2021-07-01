<div class="hero">
    <div class="hero__frame">
        <img 
            data-src="<?= $image->thumb(['width' => 1333, 'height' => 680, 'crop' => true])->url(); ?>"
            data-srcset="
            <?= $image->thumb(['width' => 623, 'height' => 623, 'crop' => true])->url(); ?> 623w, 
            <?= $image->thumb(['width' => 751, 'height' => 500, 'crop' => true])->url(); ?> 751w,
            <?= $image->thumb(['width' => 991, 'height' => 1000, 'crop' => true])->url(); ?> 991w,
            <?= $image->thumb(['width' => 1333, 'height' => 680, 'crop' => true])->url(); ?> 1333w,
            <?= $image->thumb(['width' => 1856, 'height' => 930, 'crop' => true])->url(); ?> 1856w,
            " 
            sizes="
            (max-width: 639px) 623w,
            (max-width: 767px) 751w,
            (max-width: 1023px) 991w,
            (max-width: 1365px) 1333w,
            (min-width: 1366px) 1856w,
            "
            class="lazyload" />
    </div>
</div>