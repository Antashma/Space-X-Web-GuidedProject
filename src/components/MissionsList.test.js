import React from "react";
import { render } from "@testing-library/react";
import MissionsList from './MissionsList';

export const missionsFixture = [
    {
        mission_id: 'foo',
        mission_name: 'bar'
    }
]

test('MissionsList renders', () => {
    render(<MissionsList missions={[]} />);
})

test('MissionList shows data when rendered with new missions props', () => {
    const {queryAllByTestId, rerender} = render(<MissionsList missions={[]}/>)

    expect(queryAllByTestId('mission')).toStrictEqual([])
    expect(queryAllByTestId('mission')).toHaveLength(0)
    
    rerender(<MissionsList missions={missionsFixture} />)

    expect(queryAllByTestId('mission')).toHaveLength(1)

})

test('MissionList shows error message when data failed', () => {
    const {getByTestId} = render(<MissionsList error='oops' />)

    const ele = getByTestId('missions-error')
    //console.log(ele)

})

