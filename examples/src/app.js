import {inject} from "aurelia-framework";
import {StrategyGenerator} from "aurelia-textcomplete";
import Enumerable from "linq";

import {Person} from "./models/person";
import {Tag} from "./models/tag";
import {CreateMentionStrategy} from "./strats/mention-strategy";
import {CreateTagStrategy} from "./strats/tag-strategy";

@inject(StrategyGenerator)
export class App
{
    constructor(strategyGenerator) {
        this.newMention = new Person();
        this.mentions = this.generateGoTCast();

        this.newTag = new Tag();
        this.tags = this.generateLanguages();

        this.mentionStrategy = CreateMentionStrategy(strategyGenerator, this.mentions);
        this.tagStrategy = CreateTagStrategy(strategyGenerator, this.tags);
    }

    generateGoTCast() {
        return [
            new Person("Stannis", "Baratheon"),
            new Person("Robert", "Baratheon"),
            new Person("Eddard", "Stark"),
            new Person("Rob", "Stark"),
            new Person("Arya", "Stark"),
            new Person("Daenerys", "Targaryen"),
            new Person("Joffrey", "Baratheon"),
            new Person("Roose", "Bolton"),
            new Person("Ramsey", "Bolton"),
            new Person("Balon", "Greyjoy"),
            new Person("Theon", "Greyjoy"),
            new Person("Cersei", "Lannister"),
            new Person("Jamie", "Lannister")
        ];
    }

    generateLanguages() {
        return [
            new Tag("actionscript", "A language used in Flash"),
            new Tag("c#", "A language used on the .net platform"),
            new Tag("c++", "An object oriented language derived from C"),
            new Tag("clojure", "A language with functional elements that targets jvm, clr or js"),
            new Tag("go", "A new language with channels for concurrency"),
            new Tag("java", "A cross platform language with ownership issues"),
            new Tag("javascript", "A bit like Marmite"),
            new Tag("python", "Indents as far as the eye can see"),
            new Tag("ruby", "A dynamic cross platform language"),
            new Tag("typescript", "A compile2js language")
        ]
    }
    
    deleteMention = (mentionIndex) => {
        this.mentions.splice(mentionIndex, 1);
    };

    addMention = () => {
        var savedMention = new Person(this.newMention.firstname, this.newMention.surname);
        this.mentions.push(savedMention);
        this.newMention.firstname = "";
        this.newMention.surname = "";
    };

    deleteTag = (tagIndex) => {
        this.tags.splice(tagIndex, 1);
    };

    addTag = () => {
        var savedTag = new Tag(this.newTag.name, this.newTag.description);
        this.tags.push(savedTag);
        this.newTag.name = "";
        this.newTag.description = "";
    };

    tagSearch = (term, callback) => {
        var wherePredicate = function(tag) {
            return tag.name.toLowerCase().indexOf(term.toLowerCase()) >= 0;
        };
        var results = Enumerable.from(this.tags)
            .where(wherePredicate)
            .select("$.name")
            .orderBy("$")
            .toArray();

        callback(results);
    };

    complexTagSearch = (term, callback) => {
        var wherePredicate = function(tag) {
            return tag.name.toLowerCase().indexOf(term.toLowerCase()) >= 0;
        };
        var results = Enumerable.from(this.tags)
            .where(wherePredicate)
            .orderBy("$.name")
            .toArray();

        callback(results);
    };

    tagTemplate = function(value) { return '<div class="tag-entry-name">' + value.name + '</div><p class="tag-entry-description">' + value.description + '</p>'; }
    tagReplace = function(value) { return "$1#" + value.name; }

}