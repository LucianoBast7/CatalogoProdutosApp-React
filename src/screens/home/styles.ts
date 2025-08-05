import { StyleSheet } from 'react-native';

export const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    // Header com abas
    headerContainer: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#007bff',
    },
    buttonStyle: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    activeTab: {
        borderBottomWidth: 3,
        borderBottomColor: '#007bff',
    },
    buttonTextStyle: {
        fontWeight: 'bold',
        color: '#000',
    },

    // Lista de Cards
    cardList: {
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        flex: 1,
        elevation: 3, // para sombra no Android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
    },
    cardImage: {
        width: '100%',
        height: 100,
        borderRadius: 8,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: 12,
        color: '#666',
        marginBottom: 8,
    },
    cardPriceWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8, // se estiver usando React Native 0.71+, senão substitua por marginRight
    },
    cardPrice: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#28a745',
    },
    cardOldPrice: {
        fontSize: 12,
        color: '#999',
        textDecorationLine: 'line-through',
    },
    fotterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 80,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ccc',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },

    footerButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    footerText: {
        fontSize: 14,
        color: '#000',
        marginTop: 2,
    },

    floatingButton: {
        position: 'absolute',
        right: 20,
        bottom: 80,
        backgroundColor: '#007bff',
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    floatingButtonText: {
        color: '#fff',
        fontSize: 24,
    },
});
