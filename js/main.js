//main slider
const visual = $(".visual");
const mainTit = visual.find("#mainTit")
const mainVisual = $(".visual2 .mainVisual");
const mainVisual_top = $(".visual2 .top");
const mainVisual_bottom = $(".visual2 .bottom");
const smallVisual = visual.find(".smallVisual");
const next = $(".next");
const prev = $(".prev");
let currentInedx = 0;
let sliderCount = mainVisual_top.find("li").length;
let speed = 500;

next.on("click", function(e){
    e.preventDefault();

    let nextIndex = (currentInedx +1) % sliderCount;

    if(currentInedx < nextIndex){
        mainVisual_bottom.find("li.on").removeClass("on").addClass("upper");
        setTimeout(function(){
            mainVisual_top.find("li.on").removeClass("on").addClass("upper");
            
        },speed)

        //핑크top나오고 첫번째bottom없앰
        setTimeout(function(){
            mainVisual_top.find("li").eq(nextIndex).addClass("on");

            mainVisual_bottom.find("li.upper").removeClass("upper");
            console.log(nextIndex);
        },speed*2)

        setTimeout(function(){
            mainVisual_bottom.find("li").eq(nextIndex).addClass("on");
            mainVisual_top.find("li.upper").removeClass("upper");
            currentInedx = nextIndex;
        },speed*2.5)
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
        },speed*2.5)
    }

});


prev.on("click", function(e){
    e.preventDefault();


    mainTit.find("li.on").addClass("upper");
    
    setTimeout(function(){
        mainTit.find("li").removeClass("on");
        mainTit.find("li").removeClass("upper");
        if(num>0){
            mainTit.find("li").eq(num-1).addClass("on");
            num--;
        }else{
            num = 2;
            mainTit.find("li").eq(num).addClass("on");
        }
    },500)
});

