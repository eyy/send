/*
    jquery-send
        send forms as json!

    $('form').serializeObject()   // get form data as an object
    $('form').send(callback)      // send form as ajax

    example:
        $('form').send(function(res) {
            $('h3.message').text(res.message);
        });
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
        this.on('submit', function(e) {
            e.preventDefault();
            var t = $(this);

            $.ajax({
                type: t.attr('method') || 'post',
                url: t.attr('action'),
                data: JSON.stringify(t.serializeObject()),
                dataType: 'json',
                processData: false,
                contentType: 'application/json',
                success: success,
                error: error,
                context: t
            });
        })
    };
})(jQuery);