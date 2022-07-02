import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background: purple;
  height: 48px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: #fff;
`;
