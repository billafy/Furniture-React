import React, {useState} from "react";

const data = [
	{id:1,name:'Yash'},
	{id:2,name:'Billa'},
	{id:3,name:'Tarkar'},
];

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
	const [people,setPeople] = useState(data);

	const removeItem = (id) => {
		setPeople((people) => {
			return people.filter((person) => id!==person.id);
		})
	}

	return (
		<>
			<h1>Drill them props</h1>
			<List people={people} removeItem={removeItem}/>
		</>	
	);
};

const List = ({people,removeItem}) => {
	return (
		<>
			{people.map((person) => {
					return (
						<Person key={person.id} {...person} removeItem={removeItem}/>	
					);
				})}
		</>
	);
}

const Person = ({id,name,removeItem}) => {
	return (
		<>
			<div key={id} className='item'>
				<p>{name}</p>
				<button type='button' onClick={()=>removeItem(id)}>Remove</button>
			</div>
		</>	
	);
}

export default PropDrilling;
