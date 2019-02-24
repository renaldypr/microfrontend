import React, { Component, Fragment } from 'react';
import { Alert, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    page: 0,
    currentList: [],
    lists: [],
    error: false,
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({lists: res.data, currentList: res.data.slice(0, 10)})
      })
      .catch(err => {
        this.setState({error: true})
      })
  }

  onChangePage = (num) => () => {
    this.setState({currentList: this.state.lists.slice((num-1) * 11, (num*11) - 1)})
  }

  render() {
    const paginationLength = Array.from({ length: 10 }, (v, i) => i);

    return (
      <div className="App">
        <h1>List of Items with Pagination</h1>
        {
          this.state.error &&
          <Alert color="danger">
            API Error!
          </Alert>
        }
        {
          this.state.currentList.length ?
          <Fragment>
            <Table striped responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User ID</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.currentList.map((list) => (
                    <tr>
                      <td>{list.id}</td>
                      <td>{list.userId}</td>
                      <td>{list.title}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            <Pagination>
              {
                paginationLength.map(each => (
                  <PaginationItem>
                    <PaginationLink onClick={this.onChangePage(each+1)}>
                      {each+1}
                    </PaginationLink>
                  </PaginationItem>
                ))
              }
            </Pagination>
          </Fragment>
          : <span>Loading...</span>
        }
      </div>
    );
  }
}

export default App;
