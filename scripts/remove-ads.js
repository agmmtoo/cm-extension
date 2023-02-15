console.log("%cAd remover loaded!", "color: lime;font-size: 1.2rem;font-weight: 700;text-transform: uppercase;");

// remove banners with class name 'myResponsiveAd'
const possibleArrayOfClasses = new Array(100).fill(undefined).map((_, idx) => `.myResponsiveAd${idx}`)
const adBanners = document.querySelectorAll('.myResponsiveAd,' + possibleArrayOfClasses.join(','))
adBanners.forEach((e) => e.remove());
console.log("%cremoved ad-banners:", "color: yellow;font-size: 1rem;text-transform: uppercase;", adBanners);

// remove <a> with src ending in .gif
const gifElements = document.querySelectorAll("[src$='.gif'], video");
gifElements.forEach((e) => e.remove());
console.log("%cremoved gifs & vids:", "color: yellow;font-size: 1rem;text-transform: uppercase;", gifElements);

var xpath = "//h3[text()='Sponsored']";
var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
console.log("%cremoved sponsored links:", "color: yellow;font-size: 1rem;text-transform: uppercase;", matchingElement);
matchingElement?.parentElement.remove();

// remove sponser widget
const iframes = document.querySelectorAll('script[src*="https://ad"], script[src^="https://www.google.com"]');
setTimeout(() => iframes.forEach((e) => e.remove()), 500);
console.log("%cremoved iframes:", "color: yellow;font-size: 1rem;text-transform: uppercase;", iframes);