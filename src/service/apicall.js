import axios from "axios";

export default {
    apiCall: async(url, method, data, headers) => {
        try {
            let response;
            switch (method) {
                case "get":
                     response = await axios.get(url, { headers: headers });
                    return response.data;

                case "post":
                     response = await axios.post(url, { headers: headers, data: data });
                    return response.data;
                case "put":
                     response = await axios.put(url, { headers: headers, data: data });
                    return response.data;
                case "delete": 
                     response = await axios.delete(url, { headers: headers, data: data });
                    return response.data;
                default:
                    break;
            }
        } catch (e) {
            throw e;
        }
    }
}