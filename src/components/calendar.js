import React, { useState } from 'react';
import Calendar from 'react-calendar';


const [value, onChange] = useState(new Date());

const Calendar = () => {
    return(
        <div>
      <Calendar onChange={onChange} value={value} />
        </div>
    )
}
export default Calendar