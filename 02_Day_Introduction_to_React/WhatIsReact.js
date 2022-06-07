/* 
  React is javascript library that helping creating UI for website.

  Library is bunch of code that help solve certain problem that already solved and coded by some people.

  single page application mean we have only 1 page / html that we can tinkering with.

  Components is bits of code that creating UI, and it reusable (MODULAR).

  Latest version of react, is stable version, release by people maintaining react library.

  DOM is Document Object Model, basically it like a tree list that html create when load to browser.

  React virtual DOM is mimicking real DOM but the point is with virtual DOM we can re-render some item if it changed with low resource because React Virtual DOM process their jobs just to compare and only changing the that only value without re-rendering the real DOM (Expensive Task for browser, can cause browser lagging if we directly changing the real DOM).

  Web app compose of HTML CSS JS, even database for complex website.

  Why react -> it reusable (Components base), open source, jobs opportunity.

  React and Vue have same popularity but i hear Vue more DX friendly (easy learning curve than React).

  Html is skelekton of website.

  We can write html normally with inside JSX

  HTML attribut like class, id, style, href, src, ...

  JSX is javacript like XML, it just to long to create one element with react createElement and we just want focusing and imagining like we create normal html (more creativity)

  Babel is javascript library that transpile JSX to normal Javascript.

  Transpiler is program that convert code to another code.

  JSX element is variable containing html like structure.

  const name = "alexander";
  const nameElement = <p>{name}</p>; JSX element example.

  const fullName = "alexander";
  const country = "Australia";
  const title = "Chem Eng";
  const gender = "Male";
  const email = "alex@mail.com";
  const phone = "+338002399";

  const h1 = <h1>{fullName}</h1>;
  const paragrpah = <p>I {gender} and live in {country} my degree is {title} you can contact me on {email}, {phone}.</p>;

  const copy = "Copyright 2022";
  const footer = <footer>{copy}</footer>;

  const style = {
    background-color: 'tomatto',
  }

  const main = <main style={style}></html>;

  const footerStyle = {
    height: '120px',
  }

  const footer = <footer style={footerStyle}></footer>;

  ? Inline code
  const footer = <footer style={{height: '120px',}}></footer>;

  everytime we want injecting javascript to JSX element we must use curly brackets {}.

   */
