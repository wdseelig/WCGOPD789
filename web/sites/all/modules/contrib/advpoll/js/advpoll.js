(function($) {
    Drupal.behaviors.advpoll = {
        attach: function (context, settings) {
            var selector = Drupal.settings.advpoll.selector;
            var replacement = Drupal.settings.advpoll.replacement;
            if ($(selector).length)
                $(selector).replaceWith(replacement);
            else {
                selector = 'h3#page-title';
                $(selector).replaceWith(replacement);

            }

        },
        detach: function () {
        }
    };

}(jQuery));


