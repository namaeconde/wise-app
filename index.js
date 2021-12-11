/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);



import {startProximityObserver, stopProximityObserver} from './proximityObserver';
// Proximity Observer constantly always running, even if the user swipes the app away
startProximityObserver();
// see also: https://github.com/Estimote/react-native-proximity#already-observing
