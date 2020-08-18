// Your JS code is here

// Write a function that takes a certain type of tag and counts the number of elements with that tag. The function should return "There a X tags of type y on the page. For example:

// ```
// countTags('p'): 'There are 3 tags of type p on the page'

function counter(tag) {
    return `There are ${document.querySelectorAll('tag').length} tags of type ${tag} on the page`;
}

