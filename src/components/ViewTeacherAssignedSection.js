import React from 'react'

let viewTeacherAssignedSection = (props) => {
    return(
        <tr>
                <td>{props.sectionId}</td>
                <td>{props.section}</td>
                <td>{props.numberOfStudents}</td>
                <td>{props.subject}</td>
                <td>
                  <div className="dropdown dropdown-animated scale-left">
                    <a className="text-gray font-size-18" href="javascript:void(0);" data-toggle="dropdown">
                      <i className="anticon anticon-ellipsis" />
                    </a>
                    <div className="dropdown-menu">                      
                      <button onClick={props.unAssign} className="dropdown-item" type="button">
                        <i className="anticon anticon-delete" />
                        <span className="m-l-10">Un-Assign</span>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
    )
}

export default viewTeacherAssignedSection