$(document)
  .ready(function() {

    loadHtml($('body'), "/resources/sidebar.html", false, {
      prepend: true
    })

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

    function loadHtml($target, path, callback, extras) {
      $.get(path, function(response) {
        if (prepend) {

        } else {
          $target.append(response);
        }
        if (callback){
          callback.apply($target);
        }
      });
    };
  });
