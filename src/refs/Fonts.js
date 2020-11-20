import { Platform } from 'react-native'

export const Fonts = {
    Lato = {
        Regular: Platform.OS == 'ios' ? 'Lato-Regular' : 'LatoRegular',
        Thin: Platform.OS == 'ios' ? 'Lato-Thin' : 'LatoThin',
        ThinItalic: Platform.OS == 'ios' ? 'Lato-ThinItalic' : 'LatoThinItalic',
        Light: Platform.OS == 'ios' ? 'Lato-Light' : 'LatoLight',
        LightItalic: Platform.OS == 'ios' ? 'Lato-LightItalic' : 'LatoLightItalic',
        Bold: Platform.OS == 'ios' ? 'Lato-Bold' : 'LatoBold',
        BoldItalic: Platform.OS == 'ios' ? 'Lato-BoldItalic' : 'LatoBoldItalic',
    }
}