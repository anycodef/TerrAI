# terrAI - Requirements Gathering

## Functional Requirements

1. **AI Utilization:**
   - The application must have access to AI to analyze a sequence of images and determine which areas are safer for construction or real estate investment, based on soil erosion.

2. **Visualization of Interest Zones Map:**
   - The application should be capable of displaying on a map the areas of interest for the user.

3. **Display of User-selected Zone Details:**
   - The application must showcase the conditions of the region selected by the user on the map.

4. **Selection of Study Area on Map:**
   - The application must allow the user to select an area or region on the map and display corresponding data.

5. **Search Functionality:**
   - The application should enable specific zone searches by entering addresses or place names.

6. **Markers:**
   - The application must allow adding markers on the map to indicate locations or areas for tracking.

7. **Export Capability:**
   - The application should permit data and analysis export in CSV or PDF formats.

8. **History:**
   - The application must maintain a history of queries.

9. **Authentication and Authorization:**
   - The application must implement an authentication mechanism to verify the user's identity before granting access to the data.

## Non-functional Requirements

1. **Design:**
   - The application must be simple, minimalist, and elegant.
   - The interface should be intuitive and user-friendly for non-technical individuals.
   - The application must present all necessary information without overwhelming the user.

2. **Compatibility:**
   - The application must be compatible with any device with browser access, functioning as a Progressive Web App (PWA).

3. **Scalability:**
   - The system architecture should allow progressive user increment, utilizing a client-server architecture with an optimized backend.

4. **Maintainability:**
   - The application must be written using standards and diagrams facilitating constant maintainability, compatibility analysis, and error correction.

5. **Accessibility:**
   - The application must comply with web accessibility standards to be usable by individuals with visual disabilities (large fonts, prominent colors, etc.).

## User Story

1. The user logs in.
2. The home screen is a Google Earth-style map covering most of the screen, with a search bar for references and a margin indicating the cost in credits for the selected area analysis. Below the cost is a button labeled "Analyze."
3. The user searches for a reference in the search bar, and the map displays the entered zone.
4. The user selects a polygonal area directly on the map, and the cost in credits updates.
5. The user is satisfied and presses the analyze button.
6. "Analyzing" screen appears.
7. Results are displayed.

## Project Description

terrAI is a web-based application designed to assist users in identifying suitable areas for construction or real estate investment by analyzing soil erosion patterns using Artificial Intelligence (AI). The application provides a user-friendly interface with map visualization, search functionality, and the ability to select and analyze specific areas. It aims to be accessible, scalable, and maintainable, ensuring compatibility across various devices. terrAI is developed using React Native, making it suitable for both web and mobile platforms. 

## Installation

To install terrAI, simply clone this repository and follow the setup instructions in the README.md file. 

## Usage

After installation, users can access terrAI through a web browser. They can log in, search for specific areas, select regions for analysis, and view the results seamlessly through the intuitive interface.

## Contributing

Contributions to terrAI are welcome! Please refer to the contribution guidelines in the README.md file for more information on how to get involved.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

