import React from 'react'
import ServiceCard from './ServiceCard'
import { services } from './data/data'

const Services = () => {
    return (
        <section className='grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-4' role="grid">
            {services.map(({ count, servicename }) => <ServiceCard count={count} servicename={servicename} />)}
        </section>
    );
};

export default Services;