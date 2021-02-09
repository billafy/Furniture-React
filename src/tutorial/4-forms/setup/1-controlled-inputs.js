import React, { useState } from 'react';

const ControlledInputs = () => {
	const [firstName,setFirstName] = useState('');
	const [emailid,setEmailid] = useState('');
	const [people,setPeople] = useState([]);
	const [id,setId] = useState(1);
 	const submitForm = (event) => {
		event.preventDefault(); 
		if(firstName.length===0 || emailid.length===0)
		{
			alert('Fill all details');
			return;
		}
		const person = {id,firstName,emailid};
		setPeople((people) => {
			return [...people,person];
		});
		setFirstName('');
		setEmailid('');
		setId(id+1);
	}
	return (
		<>
			<article>
				<form className='form' onSubmit={submitForm}>
					<div className='form-control'>
						<label htmlFor='firstName'>Name : </label>	
						<input type='text' id='firstName' name='firstName' value={firstName} onChange={(event)=>setFirstName(event.target.value)}/>					
					</div>
					<div className='form-control'>
						<label htmlFor='emailid'>Email : </label>	
						<input type='text' id='emailid' name='emailid' value={emailid} onChange={(event)=>setEmailid(event.target.value)}/>					
					</div>
					<button type='submit'>Add Person</button>
				</form>
			</article>
			<div>
				{people.map((person) => {
						return (
							<p key={person.id}>Name : {person.firstName} --- Email : {person.emailid}</p>	
						);
					})}
			</div>
		</>
	);
};

export default ControlledInputs;
