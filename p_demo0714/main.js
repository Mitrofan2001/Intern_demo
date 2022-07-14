
    $(function () {
        /* 按下GoTop按鈕時的事件 */
        $('#side3').click(function () {
            $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
            return false;
        });

        $('#notice_content').hide();
        $('#notice_site_2').hide();


        $('#notice_site_1').click(function () {
            $('#notice_site_1').hide();
            $('#notice_site_2').show();
            $('#notice_content').show("slow");
        });

        $('#notice_site_2').click(function () {
            $('#notice_site_2').hide();
            $('#notice_site_1').show();
            $('#notice_content').hide();
        });

        $("#nav_toggle").click(function () {
            $("nav").toggle();
            return false;
        });


    });

