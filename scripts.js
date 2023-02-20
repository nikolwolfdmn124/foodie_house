var allCartElements = ['wallet', 'myorder', 'profile','editprofile']
var allMainElements = ['profile', 'signin','editprofile']


function closeCartAll(){
    for(i=0;i<allCartElements.length; i++){
        element = document.getElementById(allCartElements[i])
        element.style.display = 'none'
    }
}

function closeMainAll(){
    for(i=0;i<allMainElements.length; i++){
        element = document.getElementById(allMainElements[i])
        element.style.display = 'none'
    }
}

function openCartContainer(elementId){
    closeCartAll()
    element = document.getElementById(elementId)
    console.log(element)
    element.style.display = 'initial'
}

function openMainContainer(elementId){
    closeMainAll()
    element = document.getElementById(elementId)
    console.log(element)
    element.style.display = 'initial'
}

var signIn = false
function signin(){
    closeMainAll()
    if(signIn){
        openMainContainer('profile') 
        return true
    }
    openMainContainer('signin')
    
}

function signInOutUser(){
    closeMainAll()
    signIn = !signIn
}

