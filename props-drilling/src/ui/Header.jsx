import React from "react";

export default function Header({ firstName, age, lastName, person }) {
  //   console.log(props);
  //   const { firstName, age, lastName } = props;
  return (
    <div>
      <h1>Header</h1>
      <p>
        Person Name: {firstName} {lastName}
      </p>
      <p>{age}</p>
      <h3>
        New Person; {person.name} {person.age} {person.email}
      </h3>
    </div>
  );
}

// export function NavBar() {
//   return (
//     <>
//       <h2>NavBar</h2>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
//         architecto rerum temporibus a accusantium dignissimos hic aliquam
//         voluptas, eveniet et?
//       </p>
//     </>
//   );
// }

// export function Logo() {
//   return (
//     <>
//       <h3>Logo</h3>
//     </>
//   );
// }
