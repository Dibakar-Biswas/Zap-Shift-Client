import React from 'react';
import servicePng from '../../../assets/service.png'

const Services = () => {
    return (
        <div className='bg-secondary py-22 rounded-2xl my-24'>
           <div className="text-white text-center">
             <h2 className="font-extrabold text-[40px] mb-6">Our Services</h2>
            <p className="font-medium mb-6">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
           </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className='bg-[#FFFFFF] hover:bg-[#CAEB66] text-center rounded-2xl p-4'>
                    <img className='mb-3 mx-auto' src={servicePng} alt="" />
                    <h2 className="font-bold text-2xl mb-3">Express  & Standard Delivery</h2>
                    <p className="font-medium">We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
                <div className='bg-[#FFFFFF] hover:bg-[#CAEB66] text-center rounded-2xl p-4'>
                    <img className='mb-3 mx-auto' src={servicePng} alt="" />
                    <h2 className="font-bold text-2xl mb-3">Nationwide Delivery</h2>
                    <p className="font-medium">We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                </div>
                <div className='bg-[#FFFFFF] hover:bg-[#CAEB66] text-center rounded-2xl p-4'>
                    <img className='mb-3 mx-auto' src={servicePng} alt="" />
                    <h2 className="font-bold text-2xl mb-3">Fulfillment Solution</h2>
                    <p className="font-medium">We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                </div>
                <div className='bg-[#FFFFFF] hover:bg-[#CAEB66] text-center rounded-2xl p-4'>
                    <img className='mb-3 mx-auto' src={servicePng} alt="" />
                    <h2 className="font-bold text-2xl mb-3">Cash on Home Delivery</h2>
                    <p className="font-medium">100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                </div>
                <div className='bg-[#FFFFFF] hover:bg-[#CAEB66] text-center rounded-2xl p-4'>
                    <img className='mb-3 mx-auto' src={servicePng} alt="" />
                    <h2 className="font-bold text-2xl mb-3">Corporate Service / Contract In Logistics</h2>
                    <p className="font-medium">Customized corporate services which includes warehouse and inventory management support.</p>
                </div>
                <div className='bg-[#FFFFFF] hover:bg-[#CAEB66] text-center rounded-2xl p-4'>
                    <img className='mb-3 mx-auto' src={servicePng} alt="" />
                    <h2 className="font-bold text-2xl mb-3">Parcel Return</h2>
                    <p className="font-medium">Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;