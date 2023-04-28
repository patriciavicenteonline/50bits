/* Mostrar flecha para subir la página */

$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
});

	/* Mostrar y borrar las palabras diseñadora y programadora */
	var ShowRols = function(elements, toRotate, period){
		this.elements = elements;
		this.toRotate = toRotate;
		this.period = period || 200;
		this.txt = "";
		this.isDeleting = false;
		this.flag = 0;
		this.tick();
	}
	
	ShowRols.prototype.tick = function(){
		
        var delta = 200 - Math.random() * 100;
		
		if (this.isDeleting){
			delta /= 2;
			this.txt = this.txt.substring(0, this.txt.length - 1);
			if (this.txt == ""){
				delta = 500;
				this.isDeleting = false; 
				if (this.flag == 0){this.flag = 1;} else {this.flag = 0;}
			}
		}
		else{
			this.txt = this.toRotate[this.flag].substring(0, this.txt.length + 1);
			if (this.txt == this.toRotate[this.flag]){
				this.isDeleting = true;
				delta = this.period;
			}
		}       
	
		this.elements.innerHTML = '<span class="wrap">'+ this.txt +'</span>';
	
		var that = this;
	
		setTimeout(function() {
			that.tick();
			}, delta);
	}
	
	window.onload = function(){
		/* ShowRols */
		var elements = document.getElementsByClassName('typewrite');    
		var toRotate = elements[0].getAttribute('data-type');    
		var period = elements[0].getAttribute('data-period');
		new ShowRols(elements[0], JSON.parse(toRotate), period);
		/* ShowRols */
	}
	
