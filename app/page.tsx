"use client";

import React, { useState } from 'react';
import { Menu, X, ChevronRight, GraduationCap, FileText, BookOpen, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Types
interface NavLink {
  label: string;
  href: string;
}

interface Department {
  id: string;
  name: string;
  code: string;
  description: string;
  duration: string;
  requirements: string[];
}

interface Faculty {
  id: string;
  name: string;
  departments: Department[];
}

interface Requirement {
  title: string;
  items: string[];
}

interface GalleryImage {
  url: string;
  alt: string;
  caption: string;
}

// Data
const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Departments', href: '#departments' },
  { label: 'Requirements', href: '#requirements' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const faculties: Faculty[] = [
  {
    id: 'management',
    name: 'Faculty of Management Sciences',
    departments: [
      {
        id: 'accounting',
        name: 'Accounting',
        code: 'ACC',
        description: 'Professional accounting program aligned with international standards and certification bodies.',
        duration: '2 Years',
        requirements: ['HND in Accounting or related field', 'Minimum of Lower Credit']
      },
      {
        id: 'business-admin',
        name: 'Business Administration',
        code: 'BUS',
        description: 'Strategic business management and entrepreneurship development program.',
        duration: '2 Years',
        requirements: ['HND in Business or related field', 'Minimum of Lower Credit']
      },
      {
        id: 'banking-finance',
        name: 'Banking & Finance',
        code: 'BNF',
        description: 'Comprehensive banking operations and financial management program.',
        duration: '2 Years',
        requirements: ['HND in Banking, Finance or related field', 'Minimum of Lower Credit']
      },
      {
        id: 'public-admin',
        name: 'Public Administration',
        code: 'PAD',
        description: 'Governance, policy-making, and public sector management program.',
        duration: '2 Years',
        requirements: ['HND in Public Administration or related field', 'Minimum of Lower Credit']
      },
      {
        id: 'finance',
        name: 'Finance',
        code: 'FIN',
        description: 'Advanced financial analysis, investment, and corporate finance program.',
        duration: '2 Years',
        requirements: ['HND in Finance or related field', 'Minimum of Lower Credit']
      }
    ]
  },
  {
    id: 'social-sciences',
    name: 'Faculty of Social Sciences',
    departments: [
      {
        id: 'economics',
        name: 'Economics',
        code: 'ECO',
        description: 'Economic theory and applied economics for policy analysis and development.',
        duration: '2 Years',
        requirements: ['HND in Economics or Social Sciences', 'Minimum of Lower Credit']
      },
      {
        id: 'political-science',
        name: 'Political Science',
        code: 'POL',
        description: 'Study of political systems, governance, and international relations.',
        duration: '2 Years',
        requirements: ['HND in Political Science or Social Sciences', 'Minimum of Lower Credit']
      },
      {
        id: 'sociology',
        name: 'Sociology',
        code: 'SOC',
        description: 'Understanding social behavior, institutions, and societal development.',
        duration: '2 Years',
        requirements: ['HND in Sociology or Social Sciences', 'Minimum of Lower Credit']
      },
      {
        id: 'mass-comm',
        name: 'Mass Communication',
        code: 'MCM',
        description: 'Media studies, journalism, and strategic communication program.',
        duration: '2 Years',
        requirements: ['HND in Mass Communication or related field', 'Minimum of Lower Credit']
      },
      {
        id: 'library-info',
        name: 'Library & Information Science',
        code: 'LIS',
        description: 'Information management, archival science, and digital library systems.',
        duration: '2 Years',
        requirements: ['HND in Library Science or related field', 'Minimum of Lower Credit']
      }
    ]
  },
  {
    id: 'arts',
    name: 'Faculty of Arts',
    departments: [
      {
        id: 'english',
        name: 'English & Literary Studies',
        code: 'ENG',
        description: 'Advanced study of English language, literature, and critical theory.',
        duration: '2 Years',
        requirements: ['HND in English or related field', 'Minimum of Lower Credit']
      },
      {
        id: 'history',
        name: 'History & International Studies',
        code: 'HIS',
        description: 'Comprehensive study of historical events and contemporary international relations.',
        duration: '2 Years',
        requirements: ['HND in History or Arts/Social Sciences', 'Minimum of Lower Credit']
      }
    ]
  },
  {
    id: 'science',
    name: 'Faculty of Science',
    departments: [
      {
        id: 'biology',
        name: 'Biology',
        code: 'BIO',
        description: 'Study of living organisms, ecology, and biological systems.',
        duration: '2 Years',
        requirements: ['HND in Biology or related Science field', 'Minimum of Lower Credit']
      },
      {
        id: 'microbiology',
        name: 'Microbiology',
        code: 'MCB',
        description: 'Study of microorganisms and their applications in various fields.',
        duration: '2 Years',
        requirements: ['HND in Microbiology or related Science field', 'Minimum of Lower Credit']
      },
      {
        id: 'chemistry',
        name: 'Chemistry',
        code: 'CHM',
        description: 'Advanced chemical principles and laboratory techniques.',
        duration: '2 Years',
        requirements: ['HND in Chemistry or related Science field', 'Minimum of Lower Credit']
      },
      {
        id: 'computer-science',
        name: 'Computer Science',
        code: 'CSC',
        description: 'Advanced computing and software development program preparing students for the digital economy.',
        duration: '2 Years',
        requirements: ['HND in Computer Science or related field', 'Minimum of Lower Credit']
      },
      {
        id: 'geography',
        name: 'Geography',
        code: 'GEO',
        description: 'Physical and human geography, GIS, and environmental studies.',
        duration: '2 Years',
        requirements: ['HND in Geography or related field', 'Minimum of Lower Credit']
      },
      {
        id: 'geology',
        name: 'Geology',
        code: 'GLY',
        description: 'Earth sciences, mineral resources, and geological processes.',
        duration: '2 Years',
        requirements: ['HND in Geology or related Science field', 'Minimum of Lower Credit']
      },
      {
        id: 'mathematics',
        name: 'Mathematics',
        code: 'MTH',
        description: 'Pure and applied mathematics for analytical and computational skills.',
        duration: '2 Years',
        requirements: ['HND in Mathematics or related field', 'Minimum of Lower Credit']
      },
      {
        id: 'physics',
        name: 'Physics',
        code: 'PHY',
        description: 'Fundamental physics principles and modern applications.',
        duration: '2 Years',
        requirements: ['HND in Physics or related Science field', 'Minimum of Lower Credit']
      },
      {
        id: 'statistics',
        name: 'Statistics',
        code: 'STA',
        description: 'Statistical analysis, data science, and research methodology.',
        duration: '2 Years',
        requirements: ['HND in Statistics or related field', 'Minimum of Lower Credit']
      }
    ]
  }
];

const departments: Department[] = faculties.flatMap(faculty => faculty.departments);

const admissionRequirements: Requirement[] = [
  {
    title: 'Academic Qualifications',
    items: [
      'Possession of a related Bachelor\'s degree from a recognized institution',
      'Completion of HND with minimum of Lower Credit',
      'Statement of Result from previous institution'
    ]
  },
  {
    title: 'NYSC Requirements',
    items: [
      'Evidence of NYSC discharge certificate',
      'Certificate of exemption (where applicable)'
    ]
  },
  {
    title: 'Supporting Documents',
    items: [
      'SSCE Certificate (WAEC, NECO, or equivalent)',
      'Local Government Area (LGA) Certificate of Origin',
      'Birth Certificate or Age Declaration',
      'Passport photographs (recent)',
      'Medical fitness certificate'
    ]
  }
];

const galleryImages: GalleryImage[] = [
  {
    url: 'senate.jpeg',
    alt: 'Senate Building',
    caption: 'Senate Building'
  },
  {
    url: 'library.jpeg',
    alt: 'Library',
    caption: 'University Library Complex'
  },
  {
    url: 'entrance.jpeg',
    alt: 'Entrance Direction',
    caption: 'Entrance Direction'
  },
  {
    url: 'direction.jpeg',
    alt: 'Image direction',
    caption: 'Image direction'
  },
  {
    url: 'graduants-1.jpeg',
    alt: 'Graduation Ceremony-1',
    caption: 'Graduation Ceremony'
  },
  {
    url: 'graduants-2.jpeg',
    alt: 'Graduation Ceremony-2',
    caption: 'Graduation Ceremony-2'
  }
];

// Components
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 relative">
            <Image
              src={"/images/ful-logo.png"}
              width={50}
              height={50}
              alt='School logo'
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">FULSUDP</h1>
              <p className="text-xs text-gray-600">Federal University Lokoja</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#56698f] transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 hover:text-[#56698f] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/entrance.jpeg"
          alt="University Campus"
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#56698f]/90 to-[#56698f]/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Special Undergraduate<br />Degree Program
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Advance your career with Federal University Lokoja&apos;s Special Undergraduate Degree Program
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#requirements"
            className="px-8 py-4 bg-white text-[#56698f] rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 shadow-lg"
          >
            View Requirements
            <ChevronRight className="w-5 h-5" />
          </Link>
          <Link
            href="#departments"
            className="px-8 py-4 bg-[#56698f]/80 text-white rounded-lg font-semibold hover:bg-[#56698f] transition-all duration-200 border-2 border-white/30"
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About FULSUDP</h2>
          <div className="w-24 h-1 bg-[#56698f] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/senate.jpeg"
              alt="University"
              className="w-full h-full object-cover"
              fill
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Federal University Lokoja Special Undergraduate Degree Program (FULSUDP) is designed for 
              professionals and graduates seeking to advance their academic credentials and career prospects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our program offers a streamlined pathway for HND holders and degree graduates to obtain 
              a Bachelor&apos;s degree from a prestigious federal institution, combining academic excellence 
              with practical industry experience.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <p className="text-3xl font-bold text-[#56698f] mb-2">2 Years</p>
                <p className="text-gray-600">Program Duration</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <p className="text-3xl font-bold text-[#56698f] mb-2">27</p>
                <p className="text-gray-600">Departments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Departments: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const [selectedFaculty, setSelectedFaculty] = useState<string>('all');

  const filteredDepartments = selectedFaculty === 'all' 
    ? departments 
    : faculties.find(f => f.id === selectedFaculty)?.departments || [];

  return (
    <section id="departments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Departments</h2>
          <div className="w-24 h-1 bg-[#56698f] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Choose from our wide range of academic programs across four faculties</p>
        </div>

        {/* Faculty Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedFaculty('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedFaculty === 'all'
                ? 'bg-[#56698f] text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Faculties
          </button>
          {faculties.map((faculty) => (
            <button
              key={faculty.id}
              onClick={() => setSelectedFaculty(faculty.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedFaculty === faculty.id
                  ? 'bg-[#56698f] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {faculty.name.replace('Faculty of ', '')}
            </button>
          ))}
        </div>

        {/* Faculty Sections */}
        {selectedFaculty === 'all' ? (
          <div className="space-y-16">
            {faculties.map((faculty) => (
              <div key={faculty.id}>
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{faculty.name}</h3>
                  <div className="w-16 h-1 bg-[#56698f]"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {faculty.departments.map((dept) => (
                    <div
                      key={dept.id}
                      onClick={() => setSelectedDept(dept)}
                      className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100 hover:border-[#56698f]"
                    >
                      <div className="w-12 h-12 bg-[#56698f] rounded-lg flex items-center justify-center mb-4">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h4>
                      <p className="text-sm text-[#56698f] font-semibold mb-3">{dept.code} • {dept.duration}</p>
                      <p className="text-gray-600 mb-4 line-clamp-2">{dept.description}</p>
                      <button className="text-[#56698f] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        Learn More
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDepartments.map((dept) => (
              <div
                key={dept.id}
                onClick={() => setSelectedDept(dept)}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-blue-100 hover:border-[#56698f]"
              >
                <div className="w-12 h-12 bg-[#56698f] rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h4>
                <p className="text-sm text-[#56698f] font-semibold mb-3">{dept.code} • {dept.duration}</p>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <button className="text-[#56698f] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {selectedDept && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedDept(null)}>
            <div className="bg-white rounded-xl max-w-2xl w-full p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedDept.name}</h3>
                  <p className="text-[#56698f] font-semibold">{selectedDept.code} • {selectedDept.duration}</p>
                </div>
                <button onClick={() => setSelectedDept(null)} className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-lg text-gray-700 mb-6">{selectedDept.description}</p>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Specific Requirements:</h4>
                <ul className="space-y-2">
                  {selectedDept.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#56698f] shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Requirements: React.FC = () => {
  return (
    <section id="requirements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Requirements</h2>
          <div className="w-24 h-1 bg-[#56698f] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Everything you need to apply for FULSUDP</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {admissionRequirements.map((req, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-[#56698f]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{req.title}</h3>
              <ul className="space-y-3">
                {req.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#56698f] shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#56698f] rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="text-blue-100 mb-6">Ensure you have all required documents before starting your application</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://ug.fulokoja.edu.ng/spug/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#56698f] rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Start Application
            </Link>
            <Link 
              href="https://ug.fulokoja.edu.ng/spug/biodata"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#56698f]/80 text-white rounded-lg font-semibold hover:bg-[#56698f]/90 transition-colors border-2 border-white/30 inline-block"
            >
              Student Portal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Gallery</h2>
          <div className="w-24 h-1 bg-[#56698f] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Explore our beautiful campus and facilities</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl h-64 transition-all duration-300">
              <Image
                src={`/images/${image.url}`}
                alt={image.alt}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold p-6">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-[#56698f] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Get in touch with our admissions team</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-[#56698f]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">Federal University Lokoja<br />Lokoja, Kogi State<br />Nigeria</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-[#56698f]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+234 707 319 9972<br />+234 707 331 7070</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-[#56698f]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">admissions@fulokoja.edu.ng<br />info@fulokoja.edu.ng</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-linear-to-br from-[#56698f] to-[#3d4f6b] rounded-full flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">FULSUDP</h3>
              </div>
            </div>
            <p className="text-gray-400">Empowering the next generation of leaders through quality education.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#about" className="hover:text-[#56698f] transition-colors">About</Link></li>
              <li><Link href="#departments" className="hover:text-[#56698f] transition-colors">Departments</Link></li>
              <li><Link href="#requirements" className="hover:text-[#56698f] transition-colors">Requirements</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link 
                  href="https://ug.fulokoja.edu.ng/spug/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#56698f] transition-colors"
                >
                  Application Portal
                </Link>
              </li>
              <li>
                <Link 
                  href="https://ug.fulokoja.edu.ng/spug/biodata" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#56698f] transition-colors"
                >
                  Student Portal
                </Link>
              </li>
              <li><Link href="#requirements" className="hover:text-[#56698f] transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#contact" className="hover:text-[#56698f] transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-[#56698f] transition-colors">Facebook</Link></li>
              <li><Link href="#" className="hover:text-[#56698f] transition-colors">Twitter</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Federal University Lokoja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Departments />
      <Requirements />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;