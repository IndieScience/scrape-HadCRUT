function initLRUnitsToggle (){
  $(".unit_overview").hide();
  $(".unit_title").click(function()
  {
    if($(this).hasClass('open'))
    {$(this).removeClass('open');}
    else
    {$(this).addClass('open');}
    var e = $(this).parent().find("~ .unit_overview");
    e.width (e.parent().width ());
    e.slideToggle("slow");
    return false;
  });
  
  $(".units_table").hide ();
    //toggle the componenet with class msg_body
    $(".starred_unit").click(function()
    {
    
      var e = $(this).find("~ .units_table");
      e.slideToggle("slow");
  
  	return false;
  });
}