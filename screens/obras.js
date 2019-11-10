import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { TextInput, Platform, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, ScrollView, Dimensions, Modal, } from 'react-native';
import { SearchBar, Avatar, } from 'react-native-elements';
import CardOBra from '../components/Explore/CardObra'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalObra from '../components/Explore/ModalObra';
import {createStackNavigator} from 'react-navigation';





export default class principal extends Component {

  state = {
    email: '',
    password: '',
    isAuthenticated: false,

    //estado do modal
    modalVisible: false,
    nomeObra: '',
    dataInicio: '',
    dataFim: '',
    progressoBar: '',
    imageModal: '',


  }


  login = async () => {
    const { email, password } = this.state;

    try {
      const user = await firebase.auth().signInWithEmailAndPassword(email, password);
      this.setState({ isAuthenticated: true });
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  }

  //Sem uso por enquanto
  mudaStatus = () => {
    this.setState({ modalVisible: true });
  }


  geraModalObras(nomeObra, dataInicio, dataFim, imageModal, progressoBar) {
    this.setState({ nomeObra: nomeObra });
    this.setState({ dataInicio: dataInicio });
    this.setState({ modalVisible: true });
    this.setState({ imageModal: imageModal });
    this.setState({ dataFim: dataFim });
    this.setState({ progressoBar: progressoBar });

  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '', backgroundColor: '' }}>
        <View style={{ width: '100%', height: '9%', backgroundColor: '', flexDirection: 'row' }}>
          <View style={{ width: '12%', height: '100%', backgroundColor: '', flexDirection: 'column' }}>
            <Avatar
              rounded
              icon={{ name: 'menu' }}
              onPress={() => navigation.navigate('relatorio')}
              activeOpacity={0.7}
              containerStyle={{ alignSelf: 'center', marginTop: 11, marginLeft: 4 }}
            />

          </View>
          <View style={{ width: '88%', height: '100%', backgroundColor: '', flexDirection: 'column', backgroundColor: '' }}>
            <SearchBar
              placeholder="Pesquisar"
              onChangeText={this.login}
              lightTheme
              round
              containerStyle={{
                backgroundColor: 'transparent',
              }}
              inputStyle={{
                fontSize: 13,
                width: '100%',
                textAlignVertical: 'center',
                color: 'black',

              }}
            />
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ width: '100%', height: '80%', backgroundColor: '', flexDirection: 'column', backgroundColor: '', alignItems: 'center', paddingTop: 10 }}>
            <CardOBra
              onPress={() => this.geraModalObras(
                "Obra UFT",
                "10/08/2019",
                "02/02/2020",
                { uri: 'https://s2.glbimg.com/fnwNq43DubYjKtBxOpE9cGHrxJk=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/A/o/HDjNseRgyz7K08HYrn6g/construcao-civil-01.jpg' },
                "0.5",
              )}
              imageUri={{ uri: 'https://s2.glbimg.com/fnwNq43DubYjKtBxOpE9cGHrxJk=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/A/o/HDjNseRgyz7K08HYrn6g/construcao-civil-01.jpg' }}
              nomeObra="Obra UFT"
              inicioOBra="10/08/2019"
              previsaoOBra="02/02/2020"
              statusBar={0.5}
            />

            <CardOBra
              imageUri={{ uri: 'https://estado.rs.gov.br/upload/recortes/201901/30121719_1604320_GD.jpg' }}
              nomeObra="Reforma PSF"
              inicioOBra="10/08/2019"
              previsaoOBra="02/02/2020"
              statusBar={0.3}
            />

            <CardOBra
              imageUri={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wEbTH7pHwtJoZ5myAPHvdvvfAF2c49skm8uEtedw14rY4rSk&s' }}
              nomeObra="Residencial Almeida"
              inicioOBra="10/08/2019"
              previsaoOBra="02/02/2020"
              statusBar={0.8}
            />

            <CardOBra
              imageUri={{ uri: 'https://www.jornaldocomercio.com/_midias/jpg/2018/09/13/cd110918_construcao2__102_-8473309.jpg' }}
              nomeObra="Morada do sol"
              inicioOBra="10/08/2019"
              previsaoOBra="02/02/2020"
              statusBar={0.7}
            />

            <CardOBra
              imageUri={{ uri: 'https://estado.rs.gov.br/upload/recortes/201901/30121719_1604320_GD.jpg' }}
              nomeObra="Reforma PSF"
              inicioOBra="10/08/2019"
              previsaoOBra="02/02/2020"
              statusBar={1}
            />

            <CardOBra
              imageUri={{ uri: 'https://s2.glbimg.com/fnwNq43DubYjKtBxOpE9cGHrxJk=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/A/o/HDjNseRgyz7K08HYrn6g/construcao-civil-01.jpg' }}
              nomeObra="Obra UFT"
              inicioOBra="10/08/2019"
              previsaoOBra="02/02/2020"
              statusBar={0.9}
            />
          </View>
        </ScrollView>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#1abc9c' title="Nova Obra" onPress={() => { }}>
            <Icon name="md-add-circle" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        <ModalObra estado={this.state.modalVisible} nomeObra={this.state.nomeObra} dataInicio={this.state.dataInicio} dataFim={this.state.dataFim} imageModal={this.state.imageModal} progressoBar={this.state.progressoBar} />
      </View>

    );
  }
}



const styles = StyleSheet.create({

  actionButtonIcon: {
    fontSize: 25,

    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeIcon: {
    backgroundColor: '#ffffff',
  },

  textoCreditos: {
    textAlign: 'center',
    fontSize: 5,
    color: 'black',
    fontFamily: 'Calibri',
  },

  buttonContinue: {
    width: '100%',
    textAlign: "center",
    textAlignVertical: "center",
  },

  backgroundInicio: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },

  textoOu: {
    color: '#BCC93D',
    margin: 6,
  },

  textoContinue: {
    fontWeight: 'bold',
    //textShadowColor: 'white',
    //textShadowOffset:{width: 1, height: 1},
    //textShadowRadius:1,
    color: '#0081C5',
    width: '100%',
    textAlign: 'center',
  },

  buttonLogin: {
    backgroundColor: '#BCC93D',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#ffffff",
    height: '25%',
    width: '85%',
    margin: 6,
  },

  buttonCadastro: {
    backgroundColor: '#0081C5',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#ffffff",
    height: '25%',
    width: '85%',
    margin: 6,
  },

  textButtonLogin: {
    color: "#333",
    flex: 1,
    fontSize: 12,
    textAlign: "center",
    textAlignVertical: "center",
  },

  textButtonCadastro: {
    color: "#ffffff",
    flex: 1,
    fontSize: 12,
    textAlign: "center",
    textAlignVertical: "center",
  },


  button: {
    color: "#3333",
  },

  textoEntrada: {
    height: 40,
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

