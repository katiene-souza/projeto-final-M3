import * as yup from "yup";

export const makeCreateTimelineSchema = () => {
    return yup.object().shape({
        name: yup.string().required(),
    });
};