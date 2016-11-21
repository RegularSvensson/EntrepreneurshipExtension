var buzzwords = [{buzzword: "AI", translation: "Computer Overlords"}, 
{buzzword: "intelligence", translation: "dumbness"}, 
{buzzword: "machine", translation: "raptor"}]

for (var i = 0; i < buzzwords.length; i++) {
    console.log(buzzwords[i].buzzword);
    console.log(buzzwords[i].translation);
}

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        for (var k = 0; k < buzzwords.length; k++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;

                var regEx = new RegExp(buzzwords[k].buzzword, "gi");
                var replacedText = text.replace(regEx, buzzwords[k].translation);

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }

            }
        }
    }
}