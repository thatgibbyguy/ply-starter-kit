Router.configure({
	layoutTemplate: 'appLayout',
	loadingTemplate: 'loading',
	trackPageView: true
});

Router.route('/',{
	name: 'home',
	waitOn: function() { 
		// return Meteor.subscribe('collectionName'); 
	}
});