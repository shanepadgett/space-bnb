import { Row, Col, Table } from 'reactstrap'

const ReservationCard = ({ reservation }) => (
  <Row className='bg mb-3 pt-4'>
    <Col xs>
      <Row>
        <Col xs='12'>
          <h3 className='text-light'>{`${reservation.destination} - ${reservation.resort}`}</h3>
          <Row>
            <Col>
              <Table>
                <tbody>
                  {Object.keys(reservation).map(key => {
                    if (key === '_id' || key === '__v' || key === 'user' || key === 'destination' || key === 'resort') {
                      return null
                    } else {
                      return (
                        <tr key={key}>
                          <th>{key}</th>
                          <td className='text-right'>{reservation[key]}</td>
                        </tr>
                      )
                    }
                  })}
                  <tr>
                    <th>total cost</th>
                    <td className='text-right text-success'>{`$ 128,300.00`}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>

    <style global jsx>{`
      .bg {
        background: rgba(0, 0, 0, 0.7)
      }
    `}</style>
  </Row>
)

export default ReservationCard
