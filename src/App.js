import React from 'react';
import Header from './Components/Header/Header';
import ContentsTop from './Components/Contents/ContentsTop';
import Todolist from './Components/Contents/Todolist';
import './App.css';
import './Components/common.scss';
import './Components/style.scss';

function App() {
	const list = [];

	for (let i = 0; i < 10; i++) {
		switch (i) {
			case 0:
			case 3:
			case 6:
			case 7:
			case 8:
				list.push(
					<Todolist
						image={`https://i.pinimg.com/736x/61/57/8f/61578fcaff4659caf862f76d1b9fd747.jpg`}
					/>
				);
				break;
			default:
				list.push(<Todolist />);
				break;
		}
	}

	return (
		<div className="App">
			<Header />
			<div className="contents">
				<ContentsTop />
				<ul className="todolist">
					{list.map((item, idx) => {
						return (
							<li className="todolist__item" key={idx}>
								{item}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
