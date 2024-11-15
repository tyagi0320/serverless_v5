import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

const GeneralUserAuth = () => (
    <Authenticator>
        {({ signOut, user }) => (
            <main>
                <h1>General User Portal</h1>
                <button onClick={signOut}>Sign out</button>
            </main>
        )}
    </Authenticator>
);

export default GeneralUserAuth;
