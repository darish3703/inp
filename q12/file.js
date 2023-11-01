var fs =require("fs")

function read(){
fs.readFile("file.txt",(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString())
})
}

function open(){
fs.open("file.txt","r+",(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log("file opened")

})
}

function copy(){
    fs.copyFile("file.txt","copy_file.txt",(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log("file copied")
    })
}

function del(){
    fs.unlink("copy_file.txt",(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log("file deleted")
    })
}

function rename(){
    fs.rename("copy_file.txt","new_file.txt",(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log("file renamed")
    })
}

function append(){
    fs.appendFile("file.txt","\n this is royden",(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log("file appended")
    })
}

console.log("Main Menu")
var input = 6//parseInt(prompt("Enter Choise:"))

switch(input){
    case 1: read()
    break;
    case 2: open()
    break;
    case 3: copy()
    break;
    case 4: del()
    break;
    case 5: rename()
    break;
    case 6: append()
    break;
    default : console.log("invalid input")
}