

// what is prototype in javascript
//interview questions

const HandlePrototype=()=>{


    const data={
        name:undefined,
        sound:function(){
            console.log(" voice is small")
        }
    }


    const cat=Object.create(data);
    cat.name="cat";

    cat.sound(); // Output: 'Making some noise'

    data.eat=function(){
        console.log("cat eat mouse");
    }


    cat.eat();
    return(
        <div>this is prototype instance</div>
    )
}


export default HandlePrototype;