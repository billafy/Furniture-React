import React, {useState, useEffect} from 'react';
import { FAQuestions } from './utils/constants';
import {AiOutlinePlus} from 'react-icons/ai';
import './utils/help.css';

const Help = () => {
	const [FAQ, setFAQ] = useState(FAQuestions);

	useEffect(() => {
		setFAQ(FAQ.map(faq => {
			return {...faq,showAnswer:false};
		}));
	}, []);

	const toggleAnswer = (id) => {
		const newFAQ = FAQ.map(faq => {
			if(faq.id===id)
				return {...faq,showAnswer:!faq.showAnswer};
			return faq;
		});
		setFAQ(newFAQ);
	}

	return (
		<section className='help'>
			<h1>Frequently Asked Questions</h1>
			<div className='faq-list'>
				{FAQ &&
					FAQ.map(faq => {
						return (
							<div className='faq' key={faq.id}>
								<p className={faq.showAnswer ? 'question-ans' : 'question'}>
									{faq.question}
									<button onClick={()=>toggleAnswer(faq.id)}><AiOutlinePlus/></button>
								</p>
								{faq.showAnswer && 
									<p className='answer'>
										{faq.answer}
									</p>	
								}					
							</div>	
						);
					})}
			</div>			
		</section>			
	);
}

export default Help;