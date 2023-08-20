

export default function AboutMe(props) {
  
  return (
    <>
    <div className={`mb-3 text-${props.mode === "light" ? "black" : "light"}`}>
    <h1>About Us</h1>
    <hr />
    <p>Welcome to TextUtils - Your Ultimate Text Transformation Hub!</p>
    <p>At TextUtils, we're passionate about transforming text into an array of styles and formats that suit your needs. Whether you're looking to convey your message with impact, ensure consistency, or simply have fun with your text, our suite of powerful text transformation features has got you covered.</p>
    <p>Our Features:</p>
    <ul>
      <li><b>Text Transforms: </b>Quickly and effortlessly change the case of your text by converting it to UPPERCASE for emphasis, lowercase for a subtle touch, or Sentence Case for polished communication.</li>
      <li><b>Space Optimization:  </b>With our Extra Spaces Removal tool, say goodbye to unnecessary gaps in your text. Enjoy a clean, streamlined appearance that enhances readability.</li>
      <li><b>Replace and Revamp:  </b>Transform your content by replacing specific words or phrases. Craft engaging narratives and messages that resonate with your audience.</li>
      <li><b>Different Themes and Dark Mode:  </b>Experience a world of visual charm with TextUtils's unique features. Different Themes and the alluring Dark Mode. Choose from a variety of themes that match your style, and switch to Dark Mode for a soothing and comfortable browsing experience. Customize your view, enhance readability, and make every interaction a delight.</li>
      <li><b>Stay Tuned for More: </b>We're continuously working on introducing exciting new features that will add even more versatility to your text transformation experience.</li>
    </ul>
    <p>At TextUtils, we're committed to providing you with a seamless and delightful user experience. As text enthusiasts ourselves, we understand the significance of a well-structured message. Whether you're a student, a professional, a creative artist, or anyone in between, our tools are designed to make your text shine.</p>
    <p>Join us on this journey as we empower you to master the art of text transformation. We're here to make your words stand out, so you can leave a lasting impact.</p>
    <p>Transform your text with style at TextUtils today!</p>
    <p>Warm Regards, <br/>Tayyab :)</p>
    <hr />
    </div>
      
    </>
  );
}
