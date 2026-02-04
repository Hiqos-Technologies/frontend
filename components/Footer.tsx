import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Footer() {


    const footerLinks = {
        services: [
            {name:'Audio-Visual SOlutions', href:'#'},
            {name: 'Telephony Solutions', href:'#'},
            {name: 'Control Room Solutions', href:'#'},
            {name: "CCTV and Security", href:'#'},
            { name: "iDirect VSAT Solutions", href: '#' },
            {name: "Item Procurement", href:'#'}
        ],
            company: [
                {name: 'About Us', href:'#'},
                {name: 'Partners', href:'#'},
                {name: 'Support', href:'#'},
                { name: 'Contact', href: '#' },
                {name: 'Clients', href:'#'},
            ],
    }



  return (
      
          <footer
              className={`h-auto bg-[#1b2232] text-white p-4 sm:px-16 md:px-10 lg:px-20`}
              
      >
          <div>
              
              <div>
                  <Image src={'/logo12.png'} alt={'Hiqos_logo'} width={90} height={90} />
                    <p>Future-Ready Networks, Engineered Today.</p>
              </div>
              <Button>
                  Contact Us
              </Button>
          </div>

          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
              
              <div className='col-span-2'>
                  address
              </div>
              <div>
                  <h2>Services</h2>
                  <ul className='space-y-3'>
                      {
                          footerLinks.services.map((service) => {
                              return (
                                  <li key={service.name}>
                                      <Link href={service.href}>{ service.name}</Link>
                                  </li>
                              );
                          })
                      }
                  </ul>
              </div>
               <div>
                  <h2>Company</h2>
                  <ul className='space-y-3'>
                      {
                          footerLinks.company.map((service) => {
                              return (
                                  <li key={service.name}>
                                      <Link href={service.href}>{ service.name}</Link>
                                  </li>
                              );
                          })
                      }
                  </ul>
              </div>
              

            </section>




          </footer>
    

  );
}
