import React, { Component } from 'react';
import {
  Modal,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import StarRating from 'react-native-star-rating';
import CircleButton from './CircleButton';
import { ProgressBar, Colors, Card } from 'react-native-paper';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import CardCheck from './CardCheck';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {createStackNavigator} from 'react-navigation';


const percentage = 66;

class ModalObra extends Component {

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
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.modalVisible !== this.state.modalVisible) {
      this.setState({ modalVisible: nextProps.modalVisible });
      this.setState({ nomeObra: nextProps.nomeObra });
      this.setState({ dataInicio: nextProps.dataInicio });
      this.setState({ dataFim: nextProps.dataFim });
      this.setState({ imageModal: nextProps.imageModal });
      this.setState({ progressoBar: nextProps.progressoBar });
    }
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
                <ImageBackground source={this.state.imageModal} style={{ width: "100%", height: null, resizeMode: 'cover' }} imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
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
                        {this.state.nomeObra}
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
                        {"Data inicio: " + this.state.dataInicio}
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
                        {"Previsão de Término: " + this.state.dataFim}
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
            <ActionButton.Item buttonColor='#9b59b6' title="Nova Tarefa" onPress={() => {}}>
              <Icon name="md-create" style={{ fontSize: 25, color: 'white', alignItems: 'center', justifyContent: 'center', }} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Relatorio" onPress={() => { }}>
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

export default ModalObra;