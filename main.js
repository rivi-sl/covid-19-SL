const data = document.querySelector('#data'); //reference

//create elements and render data
function add_data(doc){
  let li = document.createElement('li');
  let name = document.createElement('span');
  let count = document.createElement('div');


  li.setAttribute('data-id',doc.id);
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