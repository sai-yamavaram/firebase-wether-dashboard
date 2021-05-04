import * as React from 'react';
import Svg, {Circle, Rect, SvgXml} from 'react-native-svg';
import * as Welcome from '../../assets/custom/weather.svg';


export default function SvgComponent() {
    return (
    <SvgXml xml={Welcome} width="50%" height="50%" />
    );
}