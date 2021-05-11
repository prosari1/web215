'use strict';

const e = React.createElement;

class GuestBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {guests : []};
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('http://localhost:3000/guest-list')
    .then(response => response.json())
    .then(jsondata => {
      console.log(jsondata);
      this.setState({guests : jsondata});
      }
    );
  }

  itemClicked(data) {
    let that = this;
    fetch('http://localhost:3000/guest/' + data._id, {
      method: 'DELETE'
    }).finally(function() {
      that.getData();
    });
  }

  itemEdit(data) {
    let that = this;
    let editedName = prompt("Guest Name", data.name);
    fetch('http://localhost:3000/guest/' + data._id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name : editedName})
    }).finally(function() {
      that.getData();
    });
  }

  render() {
    console.log(this.state.guests);

    return React.createElement("ul", null, this.state.guests.map( data => (
      React.createElement("li", null, 
        React.createElement('span', {className: 'person-name'}, data.name),
        React.createElement('button', {className: 'button-edit', id: data.name, onClick: this.itemEdit.bind(this, data)}, 'Edit'),
        React.createElement('span', null, ' '),
        React.createElement('button', {className: 'button-delete', id: data.name, onClick: this.itemClicked.bind(this, data)}, 'X')
      )
    )));
  }
}

const domContainer = document.querySelector('#guest-entries-container');
ReactDOM.render(e(GuestBook), domContainer);