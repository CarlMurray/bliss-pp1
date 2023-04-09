![Alt text](/assets/img/readme-img/cover-image.png "Cover image")
___
### __The production site is available at https://bliss.carlmurray.design OR https://main.d2k8k5ekazru51.amplifyapp.com__ (in case custom domain doesn't work)
___

# Table of Contents

- [Project Background](#project-background)
- [User Experience](#user-experience)
  - [Design](#design)
  - [Site Structure](#site-structure)
  - [Features](#features)
    - [Navigation Bar](#navigation-bar)
    - [Landing Content](#landing-content)
    - [Homepage](#homepage)
    - [Exercises](#exercises)
      - [Exercises in detail](#exercises-in-detail)
    - [About](#about)
    - [Contact](#contact)
    - [Footer](#footer)
    - [Responsiveness](#responsiveness)
    - [Future Features](#future-features)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
  - [Testing Process](#testing-process)
- [Bugs/Issues](#bugsissues)
  - [Resolved issues](#resolved-issues)
  - [Unresolved issues](#unresolved-issues)
- [Deployment](#deployment)
  - [Steps for deployment on AWS](#steps-for-deployment-on-aws)
- [Credits](#credits)
  - [Images/Content](#imagescontent)
    - [Yoga Exercise Images](#yoga-exercise-images)
    - [Meditation Exercise Images](#meditation-exercise-images)
    - [Illustrations](#illustrations)
  - [Favicon](#favicon)
  - [Other](#other)
  - [Educational resources](#educational-resources)
- [Acknowledgements](#acknowledgements)
___

# Project Background 
Bliss is a website that provides mindfulness, meditation and yoga content free of charge to users in the form of videos. The site aims to help users improve their mental and physical wellbeing by providing easy access to helpful resources that can assist them in developing and maintaining healthy habits.

The background of the project is based on the growing interest in holistic health and wellness practices among individuals worldwide. The COVID-19 pandemic has also highlighted the importance of maintaining a healthy mind and body, leading to a surge in the popularity of meditation, yoga and mindfulness practices.

The key goals of the site include providing a user-friendly platform that makes it easy for individuals to access quality content, sharing information about the benefits of these practices, and promoting mental health and wellbeing. The target audience for the site is anyone who is interested in mindfulness, meditation, and yoga practices, regardless of their experience level. The value provided to users of the site is access to quality content that can help them develop healthy habits, reduce stress, and improve their overall wellbeing.

# User Experience

## Design
- To guide the development process, wireframes and mockups were designed in Figma. These early designs provided a clear direction for the project, although the final build may differ slightly from the initial designs as various iterations were explored throughout development. 
- A muted colour palette was chosen to represent the site's values of calmness and peace, while creating an atmosphere of "bliss" for users. Coolors was used to generate the [presentation image](https://coolors.co/ffffff-fae5ce-f7e5d1-fcd3a3-f5cb82-e3b66a-7a5e40-3b3b3b-ff5f33) of the colour palette. 
- PT Serif was used for headings in the site and was chosen as its traditional appearance conveys a sense of elegance and sophistication, and perfectly matches the theme of mindfulness. Conversely, PT Sans was chosen for the body text as its simplicity and modernity provide balance to the serif typeface. Using two complimentary fonts, one for headings and one for body, creates a clear visual hierarchy of content for the user. 

![Alt text](/assets/img/readme-img/figma-screens.png "Figma screens")

![Alt text](/assets/img/readme-img/colour-palette.png "Colour palette")

![Alt text](/assets/img/readme-img//typeface.png "Typeface")

## Site Structure

Bliss has four primary pages - Home, Exercises, About and Contact. The default landing page is Home. Exercises, About and Contact are all accessible from the Navigation bar. CTAs featured throughout the site pages help users discover and navigate the site after completing a task - e.g. a "Get started" CTA features at the top and bottom of the Home page which lets users navigate straight to the Exercises page. 

Bliss also features a unique page for each Exercise. There are currently six of these pages. A "Back to Exercises" button features on each page to allow users to easily navigate and browse content.

Finally, there are two "Thank you" pages which provide feedback when a user submits the contact form or signs up for the newsletter.

![Alt text](/assets/img/readme-img/sitemap.png "Bliss sitemap")

## Features

### Navigation Bar
- The site features a responsive Navigation Bar which includes links to Home, Exercises, About and Contact. 
- Although clicking the logo brings users Home, a dedicated Home link is included in the Navigation Bar in line with UX best practices. 
- Other than Home, links are ordered by importance - Exercises is the main content of the site that users will interact with and as such comes before the About and Contact links.
- The active page a user is on is visually highlighted to help orient the user as they navigate the site.

### Landing Content
- The landing page shows a visual illustration of a person in a yoga pose along with the large headline and a short paragraph of descriptive text - these elements immediately communicate the intent of the site.
- There are two CTAs on the landing page - the primary CTA ("Get started") links to the "Exercises" page and enables users to quickly engage with the site's content. The secondary CTA ("Learn more") links to the "About" page so users can read more about the site's purpose and intent.

### Homepage
- On the Homepage, users are greeted with three concise paragraphs of text that are accompanied by engaging illustrations. These elements work in tandem to effectively communicate the value of the site to users, providing them with a clear understanding of the benefits that can be gained from utilising the resources available. 
- Additionally, located at the end of the Homepage, a prominent CTA enables users to seamlessly transition from the Homepage to the Exercises page, where they can begin exploring the available content in more detail.

![Alt text](/assets/img/readme-img/home-page.png "Home page")

### Exercises
- The site features an Exercises page which is where the main content of the site resides.
- To help users easily navigate through the available resources, the content is thoughtfully categorised by exercise type. To further enhance the user experience, a compelling combination of imagery and headlines is used to effectively communicate the theme of each video. This not only creates an aesthetically pleasing and visually engaging website but also helps users to quickly identify the content that is most relevant to their individual needs and interests.
- Located at the bottom of the page, there is a user-friendly Newsletter form that encourages users to subscribe for notifications about new content, once they have explored the existing site offerings. This feature enables users to stay up-to-date with the latest mindfulness, meditation and yoga resources available on the site, making it easier for them to maintain their healthy habits and continue to prioritise their wellbeing.
- The Newsletter form uses validation to ensure an email address is entered.
- Once submitted, users receive clear and informative feedback, and are directed to a Thank You page that features a prominent CTA designed to encourage them to continue exploring the site's content on the Exercises page.

![Alt text](/assets/img/readme-img/exercises-page.png "Exercises page")

#### Exercises in detail
- Upon clicking an Exercise card, users are seamlessly directed to a dedicated page that displays the featured video content and a succinct description. This streamlined user flow ensures that individuals can easily access the resources they need, while also providing them with the necessary context to make informed decisions about which content is most relevant to their needs. 
- To enhance the user experience even further, a convenient Back button is prominently featured on the page, allowing users to effortlessly navigate back to the main Exercises page.

![Alt text](/assets/img/readme-img/exercise-video.png "Exercise content")

### About
- The site has an About page that describes the motivation and inspiration behind its creation, providing users with a deeper understanding of the site's purpose and mission. Here, users can learn more about the origins of the site and the driving forces that led to its establishment, helping them to connect with the content on a more personal level.
- There are two CTAs in the landing section - the primary CTA ("Get started") links to the "Exercises" page and enables users to quickly engage with the site's content. The secondary CTA ("Learn more") scrolls down the page and brings users straight to the content so they can read more about the site's purpose and intent.

![Alt text](/assets/img/readme-img/about-page.png "About page")

### Contact
- The site features a user-friendly contact form that is both intuitive and straightforward, making it simple for individuals to submit their inquiries without being bogged down by having to enter unnecessary details. 
- The form uses validation to ensure all input fields are complete and data is valid.
- Once submitted, users receive clear and informative feedback, and are directed to a Thank You page that features a prominent CTA designed to encourage them to continue exploring the site's content on the Exercises page.

![Alt text](/assets/img/readme-img/contact-page.png "Contact page")

### Footer
- Located in the footer section, users can easily find social media links to the site's official Instagram, Facebook, and Twitter pages. This convenient feature not only allows users to stay up-to-date with the latest news and updates from the site, but also enables them to engage with other like-minded individuals who share a common interest in mindfulness, meditation, and yoga practices.

### Responsiveness
- The site was designed to be responsive and function on a range of screen sizes from 320px wide and above.
- The site content is contained within a container of the lesser of 80vw / 1440px to ensure the site is easily readable on large screen sizes.

### Future Features
There are a number of features that would improve the User Experience that I would like to implement in the future:
- Signup/Login functionality with user accounts would enable users to save content they like and track their activity.
- User generated content would allow users to contribute to the bliss community.
- Comments and reviews would allow users to engage with the content and provide recommendations to other users.

# Technologies Used
I used the following technologies, platforms and support in building my project:
- Wireframes and mockups were designed in [Figma](https://www.figma.com/)
- The website is built with [HTML](https://html.spec.whatwg.org/)/[CSS](https://www.w3.org/Style/CSS/Overview.en.html) only.
- The Code Institute modules/lessons aided my learning and many of the concepts learned were applied in this project
- Although not part of the Code Institute curriculum, I used various online resources to learn [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) which plays an instrumental role in the styling of the website.
- [Stack Overflow](https://stackoverflow.com/) was used for troubleshooting and debugging throughout the project, as referenced.
- [MacOS VoiceOver](https://bbc.github.io/accessibility-news-and-you/assistive-technology/testing-steps/voiceover-mac.html) was used for accessibility testing.
- [Git](https://git-scm.com/) was used for version control
- [GitHub](https://github.com/) was used for the project repository
- [Google Fonts](https://fonts.google.com/) was used for all fonts on the site
- [Storyset.com](https://storyset.com/) and [Unsplash](https://unsplash.com/) were the sources of all imagery/illustrations
- [FontAwesome](https://fontawesome.com/v4/) was used for the social media icons which then had additional styling applied to them
- [Favicon Generator](https://favicon.io) was used to generate the favicon used
- The site is hosted on [AWS Amplify](https://aws.amazon.com/amplify/)
- Custom domain registered with [NameSilo](https://www.namesilo.com/), with a specific subdomain for this project (https://bliss.carlmurray.design)
- [Google Analytics](https://analytics.google.com/analytics/web/) was linked to the site to track site traffic and user behaviour.

# Testing
- Responsiveness was tested with [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) and by testing on various devices (mobile, tablet, laptop, desktop). [Am I Responsive](https://ui.dev/amiresponsive?url=https://bliss.carlmurray.design) and [Responsive Design Checker](https://www.responsivedesignchecker.com/) was also used to test responsiveness.
- All HTML files were passed through the W3C validator with no errors ([example validation of Home page](https://validator.w3.org/nu/?doc=https://bliss.carlmurray.design/index.html))
- The CSS stylesheet was passed through the W3C validator with no errors ([Validation of styles.css](https://jigsaw.w3.org/css-validator/validator?uri=bliss.carlmurray.design/assets/css/styles.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en))
- W3C Spell Check Validator was used to check for grammatical errors.
- The website was tested on major browsers including Chrome, Safari, Firefox and Edge as detailed in [Testing Process](#testing-process) below.
- All user flows were tested in depth including navigating through content, clicking CTAs and links, consuming content, video playback and form submission.
- All forms were tested to ensure validation was present and that forms could be submitted without error
- Lighthouse was used to test for Performance, Accessibility, Best Practices and SEO and adjustments were made to improve test results. [Example of Home page test results here](https://pagespeed.web.dev/analysis/https-bliss-carlmurray-design/cyx73ltgkz?form_factor=desktop)
- Accessibility testing was conducted by navigating the site and performing tasks using keyboard navigation and a screen reader (MacOS VoiceOver)

## Testing Process
| Test                | Action                   | Success Criteria  |
| -------------       |-------------             | -----|
| Homepage loads      | Navigate to website URL  | Page loads < 3s, no errors |
| Links            | Click on each Navigation link, CTA, button, logo, footer link, video   | Correct page is loaded/correct action performed |
| Form validation  | Enter data into each input field, ensure only valid data is accepted | Form doesn't submit until correct data entered, error message shown |
| Form submission | Complete each form and submit | Form successfully submits, feedback page shown |
| Responsiveness | Resize viewport window from 320px upwards with Chrome Dev Tools. Use Responsive Design Checker to test various mobile, tablet and large screen sizes | Page layout remains intact and adapts to screen size as intended |
| Accessibility | Navigate the site with keyboard and screen reader | Tab index works in correct order, website is navigable, content/aria-labels read aloud |
| Lighthouse | Perform Lighthouse test on each page | Score of > 89 on Performance, Accessibility, Best Practices, SEO |
| Browser compatibility | Test links, layout, appearance, functionality and above Tests on Chrome, Safari, Firefox and Edge. | Website looks and functions as intended and passes all tests above
--------

![Alt text](/assets/img/readme-img/html-validation.png "HTML validation (for Home page)")
![Alt text](/assets/img/readme-img/css-validation.png "CSS Validation")
![Alt text](/assets/img/readme-img/lighthouse-test.png "Test results for Home page")

# Bugs/Issues
Debugging and troubleshooting were done constantly throughout development, however there were a number of noteworthy issues:

## Resolved issues
- During development, the site was tested on an iPhone XS Max to check responsiveness. It was noted that the Newsletter Subscribe CTA and Contact Form CTA were not displaying the correct styling compared to the Chrome DevTools Inspector, and did not have the correct border radius. After further experimentation and testing, a solution was found on Stack Overflow [See Stack Overflow](https://stackoverflow.com/questions/20640182/iphone-overriding-all-of-my-styles-on-an-inputtype-submit). The cause of the "bug" relates to how Safari on an iPhone renders `<input type="submit">` and was fixed by adding "-webkit-appearance:none;" to the element's CSS rule. 

![Alt text](/assets/img/readme-img/bug-cta.png "Bug with CTA on iPhone Safari")

- When testing the site on Firefox, it was observed that images in the main content cards were significantly smaller in size than intended. This was fixed by changing the `width` property of the `img` to `max-width`.

## Unresolved issues
- As the site was tested on different browsers and devices, it was noted that the dotted `<hr>` element joining content cards was appearing as square/rectangular dashes rather than circular dots on iOS browsers. Unfortunately there is currently no natively supported solution for this problem so it was left as is, with the intention of replacing the dots with an SVG in future. [See Stack Overflow](https://stackoverflow.com/questions/11280676/how-to-create-dotted-border-with-round-dots-in-webkit-browsers)

![Alt text](/assets/img/readme-img/bug-hr.png "Bug with `<hr>` element")

- When testing on different browsers, it was observed that the font weight of the Navigation Links appeared heavier in Safari than in Chrome and as intended. It was found that this is due to the rendering engine of Safari and there is no solution for this "issue". Adding `-webkit-font-smoothing: antialiased;` made a minor visual improvement.
- The site was tested on a 42" LG Smart TV experimentally. The native LG web browser does not render certain elements and styles correctly and browser support is limited. Designing for smart TVs and non-standard browsers was outside the scope of this project but future revisions may address this functionality.
- During deployment, an attempt was made to set up CloudFlare on the site, however this was unsuccessful. It is believed that there were issues with DNS records and Nameservers as the main domain is hosted with another provider, along with lengthy DNS propagation that prevented this from functioning as intended and as such the initiative was abandoned and deemed unnecessary for this project.

# Deployment
- A DNS record for a subdomain of my portfolio, carlmurray.design, was created for this project.
- The GitHub repository was connected to AWS Amplify for hosting.
- Custom domain (https://bliss.carlmurray.design) was added with an SSL certificate on AWS Amplify.
- __The production site is available at https://bliss.carlmurray.design OR https://main.d2k8k5ekazru51.amplifyapp.com__

### Steps for deployment on AWS:
- Navigate to AWS Amplify dashboard (sign-up required)
- Select "New app" - "Host Web App"
![Alt text](/assets/img/readme-img/deployment-1.png "Deployment")

- Connect GitHub 
![Alt text](/assets/img/readme-img/deployment-2.png "Deployment")
- Select repository, main branch
![Alt text](/assets/img/readme-img/deployment-3.png "Deployment")

- Click checkbox and then Next
![Alt text](/assets/img/readme-img/deployment-4.png "Deployment")

- Click "Save and deploy"
![Alt text](/assets/img/readme-img/deployment-5.png "Deployment")

- Optional: Add a custom domain through the "Domain management" tab

# Credits

## Images/Content

### Yoga Exercise Images: 
- https://unsplash.com/photos/nqUHQkuVj3c
- https://unsplash.com/photos/xB4ExGcUai0
- https://unsplash.com/photos/rOn57CBgyMo

### Meditation Exercise Images:
- https://unsplash.com/photos/ktPKyUs3Qjs
- https://unsplash.com/photos/dOhJtfXJZfw
- https://unsplash.com/photos/G-JJy-Yv_dA

### Illustrations:
- https://storyset.com/illustration/stress/pana
- https://storyset.com/illustration/yoga-practice/pana
- https://storyset.com/illustration/meditation/rafiki
- https://storyset.com/illustration/mental-health/pana
- https://storyset.com/illustration/enthusiastic/pana
- https://storyset.com/illustration/feeling-blue/pana
- https://storyset.com/illustration/team-spirit/pana
- https://storyset.com/illustration/high-five/pana
- https://storyset.com/illustration/letter/bro

## Favicon
- [Favicon Generator](https://favicon.io)

## Other
- Colour palette presentation image: [Coolors](https://coolors.co/ffffff-fae5ce-f7e5d1-fcd3a3-f5cb82-e3b66a-7a5e40-3b3b3b-ff5f33)
- Social icons: [FontAwesome](https://fontawesome.com/v4/)
- Fonts: [Google Fonts](https://fonts.google.com/)

## Educational resources
- [MDN Documentation](https://developer.mozilla.org/en-US/)
- [W3Schools](https://www.w3schools.com/)
- [developedbyed](https://www.youtube.com/@developedbyed) (YouTube)
- [Flexbox Zombies](https://mastery.games/post/flexboxzombies2/)

# Acknowledgements

This project was completed as my Portfolio Project 1 submission for the Full Stack Web Developer (eCommerce) Diploma at the Code Institute. I would like to thank my mentor [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/), the Code Institute team and the Slack community for their support throughout this project.