import { Meteor } from 'meteor/meteor';
import {JobItems, Skills} from '/imports/both/collections.js';

Meteor.publish( 'jobs', function() {
    return JobItems.find({});
});


Meteor.publish('skills', function() {
    return Skills.find({});
});
