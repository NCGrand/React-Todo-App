import { useEffect, useState } from "react"
import { Col, Container, Row } from 'reactstrap'
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import { Dashboard } from "./Dashboard"

export default function App() {

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
    console.log(todos)
  }

  function editTodo(id, title) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, title}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <Container>
      <Row>
        <Col xs={{size: 12}}>
          <h1 className="header">Dashboard</h1>
        </Col>
        <Col>
          <Dashboard todos={todos} setTodos={setTodos} />
        </Col>
      </Row>
      <Row>
        <Col md={{offset: 2, size: 8}} xl={{offset: 3, size: 6}}>
          <NewTodoForm addTodo={addTodo} />
        </Col>
      </Row>
      <Row>
        <Col xs={{size: 12}}>
          <h1 className="header">Todo List</h1>
        </Col>
      </Row>
      <Row>
        <Col md={{offset: 2, size: 8}} xl={{offset: 3, size: 6}}>
          <TodoList todos={todos} toggleTodo={toggleTodo} editTodo={editTodo} deleteTodo={deleteTodo} />
        </Col>
      </Row>
    </Container>
  )
}