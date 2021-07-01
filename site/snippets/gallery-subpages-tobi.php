<?php if (isset($subpages)) : ?>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-min gap-16 pt-8 grid-flow-row-dense">

    <?php $i = 0; ?>
    
    <?php foreach ($subpages as $subpage) : ?>

        <?php if ($subpage->works()->isNotEmpty()) : ?>

            <?php $j = 0; ?>

            <?php foreach ($subpage->works()->toStructure() as $slide) : ?>

                <?php
                $image = $slide->image()->toFile();
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
                
                <div class="justify-self-stretch self-stretch relative <?= $style ?> <?= $j !== 0 ? 'hidden' : ''; ?>">

                    <div class="w-full relative" style="<?= $pad ?>">

                        <button
                            type="button"
                            class="lightbox absolute w-full h-full inset-0 flex items-center justify-center bg-transparent p-0 "
                            data-type="html"
                            data-target="#image-<?= $i ?>"
                            data-group="<?= $subpage->slug(); ?>"
                        >
                            <img src="<?= $thumb->url(); ?>" class="object-contain w-full h-full" alt="<?= strip_tags($slide->caption()); ?>" />
                        </button>
                    </div>
                    <div class="pt-4 flex justify-center text-sm"><?= $subpage->title(); ?></div>    
                </div>

                <div id="image-<?= $i ?>">
                    <div class="w-full h-full flex items-center justify-center">
                        <figure>
                            <img src="<?= $big->url(); ?>" class="object-contain w-full h-full" alt="<?= strip_tags($slide->caption()); ?>" />
                            <figcaption class="py-4 text-center text-sm"><?= $slide->caption(); ?></figcaption>
                        </figure>
                    </div>        
                </div>

                <?php $j++; ?>

            <?php endforeach; ?>

        <?php endif; ?>

        <?php $i++; ?>

    <?php endforeach; ?>

</div>
<?php endif; ?>