for(var i = 1; i < 3; i++){
	(function (e) {
        var placeHolder = $("#placeholder-0" + e);
		var input = $("#input-0" + e);

		placeHolder.click(function(){
			input.focus();
			placeHolder.animate({
				top: '-20px',	
				fontSize: '0.8em'
			}, "500");
		});

		input.focus(function(){
			placeHolder.animate({
				top: '-20px',	
				fontSize: '0.8em'
			}, "500");
		});

		input.focusout(function(){
			field = input.val();
			if(field.length < 1)
			{
				placeHolder.animate({
					top: '5px',	
					fontSize: '1em'
				}, "500");
			}
		});

    })(i);
}