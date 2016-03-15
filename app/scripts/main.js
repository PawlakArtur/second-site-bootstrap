for(var i = 1; i < 5; i++){
	(function (e) {
        var placeHolder = $("#placeholder-0" + e);
		var input = $("#input-0" + e);

		placeHolder.click(function(){
			console.log("click");
			input.focus();
			placeHolder.animate({
				top: '-20px',	
				fontSize: '0.8em'
			}, "500");
		});

		input.focus(function(){
			console.log("focus");
			placeHolder.animate({
				top: '-20px',	
				fontSize: '0.8em'
			}, "500");
		});

		input.focusout(function(){
			console.log("focus-out");
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