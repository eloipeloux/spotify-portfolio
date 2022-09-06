import { NextPage } from "next";
import Container from "../components/Container";

const About: NextPage = () => {
    return (
        <Container title='About me'>
            <div className='container'>
                <h1 className="font-bold text-7xl text-left sm:text-center sm:text-9xl mb-7">
                    Get to know me !
                </h1>
                <div className='text-justify p-10'>
                    <h3 className='font-bold text-3xl text-left mb-5'>
                        A little story time
                    </h3>
                    <p className='text-xl mb-5'>
                        I was born the 26th of Septembre 1999 in Bourges, France, where I grew few years before leaving.
                        Son of military, I had the chance to travel a lot during my lifetime.
                    </p>
                    <p className='text-xl mb-5'>
                        I went to Tahiti, French Polynesia, from 3yo to 5. Even if I was very young, I have very good memories from it.
                        We came to Issy-les-Moulieaux, suburbs of Paris, for 5 years, where I ended kindergarten and elementary school (till 4th grade). Then we had to move again.
                        This time it was Guadeloupe, French Island in the Caribbean Sea, where I spent 2 years of my life.
                        There, I discovered rugby, I was young, so at first it was just for fun but I had a certain interest in competing.
                    </p>
                    <p className='text-xl mb-5'>
                        Then, we came back again to the same place in Paris, different flat. At that time I was in 7th grade. I got injured too much playing rugby so I
                        began to swim. Living in such destinations helped me being comfortable with water. Quickly, my coaches noticed my progression
                        and wanted me to step up. Thus, I&apos;ve competed for 7 years. I learned what being rigorous and determined are. <br />
                        I decided to study sciences for my diploma. I had to choose a speciality, and the year I was in 12th grade was the one the French National Education decided
                        to add CNS (Computer and Numeric Sciences), where I discovered and learned a little more about coding. We had to create a 2D maze using Python during the year.
                    </p>
                    <p className='text-xl mb-5'>
                        At the time, I had no clue what I was going to study/do after high school. I was really into video games, computer sciences, aware of the relevance of IT in our future. And, to be honest, I kinda liked this little maze project I worked on.
                        So, I thought it was a good idea to give it a chance. I left Paris on my own at 17 and targeted Bordeaux where the university accepted my application.
                    </p>
                    <p className='text-xl mb-5'>
                        I&apos;ve been studying IT for 5 years now. After a two-year university degree in technology, I followed sandwich-courses for both of my bachelor&apos;s degree in computer sciences (web development) and my master&apos;s degree at WebTech Institute, Bordeaux.

                    </p>
                    <p className='text-xl mb-5'>
                        Despite all the things I&apos;ve seen and places I&apos;ve been, this lifestyle is quite hard being used to. You always have to adapt, make new friends, meet new people, acclimatize ... But, once you&apos;re stable enough, and pleased with your situation,
                        you&apos;ll have to go back from square one and build something new. Again. While growing up, this is a pain in the neck, you&apos;re always wondering why you, why now, etc. But honestly, I see this as a strenght. <br />
                        All this process made the man I&apos;m today, and I&apos;m grateful for that !
                    </p>
                </div>
            </div>
        </Container>
    );
}

export default About