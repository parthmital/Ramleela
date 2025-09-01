const Footer = () => (
  <div className="flex flex-col px-24-72 items-center bg-red-dark bordert-4-gold gap-24">
    <p className="text-white text-center text-18">
      ©2025 Chembur Ramleela. All rights reserved. Organized by Shree Maryada
      Purushottam Ramleela Samiti
    </p>
    <div className="flex gap-24 SocialIcons">
      <a
        href="https://mail.google.com/mail/?view=cm&to=chemburramlila@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="public/Gmail.svg" alt="Gmail" />
      </a>
      <a
        href="https://web.whatsapp.com/send?phone=919029058600&text=Hello%20I%20want%20to%20know%20more%20about%20Chembur%20Ramleela"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="public/WhatsApp.svg" alt="WhatsApp" />
      </a>
      <a
        href="upi://pay?pa=maryadapurshottam@indianbk&pn=ChemburRamleela"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="public/GPay.svg" alt="Google Pay" />
      </a>
    </div>
  </div>
);

export default Footer;