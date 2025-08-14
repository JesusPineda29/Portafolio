import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { personalInfo } from '../data/content';

const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm("mwpqzqny");
  const formRef = useRef<HTMLFormElement>(null);
  
  // Reset form when submission is successful
  useEffect(() => {
    if (state.succeeded) {
      formRef.current?.reset();
    }
  }, [state.succeeded]);
  
  return (
    <section id="contact" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 gradient-text">Ponte en contacto</h2>
          <p className="text-lg text-gray-400">
          No dudes en contactarme si tienes preguntas o deseas trabajar conmigo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Información de contacto */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Correo electrónico</h4>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-gray-400 hover:text-emerald-500 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Teléfono</h4>
                  <p className="text-gray-400">(+52) 5524224021</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Ubicación</h4>
                  <p className="text-gray-400">{personalInfo.location}</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <h4 className="text-white font-medium mb-4">Sígueme en GitHub y conéctate conmigo en LinkedIn</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/JesusPineda29"
                  target='_blank'
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-emerald-700 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/jesús-pineda-630a3b300/"
                  target='_blank'
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-emerald-700 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Formulario */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Mándame un mensaje</h3>
              
              {/* Success message */}
              {state.succeeded && (
                <div className="p-4 rounded-lg mb-6 bg-emerald-900/30 text-emerald-400">
                  ¡Gracias! Tu mensaje ha sido enviado exitosamente.
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Tu Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Tu Correo Electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                  <ValidationError 
                    prefix="Subject" 
                    field="subject"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Tu Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                    required
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full justify-center"
                  disabled={state.submitting}
                >
                  {state.submitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={16} className="mr-2" />
                      Enviar Mensaje
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;