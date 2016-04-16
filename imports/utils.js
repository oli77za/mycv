
export const actionOnScroll = function(template, selector, classToAdd) {
    $(window).scroll(function() {
        var nodes = template.findAll(selector);
        nodes.forEach(function(node) {
            var $node = $(node);
            if ($node.hasClass(classToAdd)) {
                return;
            }
            if (isElementInViewport($node)) {
                $node.addClass(classToAdd);
            }
        });
    });
};

function isElementInViewport($elem) {
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();
    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

