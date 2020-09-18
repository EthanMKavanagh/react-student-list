import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm';
import StudentList from '../StudentList/StudentList';

class App extends Component {
  state = {
    studentList: [],
  };

  componentDidMount() {
    this.getStudents();
  }

  getStudents = () => {
    axios({
      method: 'GET',
      url: '/students'
    }).then(response => {
      console.log('in /students GET', response.data);
      this.setState({
        studentList: response.data
      })
    }).catch(error => {
      console.log('we have an error', error);
    });
  }

  handleDetails(student) {
    console.log(student);
    axios({
      method: 'GET',
      url: 'https://api.github.com/users/' + student,
      params: {
        access_token: '913f20e25e454b699cbf7b4d5f3ae7fd516cafc4'
      }
    }).then(response => {
      console.log('response from github', response);
    }).catch(error => {
      console.log(error);
    })
  }
  
  // This function is called by the StudentForm when the submit button is pressed
  addStudent = (newStudent) => {
    console.log(newStudent);
    // POST your data here
    axios({
      method: 'POST',
      url: '/students',
      data: newStudent
    })
    .then((response) => {
      this.getStudents();
    }).catch((err) => {
      alert(err)
    })
  }

  render() {
    console.log('this is the prop', this.state.studentList);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">GitHub Student List</h1>
        </header>
        <br/>
        <StudentForm addStudent={this.addStudent}/>

        <p>Student list goes here.</p>
        <StudentList studentList={this.state.studentList} handleDetails={this.handleDetails}/>
      </div>
    );
  }
}

export default App;