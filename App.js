/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { geekblue } from '@ant-design/colors';
import { Button, Card, InputItem, WhiteSpace, WingBlank, Icon } from '@ant-design/react-native';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.viewPrincipal}>
        <Card>
          <Card.Body>
            <Text style={styles.mainTitle}>A M E I</Text>
            <Text style={styles.secondaryTitle}>Contabilidade Online</Text>
            <WhiteSpace />
            <InputItem
              clear
              placeholder="Informe seu email"
            />
            <InputItem
              clear
              placeholder="Informe sua senha"
            />
            <WhiteSpace />
            <WingBlank>
              <Button size="large" style={{ backgroundColor: '#4285f4', borderRadius: 0 }}>
                <Icon size="xxs" color="#fff" name={"login"} >
                  ACESSAR
                </Icon>
              </Button>

              <Button style={{ backgroundColor: '#ff3547', borderRadius: 0, marginTop: 4 }}>
                <Icon size="xxs" color="#fff" name={"google"} >
                  ACESSAR COM GOOGLE
                </Icon>
              </Button>

              <Button style={{ backgroundColor: '#3f51b5', borderRadius: 0, marginTop: 4 }}>
                <Icon size="xxs" color="#fff" name={"facebook"}>
                  ACESSAR COM FACEBOOK
                </Icon>
              </Button>

              <Button style={{ backgroundColor: '#e0e0e0', borderRadius: 0, marginTop: 4 }}>
                <Icon size="xxs" color="#000" name="user">
                  CADASTRAR-SE
                </Icon>
              </Button>

              <Button style={{ backgroundColor: '#e0e0e0', borderRadius: 0, marginTop: 4 }}>
                <Icon size="xxs" color="#b666cd" name="question-circle">
                  ESQUECI A SENHA
                </Icon>
              </Button>
            </WingBlank>

          </Card.Body>
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    backgroundColor: '#35495e',
    justifyContent: 'center',
    padding: 30
  },
  mainTitle: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  secondaryTitle: {
    textAlign: 'center'
  }
});

export default App;
