<?php snippet('header'); ?>

<main class="site__main " id="main">
    <section class="container mx-auto">
        <header class="visually-hidden">
            <h1 ><?= $page->title(); ?></h1>
        </header>
        
        <section class="px-6 pb-12" id="news">
            <?php foreach($page->children() as $news) : ?>
                <article class="pb-4">
                    <h2 class="font-regular"><?= $news->title(); ?></h2>
                    <div class="generated">
                        <?= $news->text()->kt(); ?>
                    </div>
                </article>
            <?php endforeach; ?>
        </section>

            
        
    </section>
</main>
<?php snippet('footer'); ?>