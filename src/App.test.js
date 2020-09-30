import React from 'react';
import {fireEvent, render, wait} from '@testing-library/react';
import {fetchMissions, fetchMissions as mockFetchMissions} from './api/fetchMissions'

import App from './App'
import {missionsFixture} from './components/MissionsList.test'

jest.mock('./api/fetchMissions');
//when called mocked this function

test('App fetches mission data and renders data', async () => {
mockFetchMissions.mockResolvedValueOnce(missionsFixture)

const { getByText, queryAllByTestId } = render(<App />);
const button = getByText(/get data/i);

fireEvent.click(button);

getByText(/we are fetching data/i);
await wait();
expect(queryAllByTestId('mission')).toHaveLength(1)
})