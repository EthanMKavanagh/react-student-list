import React, { Component } from 'react';

class StudentList extends Component {

    state = {
        studentList: []
    }

    render() {
        return (
            <div>
                <table>
                    <th>
                        <th>Username</th>
                    </th>
                    <tbody>
                    {this.studentList.map(student=> (
                        <tr key={student}>
                            student
                        </tr>
                        ))}
                    </tbody>
                    
                </table>
            </div>
        );
    }
}

export default StudentList;