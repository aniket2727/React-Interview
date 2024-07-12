


// this code is written by the aniket kadam
// scope problem


const Code60=()=>{
    
    let q=10;
    function a(){
        console.log("this is a",q)
        function b(){
            console.log("this is b",q)
        }
        b();
        let q=10;
    }

    a()
    return(
        <div>
           <h1>scope of let</h1>
        </div>
    )
};


export default Code60;