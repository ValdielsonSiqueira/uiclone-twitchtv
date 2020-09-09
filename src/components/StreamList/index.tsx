import React from 'react';
import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { 
  List, 
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamCategory,
  StreamDescription,
  TagRow,
  TagView,
  TagText,
 } from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>SrPimcole</StreamUsername>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>
            Gameplays da pesada.
          </StreamDescription>
          <StreamCategory numberOfLines={1}>
            Jogos
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>FPS</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
