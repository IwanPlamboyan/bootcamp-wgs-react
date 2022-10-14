import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavbarBiodata from './NavbarBiodata';
import Modal from './Modal';
import { getDataForm, deleteDataForm } from '../redux/actions/form';

const ListBiodata = () => {
  const dispatch = useDispatch();
  const { getDataFormResult, getDataFormLoading, getDataFormError, deleteDataFormResult } = useSelector((state) => state.form);

  const [showModal, setShowModal] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleOnClose = () => setShowModal(false);
  const handleUpdated = () => setIsUpdated(!isUpdated);

  useEffect(() => {
    // pangil action getDataForm
    dispatch(getDataForm());
  }, [dispatch, deleteDataFormResult]);

  return (
    <>
      <NavbarBiodata />
      <div style={{ margin: '80px 100px' }}>
        <h1>ListBiodata</h1>
        <NavLink to="/add" className="ui button" style={{ backgroundColor: 'gray', color: 'white', marginTop: '10px' }}>
          Tambah Biodata
        </NavLink>

        <table className="ui celled table">
          <thead>
            <tr>
              <th>No</th>
              <th>id</th>
              <th>FirstName</th>
              <th>Lastname</th>
              <th>Employe</th>
              <th>Education</th>
              <th>Expertise</th>
              <th>Preferred</th>
              <th>Notes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getDataFormResult ? (
              getDataFormResult.map((biodata, index) => (
                <tr key={biodata.id}>
                  <td>{index + 1}</td>
                  <td>{biodata?.id ? biodata.id : ''}</td>
                  <td>{biodata?.firstName ? biodata.firstName : ''}</td>
                  <td>{biodata.lastName ? biodata.lastName : ''}</td>
                  <td>{biodata.employed ? 'true' : 'false'}</td>
                  <td>{biodata.education ? biodata.education : ''}</td>
                  <td>{biodata?.expertise ? biodata?.expertise.map((item) => `${item}, `) : ''}</td>
                  <td>{biodata.preferred ? biodata.preferred : ''}</td>
                  <td>{biodata.note ? biodata.note : ''}</td>
                  <td style={{ display: 'flex', gap: '5px' }}>
                    <button style={{ backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }} onClick={() => setShowModal(true)}>
                      Edit
                    </button>
                    <button style={{ backgroundColor: 'tomato', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }} onClick={() => dispatch(deleteDataForm(biodata.id))}>
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : getDataFormLoading ? (
              <p>Loading ...</p>
            ) : (
              <p>{getDataFormError ? getDataFormError : 'Data Kosong'}</p>
            )}
          </tbody>
        </table>
      </div>

      {/* modal */}
      <Modal onClose={handleOnClose} visible={showModal} isUpdated={handleUpdated} />
    </>
  );
};

export default ListBiodata;
