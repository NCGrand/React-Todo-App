import { TodoItem } from "./TodoItem"
import { ListGroup } from 'reactstrap'

export function TodoList({ todos, toggleTodo, editTodo, deleteTodo }) {
    return (
        <ListGroup>
            {todos.length === 0 && <div className="empty">No Todos</div>}
            {todos.map(todo => {
                return (
                    <TodoItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ListGroup>
    )
}