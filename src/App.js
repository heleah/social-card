import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import Card from 'react-bootstrap/card';
import Image from 'react-bootstrap/Image';

import avatar from './avatar.JPG';
import blah from './blah.JPG';
import heart from './heart.png';
import msg from './msg.png';
import share from './share.png';
import speechbubble from './speechbubble.png';

function App() {
  return (
    <Container className="w-50 my-3">

      <Row>
        <Col className="avatar" xs={1.5}>
          <Image src={avatar} alt="user avatar" roundedCircle />
        </Col>

        <Col className="content" xs={10}>
          <Row className="post-header">
            <Col>
              <p className="font-weight-bold mb-1">Helena's Coding Journey<span class="font-weight-light"> @helenahcodes · 12 Feb</span></p>
            </Col>
          </Row>

          <Row className="post-text my-0">
            <Col>
              <p>Don't know where to start coding? Don't fret, click the link below instead.</p>
            </Col>
          </Row>

          <Row className="post-card">
            <Col>
              <Card>
                <Card.Img variant="top" src={blah} />
                <Card.Body className="pt-3 pb-2">
                  <Card.Title>5 Tips for Coding Newbies</Card.Title>
                  <Card.Text>If you're overwhelmed by all the options, don't despair. These tips will help you start your coding journey.</Card.Text>
                  <Card.Text>link.io</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="interactives pt-2">
            <Col className="comments">
              <img src={speechbubble} alt="comment" />
              1
            </Col>

            <Col className="shares">
              <img src={share} alt="share" />
              0
            </Col>

            <Col className="likes">
              <img src={heart} alt="like" />
              14
            </Col>

            <Col className="message">
              <img src={msg} alt="send message" />
            </Col>
          </Row>

        </Col>
      </Row>

    </Container>
  );
}

export default App;
