import { useState, useEffect, useRef } from "react";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Focus trap and ESC handling
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleTabKey = (e) => {
      if (e.key !== "Tab") return;

      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleTabKey);

    // Focus first input when modal opens
    setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleTabKey);
    };
  }, [isOpen, onClose]);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Track form submission
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "submit_contact_form");
    }

    // TODO: Replace with actual API call
    // For now, simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
      onClick={handleBackdropClick}
    >
      <div className="fixed inset-0 grid place-items-center p-4">
        <div 
          ref={modalRef}
          className="w-full max-w-lg rounded-2xl bg-white shadow-xl p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {isSuccess ? (
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h2 id="modal-title" className="text-2xl font-bold text-slate-900 mb-2">
                Message sent!
              </h2>
              <p className="text-slate-600 mb-6">
                Thanks — we'll get back to you within 1 business day.
              </p>
              <button
                onClick={onClose}
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-5 py-3 font-medium transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h2 id="modal-title" className="text-2xl font-bold text-slate-900 mb-4">
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Full name
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl border px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-100 ${
                      errors.name ? "border-red-300 focus:border-red-400" : "border-slate-200 focus:border-emerald-400"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl border px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-100 ${
                      errors.email ? "border-red-300 focus:border-red-400" : "border-slate-200 focus:border-emerald-400"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl border px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-100 resize-none ${
                      errors.message ? "border-red-300 focus:border-red-400" : "border-slate-200 focus:border-emerald-400"
                    }`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl px-5 py-3 font-medium transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-3 text-slate-600 hover:text-slate-800 font-medium transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>

              <p className="mt-4 text-sm text-slate-500 text-center">
                Prefer email? <a href="mailto:hello@matchagig.com" className="text-emerald-600 hover:text-emerald-700">hello@matchagig.com</a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
