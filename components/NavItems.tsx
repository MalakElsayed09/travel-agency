import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";
import { cn } from "~/lib/utils";

const NavItems = () => {
  const user = {
    name: "Adrian",
    email: "contact@gmail.com",
    imageUrl: "/assets/images/david.webp",
  };
  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img
          src="/public/assets/icons/logo.svg"
          alt="logo"
          className="w-8 h-8"
        />
        <h1>Tourly</h1>
      </Link>
      <div className="container">
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn("group nav-item", {
                    "bg-primary-100 !text-white": isActive,
                  })}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 w-6 h-6 group-hover:invert ${
                      isActive ? "brightness-0 invert" : "text-dark-200"
                    }`}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <footer className="nave-footer">
          <img
            src={user?.imageUrl || "assets/images/david.webp"}
            alt={user?.name || "David"}
          />
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
