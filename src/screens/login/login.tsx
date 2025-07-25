import { router } from "expo-router";
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Styles } from './styles';

export const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        // Aqui você pode adicionar a lógica de login, como fazer uma requisição à API ou validar os dados
        // Aqui é apenas um exemplo de como você pode exibir uma mensagem de sucesso ou erro
        if (user === 'Admin' && password === '123456') {
            router.navigate('/Home/home')
            setUser('')
            setPassword('')
            alert('Login realizado com sucesso!')
        } else if (user === '' || password === '') {
            alert('Preencha todos os campos!')
            setUser('')
            setPassword('')
        } else {
            alert('Usuário ou senha incorretos!')
            setUser('')
            setPassword('')
        }
    }
    
    return (
        <ScrollView style={Styles.container}>
            <View>
                <Text style={Styles.titleLogin}>Bem-vindo de volta!</Text>
                <Text style={Styles.subtitleLogin}>Insira seus dados para entrar na sua conta.</Text>
            </View>
            <View style={Styles.card}>
                <View style={Styles.inputWrapper}>
                    <Text style={Styles.textLogin}>Usuário</Text>
                    <TextInput
                        style={Styles.inputLogin}
                        onChangeText={setUser}
                        value={user}
                    />
                    <Text style={Styles.textLogin}>Senha</Text>
                    <TextInput
                        style={Styles.inputLogin}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity style={Styles.styleButtom} onPress={handleLogin}>
                    <Text style={Styles.styleTextButtom}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.containerFooter}></View>
        </ScrollView>
    )
}