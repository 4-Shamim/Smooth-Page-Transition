import Highway from '@dogstudio/highway';
import Fade from './transition';


const H = new Highway.Core({
    // home: ..,
    // about: ..
    transitions: {
        default: Fade
    }
})