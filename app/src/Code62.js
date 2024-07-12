

// code is written by the aniket kadam
// objets



const Code62=()=>{

    const lang="lang";
    const lib="react";
    const key="key";

    const objet={
        lang,
        lib,
        key,
        getlang(){
            console.log("the libb is ",lib)
        }
    }

    const handleobject=()=>{

        objet.getlang();

    }
    handleobject();
    const condtion=true;
    return(
        <div>
           <h1>objets</h1>
           {
               condtion &&<div>{console.log('good')}</div>
           }
        </div>
    )
}


export default Code62;