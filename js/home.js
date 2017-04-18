// JavaScript Document
//script voor homepagina
$(function () {

    var ikoontjes = {
        header: "ui-icon-circle-arrow-e",
        headerSelected: "ui-icon-circle-arrow-s"
    }

    $('#keuzes').accordion({
        active: 1,
        icons: ikoontjes,
        heightStyle: "content",
        collapsible:true,
        animate:"easeOutBounce"
    });

});//einde doc ready