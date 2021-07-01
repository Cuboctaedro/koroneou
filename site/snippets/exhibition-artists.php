<?php

$exhibition = $exhibition ?? $page;
$link_class = $link_class ?? '';
$span_class = $span_class ?? '';

?>
<?php foreach($exhibition->getGalleryArtists() as $artist) : ?>
    <a href="<?= $artist->url(); ?>" class="<?= $link_class ?>"><?= $artist->title(); ?></a>
<?php endforeach; ?>
<?php if ($exhibition->hasOutsideArtists()) : ?>
    <span class="<?= $span_class ?>"><?= $exhibition->getOutsideArtists(); ?></span>
<?php endif; ?>
