import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	Image,
	ScrollView,
	Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');

class Menu extends Component
{
	render()
	{
		let menu = this.props.menu;

		return (
			<View>
				<View style={styles.subtitleContainer}>
					<Text style={styles.subtitle}>{ menu.name }</Text>
					<Text style={[styles.subtitle, styles.price]}>AED { menu.price }</Text>
				</View>
				<Image 
					style={styles.image}
					resizeMode={'contain'}
					source={ require('../../images/main-course.jpeg') } />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	subtitleContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		
		padding: 5,
		marginBottom: 0,
		backgroundColor: '#4A2C68'
	},

	subtitle: {
		color: 'white',
		fontSize: 10,
		margin: 0,
	},

	price: {
		textAlign: 'right',
	},

	imageContainer: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	},

	image: {
		width: width,
		height: height,
		marginTop: -10
	}
})

export default Menu;