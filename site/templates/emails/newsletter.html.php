<h1>Newsletter Subscription</h1>
<p>Name: <?= $data['name'] ?></p>
<p>Email: <?= $data['email'] ?></p>
<?php if (isset($data['phone'])): ?>
    <p>Phone: <?= $data['phone'] ?></p>
<?php endif; ?>
<?php if (isset($data['address'])): ?>
    <p>Address: <?= $data['address'] ?></p>
<?php endif; ?>
<?php if (isset($data['message'])): ?>
    <p>Message: <?= $data['message'] ?></p>
<?php endif; ?>
