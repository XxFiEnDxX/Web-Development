setTimeout(() => {
    console.log("hello !"); //will run the => func() after 2sec
}, 2000)


const id = setInterval(() => {
    console.log(Math.random());
}, 2000);

// clearInterval(id);