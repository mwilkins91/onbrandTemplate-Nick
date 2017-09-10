/** 
 *  onBrand CSS – WARNING: Do not remove code block below.
 */
</style>
    <link rel="stylesheet" href="//cihost.uberflip.com/<YOURFOLDERHERE>/client/client.css">
    <link rel="stylesheet" href="//cihost.uberflip.com/<YOURFOLDERHERE>/onbrand.css">
<!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">-->
<style>
/* Add your CSS rules below */




/** 
 *  onBrand JS – WARNING: Do not remove code block below.
 */
}(window.jQuery, window.Hubs));
</script>
<script src="//cihost.uberflip.com/onBrand/libs/dist/onbrand-libs.js"></script>
<script src="//cihost.uberflip.com/<YOURFOLDERHERE>/onbrand.js"></script>
<script>
(function($, Hubs, undefined) {
/*  Add your JavaScript below */
  
  
  
  


(function($, Hubs, undefined) {
  /** 
   *  Header & Footer Ajax
   */
  var subdir = "default", 
	  version = 1;
	
  /* Insert Header */
  $.ajax({
    url: '//cihost.uberflip.com/' + subdir + '/includes/header.html?' + version
  }).done(function(data) {
    $('body').prepend(data);
  });

  /* Insert Footer */
  $.ajax({
    url: '//cihost.uberflip.com/' + subdir + '/includes/footer.html?' + version
  }).done(function(data) {
    $('body > footer').remove();
    $('body').append(data);
  });

  /** 
   *  Custom Functions
   */

  /** 
   *  Events
   */
    
    $(window).on('load', function(){
      fixShareWidget();
    }).on('pageChange', function(){

    }).on('loadAdditionalItems', function(){
     
    }).on('resize', function(){
      sideCtaFix();
      addThisFix();
    }).on('scroll', function(){
      sideCtaFix();
      addThisFix();
    }).on('activateFormCta', function(){
     
    }).on('submitCtaForm', function(){
     
    }).on('trackCta', function(){
     
    }).on('trackCtaView', function(){
     
    }).on('loadExtraInfo', function(){
     
    }).on('search', function(){
     
    }).on('loadFormFieldValues', function(){
     
    }).on('trackPageView', function(){
     
    }).on('trackSocial', function(){
     
    }).on('signalMetricsTemp', function(){
     
    }).on('updateMAPUsers', function(){
     
    });
     
}(window.jQuery, window.Hubs));
