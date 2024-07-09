'use client';

import * as React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '../ui/card';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  github: string;
  techStack: string;
  details: string;
  devpost?: string;
  badge?: string;
}

const projects: Project[] = [
  {
    title: 'MacShuttle',
    description: 'McMaster\'s Shuttle ETA App.',
    coverImage: './macshuttle1.png',
    images: [
      './macshuttle2.png',
      './macshuttle3.png'
    ],
    github: 'https://github.com/OmarCodes2/MacShuttle',
    techStack: 'React Native, Go, PostgreSQL, AWS',
    details: 'MacShuttle is an app to help students track shuttle locations in real-time.'
  },
  {
    title: 'Critiqly',
    description: 'AI-powered, gamified code review platform.',
    coverImage: './critiqly.png',
    images: [
      './critiqly2.png',
      './critiqly3.png'
    ],
    github: 'https://github.com/OmarCodes2/Critiqly',
    devpost: 'https://taikai.network/hackbox/hackathons/hawkhacks/projects/clwd9o8bs0dybz901x0r4vht0/idea',
    techStack: 'React, FastAPI, MongoDB, AWS',
    details: 'Critiqly transforms code reviews into an interactive learning experience. With simulated code reviews, you review code directly in a code editor.'
  },
  {
    title: 'Caddie',
    description: 'MDLs Discord Bot.',
    coverImage: './caddie.png',
    images: [
      './caddie2.png',
      './caddie3.png'
    ],
    github: 'https://github.com/OmarCodes2/mdl-bot-monorepo',
    techStack: 'Python, AWS',
    details: 'Caddie is a Discord bot that praises, asks questions, summarizes chats, gives birthday shout outs, and more.'
  },
  {
    title: 'Pawndr',
    description: 'Journaling made easy.',
    coverImage: './pawndr.png',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/hack-western-2023/pawndr',
    devpost: 'https://devpost.com/software/pawndr-kvlmgj',
    techStack: 'FastAPI, MongoDB, React, Google Cloud',
    details: 'Pawndr is a journaling app that connects with you through text and voice. Receive conversational prompts delivered to your phone, sparking meaningful reflections wherever you are and making journaling more accessible and fun.',
    badge: 'Hackathon Winner'
  },
  {
    title: 'Island Generator',
    description: 'Generates random islands.',
    coverImage: './islandgenerator.png',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/OmarCodes2/Urbanism',
    techStack: 'Java, Maven',
    details: 'Engineered a Java application using Maven, incorporating Object-Oriented Programming (OOP) and design patterns to dynamically generate 2D maps with diverse biomes and elevations. Applied Dijkstra’s algorithm for efficient railway system design between procedurally generated cities.'
  },
  {
    title: 'Verses',
    description: 'A quiz that challenges you to answer questions about your Spotify listening.',
    coverImage: './verses.png',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/OmarCodes2/hackwestern',
    devpost: 'https://devpost.com/software/verses',
    techStack: 'Express, React, MongoDB',
    details: 'Verses allows you to share your Spotify listening habits with friends and have them guess your top songs/artists by answering questions. Creates a leaderboard of your friends who have taken the quiz, ranking them by the scores they obtained on your quiz.',
    badge: 'Hackathon Winner'
  },
  {
    title: 'Afk Student',
    description: 'Alerts  you when your name gets called in a meeting.',
    coverImage: './afkstudent.png',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/OmarBakr-03/AFKStudent',
    devpost: 'https://devpost.com/software/warning-lmvyx3',
    techStack: 'Python',
    details: 'AFK Student informs you when your name gets called in a meeting through a call and SMS message, while also transcribing your meets and automatically syncing it to your Google Drive.',
    badge: 'Hackathon Winner'
  },
  {
    title: 'StudyComb',
    description: 'A study companion app.',
    coverImage: './studycomb.png',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/yut-code/studycomb',
    devpost: 'https://devpost.com/software/studycomb',
    techStack: 'HTML, CSS, Tailwind CSS',
    details: 'StudyComb helps students find study buddies, join meetings, and practice study methods like the Pomodoro technique. It also offers rooms for social games and networking, meditation practice, and a dashboard for daily tasks.',
    badge: 'Hackathon Winner'
  },
  {
    title: 'RoomE',
    description: 'A room management system.',
    coverImage: './roome.png',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/OmarCodes2/DeltaHacks',
    devpost: 'https://devpost.com/software/roommatematch',
    techStack: 'Python, Node, Express, React',
    details: 'RoomE is a web application that simplifies the process of finding compatible roommates by asking users about their lifestyle, habits, and preferences, and then providing a list of their most compatible matches.'
  },
  {
    title: 'Certificate Generator',
    description: 'Automatically generates certificates.',
    coverImage: './certificategenerator.png',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/OmarCodes2/certificate-generator',
    techStack: 'Python',
    details: 'Automatically generates certificates for events and uploads them to Google Drive, then sends them out.'
  },
  {
    title: 'AI Quiz Solver',
    description: 'Solves quizzes using AI.',
    coverImage: './aiquizsolver.png',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/OmarCodes2/Quiz-Solver-Open-AI',
    techStack: 'JavaScript',
    details: 'A Chrome extension that solves quizzes using AI.'
  },
  {
    title: 'Lori\'s Grocer',
    description: 'A grocery management system.',
    coverImage: './lorisgrocer.png',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/OmarCodes2/Loris-Grocer',
    techStack: 'Python, SQLite',
    details: 'A robust and user-friendly application designed to streamline the operations of grocery stores. It features comprehensive modules for employee management, inventory tracking, sales processing, and data encryption for secure access.'
  },
  {
    title: 'Wavey',
    description: 'Makes note-taking efficient using hand gestures.',
    coverImage: './wavey.png',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/DeZhaysun/Wavey',
    devpost: 'https://devpost.com/software/wavey',
    techStack: 'Python',
    details: 'Wavey makes note-taking incredibly efficient by utilizing hand gestures to perform certain actions. For example, holding up one finger on camera takes a screenshot and records it onto a text file.'
  },
  {
    title: 'Student Council Sign Up Page',
    description: 'A sign-up page for student council.',
    coverImage: './studentcouncilsignuppage.png',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/OmarCodes2/shuchiin-academy-student-council',
    techStack: 'JavaScript, HTML, CSS',
    details: 'A landing page for the Shuichin academy from Love is War.'
  },
  {
    title: 'Portfolio',
    description: 'A personal portfolio website.',
    coverImage: './portfolio.png',
    images: [
      'https://via.placeholder.com/400x300',
      'https://via.placeholder.com/400x300'
    ],
    github: 'https://github.com/OmarCodes2/OmarsPortfolio',
    techStack: 'Next.js',
    details: 'My portfolio that hosts all my projects. Currently live at omarswe.com.'
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

export const ProjectsSection: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width:768px)');

  return (
    <section id="projects" className="p-8 flex flex-col justify-center items-center min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-lg">
        {projects.map((project, index) => {
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
                <CardHeader className="flex flex-col items-start">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-2">
                      <CardTitle>{project.title}</CardTitle>
                    </div>
                    <div className="flex space-x-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Avatar>
                          <AvatarImage src="/github.png" alt="GitHub Link" />
                          <AvatarFallback>GH</AvatarFallback>
                        </Avatar>
                      </a>
                      {project.devpost && (
                        <a href={project.devpost} target="_blank" rel="noopener noreferrer">
                          <Avatar>
                            <AvatarImage src="/devpost.png" alt="Devpost Link" />
                            <AvatarFallback>DP</AvatarFallback>
                          </Avatar>
                        </a>
                      )}
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                  <img src={project.coverImage} alt={project.title} className="w-full h-32 object-cover mt-4 rounded-t-lg" />
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
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
                          <p className="mb-4 text-left">{project.details}</p>
                          <div className="mb-4 text-left w-full">
                            <strong>Tech Stack:</strong> {project.techStack}
                          </div>
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
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Avatar>
                                <AvatarImage src="/github.png" alt="GitHub Link" />
                                <AvatarFallback>GH</AvatarFallback>
                              </Avatar>
                            </a>
                            {project.devpost && (
                              <a href={project.devpost} target="_blank" rel="noopener noreferrer">
                                <Avatar>
                                  <AvatarImage src="/devpost.png" alt="Devpost Link" />
                                  <AvatarFallback>DP</AvatarFallback>
                                </Avatar>
                              </a>
                            )}
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
                          <p className="mb-4 text-left">{project.details}</p>
                          <div className="mb-4 text-left w-full">
                            <strong>Tech Stack:</strong> {project.techStack}
                          </div>
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
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Avatar>
                                <AvatarImage src="/github.png" alt="GitHub Link" />
                                <AvatarFallback>GH</AvatarFallback>
                              </Avatar>
                            </a>
                            {project.devpost && (
                              <a href={project.devpost} target="_blank" rel="noopener noreferrer">
                                <Avatar>
                                  <AvatarImage src="/devpost.png" alt="Devpost Link" />
                                  <AvatarFallback>DP</AvatarFallback>
                                </Avatar>
                              </a>
                            )}
                          </div>
                        </div>
                        <DrawerFooter className="flex justify-between items-center">
                          <DrawerClose asChild>
                            <Button variant="outline">Close</Button>
                          </DrawerClose>
                          {project.badge && (
                            <Badge variant="destructive" className="text-right whitespace-normal block">
                              {project.badge}
                            </Badge>
                          )}
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  )}
                  {project.badge && (
                    <Badge className="ml-auto text-right whitespace-normal block">
                      {project.badge}
                    </Badge>
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
