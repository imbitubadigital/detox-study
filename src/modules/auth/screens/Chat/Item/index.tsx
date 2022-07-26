import {format, fromUnixTime} from 'date-fns';
import React, {memo, useMemo} from 'react';
import avatar from '../../../../../assets/avatar.png';
import bot from '../../../../../assets/bot.png';
import {PropsItem} from './interfaces';
import * as S from './styles';

const Item: React.FC<PropsItem> = ({item}) => {
  //   useEffect(() => {
  //     if (item.sender.id !== user.user.id && item.status === 0) {
  //       settingMessageVisualized(item.id);
  //     }
  //   }, [settingMessageVisualized, user, item]);

  const dateformatted = useMemo(
    () => format(fromUnixTime(item.createdAt), "HH:mm '|' dd/MM/yyy"),
    [item.createdAt],
  );

  return (
    <S.Container dark={item.origin === 1}>
      <S.ContainerUser>
        <S.Avatar source={item.origin === 1 ? avatar : bot} />

        <S.TxtUser>{dateformatted}</S.TxtUser>
      </S.ContainerUser>

      <S.Content dark={item.origin === 1}>
        <S.TxtMsg dark={item.origin === 1}>{item.message}</S.TxtMsg>
      </S.Content>
    </S.Container>
  );
};

export default memo(Item);
