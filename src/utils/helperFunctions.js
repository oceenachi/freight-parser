// custom function to validate inputs
export const validateInputs = (quoteData, quoteDataStructure) => {

    let errors = {error: false, data: {}};
    // validate presence of value 
    for (let keys of quoteDataStructure) {

        if(!quoteData[keys]) {


            errors.error = true;

            errors.data[keys] = "field is required";
        }
        // extra number validation
        if(keys === 'quotePrice' && quoteData[keys]){
            if(isNaN(quoteData[keys])) {
                errors.error = true;

                errors.data[keys] = "Enter a valid number";
            }


        }
    }

    return {...errors};
}

// method to generate delivery dates
export const checkDelivery = (shippingChannel) => {

    let result = {start: "", end: ""}
    let dateToday = Date.now();

    // generate start and end range for ocean
    let rangeStart = 25 + generateRandom(5);
    let rangeInterval = 5 + generateRandom(5);
   
    // generate start and end range for air
    if (shippingChannel === 'air') {
        rangeStart = 3 + generateRandom(4);
        rangeInterval = 2 + generateRandom(2);
       
    }

    // set shipment start and end dates

    let newStart = new Date(dateToday + rangeStart * 24 * 60 * 60 * 1000);
    let newEnd = new Date(dateToday + (rangeStart + rangeInterval) * 24 * 60 * 60 * 1000);

    let shipmentDateStart = newStart.toLocaleString('default', { month: 'short' }) + " " + newStart.getDate();
    let shipmentDateEnd = newEnd.toLocaleString('default', { month: 'short' }) + " " + newEnd.getDate();
    

    return {...result, start: shipmentDateStart, end: shipmentDateEnd, rangeStart, rangeInterval}

    } 

    // random number generator
    function generateRandom(val) {  
        return Math.floor(Math.random() * (val + 1))
    }

    // currency format function
    export const formatCurrency = (amount) => {

            let str = (+amount).toString();
        
            return str.split('').reduce((a, b, i) => a + (i && !((str.length - i) % 3) ? ',' : '') + b,
                ''
            )
    }