import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import authService from "../services/auth.service";

const withAuthAdmin = (WrappedComponent) => {
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
                        if(!data.isAdmin) {
                            localStorage.removeItem("token");
                            setVerify(false);
                        }
                    } else {
                        router.push("/browser");
                    }
                })
                .catch((err) => {
                    router.push("/browser");
                });
        }, []);
        if (!verify) {
            return <WrappedComponent {...props} />;
        } else {
            return null;
        }
    };
};

export default withAuthAdmin;