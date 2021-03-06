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

import Swiper from 'react-native-swiper';

const { height, width } = Dimensions.get('window');

class Menu extends Component
{
	componentDidMount()
	{
		console.log(this.props);
	}

	render()
	{
		let menu = this.props.menu;
		let category = this.props.category;

		const categoryMenus = category.menus.map((categoryMenu) => {
			return (
				<View style={styles.menu} key={categoryMenu.id}>
					<Image 
						style={styles.featuredImage}
						resizeMode={'cover'}
						source={ require('../../images/main-course.jpeg') } />
					<View style={styles.descriptionContainer}>
						<ScrollView>
							<Text style={styles.name}>{categoryMenu.name}</Text>
							<Text style={styles.price}>AED {categoryMenu.price}</Text>
							<Text style={styles.description}>
								{ categoryMenu.description }
							</Text>
						</ScrollView>
					</View>
				</View>
			);
		})
		return (
			<Swiper showButtons={true} loop={true}>
				{ categoryMenus }
			</Swiper>
		)
	}
}

const styles = StyleSheet.create({

	menu: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},

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

	featuredImage: {
		width: width,
		height: height,
		marginTop: -10,
		position: 'absolute'
	},

	descriptionContainer: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',

		width: width / 3,
		padding: 10,
		opacity: 0.8,
		backgroundColor: 'white',
	},

	name: {
		fontSize: 20,
		color: '#161A40',
	},

	price: {
		fontSize: 26,
		color: '#161A40',
		fontWeight: 'bold',
		marginVertical: 20,
	},

	description: {
		fontSize: 14,
		color: '#333',
	},

	ribbon: {
		height: 30,
		marginTop: 20,
	}
})

export default Menu;