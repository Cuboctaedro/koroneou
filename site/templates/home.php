<?php snippet('header'); ?>

<main class="site__main min-h-screen" id="main">
        
        <a class="absolute top-0 left-0 right-0 bottom-24 z-0 overflow-hidden" href="<?= $currentExhibition->url(); ?>">
            <?php if ($currentExhibition->hasCoverImage()) : ?>
            <?php $image = $currentExhibition->getCoverImage(); ?>
                <img 
                    src="<?= $image->thumb(['width' => 1333, 'height' => 680, 'crop' => true])->url(); ?>"
                    srcset="
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
                    class="object-cover object-center"
                />
            <?php endif; ?>
        </a>
        
    <article class="home-content absolute bottom-0 h-24 left-0 right-0 pt-4">
        <section class="container mx-auto flex flex-col lg:flex-row justify-between ">
            <div class="w-full lg:w-2/3 px-6 lg:pb-12">
                <?php if ($currentExhibition->isSingleArtist()) : ?>
                    <h2 class="font-regular text-xl">
                        <?= $currentExhibition->artists()->toPages()->first()->title() ?>
                    </h2>
                    <h3 class="font-light text-sm"><?= $currentExhibition->title(); ?></h3>
                <?php else : ?>
                    <h2 class="font-regular text-xl"><?= $currentExhibition->title(); ?></h2>
                    <h3 class="font-light text-sm"><?= $currentExhibition->printArtists(); ?></h3>
                <?php endif; ?>
            </div>
            <div class="w-full lg:w-1/3 lg:text-right px-6 pb-12">
                <span class="font-light text-sm"><?= $currentExhibition->getFormatedDates(); ?></span>
            </div>

        </section>



    </article>
</main>

<?php snippet('footer'); ?>
