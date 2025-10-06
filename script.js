$(function() {
    // トップボタン表示
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('#totop').fadeIn();
        } else {
            $('#totop').fadeOut();
        }
    });

    // トップへスクロール
    $('#totop').on('click', function(e) {
        e.preventDefault();
        $('html, body').scrollTop(0); 
    });

    // アンカーリンク
    $('a[href^="#"]').click(function() {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - $('#header').outerHeight(); // ヘッダー高さを引く
        $('html, body').scrollTop(position); 
        return false;
    });
});
