let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)
let adInputDOM = document.querySelector('#isim')
let soyadInputDom = document.querySelector('#soyisim')
let numaraInputDom = document.querySelector('#numara')
let emailDOM = document.querySelector('#email')
let optionDOM = document.querySelector('#kurs')
let haftaSonuSabahDOM = document.querySelector('#haftaSonuSabah')
let haftaSonuOglenDOM = document.querySelector('#haftaSonuOglen')
let haftaIciSabahDOM = document.querySelector('#haftaIciSabah')
let haftaIciAksamDOM = document.querySelector('#haftaIciAksam')

function checkForm() {
    alert("Form temizlenecek");
    document.querySelector("#userForm").reset();
}

function formSubmit(event) {
    event.preventDefault()
    let haftaSonuSabahCheck = document.querySelector('#haftaSonuSabah').checked
    let haftaSonuOglenCheck = document.querySelector('#haftaSonuOglen').checked
    let haftaIciSabahCheck = document.querySelector('#haftaIciSabah').checked
    let haftaIciAksamCheck = document.querySelector('#haftaIciAksam').checked

    if (adInputDOM.value == "" || soyadInputDom.value == "" || numaraInputDom.value == "" || emailDOM.value == "") {
        alert("Lütfen tüm eksik bölümleri doldurun")
    }
    else {



        let items = [adInputDOM.value, soyadInputDom.value, numaraInputDom.value, emailDOM.value, optionDOM.value,

        haftaSonuSabahDOM.name, haftaSonuSabahCheck, haftaSonuOglenDOM.name, haftaSonuOglenCheck,
        haftaIciSabahDOM.name, haftaIciSabahCheck, haftaIciAksamDOM.name, haftaIciAksamCheck]

        console.log(items)
        alert('Bilgileriniz kaydedildi en kısa süre içerisinde size ulaşılacaktır.')
    }
}