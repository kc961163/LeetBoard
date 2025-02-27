# Web Development Project 1 - LeetBoard

Submitted by: Krishna Choudhary

This web app: Is a resource hub for coding problems and tutorials, designed for developers to practice and improve their data structures and algorithms skills. LeetBoard presents a collection of unique topics in a responsive card format. Each card displays a resource related to a specific theme and includes a link to a set of coding problems and tutorials. The app also features a dark mode toggle for a better user experience in low-light environments.


Time spent: 5 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **There is a unique theme for events or resources relevant to a specific community**
- [x] **At least 10 unique resources or events are displayed in a responsive card format**

The following **optional** features are implemented:

- [x] Buttons or links to a related resources are on each card component
- [x] The site is responsive for both desktop and mobile formats

The following **additional** features are implemented:

- [x] Dark mode toggle implemented to switch between light and dark themes
- [x] Responsive CSS design with flex layouts and media queries for optimal display on various devices

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='project-1_optimized.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Details on the GIF creation and optimization -->
GIF recorded using **QuickTime Player**, converted using **FFmpeg**, and optimized with **Gifsicle** for reduced file size.

### GIF Optimization Steps:
1. **Recorded screen** using **QuickTime Player** and exported as `project-1.mov`.
2. **Generated a high-quality color palette** to ensure smooth colors:
   ```bash
   ffmpeg -i project-1.mov -vf "palettegen" palette.png
    ```
3. **Converted the video to a GIF** using the generated palette:
   ```bash
   ffmpeg -i project-1.mov -i palette.png -filter_complex "fps=10,scale=800:-1:flags=lanczos[x];[x][1:v]paletteuse" project-1.gif
   ```
4. **Optimized the GIF** for web use with **Gifsicle**:
   ```bash
   gifsicle -O3 --lossy=80 project-1.gif -o project-1_optimized.gif
   ```

## Notes

- The primary challenge was implementing a seamless dark mode with proper contrast across all components.
- Ensuring responsiveness on both mobile and desktop required carefully structured CSS and media queries.
- Various CSS transitions (hover/focus effects) were added to enhance user interactions.


## License

    2025 Krishna Choudhary

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.