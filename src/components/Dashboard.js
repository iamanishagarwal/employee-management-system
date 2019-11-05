import React, { Component } from 'react'

export default class Dashboard extends Component {
  state = {
    employees: []
  }

  static getDerivedStateFromProps(props, state) {
    if (
      JSON.stringify(props.employees) !== JSON.stringify(state.employees) &&
      props.employees.length >= state.employees.length
    ) {
      return {
        employees: props.employees
      }
    }
    return null
  }

  componentDidMount = () => {
    let employees = JSON.parse(localStorage.getItem('employees')) || []
    this.setState({ employees })
  }

  handleDeleteBtn = index => {
    let results = JSON.parse(JSON.stringify(this.state.employees))
    results.splice(index, 1)
    console.log(results)
    localStorage.setItem('employees', JSON.stringify(results))
    this.setState({ employees: results })
  }

  renderEmployees = () => {
    let results = JSON.parse(localStorage.getItem('employees')) || []
    console.log(results)
    if (results.length === 0) return null
    else {
      results = results.map((emp, i) => {
        return (
          <tr key={i}>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
            <td>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id={i} checked={emp.available} />
                <label className="custom-control-label" htmlFor={i}></label>
              </div>
            </td>
            <td>
              <button
                type="button"
                className="btn btn-outline-info btn-sm"
                data-toggle="modal"
                data-target="#addEmployeeModal"
                onClick={() => {
                  console.log(i)
                  this.props.editBtnClick(emp, i)
                }}
              >
                <i className="fa fa-edit"></i>&nbsp; Edit
              </button>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => {
                  console.log(i)
                  this.handleDeleteBtn(i)
                }}
              >
                <i className="fa fa-trash"></i>&nbsp; Delete
              </button>
            </td>
          </tr>
        )
      })
      return results
    }
  }

  render = () => {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="question-dashboard">
                <div className="card mt-4 mb-3 mb-md-4">
                  <div className="card-body p-3">
                    <h5 className="text-secondary mb-2">
                      Available: <span className="font-weight-bold ml-1 text-dark">08</span>
                    </h5>
                    <h5 className="text-secondary">
                      Total: <span className="font-weight-bold ml-1 text-dark">50</span>
                    </h5>
                    ​
                    <button
                      className="btn btn-primary mt-4"
                      data-toggle="modal"
                      data-target="#addEmployeeModal"
                      onClick={this.props.addBtnClick}
                    >
                      <i className="fa fa-plus"></i>&nbsp; Add Employee
                    </button>
                  </div>
                </div>
                ​
                <div className="table-responsive mt-3 mt-md-4 mb-2">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Available</th>
                        <th>View Details</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderEmployees()}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
