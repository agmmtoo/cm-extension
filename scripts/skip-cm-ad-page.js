console.log("%cpage skipper loaded!", "color: lime;font-size: 1.2rem;font-weight: 700;text-transform: uppercase;");
console.log("%cenjoy direct link to file host page.", "color: yellow;font-size: 1rem;text-transform: uppercase;");

// Find all elements with a src attribute that includes "www.thecmpage.com"
const elements = document.querySelectorAll('a[href*="www.thecmpage.com?r="]');


// const stickyPad = document.createElement("div")
// const style="position: sticky; top: 1rem; border: solid 2px blue;"
// stickyPad.setAttribute('style', style)
// document.body.appendChild(stickyPad)
// console.log(stickyPad)

// Loop through each element and modify its src attribute
elements.forEach(function (element) {
    // Get the current value of the src attribute
    const originalSrc = element.getAttribute('href');

    // Modify the src value as needed
    const base64Query = originalSrc.slice(originalSrc.indexOf("r=") + 2);
    const encodedUrl = atob(base64Query);

    //   Set the new value of the src attribute
    element.setAttribute('href', encodedUrl);
    //   stickyPad.appendChild(element.parentElement)
    //   element.parentElement.style.border = "2px solid green";
});
