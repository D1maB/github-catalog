export const configTypes = {
	github : 'github',
	default: 'default'	
};


export const settings = {
	api: {
		default: {
			url: 'http://192.168.99.100:5000/api',
			needsToken: true,
			type: configTypes.default
		},
		
		default_auth: {
			url: 'http://192.168.99.100:5000/api/auth',
			needsToken: false,
			type: configTypes.default
		},		
		
		github: {
			url: 'https://api.github.com',
			needsToken: false,
			type: configTypes.github
		}
	}
}
