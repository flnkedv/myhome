"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";

export default function Page() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          Signed in as {session.user?.email}
          <br />
          <Button
            variant="contained"
            onClick={() => {
              signOut();
            }}
          >
            Log Out
          </Button>
        </>
      ) : (
        <>
          Not signed in <br />
          <Button
            variant="contained"
            onClick={() => {
              signIn();
            }}
          >
            Log In
          </Button>
        </>
      )}
    </div>
  );
}
