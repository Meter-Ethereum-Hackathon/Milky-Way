import React from "react";
import Image from "next/image";
import Link from "next/link";

function Drop() {
  function renderText() {
    return (
      <div className="container text-center">
        <div className="flex justify-center ">
          <div className="grid grid-cols-6">
            <p className=" text-white text-lg text-center antialiased pt-5 col-start-3 col-span-2 pb-5">
              {`Hold fast to dreams 
For if dreams die
Life is a broken-winged bird
That cannot fly.

Hold fast to dreams
For when dreams go
Life is a barren field
Frozen with snow.
- Langston Hughes`}
            </p>
          </div>
        </div>
        <Link href="/">
          <Image
            className="hover:cursor-pointer"
            src="/drop2.jpg"
            height={780}
            width={500}
          />
        </Link>
      </div>
    );
  }
  return <div className="Drop">{renderText()}</div>;
}

export default Drop;
