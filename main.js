const data = document.querySelector('#data'); //reference

//create elements and render data
function add_data(doc){
  let li = document.createElement('li');
  let name = document.createElement('span');
  let count = document.createElement('div');


  li.setAttribute('data-id',doc.data);
  name.textContent = doc.data().a_name;
  count.textContent = doc.data().b_count;

  li.appendChild(name);
  li.appendChild(count);
  
 data.appendChild(li);
}

//firebase
db.collection('Data').get().then((snapshot) => {     //grab the collections and data
    snapshot.docs.forEach(doc => { //cycle through each document
        add_data(doc); //gets data
    })
});

//added precentages
const precentag1 = document.querySelector('#par1');
const precentag2 = document.querySelector('#par2');

var doc1 = db.collection("Data").doc("a_totalConfirmed");
doc1.get().then(function par(doc)  {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        var confirmed = doc.data().b_count;
    } 

var doc2 = db.collection("Data").doc("b_deaths");
doc2.get().then(function par(doc)  {
    if (doc.exists) {
        console.log("Document data:", doc.data());
         var deaths = doc.data().b_count;
    }

    let li = document.createElement('li'); 
    let name = document.createElement('span');
    let count = document.createElement('div');
    
    li.setAttribute('data-id',doc.data);
    name.textContent = "Death Rate";
    var value =deaths/confirmed*100;
    count.textContent = value.toFixed(2)+"%";

  
    li.appendChild(name);
    li.appendChild(count);
    
   precentag1.appendChild(li);

    
var doc3 = db.collection("Data").doc("c_totalRecovered");
doc3.get().then(function par(doc)  {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        var recover = doc.data().b_count;
    } 

    let li = document.createElement('li'); 
    let name = document.createElement('span');
    let count = document.createElement('div');
    
    li.setAttribute('data-id',doc.data);
    name.textContent = "Recovery Rate";
    var value =recover/confirmed*100;
    count.textContent = value.toFixed(2)+"%";

  
    li.appendChild(name);
    li.appendChild(count);
    
   precentag2.appendChild(li);

});
});
});







