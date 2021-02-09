import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../../data";

const Person = () => {
	const {id} = useParams();
	const [person,setPerson] = useState({});

	useEffect(() => {
		const newPeople = data.filter(item => item.id===Number(id));
		setPerson(newPeople[0]);
	}, [id]);

	return (
		<div>
			<h2>{person.name}</h2>
			<p>{person.text}</p>
		</div>
	);
};

export default Person;
