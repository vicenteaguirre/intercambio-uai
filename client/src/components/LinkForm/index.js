import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { LinkFormContainer,LinkText} from "./LinkFormElements"

export const LinkForm = () => {
    return (
        <>
        <LinkFormContainer>
            <Link to="/form">
                <LinkText>¡Haz click aca para subir tu experiencia!</LinkText>
            </Link>
        </LinkFormContainer>
        </>
    )
};
export default LinkForm;
