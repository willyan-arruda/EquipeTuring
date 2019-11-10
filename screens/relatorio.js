import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Agenda, Calendar, CalendarList } from 'react-native-calendars';
import CardCheck from './components/Explore/CardCheck';


export default class relatorio extends Component {

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
        </View>

    );
  }
}