$(window).resize(function () {
  if ($(window).width() < 1000) {
    document.removeEventListener("mousemove", parallax);
    $(".mx-auto.w-50").removeClass("w-50");
    $("#empty-col").remove();
    $("#empty-col").remove();
    $("#empty-col").remove();
    $("#empty-col").remove();
    $("#project-title-0").addClass("p-0");
    $("#project-title-1").addClass("p-0");
    $("#project-title-2").addClass("p-0");
    $("#project-title-3").addClass("p-0");
    $("#bug-tracker").addClass("pt-5");
    $("#profit-maximzer").addClass("pt-5");
    $("#gas-thrifter").addClass("pt-5");
    $("#space-invaderz").addClass("pt-5");
  } else {
    document.addEventListener("mousemove", parallax);
    function parallax(event) {
      this.querySelectorAll(".mouse").forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 90;
        const y = (window.innerHeight - event.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }
  }
});
