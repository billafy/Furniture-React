import React, {useState, useContext} from "react";

const data = [
    { id: 1, name: "Yash" },
    { id: 2, name: "Billa" },
    { id: 3, name: "Tarkar" },
];

// more components
// fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();

const ContextAPI = () => {
    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        setPeople((people) => {
            return people.filter((person) => id !== person.id);
        });
    };

    return (
        <>
            <PersonContext.Provider value={{removeItem}}>
                <h1>Context API usecontext</h1>
                <List people={people}/>
            </PersonContext.Provider>
        </>
    );
};

const List = ({people}) => {
    return (
        <>
            {people.map((person) => {
                return (
                    <Person key={person.id} {...person}/>
                );
            })}
        </>
    );
};

const Person = ({id,name}) => {
    const {removeItem} = useContext(PersonContext);
    return (
        <>
            <div key={id} className="item">
                <p>{name}</p>
                <button type="button" onClick={() => removeItem(id)}>
                    Remove
                </button>
            </div>
        </>
    );
};

export default ContextAPI;
