import React from 'react';
import renderer from 'react-test-renderer';
import Checklist from './checklist';
import tasksMocks from '../__mocks__/tasks';

it('renders correctly', () => {
        const tree = renderer.create(<Checklist tasks={tasksMocks}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
