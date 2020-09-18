import React, { Component } from 'react';

class MoreDetails extends Component {
    render() {
        console.log('yolo',this.props.student.github_name);
        console.log('this is the function in moreDetails', this.props.handleDetails);
        return (
            <td className="tableData">
                <button onClick={() => this.props.handleDetails(this.props.student.github_name)}>More Details</button>
            </td>
        )
    }
}

export default MoreDetails;