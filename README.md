# TGG Meteor Boilerplate

The TGG Meteor Boilerplate is my ([thatgibbyguy](https://twitter.com/thatgibbyguy)) base boilerplate and uses the latest version of [meteor.js](https://www.meteor.com/). Included in this boilerplate is:

  - [Kube v4.02](http://k1.imperavi.com/) 
  - Example code throughout
  - Common packages including: `spiderable` `aldeed:autoform` `fortawesome:fontawesome` `aldeed:collection2` `kevohagan:sweetalert` `iron:router` `kadira:flow-router` `less` `email` `matteodem:server-session` `reywood:iron-router-ga` `meteorhacks:kadira` `meteorhacks:kadira-profiler` `standard-minifiers` `meteor-base` `mobile-experience` `mongo` `blaze-html-templates` `session` `jquery` `tracker` `logging` `reload` `random` `ejson` `spacebars` `check`

# Using this boilerplate
- First install meteor from the command line.
`$ curl https://install.meteor.com/ | sh`
- Next, simply clone this directory and start your app from the command line: `$ git clone https://github.com/thatgibbyguy/tgg-meteor-boilerplate.git && cd tgg-meteor-boilerplate/app && meteor`
- Finally, keep the [meteor docs](http://docs.meteor.com/#/full/) handy.

## Routing

The TFF Meteor Boilerplate includes flow-router and iron-router. Whichever your choice is, you should remove the redundant router by running `$ meteor remove ` followed by the package name you're removing.

## Testing

Velocity is integrated with this boilerplate by default. This means that running `meteor` will load velocity and run tests automatically. Sample tests are available at `/app/tests/cucumber/`.

To run your app without testing, simply run `$ meteor --production run`.

### Version
0.1.2

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

License
----
MIT

