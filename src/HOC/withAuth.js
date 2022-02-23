import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import authService from "../services/auth.service";

const withoutAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();
        const [verify, setVerify] = useState(false);

        useEffect(() => {
            const token = localStorage.getItem("token");
            authService
                .verifyToken(token)
                .then((data) => {
                    if (!data.verify) {
                        localStorage.removeItem("token");
                        setVerify(false);
                        router.push("/login");
                    }
                })
                .catch((err) => {
                    router.push("/login");
                });
        }, []);
        if (!verify) {
            return <WrappedComponent {...props} />;
        } else {
            return null;
        }
    };
};


export default withoutAuth;