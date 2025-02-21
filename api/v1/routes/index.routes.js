const routesModel = require("./model.routes") ;

module.exports = (app) => {
    const version = "/api/v1" ;

    app.use(version + "/model" , routesModel)  ;
}