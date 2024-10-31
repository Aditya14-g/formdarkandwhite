import React, { useState } from 'react';
import './form.css';

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='Form-box' style={{ backgroundColor: isChecked ? 'black' : 'rgb(203, 203, 203)' }}>
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} checked={isChecked} />
        <span className="slider round"></span>
      </label>
      <form className='form-inside' style={{ backgroundColor: isChecked ? 'gray' : 'rgb(203, 203, 203)' }}>
        <div className='name-field'>
          <label className='name-label'>Name:</label><br/>
          <input type="text" className="name" placeholder='firstname' />
          <input type="text" className="name" placeholder='middlename' />
          <input type="text" className="name" placeholder='lastname' />
        </div>
        <label>Email:</label>
        <input type='email' className='email' placeholder='Email' />
        <label>Birth date:</label>
        <input type='date' className='bday' placeholder='DD/MM/YYYY' />
        <button type='submit' className='submit-btn'> Submit </button>
      </form>
    </div>
  );
}

export default Form;
