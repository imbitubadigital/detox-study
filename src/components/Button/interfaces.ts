import {TouchableOpacityProps} from 'react-native';
export interface StyledButtonProps extends TouchableOpacityProps {
  label: string;
  loading: boolean;
}
