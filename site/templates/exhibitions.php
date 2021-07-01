<?php snippet('header'); ?>

<main class="site__main exhibitions" id="main">
    <div class="container mx-auto">

        <div class="flex flex-row flex-wrap">
            <?php if (isset($currentExhibition)) : ?>
                <section class="w-full lg:w-3/4 px-6 pb-12" id="present">
                    <header class="">
                        <h2 class="section-header">Current Exhibition</h2>
                    </header>
                    <div class="section__content">
                        <?php snippet('exhibition-card', ['exhibition' => $currentExhibition, 'size' => 'lg']); ?>
                    </div>
                </section>
            <?php endif; ?>
                
            <?php if ($futureExhibition) : ?>
                <section class="w-full lg:w-1/4 px-6 pb-12" id="future">
                    <header class="">
                        <h2 class="section-header">Upcoming Exhibition</h2>
                    </header>
                    <div class="">
                        <?php snippet('exhibition-card', ['exhibition' => $futureExhibition, 'size' => 'sm']); ?>
                    </div>
                </section>
            <?php endif; ?>
        </div>
        
        <?php if ($pastExhibitions->isNotEmpty()) : ?>
            <section class="section past" id="past">
                <header class="px-6 pb-12">
                    <h2 class="section-header">Past Exhibitions</h2>
                    <?php
                        $years = $pastExhibitions->pluck('getYear', null, true);
                        rsort($years);
                    ?>
                    <div class="years" id="years">
                            <button class="font-light uppercase tracking-wide text-black hover:text-gray-600 transition-colors" type="button" data-target="all" id="all">All</button>
                        <?php foreach ($years as $year) : ?>
                            <button class="font-light uppercase tracking-wide text-black hover:text-gray-600 transition-colors" type="button" data-target="<?= $year ?>"><?= $year ?></button>
                        <?php endforeach; ?>
                            <a href="<?= $page->selected()->url(); ?>" class="font-light uppercase tracking-wide text-black hover:text-gray-600 transition-colors">1999-1989</a>
                    </div>
                </header>
                <ul class="flex flex-row flex-wrap" id="exhibition-items">
                    <?php foreach ($pastExhibitions as $exhibition) : ?>
                        <li class="w-full sm:w-1/2 xl:w-1/3  px-6 pb-12" data-year="<?= $exhibition->getYear() ?>">
                        <?php snippet('exhibition-card', ['exhibition' => $exhibition, 'size' => 'sm']); ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </section>
        <?php endif; ?>
    
    </div>
</main>
<?php snippet('footer'); ?>