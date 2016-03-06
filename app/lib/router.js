Router.configure({
  layoutTemplate: 'appLayout',
  loadingTemplate: 'loading',
  trackPageView: true
});

Router.route('/',{
  name: 'slugifyExampleTemplate'
});