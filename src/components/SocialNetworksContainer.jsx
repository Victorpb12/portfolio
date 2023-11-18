import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';

import '../styles/components/socialnetworkscontainer.sass';

const socialNetworks = [
  {name: "linkedin", link: "https://www.linkedin.com/in/victor-pavan-baumgartner-301059234/", icon: <FaLinkedin/>},
  {name: "github", link: "https://github.com/Victorpb12",icon: <FaGithub/>},
  {name: "instagram", link: "https://www.instagram.com/victorpbaumgartner/", icon: <FaInstagram/>},
]

const SocialNetworksContainer = () => {
  return (
  <section id="social-networks">
    {socialNetworks.map((network) => (
      <a href={network.link} className="social-btn" id={network.name} key={network.name}>
        {network.icon}
      </a>
    ))}
  </section>
  );
}

export default SocialNetworksContainer;