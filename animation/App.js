import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Animated,
  Text,
  TouchableWithoutFeedback
} from 'react-native'

export default class animations extends Component {
  state = {
    animation: new Animated.Value(100)
  }
  componentDidMount() {
    Animated.timing(this.state.animation, {
      toValue: 200
    }).start()
  }

  render() {
    const boxStyle = {
      height: this.state.animation
    }

    return (
      <View style={styles.container}>
        <View>
          <Animated.View style={[styles.box, boxStyle]} />
          <View style={styles.box2} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato'
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  }
})
