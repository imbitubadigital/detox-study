import styled from 'styled-components/native';

interface PropContainerText {
  dark?: boolean;
}

export const Container = styled.View<PropContainerText>`
  margin-bottom: 25px;
  align-items: ${props => (props.dark ? 'flex-end' : 'flex-start')};
`;
export const TxtUser = styled.Text`
  color: #a4a4a4;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const Content = styled.View<PropContainerText>`
  padding: 15px;
  background: ${props => (props.dark ? 'purple' : '#fff')};
  border-width: 1px;
  border-color: ${props => (props.dark ? '#eff4f7' : '#A0AEC0')};
  border-radius: 12px;
  width: 86%;
`;

export const TxtMsg = styled.Text<PropContainerText>`
  color: ${props => (props.dark ? '#fff' : '#000')};
  font-size: 16px;
`;

export const ContainerUser = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Avatar = styled.Image`
  width: 34px;
  height: 34px;
  border-radius: 17px;
  margin-right: 10px;
`;
