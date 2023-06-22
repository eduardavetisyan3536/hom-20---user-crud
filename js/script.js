let inputs = document.querySelectorAll('.inputs')
let addData = document.querySelector('.add-data')
let container = document.querySelector('.container')
container

let info;
let root = document.querySelector('.root')

function createTable () {
    info = document.createElement('div')
    info.classList.add('information')
    info.innerHTML = `      
    <table border="1" class="tbody-append">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Adress</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
    </table>`
    container.append(info)
}
createTable()
let tbodyAppend = document.querySelector('.tbody-append')
addData.addEventListener('click', () => {
    let name;
    let age;
    let adress;
    let email;
    info.style.display = 'block'
    inputs.forEach((item) => {
        if(item.placeholder == 'Name'){
            name = item.value
        }
        if(item.placeholder == 'Age'){
            age = item.value
        }
        if(item.placeholder == 'Adress'){
            adress = item.value
        }
        if(item.placeholder == 'Email'){
            email = item.value
        }
        item.value = ''
    })

    let docelems = document.createElement('tbody')
    docelems.innerHTML = `
    <tr>
    <td>${name}</td>
    <td>${age}</td>
    <td>${adress}</td>
    <td>${email}</td>
    <td><button class="delete">Delete</button> <button class="edit">Edit</button></td>
  </tr>`
  tbodyAppend.append(docelems)
  let deleteItem = document.querySelectorAll('.delete')
  deleteItem.forEach(item => {
      item.addEventListener('click', (e) => {
          let some = e.target.parentElement.parentElement.parentElement
          some.remove()
          if(tbodyAppend.childNodes.length == 3){
            info.style.display = 'none'
          }
    })
  })


  function edits () {
      let edit = document.querySelectorAll('.edit')
      edit.forEach(item => {
        item.addEventListener('click', (e) => {
            console.log(e);
            inputs.forEach((item) => {
                item.addEventListener('input', (e) => {
                    name = e.target.value
                })
                if(item.placeholder == 'Name'){
                    item.value = name 
                }
                if(item.placeholder == 'Age'){
                    item.value = age
                }
                if(item.placeholder == 'Adress'){
                    item.value = adress
                }
                if(item.placeholder == 'Email'){
                    item.value = email
                }
            })
      })
    })
  }
  edits()
})












