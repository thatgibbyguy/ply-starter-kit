# TGG Meteor Boilerplate

The TGG Meteor Boilerplate is my ([thatgibbyguy](https://twitter.com/thatgibbyguy)) base boilerplate and uses the latest version of [meteor.js](https://www.meteor.com/). Included in this boilerplate is:

  - [Kube v4.02](http://k1.imperavi.com/) 
  - Example code throughout
  - Common packages including: `spiderable` `aldeed:autoform` `fortawesome:fontawesome` `aldeed:collection2` `kevohagan:sweetalert` `iron:router` `react-template-helper` `liadrian:ionicons-cdn` `seba:minifiers-autoprefixer` `fourseven:scss@=3.2.0` `less` `email` `matteodem:server-session` `reywood:iron-router-ga` `meteorhacks:kadira` `meteorhacks:kadira-profiler` `standard-minifiers` `meteor-base` `mobile-experience` `mongo` `blaze-html-templates` `session` `jquery` `tracker` `logging` `reload` `random` `ejson` `spacebars` `check`

# Using this boilerplate
- First install meteor from the command line.
`$ curl https://install.meteor.com/ | sh`
- Next, simply clone this directory and start your app from the command line: `$ git clone https://github.com/thatgibbyguy/tgg-meteor-boilerplate.git && cd tgg-meteor-boilerplate/app && meteor`
- Finally, keep the [meteor docs](http://docs.meteor.com/#/full/) handy.

## Routing

The TGG Meteor Boilerplate utilizes iron-router for routing. I've chosen this router for IE9 support (for those of us that are still stuck with that). If you'd prefer flow-router simply run:

```
$ meteor remove iron-router && meteor add kadira:flow-router
```

After this you will need to modify `/lib/router.js` to match kadira:flow-router syntax.

## Using React

Using React.js will work just as it does normally, but will will append it to the DOM using `react-template-helper`. An example of how this works:

Your template helper `your-template.js`  
``` js
import YourReactComponent from `../path-to-your-component.jsx`;

Template.yourTemplate.helpers({
  YourReactComponentHelper: () => YourReactComponent
});
```

Your template `your-template.html`  
``` html
<template name="yourTemplate">
  {{> React component=YourReactComponentHelper}}
</template>
```

## Testing

Velocity is integrated with this boilerplate by default. This means that running `meteor` will load velocity and run tests automatically. Sample tests are available at `/app/tests/cucumber/`.

To run your app without testing, simply run 

```
$ meteor --production run
```

### Version
0.2.0

### Development
Want to contribute? Great! Simply fork this repo and create a Pull Request with your added features!

### Roadmap

 - Integrate Webpack
 - Introduce Vue.js & React.js
 - Switch to an Open Source CSS framework (open for suggestions)
 - Convert boilerplate into a meteor package
 - Switch to scss for all css
 - PostCSS integration

### History

- 0.1.0 - Initial Release
- 0.1.1 - Velocity testing integrated, flow-router added
- 0.1.2 - Updated roadmap
- 0.1.3 - Added ecmascript package, fixed error in schema exampl, added example fixture.
- 0.1.4 - Updated to Meteor 1.3, removed flow-router.

License
----
MIT

