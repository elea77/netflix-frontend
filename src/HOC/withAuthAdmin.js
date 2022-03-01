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
                        router.push("/login");
                    } else {
                        if(!data.isAdmin) {
                            setVerify(false);
                            router.push("/browse");
                        }
                    }
                })
                .catch((err) => {
                    router.push("/browse");
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