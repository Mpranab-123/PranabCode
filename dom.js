
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title='Pranab Mishra Item List';
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textcontent='Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
// var ht=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// console.log(document.ht);
// //ht.textContent='Hello';
// //ht.innerText='Goodbye';
// console.log(ht.innerText);
// ht.innerHTML='<h3>Hello</h3>';
// header.style.borderBottom='solid 3px #000';
//var main=document.getElementsByClassName('title');
//console.log(main);
//console.log(main[0]);
//main[0].style.fontWeight='bold';
//main[0].style.color='green';

//get element by class name:
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[2].style.backgroundColor= 'green';
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
//      items[i].style.color='red'
// }

// //GET ELEMENTS BY TAG NAME
// var lists=document.getElementsByTagName('li');
// console.log(lists);
// console.log(lists[2]);
// console.log(lists[3]);
// //lists[2].style.backgroundColor= 'green';

// for(var i=0;i<lists.length;i++){
//    lists[i].style.fontWeight='bold';
//    lists[i].style.color='red'
//    lists[i].style.backgroundColor='yellow';
// }



//QUERYSELECTOR//
// var header=document.querySelector('#main-header');
// header.getElementsByClassName.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value='Hello World';

// var submit= document.querySelector('input[type="Submit"]');
// submit.value="SEND";

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// //2nd item background color green

// // var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.color ='red';
// // secondItem.style.backgroundColor ='green';

// //third item invisible

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility='hidden';

// //QUERRY SELECTOR ALL//
// var secondItem=document.querySelector('li:nth-child(2)');
// secondItem.style.color ='green';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++){
//    odd[i].style.backgroundColor='green'
// }

//Travesing the DOM//
var itemList=document.querySelector('#items');
//parentElement
console.log(itemList.parentElement);

//lastelementchild
console.log(itemList.lastElementChild);

//lastchild
console.log(itemList.lastChild);

// firstelementchild
console.log(itemList.firstElementChild);

// firstchild
console.log(itemList.firstChild);
// nextsibling
console.log(itemList.nextSibling);
// nextelementsibling
console.log(itemList.nextElementSibling);
// previoussibling
console.log(itemList.previousSibling);
// previouselementsibling
console.log(itemList.previousElementSibling);
// createelement

//  create a div
var newDiv=document.createElement('div')

// Add class
newDiv.className='Hello';

// Add ID
newDiv.id='hello1'

// setAttribute
newDiv.setAttribute('title','Hello Div');
// createtesxtnode
var newDivText=document.createTextNode('Hello World');
// appendchild
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize='30px';
//Now go head and add Hello World before Item Lister
container.insertBefore(newDiv, h1);

// Now go head and add Hello World before Item 1

var parentnode= document.getElementById('items');
console.log(parentnode.innerHTML);

parentnode.innerHTML= '<li>Hello World</li>'+ parentnode.innerHTML;
console.log(parentnode.innerHTML);







