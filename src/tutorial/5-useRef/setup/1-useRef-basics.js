import React, {useState, useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
	const firstName = useRef(null);
	const buttonRef = useRef(null);
	const [students,setStudents] = useState([]);
	const submitForm = (event) => {
		event.preventDefault();
		const name = firstName.current.value;
		if(!name)
		{
			alert('Empty Name Field');
			return;
		}
		setStudents([...students,name]);
		firstName.current.value = '';
		buttonRef.current.alt = name;
	}
	useEffect(() => {

	});
	return (
		<>
			<form className='form' onSubmit={submitForm}>
				<div className='form-control'>
					<label htmlFor='firstName'>Name</label>
					<input type='text' ref={firstName}/>
					<button type='submit' ref={buttonRef}>Submit</button>
				</div>
			</form>
			<div>
				{students.map((student) => {
						return <h1>{student}</h1>
					})}
			</div>
		</>
	);
};

export default UseRefBasics;
