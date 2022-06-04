import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="https://help.netflix.com/en/node/412">
            FAQ
          </Footer.Link>
          <Footer.Link href="https://ir.netflix.net/ir-overview/profile/default.aspx">
            Investor Relations
          </Footer.Link>
          <Footer.Link href="https://devices.netflix.com/en/">
            Ways to Watch
          </Footer.Link>
          <Footer.Link href="https://help.netflix.com/legal/corpinfo">
            Corporate Information
          </Footer.Link>
          <Footer.Link href="#">Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://help.netflix.com/en/">
            Help Centre
          </Footer.Link>
          <Footer.Link href="https://jobs.netflix.com/">Jobs</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">
            Account
          </Footer.Link>
          <Footer.Link href="#">Redeem gift cards</Footer.Link>
          <Footer.Link href="https://help.netflix.com/legal/privacy">
            Privacy
          </Footer.Link>
          <Footer.Link href="https://fast.com/">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Media Centre</Footer.Link>
          <Footer.Link href="#">Buy gift cards</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="https://help.netflix.com/legal/notices">
            Legal Notices
          </Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix United Kingdom</Footer.Text>
    </Footer>
  );
}
