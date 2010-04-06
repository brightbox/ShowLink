//
//  jquery.show_link.js
//  Hides given elements, inserting links to show them again.
//
//  Created by Caius Durling on 2010-04-06.
//
// Changelog
//   v0.1 - Initial version
//    * Only supports <fieldset> containing <legend>
//
(function($) {
  // $(".hide").showLink();
  $.fn.showLink = function(){

    // Bind to any links we create, or have created to first
    // show the next element and then remove themselves
    // todo: store show-next-element in an option
    // todo: allow overriding the class of the anchor
    $("a.show-next-element").live("click", function(){
      $(this).next().show();
      $(this).remove();
    });

    // Loop over the fieldsets given, using the contents
    // of the <legend> to fill the anchor text, then hide
    // the fieldset and insert the anchor before it
    $(this).each(function(index) {
      // todo: add options to specify where to look for anchor_text
      var anchor_text = $(this).find("legend").text();
      // todo: pull the anchor's class from the options
      $("<a/>").text(anchor_text).addClass('show-next-element').insertBefore($(this));
      $(this).hide();
    });

    return $(this);
  };
})(jQuery);
