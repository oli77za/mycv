import {JobItems} from '/imports/both/collections.js';
import {actionOnScroll} from '/imports/utils.js';

Template.timeline.onCreated(function() {
    this.subscribe('jobs');
    actionOnScroll(this,'.timeline_summary', 'slide_in');
});

Template.timeline.onRendered(function() {
    var self = this;
});

Template.timeline.helpers({
    isEvenRow: function(index) {
        return index %2 == 0;
    },
    items: function () {
        return JobItems.find({});
    }
});



