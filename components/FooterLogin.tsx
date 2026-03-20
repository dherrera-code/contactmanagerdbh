import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

const FooterLogin = () => {
  return (
    <Footer container className="border-gray-300 border">
      <FooterCopyright href="#" by="CONTACTMANAGER INC. SECURE ACCESS." year={2024} />
      <FooterLinkGroup>
        <FooterLink href="#">PRIVACY</FooterLink>
        <FooterLink href="#">TERMS</FooterLink>
        <FooterLink href="#">SECURITY</FooterLink>
      </FooterLinkGroup>
    </Footer>
  )
}

export default FooterLogin