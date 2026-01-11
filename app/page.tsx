"use client";

import React, { useState } from 'react';
import { Menu, X, ChevronRight, GraduationCap, FileText, BookOpen, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

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

const departments: Department[] = [
  {
    id: 'comp-sc',
    name: 'Computer Science',
    code: 'CSC',
    description: 'Advanced computing and software development program preparing students for the digital economy.',
    duration: '3 Years',
    requirements: ['ND/HND in Computer Science or related field', 'Minimum of Lower Credit']
  },
  {
    id: 'accounting',
    name: 'Accounting',
    code: 'ACC',
    description: 'Professional accounting program aligned with international standards and certification bodies.',
    duration: '3 Years',
    requirements: ['ND/HND in Accounting or related field', 'Minimum of Lower Credit']
  },
  {
    id: 'history',
    name: 'History & International Studies',
    code: 'HIS',
    description: 'Comprehensive study of historical events and contemporary international relations.',
    duration: '3 Years',
    requirements: ['ND/HND in Arts or Social Sciences', 'Minimum of Lower Credit']
  },
  {
    id: 'business-admin',
    name: 'Business Administration',
    code: 'BUS',
    description: 'Strategic business management and entrepreneurship development program.',
    duration: '3 Years',
    requirements: ['ND/HND in Business or related field', 'Minimum of Lower Credit']
  },
  {
    id: 'economics',
    name: 'Economics',
    code: 'ECO',
    description: 'Economic theory and applied economics for policy analysis and development.',
    duration: '3 Years',
    requirements: ['ND/HND in Economics or Social Sciences', 'Minimum of Lower Credit']
  },
  {
    id: 'public-admin',
    name: 'Public Administration',
    code: 'PAD',
    description: 'Governance, policy-making, and public sector management program.',
    duration: '3 Years',
    requirements: ['ND/HND in Public Administration or related field', 'Minimum of Lower Credit']
  }
];

const admissionRequirements: Requirement[] = [
  {
    title: 'Academic Qualifications',
    items: [
      'Possession of a related Bachelor\'s degree from a recognized institution',
      'Completion of ND1 and ND2 with minimum of Lower Credit',
      'Completion of HND1 and HND2 with minimum of Lower Credit',
      'Statement of Result from previous institution'
    ]
  },
  {
    title: 'NYSC Requirements',
    items: [
      'Evidence of NYSC discharge certificate',
      'Certificate of exemption (where applicable)',
      'Valid reasons for exemption must be provided'
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
    url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
    alt: 'University Building',
    caption: 'Main Administrative Block'
  },
  {
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
    alt: 'Library',
    caption: 'University Library Complex'
  },
  {
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
    alt: 'Lecture Hall',
    caption: 'Modern Lecture Halls'
  },
  {
    url: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop',
    alt: 'Students',
    caption: 'Campus Life'
  },
  {
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
    alt: 'Graduation',
    caption: 'Graduation Ceremony'
  },
  {
    url: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=600&fit=crop',
    alt: 'Campus',
    caption: 'Beautiful Campus Grounds'
  }
];

// Components
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">FULSUP</h1>
              <p className="text-xs text-gray-600">Federal University Lokoja</p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
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
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                {link.label}
              </a>
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
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop"
          alt="University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Special Undergraduate<br />Program
        </h1>
        <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
          Advance your career with Federal University Lokoja's Special Undergraduate Program
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#requirements"
            className="px-8 py-4 bg-white text-green-800 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200 flex items-center gap-2 shadow-lg"
          >
            View Requirements
            <ChevronRight className="w-5 h-5" />
          </a>
          <a
            href="#departments"
            className="px-8 py-4 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-600 transition-all duration-200 border-2 border-white/30"
          >
            Explore Programs
          </a>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About FULSUP</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop"
              alt="University"
              className="rounded-lg shadow-xl"
              fill
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Federal University Lokoja Special Undergraduate Program (FULSUP) is designed for 
              professionals and graduates seeking to advance their academic credentials and career prospects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our program offers a streamlined pathway for ND/HND holders and degree graduates to obtain 
              a Bachelor's degree from a prestigious federal institution, combining academic excellence 
              with practical industry experience.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <p className="text-3xl font-bold text-green-600 mb-2">3 Years</p>
                <p className="text-gray-600">Program Duration</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <p className="text-3xl font-bold text-green-600 mb-2">6+</p>
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

  return (
    <section id="departments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Departments</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Choose from our wide range of academic programs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div
              key={dept.id}
              onClick={() => setSelectedDept(dept)}
              className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-green-100 hover:border-green-300"
            >
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
              <p className="text-sm text-green-600 font-semibold mb-3">{dept.code} • {dept.duration}</p>
              <p className="text-gray-600 mb-4">{dept.description}</p>
              <button className="text-green-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {selectedDept && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedDept(null)}>
            <div className="bg-white rounded-xl max-w-2xl w-full p-8 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedDept.name}</h3>
                  <p className="text-green-600 font-semibold">{selectedDept.code} • {selectedDept.duration}</p>
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
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
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
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Everything you need to apply for FULSUP</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {admissionRequirements.map((req, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{req.title}</h3>
              <ul className="space-y-3">
                {req.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="text-green-100 mb-6">Ensure you have all required documents before starting your application</p>
          <button className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors">
            Start Application
          </button>
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
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Explore our beautiful campus and facilities</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
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
          <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Get in touch with our admissions team</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">Federal University Lokoja<br />Lokoja, Kogi State<br />Nigeria</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+234 XXX XXX XXXX<br />+234 XXX XXX XXXX</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-green-600" />
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
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">FULSUP</h3>
              </div>
            </div>
            <p className="text-gray-400">Empowering the next generation of leaders through quality education.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-green-400 transition-colors">About</a></li>
              <li><a href="#departments" className="hover:text-green-400 transition-colors">Departments</a></li>
              <li><a href="#requirements" className="hover:text-green-400 transition-colors">Requirements</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">Application Portal</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Twitter</a></li>
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