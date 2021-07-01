<?php snippet('header'); ?>

<main class="site__main " id="main">
    <section class="container mx-auto">
        <header class="visually-hidden">
            <h1><?= $page->title(); ?></h1>
        </header>
        
        <section class="" >
            <div class="section__content ">
            <?php if ($form->success()) : ?>
                <div class="pb-12">
                    <div class="generated"><?= $page->success_message()->kt(); ?></div>
                </div>
            <?php else : ?>
                <form action="<?php echo $page->url() ?>" method="POST">
                    
                    <div class="flex flex-row flex-wrap items-center pb-8">
                        <label class="w-full lg:w-1/4 section-header-label px-6 pb-1 lg:pb-0 lg:text-right" for="name">Name</label>
                        <div class="w-full lg:w-3/4 px-6">
                            <input class="w-full h-8 border-gray-200 border-solid border px-1 py-0 rounded-none" name="name" type="text" id="name" value="<?= $form->old('name'); ?>">
                            <?php if ($form->error('name')) : ?>
                                <p class="text-sm text-red-700"><?= implode('<br>', $form->error('name')) ?></p>
                            <?php endif; ?>

                        </div>
                    </div>

                    <div class="flex flex-row flex-wrap items-center pb-8">
                        <label class="w-full lg:w-1/4 section-header-label px-6 pb-1 lg:pb-0 lg:text-right" for="email">Email</label>
                        <div class="w-full lg:w-3/4 px-6">
                            <input class="w-full h-8 border-gray-200 border-solid border px-1 py-0 rounded-none" name="email" type="text" id="email" value="<?= $form->old('email'); ?>">
                            <?php if ($form->error('email')) : ?>
                                <p class="text-sm text-red-700"><?= implode('<br>', $form->error('email')) ?></p>
                            <?php endif; ?>

                        </div>
                    </div>
 
                    <div class="flex flex-row flex-wrap items-center pb-8">
                        <label class="w-full lg:w-1/4 section-header-label px-6 pb-1 lg:pb-0 lg:text-right" for="phone">Phone</label>
                        <div class="w-full lg:w-3/4 px-6">
                            <input class="w-full h-8 border-gray-200 border-solid border px-1 py-0 rounded-none" name="phone" type="text" id="phone" value="<?= $form->old('phone'); ?>">
                            <?php if ($form->error('phone')) : ?>
                                <p class="text-sm text-red-700"><?= implode('<br>', $form->error('phone')) ?></p>
                            <?php endif; ?>

                        </div>
                    </div>
  
                    <div class="flex flex-row flex-wrap items-center pb-8">
                        <label class="w-full lg:w-1/4 section-header-label px-6 pb-1 lg:pb-0 lg:text-right" for="phone">Address</label>
                        <div class="w-full lg:w-3/4 px-6">
                            <input class="w-full h-8 border-gray-200 border-solid border px-1 py-0 rounded-none" name="address" type="text" id="address" value="<?= $form->old('address'); ?>">
                            <?php if ($form->error('address')) : ?>
                                <p class="text-sm text-red-700"><?= implode('<br>', $form->error('address')) ?></p>
                            <?php endif; ?>

                        </div>
                    </div>
  
                    <div class="flex flex-row flex-wrap items-start pb-8">
                        <label class="w-full lg:w-1/4 section-header-label px-6 pb-1 lg:pb-0 lg:pt-1 lg:text-right" for="message">Message</label>
                        <div class="w-full lg:w-3/4 px-6">
                            <textarea class=" w-full border-gray-200 border-solid border px-1 py-0 rounded-none" name="message" id="message" rows="5"><?= $form->old('message'); ?></textarea>
                        </div>
                    </div>

                    <div class="flex flex-row flex-wrap items-center pb-8">
                        <?= csrf_field(); ?>
                        <?= honeypot_field(); ?>
                        <div class="w-full px-6 flex justify-end">
                            <input class="h-12 bg-black hover:bg-gray-700 transition-colors text-white uppercase rounded-none px-6 cursor-pointer" type="submit" value="Submit">

                        </div>
                    </div>
                </form>
            <?php endif; ?>
            </div>
        </section>

            
        
    </section>
</main>
<?php snippet('footer'); ?>