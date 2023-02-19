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


// this place is for slide up container-12///////////////////////////////////////////////////////////////////////////////////////////////////////
$("#for-first-li-slide").slideUp();
$("#for-li-slide2").slideUp();
$("#for-li-slide3").slideUp();
$("#for-li-slide4").slideUp();
$("#for-li-slide5").slideUp();
$("#for-li-slide6").slideUp();
$("#for-li-slide7").slideUp();
$("#for-li-slide8").slideUp();
$("#for-li-slide9").slideUp();
$("#for-li-slide10").slideUp();
$("#for-li-slide11").slideUp();

// this place is for slide up container-12///////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {

    $(".edit1").on({
        mouseenter: function () {
            $(".right-1").show(400);
            $(".link1").addClass("links-color");
        },

        mouseout: function () {
            $(".right-1").hide(400);
            $(".link1").removeClass("links-color")
        }
    })
    $(".edit2").on({
        mouseenter: function () {
            $(".right-2").show(400);
            $(".link2").addClass("links-color");
        },

        mouseout: function () {
            $(".right-2").hide(400);
            $(".link2").removeClass("links-color");
        }
    })
    $(".edit3").on({
        mouseenter: function () {
            $(".right-3").show(400);
            $(".link3").addClass("links-color");
        },

        mouseout: function () {
            $(".right-3").hide(400);
            $(".link3").removeClass("links-color");
        }
    })
    $(".edit4").on({
        mouseenter: function () {
            $(".right-4").show(400);
            $(".link4").addClass("links-color");
        },

        mouseout: function () {
            $(".right-4").hide(400);
            $(".link4").removeClass("links-color");
        }
    })
    $(".edit5").on({
        mouseenter: function () {
            $(".right-5").show(400);
            $(".link5").addClass("links-color");
        },

        mouseout: function () {
            $(".right-5").hide(400);
            $(".link5").removeClass("links-color");
        }
    })
    $(".edit6").on({
        mouseenter: function () {
            $(".right-6").show(400);
            $(".link6").addClass("links-color");
        },

        mouseout: function () {
            $(".right-6").hide(400);
            $(".link6").removeClass("links-color");
        }
    })
    $(".edit7").on({
        mouseenter: function () {
            $(".right-7").show(400);
            $(".link7").addClass("links-color");
        },

        mouseout: function () {
            $(".right-7").hide(400);
            $(".link7").removeClass("links-color");
        }
    })
    $(".edit8").on({
        mouseenter: function () {
            $(".right-8").show(400);
            $(".link8").addClass("links-color");
        },

        mouseout: function () {
            $(".right-8").hide(400);
            $(".link8").removeClass("links-color");
        }
    })
    $(".edit9").on({
        mouseenter: function () {
            $(".right-9").show(400);
            $(".link9").addClass("links-color");
        },

        mouseout: function () {
            $(".right-9").hide(400);
            $(".link9").removeClass("links-color");
        }
    })
    $(".edit10").on({
        mouseenter: function () {
            $(".right-10").show(400);
            $(".link10").addClass("links-color");
        },

        mouseout: function () {
            $(".right-10").hide(400);
            $(".link10").removeClass("links-color");
        }
    })
    // start to create jQuery for html about footer>>>ul>>>li////////////////////////////////////////////////////////////////////////////////////
    $(".li-1-container12").click(function () {
        $(".plus-1").toggleClass("plus-1-rotate")
    });
    $(".li-2-container12").click(function () {
        $(".plus-2").toggleClass("plus-1-rotate")
    });
    $(".li-3-container12").click(function () {
        $(".plus-3").toggleClass("plus-1-rotate")
    });
    $(".li-4-container12").click(function () {
        $(".plus-4").toggleClass("plus-1-rotate")
    });
    $(".li-5-container12").click(function () {
        $(".plus-5").toggleClass("plus-1-rotate")
    });
    $(".li-6-container12").click(function () {
        $(".plus-6").toggleClass("plus-1-rotate")
    });
    $(".li-7-container12").click(function () {
        $(".plus-7").toggleClass("plus-1-rotate")
    });
    $(".li-8-container12").click(function () {
        $(".plus-8").toggleClass("plus-1-rotate")
    });
    $(".li-9-container12").click(function () {
        $(".plus-9").toggleClass("plus-1-rotate")
    });
    $(".li-10-container12").click(function () {
        $(".plus-10").toggleClass("plus-1-rotate")
    });
    $(".li-11-container12").click(function () {
        $(".plus-11").toggleClass("plus-1-rotate")
    });
    // start to create underline for li in slide up {jQuery} ////////////////////////////////////////////////////////////////////////////////////
    $(".li-1-slideup").on({
        mouseenter: function () {
            $(".link1-slideup-container12").addClass("show-underline-slideup-container12")
        },
        mouseout: function () {
            $(".link1-slideup-container12").removeClass("show-underline-slideup-container12")
        }
    });

    $(".li-2-slideup").on({
        mouseenter: function () {
            $(".link2-slideup-container12").addClass("show-underline-slideup-container12")
        },
        mouseout: function () {
            $(".link2-slideup-container12").removeClass("show-underline-slideup-container12")
        }
    });

    $(".li-3-slideup").on({
        mouseenter: function () {
            $(".link3-slideup-container12").addClass("show-underline-slideup-container12")
        },
        mouseout: function () {
            $(".link3-slideup-container12").removeClass("show-underline-slideup-container12")
        }
    });

    $(".li-4-slideup").on({
        mouseenter: function () {
            $(".link4-slideup-container12").addClass("show-underline-slideup-container12")
        },
        mouseout: function () {
            $(".link4-slideup-container12").removeClass("show-underline-slideup-container12")
        }
    });

    $(".li-5-slideup").on({
        mouseenter: function () {
            $(".link5-slideup-container12").addClass("show-underline-slideup-container12")
        },
        mouseout: function () {
            $(".link5-slideup-container12").removeClass("show-underline-slideup-container12")
        }
    });

    $(".li-6-slideup").on({
        mouseenter: function () {
            $(".link6-slideup-container12").addClass("show-underline-slideup-container12")
        },
        mouseout: function () {
            $(".link6-slideup-container12").removeClass("show-underline-slideup-container12")
        }
    });

    $(".li-7-slideup").on({
        mouseenter: function () {
            $(".link7-slideup-container12").addClass("show-underline-slideup-container12")
        },
        mouseout: function () {
            $(".link7-slideup-container12").removeClass("show-underline-slideup-container12")
        }
    });

    $(".li-8-slideup").on({
        mouseenter: function () {
            $(".link8-slideup-container12").addClass("show-underline-slideup-container12")
        },
        mouseout: function () {
            $(".link8-slideup-container12").removeClass("show-underline-slideup-container12")
        }
    });

    $(".li-9-slideup").on({
        mouseenter: function () {
            $(".link9-slideup-container12").addClass("show-underline-slideup-container12")
        },
        mouseout: function () {
            $(".link9-slideup-container12").removeClass("show-underline-slideup-container12")
        }
    });

    $(".li-10-slideup").on({
        mouseenter: function () {
            $(".link10-slideup-container12").addClass("show-underline-slideup-container12")
        },
        mouseout: function () {
            $(".link10-slideup-container12").removeClass("show-underline-slideup-container12")
        }
    });

    $("#first-li-slide").click(function () {
        $("#for-first-li-slide").slideToggle();
    });

    // start to create jQuery for slide 2 in footer//////////////////////////////////////////////
    $(".first-li-slide-2-container12").on({
        mouseenter: function () {
            $(".f-link-slide2-container12").addClass("show-underline-li-slide-container12");
        },
        mouseout: function () {
            $(".f-link-slide2-container12").removeClass("show-underline-li-slide-container12");
        }
    });
    $(".second-li-slide-2-container12").on({
        mouseenter: function () {
            $(".s-link-slide2-container12").addClass("show-underline-li-slide-container12");
        },
        mouseout: function () {
            $(".s-link-slide2-container12").removeClass("show-underline-li-slide-container12");
        }
    });
    $(".third-li-slide-2-container12").on({
        mouseenter: function () {
            $(".th-link-slide2-container12").addClass("show-underline-li-slide-container12");
        },
        mouseout: function () {
            $(".th-link-slide2-container12").removeClass("show-underline-li-slide-container12");
        }
    });
    $(".forth-li-slide-2-container12").on({
        mouseenter: function () {
            $(".forth-link-slide2-container12").addClass("show-underline-li-slide-container12");
        },
        mouseout: function () {
            $(".forth-link-slide2-container12").removeClass("show-underline-li-slide-container12");
        }
    });
    $("#li-slide2").click(function () {
        $("#for-li-slide2").slideToggle();
    });

    // start to create jQuery for slide 3 in footer ////////////////////////////////////////////

    $(".f-li-slide3-container12").on({
        mouseenter: function () {
            $(".f-link-slide3-container12").addClass("show-underline-slide3");
        },
        mouseout: function () {
            $(".f-link-slide3-container12").removeClass("show-underline-slide3");
        }
    });
    $(".s-li-slide3-container12").on({
        mouseenter: function () {
            $(".s-link-slide3-container12").addClass("show-underline-slide3");
        },
        mouseout: function () {
            $(".s-link-slide3-container12").removeClass("show-underline-slide3");
        }
    });
    $(".th-li-slide3-container12").on({
        mouseenter: function () {
            $(".th-link-slide3-container12").addClass("show-underline-slide3");
        },
        mouseout: function () {
            $(".th-link-slide3-container12").removeClass("show-underline-slide3");
        }
    });
    $("#li-slide3").click(function () {
        $("#for-li-slide3").slideToggle();
    });

    // start to create jQuery for slide 4 in footer ////////////////////////////////////////////
    $(".li1-slide3-container12").on({
        mouseenter: function () {
            $(".link1-slide3-container12").addClass("show-underline-slide3-container12");
        },
        mouseout: function () {
            $(".link1-slide3-container12").removeClass("show-underline-slide3-container12");
        }
    });
    $(".li2-slide3-container12").on({
        mouseenter: function () {
            $(".link2-slide3-container12").addClass("show-underline-slide3-container12");
        },
        mouseout: function () {
            $(".link2-slide3-container12").removeClass("show-underline-slide3-container12");
        }
    });
    $(".li3-slide3-container12").on({
        mouseenter: function () {
            $(".link3-slide3-container12").addClass("show-underline-slide3-container12");
        },
        mouseout: function () {
            $(".link3-slide3-container12").removeClass("show-underline-slide3-container12");
        }
    });
    $(".li4-slide3-container12").on({
        mouseenter: function () {
            $(".link4-slide3-container12").addClass("show-underline-slide3-container12");
        },
        mouseout: function () {
            $(".link4-slide3-container12").removeClass("show-underline-slide3-container12");
        }
    });
    $(".li5-slide3-container12").on({
        mouseenter: function () {
            $(".link5-slide3-container12").addClass("show-underline-slide3-container12");
        },
        mouseout: function () {
            $(".link5-slide3-container12").removeClass("show-underline-slide3-container12");
        }
    });
    $(".li6-slide3-container12").on({
        mouseenter: function () {
            $(".link6-slide3-container12").addClass("show-underline-slide3-container12");
        },
        mouseout: function () {
            $(".link6-slide3-container12").removeClass("show-underline-slide3-container12");
        }
    });
    $(".li7-slide3-container12").on({
        mouseenter: function () {
            $(".link7-slide3-container12").addClass("show-underline-slide3-container12");
        },
        mouseout: function () {
            $(".link7-slide3-container12").removeClass("show-underline-slide3-container12");
        }
    });
    $(".li8-slide3-container12").on({
        mouseenter: function () {
            $(".link8-slide3-container12").addClass("show-underline-slide3-container12");
        },
        mouseout: function () {
            $(".link8-slide3-container12").removeClass("show-underline-slide3-container12");
        }
    });
    $(".li9-slide3-container12").on({
        mouseenter: function () {
            $(".link9-slide3-container12").addClass("show-underline-slide3-container12");
        },
        mouseout: function () {
            $(".link9-slide3-container12").removeClass("show-underline-slide3-container12");
        }
    });
    $("#li-slide4").click(function () {
        $("#for-li-slide4").slideToggle();
    });

    // start to create jQuery for slide 5 in footer //////////////////////////////////////////////////////
    $(".li1-slide5-container12").on({
        mouseenter: function () {
            $(".link1-slide5-container12").addClass("show-underline-slide5-container12");
        },
        mouseout: function () {
            $(".link1-slide5-container12").removeClass("show-underline-slide5-container12");
        }
    });
    $(".li2-slide5-container12").on({
        mouseenter: function () {
            $(".link2-slide5-container12").addClass("show-underline-slide5-container12");
        },
        mouseout: function () {
            $(".link2-slide5-container12").removeClass("show-underline-slide5-container12");
        }
    });
    $(".li3-slide5-container12").on({
        mouseenter: function () {
            $(".link3-slide5-container12").addClass("show-underline-slide5-container12");
        },
        mouseout: function () {
            $(".link3-slide5-container12").removeClass("show-underline-slide5-container12");
        }
    });
    $(".li4-slide5-container12").on({
        mouseenter: function () {
            $(".link4-slide5-container12").addClass("show-underline-slide5-container12");
        },
        mouseout: function () {
            $(".link4-slide5-container12").removeClass("show-underline-slide5-container12");
        }
    });
    $(".li5-slide5-container12").on({
        mouseenter: function () {
            $(".link5-slide5-container12").addClass("show-underline-slide5-container12");
        },
        mouseout: function () {
            $(".link5-slide5-container12").removeClass("show-underline-slide5-container12");
        }
    });
    $(".li6-slide5-container12").on({
        mouseenter: function () {
            $(".link6-slide5-container12").addClass("show-underline-slide5-container12");
        },
        mouseout: function () {
            $(".link6-slide5-container12").removeClass("show-underline-slide5-container12");
        }
    });
    $(".li7-slide5-container12").on({
        mouseenter: function () {
            $(".link7-slide5-container12").addClass("show-underline-slide5-container12");
        },
        mouseout: function () {
            $(".link7-slide5-container12").removeClass("show-underline-slide5-container12");
        }
    });
    $(".li8-slide5-container12").on({
        mouseenter: function () {
            $(".link8-slide5-container12").addClass("show-underline-slide5-container12");
        },
        mouseout: function () {
            $(".link8-slide5-container12").removeClass("show-underline-slide5-container12");
        }
    });
    $(".li9-slide5-container12").on({
        mouseenter: function () {
            $(".link9-slide5-container12").addClass("show-underline-slide5-container12");
        },
        mouseout: function () {
            $(".link9-slide5-container12").removeClass("show-underline-slide5-container12");
        }
    });
    $(".li10-slide5-container12").on({
        mouseenter: function () {
            $(".link10-slide5-container12").addClass("show-underline-slide5-container12");
        },
        mouseout: function () {
            $(".link10-slide5-container12").removeClass("show-underline-slide5-container12");
        }
    });
    $("#li-slide5").click(function () {
        $("#for-li-slide5").slideToggle();
    });
    // start to create jQuery for slide 6 in footer /////////////////////////////////////////////////
    $(".li1-slide6-container12").on({
        mouseenter:function(){
            $(".link1-slide6-container12").addClass("show-line-slide6");
        },
        mouseout:function(){
            $(".link1-slide6-container12").removeClass("show-line-slide6");
        }
    });
    $(".li2-slide6-container12").on({
        mouseenter:function(){
            $(".link2-slide6-container12").addClass("show-line-slide6");
        },
        mouseout:function(){
            $(".link2-slide6-container12").removeClass("show-line-slide6");
        }
    });
    $("#li-slide6").click(function(){
        $("#for-li-slide6").slideToggle();
    });
    // start to create jQuery for slide 7 in footer /////////////////////////////////////////////////
    $(".li1-slide7-container12").on({
        mouseenter:function(){
            $(".link1-slide7-container12").addClass("show-line-slide7");
        },
        mouseout:function(){
            $(".link1-slide7-container12").removeClass("show-line-slide7");
        }
    });
    $(".li2-slide7-container12").on({
        mouseenter:function(){
            $(".link2-slide7-container12").addClass("show-line-slide7");
        },
        mouseout:function(){
            $(".link2-slide7-container12").removeClass("show-line-slide7");
        }
    });
    $(".li3-slide7-container12").on({
        mouseenter:function(){
            $(".link3-slide7-container12").addClass("show-line-slide7");
        },
        mouseout:function(){
            $(".link3-slide7-container12").removeClass("show-line-slide7");
        }
    });
    $("#li-slide7").click(function(){
        $("#for-li-slide7").slideToggle();
    });
    // start to create jQuery for slide 8 in footer /////////////////////////////////////////////////
    $(".li1-slide8-container12").on({
        mouseenter:function(){
            $(".link1-slide8-container12").addClass("show-line-slide8");
        },
        mouseout:function(){
            $(".link1-slide8-container12").removeClass("show-line-slide8");
        }
    });
    $(".li2-slide8-container12").on({
        mouseenter:function(){
            $(".link2-slide8-container12").addClass("show-line-slide8");
        },
        mouseout:function(){
            $(".link2-slide8-container12").removeClass("show-line-slide8");
        }
    });
    $(".li3-slide8-container12").on({
        mouseenter:function(){
            $(".link3-slide8-container12").addClass("show-line-slide8");
        },
        mouseout:function(){
            $(".link3-slide8-container12").removeClass("show-line-slide8");
        }
    });
    $("#li-slide8").click(function(){
        $("#for-li-slide8").slideToggle();
    });

    // start to create jQuery for slide 9 in footer //////////////////////////////////////////////////
    $(".li1-slide9-container12").on({
        mouseenter:function(){
            $(".link1-slide9-container12").addClass("show-line-slide9");
        },
        mouseout:function(){
            $(".link1-slide9-container12").removeClass("show-line-slide9");
        }
    });
    $(".li2-slide9-container12").on({
        mouseenter:function(){
            $(".link2-slide9-container12").addClass("show-line-slide9");
        },
        mouseout:function(){
            $(".link2-slide9-container12").removeClass("show-line-slide9");
        }
    }); 
    $("#li-slide9").click(function(){
        $("#for-li-slide9").slideToggle();
    });

    // start to create jQuery for slide 10 in footer /////////////////////////////////////////////////
    $(".li1-slide10-container12").on({
        mouseenter:function(){
            $(".link1-slide10-container12").addClass("show-line-slide10");
        },
        mouseout:function(){
            $(".link1-slide10-container12").removeClass("show-line-slide10");
        }
    });
    $(".li2-slide10-container12").on({
        mouseenter:function(){
            $(".link2-slide10-container12").addClass("show-line-slide10");
        },
        mouseout:function(){
            $(".link2-slide10-container12").removeClass("show-line-slide10");
        }
    });
    $(".li3-slide10-container12").on({
        mouseenter:function(){
            $(".link3-slide10-container12").addClass("show-line-slide10");
        },
        mouseout:function(){
            $(".link3-slide10-container12").removeClass("show-line-slide10");
        }
    });
    $(".li4-slide10-container12").on({
        mouseenter:function(){
            $(".link4-slide10-container12").addClass("show-line-slide10");
        },
        mouseout:function(){
            $(".link4-slide10-container12").removeClass("show-line-slide10");
        }
    });
    $(".li5-slide10-container12").on({
        mouseenter:function(){
            $(".link5-slide10-container12").addClass("show-line-slide10");
        },
        mouseout:function(){
            $(".link5-slide10-container12").removeClass("show-line-slide10");
        }
    });
    $(".li6-slide10-container12").on({
        mouseenter:function(){
            $(".link6-slide10-container12").addClass("show-line-slide10");
        },
        mouseout:function(){
            $(".link6-slide10-container12").removeClass("show-line-slide10");
        }
    });
    $(".li7-slide10-container12").on({
        mouseenter:function(){
            $(".link7-slide10-container12").addClass("show-line-slide10");
        },
        mouseout:function(){
            $(".link7-slide10-container12").removeClass("show-line-slide10");
        }
    });
    $("#li-slide10").click(function(){
        $("#for-li-slide10").slideToggle();
    });
    // start to create jQuery for slide 11 in footer //////////////////////////////////////////////////
    $(".li1-slide11-container12").on({
        mouseenter:function(){
            $(".link1-slide11-container12").addClass("show-line-slide11");
        },
        mouseout:function(){
            $(".link1-slide11-container12").removeClass("show-line-slide11");
        }
    });
    $(".li2-slide11-container12").on({
        mouseenter:function(){
            $(".link2-slide11-container12").addClass("show-line-slide11");
        },
        mouseout:function(){
            $(".link2-slide11-container12").removeClass("show-line-slide11");
        }
    });
    $(".li3-slide11-container12").on({
        mouseenter:function(){
            $(".link3-slide11-container12").addClass("show-line-slide11");
        },
        mouseout:function(){
            $(".link3-slide11-container12").removeClass("show-line-slide11");
        }
    });
    $(".li4-slide11-container12").on({
        mouseenter:function(){
            $(".link4-slide11-container12").addClass("show-line-slide11");
        },
        mouseout:function(){
            $(".link4-slide11-container12").removeClass("show-line-slide11");
        }
    });
    $(".li5-slide11-container12").on({
        mouseenter:function(){
            $(".link5-slide11-container12").addClass("show-line-slide11");
        },
        mouseout:function(){
            $(".link5-slide11-container12").removeClass("show-line-slide11");
        }
    });
    $(".li6-slide11-container12").on({
        mouseenter:function(){
            $(".link6-slide11-container12").addClass("show-line-slide11");
        },
        mouseout:function(){
            $(".link6-slide11-container12").removeClass("show-line-slide11");
        }
    });
    $(".li7-slide11-container12").on({
        mouseenter:function(){
            $(".link7-slide11-container12").addClass("show-line-slide11");
        },
        mouseout:function(){
            $(".link7-slide11-container12").removeClass("show-line-slide11");
        }
    });
    $("#li-slide11").click(function(){
        $("#for-li-slide11").slideToggle();
    });
    
});
