<div class="container mx-auto site-nav py-12 uppercase <?php if ($page->isHomePage()) : ?> site-nav--home<?php endif; ?>">
    <div class="flex flex-row flex-wrap">
        <?php if ($page->isHomePage()) : ?>
            <h1 class="px-6 w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 text-lg xl:text-2xl font-normal tracking-wider relative z-10"><?= $site->title(); ?></h1>
        <?php else : ?>
            <a href="<?= $site->url(); ?>" class="px-6 w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 text-lg xl:text-2xl font-normal tracking-wider"><?= $site->title(); ?></a>
        <?php endif; ?>
        <nav class="px-6 w-1/4 sm:w-1/3 md:w-1/2 lg:w-2/3 flex items-center justify-end">
            <button class="relative w-6 h-6 z-50 lg:hidden" type="button" data-burger aria-expanded="false" aria-controls="main-menu">
                <?php snippet('svg/burger'); ?>
                <span class="visually-hidden">Menu</span>
            </button>
            <ul class="main-menu absolute z-40 inset-0 bg-white lg:bg-transparent lg:static flex flex-col lg:flex-row items-center justify-center lg:justify-end w-full" id="main-menu">
                <?php foreach ($site->mainmenu()->toPages() as $link) : ?>
                <li class="menu__item text-base font-light tracking-wide pb-4 lg:pb-0 lg:pl-6">
                    <a href="<?= $link->url(); ?>" class="text-black hover:text-gray-600 transition-colors <?= $link->isOpen() ? ' font-normal' : ''; ?>">
                        <?= $link->title(); ?>
                    </a>
                </li>
                <?php endforeach; ?>
            </ul>
        </nav>
    </div>
</div>
