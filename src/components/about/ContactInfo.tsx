import getStyles from "../../Style";
import ryanResume from "../../assets/files/ryanResume.pdf";

const linkedIn = (
  <a href="https://www.linkedin.com/in/ryanpatel21/" className="contact-icons">
    <svg
      className="contact-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
    <span>My LinkedIn</span>
  </a>
);

const resume = (
  <a className="contact-icons" href={ryanResume} target="_blank">
    <svg
      className="contact-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
    </svg>
    <span>My Resume</span>
  </a>
);

const email = (
  <a
    className="contact-icons"
    href="mailto:ryan.patel21@imperial.ac.uk"
    target="_blank"
  >
    <svg
      className="contact-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
    </svg>
    <span className="contact-text">Email Me</span>
  </a>
);

const blog = (
  <a
    className="contact-icons"
    href="https://medium.com/@ryanpatel2001"
    target="_blank"
  >
    <svg
      className="contact-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z" />
    </svg>
    <span className="contact-text">My Blog</span>
  </a>
);

function ContactInfo() {
  return (
    <div id="contact" className={getStyles(styles, "ctn")}>
      <div className={getStyles(styles, "titleCtn")}>
        <span className={getStyles(styles, "title")}>Get in Touch!</span>
      </div>

      <div className={getStyles(styles, "divider")}></div>

      <div className={getStyles(styles, "infoCtn")}>
        <div>
          <div className={getStyles(styles, "collaborateCtn")}>
            Feel free to collaborate or reach out
          </div>
          <div className={getStyles(styles, "collaborateTextCtn")}>
            I love to create and collaborate on projects with people. Previous
            group projects include making an emulator and an assembler in C.
            Ongoing projects that I am undertaking include a discord bot for the
            Imperial Computing server, a Pintos project, and a public website to
            help creators find good colour palettes for their colour theme.
          </div>

          <div className={getStyles(styles, "linkButtonsCtn")}>
            {linkedIn}
            {resume}
            {email}
            {/* {blog} */}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  ctn: [
    "flex",
    "w-full",
    "h-full",
    "flex-col",
    "px-6",
    "sm:px-12",
    "md:flex-row",
    "md:items-center",
  ],
  collaborateCtn: [
    "font-bold",
    "mt-10",
    "sm:mt-16",
    "text-lg",
    "sm:text-xl",
    "md:mt-0",
    "px-3",
  ],
  collaborateTextCtn: ["mt-3", "px-3"],
  divider: ["m-4", "h-[2px]", "bg-black", "w-1/2", "self-center", "md:hidden"],
  infoCtn: [
    "flex",
    "md:h-full",
    "justify-center",
    "items-center",
    "md:flex-3",
    "md:ml-3",
    "md:pl-24",
    "md:pr-12",
    "md:border-l-2",
    "md:border-l-black",
  ],
  linkButtonsCtn: [
    "flex",
    "flex-wrap",
    "justify-center",
    "items-center",
    "mt-12",
    "w-full",
    "sm:px-5",
    "md:px-3",
    "lg:mt-24",
  ],
  title: ["font-bold", "text-2xl", "sm:text-4xl", "md:text-6xl"],
  titleCtn: [
    "py-2",
    "text-center",
    "md:pr-4",
    "md:flex-2",
    "md:h-full",
    "md:flex",
    "md:items-center",
    "md:justify-center",
  ],
};

export default ContactInfo;
