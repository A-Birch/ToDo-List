import React from 'react';

import './todo-item.styles.scss';

const TodoItem = ({title, ...otherProps }) => (
    <div className="todo-item">
        <p><span className="icon-checkmark"></span>{ title }</p><span className="icon-cross"></span>
    </div>
)

export default TodoItem;
