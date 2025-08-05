import { router } from "expo-router";
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { Styles } from './styles';

export const Settings = () => {
    return (
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.button} onPress={() => router.navigate('/login')}>
                <Text style={Styles.buttonText}>Sair</Text>
            </TouchableOpacity>
            <View style={Styles.fotterContainer}>
                <TouchableOpacity style={Styles.footerButton} onPress={() => router.navigate('/Home/home')}>
                    <Ionicons name="home" size={24} color="#007bff" />
                    <Text style={Styles.footerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.footerButton} onPress={() => router.navigate('/Settings/settings')}>
                    <Ionicons name="settings" size={24} color="#000" />
                    <Text style={Styles.footerText}>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}