import React from "react";
import { ServiceGrid } from "@/components/ServiceCard";
import ServiceSlides from "@/components/ServiceSlides";

export default function Services() {
  const services = [
    {
      heading: "Audio Visual Solutions",
      description:
        "Audio Visual Solutions are designed to solve communication needs. Now more than ever, the world has never been closer with effective Audio Visual Solutions in place",
      image: "/audio.svg",
      modalDescription: `Audio Visual Solutions are designed to solve communication needs. Now more than ever, the world has never been closer with effective Audio Visual Solutions in place. 
      HIQOS technologies offers you a simple to operate, cost effective, flexible Audio Visual Solutions to accommodate future change and technological advances`,
      modalImages: ["/AVatFMH.jpeg"],
      additionalText: `Our individually tailored AVS are matched to your business needs and budgets, support communication and knowledge sharing, encourage collaborations with the benefit of time saving, value creation and functionality. 
      With our extensive knowledge in the planning, designing, installation and programming, we deliver optimum performance AVS that puts into consideration Digital Display, Interactive Display, Lighting, Sounds and Operating Control.`,
    },
    {
      heading: "Intrusion Detection",
      description:
        "Advanced security systems to protect your premises from unauthorized access and threats.",
      image: "/firewall.svg",
      modalDescription: `Intrusion Detection Systems are put in place to monitor violations while preventing unwanted access

We play a critical role through the installation of perimeter security system by protecting them from vulnerability exploit.

We supply and install IDS that uses Fiber Optic systems that detect, locate and classify vibrations caused by physical activity.`,
      modalImages: ["/intrusion.jpg"],
      additionalText: `Our installation is designed to cover long distance detection of intrusion and includes smart perimeter camera. It monitors full time, all weather intrusion around the perimeter, it provides real time, efficient, continuous perimeter security with maximum coverage.

Our engineers put their wealth of knowledge to work and are able to calibrate and optimize the system to fit the need of the client.`,
    },
    {
      heading: "IT Support",
      description:
        "HIQOS offers a range of support services that is tailored specifically to your need and help you achieve your business goals.",
      image: "/support.svg",
      modalDescription: `HIQOS offers a range of support services that is tailored specifically to your need, and help you achieve your business goals.

We set up, manage and monitor your core IT infastructure to keep your business running without interruption or downtime.

We assist you keep your workstation server and company data safe within enterprise grade security.`,
      images: [],
      additionalText: `We offer expert support in areas from Audio Visual Support, CCTV /Access Control, Hardware and Software Support, IDS Support.

We ensure consistent support and monitoring by regular performance evaluation, and we are within customer reach at every turn.`,
    },
    {
      heading: "Access Control",
      description:
        "Secure access management systems with biometric and card-based authentication solutions.",
      image: "/smart-door.svg",
      modalDescription: `We design access control systems that recognizes, authenticate, and authorizes access and movement within your space or organization giving protection and ensuring security.
        Information and Security are a vital part of any household or business, this is why we design an access control that allows for flexible control over personnel movement and access to information.
        There are several types of access based on level, we use unique points like fingerprint since no two fingerprints are the same. This ensures validity and safety.`,
      modalImages: ["/Saeed.jpeg"],
      additionalText: `We design and put in place various access control systems ranging from standalone electronic doors, to networked proximity access, speed stiles, turnstiles, bollards and automatic gate barriers.
        We serve both the home use and commercial purposes such as hospitality industry and large office environment.
        Our access control systems is not limited to entry but can also be used in gathering data, integration with canteen management system which helps provide an efficient system while saving time and resources.`,
    },
    {
      heading: "Video Surveillance Systems",
      description:
        "We understand that defending your business, protecting assets and deterring crime are essential if you want to keep your businesses and employees safe",
      image: "/cctv.svg",
      modalDescription: `We understand that defending your business, protecting assets and deterring crime are essential if you want to keep your business and employee safe. We provide you with top notch video surveillance system that keeps an eye at all angles and at all time that allows for remote monitoring from any location.`,
      modalImages: ["/img1.jpg", "/img2.jpg"],
      additionalText: `Hiqos has delivered high end Video Surveillance projects across the nation including Oil and Gas Companies, partnering with world class security equipment manufacturers including Pelco, Flir, Hikvision etc. to design video surveillance solutions that is suitable for our Client's demands.`,
    },
    {
      heading: "Control Room Solutions",
      description:
        "Integrated command and control centers for monitoring and managing critical operations.",
      image: "/control-room.svg",
      modalDescription: `A control room is an integral part of any business where activities are monitored and controlled. At HIQOS, we help you design a control room to improve operations and efficiency.

We help with customized control room solutions for a wide range of applications. Our engineers will help with the most suitable control room for your business need.`,
      modalImages: ["/control-room.jpg", "/control-room2.jpg"],
      additionalText: `Whether you want a state of the art or simple functional control room, we have the right solution for you.

We understand that a well designed control room is your assurance of safer operations, attentive monitoring, quicker responses, as well as higher productivity`,
    },
    {
      heading: "IT Procurement",
      description:
        "End-to-end procurement services for all your hardware and software requirements.",
      image: "/procurement.svg",
      modalDescription: `We know IT Procurement is much more than just finding the lowest cost option.

We help balance cost against quality. We work with industry leading hardware and software manufacturers as well as some of the world's largest ICT brands.`,
      modalImages: ["/procurement1.jpg", "/procurement2.jpg"],
      additionalText: `We will handle your complete procurement process from consultation, right through to product supply.

We will even assist with configuration, installation and support if you need it. We are always on hand to offer genuine support.`,
    },
    {
      heading: "Network Infrastructure",
      description:
        "Robust networking solutions including structured cabling, switches, and wireless systems.",
      image: "/network.svg",
      modalDescription: `Network Infastructure is an important component of modern business operations. It ensures business have effective connectivity, communication and management between users, equipment and network.

Our network services range from design and installation of data networks including LANs, WANs, satellite network, terrestrial wireless networks, and VPNs.

Our network engineers have vast experience in network equipment and services.`,
      modalImages: ["/network1.jpg", "/network2.jpg"],
      additionalText: `We are able to put vast experience to work creating an inter-connectivity within such as routers, switches, LAN cards, Wireless Access Points, Ethernet and networking software for operating systems, security. network operations and management.

We are a CISCO Certified partner in building advanced networks, we are also licensed by the Nigerian Communication Commission (NCC)..`,
    },
    {
      heading: "Renewable Energy",
      description:
        "We Offer efficient, reliable, and durable solar energy solutions in consumer as well as commercial spaces",
      image: "/solar.svg",
      modalDescription: `In partnership with World leaders in Solar technologies, the likes of Jinko and Canadian Solar Inc. Hiqos Technologies limited has delivered several solar projects across the country. We offer efficient, reliable and durable solar solution in consumer as well as commercial space`,
      modalImages: ["/solar1.jpg", "/solar2.jpg"],
      additionalText: `Our solar solutions are designed to meet the unique needs of our clients, whether it's for residential, commercial, or industrial applications. We provide end-to-end services, from initial consultation and system design to installation and ongoing maintenance.`,
    },
    {
      heading: "SPS Wellhead Automation",
      description:
        "We provide comprehensive wellhead automation solutions, including control systems, instrumentation, and remote monitoring capabilities.",
      image: "/oil-rig.svg",
      modalDescription: `To support safe and efficient field operation, oil and gas companies invest heavily in control and monitoring systems.

The challenge is that, while wellheads may produce for decades, the life cycle of controllers and other automation technologies is far shorter and usually linked to a specific lift method.`,
      modalImages: ["/wellhead1.jpg", "/wellhead2.jpg"],
      additionalText: `When proprietary systems inevitably require repair and replacement, companies struggle with vendor lock-in and product obsolescence. Legacy systems often lack interoperability and present security vulnerabilities, but optimizing proprietary systems with the latest I oT-based solutions is a complex, time-consuming, and cost-prohibitive process, that is what our smart wellhead automation system has come to solve.`,
    },
  ];

  return (
    <>
      <ServiceSlides />
      <ServiceGrid services={services} />
    </>
  );
}
