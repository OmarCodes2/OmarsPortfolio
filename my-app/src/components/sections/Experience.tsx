'use client';

import * as React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '../ui/card';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { useMediaQuery } from "@uidotdev/usehooks";

const experiences = [
  {
    title: 'AdMass',
    description: 'Managed ad campaigns for various clients.',
    details: [
      'Increased client engagement by 20%.',
      'Collaborated with the design team to create effective ads.',
      'Conducted market research to identify target demographics.',
    ],
    imageUrl: 'https://via.placeholder.com/150',
    duration: 'Jan 2020 - Dec 2020'
  },
  {
    title: 'Prolancify',
    description: 'Developed and maintained web applications.',
    details: [
      'Implemented new features based on user feedback.',
      'Ensured high performance and responsiveness of applications.',
      'Collaborated with cross-functional teams to define project requirements.',
    ],
    imageUrl: 'https://via.placeholder.com/150',
    duration: 'Jan 2021 - Present'
  },
  {
    title: 'FirstHX',
    description: 'Conducted market research to identify new opportunities.',
    details: [
      'Developed marketing strategies to increase brand awareness.',
      'Analyzed data to track campaign performance and optimize strategies.',
      'Created and presented reports to stakeholders.',
    ],
    imageUrl: 'https://via.placeholder.com/150',
    duration: 'Feb 2019 - Dec 2019'
  },
  {
    title: 'Vidyard',
    description: 'Worked on video content creation and editing.',
    details: [
      'Collaborated with the marketing team to develop video campaigns.',
      'Increased video views and engagement by 30%.',
      'Edited and produced high-quality video content.',
    ],
    imageUrl: 'https://via.placeholder.com/150',
    duration: 'Mar 2020 - Dec 2020'
  },
  {
    title: 'Canada Life',
    description: 'Assisted in developing financial plans for clients.',
    details: [
      'Conducted financial analysis and prepared reports.',
      'Provided support to senior financial advisors.',
      'Helped clients understand their financial options.',
    ],
    imageUrl: 'https://via.placeholder.com/150',
    duration: 'Jan 2018 - Feb 2019'
  },
  {
    title: 'McMaster Design League',
    description: 'Leading a team of 60 people.',
    details: [
      'Organized and managed design competitions and workshops.',
      'Fostered a collaborative and creative team environment.',
      'Mentored team members and provided guidance.',
    ],
    imageUrl: 'https://via.placeholder.com/150',
    duration: 'Sep 2019 - Present'
  }
];

export const ExperienceSection = () => {
	const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <section id="experience" className="p-8 flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-lg">
        {experiences.map((experience, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <img src={experience.imageUrl} alt={experience.title} className="w-full h-32 object-cover mb-4 rounded-t-lg" />
              <CardTitle>{experience.title}</CardTitle>
              <CardDescription>{experience.description}</CardDescription>
              <p className="text-sm text-gray-500 mt-2">{experience.duration}</p>
            </CardHeader>
            <CardFooter>
              {isDesktop ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Learn More</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{experience.title}</DialogTitle>
                      <DialogDescription>{experience.description}</DialogDescription>
                    </DialogHeader>
                    <div className="p-4">
                      <ul className="list-disc ml-4">
                        {experience.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline">Learn More</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>{experience.title}</DrawerTitle>
                      <DrawerDescription>{experience.description}</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4">
                      <ul className="list-disc ml-4">
                        {experience.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
