"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

interface Slide {
  title: string;
  content: React.ReactNode;
  layout: 'title' | 'content' | 'split' | 'list' | 'code';
}

const slides: Slide[] = [
  {
    title: 'FULSUP',
    layout: 'title',
    content: (
      <div className="text-center space-y-6">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-green-800 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">F</span>
          </div>
          <h1 className="text-6xl font-bold text-green-700 mb-4">FULSUP</h1>
          <h2 className="text-3xl text-gray-700">Federal University Lokoja</h2>
          <h3 className="text-2xl text-gray-600 mt-2">Special Undergraduate Program</h3>
        </div>
        <div className="mt-12 text-xl text-gray-600">
          <p className="font-semibold">Web Application Development Project</p>
        </div>
        <div className="mt-16 text-lg text-gray-500">
          <p>Computer Science Department</p>
          <p className="mt-2">January 2026</p>
        </div>
      </div>
    )
  },
  {
    title: 'Development Team',
    layout: 'content',
    content: (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Project Team Members</h3>
          <p className="text-gray-600 text-lg">Computer Science Department - Group 3</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-green-50 to-white p-5 rounded-lg shadow-md border-l-4 border-green-600">
            <h4 className="text-lg font-bold text-gray-800">Amuruwaiye Fate</h4>
            <p className="text-green-600 font-semibold text-sm">SCI21CSC227</p>
            <p className="text-gray-600 text-sm mt-1">Team Lead & Project Manager</p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-white p-5 rounded-lg shadow-md border-l-4 border-blue-600">
            <h4 className="text-lg font-bold text-gray-800">Taiwo Nafisat</h4>
            <p className="text-blue-600 font-semibold text-sm">SCI21CSC234</p>
            <p className="text-gray-600 text-sm mt-1">Frontend Developer</p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-white p-5 rounded-lg shadow-md border-l-4 border-purple-600">
            <h4 className="text-lg font-bold text-gray-800">Ogbu Emmanuel Odeh</h4>
            <p className="text-purple-600 font-semibold text-sm">SCI21CSC251</p>
            <p className="text-gray-600 text-sm mt-1">UI/UX Designer</p>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-white p-5 rounded-lg shadow-md border-l-4 border-orange-600">
            <h4 className="text-lg font-bold text-gray-800">Sanni Omeiza Rufai</h4>
            <p className="text-orange-600 font-semibold text-sm">SCI21CSC236</p>
            <p className="text-gray-600 text-sm mt-1">Backend Specialist</p>
          </div>
          
          <div className="bg-gradient-to-r from-pink-50 to-white p-5 rounded-lg shadow-md border-l-4 border-pink-600">
            <h4 className="text-lg font-bold text-gray-800">Muhammed Ibrahim Musa</h4>
            <p className="text-pink-600 font-semibold text-sm">SCI21CSC246</p>
            <p className="text-gray-600 text-sm mt-1">Component Developer</p>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-white p-5 rounded-lg shadow-md border-l-4 border-indigo-600">
            <h4 className="text-lg font-bold text-gray-800">Obademi Victoria Oyiza</h4>
            <p className="text-indigo-600 font-semibold text-sm">SCI21CSC242</p>
            <p className="text-gray-600 text-sm mt-1">Component Developer</p>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-50 to-white p-5 rounded-lg shadow-md border-l-4 border-yellow-600">
            <h4 className="text-lg font-bold text-gray-800">Daniel Idris Idoko</h4>
            <p className="text-yellow-600 font-semibold text-sm">SCI21CSC247</p>
            <p className="text-gray-600 text-sm mt-1">QA Engineer</p>
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-white p-5 rounded-lg shadow-md border-l-4 border-red-600">
            <h4 className="text-lg font-bold text-gray-800">Abdulazeez Bello Suleiman</h4>
            <p className="text-red-600 font-semibold text-sm">SCI21CSC252</p>
            <p className="text-gray-600 text-sm mt-1">DevOps Engineer</p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Chapter 1: Introduction',
    layout: 'content',
    content: (
      <div className="space-y-6">
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
          <h3 className="text-2xl font-bold text-green-800 mb-3">Project Background</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Federal University Lokoja's Special Undergraduate Program (FULSUP) provides an 
            academic pathway for ND/HND holders and degree graduates to advance their 
            educational credentials through a centralized web platform.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-gray-800 mb-3">Problem Statement</h4>
            <p className="text-gray-700">
              FULSUP information was scattered across multiple channels, creating barriers 
              to enrollment and increasing administrative workload.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold text-gray-800 mb-3">Solution</h4>
            <p className="text-gray-700">
              A modern, responsive web application centralizing all program information with 
              intuitive navigation and comprehensive content.
            </p>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h4 className="text-xl font-bold text-blue-800 mb-3">Key Objectives</h4>
          <div className="grid grid-cols-2 gap-3 text-gray-700">
            <div>✓ Centralized information portal</div>
            <div>✓ Showcase 6 departments</div>
            <div>✓ Responsive design (mobile-first)</div>
            <div>✓ Modern tech implementation</div>
            <div>✓ Open-source collaboration</div>
            <div>✓ CI/CD deployment pipeline</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Project Scope',
    layout: 'content',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-600">
            <h3 className="text-2xl font-bold text-green-800 mb-4">✓ Inclusions</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Responsive web application with 6 sections</li>
              <li>• 6 department information pages</li>
              <li>• Comprehensive admission requirements</li>
              <li>• Campus gallery showcase</li>
              <li>• Contact information system</li>
              <li>• Mobile-first responsive design</li>
              <li>• Type-safe TypeScript implementation</li>
              <li>• GitHub version control</li>
              <li>• Vercel cloud deployment</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-2 border-orange-600">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">⚠ Exclusions (Future Phases)</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Online application submission</li>
              <li>• User authentication system</li>
              <li>• Backend database integration</li>
              <li>• Payment processing</li>
              <li>• Student dashboard portal</li>
              <li>• Admin content management panel</li>
              <li>• Email notification system</li>
              <li>• Document upload functionality</li>
              <li>• Application status tracking</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
          <h4 className="text-xl font-bold text-purple-800 mb-3">Project Significance</h4>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="font-bold text-gray-800 mb-1">For Students</p>
              <p className="text-sm text-gray-600">Easy access to comprehensive info</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="font-bold text-gray-800 mb-1">For University</p>
              <p className="text-sm text-gray-600">Professional digital presence</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <p className="font-bold text-gray-800 mb-1">For Team</p>
              <p className="text-sm text-gray-600">Industry experience gained</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Chapter 2: Literature Review',
    layout: 'content',
    content: (
      <div className="space-y-5">
        <div className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-xl font-bold text-blue-800 mb-3">Modern Web Development Frameworks</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Next.js</span> (Vercel, 2024) provides server-side rendering, 
            static site generation, and automatic code splitting for superior performance.
          </p>
        </div>
        
        <div className="bg-purple-50 p-5 rounded-lg">
          <h3 className="text-xl font-bold text-purple-800 mb-3">Type Safety in JavaScript</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Research by Gao et al. (2017):</span> TypeScript prevents 
            approximately 15% of bugs in JavaScript applications through static type checking.
          </p>
        </div>
        
        <div className="bg-green-50 p-5 rounded-lg">
          <h3 className="text-xl font-bold text-green-800 mb-3">Responsive Web Design</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Nielsen & Budiu (2013):</span> Mobile-first design is essential 
            as mobile devices account for majority of web traffic.
          </p>
        </div>
        
        <div className="bg-orange-50 p-5 rounded-lg">
          <h3 className="text-xl font-bold text-orange-800 mb-3">User Experience Design</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Norman (2013):</span> Emphasized discoverability, feedback, 
            and conceptual models in interface design.
          </p>
        </div>
        
        <div className="bg-pink-50 p-5 rounded-lg">
          <h3 className="text-xl font-bold text-pink-800 mb-3">Web Accessibility Standards</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">WCAG 2.1 (W3C, 2018):</span> Comprehensive standards ensuring 
            web accessibility for people with disabilities. Our project achieved AA compliance.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Chapter 3: Development Methodology',
    layout: 'content',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-lg text-white">
          <h3 className="text-2xl font-bold mb-4">Agile Development Approach</h3>
          <p className="text-lg">7-Week Iterative Development Cycle</p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">W1</div>
            <div className="bg-white p-4 rounded-lg shadow flex-1">
              <p className="font-bold text-gray-800">Requirements Gathering</p>
              <p className="text-sm text-gray-600">Stakeholder interviews and user story creation</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">W2</div>
            <div className="bg-white p-4 rounded-lg shadow flex-1">
              <p className="font-bold text-gray-800">System Design & Architecture</p>
              <p className="text-sm text-gray-600">Wireframes, design system, and TypeScript interfaces</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">W3-5</div>
            <div className="bg-white p-4 rounded-lg shadow flex-1">
              <p className="font-bold text-gray-800">Component Development</p>
              <p className="text-sm text-gray-600">Building 8 major components with type safety</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">W6</div>
            <div className="bg-white p-4 rounded-lg shadow flex-1">
              <p className="font-bold text-gray-800">Testing & Quality Assurance</p>
              <p className="text-sm text-gray-600">Cross-browser testing and accessibility audits</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">W7</div>
            <div className="bg-white p-4 rounded-lg shadow flex-1">
              <p className="font-bold text-gray-800">Deployment & Documentation</p>
              <p className="text-sm text-gray-600">Vercel deployment and comprehensive reporting</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Technology Stack',
    layout: 'content',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-gradient-to-br from-black to-gray-800 p-6 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-3">Next.js 14</h3>
            <p className="text-gray-300 text-sm mb-4">React Framework</p>
            <ul className="space-y-2 text-sm">
              <li>✓ Server-side rendering</li>
              <li>✓ File-based routing</li>
              <li>✓ Automatic code splitting</li>
              <li>✓ Image optimization</li>
              <li>✓ Built-in performance</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-3">TypeScript</h3>
            <p className="text-gray-100 text-sm mb-4">Type Safety</p>
            <ul className="space-y-2 text-sm">
              <li>✓ Static type checking</li>
              <li>✓ Enhanced IDE support</li>
              <li>✓ Error prevention (15%)</li>
              <li>✓ Better documentation</li>
              <li>✓ Improved refactoring</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-6 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-3">Tailwind CSS</h3>
            <p className="text-gray-100 text-sm mb-4">Utility-First CSS</p>
            <ul className="space-y-2 text-sm">
              <li>✓ Rapid development</li>
              <li>✓ Consistent design</li>
              <li>✓ Small bundle size</li>
              <li>✓ Responsive utilities</li>
              <li>✓ Customizable config</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-gray-100 p-5 rounded-lg">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Additional Libraries</h4>
            <div className="space-y-2 text-gray-700">
              <div><span className="font-semibold">Lucide React:</span> Icon library</div>
              <div><span className="font-semibold">React Hooks:</span> State management</div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-5 rounded-lg">
            <h4 className="text-lg font-bold text-gray-800 mb-3">Development Tools</h4>
            <div className="space-y-2 text-gray-700">
              <div><span className="font-semibold">VS Code:</span> Primary IDE</div>
              <div><span className="font-semibold">Git/GitHub:</span> Version control</div>
              <div><span className="font-semibold">npm:</span> Package manager</div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-5 rounded-lg border-2 border-green-600">
          <h4 className="text-lg font-bold text-green-800 mb-2">Why These Technologies?</h4>
          <p className="text-gray-700">
            Industry-standard tools providing optimal performance, developer experience, 
            and long-term maintainability with strong community support.
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'System Architecture',
    layout: 'content',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-5 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold">Component-Based Architecture</h3>
        </div>
        
        <div className="border-4 border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-green-600 text-white p-3 text-center font-bold">Navigation Bar</div>
          <div className="bg-blue-500 text-white p-3 text-center font-bold">Hero Section</div>
          <div className="bg-purple-500 text-white p-3 text-center font-bold">About Section</div>
          <div className="bg-orange-500 text-white p-3 text-center font-bold">Departments Section (6 Programs)</div>
          <div className="bg-pink-500 text-white p-3 text-center font-bold">Requirements Section</div>
          <div className="bg-indigo-500 text-white p-3 text-center font-bold">Gallery Section</div>
          <div className="bg-yellow-500 text-white p-3 text-center font-bold">Contact Section</div>
          <div className="bg-gray-700 text-white p-3 text-center font-bold">Footer</div>
        </div>
        
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-600">
            <h4 className="font-bold text-gray-800 mb-2">Design Principles</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Modular & reusable components</li>
              <li>• Clear separation of concerns</li>
              <li>• Type-safe props & interfaces</li>
              <li>• Responsive at all breakpoints</li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600">
            <h4 className="font-bold text-gray-800 mb-2">Key Features</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Mobile-first responsive design</li>
              <li>• Interactive department modals</li>
              <li>• Smooth scroll navigation</li>
              <li>• Optimized image loading</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Implementation Details',
    layout: 'content',
    content: (
      <div className="space-y-5">
        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-600">
          <h4 className="text-lg font-bold text-gray-800 mb-3">Navigation Component</h4>
          <p className="text-gray-700 text-sm">
            Fixed-position header with backdrop blur, responsive mobile menu using React state, 
            smooth scrolling, and university branding integration.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600">
          <h4 className="text-lg font-bold text-gray-800 mb-3">Departments Component</h4>
          <p className="text-gray-700 text-sm">
            Six departments in responsive grid with interactive cards, modal dialogs for detailed 
            information, and type-safe department data structure.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-purple-600">
          <h4 className="text-lg font-bold text-gray-800 mb-3">Requirements Component</h4>
          <p className="text-gray-700 text-sm">
            Three categorized sections (Academic, NYSC, Supporting Documents) with visual 
            hierarchy using icons and comprehensive lists.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-orange-600">
          <h4 className="text-lg font-bold text-gray-800 mb-3">Gallery Component</h4>
          <p className="text-gray-700 text-sm">
            Campus imagery showcase with responsive grid, hover effects revealing captions, 
            and optimized image loading for performance.
          </p>
        </div>
        
        <div className="bg-gray-100 p-5 rounded-lg">
          <h4 className="text-lg font-bold text-gray-800 mb-3">TypeScript Interfaces</h4>
          <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-xs">
            <div>interface Department {'{'}</div>
            <div className="ml-4">id: string;</div>
            <div className="ml-4">name: string;</div>
            <div className="ml-4">code: string;</div>
            <div className="ml-4">requirements: string[];</div>
            <div>{'}'}</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Responsive Design',
    layout: 'content',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-5 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold">Mobile-First Approach</h3>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-green-50 p-4 rounded-lg border-2 border-green-600 text-center">
            <div className="text-3xl mb-2">📱</div>
            <h4 className="font-bold text-gray-800 mb-2">Mobile</h4>
            <p className="text-xs text-gray-600 mb-2">0-639px</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>Single column</li>
              <li>Stacked nav</li>
              <li>Large touch targets</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-600 text-center">
            <div className="text-3xl mb-2">📲</div>
            <h4 className="font-bold text-gray-800 mb-2">Tablet</h4>
            <p className="text-xs text-gray-600 mb-2">640-767px</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>2 columns</li>
              <li>Expanded nav</li>
              <li>Balanced density</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-600 text-center">
            <div className="text-3xl mb-2">💻</div>
            <h4 className="font-bold text-gray-800 mb-2">Laptop</h4>
            <p className="text-xs text-gray-600 mb-2">768-1023px</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>3 columns</li>
              <li>Full nav menu</li>
              <li>Optimized density</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-600 text-center">
            <div className="text-3xl mb-2">🖥️</div>
            <h4 className="font-bold text-gray-800 mb-2">Desktop</h4>
            <p className="text-xs text-gray-600 mb-2">1024px+</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>Max layout</li>
              <li>Full features</li>
              <li>Enhanced effects</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h4 className="text-lg font-bold text-gray-800 mb-3">Tailwind Responsive Utilities</h4>
          <div className="bg-gray-100 p-4 rounded font-mono text-sm text-gray-800">
            <div>{'<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">'}</div>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            Automatically adapts from 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Testing & Quality Assurance',
    layout: 'content',
    content: (
      <div className="space-y-6">
        <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-600">
          <h3 className="text-xl font-bold text-red-800 mb-3">Comprehensive Testing Strategy</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>✓ Functional testing of all features</div>
            <div>✓ Responsive design across devices</div>
            <div>✓ Cross-browser compatibility</div>
            <div>✓ Accessibility audits (WCAG AA)</div>
            <div>✓ Performance profiling</div>
            <div>✓ Type safety verification</div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-lg shadow-lg text-center border-t-4 border-green-600">
            <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
            <p className="text-gray-800 font-semibold">Type Safety</p>
            <p className="text-sm text-gray-600">Complete TS coverage</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-lg text-center border-t-4 border-blue-600">
            <div className="text-4xl font-bold text-blue-600 mb-2">95+</div>
            <p className="text-gray-800 font-semibold">Accessibility</p>
            <p className="text-sm text-gray-600">Lighthouse score</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-lg text-center border-t-4 border-purple-600">
            <div className="text-4xl font-bold text-purple-600 mb-2">90+</div>
            <p className="text-gray-800 font-semibold">Performance</p>
            <p className="text-sm text-gray-600">Lighthouse score</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-3">Testing Tools Used</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Chrome DevTools for debugging</li>
              <li>• Lighthouse for audits</li>
              <li>• WAVE for accessibility</li>
              <li>• TypeScript compiler</li>
              <li>• React DevTools</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-lg">
            <h4 className="font-bold text-purple-800 mb-3">Issues Resolved</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Type safety improvements</li>
              <li>• Mobile menu state fixes</li>
              <li>• Modal overflow handling</li>
              <li>• Image optimization</li>
              <li>• Contrast ratio adjustments</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Deployment & Version Control',
    layout: 'content',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-gray-800 to-black p-6 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">GitHub Repository</h3>
            <ul className="space-y-3">
              <li>✓ Version control with Git</li>
              <li>✓ Collaborative development</li>
              <li>✓ Open source project</li>
              <li>✓ Branch protection rules</li>
              <li>✓ Code review workflow</li>
              <li>✓ Issue tracking</li>
            </ul>
            <div className="mt-4 p-3 bg-white/10 rounded text-sm">
              <p className="font-mono">github.com/fulokoja/fulsup</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-black to-gray-800 p-6 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Vercel Deployment</h3>
            <ul className="space-y-3">
              <li>✓ Automatic deployments</li>
              <li>✓ Preview for pull requests</li>
              <li>✓ Global CDN delivery</li>
              <li>✓ Automatic HTTPS</li>
              <li>✓ Performance monitoring</li>
              <li>✓ Zero-config setup</li>
            </ul>
            <div className="mt-4 p-3 bg-white/10 rounded text-sm">
              <p className="font-mono">fulsup.vercel.app</p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-600">
          <h3 className="text-xl font-bold text-green-800 mb-3">CI/CD Pipeline</h3>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold">1</div>
              <p className="text-sm font-semibold">Push Code</p>
              <p className="text-xs text-gray-600">to GitHub</p>
            </div>
            <div className="text-3xl text-green-600">→</div>
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold">2</div>
              <p className="text-sm font-semibold">Auto Build</p>
              <p className="text-xs text-gray-600">on Vercel</p>
            </div>
            <div className="text-3xl text-blue-600">→</div>
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold">3</div>
              <p className="text-sm font-semibold">Deploy</p>
              <p className="text-xs text-gray-600">to Production</p>
            </div>
            <div className="text-3xl text-purple-600">→</div>
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 font-bold">✓</div>
              <p className="text-sm font-semibold">Live Site</p>
              <p className="text-xs text-gray-600">Updated</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Chapter 4: Results & Achievements',
    layout: 'content',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 rounded-lg text-white">
          <h3 className="text-3xl font-bold mb-4 text-center">Key Achievements</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white/20 p-4 rounded-lg backdrop-blur text-center">
              <p className="text-4xl font-bold mb-2">8</p>
              <p className="text-sm">Team Members</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg backdrop-blur text-center">
              <p className="text-4xl font-bold mb-2">6</p>
              <p className="text-sm">Departments</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg backdrop-blur text-center">
              <p className="text-4xl font-bold mb-2">100%</p>
              <p className="text-sm">Type Safety</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg backdrop-blur text-center">
              <p className="text-4xl font-bold mb-2">7</p>
              <p className="text-sm">Weeks</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600">
            <h4 className="text-xl font-bold text-gray-800 mb-3">Technical Excellence</h4>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Modern tech stack (Next.js, TypeScript, Tailwind)</li>
              <li>✓ Component-based architecture</li>
              <li>✓ Responsive design implementation</li>
              <li>✓ WCAG AA accessibility compliance</li>
              <li>✓ Performance optimized (90+ score)</li>
            </ul>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-purple-600">
            <h4 className="text-xl font-bold text-gray-800 mb-3">Project Deliverables</h4>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Live web application</li>
              <li>✓ GitHub repository (open-source)</li>
              <li>✓ Complete documentation</li>
              <li>✓ CI/CD pipeline</li>
              <li>✓ Technical report</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-600">
          <h4 className="text-xl font-bold text-blue-800 mb-3">Learning Outcomes</h4>
          <div className="grid grid-cols-3 gap-4 text-gray-700">
            <div>• Modern web development</div>
            <div>• Type-safe programming</div>
            <div>• Responsive design</div>
            <div>• Version control (Git)</div>
            <div>• Collaborative development</div>
            <div>• Cloud deployment</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Challenges & Solutions',
    layout: 'content',
    content: (
      <div className="space-y-5">
        <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-600">
          <h3 className="text-xl font-bold text-orange-800 mb-3">Challenge: TypeScript Learning Curve</h3>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Problem:</span> Team unfamiliar with TypeScript's type system</p>
          <p className="text-gray-700"><span className="font-semibold">Solution:</span> Incremental adoption, systematic study, leveraged IDE features</p>
        </div>
        
        <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-600">
          <h3 className="text-xl font-bold text-red-800 mb-3">Challenge: Responsive Design Complexity</h3>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Problem:</span> Ensuring consistency across all device sizes</p>
          <p className="text-gray-700"><span className="font-semibold">Solution:</span> Mobile-first approach with Tailwind's responsive utilities</p>
        </div>
        
        <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-600">
          <h3 className="text-xl font-bold text-purple-800 mb-3">Challenge: Team Coordination</h3>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Problem:</span> Managing 8-person team with different schedules</p>
          <p className="text-gray-700"><span className="font-semibold">Solution:</span> Regular meetings, clear task assignments, GitHub workflow</p>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-xl font-bold text-blue-800 mb-3">Challenge: Code Consistency</h3>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Problem:</span> Multiple developers with different coding styles</p>
          <p className="text-gray-700"><span className="font-semibold">Solution:</span> Automated formatting (Prettier), linting (ESLint), code reviews</p>
        </div>
      </div>
    )
  },
  {
    title: 'Recommendations & Future Work',
    layout: 'content',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-600">
            <h3 className="text-xl font-bold text-green-800 mb-4">Short-Term (3-6 months)</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Online application portal</li>
              <li>• Content Management System (CMS)</li>
              <li>• Advanced search functionality</li>
              <li>• Multi-language support (i18n)</li>
              <li>• Email notifications</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-600">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Medium-Term (6-12 months)</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Backend API development</li>
              <li>• Student dashboard portal</li>
              <li>• Administrative interface</li>
              <li>• Analytics integration</li>
              <li>• Database implementation</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-2 border-purple-600">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Long-Term Vision (12+ months)</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>• Native mobile applications (iOS/Android)</div>
            <div>• Virtual 360° campus tour</div>
            <div>• AI-powered chatbot support</div>
            <div>• Integration with university systems</div>
            <div>• Progressive Web App (PWA)</div>
            <div>• Advanced analytics dashboard</div>
          </div>
        </div>
        
        <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-600">
          <h4 className="text-lg font-bold text-orange-800 mb-3">Technical Recommendations</h4>
          <div className="grid grid-cols-2 gap-3 text-gray-700">
            <div>✓ Implement automated testing suite</div>
            <div>✓ Add performance monitoring</div>
            <div>✓ Enhance security measures</div>
            <div>✓ Optimize SEO further</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Conclusion',
    layout: 'content',
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-lg text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Project Successfully Completed</h3>
          <p className="text-xl leading-relaxed">
            A modern, responsive, and type-safe web application that effectively serves 
            FULSUP stakeholders and establishes foundation for future enhancements.
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-green-600">
            <div className="text-4xl mb-3">✓</div>
            <h4 className="font-bold text-gray-800 mb-2">Delivered</h4>
            <p className="text-gray-600 text-sm">All objectives met on time</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-blue-600">
            <div className="text-4xl mb-3">✓</div>
            <h4 className="font-bold text-gray-800 mb-2">Scalable</h4>
            <p className="text-gray-600 text-sm">Built for future growth</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-purple-600">
            <div className="text-4xl mb-3">✓</div>
            <h4 className="font-bold text-gray-800 mb-2">Open Source</h4>
            <p className="text-gray-600 text-sm">Community contributions welcome</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-5 rounded-lg">
            <h4 className="text-lg font-bold text-blue-800 mb-3">Impact on Students</h4>
            <p className="text-gray-700 text-sm">
              Centralized access to program information, clear requirements, 
              and enhanced enrollment experience.
            </p>
          </div>
          
          <div className="bg-purple-50 p-5 rounded-lg">
            <h4 className="text-lg font-bold text-purple-800 mb-3">Impact on University</h4>
            <p className="text-gray-700 text-sm">
              Professional digital presence, reduced inquiry workload, 
              and foundation for digital transformation.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    title: 'Thank You',
    layout: 'title',
    content: (
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold text-green-700 mb-6">Thank You</h1>
        <p className="text-2xl text-gray-700">Questions & Discussion</p>
        
        <div className="mt-12 bg-gray-100 p-8 rounded-lg inline-block">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Project Information</h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <span className="font-bold text-gray-800 w-32">GitHub:</span>
              <span className="text-gray-700 font-mono">github.com/fulokoja/fulsup</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-gray-800 w-32">Live Site:</span>
              <span className="text-gray-700 font-mono">fulsup.vercel.app</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-gray-800 w-32">License:</span>
              <span className="text-gray-700">MIT (Open Source)</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-green-50 p-6 rounded-lg inline-block border-2 border-green-600">
          <h4 className="font-bold text-green-800 mb-3">Development Team - Group 3</h4>
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
            <div>Amuruwaiye Fate (227)</div>
            <div>Taiwo Nafisat (234)</div>
            <div>Ogbu Emmanuel (251)</div>
            <div>Sanni Omeiza (236)</div>
            <div>Muhammed Ibrahim (246)</div>
            <div>Obademi Victoria (242)</div>
            <div>Daniel Idris (247)</div>
            <div>Abdulazeez Bello (252)</div>
          </div>
        </div>
        
        <div className="mt-12 text-gray-600">
          <p className="text-lg font-semibold">Federal University Lokoja</p>
          <p>Computer Science Department</p>
          <p className="mt-4">January 2026</p>
        </div>
      </div>
    )
  }
];

const PresentationApp: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm py-3 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <div>
            <h1 className="font-bold text-gray-800">FULSUP Presentation</h1>
            <p className="text-xs text-gray-500">Slide {currentSlide + 1} of {slides.length}</p>
          </div>
        </div>
        
        <button 
          onClick={() => alert('In a real implementation, this would generate and download a .pptx file')}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download .pptx
        </button>
      </div>

      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl aspect-[16/9] p-12 overflow-y-auto">
          {slide.content}
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-lg py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-green-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresentationApp;