import React from 'react';

const Modal = ({ onClose, visible, isUpdated }) => {
  const handleOnClose = (e) => {
    if (e.target.id === 'container' || e.target.id === 'icon-close' || e.target.id === 'button-close') onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      style={{ position: 'fixed', backgroundColor: 'black', opacity: '0.8', display: 'flex', zIndex: '10', top: '0', bottom: '0', right: '0', left: '0', justifyContent: 'center', alignItems: 'center' }}
    >
      <div style={{ backgroundColor: 'white', padding: '32px 20px', borderRadius: '4px', width: '480px', position: 'relative' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" id="icon-close" style={{ position: 'absolute', top: '12px', right: '12px', cursor: 'pointer' }}>
          <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17" stroke="#FF8A65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>

        <h1 style={{ margin: '0 0 20px 0' }}>Edit Profile</h1>

        <form>
          <label className="block" style={{ display: 'block' }}>
            <span className="block text-sm font-medium text-slate-700" style={{ display: 'block', fontSize: '14px', fontWeight: 'bold' }}>
              First Name
            </span>
            <input type="text" style={{ display: 'block', width: '100%', borderRadius: '6px', padding: '5px 10px', outline: 'none', border: '1px solid black', margin: '3px 0 8px 0' }} />
          </label>
          <label className="block" style={{ display: 'block' }}>
            <span className="block text-sm font-medium text-slate-700" style={{ display: 'block', fontSize: '14px', fontWeight: 'bold' }}>
              Last Name
            </span>
            <input type="text" style={{ display: 'block', width: '100%', borderRadius: '6px', padding: '5px 10px', outline: 'none', border: '1px solid black', margin: '3px 0 8px 0' }} />
          </label>
          <label className="block" style={{ display: 'block' }}>
            <span className="block text-sm font-medium text-slate-700" style={{ display: 'block', fontSize: '14px', fontWeight: 'bold' }}>
              Employed
            </span>
            <input type="checkbox" style={{ display: 'block', width: '100%', borderRadius: '6px', padding: '5px 10px', outline: 'none', border: '1px solid black', margin: '3px 0 8px 0', cursor: 'pointer' }} />
          </label>
          <label className="block" style={{ display: 'block' }}>
            <span className="block text-sm font-medium text-slate-700" style={{ display: 'block', fontSize: '14px', fontWeight: 'bold' }}>
              Education
            </span>
            <select style={{ display: 'block', width: '100%', borderRadius: '6px', padding: '5px 10px', outline: 'none', border: '1px solid black', margin: '3px 0 8px 0', cursor: 'pointer' }}>
              <option></option>
              <option>High School</option>
              <option>Bachelor</option>
              <option>Master</option>
            </select>
          </label>
          <div className="block" style={{ display: 'flex', gap: '20px' }}>
            <span className="block text-sm font-medium text-slate-700" style={{ display: 'block', fontSize: '14px', fontWeight: 'bold' }}>
              Expertise
            </span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ display: 'flex', gap: '5px' }}>
                <input type="checkbox" style={{ display: 'block', width: '100%', borderRadius: '6px', padding: '5px 10px', outline: 'none', border: '1px solid black', margin: '3px 0 8px 0', cursor: 'pointer' }} /> HTML
              </label>
              <label style={{ display: 'flex', gap: '5px' }}>
                <input type="checkbox" style={{ display: 'block', width: '100%', borderRadius: '6px', padding: '5px 10px', outline: 'none', border: '1px solid black', margin: '3px 0 8px 0', cursor: 'pointer' }} /> CSS
              </label>
              <label style={{ display: 'flex', gap: '5px' }}>
                <input type="checkbox" style={{ display: 'block', width: '100%', borderRadius: '6px', padding: '5px 10px', outline: 'none', border: '1px solid black', margin: '3px 0 8px 0', cursor: 'pointer' }} /> Javascript
              </label>
              <label style={{ display: 'flex', gap: '5px' }}>
                <input type="checkbox" style={{ display: 'block', width: '100%', borderRadius: '6px', padding: '5px 10px', outline: 'none', border: '1px solid black', margin: '3px 0 8px 0', cursor: 'pointer' }} /> NodeJS
              </label>
              <label style={{ display: 'flex', gap: '5px' }}>
                <input type="checkbox" style={{ display: 'block', width: '100%', borderRadius: '6px', padding: '5px 10px', outline: 'none', border: '1px solid black', margin: '3px 0 8px 0', cursor: 'pointer' }} /> ReactJS
              </label>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <span className="block text-sm font-medium text-slate-700" style={{ display: 'block', fontSize: '14px', fontWeight: 'bold' }}>
              Preferred Technology
            </span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ display: 'flex', gap: '5px' }}>
                <input type="radio" /> Front End
                <input type="radio" /> Back End
                <input type="radio" /> Full Stack
              </label>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <span className="block text-sm font-medium text-slate-700" style={{ display: 'block', fontSize: '14px', fontWeight: 'bold' }}>
              Preferred Technology
            </span>
            <textarea></textarea>
          </div>
          <div style={{ display: 'flex', justifyContent: 'end', gap: '12px' }}>
            <button id="button-close" style={{ backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer' }}>
              Close
            </button>
            <button type="submit" style={{ backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer' }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
