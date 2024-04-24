
$(".product1 , img").fadeIn(1500);


$(".downorders  i  , .downorders i").click(function () {
    $(".down input , .search ,.downorders .search").fadeToggle();

});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



function show() {
    document.getElementById("mySidenav").style.width = "250px";
}

function hideen() {
    document.getElementById("mySidenav").style.width = "0";
}

function opendiv() {
    document.getElementById("vySidenav").style.width = "250px";
}

function closediv() {
    document.getElementById("vySidenav").style.width = "0";
}

var wid;
$(".pleft").click(function ()
{
 wid = $(document).width();
    
    if (wid < 768)

    {
        $(".bgwhite").fadeIn();
        $(".bgwhite").animate({
            position: "relative",
            top: "-700px",

        }, 1700);
    }

    else
    {
        $(".bgwhite").fadeIn();
        $(".bgwhite").animate({
            position: "relative",
            top: "-300px",

        }, 1700);
    }
   
});
$(".bgwhite").mouseleave(function () {
    if (wid < 768) {
        $(".bgwhite").fadeOut(2000);
        $(".bgwhite").css({ "top": "500px" });
    }
    else {
        $(".bgwhite").fadeOut(2000);
        $(".bgwhite").css({ "top": "300px" });

    }
  
})
/*pages sign*/
$(function () {
    $(".password").click(function () {
        $(".pas").fadeIn(1000);
        $(".pas").animate
            (
                {
                    "position": "relative",
                    "top": "-500px",

                }, 1000)

    });
    $(".btn-danger").click(function () {
        $(".pas").fadeToggle(1000);
    });


    let sign = $(".sign input");

    sign.fadeIn(4000);

    let formup = $(".formup");

    formup.fadeIn(4000);


});
$(".sub1").on("click", function () {
    $(".dd1").fadeIn(2000);
    $(".dd2 , .dd3").fadeOut();
    $(this).css({
        borderBottom: "2px solid white",
        paddingBottom: "5px"
    })
    $(".sub3 , .sub2 ").css({
        borderBottom: "none",
       
    })
});

$(".sub2").on("click", function () {
    $(".dd1 , .dd3").fadeOut(1000);
    $(".dd2").fadeIn(2000);
    $(this).css({
        borderBottom: "2px solid white",
        paddingBottom: "5px"
    })
    $(".sub1 , .sub3 ").css({
        borderBottom: "none",
       
    })
});

$(".sub3").on("click", function () {
    $(".dd1 , .dd2").fadeOut(1000);
    $(".dd3").fadeIn(2000);
    $(this).css({
        borderBottom: "2px solid white",
        paddingBottom: "5px"
    })
    $(".sub1 , .sub2 ").css({
        borderBottom: "none",
       
    })
});
/*setting*/
$(".bage").click(function () {
    $(".eee").fadeIn(1000);
    $(".eee").animate({
        position:'relative',
        top:'-300px'
    }, 1000);
});
$(".eee").mouseleave(function () {
    $(this).fadeOut(1000);
    $(this).animate({
        position: 'relative',
        top: '300px'
    }, 1000);
});

$(".link").click( ()=>{
    
    let p = $(".ph").val();
    let pas = $(".pas").val();
    if( p == '0945483651' && pas == '123')
    {
        $(".link").attr("href","products.html")
    }
    if( p != '0945483651' && pas != '123')
    {
      alert("you should your number << 0945483651 >> and your password << 123 >> ")
    }
    
     if( p != 0945483651)
    {
        $(".ph").css({
            "border" : "1px solid red"
        });
        
    }
    else if(p == 0945483651)
    {
        $(".ph").css({
            "border" : "1px solid green"
        })
    }
     if( pas != 123)
    {
        $(".pas").css({
            "border" : "1px solid red"
        })
    }
    else if(pas == 123)
    {
        $(".pas").css({
            "border" : "1px solid green"
        })
    }
    p = null;
})
