# Contact Search Application

This is a **Contact Search Application** built with Angular and Angular Material. The application allows users to search for contacts, display results in a table format with pagination, and select multiple contacts using checkboxes. It dynamically displays selected contacts and handles cases where no results are found.

## Features

1. **Search Functionality**:
   - Search by first name, last name, date of birth, email, and phone number.
   - Filter results dynamically as you type.
2. **Results Table**:
   - Display contact details such as name, date of birth, address, city, state, zip code, email, and phone number.
   - Includes pagination for large datasets.
3. **Checkbox Selection**:
   - Select multiple contacts using checkboxes in each row.
   - View selected contacts dynamically in a separate section.
4. **No Results Message**:
   - Displays a clear "No contacts found" message when no matches are found.
5. **Responsive Design**:
   - Optimized for various screen sizes using Angular Material components.

## Technologies Used

- **Angular**: Framework for building the application.
- **Angular Material**: For UI components like the table, form fields, and checkboxes.
- **TypeScript**: For type safety and better coding practices.
- **CSS**: For custom styling.

## Setup Instructions

Follow these steps to set up and run the application locally:

### Prerequisites
1. Install **Node.js** (version 14.x or higher) and npm.
2. Install the Angular CLI globally:
   ```bash
   npm install -g @angular/cli
