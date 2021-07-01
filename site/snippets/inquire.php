
    <aside id="inquire-<?= $id ?>" class="inquire w-full sm:w-96 fixed top-0 left-0 bottom-0 p-6 shadow-xl bg-white" style="z-index:1500;">

        <button type="button" class="absolute top-6 right-4 w-6 h-6" data-inquire-close="inquire-<?= $id ?>" >
            <?php snippet('svg/close'); ?>
        </button>

        <header class="w-full pb-12">
            <h2 class="font-normal text-lg pb-6">Inquire</h2>
            <h3 class="font-light"><?= $work_title ?></h3>
        </header>

        <?php if ($inquire_form->success()) : ?>

            <div class="py-4 generated">
                Your message has been sent. We will contact you soon.
            </div>
        <?php else : ?>

            <form action="" method="post">

                <?= csrf_field(); ?>
                <?= honeypot_field(); ?>

                <label for="name" class="text-sm pb-1">Name</label>
                <input type="text" id="name" name="name" class="h-8 border border-gray-300 border-solid w-full" value="<?= $inquire_form->old('name'); ?>" />

                <label for="email" class="text-sm pb-1 pt-6 block">Email</label>
                <input type="text" id="email" name="email" class="h-8 border border-gray-300 border-solid w-full" value="<?= $inquire_form->old('email'); ?>" />

                <label for="message" class="text-sm pb-1 pt-6 block">Message</label>
                <textarea id="message" name="message" class="border border-gray-300 border-solid w-full" ><?= $inquire_form->old('message'); ?></textarea>

                <input type="hidden" name="artwork" value="<?= $work_title ?>" />

                <button type="submit" class="mt-6 px-3 py-2 bg-black text-white hover:bg-gray-600 transition-colors">Submit</button>

            </form>

        <?php endif; ?>   

    </aside>

