$(function () {
    var $geotarget = $('#geotarget');
    $.get( "https://ipapi.co/json/?__cf_chl_jschl_tk__=pmd_dJYN9UB4xWY59VUyWiR2TEd5jsQr8puhaf__eiDznpY-1632993109-0-gqNtZGzNAhCjcnBszQiR", function(data) {
            if(data.country == 'IN'){
                $geotarget.text(data.city);
            }else{
                $geotarget.text(data.city + ' Indian');
            }
    });
});