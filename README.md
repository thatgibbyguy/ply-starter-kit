# ply's meteor starter kit

The **ply meteor starter kit** is my ([thatgibbyguy](https://twitter.com/thatgibbyguy)) base boilerplate and uses the latest version of [meteor.js](https://www.meteor.com/). Included in this boilerplate is:

  - [plygrid](https://plygrid.com/) 
  - Example code throughout
  - Common packages including: `spiderable` `aldeed:autoform` `fortawesome:fontawesome` `aldeed:collection2` `kevohagan:sweetalert` `iron:router` `react-template-helper` `liadrian:ionicons-cdn` `seba:minifiers-autoprefixer` `fourseven:scss` `email` `matteodem:server-session` `reywood:iron-router-ga` `meteorhacks:kadira` `meteorhacks:kadira-profiler` `standard-minifiers` `meteor-base` `mobile-experience` `mongo` `blaze-html-templates` `session` `jquery` `tracker` `logging` `reload` `random` `ejson` `spacebars` `check`

# Using this boilerplate
- First install meteor from the command line.
`$ curl https://install.meteor.com/ | sh`
- Next, simply clone this directory and start your app from the command line: `$ git clone https://github.com/thatgibbyguy/tgg-meteor-boilerplate.git && cd tgg-meteor-boilerplate/app && meteor`
- Finally, keep the [meteor docs](http://docs.meteor.com/#/full/) handy.

## Routing

The ply meteor starter kit utilizes iron-router for routing. I've chosen this router for IE9 support (for those of us that are still stuck with that). If you'd prefer flow-router simply run:

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

### Version
0.4.0

### Development
Want to contribute? Great! Simply fork this repo and create a Pull Request with your added features!

### Roadmap

 - Upgrade to meteor 1.5

### History

- 0.1.0 - Initial Release
- 0.1.1 - Velocity testing integrated, flow-router added
- 0.1.2 - Updated roadmap
- 0.1.3 - Added ecmascript package, fixed error in schema exampl, added example fixture.
- 0.1.4 - Updated to Meteor 1.3, removed flow-router.
- 0.2.* - Utilized React npm package.
- 0.3.0 - Integrated [plygrid](https://plygrid.com/).
- 0.4.0 - Used meteor approved syntax, upgraded to meteor 1.4.3

License
----
MIT

