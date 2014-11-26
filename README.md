Kitchen Sink
==========================================================================

This application was generated using Yeoman gulp-angular.
This project in particular is meant to test out the mobile capabilies.

==========================================================================

The android project is ignored..you must run this to build the mobile app.
Make sure that cordova dependencies such as "ant" are installed.

cordova platform add android

==========================================================================
DEPRECATED:  This is now included in the gradle build.
This project is built with npm and bower.  The dependencies aren't checked in.  You'll 
need to pull them down.

npm install

bower install

==========================================================================
DEPRECATED:  This is now included in the gradle build.
To deploy the application to the Android emulator follow the below steps.

cd webapp

gulp build

cd dist

cp -fr * ../www

cordova run android

==========================================================================

From the root directory.  Make sure that gradle is in the path.

gradle build

==========================================================================
