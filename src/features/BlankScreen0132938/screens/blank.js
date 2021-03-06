import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_7: "cxzcxz" }

  render = () => (
    <View style={styles.View_1}>
      <View style={styles.View_5}>
        <TextInput
          placeholder="Sample text input placeholder"
          editable={true}
          style={styles.TextInput_7}
          value={this.state.TextInput_7}
          onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
        />
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
