$( document ).ready(function() {

   //input contact
   element = ".effect-16";
   $(element).focusout(function(){
      if($(this).val() != ""){
         $(this).addClass("has-content");
      }else{
         $(this).removeClass("has-content");
      }
   });

   //MENU
   pos = 0;
   $(".aside-menu-list").click(function(){
      $("body").animate({scrollTop:pos},500);
   });
   //Tooltip
   $(function () {
      $('[data-toggle="tooltip"]').tooltip();
   });

   //Contacts
   $(".btn-contact").click(function(e) {
      email = document.getElementById("email").value;
      message = document.getElementById("message").value;
      
      if(email == "" || message == "") {
         e.preventDefault();
         alert("Fill in the fields");
      }
      
   });

   var cont ;
   var init = $(".timeline-item").length;
   
   $("#projects .active span").html(init);
 
   // FILTER Categories
   $(".filter-button").click(function(){
     
      $('.filter-button').removeClass("active");
      
      $(this).addClass("active");
         var value = $(this).attr('data-filter');
         if(value == "Todos") {
            $('.filter').show('1000');
         }
         else {
            $(".filter").not('.'+value).hide('3000');
           
            $('.filter').filter('.'+value).show('3000');
         }


         $("#projects .amount").html("");

         switch ($(this).data("filter")) {

            case "all":
            var all = $(".all").length | 0;
            $("#projects .active span").html(all);
            break;
            
            case "web":
               var web = $(".web").length;
               $("#projects .active span").html(web);
              break;

            case "better":
               var bet = $(".better").length;
               $("#projects .active span").html(bet);
               break;

            case "mobile":
               var mobile = $(".mobile").length;
               $("#projects .active span").html(mobile);
               break;

            case "desktop":
               var desktop = $(".desktop").length ;
               $("#projects .active span").html(desktop);
               break;

           default:
           
              break;
        }
         
  });

 
   
});