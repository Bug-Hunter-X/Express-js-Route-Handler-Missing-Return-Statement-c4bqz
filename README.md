# Express.js Route Handler Missing Return Statement

This repository demonstrates a common but subtle bug in Express.js route handlers: omitting the `return` statement in a conditional.  This can lead to unexpected behavior, where subsequent code executes even when an error condition is met.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.

## Bug Description

The `/users/:id/profile` route attempts to fetch a user's profile. If the profile is not found, it sets a 404 status but *does not return*. This means that `res.send(userProfileData)` executes even when `userProfileData` is null, potentially leading to unexpected responses or errors.

## How to Reproduce

1. Clone this repository.
2. Run `npm install express`
3. Run `node bug.js`
4. Make a request to `/users/123/profile` (replace 123 with a non-existent user ID)

You will see the unexpected behavior.  Then run the solution to correct this error.