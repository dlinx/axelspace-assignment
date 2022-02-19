import React from "react";
import { MdChildFriendly } from "react-icons/md";
import styled from 'styled-components';
import { MapEvent, MAP_DATA } from "../constants/MapData";

type Props = {
  onListItemClicked: (listItem: MapEvent) => void
}
const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0px;
  width: 300px;
  overflow: auto
`;

const ListItem = styled.li`
  border-bottom: 1px solid lightblue;
  padding: 20px 5px;
  cursor: default;

  :hover {
    background-color: lightgray;
  }
`;

const ListText = styled.span`
  padding-left: 5px;
  cursor: default;
  user-select: none;
`;

export const List: React.FC<Props> = (props) => {
  return <ListContainer>
    {MAP_DATA.map((mapEvent, i) => <ListItem key={i}
      onClick={() => props.onListItemClicked(mapEvent)}>
      {mapEvent.properties.icon}
      <ListText>{mapEvent.properties.title} ({mapEvent.properties.year})</ListText>
    </ListItem>)}
  </ListContainer>
}