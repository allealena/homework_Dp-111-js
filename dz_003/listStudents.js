/*Создать список группы и вывести его в браузере*/

window.onload = function () {
	var content = document.getElementById('content'),
		table = '<table>',
		header = '<thead><tr>',
		tableBody = '<tbody>',
		students = [
			{
	        name: 'Владимир',
	        gender: 'муж.',
	        skype: 'vovanium'
				},
			{
	        name: 'Алексей',
	        gender: 'муж.',
	        skype: 'izaya256'
				},
			{
			name: 'Ирина',
	        gender: 'жен.',
	        skype: 'princess_rina88'	
				},
			{
			name: 'Светлана',
	        gender: 'жен.',
	        skype: 'ami-caty'	
				},
			{
			name: 'Елена',
	        gender: 'жен.',
	        skype: 'dn100980rev'	
				},
			{
			name: 'Полина',
	        gender: 'жен.',
	        skype: 'polina_volna'
				}
		];
	
	//create a tablehead
	for (var key in students[0]) {
		header += '<th>' + key + '</th>';
	}
	header+='</tr></thead>';

	//create a tablebody
	for (var key in students) {
		tableBody += '<tr>';

		for (var item in students[key]){
			tableBody += '<td>' + students[key][item] + '</td>';
		}

		tableBody += '</tr>';
	}

	tableBody += '</tbody>';
	table += header + tableBody + '</table>';
	content.innerHTML = table;
}