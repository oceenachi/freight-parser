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
            if(quoteData[keys] <= 0){
                errors.error = true;
                errors.data[keys] = "Enter a positive number";
            }
            if(isNaN(quoteData[keys])) {
                errors.error = true;

                errors.data[keys] = "Enter a valid number";
            }

        }
    }

    return {...errors};
}

// method to generate delivery dates
export const checkDelivery = (shippingChannel, channelData) => {

    let channelDetails = setChannelInfo(channelData);

    let result = {start: "", end: ""}
    let dateToday = Date.now();

    // generate defined intervals
    let channelRange =  channelDetails[shippingChannel];

    let rangeStart = channelRange[1];
    let rangeEnd = channelRange[0];


    // set shipment start and end dates
    let newStart = new Date(dateToday + rangeStart * 24 * 60 * 60 * 1000);
    let newEnd = new Date(dateToday + rangeEnd  * 24 * 60 * 60 * 1000);

    let shipmentDateStart = newStart.toLocaleString('default', { month: 'short' }) + " " + newStart.getDate();
    let shipmentDateEnd = newEnd.toLocaleString('default', { month: 'short' }) + " " + newEnd.getDate();

    return {...result, start: shipmentDateStart, end: shipmentDateEnd, rangeStart, rangeEnd}

    } 


    // currency format function
    export const formatCurrency = (amount) => {

            let str = (+amount).toString();
        
            return str.split('').reduce((a, b, i) => a + (i && !((str.length - i) % 3) ? ',' : '') + b,
                ''
            )
    }


    export const setChannelInfo =(channelData)=>{
        let resultObj = {};
        for(let i=0; i < channelData.length; i++){
            let newArr = [];
            newArr.push(channelData[i].maxDays);
            newArr.push(channelData[i].minDays);

            resultObj[channelData[i].channel] = newArr;
        }
        return resultObj;
    }