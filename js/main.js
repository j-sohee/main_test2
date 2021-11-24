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
    }
});


prev.on("click", function(e){
    e.preventDefault();

    if(enableClick){

        enableClick = false;

        let nextIndex = (currentInedx -1) % sliderCount;
        prevSlide(nextIndex);   
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
            mainVisual_bottom.find("li.upper").removeClass("upper");
            console.log(nextIndex);
        },speed*2)

        ///두번째slide(핑크) bottom나오고 첫번째top upper사라짐
        setTimeout(function(){
            mainVisual_bottom.find("li").eq(nextIndex).addClass("on");
            currentInedx = nextIndex;
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
            mainVisual_top.find("li").eq(nextIndex).addClass("on");
            console.log(nextIndex);
        },speed*2)

        setTimeout(function(){
            mainVisual_bottom.find("li").eq(nextIndex).addClass("on");
            enableClick = true;
        },speed*2.5)
        
    }
}

function prevSlide(nextIndex){
    if(currentInedx > nextIndex){
        mainVisual_bottom.find("li.on").removeClass("on").addClass("upper");
        setTimeout(function(){
            mainVisual_top.find("li.on").removeClass("on").addClass("upper");
        },speed)
        //두번째slide(핑크) top나오고 첫번째bottom upper사라짐
        setTimeout(function(){
            mainVisual_top.find("li").eq(nextIndex).addClass("on");
            mainVisual_bottom.find("li.upper").removeClass("upper");
        },speed*2)

        ///두번째slide(핑크) bottom나오고 첫번째top upper사라짐
        setTimeout(function(){
            mainVisual_bottom.find("li").eq(nextIndex).addClass("on");
            currentInedx = nextIndex;
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
            mainVisual_top.find("li").eq(nextIndex).addClass("on");
            console.log(nextIndex);
        },speed*2)

        setTimeout(function(){
            mainVisual_bottom.find("li").eq(nextIndex).addClass("on");
            enableClick = true;
        },speed*2.5)
    }

}