import React, { Component } from 'react'

export default class AddEmplyeeModal extends Component {
  state = { employee: {}, modal: 'add', index: null }

  static getDerivedStateFromProps = (props, state) => {
    console.log(props)
    console.log(state)
    if (props.modal === 'edit') {
      return {
        employee: props.employee,
        modal: props.modal,
        index: props.index
      }
    } else if (props.modal === 'add') {
      return {
        employee: props.employee,
        modal: props.modal
      }
    }
    return null
  }

  handleSave = e => {
    e.preventDefault()
    console.log(this.state.employee)
    let employees = JSON.parse(localStorage.getItem('employees')) || []
    if (this.state.modal === 'add') {
      employees.push(this.state.employee)
    } else {
      console.log(this.state.index)
      employees[this.state.index] = this.state.employee
    }
    localStorage.setItem('employees', JSON.stringify(employees))
    employees = JSON.parse(localStorage.getItem('employees'))
    this.props.submit(employees)
    this.closeBtn.click()
  }

  renderModalName = () => {
    if (this.state.modal === 'edit') return 'Edit Employee'
    else return 'Add Employee'
  }

  render = () => {
    return (
      <div>
        <div
          className="modal fade"
          id="addEmployeeModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="addEmployeeModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header pt-3 pb-2">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  {this.renderModalName()}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.handleCancelBtn}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSave}>
                  <div className="form-row ">
                    <div className="form-group col-md-6">
                      <label className="mb-1">Name</label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Enter"
                        onChange={e => {
                          this.props.change('name', e.target.value)
                        }}
                        value={this.state.employee.name}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label className="mb-1">Gender</label>
                      <select
                        required
                        className="form-control"
                        id="exampleFormControlSelect1"
                        onChange={e => {
                          this.props.change('gender', e.target.value)
                        }}
                        value={this.state.employee.value}
                      >
                        <option>Select</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label className="mb-1">Age</label>
                      <input
                        required
                        type="number"
                        className="form-control"
                        id=""
                        placeholder="Enter"
                        onChange={e => {
                          this.props.change('age', e.target.value)
                        }}
                        value={this.state.employee.age}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label className="mb-1">Designation</label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Enter"
                        onChange={e => {
                          this.props.change('designation', e.target.value)
                        }}
                        value={this.state.employee.designation}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label className="mb-1">Department</label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id=""
                        placeholder="Enter"
                        onChange={e => {
                          this.props.change('department', e.target.value)
                        }}
                        value={this.state.employee.department}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label className="mb-1">Joining Date</label>
                      <input
                        required
                        type="date"
                        className="form-control"
                        id=""
                        placeholder=""
                        onChange={e => {
                          this.props.change('joiningDate', e.target.value)
                        }}
                        value={this.state.employee.joiningDate}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      data-dismiss="modal"
                      ref={input => (this.closeBtn = input)}
                      onClick={this.handleCancelBtn}
                    >
                      Cancel
                    </button>
                    <input type="submit" className="btn btn-success btn-sm" value="Save" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
