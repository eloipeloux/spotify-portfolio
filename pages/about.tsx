import { NextPage } from "next";
import Container from "../components/Container";

const About: NextPage = () => {
    return (
        <Container title='About me'>
            <h1 className="text-7xl text-left sm:text-9xl sm:text-center">
                Get to know me !
            </h1>
        </Container>
    );
}

export default About