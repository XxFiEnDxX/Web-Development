console.log("Program Started!");

setTimeout(() => {
    console.log("hello !"); //will run the => func() after 2sec. 
}, 2000)

//code after setTimeout() call will execute as normally

const id = setInterval(() => {
    console.log(Math.random());
}, 1000);

setTimeout(()=>{
    clearInterval(id);
},5000)