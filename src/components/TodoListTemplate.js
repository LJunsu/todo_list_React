import { Component } from 'react';
import "./TodoListTemplate.css"

class TodoListTemplate extends Component {
    render() {
        var palette = this.props.palette;
        var form = this.props.form;
        var children = this.props.children;

        return(
            <main className = "todo-list-template">
                <div className = "title">
                    오늘 할 일
                </div>

                <section>
                    {palette}
                </section>

                <section className = "form-wrapper">
                    {form}
                </section>

                <section className = "todos-wrapper">
                    {children}
                </section>
            </main>
        );
    }
}

export default TodoListTemplate;