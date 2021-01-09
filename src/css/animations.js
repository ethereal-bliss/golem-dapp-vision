import { bounce, fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

 const styles = {
  fadeIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

export default styles;