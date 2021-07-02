export const validateInputs = (quoteData, quoteDataStructure) => {

    let errors = {error: false, data: {}};

    for (let keys of quoteDataStructure) {

        if(!quoteData[keys]) {


            errors.error = true;

            errors.data[keys] = "field is required";
        }
        if(keys === 'quotePrice' && quoteData[keys]){
            if(isNaN(quoteData[keys])) {
                errors.error = true;

                errors.data[keys] = "Enter a valid number";
            }


        }
    }

    return {...errors};
}


export const checkDelivery = (shippingChannel) => {

    let result = {start: "", end: ""}
    let dateToday = Date.now();

    let rangeStart = 3 + generateRandom(4);
    let rangeInterval = 2 + generateRandom(2);
    

    if (shippingChannel === 'ocean') {

        rangeStart = 25 + generateRandom(5);
        rangeInterval = 5 + generateRandom(5);
    }

        let newStart = new Date(dateToday + rangeStart * 24 * 60 * 60 * 1000);
        let newEnd = new Date(dateToday + (rangeStart + rangeInterval) * 24 * 60 * 60 * 1000);

        let shipmentDateStart = newStart.toLocaleString('default', { month: 'short' }) + " " + newStart.getDate();
        let shipmentDateEnd = newEnd.toLocaleString('default', { month: 'short' }) + " " + newEnd.getDate();
        

        return {...result, start: shipmentDateStart, end: shipmentDateEnd, rangeStart, rangeInterval}

    } 

    function generateRandom(val) { // min and max included 
        return Math.floor(Math.random() * (val + 1))
    }

    export const formatCurrency = (amount) => {

            let str = (+amount).toString();
        
            return str.split('').reduce((a, b, i) => a + (i && !((str.length - i) % 3) ? ',' : '') + b,
                ''
            )
    }