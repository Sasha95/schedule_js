import React from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import Sign from './Sign'

class ModalExample extends React.Component {
  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          fade={false}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Sign />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalExample
