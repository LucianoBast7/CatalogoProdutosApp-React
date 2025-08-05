import { router, useLocalSearchParams } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Style } from './styles'; // crie este styles

export const Details = () => {
    const { title, description, price, image } = useLocalSearchParams();

    return (
        <View style={Style.container}>
            <TouchableOpacity style={Style.backButton} onPress={() => router.back()}>
                <Text style={Style.backButtonText}>Voltar</Text>
            </TouchableOpacity>
            <Image source={{ uri: image }} style={Style.image} />
            <Text style={Style.title}>{title}</Text>
            <Text style={Style.price}>R$ {price}</Text>
            <Text style={Style.description}>{description}</Text>
        </View>
    );
}
