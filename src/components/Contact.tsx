import { useState } from 'react';
import { Send, Mail, MapPin, Phone, CheckCircle, XCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_tfos619'; // Get from EmailJS
  const EMAILJS_TEMPLATE_ID = 'template_0fxu1sq'; // Get from EmailJS
  const EMAILJS_USER_ID = 'xdGzlLbpcnti1KOPg'; // Get from EmailJS

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'adityaaman2120@gmail.com', // Your email
          to_name: 'Aditya Aman',
          reply_to: formData.email,
        },
        EMAILJS_USER_ID
      );

      // Success
      setSubmitStatus('success');
      setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setSubmitMessage('Failed to send message. Please try again or email me directly.');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail />,
      title: "Email",
      value: "adityaaman2120@gmail.com",
      link: "mailto:adityaaman2120@gmail.com"
    },
    {
      icon: <MapPin />,
      title: "Location",
      value: "Kolkata, India",
      link: "#"
    },
    {
      icon: <Phone />,
      title: "Phone",
      value: "+91 8709851034",
      link: "tel:+918709851034"
    }
  ];

  return (
    <section id="contact" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-gray-600 text-lg">Let's build something amazing together</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="glass-card p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send me a message</h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-green-700">{submitMessage}</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <XCircle className="text-red-500" size={20} />
                  <span className="text-red-700">{submitMessage}</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Your message..."
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>

                <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <p>Messages go directly to my inbox</p>
                </div>
              </form>
            </div>
          </div>

          <div>
            <div className="glass-card p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Quick Links</h3>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://github.com/adityaaman-2120" 
                  className="p-4 text-center rounded-lg border hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/aditya-aman-61aa56320/" 
                  className="p-4 text-center rounded-lg border hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="/resume.pdf" 
                  download="Aditya_Aman_Resume.pdf"
                  className="p-4 text-center rounded-lg border hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  Resume
                </a>
                <a 
                  href="#projects" 
                  className="p-4 text-center rounded-lg border hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;