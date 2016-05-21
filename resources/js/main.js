$(document)
  .ready(function() {
    var tabs = $("#main_content_tabs .tab a");
    tabs.on('click', function() {
      var tab_name = $(this).attr("href");
      var main = $('main');
      if ($(tab_name).length == 0) {
        loadHtml(main, "resources/html/tutorials/" + tab_name.substring(1,tab_name.length)+".html");
      }
    });

    function loadHtml($target, path) {
      $.get(path, function(response){
        main.append(response);
      });
      //target.append('<object type="text/html" data="'+path+'" ></object>')
    };
  });
