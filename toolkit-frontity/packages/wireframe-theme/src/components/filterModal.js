import React from "react"
import { connect } from "frontity"
import {Button, Modal} from "react-bootstrap"


const FilterModal = ({

    difficulty,
    handleDiff,
    show,
    handleClose,

}) => {
  

    return (

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <button id="easy" className={difficulty==="easy" ? "filter-selected" : ""} name="difficulty" value="easy" onClick={handleDiff}> easy </button>

            <button id="medium" className={difficulty==="medium" ? "filter-selected" : ""} name="difficulty" value="medium" onClick={handleDiff}> medium </button>
            
            <button id="hard" className={difficulty==="hard" ? "filter-selected" : ""} name="difficulty" value="hard" onClick={handleDiff} > hard </button>
   
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        
    )
}



export default connect(FilterModal)