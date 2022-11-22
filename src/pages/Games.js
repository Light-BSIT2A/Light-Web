import { useState } from "react";
import Tab from "../components/Tabs";
import GForm from "../components/GoogleForm"
import PopUp from "../components/PopUpMessage";
export default function Survey(){
    const [survey, setSurvey] = useState("NW");
    /*
        W - Working Student
        NW - Non-Working Student
    */
    return(
            <>
                <PopUp>
                    <p className="text-sm md: text-base">
                        &emsp;We, Peachy Core of BSIT 2A, would like to ask you for your help in answering the survey below.
                        <br/><br/>
                        &emsp;In partial fulfillment to our subject Introduction to  Human Computer Interaction, we are conducting a survey that will serve as the basis for the formulation of user requirements of our web application, U-CAN Job Search &mdash; Online.
                        <br/><br/>
                        &emsp;We are looking for students from ALL DEPARTMENTS of CNSC to answer this survey; your answer would be of value and be very much appreciated.
                        <br/><br/>
                        &emsp;If it is not too much to ask, please SHARE this survey with your classmates, school friends, and even CNSC students from different campuses or departments you know.
                        <br/><br/>
                        &emsp;Thank you very much!
                    </p>
                </PopUp>
            <Tab var={survey} setter={setSurvey}/>
            {
                (survey==="W")?
                    <GForm
                        title="Working Student Survey"
                        link="https://docs.google.com/forms/d/e/1FAIpQLSfpvk9znu5zxk-nxXSL2aJO9FyFHldHKf5C_QbyIz7R8UbHhg/viewform?embedded=true"
                        classes="mx-auto w-full h-screen md:h-2xl"
                    />
                :
                    <GForm
                        title="Non-Working Student Survey"
                        link="https://docs.google.com/forms/d/e/1FAIpQLSd2xEOd4W-H7Z9CTuJU8sBtQ01wL2zRlMK0DVHTnmx2tIQOqA/viewform?embedded=true"
                        classes="mx-auto w-full h-screen md:h-2xl"
                    />
            }
        </>
    )
}