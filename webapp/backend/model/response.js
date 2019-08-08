/**
 * A basic model of http response for the API of the server
 */

/**
 * A function generating an empty response 
 */
function Response() {

    this.code = 200;
    this.data = {};
}

/**
 * A function generating a response if the performed action is a success
 * @param {Object} data  the data sent by the response
 */
function successResponse(data) {

    let res = new Response();
    res.code = 200;
    res.data = data;

    return res;

}



// exporting the useful functions
module.exports = {
    successResponse
}