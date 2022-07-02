import {Button} from '../../../../components/Button';
import React from 'react';

import * as S from './styles';
import {useState} from 'react';
import {useCallback} from 'react';

export function Start() {
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);

  const handleEnter = useCallback(() => {
    setLoad(true);
    setTimeout(() => {
      setShow(true);
      setLoad(false);
    }, 2000);
  }, []);
  return (
    <S.Container>
      {show && <S.Txt>Vai entrar</S.Txt>}

      <Button label="Entrar" loading={load} onPress={handleEnter} />
    </S.Container>
  );
}
