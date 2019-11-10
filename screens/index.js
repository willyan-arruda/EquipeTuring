import * as React from 'react';
import { Button, View, Text, ScrollView, StyleSheet, Modal, ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Agenda, Calendar, CalendarList } from 'react-native-calendars';
import CardCheck from '../components/Explore/CardCheck';
import { SearchBar, Avatar, } from 'react-native-elements';
import CardOBra from '../components/Explore/CardObra';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalObra from '../components/Explore/ModalObra';
import CircleButton from '../components/Explore/CircleButton';
import { ProgressBar, Colors, Card } from 'react-native-paper';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

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
              onPress={() => this.props.navigation.navigate('Details')}
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

class DetailsScreen extends React.Component {
  state = {
    modalVisible: this.props.estado,
    nomeObra: this.props.nomeObra,
    dataInicio: this.props.dataInicio,
    dataFim: this.props.dataFim,
    imageModal: this.props.imageModal,
    progressoBar: this.props.progressoBar,
    currentTab: 1,

  };

  onTabClick = (currentTab) => {
    this.setState({
      currentTab: currentTab,
    });
  };

  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
    this.gfechaModal();
  };

  gfechaModal() {
    this.props.navigation.navigate('Relatorio');
  }

  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);

          }}>

          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View
              style={{
                backgroundColor: 'white',
                height: '100%',
                width: '95%',
                alignSelf: 'center',
                position: 'absolute',
                bottom: 0,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,

              }}
            >
              <View style={{ flex: 2, backgroundColor: '' }}>
                <ImageBackground source={{ uri: 'https://s2.glbimg.com/fnwNq43DubYjKtBxOpE9cGHrxJk=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/A/o/HDjNseRgyz7K08HYrn6g/construcao-civil-01.jpg' }} style={{ width: "100%", height: null, resizeMode: 'cover' }} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                  <View style={{ backgroundColor: '', width: '100%', height: '30%', flexDirection: 'row', flex: 1 }}>
                    <View style={{ width: '80%', height: '100%', backgroundColor: '' }}>
                      <Text style={{
                        fontFamily: 'Arial',
                        fontWeight: 'bold',
                        fontWeight: '100',
                        fontSize: 25,
                        color: 'white',
                        paddingLeft: 20,
                        paddingTop: 10,
                        textShadowColor: 'black',
                        textShadowOffset: { width: 3, height: 3 },
                        textShadowRadius: 10,

                      }}>
                        Obra UFT
                      </Text>
                      <Text style={{
                        fontFamily: 'Arial',
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: 'white',
                        paddingLeft: 20,

                        textShadowColor: 'black',
                        textShadowOffset: { width: 3, height: 3 },
                        textShadowRadius: 10,

                      }}>
                        {"Data inicio: 10/08/2019"}
                      </Text>
                      <Text style={{
                        fontFamily: 'Arial',
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: 'white',
                        paddingLeft: 20,

                        textShadowColor: 'black',
                        textShadowOffset: { width: 3, height: 3 },
                        textShadowRadius: 10,

                      }}>
                        {"Previsão de Término: 02/02/2020"}
                      </Text>
                      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 20, paddingTop: 5, backgroundColor: '' }}>

                      </View>
                    </View>

                    <View style={{ width: '100%', height: '100%', backgroundColor: 'b', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                      <CircleButton onPress={() => this.setModalVisible(false)} />
                    </View>



                  </View>


                  <View style={{ backgroundColor: '', width: '100%', height: '40%' }}>

                  </View>

                  <View style={{ backgroundColor: '', width: '100%', height: '20%', flex: 1, flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '', width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                    </View>
                    <View style={{ backgroundColor: '', width: '50%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>


                    </View>
                  </View>

                </ImageBackground>

                <View style={{ width: '100%', height: '70%', backgroundColor: '' }}>
                  <View style={{ width: '100%', height: '1%', backgroundColor: '' }}>
                    <ProgressBar progress={0.5} color={'green'} />
                  </View>

                  <ScrollView style={{ width: '100%', height: '59%', backgroundColor: '', }}>
                    <View style={{ alignItems: 'center' }}>
                      <CardCheck nomeTarefa="Instalação Hidráulica"></CardCheck>
                      <CardCheck nomeTarefa="Instalação Elétrica" checked={false}></CardCheck>
                      <CardCheck nomeTarefa="Cobertura do Telhado"></CardCheck>
                      <CardCheck nomeTarefa="Calha da Área"></CardCheck>
                      <CardCheck nomeTarefa="Pisco Suite Casal"></CardCheck>
                      <CardCheck nomeTarefa="Instalação Janelas 3 Andar"></CardCheck>
                      <CardCheck nomeTarefa="Tarefa X"></CardCheck>
                      <CardCheck nomeTarefa="Tarefa Y"></CardCheck>

                    </View>

                  </ScrollView>
                </View>
              </View>

            </View>

          </View>
          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#9b59b6' title="Nova Tarefa" onPress={() => this.setModalVisible(false)}>
              <Icon name="md-create" style={{ fontSize: 25, color: 'white', alignItems: 'center', justifyContent: 'center', }} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Relatorio" onPress={() => this.setModalVisible(false)}>
              <Icon name="ios-document" style={{ fontSize: 25, color: 'white', alignItems: 'center', justifyContent: 'center', }} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="Estoque" onPress={() => { }}>
              <Icon name="logo-buffer" style={{ fontSize: 25, color: 'white', alignItems: 'center', justifyContent: 'center', }} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#E4C345' title="Concluir Obra" onPress={() => { }}>
              <Icon name="md-done-all" style={{ fontSize: 25, color: 'white', alignItems: 'center', justifyContent: 'center', }} />
            </ActionButton.Item>
          </ActionButton>
        </Modal>
      </View>

    );
  }
}

class RelatorioScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{ flexDirection: 'column', width: '100%', height: '100%', backgroundColor: '', alignItems: 'center' }}>
        <Text style={{
          fontSize: 20,
          paddingTop: 10,

        }}>Tarefas Concluída na Obra</Text>

        <View style={{ width: '90%', height: '60%', backgroundColor: '', justifyContent: 'center', }}>

          <Calendar
            style={{ borderRadius: 20, borderColor: '#dddd', borderWidth: 9, }}
            // Initially visible month. Default = Date()
            current={'2019-11-08'}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            markedDates={{
              '2019-11-05': { selected: true, marked: true, selectedColor: '' },
              '2019-11-06': { marked: true },
              '2019-11-07': { marked: true, dotColor: 'red', activeOpacity: 0 },
              '2019-11-08': { disabled: true, disableTouchEvent: true }
            }}

          />
        </View>

        <ScrollView style={{ width: '100%', height: '40%', backgroundColor: '' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <CardCheck nomeTarefa="Instalação Hidráulica" status={'checked'}></CardCheck>
            <CardCheck nomeTarefa="Instalação Elétrica" status={'checked'}></CardCheck>
            <CardCheck nomeTarefa="Cobertura do Telhado" status={'unchecked'}></CardCheck>
            <CardCheck nomeTarefa="Calha da Área" status={'checked'}></CardCheck>
          </View>
        </ScrollView>

        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Voltar" onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name="ios-home" style={{ fontSize: 25, color: 'white', alignItems: 'center', justifyContent: 'center', }} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Relatorio" onPress={() => this.gfechaModal}>
            <Icon name="ios-document" style={{ fontSize: 25, color: 'white', alignItems: 'center', justifyContent: 'center', }} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Estoque" onPress={() => { }}>
            <Icon name="logo-buffer" style={{ fontSize: 25, color: 'white', alignItems: 'center', justifyContent: 'center', }} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#E4C345' title="Concluir Obra" onPress={() => { }}>
            <Icon name="md-done-all" style={{ fontSize: 25, color: 'white', alignItems: 'center', justifyContent: 'center', }} />
          </ActionButton.Item>
        </ActionButton>
      </View>


    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Relatorio: RelatorioScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
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