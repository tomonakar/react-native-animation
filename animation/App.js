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
    animation: new Animated.Value(1)
  }
  componentDidMount() {
    Animated.timing(this.state.animation, {
     timingOpacity
      toValue: 0,
      duration: 140
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500
      }).start()
    })
  }

  render() {
    const yInterpolate = this.state.animation.interpolate({
      inputRange: [1, 2],
      outputRange: [0, -25]
    })

    const boxStyle = {
      transform: [
        { scaleY: this.state.animation },
        { translateY: yInterpolate }
      ]
    }

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.box2} />
          <Animated.View style={[styles.box, boxStyle]} />
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
