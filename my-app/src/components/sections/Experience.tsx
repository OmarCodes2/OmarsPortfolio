'use client';

import * as React from 'react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription } from '../ui/card';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'Canada Life',
    description: 'Software Developer',
    details: [
      'Automated DB refresh requests with FastAPI and SQL, boosting productivity by 80%.',
      'Managed SAST scans and resolved 150+ critical vulnerabilities.',
      'Implemented CI/CD pipeline for 30+ repositories, reducing deployment times by 40%.',
    ],
    imageUrl: './canadalife.png',
    duration: 'May 2024 - August 2024'
  },
  {
    title: 'Vidyard',
    description: 'Software Developer',
    details: [
      'Enhanced platform features using Javascript and Ruby.',
      'Transitioned compute infrastructure to EKS, reducing costs by 22%.',
      'Developed an internal AI tool for developer queries.',
    ],
    imageUrl: './vidyard.png',
    duration: 'January 2024 - April 2024'
  },
  {
    title: 'FirstHX',
    description: 'Junior Software Developer',
    details: [
      'Implemented Oracle Cloud deployment with Terraform.',
      'Developed secure APIs with React, Node.js, and TypeScript.',
      'Enhanced frontend testing with Cypress, boosting deployment efficiency.',
    ],
    imageUrl: './firsthx.png',
    duration: 'May 2023 - Dec 2023'
  },
  {
    title: 'Prolancify',
    description: 'Full-Stack Developer, API Integrations',
    details: [
      'Developed a Chrome extension with OpenAI API.',
      'Integrated Google 2-Step Verification for secure sign-in.',
      'Implemented Stripe API for payment services.',
    ],
    imageUrl: './prolancify.png',
    duration: 'January 2023 - March 2023'
  },
  {
    title: 'AdMass',
    description: 'Full-stack Developer',
    details: [
      'Launched Shopify app using React and Node.js.',
      'Developed contact form with verification.',
      'Rebuilt website with NextJs, improving speed by 63%.',
    ],
    imageUrl: './admass.png',
    duration: 'October 2022 - January 2023'
  },
  {
    title: 'McMaster Design League',
    description: 'Co President',
    details: [
      'Led 60 students to organize Canada’s largest designathon.',
      'Created a certificate generator, reducing manual effort.',
      'Developed Discord bot to enhance team engagement.',
    ],
    imageUrl: './mdl.png',
    duration: 'May 2024 - Present'
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
  const isDesktop = useMediaQuery('(min-width:768px)');

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
              <Card className="shadow-lg h-full flex flex-col">
                <CardHeader className="flex-grow">
                  <img src={experience.imageUrl} alt={experience.title} className="w-full h-32 object-cover mb-4 rounded-t-lg" />
                  <CardTitle>{experience.title}</CardTitle>
                  <CardDescription>{experience.description}</CardDescription>
                  <p className="text-sm text-gray-500 mt-2">{experience.duration}</p>
                </CardHeader>
                <CardFooter className="mt-auto">
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
