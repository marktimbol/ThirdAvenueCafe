import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	Dimensions,
	Image,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
const { height, width } = Dimensions.get('window');

class Card extends Component
{
	render()
	{
		let data = this.props.data;

		return (
			<TouchableHighlight 
				style={styles.card} 
				onPress={this.props.onPress.bind(this)}
				underlayColor='#ccc'
			>
				<View style={styles.flex}>
					<Image source={require('../../images/main-course.jpeg')} resizeMode={'cover'} style={styles.card__image} />
					<View style={styles.card__content}>
						<Text style={styles.card__title} numberOfLines={1}>{ data.name }</Text>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	flex: {
		flex: 1,
		flexDirection: 'column'
	},

	card: {
		width: (width / 3) - 30,
		height: 130,
		margin: 5,
		opacity: 0.9,
		backgroundColor: '#ddd',
	},

	card__image: {
		width: (width / 3) - 30,
		height: 100,
	},

	card__content: {
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},

	card__title: {
		color: '#333',
	}
})

export default Card;