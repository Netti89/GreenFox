$(function(){

    let data1= {
        photo: 'images/yellow-fish.jpg',
        title: 'Yellow fish',
        description: 'This is a yellow fish'
      };

      let data2={
        photo: 'images/orange-fish.jpg',
        title: 'Orange-fish',
        description: 'This is a orange-fish'
      };

      let data3={
        photo: 'images/blue-fish.jpg',
        title: 'Blue-fish',
        description: 'This is a blue-fish'
      };

      let data4={
        photo: 'images/small-fish.jpg',
        title: 'Small-fish',
        description: 'This is a small-fish'
      };

    
    var imgsrc=[
        data1,
        data2,
        data3,
        data4
    ];

    //var imgsrc=[
    //"images/templom.jpg",
    //"images/virag.jpg",
    //"images/rokakoma.jpg",
    //"images/lila.jpg",
    //"images/zseda.jpg"];

    $storage=$('.storage');
    $viewer=$('.viewer');
    

    $index=0;

    for (var i=0; i<imgsrc.length; i++){
        $storage.append("<div class="+"image"+i+"></div>");
        $('.image'+i).append("<img src="+imgsrc[i].photo+"></img>");
        $viewer.append("<img class='myslides' src="+imgsrc[i].photo+"></img>");
        $viewer.append("<span class='myspan'></span>");
        $viewer.append("<text class='mytext'>"+imgsrc[i].title+'<br>'+imgsrc[i].description+"</text>")
        $viewer.append("<input class='prev' type='button' value="<" ></input>")
    }
   
    $('.viewer .myslides:eq(0)').css("display","block"); 
    $('.viewer .myspan:eq(0)').css("display","block"); 
    $('.viewer .mytext:eq(0)').css("display","block");  
 


    //getMeta()
    //function getMeta(){   
        //var img = new Image();
        //img.onload = function(){
            //alert( this.width+' '+ this.height );
        //};
        //img.src = imgsrc[1].photo;
    //}
   
    $('.storage img:eq(0)').addClass('active');

    $myslides=$('.myslides');
    $stimg=$('.storage img');
    $myspan=$('.myspan');
    $mytext=$('.mytext');

    $(document).on("keydown", ()=>{
    $myslides.css("display","none");
    $myspan.css("display","none");
    $mytext.css("display","none");
    $stimg.removeClass('active');
    $index=show($index);

    if ($index>imgsrc.length-1){
        $index=0;
    }
    else if ($index<0){
        $index=imgsrc.length-1;
    }


    $('.myslides:eq('+$index+')').css("display","block");
    $('.myspan:eq('+$index+')').css("display","block");
    $('.mytext:eq('+$index+')').css("display","block");
    $('.storage img:eq('+$index+')').addClass('active');

    });

    
    function show ($index){
        if (event.keyCode==39){
        $index++;
        }
        if (event.keyCode==37){
        $index--;
        }
        return $index;
    }

    $('.nxt').click(()=> {
    $myslides.css("display","none");
    $myspan.css("display","none");
    $mytext.css("display","none");
    $stimg.removeClass('active');
    $index=$index+1;

    if ($index>imgsrc.length-1){
        $index=0;
    }
    else if ($index<0){
        $index=imgsrc.length-1;
    }

    $('.myslides:eq('+$index+')').css("display","block");
    $('.mytext:eq('+$index+')').css("display","block");
    $('.storage img:eq('+$index+')').addClass('active');
    $('.myspan:eq('+$index+')').css("display","block");
    });

    $('.prev').click(()=> {
    $('.myslides').css("display","none");
    $myspan.css("display","none");
    $mytext.css("display","none");
    $stimg.removeClass('active');
    $index=$index-1;

    if ($index<0){
        $index=imgsrc.length-1;
    }
    

    $('.myslides:eq('+$index+')').css("display","block");
    $('.mytext:eq('+$index+')').css("display","block");
    $('.storage img:eq('+$index+')').addClass('active');
    $('.myspan:eq('+$index+')').css("display","block");
    });


});

