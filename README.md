Kitchen Sink
==========================================================================

This application was generated using Yeoman gulp-angular.
This project in particular is meant to test out the mobile capabilies.

==========================================================================

The android project is ignored..you must run this to build the mobile app.

cordova platform add android

==========================================================================

This project is built with npm and bower.  The dependencies aren't checked in.  You'll 
need to pull them down.

npm install

bower install

==========================================================================

To deploy the application to the Android emulator follow the below steps.

cd webapp

gulp build

cd dist

cp -fr * ../www

cordova run android

==========================================================================

WIP - need to add gradle build that will run the "gulp build" in the 
webapp directory, copy the webapp/dist directory into the www directory
and run "cordova run android" (or something similar)

==========================================================================
