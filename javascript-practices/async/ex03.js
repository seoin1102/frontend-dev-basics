const fetch = require('./ex02');

const ex03 = async function(param){
    try{
        const result = await fetch(param);
        console.log(result);
    }catch(err){
        console.error(err);
    }
}

ex03("param-data")
ex03("param-error")

console.log("wait....")