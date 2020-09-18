import React, { Component } from 'react';
import MoreDetails from "../MoreDetails/MoreDetails";

class StudentList extends Component {
    render(){
        console.log('this is the function', this.props.handleDetails);
        return (
            <div>
                <h2>Saved Github Users</h2>
                <table className="ourTable">                    
                    <tbody>
                    <tr><td className="headOfTable">Username</td><td className="headOfTable"></td></tr>
                    {this.props.studentList.map(student => 
                    <tr key={student.id}>
                        <td className="tableData">{student.github_name}</td>
                        <MoreDetails student={student} handleDetails={this.props.handleDetails}/>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentList;