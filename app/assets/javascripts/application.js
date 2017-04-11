// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//= require jquery
//= require jquery_ujs
//= require_tree ../../../vendor/assets/javascripts/.
//= require ckeditor/init
//= require_directory .
//= require_tree .

// side menu js
$(function(){
	var menu = $('#menu'), 
	    menuBtn = $('#menu-btn'),
	    closeBtn = $('#close-btn') ,
	    body = $(document.body),     
	    menuWidth = menu.outerWidth();                
	     
	    menuBtn.on('click', function(){
	    body.toggleClass('open');
	        if(body.hasClass('open')){
	            
	            body.animate({'right' : menuWidth }, 300);            
	            menu.animate({'right' : 0 }, 300);                    
	        } else {
	            menu.animate({'right' : -menuWidth }, 300);
	            body.animate({'right' : 0 }, 300);            
	        } 
	    });

	    closeBtn.click(function() {
	    	menu.animate({'right' : -menuWidth }, 300);
	        body.animate({'right' : 0 }, 300);
	    });            
	});

	$("#menu").scroll(function(){
		var st = $("#menu").scrollTop();


});
// side menu fin.