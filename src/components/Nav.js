import React from 'react';



function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header className="header" style={{backgroundColor: "#eae2b7"}}>
    <h1 className='h1'>Andrew Brandstrom</h1>

 
    <ul className="nav nav-tabs" style={{backgroundColor:"#f77f00"}}>
      
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
        

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#protfolio"
          onClick={() => handlePageChange('Protfolio')}


          className={currentPage === 'Protfolio' ? 'nav-link active' : 'nav-link'}
        >
        Protfolio
        </a>
      </li>
       
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
      

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>




      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
    </header>
  );
}

export default NavTabs;

