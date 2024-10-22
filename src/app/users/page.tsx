import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Companies from "@/components/Users/Companies";
import Individuals from "@/components/Users/Individuals";
import Merchants from "@/components/Users/Merchants";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export const metadata: Metadata = {
  title: "Next.js Tables Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const UsersPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Users" />

      <div className="flex flex-col gap-10">
        <Companies />
        <Individuals />
        <Merchants />
      </div>
    </DefaultLayout>
  );
};

export default UsersPage;
