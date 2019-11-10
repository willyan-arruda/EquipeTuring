import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';
import { ProgressBar, Colors } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';


class CardObra extends Component {


  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={{ flex: 1 }}>
        <View onPress={this.props.onPress} style={{
          marginTop: 10,
          flex: 1,
          backgroundColor: 'white',
          width: '95%',
          height: 50,
          flexDirection: 'column',
          borderColor: '#dddddd',
          borderWidth: 0.5,
          borderRadius: 10,
          flexDirection: 'row',
        }}>



          <View style={{ width: '65%', height: '100%', backgroundColor: '', flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <View style={{ width: '100%', height: '80%', backgroundColor: '', paddingLeft: 5}}>


              <Text style={{
                fontSize: 20,
                paddingLeft: 5,
                paddingTop: 5,

              }}>
                {this.props.nomeTarefa}
              </Text>


            </View>


          </View>
          <View style={{ width: '15%', height: '100%', backgroundColor: '', paddingLeft: 10, paddingTop: 10, paddingRight: 10, paddingBottom: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Checkbox
              title='Click Here'
              status={this.props.status}

            />

          </View>





        </View>
      </TouchableOpacity>

    );
  }
}
export default CardObra;
