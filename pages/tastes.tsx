import { NextPage } from "next";
import Container from "../components/Container";

const Tastes: NextPage = () => {
    return (
        <Container title='My musical tastes'>
            <h1 className="text-7xl text-left sm:text-9xl sm:text-center">
                My musical tastes
            </h1>
        </Container>
    )
}

export default Tastes