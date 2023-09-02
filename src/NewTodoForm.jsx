import { useState } from "react"
import { Button, Form, Input, InputGroup, InputGroupText, Label } from 'reactstrap'

export function NewTodoForm({ addTodo }) {
    const [newItem, setNewItem] = useState("")

    const handleSubmit = (e) => {
        if (newItem === "") return
        addTodo(newItem)

        setNewItem("")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Label for="todo-item" className="header">
                New Item
            </Label>
            <InputGroup>
                <Input placeholder="Enter Todo Item" id="todo-item" type="text" onChange={e => setNewItem(e.target.value)} className="new-item-input"/>
                <Button color="info">
                    Add Item
                </Button>
            </InputGroup>
        </Form>
    )
}