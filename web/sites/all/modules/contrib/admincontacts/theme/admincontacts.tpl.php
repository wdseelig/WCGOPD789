<?php
?>
<div class=admincontactsleftcontainer>
    <div class=admincontactstopleft>
        <div class="contactsadministrator">
        <?php print "Contacts administrator: " . $username . "<br>" ?>
    </div>
        <h3>
            Voter selection criteria
        </h3>
        <?php print render($mysform); ?>
    </div>
    <div class=admincontactsmiddleleft>
        <h4>
        <?php print $dstable; ?>
        </h4>
    </div>
    <div class="admincontactsbottomleft">
        <button id="changerightpane">
            Tag Setter
        </button>
    </div>
</div>
<div class=admincontactsrightcontainer>
    <h3>Individual Voter Data</h3>
    <div class="admincontactstopright">
        <div id="admintl">
           <p>Hello</p>
        </div>
        <div id="admintr">
            <p>Goodbye</p>
        </div>
    <div id="tagsl">TAGL</div>
    <div id="tagsr"></div>
    </div>
    <div id="admincontactsbottomright">
        <h4>This is where the form should go</h4>
    </div>
</div>
<div class=admincontactsrightcontainertagsetter>
    <div class="admincontactsrightcontainertagsetterleft">
    <h3>Tag Selector</h3>
    <?php print render($tstable); ?>
    </div>
    <div class="admincontactsrightcontainertagsetterright">
        <h3>Selected Tags</h3>
        <?php print $sttable; ?>
</div>
    <div>
        <button id="submittagsselectform">Activate these tags</button>
    </div>
</div>
