let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)
let adInputDOM = document.querySelector('#isim')
let soyadInputDom = document.querySelector('#soyisim')
let numaraInputDom = document.querySelector('#numara')



function formSubmit(event){
    event.preventDefault()

    let items = [adInputDOM.value, soyadInputDom.value, numaraInputDom.value]
console.log(items)

}