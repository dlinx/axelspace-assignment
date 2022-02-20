import React, { useState } from 'react';
import { List, Map } from './components';
import styled from 'styled-components';
import { MapEvent, MAP_DATA } from './constants/MapData';

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const App: React.FC = () => {
  const [currentMarker, setCurrentMarker] = useState<MapEvent | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const onListItemClicked = (e: MapEvent, index: number) => {
    setCurrentMarker(e);
    setSelectedIndex(index);
  }

  return (
    <Container className="App">
      <Map marker={currentMarker} />
      <List onListItemClicked={onListItemClicked} mapData={MAP_DATA} />
    </Container>
  );
}

export default App;
