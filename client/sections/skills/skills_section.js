import {Skills} from '/imports/both/collections.js';
import {actionOnScroll} from '/imports/utils.js';

Template.skills_section.onCreated(function() {
    this.subscribe('skills');
    actionOnScroll(this,'li', 'slide_in');
});

Template.skills_section.onRendered(function() {
});

Template.skills_section.helpers({
    categories() {
        return _.uniq(Skills.find({}).fetch().map(function (skill) {
            return skill.category;
        }));
    },
    getSkills(category) {
        return Skills.find({category: category});
    }
});

Template.skills_section.events({
});

