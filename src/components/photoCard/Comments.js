import React, { Component } from 'react'
import { Row, InputGroup, FormControl, Button } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Comments extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                style={{ borderRadius: 50 }}
                            />
                            <InputGroup.Append>
                                <Button variant="success" style={{ borderRadius: 15 }}>Yorum yap</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        {
                            this.props.comments.map(c => {
                                return <div className="p-3 mb-2 bg-light text-dark" key={c.commentId} style={{ borderRadius: 50 }}>
                                    <div className="d-inline-flex"><Link to={"profile/"+c.userId}>{c.firstName + " " + c.lastName}</Link></div><div className="d-inline-flex float-right">{c.shareDate.split("T")[0]}</div>
                                    <hr style={{ margin: 5 }} />
                                    <p className="mb-0">
                                        {c.description}
                                    </p>
                                </div>
                            })
                        }


                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={this.props.hideCardBody} className="btn btn-link" style={{ padding: 0 }}>Gizle</button>
                    </Col>
                </Row>
            </div>
        )
    }
}
