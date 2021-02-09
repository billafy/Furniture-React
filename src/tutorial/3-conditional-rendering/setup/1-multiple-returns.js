import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
	const [userInfo,setUserInfo] = useState({});
	const [isLoading,setIsLoading] = useState(true);
	const [isError,setIsError] = useState(false);

 	useEffect(() => {
 		fetch(url)
 		.then((response) => {
 			if(response.status >= 200 && response.status <= 299) 
 				return response.json();
 			setIsLoading(false);
 			setIsError(true);
 		})
 		.then((user) => {
 			console.log(user);
 			setUserInfo(user);
 			setIsLoading(false);
 		})
 		.catch((error) => {
 			setIsLoading(false);
 			setIsError(true);
 		});
	},[]);

	if(isLoading)
		return <h1>Loading...</h1>;
	else if(isError)
		return <h1>Error</h1>;
	else
		return (
			<>
				<section key={userInfo.id}>
					<img style={{height:'100px'}} src={userInfo.avatar_url}/>
					<h3>{userInfo.login}</h3>
				</section>			
			</>
		);
};

export default MultipleReturns;