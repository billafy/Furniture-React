import React, { useState } from "react";

const ControlledInputs = () => {
	const [people, setPeople] = useState([]);

	const [person,setPerson] = useState({firstName:'',emailid:'',age:''});

	const submitForm = (event) => {
		event.preventDefault();
		if(!person.firstName || !person.emailid || !person.age)
		{
			alert('Incomplete details provided');
			return;
		}
		setPeople((people) => {
			return [...people,person];
		});
		setPerson({firstName:'',emailid:'',age:''});
	}

	const handleChange = (event) => {
		event.preventDefault();
		setPerson({...person,[event.target.name]:event.target.value});
	}

	return (
		<>
			<article>
				<form className="form" onSubmit={submitForm}>
					<div className="form-control">
						<label htmlFor="firstName">Name : </label>
						<input 
							type="text"
							id="firstName"
							name="firstName"
							value={person.firstName}
							onChange={handleChange}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="emailid">Email : </label>
						<input
							type="text"
							id="emailid"
							name="emailid"
							value={person.emailid}
							onChange={handleChange}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="age">Age : </label>
						<input
							type="text"
							id="age"
							name="age"
							value={person.age}
							onChange={handleChange}
						/>
					</div>
					<button type="submit">Add Person</button>
				</form>
			</article>
			<div>
				{people.map((person) => {
					return (
						<p key={person.id}>
							Name : {person.firstName} --- Email : {person.emailid} --- Age : {person.age}
						</p>
					);
				})}
			</div>
		</>
	);
};

export default ControlledInputs;
