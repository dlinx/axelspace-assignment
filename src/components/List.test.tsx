import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { List } from '.';
import { MapEvent } from '../constants/MapData';

describe('Render list', () => {
  const onListItemClicked = jest.fn()
  const renderList = (mapData: MapEvent[]) => {
    render(<List mapData={mapData} onListItemClicked={onListItemClicked} />)
  };
  it('should render list', async () => {
    const mapData: MapEvent[] = []
    renderList(mapData);
    const listContainer = await screen.findByTestId('list-container');
    expect(listContainer).toBeInTheDocument()
  });
  it('should render list items', async () => {
    const mapData: MapEvent[] = [{
      geometry: {
        coordinates: [0, 0],
        type: 'feature'
      },
      properties: {
        description: '',
        duration: 0,
        eventType: '',
        icon: <div />,
        title: '',
        year: 1990
      },
      type: 'feature'
    }]
    renderList(mapData);
    const listContainer = screen.getByTestId('list-container')
    expect(listContainer.childElementCount).toBe(2);
  })

  it('should emmit event on click of list item', async () => {
    const mapData: MapEvent[] = [{
      geometry: {
        coordinates: [0, 0],
        type: 'feature'
      },
      properties: {
        description: '',
        duration: 0,
        eventType: '',
        icon: <div />,
        title: 'sample title',
        year: 1990
      },
      type: 'feature'
    }];
    renderList(mapData);
    const listItem = await screen.findByText(/sample title/i);
    listItem.click();
    expect(onListItemClicked).toHaveBeenCalledWith(mapData[0], 0);
  });

  it('should navigate between events', async () => {
    const mapData: MapEvent[] = [
      {
        geometry: {
          coordinates: [0, 0],
          type: 'feature'
        },
        properties: {
          description: '',
          duration: 0,
          eventType: '',
          icon: <div />,
          title: 'first sample',
          year: 1990
        },
        type: 'feature'
      },
      {
        geometry: {
          coordinates: [0, 0],
          type: 'feature'
        },
        properties: {
          description: '',
          duration: 0,
          eventType: '',
          icon: <div />,
          title: 'another sample',
          year: 1992
        },
        type: 'feature'
      },
    ];
    renderList(mapData);
    const btnPrev = await screen.findByTestId('btn-prev');
    const btnNext = await screen.findByTestId('btn-next');
    expect(btnPrev).toBeDisabled();
    expect(btnNext).toBeDisabled();
    const listItem = await screen.findByText(/first sample/i);
    listItem.click();
    expect(btnNext).toBeEnabled();
    btnNext.click();
    expect(onListItemClicked).toHaveBeenCalledWith(mapData[1], 1);
    expect(btnNext).toBeDisabled();
    expect(btnPrev).toBeEnabled();

    btnPrev.click();
    expect(onListItemClicked).toHaveBeenCalledWith(mapData[0], 0);
    expect(btnPrev).toBeDisabled();
    expect(btnNext).toBeEnabled();
  });

  it('should change list order on sort option change', async () => {
    const mapData: MapEvent[] = [
      {
        geometry: {
          coordinates: [0, 0],
          type: 'feature'
        },
        properties: {
          description: '',
          duration: 0,
          eventType: '',
          icon: <div />,
          title: 'first sample',
          year: 1990
        },
        type: 'feature'
      },
      {
        geometry: {
          coordinates: [0, 0],
          type: 'feature'
        },
        properties: {
          description: '',
          duration: 0,
          eventType: '',
          icon: <div />,
          title: 'another sample',
          year: 1992
        },
        type: 'feature'
      },
    ];
    renderList(mapData);
    let firstListItem = await screen.findByText(/first sample/i);
    const sortSelection = await screen.findByTestId('sort-selection');
    const btnSortDirection = await screen.findByTestId('btn-sort-dir');
    firstListItem.click();
    expect(onListItemClicked).toHaveBeenCalledWith(mapData[0], 0);

    fireEvent.change(sortSelection, { target: { value: "title" } });
    firstListItem = await screen.findByText(/first sample/i);
    firstListItem.click();
    expect(onListItemClicked).toHaveBeenCalledWith(mapData[0], 1);

    fireEvent.click(btnSortDirection)
    firstListItem = await screen.findByText(/first sample/i);
    firstListItem.click();
    expect(onListItemClicked).toHaveBeenCalledWith(mapData[0], 0);
  });

  it('should change list order on sort direction change', async () => {
    const mapData: MapEvent[] = [
      {
        geometry: {
          coordinates: [0, 0],
          type: 'feature'
        },
        properties: {
          description: '',
          duration: 0,
          eventType: '',
          icon: <div />,
          title: 'first sample',
          year: 1990
        },
        type: 'feature'
      },
      {
        geometry: {
          coordinates: [0, 0],
          type: 'feature'
        },
        properties: {
          description: '',
          duration: 0,
          eventType: '',
          icon: <div />,
          title: 'another sample',
          year: 1992
        },
        type: 'feature'
      },
    ];
    renderList(mapData)
    const btnSortDirection = await screen.findByTestId('btn-sort-dir');
    let firstListItem = await screen.findByText(/first sample/i);

    fireEvent.click(btnSortDirection)
    firstListItem = await screen.findByText(/first sample/i);
    firstListItem.click();
    expect(onListItemClicked).toHaveBeenCalledWith(mapData[0], 1);
  });
});