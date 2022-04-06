$(document).ready(
    function () {
        const form = $('#form');
        let message = $('#form_status');

        form.on('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);

            $.ajax({
                type: 'POST',
                url: $(this).attr('action'),
                data: formData,
                cache: false,
                dataType: 'json',
                contentType: false,
                processData: false,
                beforeSend: function () {
                    message.text('Начата загрузка файла...');
                    form.find('input').prop('disabled', true);
                    form.find('button').prop('disabled', true);
                },
                success: function (data) {
                    message.text('Файл загружен');
                    $('#file').val('');
                },
                complete: function () {
                    form.find('input').prop('disabled', false);
                    form.find('button').prop('disabled', false);
                }
            });

            return false;
        });
    }
);