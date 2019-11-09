import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';
import { ProgressBar, Colors } from 'react-native-paper';


class CardObra extends Component {


  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={{ flex: 1 }}>
        <View onPress={this.props.onPress} style={{
          marginTop: 10,
          flex: 1,
          backgroundColor: 'white',
          width: '95%',
          height: 100,
          flexDirection: 'column',
          borderColor: '#dddddd',
          borderWidth: 0.5,
          borderRadius: 10,
          flexDirection: 'row',
        }}>

          <View style={{ width: '35%', height: '100%', backgroundColor: '', paddingLeft: 10, paddingTop: 10, paddingRight: 10, paddingBottom: 10, borderRadius: 10 }}>
            <Image
              style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
              source={this.props.imageUri} />

          </View>

          <View style={{ width: '65%', height: '100%', backgroundColor: '', flex: 1, flexDirection: 'column' }}>
            <View style={{ width: '100%', height: '80%', backgroundColor: '' }}>


              <Text style={{
                fontSize: 20,
                paddingLeft: 5,
                paddingTop: 5,

              }}>
                {this.props.nomeObra}
              </Text>

              <Text style={{
                fontSize: 15,
                paddingLeft: 5,
                paddingTop: 2,
              }}>
                {"Inicio: " + this.props.inicioOBra}
              </Text>

              <Text style={{
                fontSize: 15,
                paddingLeft: 5,
                paddingTop: 2,
              }}>
                {"Previsão: " + this.props.previsaoOBra}
              </Text>
            </View>
            <View style={{ width: '100%', height: '20%', backgroundColor: '', flex: 1, paddingLeft: 5, paddingRight: 5, justifyContent: 'center', }}>
              <ProgressBar progress={this.props.statusBar} color={Colors.red800} />
            </View>


          </View>





        </View>
      </TouchableOpacity>

    );
  }
}
export default CardObra;
