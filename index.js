$(document).ready(function() {
 $('.tooltipped').tooltip({
  delay: 50
 });
 $(".scroll").click(function() {
  $('html,body').animate({
    scrollTop: $(".about").offset().top
   },
   'slow');
 });
});
