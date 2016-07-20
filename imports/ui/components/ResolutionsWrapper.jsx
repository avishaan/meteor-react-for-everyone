import React from 'react';
import { render } from 'react-dom'
import { createContainer } from 'meteor/react-meteor-data';
import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

export default class ResolutionsWrapper extends React.Component {

  render() {
    let res = this.props.resolutions;
    if (res.length < 1) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <h1>My Resolutions</h1>
          <ResolutionsForm />
            <ul>
              <ResolutionSingle resolution={res[0]} />
            </ul>
          </div>
      );
    }
  }
}

export default createContainer(() => {
  return {
    'resolutions': Resolutions.find().fetch()
  };
}, ResolutionsWrapper);
