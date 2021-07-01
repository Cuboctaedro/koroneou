<?php snippet('header'); ?>

<?php
$exhibitions = $site->find('exhibitions')->children()->filter(function ($child) use ($page) {
    return $child->getGalleryArtists()->has($page);
});
?>
<main class="site__main" id="main">
    <article class="container mx-auto">
        <header class="artist__header px-6 pb-12">
            <h1 class="font-regular text-xl"><?= $page->title(); ?></h1>
        </header>

        <div class="tabs  pb-12" data-tabs>

            <div class="px-6">

                <ul role="tablist" class="tabs flex flex-wrap items-center justify-start border-b border-solid border-gray-300 mb-3 ">

                    <li role="presentation" class="pr-4">
                        <a role="tab" href="#works" id="works-tab" aria-selected="true" class="tab-control">
                            Artworks
                        </a>
                    </li>

                    <li role="presentation" class="pr-4">
                        <a role="tab" href="#bio" id="bio-tab" class="tab-control">
                            Biography
                        </a>
                    </li>

                    <li role="presentation" class="pr-4">
                        <a role="tab" href="#exhibitions" id="exhibitions-tab" class="tab-control">
                            Exhibitions
                        </a>
                    </li>
                </ul>

            </div>

            <section role="tabpanel" id="works" aria-labelledby="works-tab">
                <div class="px-6">
                    <?php
                    if ($page->hasChildren()) {
                        snippet('gallery-subpages-tobi', ['subpages' => $page->children()]);
                    } else {
                        snippet('gallery-tobi', ['gallery' => $page->getArtworks(), 'id' => 'works-gallery']);
                    }
                    ?>
                </div>
            </section>

            <section role="tabpanel" id="bio" aria-labelledby="bio-tab">
                <div class="px-6">
                    <div class="generated">
                        <?= $page->biography()->kt(); ?>
                    </div>
                </div>
            </section>

            <section role="tabpanel" id="exhibitions" aria-labelledby="exhibitions-tab">  
                <ul class="flex flex-row flex-wrap" id="exhibition-items">
                    <?php foreach ($exhibitions as $exhibition) : ?>
                        <li class="w-full sm:w-1/2 xl:w-1/3  px-6 pb-12">
                            <?php snippet('exhibition-card', ['exhibition' => $exhibition, 'size' => 'sm']); ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </section>

        </div>
               
    </article>
</main>

<?php snippet('footer'); ?>