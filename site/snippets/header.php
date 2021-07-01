<!doctype html>
<html lang="en_US">
<head>
    <title><?= e(!$page->isHomePage(), $page->title(). ' | ' , '') ?><?= $site->title() ?></title>
    <meta name="description" content="<?= $page->metadescription()?>">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="canonical" href="<?= $page->url() ?>"/>

    <?php snippet('meta');?>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">
    <?= css('assets/app.css') ?>
    <?= js('assets/app.js', ['defer' => true]) ?>
</head>

<body>
    <a class="skip-link" href="#main">Skip to content</a>

        <?php snippet('navbar'); ?>
        <div class="site" id="site">
