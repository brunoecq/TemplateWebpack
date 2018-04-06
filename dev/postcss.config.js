module.exports = {
	plugins:{
		'postcss-cssnext':{},
		"postcss-font-magician": {
			foundries: ['google'],
			variants:{
				'Lato':{
					'300':['woff'],
					'400':[]
				}
			}
		 },
	}
}