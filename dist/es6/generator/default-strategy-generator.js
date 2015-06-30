import {StrategyGenerator} from "strategy-generator"

export class DefaultStrategyGenerator extends StrategyGenerator
{
    createStrategy(match, search, replace, index, template, cache, context, idProperty)
    {
        var strategy = {
            match: match,
            search: search,
            replace: replace
        };

        if(index) { strategy.index = index; }
        if(template) { strategy.template = template; }
        if(cache) { strategy.cache = cache; }
        if(context) { strategy.context = context; }
        if(idProperty) { strategy.idProperty = idProperty; }

        return strategy;
    }

    getDefaultReplace(token) { return function(value) { return "$1" + token + value + " "; } }

    getDefaultMatch(token) { return new RegExp("(^|\\s)" + token + "(\\w*)$"); }

    getDefaultTemplate() { return function(value) { return value; }}
}