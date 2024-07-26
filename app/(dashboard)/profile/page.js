import { UserProfile } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';

return (
  <>
    <UserProfile routing='hash' />
  </>
);