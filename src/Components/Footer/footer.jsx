import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi"
import { ContactDetails, ContactLink, FooterContainer, LinkIcon, PersonalInfo, WorkingHour } from "./footer.styled"
export const Footer = () => {
  return (
    <>
    <FooterContainer>

      <ContactDetails>
                <PersonalInfo>
                    <h4>Personal Info</h4>
                    <address>21,Syed han ali lane,Islampur,Dhaka-1100</address>
                    <p>+88 01892555***</p>
                </PersonalInfo>
                <ContactLink>
                    <h2>Baking Tales</h2>
                    <p>Happiness starts here </p>
                    <LinkIcon>
                    <a href='#'><FiFacebook/></a>
                    <a href='#'><FiInstagram/></a>
                    <a href='#'><FiTwitter/></a>
                    </LinkIcon>
                </ContactLink>
                <WorkingHour>
                    <h2>Working Hour</h2>
                    <span>24/7</span>

                </WorkingHour>

            </ContactDetails>
            <p>2021 Baking Tales.all Rights reserved</p>
            </FooterContainer>
    
    </>
  )
}
