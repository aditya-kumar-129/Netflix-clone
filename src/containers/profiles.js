import React from "react";
import { Header, Profiles } from "../components";
import logo from "../logo.svg";   // Extracting the Netflix logo from the src folder.

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
    {/* Here bg means the overall pic that is prresent in the / root and if set it false then thta image won't appear */}
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to='/home' src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>setProfile({displayName: user.displayName,photoURL: user.photoURL,})}
            data-testid="user-profile"
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
