import { title } from 'process';
import Image from 'next/image';
import React from 'react';
import Heading from './Heading';
import Card from './Card';
import Hero from './Hero';

 const data= [
 {   
        id: 1,
        title:"Todo List",
        desc:"A React & TypeScript based app for managing and organizid",
        img:"/",
        tags:["React" , "Node", "CSS", "TypeScript"],
    },
    {
        id: 2,
        title:"Countdown Timer",
        desc:"A Next.js and TypeScript powered website to took time with an interactive countdown feature. ",
        img:"/countdowntimer.png",
        tags:["Next.js","Node", "CSS", "TypeScript"],   
    },
    {
        id: 3,
        title:"Simple Calculater Projects",
        desc:"A basic HTML CSS & TypeScript calculater for simple projects",
        img:"/calculatot.jpeg",
        tags:["HTML" , "Node", "CSS", "TypeScript"],
    },
    {
        id: 4,
        title:"ATM Machion",
        desc:"A React & TypeScript based app for managing and organizid",
        img:"/",
        tags:["React" , "Node", "CSS", "TypeScript"],
    },
    {
      id: 5,
      title:"Wether Widget ",
      desc:"A Next.js & TypeScript based tool for fething and displaying real-time weather data   ",
      img:"/",
      tags:["React" , "Node", "CSS", "TypeScript"],
  },
  {   
    id: 6,
    title:"Currency Converter Projects",
    desc:"A simple HTML & TypeScript based powerd tool for converting currencies with real-time rates.",
    img:"/",
    tags:["HTML","Node", "CSS", "TypeScript"],
},
{   
  id: 7,
  title:"Static Intertactive Resume",
  desc:"A TypeScript based interactive resume built with HTML and CSS allowing user to showcase their skills dymamically.",
  img:"/",
  tags:["HTML", "Node", "CSS", "TypeScript"],
},

 {
  id: 8,
  title: "Birthday Card",
  desc: "A simple birthday card built with HTML and CSS allowing user to showcase.",
  img:"/images/birthdaycard.png",
  tags: ["HTML", "Node", "CSS", "TypeScript"],
 },
]
    

const projects = () => {
  return (
    <div id='projects' className='container pt-30 text-pink-600'>
      <Heading title='My Projects'/>
      <div className=' grid gap-8 xl:gap-0 xl:gap-y -8 md:grid-cols-2 lg:gride-cols-2 place-items-center'>
        {data.map((el) => (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default projects
