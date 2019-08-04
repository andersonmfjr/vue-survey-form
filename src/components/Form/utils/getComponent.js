import Input from '../Elements/Input.vue';
import TextArea from '../Elements/TextArea.vue';
import RadioButton from '../Elements/RadioButton.vue';
import Checkbox from '../Elements/Checkbox.vue';
import Select from '../Elements/Select.vue';

const COMPONENT = {
  text: Input,
  textarea: TextArea,
  radio: RadioButton,
  check: Checkbox,
  select: Select,
};

export default function getComponent(type) {
  return COMPONENT[type];
}
