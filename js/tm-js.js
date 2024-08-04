$(document).ready(function () {
    var active_text = '#descriptionOne';
    var active_content = '';
    $(active_text).show();


    //##### Click main icons #################################################################

    $("#titleOne").click(function () {

        $(active_text).slideUp();
        $("#descriptionOne").slideDown();
        active_text = '#descriptionOne';
    });

    $("#titleTwo").click(function () {

        $(active_text).slideUp();
        $("#descriptionTwo").slideDown();
        active_text = '#descriptionTwo';

    });

    $("#titleThree").click(function () {
        $(active_text).slideUp();
        $("#descriptionThree").slideDown();
        active_text = '#descriptionThree';

    });

    $("#titleFour").click(function () {

        $(active_text).slideUp();
        $("#descriptionFour").slideDown();
        active_text = '#descriptionFour';

    });

    $("#titleFive").click(function () {

        $(active_text).slideUp();
        $("#descriptionFive").slideDown();
        active_text = '#descriptionFive';

    });






    //##### Click more #################################################################

    $("#MoreOne").click(function () {

        $(active_content).slideUp();
        $("#ContentOne").slideDown();
        active_content = '#ContentOne';

        $('html, body').animate({
            scrollTop: $(active_content).offset().top - 30
        }, 2000);

    });

    $("#MoreTwo").click(function () {

        $(active_content).slideUp();
        $("#ContentTwo").slideDown();
        active_content = '#ContentTwo';

        $('html, body').animate({
            scrollTop: $(active_content).offset().top - 30
        }, 2000);

    });

    $("#MoreThree").click(function () {

        $(active_content).slideUp();
        $("#ContentThree").slideDown();
        active_content = '#ContentThree';

        $('html, body').animate({
            scrollTop: $(active_content).offset().top - 30
        }, 2000);

    });

    $("#MoreFour").click(function () {

        $(active_content).slideUp();
        $("#ContentFour").slideDown();
        active_content = '#ContentFour';

        $('html, body').animate({
            scrollTop: $(active_content).offset().top - 30
        }, 2000);

    });

    $("#MoreFive").click(function () {

        $(active_content).slideUp();
        $("#ContentFive").slideDown();
        active_content = '#ContentFive';

        $('html, body').animate({ scrollTop: $(active_content).offset().top - 30 }, 2000);

    });



    //##### Click close #################################################################

    $(".CloseContent").click(function () {

        $(active_content).slideUp();
        // $('html, body').animate({scrollTop: $("#header").offset().top-30}, 1000);
        $('html, body').scrollTop(0);
        //$("body").css("overflow", "hidden");  // remove scorllbars!


    });

    //##### Click close #################################################################

    $("#profile_win_close").click(function () {
        $("#profile_win").hide();
        $("#col_container").removeClass("section_blur");

    });

    //##### Profile more btn #################################################################

    $("#profile_more_btn").click(function () {

        show_profile()
    });


    //##### Profile icon click #################################################################

    $("#profile_more_btn").click(function () {

        show_profile()
    });


    //##### info btn #################################################################

    $("#info_btn").click(function () {

        $("#col_container").addClass("section_blur");
        $("#profile_win").slideDown();

    });


    //##### about_icon #################################################################

    $("#info_icon").click(function () {
        $("#profile_win").slideDown();

    });

});

// a function to show the profile


function show_profile() {
    $("#col_container").addClass("section_blur");
    $("#profile_win").slideDown();

}



function restart_tm_steps_svg(){
    currentScrollPosition = window.scrollY || document.documentElement.scrollTop;

    // const test = document.getElementById('tm_steps_obj');
  console.log("------------------------", currentScrollPosition);
    // const svgObj = document.getElementById('tm_steps_obj');
    // svgObj.data = 'img/TM_Steps-v0.9.svg?' + new Date().getTime(); // Append a timestamp to force reload
    
    const svgObj = document.getElementById('tm_steps_obj');
    svgObj.data = 'img/TM_Steps-v0.9.svg?' + new Date().getTime(); // Append a timestamp to force reload
    window.scrollTo({
        top: 1000, // Scroll to the bottom
        behavior: 'smooth' // Smooth scroll
    }, 100);

    // const animateElements = svgDoc.querySelectorAll('animate');
    // animateElements.forEach(anim => anim.setAttribute('begin', '0s'));
}