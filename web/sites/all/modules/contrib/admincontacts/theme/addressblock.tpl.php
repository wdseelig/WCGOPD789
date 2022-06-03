<?php
?>
<div class="addressblock">

    <h3><?php print $info->LastName . ', ' . $info->FirstName . '</h3><br>' ?>
    <?php print $status; ?>
        <?php print '<br>' .  $info->PrimaryAddress1 . '<br>'?>
        <?php print $info->PrimaryCity . ', ' . $info->PrimaryZip. '<br>'?>
        <?php print $info->PrecinctName ?>
</div>
