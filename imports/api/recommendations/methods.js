Meteor.methods({
  addResolution(resolution) {
    console.log('meteor method called');
    Resolutions.insert({
      'text': resolution,
      'complete': false,
      'createdAt': new Date()
    });
  }
});
