import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="Product Name"
          />
        </div>
      </div>
      <div>
        <label>Price per unit</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Price"
          />
        </div>
      </div>
      
      <div>
        <label>Description</label>
        <div>
          <Field name="description" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);
