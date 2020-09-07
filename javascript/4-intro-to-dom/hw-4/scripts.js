// Your JS code is here
function countPtags(tag) {
    var pTags = document.querySelectorAll('p');
    console.log('Total number of ' + tag + ' tags on this page' + ' is ' + pTags.length);
              }
                            
    countPtags('p');