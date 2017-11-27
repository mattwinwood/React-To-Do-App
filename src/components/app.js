import React from 'react';
import {injectGlobal} from 'styled-components';
import normalize from 'normalize.css';
import Checklist from './checklist';
import baseStyles from '../styles/base';
import tasksMocks from '../__mocks__/tasks';
import TodoHeader from './TodoHeader';

injectGlobal([baseStyles + normalize]);

const App = () => (
    <div className="container">
        <TodoHeader title="TO DO"/>
        <Checklist tasks={tasksMocks}/>
    </div>
);

export default App;
