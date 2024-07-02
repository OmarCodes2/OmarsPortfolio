'use client';

import * as React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '../ui/card';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { useMediaQuery } from "@uidotdev/usehooks";
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'Canada Life',
    description: 'Software Developer',
    details: [
      'Conducted financial analysis and prepared reports.',
      'Provided support to senior financial advisors.',
      'Helped clients understand their financial options.',
    ],
    imageUrl: '/canadalife.png',
    duration: 'May 2024 - August 2024'
  },
  {
    title: 'Vidyard',
    description: 'Software Developer',
    details: [
      'Collaborated with the marketing team to develop video campaigns.',
      'Increased video views and engagement by 30%.',
      'Edited and produced high-quality video content.',
    ],
    imageUrl: '/vidyard.png',
    duration: 'January 2024 - April 2024'
  },
  {
    title: 'FirstHX',
    description: 'Junior Software Developer',
    details: [
      'Developed marketing strategies to increase brand awareness.',
      'Analyzed data to track campaign performance and optimize strategies.',
      'Created and presented reports to stakeholders.',
    ],
    imageUrl: '/firsthx.png',
    duration: 'May 2023 - Dec 2023'
  },
  {
    title: 'Prolancify',
    description: 'Full-Stack Developer, API Integrations',
    details: [
      'Implemented new features based on user feedback.',
      'Ensured high performance and responsiveness of applications.',
      'Collaborated with cross-functional teams to define project requirements.',
    ],
    imageUrl: '/prolancify.png',
    duration: 'January 2023 - March 2023'
  },
  {
    title: 'AdMass',
    description: 'Full-stack Developer',
    details: [
      'Increased client engagement by 20%.',
      'Collaborated with the design team to create effective ads.',
      'Conducted market research to identify target demographics.',
    ],
    imageUrl: '/admass.png',
    duration: 'October 2022 - January 2023'
  },
  {
    title: 'McMaster Design League',
    description: 'Co President',
    details: [
      'Organized and managed design competitions and workshops.',
      'Fostered a collaborative and creative team environment.',
      'Mentored team members and provided guidance.',
    ],
    imageUrl: '/mdl.png',
    duration: 'July 2022 - Present'
  }
];

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};

export const ExperienceSection: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section id="experience" className="p-8 flex flex-col justify-center items-center min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-lg">
        {experiences.map((experience, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariant}
              custom={index}
            >
              <Card className="shadow-lg">
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
