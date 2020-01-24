import React, { useEffect, useState } from 'react';
import {StyleSheet, Image, View, Text, TextInput, TouchableOpacity }  from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location'
import { MaterialIcons } from '@expo/vector-icons';

function Main({navigation}){
    const [currentRegion, SetCurrentRegion]= useState(null);

    useEffect(()=>{
        async function loadInitialPosition(){
            const {granted} = await requestPermissionsAsync();

            if(granted){
                const {coords} = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const {latitude, longitude} = coords;

                SetCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.03,
                    longitudeDelta: 0.03,
                })
            }
        }

        loadInitialPosition();
    },[]);
    
    if(!currentRegion){
        return null;
    }

    return (
        <>
            <MapView initialRegion={currentRegion} style={styles.map}>
                <Marker coordinate={{ latitude: -20.0363067, longitude: -44.0484718}}>
                    <Image style={styles.avatar} source={{uri: 'https://avatars1.githubusercontent.com/u/26408030?s=460&v=4'}}/>
                    <Callout onPress={()=>{
                        navigation.navigate('Profile', {github_username: 'warleyhenrique'});
                    }}>
                        <View style={styles.callout}>
                            <Text style={styles.devName}>Warley Henrique</Text>
                            <Text style={styles.devBio}>Estudante de Sistemas de Informação e um apaixonado por Tecnologia</Text>
                            <Text style={styles.devTechs}>React JS, Reaact Native, NodeJS</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>

            <View style={styles.searchForm}>
                <TextInput
                    style={styles.searchImput}
                    placeholder="Buscar devs por techs..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                />

                <TouchableOpacity onPress={()=>{}} style={styles.loadButton}>
                    <MaterialIcons name="my-location" size={20} color={"#fff"}/>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    map:{
        flex: 1,
    },
    avatar:{
        width: 40,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#fff',
    },
    callout:{
        width: 280,
    },

    devName:{
        fontWeight: 'bold',
        fontSize: 16,
    },

    devBio:{
        color: '#666',
        marginTop: 5,
    },

    devTechs:{
        marginTop: 5,
    },
})


export default Main;

