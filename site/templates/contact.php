<?php snippet('header'); ?>

<main class="site__main " id="main">
    <article class="container mx-auto">

        <h1 class="visually-hidden"><?= $page->title(); ?></h1>
        
        <section class="flex flex-row flex-wrap" >
            <div class="px-6 pb-12 w-full lg:w-1/3 ">

                <div class="pb-8">
                    <div class="section-header-label">Address</div>
                    <div class="generated"><?= $site->address()->kt() ?></div>
                </div>
                <div class="pb-8">
                    <div class="section-header-label">Telephone</div>
                    <div class="font-light"><?= $site->phone() ?></div>
                </div>
                <div class="pb-8">
                    <div class="section-header-label">Mobile</div>
                    <div class="font-light"><?= $site->mobile() ?></div>
                </div>
                <div class="pb-8">
                    <div class="section-header-label">Email</div>
                    <?php foreach ($site->emails()->toStructure() as $email) : ?>
                        <div class="font-light"><?= $email->name() ?>: <?= $email->mail() ?></div>
                    <?php endforeach; ?>
                </div>
                <div class="pb-8">
                    <div class="section-header-label">Follow us</div>
                    <div class="flex flex-row">
                    
                    <?php if ($site->facebook()->isNotEmpty()) : ?>
                        <a href="<?= $site->facebook() ?>" target="_blank" class="w-6 h-6 mr-3 text-black hover:text-gray-600 transition-colors">
                            <?php snippet('svg/facebook.svg'); ?>
                            <span class="visually-hidden">Facebook</span>
                        </a>
                    <?php endif; ?>
                    
                    <?php if ($site->instagram()->isNotEmpty()) : ?>
                        <a href="<?= $site->instagram() ?>" target="_blank" class="w-6 h-6 mr-3 text-black hover:text-gray-600 transition-colors">
                            <?php snippet('svg/instagram.svg'); ?>
                            <span class="visually-hidden">Instagram</span>
                        </a>
                    <?php endif; ?>
                        
                    <?php if ($site->twitter()->isNotEmpty()) : ?>
                        <a href="<?= $site->twitter() ?>" target="_blank" class="w-6 h-6 mr-3 text-black hover:text-gray-600 transition-colors">
                            <?php snippet('svg/twitter.svg'); ?>
                            <span class="visually-hidden">Twitter</span>
                        </a>
                    <?php endif; ?>
                         
                    <?php if ($site->youtube()->isNotEmpty()) : ?>
                        <a href="<?= $site->youtube() ?>" target="_blank" class="w-6 h-6 mr-3 text-black hover:text-gray-600 transition-colors">
                            <?php snippet('svg/youtube.svg'); ?>
                            <span class="visually-hidden">Youtube</span>
                        </a>
                    <?php endif; ?>
                          
                    <?php if ($site->vimeo()->isNotEmpty()) : ?>
                        <a href="<?= $site->vimeo() ?>" target="_blank" class="w-6 h-6 mr-3 text-black hover:text-gray-600 transition-colors">
                            <?php snippet('svg/vimeo.svg'); ?>
                            <span class="visually-hidden">Vimeo</span>
                        </a>
                    <?php endif; ?>
                           
                    <?php if ($site->linkedin()->isNotEmpty()) : ?>
                        <a href="<?= $site->linkedin() ?>" target="_blank" class="w-6 h-6 mr-3 text-black hover:text-gray-600 transition-colors">
                            <?php snippet('svg/linkedin.svg'); ?>
                            <span class="visually-hidden">Linkedin</span>
                        </a>
                    <?php endif; ?>
            
                   </div>
                </div>
                <div class="pb-8">
                    <div class="section-header-label">Opening Hours</div>
                    <div class="generated"><?= $site->hours()->kt() ?></div>
                </div>
                <div class="pb-8">
                    <div class="section-header-label">Getting to the gallery</div>
                    <div class="generated"><?= $site->directions()->kt() ?></div>
                </div>
            </div>
            <div class="px-6 pb-12 w-full lg:w-2/3">
                <style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.1431493210334!2d23.71217961566541!3d37.973788479723716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bce000b7429d%3A0x4698b6865740a042!2sEleni+Koroneou+Gallery!5e0!3m2!1sen!2sus!4v1542282702487' width='600' height='450' frameborder='0' style='border:0' allowfullscreen></iframe></div>
            </div>

        </section>

    </article>
</main>
<?php snippet('footer'); ?>