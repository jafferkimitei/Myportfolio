
import React from "react";
import styles from '../styles/Contact.module.scss';
import Header from '../components/Header';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { pagesSEO } from '../seo.config';


const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    purpose: 'Business Inquiries',
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    formData.access_key = '192be1a3-2dcc-4854-a9e3-f20bc26ec0b0';
   
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {

       
        alert('Form submitted successfully!');
        setFormData({
          purpose: 'Business Inquiries',
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        });
        router.push('/success?submitted=true');
      } else {
        alert('Error submitting form. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <>
    <NextSeo {...pagesSEO.contact} />
    <div className={styles.background}>
    <Header />
    <div className={styles.container}>
    <h1 className={styles.title}>Contact</h1>
        <div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.radioGroup}>
          <label className={styles.formLabel}>Purpose of email <span style={{ color: 'red' }}>*</span></label>
          <div className={styles.radioOptions}>
            <label>
              <input
                type="radio"
                name="purpose"
                value="Business Inquiries"
                checked={formData.purpose === "Business Inquiries"}
                onChange={handleChange}
                className={styles.radioInput}
                required
              />
              Business Inquiries
            </label>
            <label>
              <input
                type="radio"
                name="purpose"
                value="Customer Service"
                checked={formData.purpose === "Customer Service"}
                onChange={handleChange}
                className={styles.radioInput}
                required
              />
              Customer Service
              
            </label>
          </div>
        </div>
        <div>
            <label htmlFor="firstName" className={styles.formLabel}>First Name <span style={{ color: 'red' }}>*</span></label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={styles.formInput}
              required />
          </div>
          <div>
            <label htmlFor="lastName" className={styles.formLabel}>Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={styles.formInput} />
          </div>
          <div>
            <label htmlFor="email" className={styles.formLabel}>Email <span style={{ color: 'red' }}>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.formInput}
              required />
          </div>
          <div>
            <label htmlFor="subject" className={styles.formLabel}>Subject<span style={{ color: 'red' }}>*</span></label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={styles.formInput}
              required />
          </div>
          <div>
            <label htmlFor="message" className={styles.formLabel}>Message (All Spam Will Be Ignored) <span style={{ color: 'red' }}>*</span></label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.formTextarea}
              required
            ></textarea>
          </div>
          <input type="hidden" name="access_key" value="92be1a3-2dcc-4854-a9e3-f20bc26ec0b0" />
          <div>
            <button type="submit" className={styles.formButton}>Submit</button>
          </div>
        </form>
        </div>
        </div>
        </div>
      </>
  );
};

export default Contact;
