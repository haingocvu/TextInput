import React, { Component } from 'react'
import { SafeAreaView, TextInput, Text, StyleSheet, View } from 'react-native'

const appStyle = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		backgroundColor: 'white',
		padding: 10
	}
})

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		}
	}
	render() {
		return (
			<SafeAreaView style={appStyle.container}>
				<TextInput style={{height: 80}} placeholder="Type here to translate!" onChangeText={text => this.setState({text})}></TextInput>
				<Text>{this.mapText(this.state.text)}</Text>
			</SafeAreaView>
		)
	}

	mapText(_text) {
		return _text.split(' ').map(value => value && '🍕').join(' ');
	}
}
