import axios from 'axios';
import { router } from "expo-router";
import * as React from 'react';
import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { Style } from './styles';

const categorias = {
    masculino: ['mens-shirts', 'mens-shoes', 'mens-watches'],
    feminino: ['womens-bags', 'womens-dresses', 'womens-jewellery', 'womens-shoes', 'womens-watches']
}

export const Home = () => {
    const [activeTab, setActiveTab] = useState<'masculino' | 'feminino'>('masculino');
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleDetailProducts = (item) => {
        router.push({
            pathname: '/Details/details',
            params: {
                id: item.id.toString(),
                title: item.title,
                description: item.description,
                price: item.price.toString(),
                image: item.thumbnail,
            },
        });
    };

    const carregarProdutos = async () => {
        setLoading(true);
        try {
            const promises = categorias[activeTab].map((cat) =>
                axios.get(`https://dummyjson.com/products/category/${cat}`)
            );

            const responses = await Promise.all(promises);
            const todosProdutos = responses.flatMap((res) => res.data.products);
            setProdutos(todosProdutos);
        } catch (error) {
            console.error('Erro ao carregar produtos:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        carregarProdutos();
    }, [activeTab]);

    return (
        <View>
            <FlatList
                style={{ backgroundColor: 'white' }}
                data={produtos}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={Style.cardList}
                ListHeaderComponent={
                    <View style={Style.headerContainer}>
                        <TouchableOpacity
                            style={[Style.buttonStyle, activeTab === 'masculino' && Style.activeTab]}
                            onPress={() => setActiveTab('masculino')}
                        >
                            <Text style={Style.buttonTextStyle}>Produtos Masculinos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[Style.buttonStyle, activeTab === 'feminino' && Style.activeTab]}
                            onPress={() => setActiveTab('feminino')}
                        >
                            <Text style={Style.buttonTextStyle}>Produtos Femininos</Text>
                        </TouchableOpacity>
                    </View>
                }
                ListEmptyComponent={
                    loading ? (
                        <ActivityIndicator size="large" color="#007bff" style={{ marginTop: 20 }} />
                    ) : null
                }
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={Style.card}
                        onPress={() => handleDetailProducts(item)}
                    >
                        <Image source={{ uri: item.thumbnail }} style={Style.cardImage} />
                        <Text style={Style.cardTitle}>{item.title}</Text>
                        <Text style={Style.cardDescription} numberOfLines={2}>{item.description}</Text>
                        <View style={Style.cardPriceWrapper}>
                            <Text style={Style.cardPrice}>R$ {item.price}</Text>
                            <Text style={Style.cardOldPrice}>R$ {(item.price * 1.2).toFixed(2)}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <View style={Style.fotterContainer}>
                <TouchableOpacity style={Style.footerButton} onPress={() => router.navigate('/Home/home')}>
                    <Ionicons name="home" size={24} color="#007bff" />
                    <Text style={Style.footerText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.footerButton} onPress={() => router.navigate('/Settings/settings')}>
                    <Ionicons name="settings" size={24} color="#000" />
                    <Text style={Style.footerText}>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
