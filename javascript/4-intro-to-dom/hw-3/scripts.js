// Your JS code is here
var bodyPage = document.querySelector('body');
var arrayList = [
    {title: 'The Splendid and the Vile', author: 'Erik Larson', alreadyRead: true, bookCoverImage: 'https://bloximages.chicago2.vip.townnews.com/emissourian.com/content/tncms/assets/v3/editorial/1/d2/1d2cb4f2-6e00-11ea-a575-1f7e5432d9e7/5e7a563006b7b.image.jpg?resize=400%2C608', bookCoverURL: 'https://www.amazon.com/Splendid-Vile-Churchill-Family-Defiance/dp/0385348711/ref=sr_1_1?dchild=1&keywords=The+Splendid+and+the+Vile+by+Erik+Larson&qid=1597907889&sr=8-1'},
    {title: 'All Adults Here', author: 'Emma Straub', alreadyRead: false, bookCoverImage: 'https://media1.popsugar-assets.com/files/thumbor/BUUaOCBBPDcT3aD1a5ePrPWrcKI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/03/24/850/n/43611095/f40074654385e700_91ZRZ6Y6ycL/i/All-Adults-Here-by-Emma-Straub.jpg', bookCoverURL: 'https://www.amazon.com/All-Adults-Here-Emma-Straub/dp/1594634696/ref=asc_df_1594634696/?tag=bingshoppinga-20&linkCode=df0&hvadid=&hvpos=&hvnetw=o&hvrand=&hvpone=&hvptwo=&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=&hvtargid=pla-4584413744219012&psc=1'},
    {title: 'Malorie - Bird Box', author: 'Josh Malerman', alreadyRead: true, bookCoverImage: 'https://larryfire.files.wordpress.com/2020/05/9780593156858.jpg', bookCoverURL: 'https://www.amazon.com/Malorie-Bird-Novel-Josh-Malerman/dp/0593156854/ref=sr_1_2?dchild=1&keywords=malorie+Josh+Malerman&qid=1597908010&sr=8-2'},
    {title: 'Death in her hands', author: 'Ottessa Moshfegh', alreadyRead: false, bookCoverImage: 'https://th.bing.com/th/id/OIP.uydYIn5HWtqFCfFnCBf7-wAAAA?pid=Api&rs=1', bookCoverURL: 'https://www.amazon.com/Death-Her-Hands-Ottessa-Moshfegh/dp/1984879359/ref=sr_1_2?dchild=1&keywords=Death+in+her+hands&qid=1597908084&sr=8-2'}
]

for(var i=0;i<arrayList.length;i++){
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class','newdivs');
    newDiv.style.minHeight = '300px';
    newDiv.style.width = '180px';
    newDiv.style.display = 'inline-block';
    newDiv.style.textAlign = 'center';
    newDiv.style.margin = '0 20px 20px 0';
    newDiv.style.border = '1px solid lightgray';

    var newImgs = document.createElement('img');
    newImgs.src = arrayList[i].bookCoverImage;
    newImgs.style.height = '200px';
    newImgs.style.width = '100%';

    var newPar1 = document.createElement('p');
    newPar1.textContent = arrayList[i].title + " by " + arrayList[i].author;

    var newPar2 = document.createElement('p');
    if(arrayList[i].alreadyRead === true){
        newPar2.textContent = "You have read this book already";
        newPar2.style.backgroundColor = 'lightgreen';
    }
    else {
        newPar2.textContent = "You haven't read this book yet";
        newPar2.style.backgroundColor = 'crimson';
        newPar2.style.color = 'white';
    }

    var newALink = document.createElement('a');
    newALink.href = arrayList[i].bookCoverURL;
    newALink.textContent = 'Click Here to buy';
    newALink.target = '_blank';

    newDiv.appendChild(newImgs);
    newDiv.appendChild(newPar1);
    newDiv.appendChild(newPar2);
    newDiv.appendChild(newALink);
    bodyPage.appendChild(newDiv);
}