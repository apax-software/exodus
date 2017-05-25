require(['dojo/topic'], function(topic) {
  /*
   * Custom Javascript to be executed while the application is initializing goes here
   */

  // The application is ready
  topic.subscribe('tpl-ready', function() {
    /*
     * Custom Javascript to be executed when the application is ready goes here
     */
     var languageButtonCover = $("<a class='btn blue'>")
       .attr("href", window.isSpanish ? "?language=english" : "?language=spanish")
       .text(window.isSpanish ? "English" : "Español");
     $("div.section.section-layout-cover div.foo").append(languageButtonCover);

     $('span[style="font-style: italic;"]').addClass('blockquote');
  });

  /*
   * Custom Javascript to be executed when a section becomes active
   */
  topic.subscribe('story-navigated-section', function(cfg) {
  });

});
