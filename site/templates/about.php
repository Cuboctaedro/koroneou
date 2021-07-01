<?php snippet('header'); ?>

<main class="site__main " id="main">
    <article class="container mx-auto">
        <header class="visually-hidden">
            <h1 class="font-regular"><?= $page->title(); ?></h1>
        </header>
        
        <section class="flex flex-row flex-wrap" >
            <div class="px-6 pb-12 w-full lg:w-1/2">
                <div class="generated">
                    <?= $page->text()->kt(); ?>
                </div>
            </div>
            <div class="px-6 pb-12 w-full lg:w-1/2">
                <?php if ($page->hasCoverImage()) : ?>
                    <div class="default__image">
                        <img data-src="<?= $page->getCoverImage()->thumb([
                            'width'   => 600,
                            'crop' => false
                            ])->url(); ?>"
                        class="lazyload" />
                    </div>
                <?php endif; ?>
            </div>
        </section>

    </article>
</main>
<?php snippet('footer'); ?>