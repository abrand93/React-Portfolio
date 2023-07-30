import React, { useState } from 'react'
import About from './pages/about'
import Protfolio from './pages/protfolio'
import Contact from './pages/contact'
import Nav from './Nav'
import Resume from './pages/Resume'
import Header from './Header'
export default function PortfolioContainer(){
    const[currentPage, setCurrentPage] = useState('About')
    const renderPage = () =>{
        if(currentPage === 'About'){
        return <About/>
        }
        if(currentPage === "Protfolio"){
            return <Protfolio/>
        }
        if(currentPage === "Contact"){
            return <Contact/>
        }
        if(currentPage === "Resume"){
            return <Resume/>
        }

    }
const handlePageChange = (page) => setCurrentPage(page)
return(
    <div>
        <Header />
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  
    </div>
)
}