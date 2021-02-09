import { useState, useEffect } from 'react';

export const useFetch = (url) => {
	const [isLoading,setIsLoading] = useState(true);
	const [data,setData] = useState([]);
	const [isError,setIsError] = useState(false);

	useEffect(() => {
		fetch(url)
		.then((response) => {
			if(response.status>=200 && response.status<=299)
				return response.json();
			setIsLoading(false);
			setIsError(true);
		})
		.then((data) => {
			setData(data);
			setIsLoading(false);
		})
		.catch(() => {
			setIsLoading(false);
			setIsError(true);
		})
	}, []);

	return {isLoading, data, isError};
};
