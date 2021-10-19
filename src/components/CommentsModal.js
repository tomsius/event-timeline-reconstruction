import React, {useEffect,useState, useCallback} from 'react';
import { Card, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function CommentsModal(props) {
    const [comments, setComments] = useState([]);
    const { user } = useAuth0();

    const refreshComments = useCallback(() => {
        axios.get(`${process.env.REACT_APP_SERVER}/comments?id=${props.taskId}`)
                .then(response => response.data)
                .then(data => setComments(data));
    }, [props.taskId]);

    useEffect(() => {
        refreshComments();
    }, [refreshComments]);

    const addComment = useCallback((event) => {
        event.preventDefault();
        console.log(event.target.Comment.value);
        let dateObj = new Date();
        let month = dateObj.getMonth() + 1;
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();
        let date = year + "-" + month + "-" + day;

        axios.post(`${process.env.REACT_APP_SERVER}/comments`, {
            user: user.name,
            date: date,
            text: event.target.Comment.value,
            fk_TASKid_TASK: props.taskId,
            id_COMMENT: 0
        })
        .then(() => refreshComments());
    }, [user.name, props.taskId, refreshComments]);

    return (
        <Modal size="lg" show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title style={{ color: "black" }}>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {comments.map((comment, idx) => (
                    <Row key={idx}>
                        <Col>
                            <Card style={{ width: "100%", marginLeft: "auto", marginRight: "auto" }} bg="light" text="dark" className="mb-2">
                                <Card.Body>
                                    <Card.Title>{comment.user}</Card.Title>
                                    <Card.Subtitle className="mb-2">{comment.date}</Card.Subtitle>
                                    <Card.Text>{comment.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ))}
                <Form style={{ marginTop: "30px" }} onSubmit={addComment}>
                    <Form.Group className="mb-3" controlId="Comment">
                        <Form.Label style={{ color: "black" }}>Naujas komentaras</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Pateikti
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Uždaryti
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CommentsModal;