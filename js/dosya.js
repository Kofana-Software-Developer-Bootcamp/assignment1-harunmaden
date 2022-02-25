let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)
let adInputDOM = document.querySelector('#isim')
let soyadInputDom = document.querySelector('#soyisim')
let numaraInputDom = document.querySelector('#numara')
let optionDOM = document.querySelector('#kurs')
let haftaSonuSabahDOM = document.querySelector('#haftaSonuSabah')
let haftaSonuOglenDOM = document.querySelector('#haftaSonuOglen')
let haftaIciSabahDOM = document.querySelector('#haftaIciSabah')
let haftaIciAksamDOM = document.querySelector('#haftaIciAksam')



function formSubmit(event){
    event.preventDefault()
    let haftaSonuSabahCheck = document.querySelector('#haftaSonuSabah').checked
    let haftaSonuOglenCheck = document.querySelector('#haftaSonuOglen').checked
    let haftaIciSabahCheck = document.querySelector('#haftaIciSabah').checked
    let haftaIciAksamCheck = document.querySelector('#haftaIciAksam').checked



    let items = [adInputDOM.value, soyadInputDom.value, numaraInputDom.value, optionDOM.value, 
        
        haftaSonuSabahDOM.name,haftaSonuSabahCheck, haftaSonuOglenDOM.name, haftaSonuOglenCheck,
        haftaIciSabahDOM.name, haftaIciSabahCheck, haftaIciAksamDOM.name, haftaIciAksamCheck]



console.log(items)
//alert('Bilgileriniz kaydedildi en kısa süre içerisinde size ulaşılacaktır.')
}