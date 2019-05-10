import React from 'react';
import Title from './components/Title';
import Button from './components/Button';
import sendMessage from './helpers/sendMessage';

const bonfire = require('./assets/bonfire.gif');

function App() {
	return (
		<div className='App'>
			<Title props={{ title: 'Anderson Died' }} />
			<Button props={{ title: 'Died', function: () => sendMessage }} />
			<div style={{ textAlign: 'center' }}>
				<img src={bonfire} alt='bonfire' height='400px' width='auto' />
			</div>
		</div>
	);
}

export default App;
