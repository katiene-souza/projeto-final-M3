import *as yup from "yup";

export const makeCreateLoginSchema = () => {
    return yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required()
    });
};

