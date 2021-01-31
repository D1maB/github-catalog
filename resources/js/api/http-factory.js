import axios from 'axios';
import {settings, configTypes} from '../settings';

export default class HttpFactory{
		
    static create(driver){
	
		let driver_config;
	
		switch(driver){
			case 'github': 
				driver_config = settings.api.github
			break;
			
			case 'auth': 
				driver_config = settings.api.default_auth	
			break;
			
			default: 
				driver_config = settings.api.default
		}
		
		//console.log(driver_config.url);
		
		const http = axios.create({
			baseURL: driver_config.url		  
		});
		
		//console.dir(config);

		http.interceptors.request.use(
			function (config) {

				
				let token = '';
				
				if(driver_config.type == configTypes.default && driver_config.needsToken){
					token = localStorage.getItem('user-token');
				}
				
				
				/*				
					if(config.type == configTypes.github && config.needsToken){
						const token = '...';
					}				
				*/				
								
				if (token) config.headers.Authorization = `Bearer ${token}`;
				
				//console.log(config);
				return config;
			},
				function (error) {
				return Promise.reject(error);
			}
		);

		return http;
	}	
}