console.log("%cAd remover loaded!", "color: green;font-size: 2rem;")

// remove banners with class name 'myResponsiveAd'
const possibleArrayOfClasses = new Array(100).fill(undefined).map((_, idx) => `.myResponsiveAd${idx}`)
const adBanners = document.querySelectorAll('.myResponsiveAd,' + possibleArrayOfClasses.join(','))
adBanners.forEach((e) => e.remove());
console.log("%c removed:", "color: green;font-size: 2rem;", adBanners);
delete adBanners;

// remove <a> with src ending in .gif
const gifElements = document.querySelectorAll("[src$='.gif'], video");
gifElements.forEach((e) => e.remove());
console.log("%c removed:", "color: green;font-size: 2rem;", gifElements);
delete gifElements;

// remove sponser widget
const sponserWidget = document.querySelectorAll('.sponser-widget')