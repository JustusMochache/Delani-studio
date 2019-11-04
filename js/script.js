$(function() {
  let firstext = $("#firstext");
  let developertext = $("#developertext");
  let pro = $("#pro");
  let destext = $("#designtext");
  let devtext = $("#devtext");
  let protext = $("#protext");

  $(firstext).hide();
  $(developertext).hide();
  $(pro).hide();

  $(".des").on("click", function() {
    $(".des").slideUp("slow");
    $(firstext).show(500);
    $(destext).animate({ fontWeight: "bolder", fontSize: "30px" });
  });
  $(".dev").on("click", function() {
    $(".dev").slideUp("slow");
    $(developertext).show(500);
    $(devtext).animate({ fontWeight: "bolder", fontSize: "30px" });
  });
  $(".pro").on("click", function() {
    $(".pro").slideUp("slow");
    $(pro).show(500);
    $(protext).animate({ fontWeight: "bolder", fontSize: "30px" });
  });

  $(firstext, destext).on("click", function() {
    $(".des").slideDown();
    $(firstext).hide(500);
    $(destext).animate({ fontWeight: "normal", fontSize: "16px" });
  });
  $(developertext, devtext).on("click", function() {
    $(".dev").slideDown();
    $(developertext).hide(500);
    $(devtext).animate({ fontWeight: "normal", fontSize: "16px" });
  });
  $(pro, protext).on("click", function() {
    $(".pro").slideDown();
    $(pro).hide(500);
    $(protext).animate({ fontWeight: "normal", fontSize: "16px" });
  });

  $(".portfoliopic").hover(
    function() {
      $(".porttext", this).slideToggle("slow");
    },
    function() {
      $(".porttext", this).slideToggle("slow");
    }
  );

  $("form#form").on("submit", function(event) {
    event.preventDefault();
    let name = $("input#name").val();
    let email = $("input#email").val();
    let message = $("textarea#message").val();

    if ($("input#name").val() && $("input#email").val()) {
      alert(
        "Hey " + name + ", Thank you for contacting us, We will get back to you"
      );
    } else {
      alert("Please provide your correct name and email!");
    }
  });
}); 
