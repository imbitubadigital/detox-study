import React, {useCallback, useState} from 'react';
import {FlatList} from 'react-native';
import send from '../../../../assets/send.png';
import Item from './Item';
import * as S from './styles';
import {getUnixTime} from 'date-fns';

import {PropsData} from './Item/interfaces';
import {api} from '../../../../services/api';

export function Chat() {
  const [message, sendMessage] = useState('');
  const [listMessages, sendListMessages] = useState<PropsData[]>([]);

  const settingMessage = useCallback(
    (msg: string, origin: number, id: number) => {
      sendListMessages(prevState => {
        const newMessage = {
          id: id + 1,
          message: msg,
          createdAt: getUnixTime(new Date()),
          origin,
        };
        return [newMessage, ...prevState];
      });
    },
    [],
  );

  const handleGetIntent = useCallback(
    async (intent: string) => {
      const data = {
        userText: intent,
        userId: 'userId',
      };
      const result = await api.post('/dialogflow', data);

      settingMessage(result.data.text[0], 2, Math.random());
    },
    [settingMessage],
  );

  const handleSend = useCallback(() => {
    settingMessage(message, 1, Math.random());
    sendMessage('');
    handleGetIntent(message);
  }, [handleGetIntent, message, settingMessage]);
  return (
    <S.Container>
      <S.Header>
        <S.Heading>ChatBot</S.Heading>
      </S.Header>
      <S.Content>
        {listMessages.length > 0 && (
          <FlatList
            inverted
            showsVerticalScrollIndicator={false}
            data={listMessages}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => <Item item={item} />}
            onEndReachedThreshold={0.2}
          />
        )}
      </S.Content>
      <S.Footer>
        <S.Input
          placeholder="Envie sua mensagem"
          value={message}
          onChangeText={sendMessage}
        />
        <S.Send
          activeOpacity={0.7}
          onPress={handleSend}
          disabled={message === ''}>
          <S.Img source={send} />
        </S.Send>
      </S.Footer>
    </S.Container>
  );
}
