/*
    jquery-send
    https://github.com/eyy/send
 */

(function($) {
    $.fn.serializeObject = function () {
        var arr = this.serializeArray(),
            o = {};
        $.each(arr, function () {
            var value = this.value != null ? this.value : '';

            if (o[this.name] != null) {
                if (!o[this.name].push)
                    o[this.name] = [o[this.name]];
                o[this.name].push(value);
            } else {
                o[this.name] = value;
            }
        });
        return o;
    };

    $.fn.send = function(success, error) {
        return this.on('submit', function(e) {
            e.preventDefault();
            var t = $(this);

            t.find('[type=submit]').prop('disabled', true);

            $.ajax({
                type: t.attr('method') || 'post',
                url: t.attr('action'),
                data: JSON.stringify(t.serializeObject()),
                dataType: 'json',
                processData: false,
                contentType: 'application/json',
                success: success,
                error: function(xhr) {
                    error.call(t, xhr.responseJSON, xhr);
                },
                context: t
            });
        })
    };
})(jQuery);
