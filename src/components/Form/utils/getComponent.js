import Input from '../Elements/Input.vue';
import TextArea from '../Elements/TextArea.vue';
import RadioButton from '../Elements/RadioButton.vue';
import Checkbox from '../Elements/Checkbox.vue';

const COMPONENT = {
  text: Input,
  textarea: TextArea,
  radio: RadioButton,
  check: Checkbox,
};

export default function getComponent(type) {
  return COMPONENT[type];
}
