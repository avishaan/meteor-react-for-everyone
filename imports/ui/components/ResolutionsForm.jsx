import React, {Component} from 'react';


export default class ResolutionsForm extends Component {
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
      <form className='new-resolution' onSubmit={this.addResolution.bind(this)}>
        <input type='text' ref={(ref) => this._resolution = ref} placeholder='finish series' />
      </form>
    );
  }
}
