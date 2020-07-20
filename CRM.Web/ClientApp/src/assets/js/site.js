$(document).ready(function () {
    KTBootstrapTimepicker.init();
    $('.kt_touchspin').TouchSpin({
        buttondown_class: 'btn btn-secondary',
        buttonup_class: 'btn btn-secondary',
        verticalbuttons: true,
        verticalup: '<i class="la la-angle-up"></i>',
        verticaldown: '<i class="la la-angle-down"></i>'
    });
});