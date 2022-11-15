import Head from 'next/head';
import BoredForm from '../components/boredForm';
import styles from '../styles/Home.module.css';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Response from '../shared/interfaces/Response';
import ResponseComp from '../components/response';

export default function Home() {
  const [state, setState] = useState<{ responses: Response[] }>({
    responses: [],
  });

  const setResponses = (res: Response) => {
    window.localStorage.setItem(
      'responses',
      JSON.stringify([...state.responses, res])
    );
    setState((prev) => ({ responses: [res, ...prev.responses] }));
  };

  const clearResponses = () => {
    window.localStorage.setItem('responses', JSON.stringify([]));
    setState(() => ({ responses: [] }));
  };

  useEffect(() => {
    if (
      typeof window !== undefined &&
      window.localStorage.getItem('responses')
    ) {
      setState(() => ({
        responses: JSON.parse(
          window.localStorage.getItem('responses') as string
        ),
      }));
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Don't be bored</title>
        <meta name='description' content="I'm bored..." />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container fluid>
        <h1 className={styles.title}>Are you bored?</h1>

        <p className={styles.description}>
          Don't be! Fill out the form below to find something to do.
        </p>
        <Row>
          <Col className='pb-4' md={3}>
            <BoredForm setResponses={setResponses} />
          </Col>
          <Col md={{ offset: 1, span: 8 }}>
            {state.responses.length ? (
              <Row className=' text-center'>
                <Button
                  type='button'
                  variant='danger'
                  className='mb-3 col-md-4 offset-md-4'
                  onClick={clearResponses}
                >
                  Clear Activities
                </Button>
              </Row>
            ) : null}
            {state.responses.length ? (
              state.responses.map((res, i) => (
                <ResponseComp
                  key={res.key + i}
                  response={res}
                  collapsed={i !== 0}
                />
              ))
            ) : (
              <Row className='p-5 text-center'>
                <b>Nothing yet</b>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
