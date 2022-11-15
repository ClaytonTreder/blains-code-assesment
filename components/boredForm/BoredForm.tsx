import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import QueryBuilder from '../../shared/functions/Query';
import Request from '../../shared/interfaces/Request';
import Response from '../../shared/interfaces/Response';

interface Props {
  setResponses: (res: Response) => void;
}

export default function BoredForm(props: Props) {
  const [state, setState] = useState<Request>({
    category: undefined,
    participants: 1,
    price: 0,
    accessibility: 0,
  });

  const handleChange = (e: any) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRandom = (e: any) => {
    e.preventDefault();
    fetch('https://www.boredapi.com/api/activity')
      .then((res) => res.json())
      .then((data) => props.setResponses(data as Response));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch('http://www.boredapi.com/api/activity?' + QueryBuilder(state))
      .then((res) => res.json())
      .then((data) => props.setResponses(data as Response));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Category</Form.Label>
          <Form.Select onChange={handleChange} name='category'>
            <option value='education'>Education</option>
            <option value='recreation'>Recreation</option>
            <option value='social'>Social</option>
            <option value='diy'>Diy</option>
            <option value='charity'>Charity</option>
            <option value='cooking'>Cooking</option>
            <option value='relaxation'>Relaxation</option>
            <option value='music'>Music</option>
            <option value='busywork'>Busywork</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Participants</Form.Label>
          <Form.Control
            value={state.participants}
            onChange={handleChange}
            type='number'
            step={1}
            min={1}
            name='participants'
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Max Price ({state.price})</Form.Label>
          <Col>
            <Row
              style={{ flexWrap: 'nowrap' }}
              className='d-flex flex-row align-items-center'
            >
              <Col xs={2}>
                <i>Free</i>
              </Col>
              <Col xs={8}>
                <Form.Range
                  onChange={handleChange}
                  value={state.price}
                  step={0.01}
                  max={1}
                  min={0}
                  name='price'
                />
              </Col>
              <Col xs={2}>
                <i>Expensive</i>
              </Col>
            </Row>
          </Col>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>
            Max Accessibility Rating ({state.accessibility})
          </Form.Label>
          <Col>
            <Row
              style={{ flexWrap: 'nowrap' }}
              className='d-flex flex-row align-items-center'
            >
              <Col xs={2}>
                <i>Most</i>
              </Col>
              <Col xs={8}>
                <Form.Range
                  onChange={handleChange}
                  value={state.accessibility}
                  step={0.01}
                  max={1}
                  min={0}
                  name='accessibility'
                />
              </Col>
              <Col xs={2}>
                <i>Least</i>
              </Col>
            </Row>
          </Col>
        </Form.Group>
        <Row className={'justify-content-center'}>
          <Button variant='primary' type='submit' className='mb-3'>
            Submit
          </Button>
          <Button variant='warning' onClick={handleRandom}>
            Random
          </Button>
        </Row>
      </Form>
    </>
  );
}
