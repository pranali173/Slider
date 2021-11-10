$('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            1:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    }) 
 
    /*var x = 1;
    function Slideshow(){
    document.getElementById("card-img-top").src="images/image"+x+".jpeg";
    x++;
    if (x > 3)
        x = 1;
}
document.getElementById ("control_arrow").addEventListener ("click", Slideshow, false);
 
 */

 
 
 
 
 
 
 
 /*let slides = document.querySelector('.control-arrow');
    let index = 0;

    function right_arrow(){
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }

    function left_arrow(){
        slides[index].classList.remove('active');
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active');
    }

 */

    /*var[i] = 0;
    var images =[];
    var time = 3000;

        images[0] = '1.jpeg';
        images[1] = '2.jpeg';
        images[2] = '3.jpeg';
        images[3] = '4.jpeg';
        images[4] = '5.jpeg';
        images[5] = '6.jpeg';
        images[6] = '7.jpeg';

        function changeImg(){
            document.slide.src = images[i];
            if(i < images.length - 1){
                i++;
            }
            else{
                i = 0; 
            }
            setTimeout("changeImg"(), time);
        }

        window.onload = changeImg;
       */     


 

    
    /*var control_arrow = document.querySelector('.control_arrow');
    var images = ['1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg','9.jpeg','10.jpeg','11.jpeg'];
    var i = 0;

    function prev(){
        if(i <= 0 ) i = images.length;
        i--;
        return setImage;

    }

    function next(){
        if(i >= images.length -1) i = -1;
        i++;
        return setImg()

    }

    function setImg(){
        return control_arrow.setAttribute(src,'images/' +images[i]);
    }*/
    /*var span = document.getElementsByClassName('prev');
	var div = document.getElementsByClassName('card-img-top');
	var l = 0;
	span[1].onclick = () => {
		l++;
		for (var i of div) {
			if (l == 0) { i.style.right = "0px"; }
			if (l == 1) { i.style.right = "-740px"; }
			if (l == 2) { i.style.right = "-1480px"; }
			if (l == 3) { i.style.right = "-2220px"; }
			if (l == 4) { i.style.right = "-2960px"; }
			if (l > 4) { l = 4; }
		}
	}
	span[0].onclick = () => {
		l--;
		for (var i of div) {
			if (l == 0) { i.style.left = "0px"; }
			if (l == 1) { i.style.left = "-740px"; }
			if (l == 2) { i.style.left = "-1480px"; }
			if (l == 3) { i.style.left = "-2220px"; }
			if (l < 0) { l = 0; }
		}
	}
 */
    /*const slider = document.querySelector(".control_arrow");

    // "Previous" and "Next" button
    const prev = slider.querySelector("#prev");
    const next = slider.querySelector("#next");
    
    const mySlides = slider.querySelectorAll("card");
    
    // index of the image currently displayed on screen
    let indexOfImg = 0;
    mySlides[indexOfImg].className = "visible";
    
    
    let list = [];
    mySlides.forEach(function(el) {
        list.push(el);
    })
    console.log(list);
    
    list[0].className = "visible";
    
    
    // Adding "visible" class
    function makeItVisible(a) {
        list[a].className = "visible";
    }
    
    // Removing "visible" class
    function makeItInvisible(b) {
        list[b].className = "";
    }
    
    // "Click" events:
    // Previous image
    prev.addEventListener("click", function () {
        indexOfImg--;
        if (indexOfImg < 0) {
            indexOfImg = list.length-1
            makeItInvisible(0);
            makeItVisible(indexOfImg);
        } else {
            makeItInvisible(indexOfImg+1);
            makeItVisible(indexOfImg);
        }
    })
    
    // Next image
    next.addEventListener("click", function () {
        indexOfImg++;
        if (indexOfImg >= list.length) {
            indexOfImg = 0;
            makeItInvisible(list.length-1);
            makeItVisible(indexOfImg);
        } else {
            makeItInvisible(indexOfImg-1);
            makeItVisible(indexOfImg);
        }
    })
    
    */

   /* $(document).ready(function(){
        $('.right_arrow').on('click', function(){
            var currentImg = $('.active');
            var nextImg = currentImg.next();

            if(nextImg.length){
                currentImg.removeClass('active').css('z-index', -10);
                nextImg.addClass('active').css('z-index',10);
            }
        });
        
            $('.left_arrow').on('click', function(){
                var currentImg = $('.active');
                var prevImg = currentImg.prev();
    
                if(prevImg.length){
                    currentImg.removeClass('active').css('z-index', -10);
                    prevImg.addClass('active').css('z-index',10);
                }
            });
    });*/

    /*function onClickPrev(){
        if (currentImage == 0){
            slideTo(imageNumber - 1);
        } 
        else{
            slideTo(currentImage - 1);
        }       
       }

       function onClickNext(){
        if (currentImage == imageNumber - 1){
             slideTo(0);
        }
        else{
            slideTo(currentImage + 1);
        }       
    }
*/
    

