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

next.on("click", function(e){
    e.preventDefault();

    if(enableClick){

        enableClick = false;

        let nextIndex = (currentInedx +1) % sliderCount;
        nextSlide(nextIndex);
        nextVisual(nextIndex);
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
        mainTit.find("li.on").addClass("upper");
        smallVisual.find("li.on").addClass("upper");

        setTimeout(function(){
            mainTit.find("li").removeClass("upper");
            mainTit.find("li").removeClass("on");
            smallVisual.find("li").removeClass("upper");
            smallVisual.find("li").removeClass("on");

            mainTit.find("li").eq(nextIndex).addClass("on");
            smallVisual.find("li").eq(nextIndex).addClass("on");
            currentInedx = nextIndex;
            console.log(currentInedx);
        },speed)
        enableClick = true;
        
        
    }else{
        currentInedx=0;
        mainTit.find("li.on").addClass("upper");
        smallVisual.find("li.on").addClass("upper");
        setTimeout(function(){
            mainTit.find("li").removeClass("upper");
            mainTit.find("li").removeClass("on");
            smallVisual.find("li").removeClass("upper");
            smallVisual.find("li").removeClass("on");
            
            mainTit.find("li").eq(nextIndex).addClass("on");
            smallVisual.find("li").eq(nextIndex).addClass("on");
        },speed)
        enableClick = true;
    }
    
}

function prevVisual(prevIndex){
    if(currentInedx > prevIndex){
        mainTit.find("li.on").addClass("upper");
        smallVisual.find("li.on").addClass("upper");

        setTimeout(function(){
            mainTit.find("li").removeClass("upper");
            mainTit.find("li").removeClass("on");
            smallVisual.find("li").removeClass("upper");
            smallVisual.find("li").removeClass("on");

            mainTit.find("li").eq(prevIndex).addClass("on");
            smallVisual.find("li").eq(prevIndex).addClass("on");

            currentInedx = prevIndex;
        },speed)
        enableClick = true;

    }else{
        currentInedx=0;
        mainTit.find("li.on").addClass("upper");
        smallVisual.find("li.on").addClass("upper");
        setTimeout(function(){
            mainTit.find("li").eq(prevIndex).addClass("on");
            smallVisual.find("li").eq(prevIndex).addClass("on");
        },speed)
        enableClick = true;
    }
}