import Enumerable from "linq";

export function CreateTagStrategy(strategyGenerator, tags) {
    var tagMatch = /(^|\s)#(\w*)$/;

    var tagSearch = function(term, callback){
        var wherePredicate = function(tag) {
            return tag.name.toLowerCase().indexOf(term.toLowerCase()) >= 0;
        };
        var results = Enumerable
            .from(tags)
            .where(wherePredicate)
            .orderBy("$.name")
            .toArray();
        callback(results);
    };

    var tagTemplate = function(value) { return '<div class="tag-entry-name">' + value.name + '</div><p class="tag-entry-description">' + value.description + '</p>'; }
    var tagReplace = function(value) { return "$1#" + value.name; }

    return strategyGenerator.createStrategy(tagMatch, tagSearch, tagReplace, 2, tagTemplate);
}
