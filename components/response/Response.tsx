import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import Response from '../../shared/interfaces/Response';

interface Props {
  response: Response;
  collapsed: boolean;
}

export default function ResponseComp(props: Props) {
  return (
    <>
      {props.response.key ? (
        <Col>
          {props.collapsed ? (
            <Row>
              <span style={{ width: '30%' }}>Description: </span>
              {props.response.activity}{' '}
            </Row>
          ) : (
            <>
              <Row>
                <span style={{ width: '30%' }}>Description: </span>
                {props.response.activity}
              </Row>
              <Row>
                <span style={{ width: '30%' }}>Category: </span>
                {props.response.type}
              </Row>
              <Row>
                <span style={{ width: '30%' }}>Accessiblity Rating: </span>
                {props.response.accessibility}
              </Row>
              <Row>
                <span style={{ width: '30%' }}>Participants: </span>
                {props.response.participants}
              </Row>
              <Row>
                <span style={{ width: '30%' }}>Price: </span>
                {props.response.price}
              </Row>
              <Row>
                <span style={{ width: '30%' }}>Link: </span>
                {props.response.link ? (
                  <Link
                    style={{ width: '70%', padding: 0 }}
                    target='_blank'
                    href={props.response.link}
                    rel='norefferrer'
                  >
                    {props.response.link}
                  </Link>
                ) : (
                  'Not Found'
                )}
              </Row>
            </>
          )}
        </Col>
      ) : (
        <Row>
          <span style={{ width: '30%' }}></span>
          No activity found with those parameters
        </Row>
      )}
      <hr />
    </>
  );
}
