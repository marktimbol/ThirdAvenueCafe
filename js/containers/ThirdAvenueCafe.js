import React, {
	Component
} from 'react';

import {
	StyleSheet
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import Categories from '../components/Categories';
import Category from '../components/Category';
import Menu from '../components/Menu';

class ThirdAvenueCafe extends Component
{
	render()
	{
		return (
			<Router
				navigationBarStyle={styles.router}
				sceneStyle={styles.scene}
				titleStyle={styles.title}
			>
				<Scene key="root">
					<Scene key="categories" component={Categories} title="3rd Avenue Cafe" initial={true} />
					<Scene key="category" component={Category} title="Menus" />
					<Scene key="menu" component={Menu} title="Menu" />
				</Scene>
			</Router>
		)
	}
}

const styles = StyleSheet.create({
	router: {
		flex: 1,
		backgroundColor: '#161A40',
		borderBottomWidth: 0,
	},
	scene: {
		paddingTop: 64,
	},
	title: {
		color: 'white',
	},
});

export default ThirdAvenueCafe;