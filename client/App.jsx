import React from 'react';
import { render } from 'react-dom'

export default class App extends React.Component {
  addResolution(event) {
    event.preventDefault();
    var text = this._resolution.value.trim();
    console.log(text);

    Resolutions.insert({
      'text': text,
      'complete': false,
      'createdAt': new Date()
    });

    // reset string
    this._resolution.value = "";
  }

  render() {
    return (
      <div>
        <h1>My Resolutions</h1>
        <form className='new-resolution' onSubmit={this.addResolution.bind(this)}>
          <input type='text' ref={(ref) => this._resolution = ref} placeholder='finish series' />
        </form>
      </div>
    );
  }
}
