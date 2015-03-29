
//move this data to parse or something
data = {
	'AP Physics': {
		'Scholla':{
			'hours': 6
			'hoursVariance': 0
			'difficulty': 8
			'difficultyVariance':0
			'numEntries': 1
		}
		'Hannum':{

		}
	}

}



function enter(c, t, hours, difficulty){ //class, teacher, hours, difficulity
	num = data[c][t]['numEntries'] 
	data[c][c]['hoursVariance'] = (data[c][t]['hoursVariance']*num + (hours-data[c][t]['hours'])**2)/(num + 1)
	data[c][c]['difficultyVariance'] = (data[c][t]['difficultyVariance']*num + (hours-data[c][t]['difficulty'])**2)/(num + 1)
	data[c][t]['hours'] = (data[c][t]['hours']*num + hours)/(num + 1)
	data[c][c]['difficulty'] = (data[c][t]['difficulty']*num + difficulty)/(num + 1)
	data[classKey][teacherKey]['numEntries'] += 1

}

