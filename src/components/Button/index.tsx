import React from 'react';
import {ActivityIndicator} from 'react-native';
import {StyledButtonProps} from './interfaces';

import * as S from './styles';

export function Button({label, loading, ...rest}: StyledButtonProps) {
  return (
    <S.Container activeOpacity={0.7} {...rest}>
      {!loading ? (
        <S.Label>{label}</S.Label>
      ) : (
        <ActivityIndicator size="small" color="#ffffff" />
      )}
    </S.Container>
  );
}
