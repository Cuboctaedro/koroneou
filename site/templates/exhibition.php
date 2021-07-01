<?php snippet('header'); ?>

<main class="site__main" id="main">
    <article class="exhibition page container mx-auto">
        
        <div class="px-6 pb-1">
            <?php 
            if ($page->hasCoverImage()) {
                snippet('hero', ['image' => $page->getCoverImage()]);
            };
            ?>
        </div>
        
        <header class="flex flex-col lg:flex-row justify-between">
            <div class="w-full lg:w-2/3 px-6 lg:pb-12">
                <?php if ($page->isSingleArtist()) : ?>
                    <h1 class="font-regular text-xl">
                        <?= $page->artists()->toPages()->first()->title() ?>
                    </h1>
                    <h3 class="font-light text-sm"><?= $page->title(); ?></h3>
                <?php else : ?>
                    <h1 class="font-regular text-xl"><?= $page->title(); ?></h1>
                    <h3 class="font-light text-sm"><?= $page->printArtists(); ?></h3>
                <?php endif; ?>
            </div>
            <div class="w-full lg:w-1/3 lg:text-right px-6 pb-12">
                <span class="font-light text-sm "><?= $page->getStartDate(); ?> - <?= $page->getEndDate(); ?></span>
            </div>

        </header>

        <div class="px-6 pb-12" data-tabs>
        
            <ul role="tablist" class="tabs flex flex-wrap items-center justify-start border-b border-solid border-gray-300 mb-3">  
                
                <li role="presentation" class="pr-4">
                    <a role="tab" href="#installation-views" id="installation-views-tab" aria-selected="true" class="tab-control">
                        Installation Views
                    </a>
                </li>

                <?php if ($page->artworks()->exists() && $page->artworks()->isNotEmpty()) : ?>
                    <li role="presentation" class="pr-4">
                        <a role="tab" href="#artworks" id="artworks-tab" class="tab-control">
                            Artworks
                        </a>
                    </li>
                <?php endif; ?>
                
                <li role="presentation" class="pr-4">
                    <a role="tab" href="#press" id="press-tab" class="tab-control">
                        Press Release
                    </a>
                </li>

                <?php if ($page->videoembed()->exists() && $page->videoembed()->isNotEmpty()) : ?>
                    <li role="presentation">
                        <a role="tab" href="#video" id="video-tab" class="tab-control">
                            Video
                        </a>
                    </li>
                <?php endif; ?>
            </ul>

            <section role="tabpanel" id="installation-views" aria-labelledby="installation-views-tab">  
                <?php snippet('gallery-tobi', ['gallery' => $page->getInstallationViews(), 'id' => 'views-gallery']); ?>
            </section>

            <?php if ($page->artworks()->exists() && $page->artworks()->isNotEmpty()) : ?>
                <section role="tabpanel" id="artworks" aria-labelledby="artworks-tab" hidden>
                    <?php snippet('gallery-tobi', ['gallery' => $page->getArtworks(), 'id' => 'artworks-gallery']); ?>
                </section>
            <?php endif; ?>

            <section role="tabpanel" id="press" aria-labelledby="press-tab" hidden>
                <div class="generated">
                    <?= $page->pressrelease()->kt(); ?>
                </div>
            </section>

            <?php if ($page->videoembed()->exists() && $page->videoembed()->isNotEmpty()) : ?>
                <section role="tabpanel" id="video" aria-labelledby="video-tab" hidden>
                    <?= $page->videoembed(); ?>
                </section>
            <?php endif; ?>

        </div>


    </article>
</main>

<?php snippet('footer'); ?>
