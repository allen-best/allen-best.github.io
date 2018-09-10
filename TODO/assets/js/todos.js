$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append('<li>' + todoText + '<span class="deleteButton"><i class="fa fa-trash"></i></span></li>');
	}
});

$("ul").on("click","li",function(event){
	$(this).toggleClass("completed");
});

$("ul").on("click",".deleteButton",function(event){
	$(this).parent().toggleClass("completed");
		$(this).parent().fadeOut(1000, function(){
			$(this).remove();
		});
	//event.stopPropagation();

});

$("i.fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});

$(".button").click(function(){
	window.location = "https://thekingbest.github.io/index.html" + this.id;
});

