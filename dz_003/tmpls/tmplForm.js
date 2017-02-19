function tmplForm () {
	var form = '<div class="form">\n'+
	'<label><input type="text" name="name"> name</label><br>\n' +
        '<label><input type="text" name="surname"> surname</label><br>\n' +
        '<label><input type="text" name="skype"> skype</label><br>\n'+
        '<button value="close" class="button_close">close</button> '+
        '<button value="save" class="button_save">save</button>'+
        '</div>';
	return form;
}
