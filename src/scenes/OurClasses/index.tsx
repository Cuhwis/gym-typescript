import React from 'react'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from "framer-motion"
import { ClassType, SelectedPage } from '@/shared/types'
import HText from '@/shared/HText'
import Class from './Class'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const classes: ClassType[] = [
    {
        name: "Weight",
        description: "lorem ipsum generic description.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: "lorem ipsum generic description.",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "lorem ipsum generic description.",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description: "lorem ipsum generic description.",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description: "lorem ipsum generic description.",
        image: image5,
    },
    {
        name: "Training Classes",
        description: "lorem ipsum generic description.",
        image: image6,
    },
]

const OurClasses = ({setSelectedPage}: Props) => {
return (

    <section className='w-full bg-primary-100 py-40' id='ourclasses'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div
                className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}>
                <div>
                    <HText>OurClasses</HText>
                    <p className="py-5">
                    Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                    tellus quam porttitor. Mauris velit euismod elementum arcu neque
                    facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                    enim mattis odio in risus nunc.
                    </p>
                </div>  
            </motion.div>
            <div className="mt-10 h-[353] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType,index) => (
                        <Class
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}/>
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
)
}

export default OurClasses