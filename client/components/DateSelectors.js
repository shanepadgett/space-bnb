// import DatePicker from 'react-date-picker'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

const DateSelectors = ({ onFromChange, fromDate, onToChange, toDate }) => (
  <div className='d-flex justify-content-around'>
    <DatePicker onChange={onFromChange} />
    <DatePicker onChange={onToChange} />
    {/* <DatePicker onChange={onFromChange} value={fromDate} />
    <DatePicker onChange={onToChange} value={toDate} /> */}
  </div>
)

export default DateSelectors
