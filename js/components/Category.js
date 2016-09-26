import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	Dimensions,
	ScrollView,
	Image,
} from 'react-native';

import Card from './Card';
import { Actions } from 'react-native-router-flux';

const { height, width } = Dimensions.get('window');

class Category extends Component
{
	render()
	{
		let category = this.props.category;

		const menus = category.menus.map((menu) => {
			return (
				<Card 
					key={menu.id} 
					data={menu} 
					onPress={() => Actions.menu({ menu, category })} />
			)
		});

		return (
			<View style={styles.flex}>
				<Image resizeMode={'cover'} source={ require('../../images/bg.jpg') } style={styles.bg} />
				<ScrollView>
					<Text style={styles.categoryTitle}>Category: { category.name }</Text>
					<View style={styles.menus}>
						{ menus }
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	flex: {
		flex: 1,
	},

	bg: {
		width: width,
		height: height,
		position: 'absolute',
	},

	categoryTitle: {
		padding: 5,
		color: 'white',
		fontSize: 10,
		backgroundColor: '#4A2C68'
	},

	menus: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginVertical: 20,
	},

})

export default Category;