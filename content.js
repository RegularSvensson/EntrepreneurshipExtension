var buzzwords = [{buzzword: "Lean Startup", translation: "Seeing what sticks"}, 
{buzzword: "Business Model", translation: "Wild guess to tell investors"}, 
{buzzword: "Business Model Canvas", translation: "Buzzword Canvas"},
{buzzword: "MVP", translation: "CPP"},
{buzzword: "Minimum Viable Product", translation: "Crappiest Product Possible"}, 
{buzzword: "LTV", translation: "Customer pension bankaccount"},
{buzzword: "Churn Rate", translation: "Time before ship sinks"},
{buzzword: "Conversion Rate", translation: "raptor"},
{buzzword: "Angel Investor", translation: "Wealthy old buggers"},
{buzzword: "Angel", translation: "Wealthy old buggers"},
{buzzword: "VC", translation: "Crazy futurists on LSD"},
{buzzword: "Venture Capital", translation: "Crazy futurists on LSD"},
{buzzword: "Seed Capital", translation: "Lazy futurists on painkillers"},
{buzzword: "Incubator", translation: "Cesspool of wantrepreneurs"},
{buzzword: "Accelerator", translation: "Cesspool of rich wantrepreneurs"},
{buzzword: "Advisory Board", translation: "Circus without a tent"},
{buzzword: "NDA", translation: "Agreement to stay silent or die painfully"},
{buzzword: "ROI", translation: "Return of the King"},
{buzzword: "Valuation", translation: "Egotrip"},
{buzzword: "Traction", translation: "Amount of people in asia paid to inflate numbers"},
{buzzword: "Viral", translation: "Contagious"},
{buzzword: "Stealth Mode", translation: "Never ever ever launching strategy"},
{buzzword: "UX", translation: "User arousal"},
{buzzword: "Freemium", translation: "Pay-me-later-or-else"},
{buzzword: "A/B", translation: "Spray-and-pray"},
{buzzword: "Landing Page", translation: "Spam advertising"},
{buzzword: "Pivot", translation: "Do a hail mary in the other direction"},
{buzzword: "Gamification", translation: "Make kids addicted"},
{buzzword: "Growth", translation: "Swelling"}
]

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