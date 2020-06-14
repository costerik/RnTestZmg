import {Platform} from 'react-native';
import Ios from './posts-stack.ios';
import Android from './posts-stack.android';

const Default = Platform.OS === 'ios' ? Ios : Android;
export default Default;
