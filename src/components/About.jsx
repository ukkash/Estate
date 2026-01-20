import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 
    lg:px-32 w-full overflow:hidden' id='About'>
            <h1 className='text-2xl sm:text-4xl font-bold mb:2'>About
                <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
            <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>

            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl pr-28'>
                        <div>
                            <p className='text-4xl font-medium text-gary-800'>10+</p>
                            <p>Years of Excellence</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gary-800'>12+</p>
                            <p>Projects Completed</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gary-800'>20+</p>
                            <p>Mn. sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className='text-4xl font-medium text-gary-800'>25+</p>
                            <p>Ongoing Projects</p>
                        </div>


                    </div>

                    <p className='my-10 max-w-lg'>We are a trusted housing construction company dedicated to building high-quality,
                        durable, and modern homes that stand the test of time.
                        With a strong focus on craftsmanship, innovation, and customer satisfaction,
                        we transform ideas into well-designed living spaces tailored to your lifestyle and needs.
                        From planning and design to construction and final delivery,
                        our experienced team ensures every project is executed with precision,
                        transparency, and attention to detail. We use premium materials, follow industry best practices,
                        and maintain strict quality standards to deliver homes that combine comfort, safety, and style.
                        Our mission is to create homes that not only meet expectations but exceed them—building lasting
                        relationships along with lasting structures.</p>

                    <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>

                </div>
            </div>

        </motion.div>
    )
}

export default About