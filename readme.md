# Aurelia-TextComplete

An Aurelia plugin for contextual auto/text completion via the great library [jquery-textcomplete](https://github.com/yuku-t/jquery-textcomplete/).

## Installing

Install using JSPM:

`jspm install github:grofit/aurelia-textcomplete`

then include into aurelia plugins

`aurelia.use.plugin("aurelia-textcomplete");`

## Example

There are some live examples here:
[View Live Examples](https://rawgit.com/grofit/aurelia-textcomplete/master/examples/index.html)

A simple example of using a token to drive text completion, this will specify a token and then a search method:
```
<token-complete id="some-token-complete" token="@" search.bind="getMentions" }"></token-complete >

// Some VM somewhere
export class MyVM
{
    getMentions = (term, callback) => {
        var someArray;
        // do some ajax or query local data to get an array of results
        return someArray;
    }
}
```

A more complicated example with two custom strategies:
```
<text-complete id="some-text-complete" strategies.bind="[ someMentionStrategy, someTagStrategy ]" native-options.bind="{ debounce: 400 }" />
```

The above examples make it look a bit easier than it actually would be in real world situations as often you will have
complex data and will need to do complex ajax searches and put custom templates out there with styling. However these 2 bindings
at least go part of the way to streamline things as much as possible.

There are 2 custom elements available as well as 2 custom attributes, one is geared for premade strategies and one is for easier view setup

### text-complete element/attribute

The available options for this binding are:

* **strategies** - An array taking 1-N strategies which define how the text complete behaves, you can read more below.
* **options** - The options to use for the text completion, based upon the options object in the jquery-textcomplete documentation.

### token-complete element/attribute

The available options for this binding are:

* **token** - The token to use for text completion (i.e '@' or '#'), it can be anything you want really.
* **search** - The search method to use for querying the given term against a data set, this needs to accept a term and callback which should consume the results of elements matching the term.
* **replace** - An optional method to be used for replacing content in the textarea, this is used within the underlying framework so it passes the value into the method and expects a resulting string containing the $1 result of its regex and the value selected from the options returned from the search
* **template** - An optional method to return a template for display within the results from the search, this will be added to the DOM and is passed the value from the search step.
* **options** - The options to use for the text completion, based upon the options object in the jquery-textcomplete documentation.

If you are using the attribute versions they will need to be applied to a `textarea` or something with `contentEditable`.

### Helper methods

As strategies are key to using this system there is a class to assist with making them as well as providing defaults for replacing and templating etc.

There is a base class called `StrategyGenerator` and a default implementation called `DefaultStrategyGenerator` which is injected by default, but feel free to write your own and inject it. *(Contained within aurelia-textcomplete/generator/strategy-generator or default-strategy-generator)*

* **createStrategy** - `function(match, search, replace, index, template, cache, context, idProperty)`

This should be used to create a strategy for use within the `textComplete` binding, you can make your own based upon the jquery-textcomplete documentation if you want.
The only mandatory fields above are the `match`, `search`, `replace`. More information on what each one of these does can be found in the jqueyr-textcomplete documentation.

* **getDefaultReplace** - `function(token)`

If you provide this method a token (see token variable in tokenComplete binding) it will provide you a default replace method to be used within the `tokenComplete` binding, you can override this if you wish.

* **getDefaultMatch** - `function(token)`

If you provide this method with a token it will provide you with a default regex matcher for that token, much like above it can be overridden if you wish.

* **getDefaultTemplate** - `function()`

This provides a default template resolver, which will just spit out whatever result has been retrieved from the search.
