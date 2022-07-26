import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  padding: ${wp('12%')}px 0 ${wp('6%')}px;
  background: purple;
`;

export const Heading = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 ${wp('6%')}px;
`;

export const Footer = styled.View`
  height: 70px;
  flex-direction: row;
  align-items: flex-start;
  padding: ${wp('2%')}px ${wp('6%')}px 0;
  border-top-width: 2px;
  border-top-color: #ccc;
`;
export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  color: #666;
  margin-right: 10px;
  font-size: 16px;
  border-width: 1px;
  border-color: #ccc;
  padding: 0 5px;
  border-radius: 5px;
`;
export const Send = styled.TouchableOpacity``;
export const Img = styled.Image`
  width: 40px;
  height: 40px;
`;
