import React, {useState} from 'react';

const UseStateArray = () => {
	const liverpool = [{id:1,name:'Salah'},{id:2,name:'Mane'},{id:3,name:'Firmino'}];
	const manutd = [{id:4,name:'Rashford'},{id:5,name:'Martial'},{id:6,name:'Greenwood'}];
	const [players,setPlayers] = useState(liverpool);
	const changeList = () => {
		setPlayers((prevState) => { 
			return manutd;
		});
	}
	const deleteItem = (id) => {
		setPlayers((players) => {
			let newPlayers = players.filter((player) => player.id !== id);
			return newPlayers;  
		});
	}
	return(
		<React.Fragment>
			{players.map((player)=> {
				return <p key={player.id} className='item'>{player.name}<button type='button' onClick={()=>deleteItem(player.id)}>Remove</button></p>
				})}
			<button type='button' className='btn' onClick={changeList}>Change player list</button>
		</React.Fragment>
	);
};

export default UseStateArray;
