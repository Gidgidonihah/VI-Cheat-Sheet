$(document).ready(function($){
	var $info = $('#instruction').first();

	$('.button').on('hover', function(){
		var $that = $(this);

		$info.html($that.html());
		$('#notes > p').hide();
		if($that.find('.note1').length){ $('#note1').show();}
		if($that.find('.note2').length){ $('#note2').show();}
		if($that.find('.note3').length){ $('#note3').show();}
		if($that.find('.note4').length){ $('#note4').show();}

	});
});
