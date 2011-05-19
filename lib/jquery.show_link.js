//
//  jquery.show_link.js
//  Hides given elements, inserting links to show them again.
//
//  Created by Caius Durling on 2010-04-06.
//
// Changelog
//   v0.1 - Initial version
//    * Only supports <fieldset> containing <legend>
//   v0.2 - Generalised it
//    * Accepts either string to display in anchor text, or 
//      a function returning a string.
//   v0.3
//    * Outputting a valid <a> tag for the link
// 
(function($) {
  // $(".hide").showLink();
  $.fn.showLink = function(anchor_text_function_or_string){

    // Bind to any links we create, or have created to first
    // show the next element and then remove themselves
    // todo: store show-next-element in an option
    // todo: allow overriding the class of the anchor
    $("a.show-next-element").live("click", function(){
      $(this).next().show();
      $(this).remove();
      return false
    });

    // Loop over the fieldsets given, using the contents
    // of the <legend> to fill the anchor text, then hide
    // the fieldset and insert the anchor before it
    $(this).each(function(index) {
      // todo: add options to specify where to look for anchor_text
      var anchor_text;
      if ($.isFunction(anchor_text_function_or_string)) {
        anchor_text = anchor_text_function_or_string.call(this);
      } else {
        anchor_text = anchor_text_function_or_string;
      }
      // todo: pull the anchor's class from the options
      $("<a/>").attr("href", "#").text(anchor_text).addClass('show-next-element').insertBefore($(this));
      $(this).hide();
    });

    return $(this);
  };
})(jQuery);
