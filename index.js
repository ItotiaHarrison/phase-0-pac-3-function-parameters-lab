function introduction(name){
    return (`Hi, my name is ${name}.`)
}


function introductionWithLanguage(name, language){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

function introductionWithLanguageOptional(firstName = "user", language = "JavaScript"){
    return (`Hi, my name is ${firstName} and I am learning to program in ${language}.`)
}
console.log(introductionWithLanguageOptional("Gracie", "JavaScript"));