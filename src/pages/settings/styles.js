import {I18nManager, Platform, StyleSheet} from 'react-native';
import scale from 'utilities/scale';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerStyle: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    floatEdit: {
        position: 'absolute',
        flexDirection: 'row',
        top: 50,
        right: 20,
        zIndex: 5,
        backgroundColor: 'white',
        borderRadius: 50,
        overflow: 'hidden',
    },
    title: {
        fontSize: scale.font.xxxl,
        marginTop: 10,
        marginBottom: 30,
        alignSelf: 'stretch',
        textAlign: 'left',
        marginLeft: 15,
    },
    backArrowStyle: {
        resizeMode: 'contain',
        width: 25,
        height: 25,
        marginTop: Platform.OS === 'ios' ? 50 : 20,
        marginLeft: 10,
        transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
    },
    InputBox: {
        height: 42,
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 25,
    },
    InputContainer: {
        height: 42,
        borderWidth: 1,
        paddingLeft: 20,
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 25,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    Dropdown: {
        borderWidth: 1,
        paddingLeft: 20,
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 25,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    backgroundImageStyle: {
        flex: 1,
        alignSelf: 'center',
        width: '100%',
    },
    logo: {
        flex: 1,
        width: 200,
        alignSelf: 'center',
        margin: 10,
        resizeMode: 'contain',
    },
    saveContainer: {
        alignSelf: 'center',
        width: 250,
        borderRadius: 25,
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    saveText: {},
    saveDisabledContainer: {
        alignSelf: 'center',
        width: 250,
        borderRadius: 25,
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    lineStyle: {
        height: 1,
        borderWidth: 0.8,
        width: '97%',
        padding: 0,
        alignSelf: 'center',
    },
    selectedContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
