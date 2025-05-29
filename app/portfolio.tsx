"use client"
import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "../components/theme-toggle"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Layers,
  Download,
  MapPin,
  Calendar,
  Menu,
  X,
  ArrowRight,
  Star,
  Users,
  Coffee,
  Award,
} from "lucide-react"
import { useState } from "react"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const clickedSection = useRef<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "experience", "contact"]
      let current: string | null = null
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el && window.scrollY + 120 >= el.offsetTop) {
          current = section
        }
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle click to animate underline
  const handleNavClick = (id: string) => {
    clickedSection.current = id
    setActiveSection(id)
    setTimeout(() => {
      clickedSection.current = null
    }, 400) // Animation duration
  }


  const skills = [
    { name: "PHP", icon: Code, category: "Backend" },
    { name: "Laravel", icon: Server, category: "Framework" },
    { name: "Filament", icon: Layers, category: "Admin Panel" },
    { name: "Vue.js", icon: Code, category: "Frontend" },
    { name: "React", icon: Code, category: "Frontend" },
    { name: "JavaScript", icon: Code, category: "Language" },
    { name: "MySQL", icon: Database, category: "Database" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
  ]

  const projects = [
    {
      title: "Edu Plus",
      description:
        "Full-stack e-commerce solution built with Laravel and Vue.js featuring payment integration and admin dashboard",
      tech: ["Laravel", "Vue.js", "MySQL"],
      image: "/project1.jpg",
      github: "#",
      live: "#",
      featured: true,
      status: "Live",
    },
    {
      title: "BrianFit",
      description:
        "International school management platform featuring a robust admin panel, integrated content management system (CMS), and automated mailing system. Enables administrators to efficiently manage school operations, publish updates",
      tech: ["Laravel", "Filament", "MySQL"],
      image: "/project2.jpg",
      github: "#",
      live: "#",
      featured: true,
      status: "Live",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, built using React and Laravel API with advanced project tracking features.",
      tech: ["React", "Laravel API", "WebSockets", "Tailwind CSS"],
      image: "/project3.jpg",
      github: "#",
      live: "#",
      featured: false,
      status: "Development",
    },
    {
      title: "Restaurant Booking System",
      description:
        "Online reservation system for restaurants with table management, customer notifications, and comprehensive analytics dashboard.",
      tech: ["PHP", "Vue.js", "MySQL", "Bootstrap"],
      image: "/project1.jpg",
      github: "#",
      live: "#",
      featured: false,
      status: "Live",
    },
    {
      title: "Content Management System",
      description:
        "Custom CMS built with Laravel and Filament, featuring role-based permissions, media management, and advanced SEO optimization tools.",
      tech: ["Laravel", "Filament", "MySQL", "Redis"],
      image: "/project2.jpg",
      github: "#",
      live: "#",
      featured: false,
      status: "Live",
    },
    {
      title: "Real Estate Portal",
      description:
        "Property listing platform with advanced search, virtual tours, agent management system, and integrated payment processing.",
      tech: ["Laravel", "React", "PostgreSQL", "AWS S3"],
      image: "/project3.jpg",
      github: "#",
      live: "#",
      featured: false,
      status: "Live",
    },
  ]

  const experience = [

    {
      title: "PHP Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description:
        "Developed custom web applications and e-commerce platforms. Specialized in Laravel framework and MySQL database optimization with focus on performance.",
      achievements: ["Built 20+ web applications", "Optimized database queries", "Reduced load times by 60%"],
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description:
        "Built responsive websites and web applications using PHP, JavaScript, and modern CSS frameworks with emphasis on user experience.",
      achievements: ["Completed 30+ projects", "Learned modern frameworks", "Improved code quality"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/10">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 dark:bg-background/80">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            <div className="font-bold text-lg sm:text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {[
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "experience", label: "Experience" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-md font-medium transition-colors duration-200 relative
            hover:text-primary
            ${activeSection === item.id ? "text-primary" : ""}
          `}
                >
                  {item.label}
                  {(activeSection === item.id || clickedSection.current === item.id) && (
                    <span
                      className={`absolute left-0 -bottom-1 w-full h-0.5 bg-primary rounded-full transition-all duration-300
                ${clickedSection.current === item.id ? "animate-nav-underline" : ""}
              `}
                    />
                  )}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex text-xs sm:text-sm"
                asChild
              >
                <a
                  href="/yellkhaingdevresume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Resume
                </a>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-8 w-8 sm:h-9 sm:w-9"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t bg-background/95 backdrop-blur-md dark:bg-background/95">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#about" className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                  About
                </a>
                <a href="#skills" className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                  Skills
                </a>
                <a
                  href="#projects"
                  className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#experience"
                  className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  Experience
                </a>
                <a href="#contact" className="block px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                  Contact
                </a>
                <div className="px-3 py-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-sm"
                    asChild
                  >
                    <a
                      href="/yellkhaingdevresume.pdf" // Place your resume in the public folder with this name
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="container mx-auto text-center relative max-w-7xl">
          <div className="max-w-5xl mx-auto">
            <Avatar className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto mb-6 sm:mb-8">
              <AvatarImage src="/profile.jfif" alt="John Developer" />
              <AvatarFallback className="text-lg sm:text-2xl md:text-3xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
              </AvatarFallback>
            </Avatar>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent leading-tight">
              Full Stack Web Developer
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
              Passionate about creating robust web applications with{" "}
              <span className="text-primary font-semibold">PHP</span>,{" "}
              <span className="text-primary font-semibold">Laravel</span>, and modern JavaScript frameworks. Specialized
              in building scalable solutions and beautiful user interfaces that drive business growth.
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 px-2">
              <Badge
                variant="secondary"
                className="text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 bg-primary/10 text-primary border-primary/20 dark:bg-primary/20 dark:text-primary"
              >
                <Server className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Laravel Expert
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 bg-primary/10 text-primary border-primary/20 dark:bg-primary/20 dark:text-primary"
              >
                <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                React & Vue.js
              </Badge>
              <Badge
                variant="secondary"
                className="text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 bg-primary/10 text-primary border-primary/20 dark:bg-primary/20 dark:text-primary"
              >
                <Layers className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Filament Admin
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-2">
              <Button size="lg" className="group w-full sm:w-auto" asChild>
                <a href="mailto:kwonfsdev95@gmail.com">
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group w-full sm:w-auto" asChild>
                <a href="https://github.com/ykmss" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">About Me</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Crafting digital experiences with passion and precision
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over{" "}
                <span className="text-primary font-semibold">2 years of experience</span> building web applications that
                make a difference. I specialize in PHP and Laravel for backend development, and React/Vue.js for
                creating dynamic, responsive user interfaces.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                My expertise includes developing enterprise-level applications, e-commerce platforms, and custom CMS
                solutions. I'm particularly skilled with <span className="text-primary font-semibold">Filament</span>{" "}
                for creating powerful admin panels and dashboards that streamline business operations.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I believe in writing clean, maintainable code and following best practices to ensure scalable and secure
                applications. My goal is to transform complex business requirements into elegant, user-friendly
                solutions.
              </p>

              <div className="flex flex-wrap gap-4 sm:gap-6 pt-2 sm:pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Yangon, Myanmar</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Available for freelance</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Coffee className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Always learning</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 order-1 lg:order-2">
              <Card className="text-center hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40 dark:hover:shadow-primary/5">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">10+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 mx-auto mt-1 sm:mt-2 text-primary/60" />
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40 dark:hover:shadow-primary/5">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">2+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 mx-auto mt-1 sm:mt-2 text-primary/60" />
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40 dark:hover:shadow-primary/5">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">10+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Happy Clients</div>
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 mx-auto mt-1 sm:mt-2 text-primary/60" />
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40 dark:hover:shadow-primary/5">
                <CardContent className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">24/7</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Support</div>
                  <Coffee className="w-3 h-3 sm:w-4 sm:h-4 mx-auto mt-1 sm:mt-2 text-primary/60" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6 bg-muted/30 dark:bg-muted/10"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Skills & Technologies</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              The tools and technologies I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 group border-primary/20 hover:border-primary/40 hover:-translate-y-1 dark:hover:shadow-primary/5"
              >
                <CardContent className="p-4 sm:p-6">
                  <skill.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-3 sm:mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors text-sm sm:text-base">
                    {skill.name}
                  </h3>
                  <Badge variant="outline" className="text-xs border-primary/30">
                    {skill.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Featured Projects</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Here are some of my recent projects showcasing my skills in full-stack development
            </p>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-primary/20 hover:border-primary/40 dark:hover:shadow-primary/5"
                >
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/60 dark:from-muted/20 dark:to-muted/40 relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <Badge className={project.status === "Live" ? "bg-green-500 text-xs" : "bg-orange-500 text-xs"}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 group-hover:text-primary transition-colors text-lg sm:text-xl">
                      <span>{project.title}</span>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary dark:bg-primary/20 self-start sm:self-center"
                      >
                        Featured
                      </Badge>
                    </CardTitle>
                    <CardDescription className="leading-relaxed line-clamp-2 text-sm sm:text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-muted hover:bg-primary/10 transition-colors dark:bg-muted/50 dark:hover:bg-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      {/* <Button variant="outline" size="sm" className="flex-1 group/btn text-sm" asChild>
                        <a href={project.github}>
                          <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover/btn:scale-110 transition-transform" />
                          Code
                        </a>
                      </Button> */}
                      <Button size="sm" className="flex-1 group/btn text-sm" asChild>
                        <a href={project.live}>
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover/btn:scale-110 transition-transform" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* All Projects Grid */}
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">All Projects</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              A comprehensive showcase of my development work
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 group border-primary/20 hover:border-primary/40 hover:-translate-y-1 dark:hover:shadow-primary/5"
              >
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/60 dark:from-muted/20 dark:to-muted/40 relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                    <Badge className={project.status === "Live" ? "bg-green-500 text-xs" : "bg-orange-500 text-xs"}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-4">
                  <CardTitle className="text-base sm:text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 p-3 sm:p-4">
                  <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs bg-muted dark:bg-muted/50">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs border-primary/30">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    {/* <Button variant="outline" size="sm" className="flex-1 group/btn text-xs sm:text-sm" asChild>
                      <a href={project.github}>
                        <Github className="w-3 h-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </a>
                    </Button> */}
                    <Button size="sm" className="flex-1 group/btn text-xs sm:text-sm" asChild>
                      <a href={project.live}>
                        <ExternalLink className="w-3 h-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6 bg-muted/30 dark:bg-muted/10"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Work Experience</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              My professional journey and key achievements
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experience.map((job, index) => (
              <Card
                key={index}
                className="mb-6 sm:mb-8 hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40 dark:hover:shadow-primary/5"
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg sm:text-xl mb-1 sm:mb-2">{job.title}</CardTitle>
                        <CardDescription className="text-base sm:text-lg font-medium text-primary">
                          {job.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="self-start border-primary/30 text-xs sm:text-sm">
                        {job.period}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                    {job.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="text-xs sm:text-sm text-muted-foreground flex items-start"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1.5"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6">
        <div className="container mx-auto text-center max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Let's Work Together</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed px-2">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
              ideas to life and create something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2">
              <Button size="lg" className="group w-full sm:w-auto" asChild>
                <a href="mailto:kwonfsdev95@gmail.com">
                  <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">kwonfsdev95@gmail.com</span>
                  <span className="sm:hidden">Email Me</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group w-full sm:w-auto" asChild>
                <a href="https://www.linkedin.com/in/yellkhaing-dev/">
                  <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group w-full sm:w-auto" asChild>
                <a href="https://github.com/ykmss">
                  <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40 dark:hover:shadow-primary/5">
                <CardContent className="p-4 sm:p-6">
                  <a href="mailto:kwonfsdev95@gmail.com">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-primary" />
                    <h3 className="font-semibold mb-1 text-sm sm:text-base">Email</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground break-all">kwonfsdev95@gmail.com</p>
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40 dark:hover:shadow-primary/5">
                <CardContent className="p-4 sm:p-6">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-primary" />
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Location</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Yangon, Myanmar</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40 dark:hover:shadow-primary/5">
                <CardContent className="p-4 sm:p-6">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-primary" />
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Availability</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Open to projects</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-3 sm:px-4 md:px-6 border-t bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto text-center text-muted-foreground max-w-7xl">
          <p className="text-xs sm:text-sm">
            &copy; 2025 Yell Khaing (Full Stack Developer). All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
