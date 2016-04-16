export const JobItems = new Mongo.Collection('jobs');
JobItems.allow({
    insert: function() { return true; }
});

export const Skills = new Mongo.Collection('skills');
Skills.allow({
    insert: function() { return true; }
});
