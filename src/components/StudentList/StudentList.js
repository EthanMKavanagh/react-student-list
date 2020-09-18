import React, { Component } from 'react';

class StudentList extends Component {

    state = {
        
    }

    render() {
        return (
            <div>
                <table>
                    <th>
                        <th>Username</th>
                    </th>
                    <td>
                        <tr>{this.state.username}</tr>
                    </td>
                </table>
            </div>
        );
    }
}

export default StudentList;