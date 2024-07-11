


// this code is written by the aniket kadam
// generate random password of lenght 10;


const Generatepassword = () => {


    const handlePassword = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = "";
        const l = characters.length;
        for (let i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * l));
        }
        return result;
    }

    const ans=handlePassword();
    console.log("the ans is ",ans);

    return (
        <div>
        </div>
    )
};


export default Generatepassword;