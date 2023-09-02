import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faClock, faListAlt } from '@fortawesome/free-regular-svg-icons'

export function Dashboard({ todos, setTodos }) {

    const date = new Date()
    const formattedDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`

    const currentTodos = todos.length;

    const completedTodos = todos.filter(todo => todo.completed).length;

    return (
        <Container className="dashboard-container">
            <Row>
                <Col className="my-auto">
                    <Card color="info">
                        <CardHeader>
                            Today's Date
                        </CardHeader>
                        <FontAwesomeIcon icon={faClock} spin className="card-icons" size="2xl" />
                        <CardBody>
                            <CardText>
                                {formattedDate}
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="my-auto">
                    <Card color="info">
                        <CardHeader>
                            Total Todos
                        </CardHeader>
                        <FontAwesomeIcon icon={faListAlt} className="card-icons" size="2xl" />
                        <CardBody>
                            <CardText>
                                {currentTodos}
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="my-auto">
                    <Card color="info">
                        <CardHeader>
                            Finished Todos
                        </CardHeader>
                        <FontAwesomeIcon icon={faCheckSquare} className="card-icons" size="2xl" />
                        <CardBody>
                            <CardText>
                                {completedTodos}
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button color="danger" className="mt-3 mb-2" onClick={() => setTodos([])}>Clear All Tasks</Button>
                </Col>
            </Row>
        </Container>
    )
}