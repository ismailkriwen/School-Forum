import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";
import { Role } from "@prisma/client";
import { redirect } from "next/navigation";
import CategoriesPage from "./categories/page";

const AdminPage = async () => {
  const session = await getAuthSession();
  if (!session || !session.user.groups.includes(Role.Admin)) redirect("/");

  return <CategoriesPage />;
};

export default AdminPage;
