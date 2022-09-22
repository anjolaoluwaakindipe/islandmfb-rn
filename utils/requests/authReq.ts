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
        let res: { status: number; data: { access_token: string } | Record<string, any>, code: string } = {
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


        const body = xformurlencoder(logOut)
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

    },



    // get user details from keycloak 

    getUserKeyCloak: async (token: string) => {




        // response data format
        let res: {
            status: null | number; data: {
                sub: string,
                customer_no: string,
                email_verified: boolean,
                name: string,
                preferred_username: string,
                given_name: string,
                family_name: string,
                email: any
            } | Record<string, any>, code: string
        } = {
            status: null,
            data: {},
            code: ""
        };

        return await axios
            .get(
                BASE_URL +
                "/auth/realms/" +
                REALM +
                "/protocol/openid-connect/userinfo",
                {
                    headers: {
                        "Authorization": "Bearer " + token
                    },
                    method: "GET",
                }

            )


            .then((response) => {
                res.status = response.status;
                res.data = {
                    customer_no: response.data.customer_no,
                    name: response.data.name,
                    email: response.data.email,
                    preferred_username: response.data.preferred_username,
                    given_name: response.data.given_name,
                    family_name: response.data.family_name,
                    sub: response.data.sub,
                    email_verified: response.data.email_verified
                };
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

    //get user details and account details 
    getUserFull: async (
        CustomerNo: string
    ) => {

        // response data format
        let res: {
            status: number; data:

            {
                primaryAccountNo: {
                    _type: string,
                    _number: string
                };
                accountNos: [
                    {
                        _type: string,
                        _number: string
                    },
                    {
                        _type: string,
                        _number: string
                    },
                ] | null;

                customerNo: string | null;
                customerName: string | null;
                accountName: string | null;
                productCode: string | null;
                product: string | null;
                ledgerCode: string | null;
                ledger: string | null;
                ccy: string | null;
                ccyCode: null;
                ccyName: string | null;
                lastMovementDate: string | null;
                availableBalance: number | null;
                clearedBalance: number | null;
                bookBalance: number | null
            }[]



            | Record<string, any>[],
            code: string
        } = {
            status: 0,
            data: [{}],
            code: ""
        };

        return await axios
            .get(
                "http://api.issl.ng:7777/ibank/api/v1/getCustomerAccounts?",
                {
                    params: {
                        CustomerNo: CustomerNo
                    },
                }
            )
            .then((response) => {
                res.status = response.status;
                res.data = response.data;

                return res;
            })
            .catch((error) => {
                res.status = error.response.status;
                res.code = error.code;
                return res;
            });

    },

    //get user details 
    getUserApp: async (
        CustomerNo: string
    ) => {

        // response data format
        let res: { status: number; data: Record<string, any>, code: string } = {
            status: 0,
            data: {},
            code: ""
        };

        return await axios
            .get(
                "http://api.issl.ng:7777/ibank/api/v1/getCustomerDetails?",
                {
                    params: {
                        CustomerNo: CustomerNo
                    },
                }
            )
            .then((response) => {
                res.status = response.status;
                res.data = response.data;

                return res;
            })
            .catch((error) => {
                res.status = error.response.status;
                res.code = error.code;
                return res;
            });

    },
    // get transaction history
    getUserHistory: async (AccountNo: string,
        fromDate: string,
        toDate: string,
        page: number,
        size: number,
    sort: string) => {
        let res: {
            status: number;
            data: {
                content: {
                    id: number,
                    channel: string,
                    postDate: string,
                    narrative: string,
                    reference: string,
                    valueDate: string,
                    ccy: string,
                    ccyName: string | null,
                    amount: number,
                    balanceCF: number,
                    status: string |null ,
                    ownNarrative: string | null,
                    category: string | null,
                    subCategory: string | null,
                    tags: string | null 
                }[]
            } | Record<string, any>[]
            code: string
        } = {
            status: 0,
            data: [{}],
            code: ""
        };
        return await axios
            .get(
                "http://api.issl.ng:7777/ibank/api/v1/getAccountTransactionsPaged?accountno=1000021&fromdate=19500201&todate=20220831&page=0&size=2&sort=descending",
                {
                    params: {
                        AccountNo: AccountNo,
                        fromDate: fromDate,
                        toDate: toDate,
                        page: 0,
                        size: 2,
                        sort: "descending"
                    },
                    method: "GET",
                }
            )
            .then((response) => {
                res.status = response.status;
                res.data = {...response.data};

                return res;
            })
            .catch((error) => {
                res.status = error.response.status;
                res.code = error.code;
                return res;
            });
    }


}


export default authRequest



// async function myfunc() {
//     console.log(await authRequest.getUserFull("6758"));
// }

// myfunc()




// to test run
// ts-node ./authReq.ts