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
  margin: 8px 0px;
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
const NavContainer = styled.div`
  display: flex;
`
const NavigationButton = styled.button`
  width: 60px;
  height: 40px;
`;
const SortOptions = styled.select`
  width: 100%;
  border-radius: 0;
`

export const List: React.FC<Props> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mapData, setMapData] = useState(props.mapData);

  const onListItemClicked = (mapEvent: MapEvent, i: number) => {
    props.onListItemClicked(mapEvent, i);
    setSelectedIndex(i);
  }
  const onNextButtonCLick = () => {
    const nextIndex = (selectedIndex ?? 0) + 1;
    setSelectedIndex(nextIndex);
    props.onListItemClicked(mapData[nextIndex], nextIndex)
  }
  const onPreviousButtonClick = () => {
    const prevIndex = (selectedIndex ?? 0) - 1;
    setSelectedIndex(prevIndex);
    props.onListItemClicked(mapData[prevIndex], prevIndex)
  }

  return <ListContainer>
    <NavContainer>
      <NavigationButton
        onClick={() => onPreviousButtonClick()}
        disabled={selectedIndex === null || selectedIndex === 0}
      >Prev</NavigationButton>
      <SortOptions>
        <option>Sort by Year</option>
        <option>Sort Alphabetically</option>
      </SortOptions>
      <NavigationButton
        onClick={() => onNextButtonCLick()}
        disabled={selectedIndex === null || selectedIndex === mapData.length - 1}
      >Next</NavigationButton>
    </NavContainer>
    {mapData.map((mapEvent, i) => <ListItem key={i}
      onClick={() => onListItemClicked(mapEvent, i)}
      isSelected={selectedIndex === i}>
      {mapEvent.properties.icon}
      <ListText >{mapEvent.properties.title} ({mapEvent.properties.year})</ListText>
    </ListItem>)}
  </ListContainer>
}