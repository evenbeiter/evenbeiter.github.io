// Create an iframe and add it to the document
var iframe = document.createElement('iframe');
iframe.style.display = 'none';
document.body.appendChild(iframe);

// Load the other page
iframe.src = '/path-to-other-page.html'; // Replace with the correct path

// Wait for the iframe to load and its content to be ready
iframe.onload = function() {
    // Access the iframe's document
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Now you can query the iframe's document for dynamically created elements
    var elements = iframeDoc.querySelectorAll('.dynamic-element');
    console.log(elements);

    // Example: Log the inner text of each element
    elements.forEach(element => {
        console.log(element.innerText);
    });

    // Optionally, remove the iframe after processing
    document.body.removeChild(iframe);
};