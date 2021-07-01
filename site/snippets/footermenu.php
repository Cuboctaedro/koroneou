<?php
    $privacy = $pages->find('privacy-policy');
    $contact = $pages->find('contact');
?>
<footer class="container mx-auto px-6" id="footer">

    <div class="border-t border-solid border-gray-300 pt-2 flex items-center text-sm font-light">

        <?php if ($site->facebook()->isNotEmpty()) : ?>
            <a href="<?= $site->facebook() ?>" target="_blank" class="w-6 h-4 pr-2">
                <?php snippet('svg/facebook.svg'); ?>
                <span class="visually-hidden">Facebook</span>
            </a>
        <?php endif; ?>

        <?php if ($site->instagram()->isNotEmpty()) : ?>
            <a href="<?= $site->instagram() ?>" target="_blank" class="w-6 h-4 pr-2">
                <?php snippet('svg/instagram.svg'); ?>
                <span class="visually-hidden">Instagram</span>
            </a>
        <?php endif; ?>

        <?php if ($site->youtube()->isNotEmpty()) : ?>
            <a href="<?= $site->youtube() ?>" target="_blank" class="w-6 h-4 pr-2">
                <?php snippet('svg/youtube.svg'); ?>
                <span class="visually-hidden">Youtube</span>
            </a>
        <?php endif; ?>

        <?php if ($site->vimeo()->isNotEmpty()) : ?>
            <a href="<?= $site->vimeo() ?>" target="_blank" class="w-6 h-4 pr-2">
                <?php snippet('svg/vimeo.svg'); ?>
                <span class="visually-hidden">Vimeo</span>
            </a>
        <?php endif; ?>

        <?php if ($site->twitter()->isNotEmpty()) : ?>
            <a href="<?= $site->twitter() ?>" target="_blank" class="w-6 h-4 pr-2">
                <?php snippet('svg/twitter.svg'); ?>
                <span class="visually-hidden">Twitter</span>
            </a>
        <?php endif; ?>

        <p class="pr-3">Eleni Koroneou Gallery - All rights reserved 2020</p>

        <?php if (isset($privacy)) : ?>
            <a href="<?= $privacy->url() ?>" class="pr-3">Privacy Policy</a>
        <?php endif; ?>

        <p>Designed by Jason Oikonomou, developed by <a href="https://www.cuboctaedro.eu/" target="_blank">Dimitris Kottas</a></p>

    </div>
</footer>
