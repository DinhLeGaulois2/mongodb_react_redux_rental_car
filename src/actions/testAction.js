import axios from "axios"

import cst from '../constants/testConstant'

import data from '../../server/data/addresses'

const testAction = {
    testAPIRequest: () => {
        return (dispatch) => {
            axios.post("/api/add/customers", {})
                .then(data => {
                    console.log("Result: " + JSON.stringify(data, null, 5))
                }).catch(err => console.log(JSON.stringify(err, null, 5)))

            // axios.get("/api/get/students")
            //     .then(data => {
            //         console.log("Result: " + JSON.stringify(data, null, 5))
            //     })
        }
    }
}

export default testAction