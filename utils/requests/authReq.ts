import axios, { Axios } from "axios";


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

    createUser: async (
        email: string,
        _emailVerfied: boolean,
        firstName: string,
        lastName: string,
        username: string,
        _enabled: boolean,
        password: string,
        type: string,
        temporary: boolean,
        customer_no: number,


    ) => {


        let createInfo = {
            email: email,
            emailVerfied: true,
            firstName: firstName,
            lastName: lastName,
            username: username,
            enabled: true,
            credentials: [{
                type: "password",
                value: password,
                temporary: false,
            }
            ],
            attributes: {
                customer_no: customer_no,
            },
        }
        // convert login information to urlencoded form
        const body = xformurlencoder(createInfo);

        let res: {
            status: number;
            data: any;
            code: string
        } = {
            status: 0,
            data: {},
            code: ""
        }
        return await axios
            .post(
                BASE_URL +
                "/auth/admin/realms/" +
                REALM +
                "/users",
                body, //define later
                {
                    headers: {
                    },
                    method: "POST"
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
        let res: { status: number; data: { access_token: string, refresh_token: string } | Record<string, any>, code: string } = {
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
    },


    logOutUser: async (
        refresh_token: { refresh_token: string, }

    ) => {
        let logOut = {
            client_id: "newclient1",
            refresh_token: refresh_token,
        }
        let res: { status: number; data: any, code: string } = {
            status: 0,
            data: {},
            code: ""
        };


        const body= xformurlencoder(logOut)
        return await axios
            .post(
                BASE_URL +
                "/auth/realms/" +
                REALM +
                "/protocol/openid-refresh/token",
                body,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    method: "POST"
                    
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

async function prLude() {
    console.log(await authRequest.getAdminToken())
}

async function myfunc() {
   console.log(await authRequest.logOutUser())
}

myfunc()

// to test run
// ts-node ./authReq.ts