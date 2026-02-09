import { Meteor } from 'meteor/meteor';
import '../imports/startup/server/apollo';
import '../imports/api/medications/collection';

Meteor.startup(() => {
  // Server startup code
  console.log('Pharmacy Inventory Server Started');
});