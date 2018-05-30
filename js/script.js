$(document).ready(function() {

  $("button#woof").click(function() {
    $("ul#dog").prepend('<li>WOOF!!! WOOF!!!</br><img src="img/dog.jpg"></li>');
    $("ul#cat").prepend('<li>....!!!!</br><img src="img/cat.jpg"> </li>');

    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();


    });

  });
});

$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#dog").prepend('<li>What was that noise </br><img src="img/dog.jpg"></li>');
    $("ul#cat").prepend('<li>MEOW!!</br><img src="img/cat.jpg"> </li>');

    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });

  });
});
