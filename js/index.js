const clicking = document.querySelector(".parent-line");
const openul = document.querySelector(".first-ul");
const hidebag = document.querySelector(".bag-icon");
const hidesearch = document.querySelector(".search-icon");
const hideapple = document.querySelector(".apple-icon");
const rotaitingline1 = document.querySelector(".line1");
const rotaitingline2 = document.querySelector(".line2");

clicking.addEventListener("click", function () {
    openul.classList.toggle("first-ul-opening");
    hidebag.classList.toggle("fade");
    hidesearch.classList.toggle("fade");
    hideapple.classList.toggle("fade");    
    rotaitingline1.classList.toggle("line1-rotate");    
    rotaitingline2.classList.toggle("line2-rotate");
});

$(document).ready(function(){

    $(".edit1").on({
        mouseenter:function(){
            $(".right-1").show(400);
            $(".link1").addClass("links-color");
        },

        mouseout:function(){
            $(".right-1").hide(400);
            $(".link1").removeClass("links-color")
        }
    })
    $(".edit2").on({
        mouseenter:function(){
            $(".right-2").show(400);
            $(".link2").addClass("links-color");
        },

        mouseout:function(){
            $(".right-2").hide(400);
            $(".link2").removeClass("links-color");
        }
    })
    $(".edit3").on({
        mouseenter:function(){
            $(".right-3").show(400);
            $(".link3").addClass("links-color");
        },

        mouseout:function(){
            $(".right-3").hide(400);
            $(".link3").removeClass("links-color");
        }
    })
    $(".edit4").on({
        mouseenter:function(){
            $(".right-4").show(400);
            $(".link4").addClass("links-color");
        },

        mouseout:function(){
            $(".right-4").hide(400);
            $(".link4").removeClass("links-color");
        }
    })
    $(".edit5").on({
        mouseenter:function(){
            $(".right-5").show(400);
            $(".link5").addClass("links-color");
        },

        mouseout:function(){
            $(".right-5").hide(400);
            $(".link5").removeClass("links-color");
        }
    })
    $(".edit6").on({
        mouseenter:function(){
            $(".right-6").show(400);
            $(".link6").addClass("links-color");
        },

        mouseout:function(){
            $(".right-6").hide(400);
            $(".link6").removeClass("links-color");
        }
    })
    $(".edit7").on({
        mouseenter:function(){
            $(".right-7").show(400);
            $(".link7").addClass("links-color");
        },

        mouseout:function(){
            $(".right-7").hide(400);
            $(".link7").removeClass("links-color");
        }
    })
    $(".edit8").on({
        mouseenter:function(){
            $(".right-8").show(400);
            $(".link8").addClass("links-color");
        },

        mouseout:function(){
            $(".right-8").hide(400);
            $(".link8").removeClass("links-color");
        }
    })
    $(".edit9").on({
        mouseenter:function(){
            $(".right-9").show(400);
            $(".link9").addClass("links-color");
        },

        mouseout:function(){
            $(".right-9").hide(400);
            $(".link9").removeClass("links-color");
        }
    })
    $(".edit10").on({
        mouseenter:function(){
            $(".right-10").show(400);
            $(".link10").addClass("links-color");
        },

        mouseout:function(){
            $(".right-10").hide(400);
            $(".link10").removeClass("links-color");
        }
    })
});