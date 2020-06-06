import React from 'react'
import {Table, Col} from 'react-bootstrap'
import './tableHolder.scss'

function TableHolder() {
    return (
    <Col className="tableHolder" >

        <strong>Active Users</strong>
          <Table striped hover responsive size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th colSpan="3">Name</th>
                <th>City</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <td colSpan="3">Thornton</td>
                <td>Madrid</td>
                <td><span className="statusWrp compelete">Compelete</span></td>
                <td><button className="statusWrp details">Details</button></td>
              </tr>
              <tr>
              <td>3</td>
                <td colSpan="3">Thornton</td>
                <td>Madrid</td>
                <td><span className="statusWrp onHold">On Hold</span></td>
                <td><button className="statusWrp details">Details</button></td>

              </tr>
              <tr>
              <td>3</td>
                <td colSpan="3">Thornton</td>
                <td>Madrid</td>
                <td><span className="statusWrp inProcess">In Process</span></td>
                <td><button className="statusWrp details">Details</button></td>
              </tr>
              <tr>
              <td>4</td>
                <td colSpan="3">Thornton</td>
                <td>Madrid</td>
                <td><span className="statusWrp pending">Pending</span></td>
                <td><button className="statusWrp details">Details</button></td>
              </tr>
            </tbody>
          </Table>
        </Col>
    )
}

export default TableHolder
