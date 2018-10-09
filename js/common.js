$(function(){
    var clientHeight=document.documentElement.clientHeight || document.body.clientHeight;
    var clientWidth=document.documentElement.clientWidth || document.body.clientWidth;
    $(".zhezhaoceng").css({"width":clientWidth,"height":clientHeight});
    $("aside").css({"height":clientHeight});
    $("section").css({"height":clientHeight});

    // $("#asidedivli1").on("click",function(){
    //     window.location.replace("jinrong.html");
    // });
    // $("#asidedivli3").click(function(){
    //     window.location.replace("lingshou.html");
    // });
    // $("#asidedivli5").click(function(){
    //     window.location.replace("shejiao.html");
    // });
    // $("#asidedivli8").click(function(){
    //     window.location.replace("UIbiao.html");
    // });
// header
    // UI组件 and 表格
    $(".asidedivul1li21").each(function(){
        $(this).click(function(){
            $(this).children("a").children().toggleClass("icon-jian");
            $(this).next().slideToggle();
            $(this).css({"color":"#ffffff"});
            $(this).children("i").css({"color":"#3783b5"});
            $(this).children("a").children("i").css({"color":"#ffffff"});
            $(this).children("a").css({"border-color":"#ffffff"});
        });
    });
    
    // 点击每个li
    $(".asidediv li").each(function(){
        $(this).click(function(){
            $(this).css({"color":"#ffffff"});
            $(this).children("i").css({"color":"#3783b5"});
            $(this).prevAll().css({"color":"#708c9c"});
            $(this).prevAll().children().css({"color":"#708c9c"});
            $(this).nextAll().css({"color":"#708c9c"});
            $(this).nextAll().children().css({"color":"#708c9c"});

            $(this).prevAll().children().children("a").css({"border-color":"#708c9c"});
            $(this).prevAll().children().children("a").children("i").css({"color":"#708c9c"});
            $(this).nextAll().children().children("a").css({"border-color":"#708c9c"});
            $(this).nextAll().children().children("a").children("i").css({"color":"#708c9c"});
        });
    });

// section
    // header
    // 点击左边小图标
    $("#headerdiv1i1").click(function(){
        $("aside").animate({
            width:'toggle'
        },100);
        $("article").toggleClass("aticleAdd");
    });
    // 点击搜索框
    $(".headerdiv21 input").focus(function(){
        $(".headerdiv21").css({"border-color":"white"});
    });

    $(".headerdiv21 input").blur(function(){
        $(".headerdiv21").css({"border-color":"#5ba3d5"});
    });

    // 点击EN
        $('#headerdiv22a').on('click',function (event) {
            event.stopPropagation();//阻止事件冒泡
            $(this).siblings('.headerdiv22div11').slideToggle();
            
            $(this).toggleClass("headerdiv22a");
            var tag = $(this).siblings('.headerdiv22div11');
            var flag = true;
            $(document).bind("click",function(e){//点击空白处，设置的弹框消失
                var target = $(e.target);               
                if(target.closest(tag).length == 0 && flag == true){
                    $(tag).hide();
                    flag = false;
                }
            });
        });

    //点击通知图标
    $("#headerdiv22a2").on("click",function(){
        event.stopPropagation();//阻止事件冒泡
        $(".headerdiv22div12").slideToggle();
        var tag = $(this).siblings('.headerdiv22div12');
        var flag = true;
        $(document).bind("click",function(e){//点击空白处，设置的弹框消失
            var target = $(e.target);               
            if(target.closest(tag).length == 0 && flag == true){
                $(tag).hide();
                flag = false;
            }
        });
    });
    
     // 右侧栏
     $(".headerdiv22div1").click(function(){
        event.stopPropagation();//阻止事件冒泡
        $(".divright").css({"display":"block"});
        $(".divright").animate({
            width:"260px"
        },300);
        $(".zhezhaoceng").css({"display":"block"});
        var tag = $(".divright");
        var flag = true;
        $(document).bind("click",function(e){//点击空白处，设置的弹框消失
            var target = $(e.target);               
            if(target.closest(tag).length == 0 && flag == true){
                $(".divright").animate({
                    width:"0px"
                },300);
                $(".zhezhaoceng").css({"display":"none"});
                flag = false;
            }
        });
    });
});