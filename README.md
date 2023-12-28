![Alt text](/assets/img/readme-img/cover-image.png "Cover image")

___

# Project Background 
Bliss is a website that provides mindfulness, meditation and yoga content free of charge to users in the form of videos. The site aims to help users improve their mental and physical wellbeing by providing easy access to helpful resources that can assist them in developing and maintaining healthy habits.

The background of the project is based on the growing interest in holistic health and wellness practices among individuals worldwide. The COVID-19 pandemic has also highlighted the importance of maintaining a healthy mind and body, leading to a surge in the popularity of meditation, yoga and mindfulness practices.

The key goals of the site include providing a user-friendly platform that makes it easy for individuals to access quality content, sharing information about the benefits of these practices, and promoting mental health and wellbeing. The target audience for the site is anyone who is interested in mindfulness, meditation, and yoga practices, regardless of their experience level. The value provided to users of the site is access to quality content that can help them develop healthy habits, reduce stress, and improve their overall wellbeing.

___

# User Experience

## Design
- To guide the development process, wireframes and mockups were designed in Figma. These early designs provided a clear direction for the project, although the final build may differ slightly from the initial designs as various iterations were explored throughout development. 
- A muted colour palette was chosen to represent the site's values of calmness and peace, while creating an atmosphere of "bliss" for users. Coolors was used to generate the [presentation image](https://coolors.co/ffffff-fae5ce-f7e5d1-fcd3a3-f5cb82-e3b66a-7a5e40-3b3b3b-ff5f33) of the colour palette. 

![Alt text](/assets/img/readme-img/figma-screens.png "Figma screens")

![Alt text](/assets/img/readme-img/colour-palette.png "Colour palette")


## Overview

## Responsiveness
- The site was designed to be responsive and function on a range of screen sizes from 320px wide and above.
- The site content is contained within a container of the lesser of 80vw / 1440px to ensure the site is easily readable on large screen sizes.
- Responsiveness was tested with [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) and by testing on various devices (mobile, tablet, laptop, desktop).

# Technologies Used
I used the following technologies, platforms and support in building my project:
- Wireframes and mockups were designed in [Figma](https://www.figma.com/)
- The website is built with HTML, CSS, JavaScript and jQuery.
- I used various online resources to learn [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) which plays an instrumental role in the styling of the website.
- [Stack Overflow](https://stackoverflow.com/) was used for troubleshooting and debugging throughout the project, as referenced.
- [Git](https://git-scm.com/) was used for version control
- [Google Fonts](https://fonts.google.com/) was used for all fonts on the site
- [Storyset.com](https://storyset.com/) and [Unsplash](https://unsplash.com/) were the sources of all imagery/illustrations
- [FontAwesome](https://fontawesome.com/v4/) was used for the social media icons which then had additional styling applied to them
- [Favicon Generator](https://favicon.io) was used to generate the favicon used

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

# Reflection
- This project was a great opportunity to learn the fundamentals of web design, including HTML, CSS, and JavaScript. In addition, diving into jQuery added a new layer of knowledge and practical skills to my toolkit. It was a hands-on experience that not only broadened my understanding of web development but also allowed me to apply what I learned in a real-world context. Overall, it was a valuable project that has increased my proficiency in essential web design technologies.


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
