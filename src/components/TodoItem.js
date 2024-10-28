import { Component } from 'react';
import "./TodoItem.css"

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        var text = this.props.text;
        var checked = this.props.checked;
        var color = this.props.color;
        var id = this.props.id;
        var onToggle = this.props.onToggle;
        var onRemove = this.props.onRemove;

        return(
            <div 
                className = "todo-item"
                onClick = {() => onToggle(id)}
            >
                <div
                    className = "remove"
                    onClick = {(e) => {
                        e.stopPropagation();
                        onRemove(id);
                    }}
                >
                    &times;
                </div>

                <div className = {`todo-text ${checked && "checked"}`}>
                    <div style = {{color : color}}>{text}</div>
                </div>

                {
                    checked && (<div className = "check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem;