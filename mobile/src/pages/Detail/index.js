import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import Styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Detail(){
    const navigation = useNavigation();
    const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropela" com o valor de R$ 120,00';
    function navigateBack(){
        navigation.goBack();
    }
    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Be The Hero: Caso, cadelinha atropelada',
            recipients: ['saulo.braga@live.com'],
            body: message 
        })
    }
    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=5585987992126&text=${message}`);
    }
    return (
        <View style={ Styles.container }>
            <View style={ Styles.header } >
                <Image source={ logoImg } />
                <TouchableOpacity onPress={ navigateBack }>
                    <Feather name="arrow-left" size={28} color="#e82041" />
                </TouchableOpacity>
            </View>
            <View style={ Styles.incident } >
                <Text style={ Styles.incidentProperty, { marginTop: 0 } }>ONG:</Text>
                <Text style={ Styles.incidentValue }>APAD</Text>

                <Text style={ Styles.incidentProperty }>CASO:</Text>
                <Text style={ Styles.incidentValue }>Cadelinha atropelada</Text>
                
                <Text style={ Styles.incidentProperty }>VALOR:</Text>
                <Text style={ Styles.incidentValue }>R$ 120,00</Text>
            </View>
            <View style={ Styles.contactBox }>
                <Text style={ Styles.contactTitle }>Salve o dia!</Text>
                <Text style={ Styles.contactTitle }>Seja o herói desse caso.</Text>
                
                <Text style={ Styles.contactText }>Entre em contato:</Text>
                <View style={ Styles.actions}>
                    <TouchableOpacity style={ Styles.actionButton} onPress={ sendWhatsapp }>
                        <Text style={ Styles.actionButtonText } >Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ Styles.actionButton} onPress={ sendMail }>
                        <Text style={ Styles.actionButtonText } >E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}