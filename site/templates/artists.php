<?php snippet('header'); ?>
<main class="site__main artists" id="main">
    <section class="page">
        <div class="container mx-auto">
        <?php
        $repr_total = count($represented);
        if ($repr_total > 0) :
            $repr_half = ceil($repr_total / 2);
            $repr_columns = $represented->chunk($repr_half);
        ?>

            <section class="w-full  pb-12 represented " id="represented">
                <header class="px-6">
                    <h2 class="section-header-label pb-8">Represented Artists</h2>
                </header>
                <div class="flex flex-row flex-wrap">
                    <?php foreach ($repr_columns as $column) : ?>
                        <div class="w-full px-6 lg:w-1/2 relative">
                            <?php foreach ($column as $artist) : ?>
                                <article class="pb-3 ">
                                    <h4 class="font-light">
                                        <a class="artist__link text-black hover:text-gray-600 transition-colors" href="<?= $artist->url(); ?>">
                                            <?= $artist->title(); ?>
                                            <?php if ($artist->hasCoverImage()) : ?>
                                                <div class="artist__image absolute top-0 right-0 px-6 transition-opacity">
                                                    <img src="<?= $artist->getCoverImage()->thumb(['width' => 240])->url(); ?>"/>
                                                </div>
                                            <?php endif; ?> 
                                        </a>
                                    </h4>
                                </article>
                            <?php endforeach; ?>
                        </div>
                    <?php endforeach; ?>

                </ul>
            </section>
        <?php endif; ?>
        
        <?php
        $exhib_total = count($exhibited);
        if ($exhib_total > 0) :
            $exhib_half = ceil($exhib_total / 2);
            $exhib_columns = $exhibited->chunk($exhib_half);
        ?>
            <section class="w-full pb-12 exhibited" id="exhibited">
                <header class="px-6">
                    <h2 class="section-header-label pb-8">Exhibited Artists</h2>
                </header>
                <div class="flex flex-row flex-wrap">
                    <?php foreach ($exhib_columns as $column) : ?>
                        <div class="w-full px-6 lg:w-1/2 relative">
                            <?php foreach ($column as $artist) : ?>
                                <article class="pb-3">
                                    <h4 class="font-light">
                                        <a class="artist__link text-black hover:text-gray-600 transition-colors" href="<?= $artist->url(); ?>">
                                            <?= $artist->title(); ?>
                                            <?php if ($artist->hasCoverImage()) : ?>
                                                <div class="artist__image absolute top-0 right-0 px-6 transition-opacity">
                                                    <img src="<?= $artist->getCoverImage()->thumb(['width' => 240])->url(); ?>"/>
                                                </div>
                                            <?php endif; ?> 
                                        </a>
                                    </h4>
                                </article>
                            <?php endforeach; ?>
                        </div>
                    <?php endforeach; ?>
                </div>
            </section>
        <?php endif; ?>
        </div>
   </section>
</main>
<?php snippet('footer'); ?>