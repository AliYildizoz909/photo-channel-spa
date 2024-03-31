import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import withRouter  from '../../redux/helpers/withRouter';

class ErrorPage extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={{ span: 6 }} style={{ marginTop: 100 }}>
                            <h2 style={{ color: "red" }}>Bir hata oluştu..</h2>

                            <h4><b>Hata mesajı :</b> {this.props.location.state.message}</h4>
                            <h4><b>Hata kodu :</b> {this.props.location.state.status}</h4><br /><br />
                            <p>
                                Ana sayfaya gitmek için <Link to="/" >tiklayin</Link>
                            </p>

                        </Col>
                    </Row>
                </Container>


            </div>
        )
    }
}
export default withRouter(ErrorPage)