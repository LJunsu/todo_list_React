import { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    
    render() {
        var todos = this.props.todos;
        var onToggle = this.props.onToggle;
        var onRemove = this.props.onRemove;

        const todoList = todos.map(
            ({id, text, checked, color}) => (
                <TodoItem
                    id = {id}
                    text = {text}
                    checked = {checked}
                    color = {color}
                    onToggle = {onToggle}
                    onRemove = {onRemove}
                    key = {id}
                />
            )
        )

        return(
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;