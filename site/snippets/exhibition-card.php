<article class="">
    
    <div class="relative overflow-hidden" style="padding-top:61%;">
        <a class="absolute inset-0" href="<?= $exhibition->url(); ?>" title="<?= $exhibition->title(); ?>">
            <?php if ($exhibition->hasCoverImage()) : ?>
                <?php if ($size === 'lg') : ?>
                    <img data-src="<?= $exhibition->getCoverImage()->thumb([
                        'width'   => 1200,
                        'height'  => 744,
                        'crop' => true
                        ])->url(); ?>"
                    class="lazyload" />
                <?php else : ?>
                    <img data-src="<?= $exhibition->getCoverImage()->thumb([
                        'width'   => 500,
                        'height'  => 310,
                        'crop' => true
                        ])->url(); ?>"
                    class="lazyload" />
                <?php endif; ?>
            <?php endif; ?>
        </a>            
    </div>

    <div class="pt-2">
        <?php if ($exhibition->isSingleArtist()) : ?>
            <h3 class="font-regular <?php if ($size === 'lg') : ?> text-lg <?php endif; ?>">
                <?= $exhibition->printArtists() ?>
            </h3>
            <h4 class="font-light text-sm"><?= $exhibition->title(); ?></h4>
        <?php else : ?>
            <h3 class="font-regular <?php if ($size === 'lg') : ?> text-lg <?php endif; ?>"><?= $exhibition->title(); ?></h3>
            <h4 class="font-light text-sm"><?= $exhibition->printArtists(); ?></h4>
        <?php endif; ?>
        <div class="font-light text-sm"><?= $exhibition->getStartDate(); ?> - <?= $exhibition->getEndDate(); ?></div>    
    
</article>