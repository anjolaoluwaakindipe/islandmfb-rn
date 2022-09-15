import axios from "axios";


import {
    BASE_URL,
    REALM,
    CUS_CLIENT_ID,
    CLIENT_SECRET,
    ADMIN_CLIENT_ID,
    GRANT_TYPE
} from "../lib/envvar"


// function needed to convert javascript object to x-www-form-urlencoded readable form
const xformurlencoder = (bodyFields: Record<string, any>): string => {
    let encodedStr = "";

    for (let field in bodyFields) {
        if (encodedStr) {
            encodedStr += "&";
        }
        encodedStr += field + "=" + bodyFields[field];
    }

    return encodedStr;
};


const authRequest = {

    getAdminToken: async () => {

        //required information to genereate access token
        const adminTokenInfo = {
            client_secret: CLIENT_SECRET,
            client_id: ADMIN_CLIENT_ID,
            grant_type: "client_credentials"
        }
        // convert adminToken info to a urlencoded form
        const body = xformurlencoder(adminTokenInfo);

        // response data format
        let res: { status: number; data: any, code: string } = {
            status: 0,
            data: {},
            code: ""
        };


        return await axios
            .post(
                BASE_URL +
                "/auth/realms/" +
                REALM +
                "/protocol/openid-connect/token",
                body,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    method: "POST",
                }

            )

            .then((response) => {
                res.status = response.status;
                res.data = response.data;
                console.log(res);

                return res;
            })
            .catch((err) => {
                res.status = err.response.status;
                res.data = err.response.data;
                res.code = err.code
                return res
            });

    },


    loginwithEmail: async (
        username: string,
        password: string

    ) => {


        //information needed to login

        let loginInfo = {
            username: username,
            password: password,
            grant_type: "password",
            client_id: CUS_CLIENT_ID
        }


        // convert login information to urlencoded form
        const body = xformurlencoder(loginInfo);

        // response data format
        let res: { status: number; data: {access_token: string, refresh_token:string} | Record<string, any>, code: string } = {
            status: 0,
            data: {},
            code: ""
        };


        return await axios
            .post(
                BASE_URL +
                "/auth/realms/" +
                REALM +
                "/protocol/openid-connect/token",
                body,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            )

            .then((response) => {
                res.status = response.status;
                res.data = response.data;
       
                return res;
            })
            .catch((err) => {
                res.status = err.response.status;
                res.data = err.response.data;
                res.code = err.code
                return res
            });
    }



}


export default authRequest



// async function myfunc() {
//     console.log(await authRequest.loginwithEmail("apptest", "test123"));

// }

// myfunc()

// to test run 
// ts-node ./authReq.ts