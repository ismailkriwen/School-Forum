import { Home, Mail, User, Users } from "lucide-react";

const SITE_NAME = "Kripsa";

const textColors = {
  Admin: "danger",
  Teacher: "success",
  Student: "default",
};

const colors = {
  Admin: "danger",
  Teacher: "success",
  Student: "default",
};

const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    label: "Messages",
    href: "/conversation",
    icon: Mail,
  },
  {
    label: "Members",
    href: "/members",
    icon: Users,
  },
];

export { NAV_LINKS, SITE_NAME, colors, textColors };
