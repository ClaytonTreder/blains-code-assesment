import Link from 'next/link';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Response from '../../shared/interfaces/Response';

interface Props {
  response: Response;
  collapsed: boolean;
}

export default function ResponseComp(props: Props) {
  const [state, setState] = useState<{ collapsed: boolean }>({
    collapsed: props.collapsed,
  });

  return (
    <>
      {props.response.key ? (
        <Col
          onClick={() => setState((prev) => ({ collapsed: !prev.collapsed }))}
        >
          {state.collapsed ? (
            <Row style={{ cursor: 'pointer' }}>
              <span style={{ width: '30%' }}>Description: </span>
              <span style={{ width: '70%' }}>{props.response.activity}</span>
            </Row>
          ) : (
            <>
              <Row>
                <span style={{ width: '30%' }}>Description: </span>
                <span style={{ width: '70%' }}>{props.response.activity}</span>
              </Row>
              <Row>
                <span style={{ width: '30%' }}>Category: </span>
                <span style={{ width: '70%' }}>{props.response.type}</span>
              </Row>
              <Row>
                <span style={{ width: '30%' }}>Accessiblity Rating: </span>
                <span style={{ width: '70%' }}>
                  {props.response.accessibility}
                </span>
              </Row>
              <Row>
                <span style={{ width: '30%' }}>Participants: </span>
                <span style={{ width: '70%' }}>
                  {props.response.participants}
                </span>
              </Row>
              <Row>
                <span style={{ width: '30%' }}>Price: </span>
                <span style={{ width: '70%' }}>{props.response.price}</span>
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
          <span style={{ width: '30%' }}>Error: </span>
          <span style={{ width: '70%' }}>
            No activity found with those parameters
          </span>
        </Row>
      )}
      <hr />
    </>
  );
}
