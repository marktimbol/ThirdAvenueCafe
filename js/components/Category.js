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
					<View>
						<Text style={styles.categoryTitle}>Category: { category.name }</Text>
					</View>
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
		color: 'white',
		fontSize: 10,
		padding: 5,
		textAlign: 'center',
		backgroundColor: '#6B447B',
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