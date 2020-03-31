import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import Api from '../../services/api';

import Styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Incidents(){
    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    function navigateToDetail(){
        navigation.navigate('Detail');
    }

    async function loadIncidents(){
        const response = await Api.get('incidents')
        
        setIncidents(response.data);
    }
    useEffect( () => {
        loadIncidents();
    }, []);
    
    return (
        <View style={ Styles.container } >
            <View style={ Styles.header } >
                <Image source={logoImg} />
                <Text style={ Styles.headerText }>
                    Total de <Text style={ Styles.headerTextBold }>0 casos.</Text>
                </Text>
            </View>
            <Text style={ Styles.title } >Bem-Vindo!</Text>
            <Text style={ Styles.description }>Escolha um dos casos abaixo e salve o dia.</Text>
            
            <FlatList 
                style={ Styles.incidentList }
                data={ incidents }
                keyExtractor={ incident =>  String(incident.id) }
                showsVerticalScrollIndicator={false}
                renderItem={ ({ item:incident }) => (
                    <View style={ Styles.incident }>
                        <Text style={ Styles.incidentProperty }>ONG:</Text>
                        <Text style={ Styles.incidentValue }>{incident.name}</Text>

                        <Text style={ Styles.incidentProperty }>CASO:</Text>
                        <Text style={ Styles.incidentValue }>{incident.title}</Text>
                        
                        <Text style={ Styles.incidentProperty }>VALOR:</Text>
                        <Text style={ Styles.incidentValue }>{incident.value}</Text>

                        <TouchableOpacity style={ Styles.detailButton } onPress={ navigateToDetail }>
                            <Text style={ Styles.detailButtonText }> Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={17} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}