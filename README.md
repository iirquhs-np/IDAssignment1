# M1LDL1FE Band Site

Access the site here: https://github.shuqri.xyz/IDAssignment1/

This site's purpose is a one-stop shop for followers of the band to gather information. There are a number of features that 
are useful to the fans. An example would be the merch page, where fans can see the merchandise on sale.

## Design Process

I had to design a simple, yet effective site for the band's fan base, and others who may just be browsing around.

I decided to not overcrowd the site with a lot of information by splitting the content into different subpages. The site 
also had to be easy to read and hence the font is in sans-serif. 


Some user stories:
- As a fan, I go to the merch page and browse, so that I can buy their merchandise.
- As a bar owner, I go to the contact page and fill in the form, so that I can book them for a show.
- As a 'local bands' writer, I go to the band page and read up on the history, so I can write an article on them.

With this thought process, I made a wireframe to give myself a rough idea on how I should have the website layout to be.

Adobe XD wireframe link: https://xd.adobe.com/view/5d49ca75-b002-41b2-b911-22fa13caeb6d-081a/

## Features

The website has a total of 5 HTML pages; index, band, merch, contact and thanks. These are the content for each of the page:

### Existing Features
- **SITE-WIDE FEATURES:**
  - The header consists of the band's name and the navbar for ease of navigation.
  - The footer contains the copyright notice and the social media links of the band for users to find their Instagram or Facebook accounts easier.
- **INDEX.HTML:**
  - In this page, there are 3 sections which are the showcase, promotions and the shows.
    - The showcase promotes the band's latest activity.
    - The promotions section is where the band can display any of their work there.
    - The shows section is where the band can inform fans of their live shows.
- **BAND.HTML**
  - This page features the band's history and its members.
- **MERCH.HTML**
  - This page is where users can find the merchandise that the band is selling.
  - There is a feature where it allows users to filter through the numerous merchandise there are using a search box.
- **CONTACT.HTML**
  - This page is where users can contact the band through a form, either for general enquiries or for booking purposes.
  - The form in this page is working and live.
    - (This contact form will only work at the official site and not offline.)
- **THANKS.HTML**
  - This page is a “Thank You” page when after the user submits the form in the aforementioned page.
  - This page will automatically redirect the user to the contact page after 3 seconds.

### Features Left to Implement
- **ADDITIONS TO MERCH.HTML**
  - There can be an "Add to cart" button for each merchandise where it will add it into a shopping cart.
  - After that, it will automatically calculate the total and present to you the amount payable.

## Technologies Used
- HTML
- CSS
- JavaScript
- [FormSubmit](https://formsubmit.co/)
    - This project uses **FormSubmit** to make HTML forms live.


## Testing
The site has been tested using the W3Schools validator with no major issues.
- https://validator.w3.org/
- https://jigsaw.w3.org/css-validator/

Some testing process that you can go through:

1. Contact Form:
    1. Go to the "Contact" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that you will be redirected to a CAPTCHA page.
    5. After this you will see a “Thank You” page that lasts for 3 seconds, and then you will be redirected back to the contact page.
    

The project will also automatically shrink the page to an appropriate size when the browser size gets smaller.

## Credits

### Content
- Most content are sourced from: https://www.m1ldl1fe.com/
- Spotify tracks: https://open.spotify.com/artist/4dDWr3bmcGdlbLsWofWail/
- [Montserrat](https://fonts.google.com/specimen/Montserrat) made by Google Fonts
- [Terra](https://www.colourlovers.com/palette/292482/Terra) colour palette made by [GlueStudio](https://www.colourlovers.com/lover/GlueStudio)


### Media
- The photos used in this site were obtained from:
  - **Home**
    - https://asialive365.com/interview-then-now-talking-the-small-lanes-with-m1ldl1fe/
    - https://www.esquiresg.com/m1ldl1fe-dawn-to-dusk-music-playlist-52/
    - https://www.manilaconcertjunkies.com/2020/06/small-lanes-m1ldlife.html/
  - **Band**
      - https://twitter.com/m1ldl1fe/
      - https://www.lifeinarpeggio.com/blog/dsml-david-siow-interview-pop-electronic-producers-musicians-singapore/
      - https://www.linkedin.com/in/peng-sing-tan-09966558/
      - https://www.businesstimes.com.sg/lifestyle/arts-entertainment/cultivating-a-love-for-the-arts/
      - https://www.instagram.com/potatetomate_/
  - **Merch**
    - https://www.m1ldl1fe.com/
  - **Footer**
    - Facebook's icons made by [Freepik](https://www.freepik.com) from https://www.flaticon.com/
    - Instagram's icons made by [edt.im](https://www.flaticon.com/authors/edtim) from https://www.flaticon.com/

### Acknowledgements

Thank you to my lecturer, Mr Suresh, for giving us encouragement during the class sessions!

A big thank you to my friends for helping me test the site and also by giving me suggestions on how I can improve it better.

I received inspiration from the original m1ldl1fe site.

For the contact form, I saw a use case at [this GitHub repository](https://github.com/bluesoulian/meokja.sg) where he used FormSubmit to make the 
form work.

- Navigation bar:
  - https://www.youtube.com/watch?v=8QKOaTYvYUA&ab_channel=KevinPowell
- Merch filtering:
  - https://www.w3schools.com/howto/howto_js_filter_lists.asp/
- Contact form:
  - https://www.w3schools.com/howto/howto_css_contact_form.asp
