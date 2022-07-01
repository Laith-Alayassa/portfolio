document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".mouse").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

$(window).resize(function(){
  if($(window).width()< 1000){
    $('.mx-auto.w-50').removeClass('w-50');
    $( "#empty-col" ).remove();
    $( "#empty-col" ).remove();
    $( "#empty-col" ).remove();
    $('#project-title-1').addClass('p-0');
    $('#project-title-2').addClass('p-0');
    $('#project-title-3').addClass('p-0');
  }

 });
