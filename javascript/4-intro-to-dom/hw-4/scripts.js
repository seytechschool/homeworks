// Your JS code is here





function countTags(tag) {
  let tags = document.getElementsByTagName(`${tag}`)
  let total = 0
  for (let i = 0; i < tags.length; i++) {
    total++
  }
  return ` There are ${total} tags of type ${tag} on the page `
}






// Write a function that takes a certain type of tag and counts the number of elements with that tag. The function should return "There a X tags of type y on the page. For example:

// ```
// countTags('p'): 'There are 3 tags of type p on the page'
// ```
