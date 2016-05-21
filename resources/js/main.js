$(document)
  .ready(function() {

    //load side bar
    loadHtml($('body'), "/resources/html/sidebar.html", function(){
        $("#slide-nav .tabs").tabs();
    }, {prepend: true});


    //load content tabs as needed
    var dropdowns = $("#main_content_dropdowns li a");
    var tabs_holder = $("#main_content_tabs");
    var tabs = $("#main_content_tabs .tab a");

    function loadAndSetTabs() {
      var tab_id = $(this).attr("href");
      var main = $('main');
      var tab_name = tab_id.substring(1, tab_id.length)
      if ($(tab_id).length == 0) {
        loadHtml(main, "resources/html/tutorials/" + tab_name + ".html", function() {
          tabs_holder.tabs('select_tab', tab_name);
          $("#" + tab_name + " .collapsible").collapsible({
            accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
          });
        });
      }
    }


    tabs.on('click', loadAndSetTabs);
    dropdowns.on('click', loadAndSetTabs);

    function loadHtml($target, path, callback, options) {
      $.get(path, function(response) {
        if (options && options["prepend"]) {
          $target.prepend(response);
        } else {
          $target.append(response);
        }
        if (callback){
          callback.apply($target);
        }
      });
    };
  });
