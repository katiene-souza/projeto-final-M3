import * as yup from "yup";

export const makeCreateUserSchema = () => {
    return yup.object().shape({
        name: yup.string().required(),
        nickname:yup.string().required(),
        email:yup.string().required(),
        password: yup.string().required(),
    });
};