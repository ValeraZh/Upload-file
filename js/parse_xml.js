$(document).ready(function () {
    parseData();
    fetch();
})

function fetch() {
    setTimeout(function () {
        parseData();
        fetch();
    }, 100);
}

function parseData() {
    $.ajax({
        url: './upload/catalog_ilab.xml',
        dataType: 'xml',
        success: function (data) {
            $('ul').children().remove();

            $(data).find('offer').each(function () {
                let info =
                    '<li>' + "Название: " + $(this).find('name').text() + '</li>' +
                    '<li>' + "Бранд: " +$(this).find('vendor').text() + '</li>' +
                    '<li>' + "Цена: " + $(this).find('price').text() + '</li>' +
                    '<li>' + "Код города: " + $(this).find('store').attr('postcode') + "<hr>";

                $('ul').append(info);
            })
        }
    })
}