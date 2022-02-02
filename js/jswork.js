$(document).ready(function () {
  // ====================================progress bar animation==================================================
  $(".skill-per").each(function () {
    var $this = $(this);
    var per = $this.attr("per");
    $this.css("width", per + "%");
    $({ animatedValue: 0 }).animate(
      { animatedValue: per },
      {
        duration: 3000,
        step: function () {
          $this.attr("per", Math.floor(this.animatedValue) + "%");
        },
        complete: function () {
          $this.attr("per", Math.floor(this.animatedValue) + "%");
        },
      }
    );
  });
  // ====================================end skillprogress bar animation==============================================

  //navigation through links==================
});
