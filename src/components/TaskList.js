import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import CommentsModal from './CommentsModal';
import { useAuth0 } from '@auth0/auth0-react';

function TaskList(props) {
    //useState(props.key);
    const [tasks, setTasks] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const { isAuthenticated } = useAuth0();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER}/tasks?id=${props.semester}`)
            .then(response => response.data)
            .then(data => setTasks(data));
    }, [props.semester]);

    if (!isAuthenticated) {
        return <></>
    }

    return (
        <div>
            <h1>{props.semester + "-o semestro užduotys"}</h1>

            {tasks.map((task, idx) => (
                <Row key={idx}>
                    <Col>
                        <Card style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }} bg="secondary" text="light" className="mb-2">
                            <Card.Body>
                                <Card.Title>{task.title}</Card.Title>
                                <Card.Subtitle className="mb-2">{task.date}</Card.Subtitle>
                                <Card.Text>{task.description}</Card.Text>
                                <Button variant="primary" className="mb-2" style={{ marginRight: "5px" }} onClick={() => setModalShow(true)}>Komentarai</Button>
                                <Button variant="primary" className="mb-2" onClick={() => window.open(task.link, "_blank")}>Nuoroda</Button>
                            </Card.Body>
                        </Card>
                        <CommentsModal title={task.title} taskId={task.id_TASK} show={modalShow} handleClose={() => setModalShow(false)} />
                    </Col>
                </Row>
            ))}
        </div>
    );
}

export default TaskList;

/*
export default class TaskList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: this.props.key,
            modalShow: false,
            tasks: []
        };

        this.modalClose = this.modalClose.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/tasks/${this.props.semester}`)
            .then(response => response.data)
            .then(data => this.setState({tasks: data}));
    }

    modalClose() {
        this.setState({
            modalShow: false
        });
    }

    render() {
        return (
            <div>
                <h1>{this.props.semester + "-o semestro užduotys"}</h1>

                {this.state.tasks.map((task, idx) => (
                    <Row key={idx}>
                        <Col>
                            <Card style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }} bg="secondary" text="light" className="mb-2">
                                <Card.Body>
                                    <Card.Title>{task.title}</Card.Title>
                                    <Card.Subtitle className="mb-2">{task.date}</Card.Subtitle>
                                    <Card.Text>{task.description}</Card.Text>
                                    <Button variant="primary" className="mb-2" style={{marginRight: "5px"}} onClick={() => this.setState({modalShow: true})}>Komentarai</Button>
                                    <Button variant="primary" className="mb-2" onClick={() => window.open(task.link, "_blank")}>Nuoroda</Button>
                                </Card.Body>
                            </Card>
                            <CommentsModal title={task.title} taskId={task.id_TASK} show={this.state.modalShow} handleClose={this.modalClose}/>
                        </Col>
                    </Row>
                ))}
            </div>
        );
    }
}
*/