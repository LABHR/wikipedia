
// Just a simple redirect. Nothing more. 
$(document).ready(function() { 
  $("#redirect").submit(function(event) { 
    event.preventDefault();
    page = $("#page").val()
   
    statistics = "https://tools.wmflabs.org/xtools-articleinfo/?article="+page+"&project=en.wikipedia.org#topeditors"
    document.location = statistics
  })

})
