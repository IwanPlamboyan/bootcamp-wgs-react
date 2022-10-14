import React from 'react';
import NavbarBiodata from './NavbarBiodata';
import { useNavigate } from 'react-router-dom';
import Styles from '../Styles';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { setDataForm } from '../redux/actions/form'; //mengimport action dari form

const AddBiodata = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); //mendeklarasikan dispatch
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    dispatch(setDataForm(values)); //menyimpan data ke store
    await sleep(300);
    navigate('/');
  };

  return (
    <>
      <NavbarBiodata />
      <Styles>
        <h1 style={{ marginTop: '80px' }}>Employee Form</h1>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>First Name</label>
                <Field name="firstName" component="input" type="text" placeholder="First Name" />
              </div>
              <div>
                <label>Last Name</label>
                <Field name="lastName" component="input" type="text" placeholder="Last Name" />
              </div>
              <div>
                <label>Employed</label>
                <Field name="employed" component="input" type="checkbox" />
              </div>
              <div>
                <label>Education</label>
                <Field name="education" component="select">
                  <option />
                  <option value="highschool">High School</option>
                  <option value="bachelor">Bachelor</option>
                  <option value="master">Master</option>
                </Field>
              </div>
              <div>
                <label>Expertise</label>
                <div>
                  <label>
                    <Field name="expertise" component="input" type="checkbox" value="HTML" /> HTML
                  </label>
                  <label>
                    <Field name="expertise" component="input" type="checkbox" value="CSS" /> CSS
                  </label>
                  <label>
                    <Field name="expertise" component="input" type="checkbox" value="Javascript" /> Javascript
                  </label>
                  <label>
                    <Field name="expertise" component="input" type="checkbox" value="NodeJS" /> NodeJS
                  </label>
                  <label>
                    <Field name="expertise" component="input" type="checkbox" value="ReactJS" /> ReactJS
                  </label>
                </div>
              </div>
              <div>
                <label>Preferred Technology</label>
                <div>
                  <label>
                    <Field name="preferred" component="input" type="radio" value="Front End" /> Front End
                  </label>
                  <label>
                    <Field name="preferred" component="input" type="radio" value="Back End" /> Back End
                  </label>
                  <label>
                    <Field name="preferred" component="input" type="radio" value="Full Stack" /> Full Stack
                  </label>
                </div>
              </div>
              <div>
                <label>Notes</label>
                <Field name="note" component="textarea" placeholder="Notes" />
              </div>
              <div className="buttons">
                <button type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
                <button type="button" onClick={form.reset} disabled={submitting || pristine}>
                  Reset
                </button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
      </Styles>
    </>
  );
};

export default AddBiodata;
