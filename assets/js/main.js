//Sticky Navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Google Map
function initMap(){
  const map_selector=document.getElementById('map');
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.08542268398697, lng: 28.774596556789998},
    zoom: 8,
    mapId: '1e0085b3620a9f1d',
    rotateControl: false,
    fullscreenControl: false,
    zoomControl: false
  });


  const marker=new google.maps.Marker({
    position:{lat:40.70221655273088, lng: 31.1249302489001},
    map,
    icon:{
    url: map_selector.getAttribute("data-icon"),
    scaledSize: new google.maps.Size(80, 100), // scaled size
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  }

     
  });
  const infowindow = new google.maps.InfoWindow({
    content:'Business Port Istanbul </br> Yenibosna Merkez Mah.Kavak Sok.No: 11/26, 34197 </br>' +
     ' Bahçelievler, Istanbul/Turkiye </br> T: +90 212 654 74 94 / F: +90 212 654 74 52 </br>'+
     'info@marprologistics.com',
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
}


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      autoplay:true,
      autoplayTimeout:3000,
      smartSpeed: 1000, 
      arrows:false,
      responsive: {
          0: {
          items: 2,
          },
          600: {
          items: 3,
          },
          900: {
          items: 4,
          },
          1300: {
            items:5,
          }
      },
  });

     //Counter
    $(".count").countUp();


    $('.carousel').slick({
      centerMode: true,
      slidesToShow: 1,
      infinite:false,
      infinite:true,
      nextArrow: '<span class="slick-next"><span class="mkd-icon-linear-icon lnr lnr-arrow-right" aria-hidden="true"></span>',
      prevArrow: '<span class="slick-prev"><span class="mkd-icon-linear-icon lnr lnr-arrow-left" aria-hidden="true"></span>'

      });
    });
  
  
    //Mobile Menu
    $(document).ready(function(){
 
      var nav_mobile_box=$('.nav_mobile_box');
    
      $('.mobile_nav_btn').click(function(){
          nav_mobile_box.addClass('show')
    
          setTimeout(()=>{
              nav_mobile_box.addClass('active_menu')
          },100)
      });
    
      function closeMenu(){
          nav_mobile_box.removeClass('active_menu')
    
          setTimeout(()=>{
              nav_mobile_box.removeClass('show')
          },400)
    
      }
    
      $('.nav_mobile_close_btn').click(function(){
        
          closeMenu();
      });
      $('*').click(function(e){
         if(!$(e.target).is('.nav_mobile_box_in') && !$(e.target).is('.nav_mobile_box_in *'))
         if(!$(e.target).is('.mobile_nav_btn') && !$(e.target).is('.mobile_nav_btn *')){
         
             closeMenu();
         }
    
        });
    
        $(window).keyup(function(e){
            var key_code=e.which || e.keyCode;
             
           if(key_code==27){
               closeMenu();
           }
    
        });
        $(window).resize(function(){
            closeMenu();
        });
    });
    
      
    
  
    
    