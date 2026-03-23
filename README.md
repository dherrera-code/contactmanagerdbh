## Daniel Herrera

## Contact Manager!!

## The application allows user to create account and login to view a contact dashboard page!

## Link to my Hosted Build!!

https://contactmanagerdbh.vercel.app

## Notes

Components needed:
- Navbar with Title, logo and search bar
- One Section to Add new Contact with a form!
- One Section to Get All contacts with count of how many contacts
- Use Table component to list out all entries!

Next Steps to complete project:
When website boots up, Display all already created contacts!

Contact Manager
Login function created, getAllContacts, createNewContacts implemented! 
I need to add functionality towards searching for one contact, removing and updating contact!

Login Function: 

Add input validation to login page!
Add css class function to add border red color to password!
Add toast notification to tell user account was created!
Add function for Keep me signed in button to keep user signed in! (Complete!)
Add function to test if user is signed in!

## Peer Review (Isaias Gonzalez):
- Account creation and login work correctly.
- Contact creation, modification, and deletion work correctly.
- Search functionality works, but requires an exact match (except for case-sensitivity).
- Attempting to create contacts with invalid inputs initially appear to be rejected, but after refreshing the page it shows that the contacts were created. (FIXED)
- It seems I have access to all users' contacts, unless there are default contacts after creating an account. Change this to only show a user's own contacts. (INTENDED Feature)

# Notes for Monday!
    Fixed exploit to go to dashboard page when appending URL,
    created an error modal to pass in an error message and useState to toggle off modal!
    refactored create account modal to another component to be evoked! 


    Add message to tell user account was created or not! (DONE)
    Rework error message login to show red text under password with password border red!

    Add function to test if stored token is expired when loading to dashboard!

    Add a function to hide password and show password when entering!