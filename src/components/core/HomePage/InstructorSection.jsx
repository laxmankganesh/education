import React from 'react';
import Instructor from '../../../assets/Images/Instructor.png'
import HighlightText from './HighlightText';
import { FaArrowAltCircleRight } from 'react-icons/fa';

import CTAButton from '../HomePage/Button'
const InstructorSection = () => {
    return (
        <div className='mt-16'>
            <div className='flex flex-row gap-20 items-center'>

                <div className='w-[50%] shadow-[20px_20px_rgba(255,255,255)]'>
                    <img src={Instructor} alt="Instrutor" />
                </div>

                <div className='w-[30%] flex-col gap-10'>
                    <div className='text-4xl font-semibold'>
                        Become An
                        <HighlightText text={"Instructor"} />
                    </div>
                    <p className='mt-10 font-medium text-richblack-300 w-[80%] mb-8'>
                        Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
                    </p>
                    <div className='w-fit'>
                    <CTAButton active={true} linkto={"/signup"} >
                        <div className='flex items-center gap-2 justify-center'>
                            Start Learning Today
                            <FaArrowAltCircleRight />
                        </div>
                    </CTAButton>
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default InstructorSection;