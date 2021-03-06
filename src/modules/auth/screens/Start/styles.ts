import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
  padding: ${wp('6%')}px;
  justify-content: center;
  align-items: center;
`;

export const Txt = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;
