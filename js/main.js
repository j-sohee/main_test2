//main slider
const visual = $(".visual");
const mainTit = visual.find("#mainTit")
const mainVisual_top = $(".visual2 .top");
const mainVisual_bottom = $(".visual2 .bottom");
const smallVisual = visual.find(".smallVisual");
const next = $(".next");
const prev = $(".prev");
let currentInedx = 0;
let sliderCount = mainVisual_top.find("li").length;
let speed = 500;
let enableClick = true;


slidingTxt(".tit1", 500, 0, 0);
slidingTxt(".tit2", 800, 200, 0);

next.on("click", function(e){
    e.preventDefault();

    if(enableClick){

        enableClick = false;

        let nextIndex = (currentInedx +1) % sliderCount;
        nextSlide(nextIndex);
        nextVisual(nextIndex);
        slidingTxt(".tit1", 500, 0,nextIndex);
        slidingTxt(".tit2", 800, 200,nextIndex);
    }
});


prev.on("click", function(e){
    e.preventDefault();

    if(enableClick){

        enableClick = false;

        let prevIndex = (currentInedx -1) % sliderCount;
        prevSlide(prevIndex);   
        prevVisual(prevIndex);
    }

});

function slidingTxt(el,speed,delay,nextIndex){


    mainTit.find("li.on").removeClass("on");
    mainTit.find("li").eq(nextIndex).addClass("on");

    let bgColor = $(el).children("span").css("color");
    $(el).append(
        $("<em class='mask'>")
            .css({
                display: "block",
                width: "100%",
                height: "100%",
                backgroundColor : bgColor,
                position : "absolute",
                top:0,
                left:"-100%"
            })
    )

    $(el).find(".mask").stop().delay(delay).animate({ left:0 }, speed, "easeInExpo", function(){
        $(this).prev("span").css({ opacity : 1});
        $(this).animate({ left : "100%"}, speed, "easeInExpo", function(){
            $(this).remove();
        })
    })
}

function nextSlide(nextIndex){
    if(currentInedx < nextIndex){
        mainVisual_bottom.find("li.on").removeClass("on").addClass("upper");
        setTimeout(function(){
            mainVisual_top.find("li.on").removeClass("on").addClass("upper");
        },speed)

        //두번째slide(핑크) top나오고 첫번째bottom upper사라짐
        setTimeout(function(){
            mainVisual_top.find("li").eq(nextIndex).addClass("on");
            mainVisual_bottom.eq(nextIndex-1).find("li.upper").removeClass("upper");
        },speed*2)

        ///두번째slide(핑크) bottom나오고 첫번째top upper사라짐
        setTimeout(function(){
            mainVisual_bottom.find("li").eq(nextIndex).addClass("on");
            
        },speed*2.5)
        setTimeout(function(){
            mainVisual_top.eq(nextIndex-1).find("li.upper").removeClass("upper");
            currentInedx = nextIndex;
            enableClick = true;
        },speed*3)
        
    }else{
        currentInedx=0;
        mainVisual_bottom.find("li.on").removeClass("on").addClass("upper");

        setTimeout(function(){
            mainVisual_top.find("li.on").removeClass("on").addClass("upper");
        },speed)

        setTimeout(function(){
            mainVisual_top.find("li").eq(nextIndex).addClass("on");
            mainVisual_bottom.find("li.upper").removeClass("upper");
            console.log(nextIndex);
        },speed*2)

        setTimeout(function(){
            mainVisual_bottom.find("li").eq(nextIndex).addClass("on");
            mainVisual_bottom.find("li.upper").removeClass("upper");
        },speed*2.5)

        setTimeout(function(){
            mainVisual_top.find("li.upper").removeClass("upper");
            enableClick = true;
        },speed*3)

    }
}

function prevSlide(prevIndex){
    if(currentInedx > prevIndex){
        mainVisual_bottom.find("li.on").removeClass("on").addClass("upper");
        setTimeout(function(){
            mainVisual_top.find("li.on").removeClass("on").addClass("upper");
        },speed)
        //두번째slide(핑크) top나오고 첫번째bottom upper사라짐
        setTimeout(function(){
            mainVisual_top.find("li").eq(prevIndex).addClass("on");
            mainVisual_bottom.find("li.upper").removeClass("upper");
        },speed*2)

        ///두번째slide(핑크) bottom나오고 첫번째top upper사라짐
        setTimeout(function(){
            mainVisual_bottom.find("li").eq(prevIndex).addClass("on");
            currentInedx = prevIndex;
        },speed*2.5)
        setTimeout(function(){
            mainVisual_top.find("li.upper").removeClass("upper");
            enableClick = true;
        },speed*3)
        
    }else{
        currentInedx=0;
        mainVisual_bottom.find("li.on").removeClass("on").addClass("upper");

        setTimeout(function(){
            mainVisual_top.find("li.on").removeClass("on").addClass("upper");
        },speed)

        setTimeout(function(){
            mainVisual_top.find("li").eq(prevIndex).addClass("on");
        },speed*2)

        setTimeout(function(){
            mainVisual_bottom.find("li").eq(prevIndex).addClass("on");
            enableClick = true;
        },speed*2.5)
    }

}

function nextVisual(nextIndex){
    if(currentInedx < nextIndex){
        smallVisual.find("li.on").addClass("upper");

        setTimeout(function(){
            smallVisual.find("li").removeClass("upper");
            smallVisual.find("li").removeClass("on");

            smallVisual.find("li").eq(nextIndex).addClass("on");
            currentInedx = nextIndex;
        },speed)
        enableClick = true;
        
        
    }else{
        currentInedx=0;
        smallVisual.find("li.on").addClass("upper");
        setTimeout(function(){
            smallVisual.find("li").removeClass("upper");
            smallVisual.find("li").removeClass("on");
            
            smallVisual.find("li").eq(nextIndex).addClass("on");
        },speed)
        enableClick = true;
    }
    
}

function prevVisual(prevIndex){
    if(currentInedx > prevIndex){
        smallVisual.find("li.on").addClass("upper");

        setTimeout(function(){
            smallVisual.find("li").removeClass("upper");
            smallVisual.find("li").removeClass("on");

            smallVisual.find("li").eq(prevIndex).addClass("on");

            currentInedx = prevIndex;
        },speed)
        enableClick = true;

    }else{
        currentInedx=0;
        smallVisual.find("li.on").addClass("upper");
        setTimeout(function(){
            smallVisual.find("li").eq(prevIndex).addClass("on");
        },speed)
        enableClick = true;
    }
}