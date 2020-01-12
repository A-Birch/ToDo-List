import React from 'react';

import TodoItem from '../todo-item/todo-item.component';

import './todo-list.styles.scss';

class TodoList extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: [
                {
                    id: 1,
                    title: 'Take out the trash',
                    completed: false
                },
                {
                    id: 2,
                    title: 'Dinner with friends',
                    completed: false
                },
                {
                    id: 3,
                    title: 'Job interview',
                    completed: false
                }
            ]
        }
    }

    render() {
        
        return (
            <div className="todo-list">
                {
                    this.state.todos.map(({id, title, ...otherProps }) => (
                        <TodoItem key= {id} title={title} />
                    ))
                }
            </div>
        )
    }
}

export default TodoList;