import React from "react";
import profilePicture from "../../../static/assets/images/bio/Headshot.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et
        doloribus quasi necessitatibus vero aliquam eaque dolorem impedit. Sed
        in veritatis sunt eaque, reiciendis a perferendis qui! Nisi, deserunt?
        Reiciendis beatae est ex aut porro illo nesciunt fugit laborum autem
        vel, voluptatem rerum magni ducimus nobis quos architecto quisquam
        distinctio itaque, impedit ipsa vitae facere omnis sit temporibus.
        Cupiditate a voluptas repudiandae minima. Sed omnis autem a excepturi
        reprehenderit commodi blanditiis! Eligendi vero totam est sint incidunt
        consequatur id, eveniet doloribus blanditiis perferendis repellat
        perspiciatis ullam, aperiam autem? Exercitationem error mollitia ipsum
        quae sequi atque voluptatum, ad expedita reprehenderit id a, quasi
        officia harum ex assumenda! Quae exercitationem magnam, perspiciatis
        nisi commodi ipsa mollitia ex rerum, fugiat ducimus ea asperiores quis
        repudiandae totam, provident optio aperiam ipsum? Corporis iste veniam
        modi dolore aliquid nam omnis, asperiores, nesciunt doloribus in
        mollitia nihil dolorum corrupti suscipit ex deleniti tempore excepturi
        labore quaerat.
      </div>
    </div>
  );
}
