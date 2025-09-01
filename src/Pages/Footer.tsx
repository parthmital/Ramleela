const Footer = () => (
  <div className="flex flex-col px-24-72 items-center bg-red-dark bordert-4-gold gap-24">
    <p className="text-white text-center text-18">
      ©2025 Chembur Ramleela. All rights reserved. Organized by Shree Maryada
      Purushottam Ramleela Samiti
    </p>
    <div className="flex gap-24 SocialIcons items-center">
      <a
        href="https://www.youtube.com/@ramlilasamitichembur"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="Social/YouTube.svg" alt="Watch us on YouTube" />
      </a>
      <a
        href="mailto:chemburramlila@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="Social/Gmail.svg" alt="Gmail" />
      </a>
      <a
        href="https://wa.me/919029058600"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="Social/WhatsApp.svg" alt="WhatsApp" />
      </a>
      <a
        href="upi://pay?pa=maryadapurshottam@indianbk&pn=ChemburRamleela"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="Social/GPay.svg" alt="Google Pay" />
      </a>
    </div>
  </div>
);

export default Footer;
