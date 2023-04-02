import { SelectedPage } from '@/shared/types';
import React from 'react'
import {motion} from "framer-motion";
import {useForm} from "react-hook-form";
import ContactUsGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from '@/shared/HText';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const inputStyles = "mt-5 w-full rounded-lg bg-primary-300 px-3 py-3 placeholder-white"; 

const ContactUs = ({ setSelectedPage }: Props) => {

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async(e: any) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
    }
    return ( 
    <section id='contactus' className='mx-auto w-5/6 py-24'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/* HEADER */}
            <motion.div
            className='md:w-3/5 '
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}>
                <HText>
                    <span className='text-primary-500'>JOIN NOW!</span> TO GET IN SHAPE
                </HText>
                    <p className="my-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
            </motion.div>
            {/* FORM */}
            <div className="mt-10 justify-between md:flex gap-8">
                <motion.div
                className='mt-10 basis-3/5 md:mt-10'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}>
                    <form target="_blank"
                    onSubmit={onSubmit}
                    action='https://formsubmit.co/your@email.com'
                    method='POST'
                    >
                        <input className={inputStyles} type='text' placeholder='NAME' {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}/>
                        {errors.name && (
                            <p className='mt-1 text-primary-500'>
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 100 characters."}
                            </p>
                        )}
                        <input className={inputStyles} type='text' placeholder='EMAIL' {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                        })}/>
                        {errors.name && (
                            <p className='mt-1 text-primary-500'>
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "pattern" && "Please use a valid email."}
                            </p>
                        )}
                        <textarea className={inputStyles} rows={4} cols={50} placeholder='MESSAGE' {...register("message", {
                            required: true,
                            maxLength: 2000,
                        })}/>
                        {errors.message && (
                            <p className='mt-1 text-primary-500'>
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "Max Length is 2000 characters."}
                            </p>
                        )}
                        <button type='submit' className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>Submit</button>
                    </form>
                </motion.div>
                <motion.div className='relative mt-16 basis-2/5 md:mt-0'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}>
                    <div className='md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-z-1'>
                        <img src={ContactUsGraphic} alt="contact-us-page-graphic" className='w-full'/>
                    </div>

                </motion.div>
            </div>
        </motion.div>
    </section>
        
    )
}

export default ContactUs