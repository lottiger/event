import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-50/5 py-4 mt-16">
      <div className=" container flex flex-wrap md::flex-row justify-between gap-3 items-center">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">Contact</h3>
          <p>123 Street, City, Country</p>
          <p>Phone: +123456789</p>
          <p>Email: info@mail.com</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">Links</h3>
          <ul>
            <li>Contact Us</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-4 text-sm text-muted-foreground">
        <p>&copy; 2024 Example Company. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
