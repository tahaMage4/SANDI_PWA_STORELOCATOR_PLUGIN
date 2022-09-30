const renderContent = (args, callback, instance) => {
    console.log('callback', callback);

    alert("message in plugin");


    return callback.apply(instance, args);
}


const taha = (args, callback, instance) => {
    let test = callback.apply(instance, args);
    // return "Taha Ahmed";
    console.log("chal ja bhae");
    return test;


}


export const config = {
    'Route/test/Component': {
        'member-function': {
            renderContent: renderContent(), taha: taha(),

        }
    }
}

export default config;





