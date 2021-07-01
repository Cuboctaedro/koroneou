<?php if (isset($gallery) && is_array($gallery)) : ?>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-min gap-16 pt-8 grid-flow-row-dense">

    <?php foreach ($gallery as $i => $slide) : ?>

        <?php
        $image = $slide['image'];
        $size = 'square';
        $pad = 'padding-top:100%;';
        $style = '';
        $thumb = $image->thumb([
            'width' => 360,
            'height' => 360,
            'crop' => false,
        ]);
        $big = $image->resize(1400, 1000, 90);
        if ($image->height() > 1.7 * $image->width()) {
            $size = 'tall';
            $pad = 'padding-top:calc(200% + 4rem);';
            $style = 'row-span-2';
            $thumb = $image->thumb([
                'width' => 360,
                'height' => 752,
                'crop' => false,
            ]);
        }
        if ($image->width() > 1.7 * $image->height()) {
            $size = 'wide';
            $style = 'md:col-span-2';
            $pad = 'padding-top:calc(50% - 2rem);';
            $thumb = $image->thumb([
                'width' => 752,
                'height' => 360,
                'crop' => false,
            ]);
        }
        ?>
        <div class="justify-self-stretch self-stretch relative <?= $style ?>">

            <div class="w-full relative " style="<?= $pad ?>">

                <button
                    type="button"
                    class="lightbox absolute bottom-6 left-3 right-3 top-0 flex items-center justify-center bg-transparent p-0 "
                    data-type="html"
                    data-target="#image-<?= $i ?>"
                    data-group="<?= $id ?>"
                >
                    <img src="<?= $thumb->url(); ?>" class="object-contain w-full h-full" alt="<?= strip_tags($slide['caption']); ?>" />
                </button>

            </div>        
        </div>
        <div id="image-<?= $i ?>">
            <div class="w-full h-full flex items-center justify-center">
                <figure>
                    <img src="<?= $big->url(); ?>" class="object-contain w-full h-full" alt="<?= strip_tags($slide['caption']); ?>" />
                    <figcaption class="py-4 text-center text-sm"><?= $slide['caption']; ?></figcaption>
                </figure>
                <?php if ( $slide['inquire'] && $slide['worktitle'] ) : ?>

                    <button
                        type="button"
                        data-inquire="inquire-<?= $i ?>"
                        class="absolute block bottom-6 bg-black hover:bg-gray-600 transition-colors px-3 py-1 text-white text-sm"
                    >
                        Inquire
                    </button>
                <?php endif; ?>

            </div>     
        </div>

        <?php if ( $slide['inquire'] && $slide['worktitle'] ) : ?>
        <?php snippet('inquire', ['id' => $i, 'work_title' => $slide['worktitle'] ]); ?>
        <?php endif; ?>
    <?php endforeach; ?>

</div>
<?php endif; ?>