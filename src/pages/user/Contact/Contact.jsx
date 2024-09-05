import React from 'react'
import BackgroundSection from '../../../components/background/BackgroundSection'
import ContactUs from '../../../components/contact/ContactForm'
import Features from '../../../components/Product/FeaturesCard'

export default function Contact() {
  return (
    <section>
       <BackgroundSection
        title="Contact"
        breadcrumb={[
          { label: "Home", active: false },
          { label: "Contact", active: true },
        ]}
      />
      <ContactUs/>
      <Features/>
    </section>
  )
}
