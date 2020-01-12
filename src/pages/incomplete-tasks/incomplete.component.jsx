import React from 'react';

import Todos from '../../components/todo-list/todo-list.component';
import Header from '../../components/header/header.component';
import './incomplete.styles.scss';

const IncompletePage = () => (
    <div className='incomplete-page'>
        <div className="container">
            <Header />
            <Todos />
        </div>
    </div>
);

export default IncompletePage;