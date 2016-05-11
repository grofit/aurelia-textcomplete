import Enumerable from "linq";

export function CreateMentionStrategy(strategyGenerator, mentions) {
    var mentionMatch = /(^|\s)@(\w*)$/;

    var mentionSearch = function(term, callback){
        var wherePredicate = function(mentionEntry) {
            return mentionEntry.fullname.toLowerCase().indexOf(term.toLowerCase()) >= 0;
        };
        var matches = Enumerable
            .from(mentions)
            .where(wherePredicate)
            .orderBy("$.firstname")
            .toArray();
        callback(matches);
    };

    var mentionReplace = function(value){
        return "$1@" + value.mentionTag + " ";
    };

    var mentionTemplate = function(value) {
        return value.fullname;
    };

    return strategyGenerator.createStrategy(mentionMatch, mentionSearch, mentionReplace, 2, mentionTemplate);
}
