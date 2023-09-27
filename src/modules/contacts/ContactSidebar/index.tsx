import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

// /contacts -> Layout - ContactSidebar
// /contacts/form -> Layout - ContactSidebar - ContactForm(Outlet)
const ContactSidebar = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <aside style={{ width: "200px" }}>
        <h2>Contacts</h2>
        <ul>
          <li>
            <Link to="/contacts/form">Form</Link>
          </li>
          <li>
            <Link to="/contacts">List</Link>
          </li>
        </ul>
      </aside>
      <section>
        <Suspense
          fallback={<div>Loading...</div>}
        >
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};

export default ContactSidebar;
