if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome meteor framework seems to be working.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      alert('check console logs')
      if (typeof console !== 'undefined')
        console.log("You are getting a little anxious just working on writing documentation at the moment, got jobs you know. Check again later.");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
