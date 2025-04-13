import React from 'react';
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"

const timeline = [
    {
        Logo: logo1,
        heading: "LeaderShip",
        Description: "Fully Commited to the success compony",
    },
    {
        Logo: logo2,
        heading: "LeaderShip",
        Description: "Fully Commited to the success compony",
    },
    {
        Logo: logo3,
        heading: "LeaderShip",
        Description: "Fully Commited to the success compony",
    },
    {
        Logo: logo4,
        heading: "LeaderShip",
        Description: "Fully Commited to the success compony",
    }
]
const TImeLineSection = () => {
    return (
        <div>
            <div className='flex flex-row gap-14 items-center '>

                {/* left box */}
                <div className='flex flex-col gap-5 w-[45%]'>
                    {
                        timeline.map((element, index) => {
                            return (
                                <div className='flex flex-row gap-6 ' key={index}>

                                    <div className='w-[50px] h-[50px] bg-white flex items-center'>
                                        <img src={element.Logo} />
                                    </div>
                                    <div>
                                        <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                                        <p className='text-base'>{element.Description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='relative shadow-blue-200 mb-10'>
                    <img className='shadow-white object-cover h-fit' src={timelineImage} alt="timelineImage" />

                    <div className='w-10/12 absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7 translate-y-[-50%] translate-x-12'>
                        <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                            <p className='font-bold text-3xl'>10</p>
                            <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
                        </div>


                        <div className='flex gap-5 items-center px-10'>
                            <p className='font-bold text-3xl'>250</p>
                            <p className='text-caribbeangreen-300 text-sm'>Types Of Courses</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TImeLineSection;