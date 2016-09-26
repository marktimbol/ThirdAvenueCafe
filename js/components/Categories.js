import React, {
	Component
} from 'react';

import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Image,
	Dimensions
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as categoriesActionCreators from '../actions/categories';
import { Actions } from 'react-native-router-flux';
import Card from './Card';

const { height, width } = Dimensions.get('window');

class Categories extends Component
{
	componentDidMount()
	{
		this.props.fetchCategories();
	}

	render()
	{
		const categories = this.props.categories.map((category) => {
			return (
				<Card 
					key={category.id} 
					data={category}
					onPress={() => Actions.category({ category })} />
			)
		});

		return (
			<View style={styles.flex}>
				<Image resizeMode={'cover'} source={ require('../../images/bg.jpg') } style={styles.bg} />
				<ScrollView>
					<View style={styles.categories}>
						{ categories }
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

	categories: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginVertical: 20,
	}
})

const mapStateToProps = (state) => {
	return {
		categories: state.categories
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(categoriesActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);