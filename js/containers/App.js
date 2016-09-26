'use strict';

import React, {
	Component
} from 'react';

import { Provider } from 'react-redux';
import store from '../store';
import ThirdAvenueCafe from './ThirdAvenueCafe';

class App extends Component
{
	render()
	{
		return (
			<Provider store={store}>
				<ThirdAvenueCafe />
			</Provider>
		)
	}
}

export default App;