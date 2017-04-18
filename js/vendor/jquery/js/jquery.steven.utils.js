// jquery.maurice.utils.js
// jQuery extensions door Maurice
(function ($) {
    $.zegDankUTegen = function (wie) {
        alert("DankUWel " + wie + " !");
    }
    $.vandaag = function () {
        var vandaag = new Date();
        return vandaag.toLocaleDateString();
    }

    $.fn.wordtGroen = function () {
        return this.css('color', 'green');
    }

    $.fn.vulSelect = function (arrData, strFirstOption) {
        /*
         vult een SELECT met gegevens uit een array, een optioneel eerste item is mogelijk
         @arrData 1-dim array TEKST of 2-dim array VALUE|TEKST
         @strFirstOption string, optioneel, de tekst voor een eerste, default option,
         de value is steeds ''
         */
        return this.each(function () {
            if (this.tagName == 'SELECT') {
                var eSelect = $(this);
                $(this).leegSelect();
                if (strFirstOption != null) {
                    eSelect.append("<option value='' selected='selected'>"
                            + strFirstOption + "</option>");
                }
                //is het array 1 of 2-dimensioneel?
                if (!$.isArray(arrData[0])) {
                    $.each(arrData, function (index, data) {
                        eSelect.append('<option value=' + arrData[index] + '>'
                                + arrData[index] + '</option>');
                    });

                } else {
                    $.each(arrData, function (index, data) {
                        eSelect.append('<option value=' + arrData[index][0] + '>'
                                + arrData[index][1] + '</option>');
                    });
                }
            } //einde if
        }) //einde this.each
    } //einde vulSelect

    $.fn.leegSelect = function () {
        return this.each(function () {
            if (this.tagName == 'SELECT') {
                $(this).empty();
            }
        });
    }
})(jQuery)