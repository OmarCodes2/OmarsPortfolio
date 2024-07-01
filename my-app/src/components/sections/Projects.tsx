'use client';

import * as React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '../ui/card';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { useMediaQuery } from "@uidotdev/usehooks";

const projects = [
  {
    title: 'MacShuttle',
    description: 'A shuttle tracking app for students.',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/macshuttle',
    devpost: 'https://devpost.com/software/macshuttle'
  },
  {
    title: 'Critiqly',
    description: 'A platform for critical reviews.',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/critiqly',
    devpost: 'https://devpost.com/software/critiqly'
  },
  {
    title: 'Caddie',
    description: 'A Discord bot for managing tasks.',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/caddie',
    devpost: 'https://devpost.com/software/caddie'
  },
  {
    title: 'Pawndr',
    description: 'A pet adoption app. (Hackathon Winner)',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/pawndr',
    devpost: 'https://devpost.com/software/pawndr',
    badge: 'Hackathon Winner'
  },
  {
    title: 'Certificate Generator',
    description: 'Automatically generates certificates.',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/certgen',
    devpost: 'https://devpost.com/software/certgen'
  },
  {
    title: 'AI Quiz Solver',
    description: 'Solves quizzes using AI.',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/aiquizsolver',
    devpost: 'https://devpost.com/software/aiquizsolver'
  },
  {
    title: 'Island Generator',
    description: 'Generates random islands.',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/islandgenerator',
    devpost: 'https://devpost.com/software/islandgenerator'
  },
  {
    title: 'Verses',
    description: 'A poetry sharing platform. (Hackathon Winner)',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/verses',
    devpost: 'https://devpost.com/software/verses',
    badge: 'Hackathon Winner'
  },
  {
    title: 'Afk Student',
    description: 'Tracks student activity. (Hackathon Winner)',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/afkstudent',
    devpost: 'https://devpost.com/software/afkstudent',
    badge: 'Hackathon Winner'
  },
  {
    title: 'Lori\'s Grocer',
    description: 'A grocery management system.',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/lorisgrocer',
    devpost: 'https://devpost.com/software/lorisgrocer'
  },
  {
    title: 'Wavey',
    description: 'A wave simulation tool.',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/wavey',
    devpost: 'https://devpost.com/software/wavey'
  },
  {
    title: 'Student Council Sign Up Page',
    description: 'A sign-up page for student council.',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/studentcouncil',
    devpost: 'https://devpost.com/software/studentcouncil'
  }
];

export const ProjectsSection = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section id="projects" className="p-8 flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-lg">
        {projects.map((project, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader className="flex flex-col items-start">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-2">
                  <CardTitle>{project.title}</CardTitle>
                  {project.badge && <Badge variant="outline">{project.badge}</Badge>}
                </div>
                <div className="flex space-x-2">
                  <Avatar>
                    <AvatarImage src={project.github} alt="GitHub Link" />
                    <AvatarFallback>GH</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src={project.devpost} alt="Devpost Link" />
                    <AvatarFallback>DP</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <CardDescription>{project.description}</CardDescription>
              <img src={project.images[0]} alt={project.title} className="w-full h-32 object-cover mt-4 rounded-t-lg" />
            </CardHeader>
            <CardFooter>
              {isDesktop ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Learn More</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription>{project.description}</DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col items-center p-4">
                      <Carousel className="w-full max-w-xs">
                        <CarouselContent>
                          {project.images.map((image, i) => (
                            <CarouselItem key={i}>
                              <div className="p-1">
                                <Card>
                                  <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <img src={image} alt={`Project ${index + 1} Image ${i + 1}`} className="w-full h-full object-cover rounded" />
                                  </CardContent>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                      <div className="flex mt-4 space-x-4">
                        <Avatar>
                          <AvatarImage src={project.github} alt="GitHub Link" />
                          <AvatarFallback>GH</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarImage src={project.devpost} alt="Devpost Link" />
                          <AvatarFallback>DP</AvatarFallback>
                        </Avatar>
                      </div>
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
                      <DrawerTitle>{project.title}</DrawerTitle>
                      <DrawerDescription>{project.description}</DrawerDescription>
                    </DrawerHeader>
                    <div className="flex flex-col items-center p-4">
                      <Carousel className="w-full max-w-xs">
                        <CarouselContent>
                          {project.images.map((image, i) => (
                            <CarouselItem key={i}>
                              <div className="p-1">
                                <Card>
                                  <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <img src={image} alt={`Project ${index + 1} Image ${i + 1}`} className="w-full h-full object-cover rounded" />
                                  </CardContent>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                      <div className="flex mt-4 space-x-4">
                        <Avatar>
                          <AvatarImage src={project.github} alt="GitHub Link" />
                          <AvatarFallback>GH</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarImage src={project.devpost} alt="Devpost Link" />
                          <AvatarFallback>DP</AvatarFallback>
                        </Avatar>
                      </div>
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
