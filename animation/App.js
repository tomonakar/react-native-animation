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
    animation: new Animated.Value(150)
  }
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1500
    }).start(() => {
      this.state.animation.setValue(150)
    })
  }

  render() {
    const animatedStyles = {
      width: this.state.animation,
      height: this.state.animation
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Text>
              testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
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
    // width: 150,
    // height: 150,
    backgroundColor: 'tomato'
  }
})
