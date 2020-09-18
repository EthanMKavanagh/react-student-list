import React, { Component } from 'react';

class StudentList extends Component {

    state = {
        studentList: []
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Username</th>
                    </tr>    
                    </thead>
                    <tbody>
                    {this.state.studentList.map(student=> (
                        <tr key={student}>
                            <td>{student}</td>
                        </tr>
                        ))}
                    </tbody>
                    
                </table>
            </div>
        );
    }
}

export default StudentList;