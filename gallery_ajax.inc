
	<div class="fl-left">  
	  <ul>
	    <li>
              <a href="gallery/3.jpg" class="img-item" title="Traumgeflüster 2010 Acryl, Kohle, Pastellkreide 50x120cm">
               <div class="img-wrapper">
                 <div class="inner-border-transform-1">
                 </div>
                 <div class="inner-border-transform-2">
                 </div>
                 <div class="caption">
		  Traumgeflüster
                 </div>
                </div>
              </a>
	    </li>
	    <li>
              <a href="gallery/4.jpg" class="img-item" title="Horst 2011 80x110 Eitempera, Kohle, Pastellkreide">
               <div class="img-wrapper">
                 <div class="inner-border-transform-1">
                 </div>
                 <div class="inner-border-transform-2">
                 </div>
                 <div class="caption">
		   Horst
                 </div>
                </div>
              </a>
	    </li>
	    <li>
              <a href="gallery/5.jpg" class="img-item" title="Himmelstor 2014 100x100 Acryl, Kohle, Fineliner, Pstellkreide, Applikation, Stickerei">
               <div class="img-wrapper">
                 <div class="inner-border-transform-1">
                 </div>
                 <div class="inner-border-transform-2">
                 </div>
                 <div class="caption">
		  Himmelstor
                 </div>
                </div>
              </a>
	    </li>
	    <li>
              <a href="gallery/6.jpg" class="img-item" title="Innere Werte 2016 50x60 Acryl, Fineliner, Pastellkreide, Applikation">
               <div class="img-wrapper">
                 <div class="inner-border-transform-1">
                 </div>
                 <div class="inner-border-transform-2">
                 </div>
                 <div class="caption">
		  Innere Werte
                 </div>
                </div>
              </a>
	    </li>
	  </ul>
	</div>
	<div class="fl-left">  
	  <ul>
	    <li>
              <a href="gallery/7.jpg" class="img-item" title="Innere Werte 2016 50x60 Acryl, Fineleiner, Pastellkreide, Applikation">
               <div class="img-wrapper">
                 <div class="inner-border-transform-1">
                 </div>
                 <div class="inner-border-transform-2">
                 </div>
                 <div class="caption">
		  Innere Werte
                 </div>
                </div>
              </a>
	    </li>
	    <li>
              <a href="gallery/8.jpg" class="img-item" title="Raunacht 2016 40x50 Radierung, Sepia">
               <div class="img-wrapper">
                 <div class="inner-border-transform-1">
                 </div>
                 <div class="inner-border-transform-2">
                 </div>
                 <div class="caption">
		  Raunacht
                 </div>
                </div>
              </a>
	    </li>
	    <li>
              <a href="gallery/9.jpg" class="img-item" title="Windsbraut 2016 40x50 Radierung, Sepia">
               <div class="img-wrapper">
                 <div class="inner-border-transform-1">
                 </div>
                 <div class="inner-border-transform-2">
                 </div>
                 <div class="caption">
		  Windsbraut
                 </div>
                </div>
              </a>
	    </li>
	    <li>
              <a href="gallery/10.jpg" class="img-item" title="Sophisticated 2017 50x60 Acryl, Fineliner, Applikation, Pastellkreide">
               <div class="img-wrapper">
                 <div class="inner-border-transform-1">
                 </div>
                 <div class="inner-border-transform-2">
                 </div>
                 <div class="caption">
		  Sophisticated
                 </div>
                </div>
              </a>
	    </li>
	  </ul>
	</div>
	<div class="fl-left">  
	  <ul>
	    <li>
              <a href="gallery/11.jpg" class="img-item" title="Sophisticated 2017 50x60 Acryl, Fineliner, Applikation, Pastellkreide">
               <div class="img-wrapper">
                 <div class="inner-border-transform-1">
                 </div>
                 <div class="inner-border-transform-2">
                 </div>
                 <div class="caption">
		  Sophisticated
                 </div>
                </div>
              </a>
	    </li>
	    <li>
              <a href="gallery/12.jpg" class="img-item" title="Sophisticated 2017 50x60 Acryl, Fineliner, Applikation, Pastellkreide">
               <div class="img-wrapper">
                 <div class="inner-border-transform-1">
                 </div>
                 <div class="inner-border-transform-2">
                 </div>
                 <div class="caption">
		  Sophisticated
                 </div>
                </div>
              </a>
	    </li>
	    <li>
              <a href="gallery/1.jpg" class="img-item" title="Whaaam!!! 2014 60x80 Acryl, Kohle, Fineliner, Pastellkreide, Applikation">
               <div class="img-wrapper">
                 <div class="inner-border-transform-1">
                 </div>
                 <div class="inner-border-transform-2">
                 </div>
                 <div class="caption">
		  Whaaam!!!
                 </div>
                </div>
              </a>
	    </li>
	    <li>
              <a href="gallery/2.jpg" class="img-item" title="Wolkenschaum 2013 60x70 Acryl, Kohle, Fineliner, Pastellkreide">
                <div class="img-wrapper">
                 <div class="inner-border-transform-1">
                 </div>
                 <div class="inner-border-transform-2">
                 </div>
                 <div class="caption">
		  Wolkenschaum
                 </div>
                </div>
              </a>
	    </li>
	  </ul>
	</div>

	<script>
	  $(document).ready(function() {
	    $(".img-item").each(function() {
	      var num = $(this).attr("href").match(/\d+/);
	      $(this).find(".img-wrapper").append('<img src="gallery/' + num[0] + '_thumb.jpg">');
	    });
	    $(".img-wrapper").on("mouseenter", function() {
	      $(this).find(".inner-border-transform-2").animate({"borderWidth": "20px"}, 200);
	      $(this).find(".caption").toggleClass("toggle");
	    });
	    $(".img-wrapper").on("mouseleave", function() {
	      $(this).find(".inner-border-transform-2").animate({"borderWidth": "0px"}, 200);
	      $(this).find(".caption").toggleClass("toggle");
	    });
	  });
	</script>
