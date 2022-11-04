import {InfoBox, Header, Image} from "../components/Info";

export default function Proposal(){
    return (
        <>
            <InfoBox>
                <Header>Problem And Motivation</Header>
                <p>
                    There are several reasons why 10 in every 12
                    students of CNSC are either interested, have
                    experienced, or are currently working part-time.
                    Some of these reasons include networking, experience
                    development, and benefit them in both their
                    university life and later career. However,
                    it is concerning that 82% of students whom are
                    currently working and have had experienced
                    working have had difficulties finding a job
                    that is suited for them and their schedule.
                </p>
                <div className="text-center">
                    <Image src={require("../components/ref/Proposal Page/figure1.png")} alt="Pie Graph showing the statistics for what describes the respondents the most."/>
                    <Image src={require("../components/ref/Proposal Page/figure2.png")} alt="Pie Graph showing the statistics for if the respondents have experienced difficulties in finding a job that is suited for them and their schedule."/>
                </div>
            </InfoBox>
            <InfoBox>
                <Header>Analysis Of The Problem</Header>
                <p>
                    In the present year, statistics shows that it takes
                    about 6 months for someone to find a job &#40;
                    <a href="https://www.topresume.com/career-advice/how-long-to-find-a-job">
                        Topresume, 2022
                    </a>&#41;. Taking into consideration the duties of
                    students to their course and studies, finding a
                    suitable part-time job that will align to their
                    schedule and capabilities in work is a huge barrier
                    that they'll have to worry. The problem at hand not
                    only affects the students but also hiring jobs and
                    establishments; caused by the difficulty of finding
                    available and suitable employees to fit to their demand.
                    If only 17 of every 88 engaged CNSC students have the
                    capability to actually apply and find a suitable job, 
                    then this problem requires a big solution.
                </p>
            </InfoBox>
            <InfoBox>
                <Header>Proposed Solution</Header>
                <p>
                    A job posting web application made to serve CNSC working
                    applicants/students which will display a dashboard fileld
                    with in-app job posting willing to adjust to CNSC students
                    located near the department of the user. This application
                    will also make use of other sources e.g., APIs like LinkUp
                    Job Search API in order to retrieve additional posted job
                    offerings.
                </p>
                <div className="text-center">
                    <Image src={require("../components/ref/Proposal Page/figure3.png")} alt="Pie Graph showing the statistics for if the respondents are interested in the web application that Peachy Core is developing."/>
                </div>
                <p>
                    Of course, this application will not be limited to students,
                    but also to hiring managers and open establishments giving
                    them access to post jobs to offer &mdash; requiring necessary
                    details like full job descriptions and how they can compromise
                    to their applicants schedule. The account feature would also be
                    required to said managers and establishments that will be used
                    to verify business hirings and avoid spam and illegitimate job
                    posts; in contrast to student users where account signup is optional.
                    Ultimately, this project will lessen the effort that students need to
                    exert in finding job offerings suitable for them as CNSC learners.
                </p>
            </InfoBox>
        </>
    );
}