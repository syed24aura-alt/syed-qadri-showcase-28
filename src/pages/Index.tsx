import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, FileText, Code, Palette, Globe, User, Briefcase, GraduationCap, Mail, Check } from "lucide-react";
const Index = () => {
  const [showSocialButtons, setShowSocialButtons] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    const isMobile = window.innerWidth <= 768;

    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      
      if (isMobile) {
        // On mobile: show only while actively scrolling
        setShowSocialButtons(scrolled);
        
        // Clear existing timer
        clearTimeout(scrollTimer);
        
        // Hide buttons after scrolling stops
        scrollTimer = setTimeout(() => {
          setShowSocialButtons(false);
        }, 1000);
      } else {
        // On desktop: keep existing behavior
        setShowSocialButtons(scrolled);
      }

      // Check which sections are visible
      const sections = document.querySelectorAll('.fade-in-section');
      const newVisibleSections = new Set<string>();
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          const sectionId = section.getAttribute('data-section');
          if (sectionId) {
            newVisibleSections.add(sectionId);
          }
        }
      });
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('qadrisyedd@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };
  const skills = [{
    name: "Python",
    icon: Code,
    level: 100
  }, {
    name: "Microsoft Office",
    icon: FileText,
    level: 100
  }, {
    name: "HTML/CSS",
    icon: Palette,
    level: 90
  }, {
    name: "Web Design",
    icon: Palette,
    level: 90
  }, {
    name: "JavaScript",
    icon: Code,
    level: 90
  }, {
    name: "Node.js",
    icon: Code,
    level: 90
  }, {
    name: "Power BI",
    icon: Globe,
    level: 80
  }, {
    name: "Tableau",
    icon: Globe,
    level: 80
  }, {
    name: "MySQL",
    icon: Code,
    level: 80
  }, {
    name: "TypeScript",
    icon: Code,
    level: 80
  }, {
    name: "React",
    icon: Code,
    level: 75
  }, {
    name: "Git",
    icon: Code,
    level: 70
  }];
  const education = [{
    title: "Our Lady of Mount Carmel",
    degree: "Highschool Diploma, OSSD",
    period: "2021 - 2025",
    description: "Graduated with Honours",
    icon: GraduationCap
  }];
  const experiences = [{
    title: "Personal Projects and Online Courses",
    organization: "Self-Directed Learning",
    period: "2020 - present",
    description: "Continuously expanding technical skills through hands-on projects and comprehensive online coursework.",
    icon: Code
  }, {
    title: "Freelance Developer",
    organization: "Python & Web Developer",
    period: "2023 - present",
    description: "Created custom projects in Python and completed small web development tasks using HTML and CSS.",
    icon: Code
  }, {
    title: "Merchandiser Co-op",
    organization: "Shoppers Drug Mart",
    period: "Sept 2023 – July 2024",
    description: "Provided excellent customer service by assisting shoppers and addressing inquiries, while managing inventory, restocking shelves, and maintaining merchandising standards. Organized the backroom, monitored product quality and expiry dates, and collaborated with team members to ensure smooth store operations and efficient task completion.",
    icon: Briefcase
  }, {
    title: "Lead Coordinator",
    organization: "MNN Volunteer",
    period: "Jan 2023 - Dec 2023",
    description: "Led and managed community events by coordinating logistics, overseeing volunteers, and ensuring smooth execution. Directed outreach efforts to boost engagement and managed budgets with careful financial oversight, demonstrating strong leadership, organization, and project management skills.",
    icon: User
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold rainbow-text mb-8 lg:text-7xl">
            Syed Qadri
          </h1>
          
          <div className="mt-8 animate-fade-in">
            <p className="font-bold text-gray-300 text-base">Computer Science Undergraduate | Aspiring Programmer & Data Analyst  </p>
          </div>
        </div>

        {/* Floating Social Buttons */}
        <div className={`fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 transition-all duration-500 ${showSocialButtons ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <Button variant="outline" size="icon" className="social-button w-14 h-14" onClick={() => window.open('https://www.linkedin.com/in/qadri-syed/', '_blank')}>
            <Linkedin className="w-6 h-6 golden-icon" />
          </Button>
          <Button variant="outline" size="icon" className="social-button w-14 h-14" onClick={() => window.open('https://github.com/qadrisyedd', '_blank')}>
            <Github className="w-6 h-6 golden-icon" />
          </Button>
          <Button variant="outline" size="icon" className="social-button w-14 h-14" onClick={() => window.open('https://drive.google.com/file/d/1jWNYyh5000SAlwZWq1pIhyw2WCCXSsVP/view?usp=sharing', '_blank')}>
            <FileText className="w-6 h-6 golden-icon" />
          </Button>
        </div>
      </section>

      {/* About Me Section */}
      <section className={`py-20 px-4 fade-in-section ${visibleSections.has('about') ? 'visible' : ''}`} data-section="about">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <User className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          
          <Card className="bg-card/30 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm Syed Qadri, a developer, programmer, freelancer, and data analyst pursuing a Computer Science degree. 
                I'm passionate about technology and continuously expanding my skills. I'm proficient in Python and experienced 
                with HTML/CSS, with growing knowledge of SQL, Tableau, and Power BI.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-20 px-4 fade-in-section ${visibleSections.has('skills') ? 'visible' : ''}`} data-section="skills">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => <div key={skill.name} className="skill-card" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-primary/60 h-2 rounded-full transition-all duration-1000" style={{
                width: visibleSections.has('skills') ? `${skill.level}%` : '0%',
                transitionDelay: `${index * 150}ms`
              }} />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {skill.level}% Proficiency
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className={`py-20 px-4 fade-in-section ${visibleSections.has('education') ? 'visible' : ''}`} data-section="education">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-6">
            {education.map((edu, index) => <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 transition-all duration-300 hover:bg-card/50" style={{
            animationDelay: `${index * 200}ms`
          }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <edu.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{edu.title}</h3>
                      <p className="text-primary font-medium mb-1">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                      <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={`py-20 px-4 fade-in-section ${visibleSections.has('experience') ? 'visible' : ''}`} data-section="experience">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>
          
          <div className="space-y-6">
            {experiences.map((experience, index) => <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 transition-all duration-300 hover:bg-card/50" style={{
            animationDelay: `${index * 200}ms`
          }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <experience.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{experience.title}</h3>
                      <p className="text-primary font-medium mb-1">{experience.organization}</p>
                      <p className="text-sm text-muted-foreground mb-3">{experience.period}</p>
                      <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <p className="text-muted-foreground">
              Let's Connect!
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={copyEmailToClipboard}
              className="h-8 px-3 bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/50 hover:border-primary/50 transition-all duration-300"
            >
              {emailCopied ? (
                <>
                  <Check className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-green-400">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Email</span>
                </>
              )}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Syed Qadri.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;
