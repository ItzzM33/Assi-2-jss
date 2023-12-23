var siteNameInput= document.getElementById('siteNameInput');
var siteUrlInput= document.getElementById('siteUrlInput');
var tBody=document.getElementById('tbody');
if (localStorage.getItem('allsiteinfo')!==null) {
    var names=JSON.parse(localStorage.getItem('allsiteinfo'))
    
} else {
    var names=[];
}
display()
function pusharray() {
    if (siteUrlInput.value.includes('.')&&siteUrlInput.value.length>3&&siteNameInput.value.length!=0) {var  allSiteInputs={
        siteName : siteNameInput.value,
        siteUrl : siteUrlInput.value
        }
        names.push(allSiteInputs)
        var stringItems = JSON.stringify(names)
        localStorage.setItem('allsiteinfo',stringItems)
        innerHtmlTheNames()
        
    } else {
        alert('please type right URL')
        
    }

}
function deletee () {
    siteNameInput.value=''
    siteUrlInput.value=''
}
function innerHtmlTheNames() {
    for (let i = 0; i < names.length; i++) {
        var x = `<tr>
        <td scope="row">${i}</td>
        <td>${siteNameInput.value}</td>
        <td><a href="https://www.${siteUrlInput.value}" class="button"><button><i class="fa-solid fa-eye"></i> Visit</button></a></td>
        <td><button onclick="deleteItem(${i})" class="dbutton"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>`
    }
    tBody.innerHTML+= x
} 
function display() {
    x='';
    for (let i = 0; i <names.length; i++) {
        x += `<tr>
        <td scope="row">${i}</td>
        <td>${names[i].siteName}</td>
        <td><a href="https://www.${names[i].siteUrl}" class="button"><button><i class="fa-solid fa-eye"></i> Visit</button></a></td>
        <td><button onclick="deleteItem(${i})" class="dbutton"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>`
    tBody.innerHTML= x
    }
}
function deleteItem(index) {
names.splice(index , 1)
    display()
    localStorage.setItem('allsiteinfo' , JSON.stringify(names))
}