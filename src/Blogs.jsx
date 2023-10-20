import React from "react";
import Blog from "./Blog";
import pics1 from "./Letme-Images/blog-1.jpg";
import pics2 from "./Letme-Images/blog-2.jpg";
import pics3 from "./Letme-Images/blog-3.jpg";
import { FaUser } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

const Blogs = () => {
  return (
    <div className="blog">
      <h3>MY BLOG</h3>
      <div className="blogs">
        <Blog
          image={pics1}
          bigText={"Web Template Customization"}
          icon1={() => <FaUser />}
          small={"Admin"}
          icon2={() => <FaCalendarDays />}
          smallText={"22 Feb, 2018"}
          lorem={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis suscipit sapiente hic nam quibusdam molestias voluptate quas quasi? Eius inventore culpa, ad eveniet blanditiis quasi!"
          }
        />
        <Blog
          image={pics2}
          bigText={"Web Template Customization"}
          icon1={() => <FaUser />}
          small={"Admin"}
          icon2={() => <FaCalendarDays />}
          smallText={"24 Feb, 2018"}
          lorem={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis suscipit sapiente hic nam quibusdam molestias voluptate quas quasi? Eius inventore culpa, ad eveniet blanditiis quasi!"
          }
        />
        <Blog
          image={pics3}
          bigText={"Web Template Customization"}
          icon1={() => <FaUser />}
          small={"Admin"}
          icon2={() => <FaCalendarDays />}
          smallText={"26 Feb, 2018"}
          lorem={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis suscipit sapiente hic nam quibusdam molestias voluptate quas quasi? Eius inventore culpa, ad eveniet blanditiis quasi!"
          }
        />
      </div>
      <button>Browse More</button>
    </div>
  );
};

export default Blogs;
