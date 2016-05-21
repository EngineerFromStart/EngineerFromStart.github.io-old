$(document)
  .ready(function() {
    var dropdowns = $("#main_content_tabs li a");
    var tabs = $("#main_content_tabs .tab a");

    function loadAndSetTabs() {
      var tab_id = $(this).attr("href");
      var main = $('main');
      var tab_name = tab_id.substring(1, tab_id.length)
      if ($(tab_id).length == 0) {
        loadHtml(main, "resources/html/tutorials/" + tab_name + ".html");

        $(this).tabs('select_tab', tab_name);
        $(this).collapsible({
          accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
      }
    }

    tabs.on('click', loadAndSetTabs);
    dropdowns.on('click', loadAndSetTabs);

    function loadHtml($target, path) {
      $.get(path, function(response) {
        $target.append(response);
      });
      //target.append('<object type="text/html" data="'+path+'" ></object>')
    };
  });
