import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 450,
        height: 500,
        backgroundColor: '#2567E8',
    },
    titleLogin: {
        fontFamily: 'Inter',
        fontSize: 32,
        lineHeight: 35,
        alignItems: 'center',
        color: '#FFFFFF',
        marginLeft: 50,
        marginTop: 180,
        marginBottom: 8,
        fontWeight: 'bold'
    },
    subtitleLogin: {
        fontFamily: 'Inter',
        fontSize: 16,
        lineHeight: 20,
        alignItems: 'center',
        color: '#FFFFFF',
        marginLeft: 43,
        marginBottom: 100,
    },
    containerFooter: {
        flex: 1,
        width: 450,
        height: 500,
        backgroundColor: '#FFFFFF',
    },
    card: {
        position: 'absolute',
        top: 280, // ajustável conforme seu layout
        alignSelf: 'center',
        width: 350,
        height: 350,
        // alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: 35,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
        zIndex: 10,
    },
    inputWrapper: {
        marginTop: 20,
    },
    textLogin: {
        alignItems: 'flex-start',
        color: '#000000',
        // marginRight: 250,
        marginBottom: 4,
        fontWeight: 'bold',
        fontFamily: 'Inter',
    },
    inputLogin: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 4,
        borderColor: '#D3D3D3',
        justifyContent: 'center',
        paddingLeft: 14,
        marginBottom: 20
    },
    styleButtom: {
        height: 50,
        width: '100%',
        backgroundColor: '#2567E8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center'
    },
    styleTextButtom: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        fontFamily: 'Inter',
        alignItems: 'center',
        justifyContent: 'center'
    },
})