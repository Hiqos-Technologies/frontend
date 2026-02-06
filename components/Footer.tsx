import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo12.png';

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
          <div className='flex max-sm:flex-col items-end justify-between'>
              
              <div>
                  <Image src={logo} alt={'Hiqos_logo'} width={120} height={120} />
                    <p className=' text-lg md:text-2xl font-semibold'>Future-Ready Networks, Engineered Today.</p>
              </div>
              <Button>
                  Contact Us
              </Button>
          </div>

          <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
              
              <div className='col-span-2'>
                  <h2>HIQOS Ltd. HQ</h2>
                  <p>
                      41, Akin Osiyemi Street, Off Allen Avenue, Ikeja, Lagos, Nigeria. <br />
                      Phone: +234 1 342 5678 <br />
                      
                  </p>
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
