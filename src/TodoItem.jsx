import { useState } from 'react'
import { Button, Form, Input, InputGroup, ListGroupItem, Modal, ModalHeader, ModalBody } from 'reactstrap';

export function TodoItem({
    completed,
    id,
    title,
    toggleTodo,
    editTodo,
    deleteTodo
}) {
    const [modal, setModal] = useState(false)
    const toggle = () => {
        setModal(!modal)
        console.log("modal toggled")
    }

    const [editItem, setEditItem] = useState(title)

    const handleSubmit = (e) => {
        if (editItem === "") return
        editTodo(id, editItem)

        setEditItem("")
    }

    return (
        <ListGroupItem>
            <Input
                type="checkbox"
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)}
                className="checkbox"
            />
            <div className={completed && "finished"}>{title}</div>
            <Button color="info" onClick={toggle}>
                Edit
            </Button>
            <Button color="danger" onClick={() => deleteTodo(id)}>
                Delete
            </Button>

            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Edit Todo Item</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup>
                            <Input value={editItem} type="text" onChange={e => setEditItem(e.target.value)} />
                            {/* /*This Submit button doesn't need the onClick set to toggle. handleSubmit will be called when button
                        is clicked and handle setting the edited item. The defaut behavior of the form is to refresh the page,
                        which will set the modal to it's initial state (hidden). If onClick is specified as toggle, the modal
                        will be toggled off but onSubmit will no longer be called and the item will not be edited as the onClick
                        overrides the buttons default behavior of submitting the form.
                        */}
                            <Button color="info">
                                Submit
                            </Button>
                        </InputGroup>
                    </Form>
                    <Button color="danger" onClick={toggle} className="modal-cancel-button">
                        Cancel
                    </Button>
                </ModalBody>
            </Modal>
        </ListGroupItem>
    )
}