$( document ).ready(function() {

   element = ".effect-16";
   $(element).focusout(function(){
      if($(this).val() != ""){
         $(this).addClass("has-content");
      }else{
         $(this).removeClass("has-content");
      }
   });

   pos = 0;
   $(".aside-menu-list").click(function(){
      $("body").animate({scrollTop:pos},500);
   });
   
   $(function () {
      $('[data-toggle="tooltip"]').tooltip();
   });

   
   $(".btn-contact").click(function(e) {
      $email = $("#email").val();
      $message = $("#message").val();
      if($email == "" && $message == "") {
         e.preventDefault();
         alert("Fill in the fields");

      }
      
   });
   
});