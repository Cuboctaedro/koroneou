Newsletter Subscription
Name: <?= $data['name'] ?>
Email: <?= $data['email'] ?>
<?php if (isset($data['phone'])): ?>
    Phone: <?= $data['phone'] ?>
<?php endif; ?>
<?php if (isset($data['address'])): ?>
    Address: <?= $data['address'] ?>
<?php endif; ?>
<?php if (isset($data['message'])): ?>
    Message: <?= $data['message'] ?>
<?php endif; ?>
