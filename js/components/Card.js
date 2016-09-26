import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	Dimensions,
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
				<View>
					<Text>{ data.name }</Text>
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	card: {
		width: (width / 3) - 30,
		height: 100,
		margin: 5,
		padding: 10,
		borderRadius: 5,
		opacity: 0.9,
		backgroundColor: '#ddd',
		alignItems: 'center',
		justifyContent: 'center'
	},
})

export default Card;