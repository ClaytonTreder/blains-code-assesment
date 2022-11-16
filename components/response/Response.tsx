import Link from 'next/link';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Response from '../../shared/interfaces/Response';
import styles from './Response.module.css';

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
              <span className={styles.label}>Description: </span>
              <span className={styles.value}>{props.response.activity}</span>
            </Row>
          ) : (
            <div style={{ cursor: 'pointer' }}>
              <Row>
                <span className={styles.label}>Description: </span>
                <span className={styles.value}>{props.response.activity}</span>
              </Row>
              <Row>
                <span className={styles.label}>Category: </span>
                <span className={styles.value}>{props.response.type}</span>
              </Row>
              <Row>
                <span className={styles.label}>Accessiblity Rating: </span>
                <span className={styles.value}>
                  {props.response.accessibility}
                </span>
              </Row>
              <Row>
                <span className={styles.label}>Participants: </span>
                <span className={styles.value}>
                  {props.response.participants}
                </span>
              </Row>
              <Row>
                <span className={styles.label}>Price: </span>
                <span className={styles.value}>{props.response.price}</span>
              </Row>
              <Row>
                <span className={styles.label}>Link: </span>
                <span className={styles.value}>
                  {props.response.link ? (
                    <Link
                      style={{ padding: 0 }}
                      target='_blank'
                      href={props.response.link}
                      rel='norefferrer'
                    >
                      {props.response.link}
                    </Link>
                  ) : (
                    'None Found'
                  )}
                </span>
              </Row>
            </div>
          )}
        </Col>
      ) : (
        <Row>
          <span className={styles.label}>Error: </span>
          <span className={styles.value}>
            No activity found with those parameters
          </span>
        </Row>
      )}
      <hr />
    </>
  );
}
