import React, { useState } from "react";
import styled from 'styled-components';
import { MapEvent } from "../constants/MapData";

type Props = {
  onListItemClicked: (listItem: MapEvent, index: number) => void
  mapData: MapEvent[] 
}
const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0px;
  width: 300px;
  overflow: auto
`;

type ListItemProps = {
  isSelected?: boolean
}
const ListItem = styled.li`
  border-bottom: 1px solid lightblue;
  padding: 20px 5px;
  cursor: default;

  :hover {
    background-color: lightgray;
  }

  ${(props: ListItemProps) => {
    if (props.isSelected) {
      return `
        background-color: lightgray;
      `
    }
    return ``
  }}
`;

const ListText = styled.span`
  padding-left: 5px;
  cursor: default;
  user-select: none;
`;

export const List: React.FC<Props> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const onListItemClicked = (mapEvent: MapEvent, i: number) => {
    props.onListItemClicked(mapEvent, i);
    setSelectedIndex(i);
  }
  return <ListContainer>
    {props.mapData.map((mapEvent, i) => <ListItem key={i}
      onClick={() => onListItemClicked(mapEvent, i)}
      isSelected={selectedIndex === i}>
      {mapEvent.properties.icon}
      <ListText >{mapEvent.properties.title} ({mapEvent.properties.year})</ListText>
    </ListItem>)}
  </ListContainer>
}