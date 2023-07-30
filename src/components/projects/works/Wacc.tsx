import Project, { ProjectProps } from "../util/Project";
import wacc from "../../../assets/images/wacc/wacc.png";

const Template: ProjectProps = {
  title: "Wacc",
  images: [wacc],
  github: "https://gitlab.doc.ic.ac.uk/lab2223_spring/WACC_31",
  body: [
    `To compliment my commpilers course, I had the opportunity to work with 
        3 others on a full compiler for a made up language called WACC. This is 
        a While-like language that included features such as common data types 
        such as ints, booleans, chars, strings, arrays and pairs. It also
        supports functions, if statements and while loops`,
    `Overall, this was a great opportunity to learn about how to construct
        a language from scratch, along with the various stages of compilation.
        Given a raw .wacc file, we were able to perform lexical, syntax and 
        semantic analysis on the frontend. Available tools such as Parsley, a parser combinator
        were used in lexical and syntax analysis. Furthermore, an AST was 
        generated which aided in the backend of the compiler.`,
    `The backend consisted on traversing the AST using the visitor pattern, 
        and generating ARM assembly code to execute the program. This hence
        also allowed us to touch up on our ARM assembly knowledge. Furthermore, 
        through thorough integration tests, we were able to ensure that our 
        code was working as expected.`,
  ],
  feature: {
    heading: "Some Features",
    list: [
      "Lexical and syntax analysis using Parsley",
      "Parsley - a parser combinator",
      "Semantic analysis",
      "AST generation",
      "ARM assembly",
      "Full .wacc file compilation and executions",
      "Integration testing",
    ],
  },
};

function Wacc() {
  return <Project {...Template} />;
}

export default Wacc;
