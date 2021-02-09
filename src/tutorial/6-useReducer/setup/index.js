import React, { useState, useReducer } from 'react';
import Modal from './Modal';

const reducer = (state, action) => {
	if(action.type==='ADD_ITEM') {
		const newPeople = [...state.people,action.payload];
		return {
			...state,
			people : newPeople,
			showModal : true,
			modalPopText : 'New Item Added'
		};
	}
	else if(action.type==='DELETE_ITEM') {
		const newPeople = state.people.filter((person) => person.id!==action.payload);
		return {
			...state,
			people : newPeople,
			showModal : true,
			modalPopText : 'Item Deleted Successfully'
		};
	}
	else if(action.type==='HIDE_MODAL') {
		return {
			...state,
			showModal : false,
			modalPopText : '',
		};
	}
	else if(action.type==='NO_VALUE') {
		return {
			...state,
			showModal : true,
			modalPopText : 'Please Enter Value',
		}
	}
}

const defaultStates = {
	people : [],
	showModal : false,
	modalPopText : '',
}

const Index = () => {
	const [name,setName] = useState(''); 
	const [state,dispatch] = useReducer(reducer,defaultStates);

	const deleteItem = (id) => {
		dispatch({type:'DELETE_ITEM',payload:id});
		setTimeout(()=>dispatch({type:'HIDE_MODAL'}),1000);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		if(name) {
			const person = {id:new Date().getDate().toString(),name};
			dispatch({type:'ADD_ITEM',payload:person});
		}
		else {
			dispatch({type:'NO_VALUE'});
		}
		setTimeout(()=>dispatch({type:'HIDE_MODAL'}),1000);
	}

	return (
		<>
			{state.showModal && <Modal text={state.modalPopText}/>}
			<form className='form' onSubmit={handleSubmit}>
				<div className='form-control'>
					<label>Name : </label>
					<input type='text' value={name} id='name' onChange={(event)=>setName(event.target.value)}/>
				</div>
				<button className='btn' type='submit'>Submit</button>
			</form>
			{state.people.map((person) => {
					return (
						<div key={person.id}>
							<span>{person.name}</span>
							<button style={{marginLeft:'10px'}} type='button' onClick={()=>deleteItem(person.id)}>X</button>
						</div>	
					);
				})}
		</>	
	);
};

export default Index;