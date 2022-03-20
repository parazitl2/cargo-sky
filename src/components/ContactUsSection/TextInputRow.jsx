export const TextInputRow = ({ isRequired, handleChange, value, name, label, placeholder = label, hint }) => {
  return (
    <div className='row'>
      <div className='col-md-6 cargo-form-label'>
        {label}
        {!!hint &&
          <div className='cargo-form-label-hint'>{hint}</div>
        }
      </div>

      <div className='col-md-6'>
        <div className='form-group'>
          <input
            required={isRequired}
            type='text'
            id='cargo_sender'
            name={name}
            className='form-control'
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
          />

          <p className='help-block text-danger'/>
        </div>
      </div>
    </div>
  );
}
